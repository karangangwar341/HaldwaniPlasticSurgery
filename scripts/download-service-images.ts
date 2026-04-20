/**
 * Downloads per-service hero images + before/after results.
 * Images sourced from mycosmeticsurgery.in – matched to each procedure.
 * Run: node_modules\.bin\tsx scripts/download-service-images.ts
 *
 * Set FORCE=1 env var to re-download even if file exists:
 *   FORCE=1 node_modules\.bin\tsx scripts/download-service-images.ts
 */

import { writeFileSync, mkdirSync, existsSync, unlinkSync } from "fs";
import { join } from "path";

const PUBLIC_DIR = join(process.cwd(), "public", "images");
mkdirSync(PUBLIC_DIR, { recursive: true });

const FORCE = process.env.FORCE === "1";

const images: { file: string; url: string; desc: string }[] = [
  /* -- FACE ---------------------------------------------------------------- */
  {
    file: "svc-face-lift.jpg",
    desc: "Face lift",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2024/12/Face-lift.jpg",
  },
  {
    file: "svc-brow-lift.jpg",
    desc: "Brow lift surgery",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2024/12/Brow-Lift-Surgery-1023x1536.jpg",
  },
  {
    file: "svc-blepharoplasty.jpg",
    desc: "Blepharoplasty / eyelid surgery",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2024/12/baggy-eyelid.jpg",
  },
  {
    file: "svc-rhinoplasty.jpg",
    desc: "Rhinoplasty / nose job",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2024/12/Nose-jobs.jpg",
  },
  {
    file: "svc-lip-enhancement.jpg",
    desc: "Lip enhancement",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2024/12/lip-enhancement.jpg",
  },
  {
    file: "svc-chin-correction.jpg",
    desc: "Chin correction / genioplasty",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/09/Face-C.png",
  },
  {
    file: "svc-ear-reshaping.jpg",
    desc: "Ear correction / otoplasty",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2024/12/ear-correction.jpg",
  },

  /* -- BREAST -------------------------------------------------------------- */
  {
    file: "svc-breast-augmentation.jpg",
    desc: "Breast augmentation",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Breast-augmentation.jpg",
  },
  {
    file: "svc-breast-reduction.jpg",
    desc: "Breast reduction",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Breast-reduction.jpg",
  },
  {
    file: "svc-breast-lift.jpg",
    desc: "Cosmetic breast lift / mastopexy",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Cosmetic-Breast-Lift-1024x683.jpg",
  },
  {
    file: "svc-gynecomastia.jpg",
    desc: "Gynecomastia / male breast reduction",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Male-Breast-1.jpg",
  },
  {
    file: "svc-nipple-areola.jpg",
    desc: "Nipple areola correction (breast image)",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Breast-augmentation.jpg",
  },

  /* -- BODY ---------------------------------------------------------------- */
  {
    file: "svc-liposuction.jpg",
    desc: "Liposuction",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Liposuction.jpg",
  },
  {
    file: "svc-tummy-tuck.jpg",
    desc: "Tummy tuck / abdominoplasty",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Tummy-tuck.jpg",
  },
  {
    file: "svc-mommy-makeover.jpg",
    desc: "Mommy makeover",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Mommy-makeover.jpg",
  },
  {
    file: "svc-body-lift.jpg",
    desc: "Body lift",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Body-Lift-1024x683.jpg",
  },
  {
    file: "svc-abdominal-etching.jpg",
    desc: "Abdominal etching / six-pack abs",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Abdominal-Etching-Men.jpg",
  },

  /* -- GENITALS ------------------------------------------------------------ */
  {
    file: "svc-vaginal-tightening.jpg",
    desc: "Female genital rejuvenation / vaginoplasty",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Female-Genital-Rejuvenation-1024x1536.jpg",
  },
  {
    file: "svc-hymenoplasty.jpg",
    desc: "Hymenoplasty / revirgination",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Hymenoplasty_diagramatic2.jpg",
  },
  {
    file: "svc-male-genital.jpg",
    desc: "Male genital rejuvenation / penile enhancement",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Male-Genital-Rejuvenation.jpg",
  },
  {
    file: "svc-sex-reassignment.jpg",
    desc: "Sex reassignment surgery",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Sex-Reassignment-Surgery.jpg",
  },

  /* -- HAIR & SKIN --------------------------------------------------------- */
  {
    file: "svc-hair-transplant.jpg",
    desc: "Hair transplantation",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/hair-transplant.jpg",
  },
  {
    file: "svc-scar-removal.jpg",
    desc: "Scar removal surgery",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Scar-removal.jpg",
  },
  {
    file: "svc-vitiligo.jpg",
    desc: "Vitiligo / white patch removal",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/White-Patch-Removal-1024x683.jpg",
  },
  {
    file: "svc-mole-wart.jpg",
    desc: "Mole / nevi surgical correction",
    url: "https://mycosmeticsurgery.in/wp-content/uploads/2023/10/Mole-removal.jpg",
  },

  /* -- BEFORE / AFTER result pairs ---------------------------------------- */
  {
    file: "result-rhinoplasty-before.jpg",
    desc: "Nose side profile before - rhinoplasty before",
    url: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-rhinoplasty-after.jpg",
    desc: "Nose side profile after - rhinoplasty after",
    url: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-gynecomastia-before.jpg",
    desc: "Male chest before - gynecomastia before",
    url: "https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-gynecomastia-after.jpg",
    desc: "Male flat chest after - gynecomastia after",
    url: "https://images.pexels.com/photos/1480806/pexels-photo-1480806.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-liposuction-before.jpg",
    desc: "Body/waist before - liposuction before",
    url: "https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-liposuction-after.jpg",
    desc: "Slim waist after - liposuction after",
    url: "https://images.pexels.com/photos/3822819/pexels-photo-3822819.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-hair-before.jpg",
    desc: "Thinning hair/scalp before - hair transplant before",
    url: "https://images.pexels.com/photos/3993450/pexels-photo-3993450.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-hair-after.jpg",
    desc: "Full hair after - hair transplant after",
    url: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-facelift-before.jpg",
    desc: "Aging face before - facelift before",
    url: "https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-facelift-after.jpg",
    desc: "Rejuvenated face after - facelift after",
    url: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-tummy-before.jpg",
    desc: "Abdomen before - tummy tuck before",
    url: "https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-tummy-after.jpg",
    desc: "Flat abdomen after - tummy tuck after",
    url: "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-blepharoplasty-before.jpg",
    desc: "Eyelid/eye before - blepharoplasty before",
    url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-blepharoplasty-after.jpg",
    desc: "Refreshed eye after - blepharoplasty after",
    url: "https://images.pexels.com/photos/2878578/pexels-photo-2878578.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-breast-aug-before.jpg",
    desc: "Woman figure before - breast augmentation before",
    url: "https://images.pexels.com/photos/5765874/pexels-photo-5765874.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-breast-aug-after.jpg",
    desc: "Woman figure after - breast augmentation after",
    url: "https://images.pexels.com/photos/5765827/pexels-photo-5765827.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-lip-before.jpg",
    desc: "Lips before - lip enhancement before",
    url: "https://images.pexels.com/photos/3785080/pexels-photo-3785080.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-lip-after.jpg",
    desc: "Lips after - lip enhancement after",
    url: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-ear-before.jpg",
    desc: "Ear before - otoplasty before",
    url: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    file: "result-ear-after.jpg",
    desc: "Ear after - otoplasty after",
    url: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

async function download(url: string, dest: string, desc: string): Promise<boolean> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`  x ${desc} -- HTTP ${res.status} (${url})`);
      return false;
    }
    const buf = await res.arrayBuffer();
    writeFileSync(dest, Buffer.from(buf));
    console.log(`  ok ${dest.split(/[\\/]/).pop()} -- ${desc} (${(buf.byteLength / 1024).toFixed(0)} KB)`);
    return true;
  } catch (e) {
    console.error(`  x ${desc} -- ${e}`);
    return false;
  }
}

async function main() {
  if (FORCE) {
    console.log("FORCE mode: deleting existing svc-* and result-* images...");
    for (const { file } of images) {
      const p = join(PUBLIC_DIR, file);
      if (existsSync(p)) unlinkSync(p);
    }
  }

  const toDownload = images.filter(({ file }) => !existsSync(join(PUBLIC_DIR, file)));
  console.log(`\nDownloading ${toDownload.length} images (${images.length - toDownload.length} already exist)...\n`);

  let ok = 0, fail = 0;
  for (const { file, url, desc } of toDownload) {
    const result = await download(url, join(PUBLIC_DIR, file), desc);
    if (result) ok++; else fail++;
  }
  console.log(`\nDone: ${ok} downloaded, ${fail} failed`);
}

main();
