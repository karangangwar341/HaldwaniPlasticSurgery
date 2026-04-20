/**
 * Download free stock images from Pexels CDN and save them locally.
 * Run: npx tsx scripts/download-images.ts
 *
 * Images are saved to: public/images/
 */

import { createWriteStream, mkdirSync, existsSync } from "fs";
import { pipeline } from "stream/promises";
import { Readable } from "stream";
import path from "path";

const OUT_DIR = path.resolve(process.cwd(), "public/images");
mkdirSync(OUT_DIR, { recursive: true });

/** Pexels CDN URL — works without an API key */
function pexels(id: number, w: number, h: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;
}

const images: { file: string; url: string }[] = [
  // ── Page heroes (1920×1080) ─────────────────────────────────────────────────
  { file: "hero-home.jpg",     url: pexels(3985163, 1920, 1080) }, // medical team
  { file: "hero-about.jpg",    url: pexels(5214949, 1920, 1080) }, // female doctor
  { file: "hero-services.jpg", url: pexels(3825539, 1920, 1080) }, // clinic
  { file: "hero-results.jpg",  url: pexels(3764013, 1920, 1080) }, // beauty treatment
  { file: "hero-contact.jpg",  url: pexels(1170979, 1920, 1080) }, // clinic interior

  // ── Doctor portrait (portrait, 600×800) ─────────────────────────────────────
  { file: "doctor.jpg",        url: pexels(5215024, 600, 800)   }, // female doctor portrait

  // ── Service category hero cards (800×600) ───────────────────────────────────
  { file: "service-face.jpg",     url: pexels(3762875, 800, 600) }, // facial / skincare
  { file: "service-breast.jpg",   url: pexels(4386467, 800, 600) }, // medical / clinical
  { file: "service-body.jpg",     url: pexels(3757942, 800, 600) }, // body / wellness
  { file: "service-genitals.jpg", url: pexels(3845810, 800, 600) }, // neutral medical
  { file: "service-hair.jpg",     url: pexels(3993449, 800, 600) }, // hair treatment

  // ── Before / After results (600×600) ────────────────────────────────────────
  // Rhinoplasty – nose / profile portraits
  { file: "result-rhinoplasty-before.jpg", url: pexels(3756521, 600, 600) },
  { file: "result-rhinoplasty-after.jpg",  url: pexels(3998050, 600, 600) },

  // Gynecomastia – male torso / fitness
  { file: "result-gynecomastia-before.jpg", url: pexels(3824769, 600, 600) },
  { file: "result-gynecomastia-after.jpg",  url: pexels(3775566, 600, 600) },

  // Liposuction – body contour
  { file: "result-liposuction-before.jpg", url: pexels(3768913, 600, 600) },
  { file: "result-liposuction-after.jpg",  url: pexels(3757952, 600, 600) },

  // Hair transplant
  { file: "result-hair-before.jpg", url: pexels(4046316, 600, 600) },
  { file: "result-hair-after.jpg",  url: pexels(3993464, 600, 600) },

  // Face lift – portrait pairs
  { file: "result-facelift-before.jpg", url: pexels(3762874, 600, 600) },
  { file: "result-facelift-after.jpg",  url: pexels(3764012, 600, 600) },

  // Tummy tuck – abdomen / body
  { file: "result-tummy-before.jpg", url: pexels(3768916, 600, 600) },
  { file: "result-tummy-after.jpg",  url: pexels(3775565, 600, 600) },
];

async function download(url: string, dest: string): Promise<boolean> {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; image-downloader/1.0)" },
  });

  if (!res.ok) {
    console.error(`  ✗ HTTP ${res.status} — ${url}`);
    return false;
  }

  const writer = createWriteStream(dest);
  // @ts-expect-error — ReadableStream → Node stream
  await pipeline(Readable.fromWeb(res.body), writer);
  return true;
}

async function main() {
  console.log(`\n📥 Downloading ${images.length} images to public/images/\n`);
  let ok = 0;
  let fail = 0;

  for (const { file, url } of images) {
    const dest = path.join(OUT_DIR, file);
    if (existsSync(dest)) {
      console.log(`  ⏭  ${file} (already exists)`);
      ok++;
      continue;
    }
    process.stdout.write(`  ⬇  ${file} …`);
    const success = await download(url, dest);
    if (success) {
      console.log(" ✓");
      ok++;
    } else {
      fail++;
    }
  }

  console.log(`\n✅ Done — ${ok} downloaded, ${fail} failed.\n`);
  if (fail > 0) {
    console.log("Failed images can be replaced manually in public/images/");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
