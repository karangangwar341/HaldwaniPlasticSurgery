/**
 * Media Feature Import Script
 *
 * Uploads media-1.jpg, media-2.jpg, media-3.jpg, media-5.jpg from public/images/
 * and creates mediaFeature documents in Sanity.
 *
 * Prerequisites: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
 *                SANITY_WRITE_TOKEN set in .env.local
 *
 * Run:
 *   cmd /c "node_modules\.bin\tsx scripts\import-media.ts"
 */

import { createClient } from "@sanity/client";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

// ── Parse .env.local ──────────────────────────────────────────────────────────
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
  console.error("❌ Could not read .env.local");
  process.exit(1);
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || projectId === "your_project_id") {
  console.error("❌ NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local");
  process.exit(1);
}
if (!token) {
  console.error("❌ SANITY_WRITE_TOKEN is not set in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ── Media entries to import ───────────────────────────────────────────────────
// Edit publication / headline / date as needed before running.
const mediaEntries = [
  {
    id: "media-feature-1",
    file: "media-1.jpg",
    publication: "Amar Ujala",
    headline: "Dr. Sarika Gangwar bringing world-class cosmetic surgery to Haldwani",
    date: "2024-01-15",
    order: 1,
  },
  {
    id: "media-feature-2",
    file: "media-2.jpg",
    publication: "Dainik Jagran",
    headline: "Plastic surgeon opens doors to modern cosmetic procedures in Kumaun",
    date: "2024-03-10",
    order: 2,
  },
  {
    id: "media-feature-3",
    file: "media-3.jpg",
    publication: "Hindustan",
    headline: "Expert cosmetic care now available in Uttarakhand — Dr. Sarika Gangwar",
    date: "2024-06-20",
    order: 3,
  },
  {
    id: "media-feature-5",
    file: "media-5.jpg",
    publication: "Uttarakhand Today",
    headline: "Transforming lives through advanced plastic surgery in the hills",
    date: "2025-01-05",
    order: 4,
  },
];

// ── Upload image + create document ────────────────────────────────────────────
async function uploadImage(filePath: string, filename: string) {
  const buffer = readFileSync(filePath);
  console.log(`  ⬆  Uploading ${filename}...`);
  const asset = await client.assets.upload("image", buffer, {
    filename,
    contentType: "image/jpeg",
  });
  console.log(`  ✓  Uploaded → ${asset._id}`);
  return asset._id;
}

async function main() {
  console.log(`\n🚀 Importing media features`);
  console.log(`   Project : ${projectId}`);
  console.log(`   Dataset : ${dataset}\n`);

  for (const entry of mediaEntries) {
    const filePath = resolve(process.cwd(), "public", "images", entry.file);

    if (!existsSync(filePath)) {
      console.warn(`  ⚠  Skipping ${entry.file} — file not found at ${filePath}`);
      continue;
    }

    console.log(`\n📰 Processing: ${entry.file}`);

    const assetId = await uploadImage(filePath, entry.file);

    await client.createOrReplace({
      _type: "mediaFeature",
      _id: entry.id,
      publication: entry.publication,
      headline: entry.headline,
      date: entry.date,
      order: entry.order,
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: assetId,
        },
      },
    });

    console.log(`  ✓  Document created: ${entry.id}`);
  }

  console.log("\n✅ Media import complete!");
  console.log("   Open Sanity Studio → Media & Press Feature to verify.");
  console.log("   Update publication names / headlines / dates in this script and re-run if needed.\n");
}

main().catch((err) => {
  console.error("\n❌ Import failed:", err.message);
  process.exit(1);
});
