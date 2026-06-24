import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public");
const OUT = path.join(ROOT, "optimized");

/** Max width per image group — keeps quality while cutting file size heavily. */
const MAX_WIDTH = {
  hero: 1920,
  content: 1200,
  project: 800,
};

const jobs = [
  { in: "images/banner.jpeg", out: "optimized/banner.webp", w: MAX_WIDTH.hero },
  { in: "images/banner2.jpeg", out: "optimized/banner2.webp", w: MAX_WIDTH.hero },
  { in: "images/herobg.png", out: "optimized/herobg.webp", w: MAX_WIDTH.hero },
  { in: "images/about2.png", out: "optimized/about2.webp", w: MAX_WIDTH.content },
  { in: "images/cta.png", out: "optimized/cta.webp", w: MAX_WIDTH.content },
  { in: "images/projects/office.png", out: "optimized/projects/office.webp", w: MAX_WIDTH.project },
  { in: "images/projects/hvac.png", out: "optimized/projects/hvac.webp", w: MAX_WIDTH.project },
  { in: "images/projects/cleaning.png", out: "optimized/projects/cleaning.webp", w: MAX_WIDTH.project },
  { in: "images/projects/security.png", out: "optimized/projects/security.webp", w: MAX_WIDTH.project },
  { in: "images/projects/swimming-pool.png", out: "optimized/projects/swimming-pool.webp", w: MAX_WIDTH.project },
  { in: "images/projects/maintance.png", out: "optimized/projects/maintance.webp", w: MAX_WIDTH.project },
];

async function ensureDir(filePath) {
  await mkdir(path.dirname(filePath), { recursive: true });
}

async function optimize({ in: inputRel, out: outputRel, w }) {
  const input = path.join(ROOT, inputRel);
  const output = path.join(ROOT, outputRel);

  try {
    await stat(input);
  } catch {
    console.warn(`  skip (missing): ${inputRel}`);
    return;
  }

  await ensureDir(output);

  const info = await sharp(input)
    .rotate()
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(output);

  const kb = Math.round(info.size / 1024);
  console.log(`  ✓ ${inputRel} → ${outputRel} (${kb} KB)`);
}

async function main() {
  console.log("Optimizing images for faster loading…\n");
  await mkdir(OUT, { recursive: true });

  for (const job of jobs) {
    await optimize(job);
  }

  const files = await readdir(OUT, { recursive: true });
  console.log(`\nDone — ${files.length} optimized file(s) in public/optimized/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
