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
import { readFileSync, existsSync } from "fs";
import { resolve, basename } from "path";

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
  doctorInfo,
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

/** Upload image to Sanity and return asset ID */
async function uploadImage(imagePath: string) {
  if (!imagePath) return null;
  
  // Resolve path relative to project root / public
  const relativePath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  const fullPath = resolve(process.cwd(), "public", relativePath);
  
  if (!existsSync(fullPath)) {
    console.warn(`  ⚠  File not found: ${fullPath}`);
    return null;
  }

  try {
    const buffer = readFileSync(fullPath);
    console.log(`  ⬆  Uploading ${basename(fullPath)}...`);
    const asset = await client.assets.upload("image", buffer, {
      filename: basename(fullPath),
    });
    return asset._id;
  } catch (err: any) {
    console.error(`  ❌ Error uploading ${fullPath}:`, err.message);
    return null;
  }
}

// ── Import Doctor Info ────────────────────────────────────────────────────────
async function importDoctor() {
  console.log(`\n👨‍⚕️ Importing Doctor Profile...`);
  
  const imageAssetId = await uploadImage(doctorInfo.image);

  const doc = {
    _type: "doctor",
    _id: "doctor-profile",
    name: doctorInfo.name,
    title: doctorInfo.title,
    qualifications: doctorInfo.qualifications,
    specializations: doctorInfo.specializations,
    experience: doctorInfo.experience,
    proceduresDone: doctorInfo.proceduresDone,
    bio: doctorInfo.bio,
    philosophy: doctorInfo.philosophy,
    image: imageAssetId ? {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: imageAssetId,
      },
    } : undefined,
  };

  await client.createOrReplace(doc);
  console.log(`  ✓  Doctor Profile imported`);
}

// ── Import Services ───────────────────────────────────────────────────────────
async function importServices() {
  console.log(`\n📋 Importing ${services.length} services...`);
  
  for (const s of services) {
    console.log(`\n🔹 Processing Service: ${s.title}`);
    
    // Upload image if it exists
    const mainImageAssetId = await uploadImage(s.heroImage);

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
      mainImage: mainImageAssetId ? {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: mainImageAssetId,
        },
      } : undefined,
    };

    await client.createOrReplace(doc);
    console.log(`  ✓  Service "${s.title}" imported`);
  }

  console.log(`✓ All ${services.length} services processed`);
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

// ── Import Results (Before/After) ─────────────────────────────────────────────
async function importResults() {
  console.log(`\n🖼  Importing ${results.length} results...`);

  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    console.log(`\n📸 Processing Result: ${r.caption}`);

    const beforeAssetId = await uploadImage(r.beforeImage);
    const afterAssetId = await uploadImage(r.afterImage);

    const doc = {
      _type: "result",
      _id: `result-${i + 1}`,
      caption: r.caption,
      locationTag: r.location,
      service: {
        _type: "reference",
        _ref: `service-${r.serviceSlug}`,
      },
      beforeImage: beforeAssetId ? {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: beforeAssetId,
        },
      } : undefined,
      afterImage: afterAssetId ? {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: afterAssetId,
        },
      } : undefined,
    };

    await client.createOrReplace(doc);
    console.log(`  ✓  Result record "${r.id}" imported`);
  }

  console.log(`✓ All ${results.length} result records imported`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n🚀 Starting Sanity import`);
  console.log(`   Project: ${projectId}`);
  console.log(`   Dataset: ${dataset}\n`);

  await importDoctor();
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

