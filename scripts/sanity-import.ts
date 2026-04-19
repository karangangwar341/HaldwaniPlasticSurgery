/**
 * Sanity Bulk Import Script
 *
 * Prerequisites:
 *   1. Create a Sanity project at https://sanity.io
 *   2. npm install @sanity/client tsx --save-dev
 *   3. Create a write token in Sanity → Project → API → Tokens
 *   4. Add to .env.local:
 *        NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
 *        NEXT_PUBLIC_SANITY_DATASET=production
 *        SANITY_WRITE_TOKEN=your_write_token
 *
 * Run:
 *   npx tsx scripts/sanity-import.ts
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve } from "path";

// Manually parse .env.local (works regardless of tsx/Node version)
try {
  const envFile = readFileSync(resolve(process.cwd(), ".env.local"), "utf-8");
  for (const line of envFile.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const k = trimmed.slice(0, eqIdx).trim();
    const v = trimmed.slice(eqIdx + 1).trim();
    if (k && !process.env[k]) process.env[k] = v;
  }
} catch {
  console.error("❌ Could not read .env.local — make sure you run this from the project root.");
  process.exit(1);
}

// ── Import sample data ────────────────────────────────────────────────────────
import {
  services,
  testimonials,
  results,
} from "../src/lib/sampleData";

// ── Sanity client ─────────────────────────────────────────────────────────────
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || projectId === "your_project_id") {
  console.error(
    "❌ NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Add it to .env.local"
  );
  process.exit(1);
}
if (!token) {
  console.error(
    "❌ SANITY_WRITE_TOKEN is not set. Create a write token in Sanity → API → Tokens"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ── Helpers ───────────────────────────────────────────────────────────────────
let keyCounter = 0;
function key() {
  return `k${++keyCounter}`;
}

/** Convert a plain string to a minimal Portable Text block array */
function toBlocks(text: string) {
  return [
    {
      _type: "block",
      _key: key(),
      style: "normal",
      markDefs: [],
      children: [{ _type: "span", _key: key(), text, marks: [] }],
    },
  ];
}

// ── Import Services ───────────────────────────────────────────────────────────
async function importServices() {
  console.log(`\n📋 Importing ${services.length} services...`);
  const transaction = client.transaction();

  for (const s of services) {
    const doc = {
      _type: "service",
      _id: `service-${s.slug}`,
      title: s.title,
      slug: { _type: "slug", current: s.slug },
      category: s.category,
      shortDescription: s.shortDescription,
      overview: toBlocks(s.overview),
      whyNeeded: toBlocks(s.whyNeeded),
      eligibility: s.eligibility,
      procedureSteps: s.procedureSteps.map((step) => ({
        _key: key(),
        step: step.step,
        title: step.title,
        description: step.description,
      })),
      recoveryTimeline: s.recoveryTimeline.map((r) => ({
        _key: key(),
        period: r.period,
        description: r.description,
      })),
      results: toBlocks(s.results),
      safetyNotes: toBlocks(s.safetyNotes),
      faqs: s.faqs.map((f) => ({
        _key: key(),
        question: f.question,
        answer: f.answer,
      })),
      seoTitle: s.seoTitle,
      seoDescription: s.seoDescription,
      // internalLinks (references) will be wired up in the second pass below
    };
    transaction.createOrReplace(doc as Parameters<typeof transaction.createOrReplace>[0]);
  }

  await transaction.commit({ visibility: "async" });
  console.log(`✓ ${services.length} services imported`);
}

/** Second pass: wire up internalLinks (relatedServices → document references) */
async function wireRelatedServices() {
  console.log("\n🔗 Wiring related service references...");
  const transaction = client.transaction();

  for (const s of services) {
    if (!s.relatedServices?.length) continue;

    const internalLinks = s.relatedServices.map((slug) => ({
      _key: key(),
      _type: "reference",
      _ref: `service-${slug}`,
    }));

    transaction.patch(`service-${s.slug}`, { set: { internalLinks } });
  }

  await transaction.commit({ visibility: "async" });
  console.log("✓ Related service references wired");
}

// ── Import Testimonials ───────────────────────────────────────────────────────
async function importTestimonials() {
  console.log(`\n💬 Importing ${testimonials.length} testimonials...`);
  const transaction = client.transaction();

  testimonials.forEach((t, i) => {
    transaction.createOrReplace({
      _type: "testimonial",
      _id: `testimonial-${i + 1}`,
      name: t.name,
      text: t.text,
      rating: t.rating,
      procedure: t.procedure,
    });
  });

  await transaction.commit({ visibility: "async" });
  console.log(`✓ ${testimonials.length} testimonials imported`);
}

// ── Import Results (Before/After) — text fields only ─────────────────────────
// NOTE: Images must be uploaded manually via Sanity Studio
// (the heroImage URLs are placeholder Unsplash links, not uploadable via API without extra steps)
async function importResults() {
  console.log(`\n🖼  Importing ${results.length} result captions...`);
  const transaction = client.transaction();

  results.forEach((r, i) => {
    transaction.createOrReplace({
      _type: "result",
      _id: `result-${i + 1}`,
      caption: r.caption,
      locationTag: r.location,
      // service reference (links to the imported service doc)
      service: {
        _type: "reference",
        _ref: `service-${r.serviceSlug}`,
      },
      // beforeImage / afterImage: upload manually in Studio or extend this
      // script using client.assets.upload() with the Unsplash URLs
    });
  });

  await transaction.commit({ visibility: "async" });
  console.log(`✓ ${results.length} result records imported (images need manual upload)`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n🚀 Starting Sanity import`);
  console.log(`   Project: ${projectId}`);
  console.log(`   Dataset: ${dataset}\n`);

  await importServices();
  await wireRelatedServices();
  await importTestimonials();
  await importResults();

  console.log("\n✅ Import complete!");
  console.log(
    "   Open https://sanity.io/manage to verify data in your Studio."
  );
}

main().catch((err) => {
  console.error("\n❌ Import failed:", err.message);
  process.exit(1);
});
