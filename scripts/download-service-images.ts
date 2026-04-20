/**
 * Downloads unique per-service hero images + additional before/after results.
 * Run: node_modules\.bin\tsx scripts/download-service-images.ts
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const PUBLIC_DIR = join(process.cwd(), "public", "images");
mkdirSync(PUBLIC_DIR, { recursive: true });

/* -----------------------------------------------------------------------
   Image list — Pexels CDN, no API key required for direct photo access
   ----------------------------------------------------------------------- */
const images: { file: string; url: string }[] = [
  /* ---------- Per-service hero images (Face) ---------- */
  {
    file: "svc-face-lift.jpg",
    url: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-brow-lift.jpg",
    url: "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-blepharoplasty.jpg",
    url: "https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-rhinoplasty.jpg",
    url: "https://images.pexels.com/photos/2531905/pexels-photo-2531905.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-lip-enhancement.jpg",
    url: "https://images.pexels.com/photos/3785078/pexels-photo-3785078.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-chin-correction.jpg",
    url: "https://images.pexels.com/photos/1520412/pexels-photo-1520412.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-ear-reshaping.jpg",
    url: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  /* ---------- Per-service hero images (Breast) ---------- */
  {
    file: "svc-breast-augmentation.jpg",
    url: "https://images.pexels.com/photos/5206469/pexels-photo-5206469.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-breast-reduction.jpg",
    url: "https://images.pexels.com/photos/7149297/pexels-photo-7149297.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-breast-lift.jpg",
    url: "https://images.pexels.com/photos/5206466/pexels-photo-5206466.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-gynecomastia.jpg",
    url: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-nipple-areola.jpg",
    url: "https://images.pexels.com/photos/5215440/pexels-photo-5215440.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  /* ---------- Per-service hero images (Body) ---------- */
  {
    file: "svc-liposuction.jpg",
    url: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-tummy-tuck.jpg",
    url: "https://images.pexels.com/photos/3822819/pexels-photo-3822819.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-mommy-makeover.jpg",
    url: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-body-lift.jpg",
    url: "https://images.pexels.com/photos/4155032/pexels-photo-4155032.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-abdominal-etching.jpg",
    url: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  /* ---------- Per-service hero images (Genitals) ---------- */
  {
    file: "svc-vaginal-tightening.jpg",
    url: "https://images.pexels.com/photos/5215384/pexels-photo-5215384.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-hymenoplasty.jpg",
    url: "https://images.pexels.com/photos/4047183/pexels-photo-4047183.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-male-genital.jpg",
    url: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-sex-reassignment.jpg",
    url: "https://images.pexels.com/photos/6550178/pexels-photo-6550178.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  /* ---------- Per-service hero images (Hair & Skin) ---------- */
  {
    file: "svc-hair-transplant.jpg",
    url: "https://images.pexels.com/photos/3738075/pexels-photo-3738075.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-scar-removal.jpg",
    url: "https://images.pexels.com/photos/3851134/pexels-photo-3851134.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-vitiligo.jpg",
    url: "https://images.pexels.com/photos/4551977/pexels-photo-4551977.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    file: "svc-mole-wart.jpg",
    url: "https://images.pexels.com/photos/7581996/pexels-photo-7581996.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  /* ---------- Additional before/after result pairs ---------- */
  {
    file: "result-blepharoplasty-before.jpg",
    url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-blepharoplasty-after.jpg",
    url: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-breast-aug-before.jpg",
    url: "https://images.pexels.com/photos/1183622/pexels-photo-1183622.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-breast-aug-after.jpg",
    url: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-lip-before.jpg",
    url: "https://images.pexels.com/photos/3785080/pexels-photo-3785080.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-lip-after.jpg",
    url: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-ear-before.jpg",
    url: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-ear-after.jpg",
    url: "https://images.pexels.com/photos/2918399/pexels-photo-2918399.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

async function download(url: string, dest: string): Promise<boolean> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`  ✗ ${dest.split(/[\\/]/).pop()} — HTTP ${res.status}`);
      return false;
    }
    const buf = await res.arrayBuffer();
    writeFileSync(dest, Buffer.from(buf));
    console.log(
      `  ✓ ${dest.split(/[\\/]/).pop()} (${(buf.byteLength / 1024).toFixed(0)} KB)`
    );
    return true;
  } catch (e) {
    console.error(`  ✗ ${dest.split(/[\\/]/).pop()} — ${e}`);
    return false;
  }
}

async function main() {
  const toDownload = images.filter(
    ({ file }) => !existsSync(join(PUBLIC_DIR, file))
  );
  console.log(
    `Downloading ${toDownload.length} new images (${images.length - toDownload.length} already exist)…\n`
  );
  let ok = 0,
    fail = 0;
  for (const { file, url } of toDownload) {
    const result = await download(url, join(PUBLIC_DIR, file));
    if (result) ok++;
    else fail++;
  }
  console.log(`\nDone: ${ok} downloaded, ${fail} failed`);
}

main();
