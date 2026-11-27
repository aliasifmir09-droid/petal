import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

const petalPath =
  "M0-3.2C6.2-8.4 12.4-17.6 9.2-25.2C6.8-30.6 2.2-30.2 0-27.6C-2.2-30.2-6.8-30.6-9.2-25.2C-12.4-17.6-6.2-8.4 0-3.2Z";

function bloom({ outer, inner, scale = 1, cx = 0, cy = 0 }) {
  const angles = [0, 60, 120, 180, 240, 300];
  const petals = angles
    .map(
      (angle) =>
        `<path transform="rotate(${angle})" fill="${outer}" d="${petalPath}"/>`,
    )
    .join("");
  const innerPetals = angles
    .map(
      (angle) =>
        `<path transform="rotate(${angle + 30}) scale(0.56)" fill="${inner}" d="${petalPath}"/>`,
    )
    .join("");
  return `<g transform="translate(${cx} ${cy}) scale(${scale})">${petals}${innerPetals}<circle r="5.2" fill="#FFC220"/><circle cx="-1.15" cy="-1.25" r="1.55" fill="#FFF6D0"/></g>`;
}

const bright = { outer: "#FFFFFF", inner: "#D6EBFF" };
const deep = { outer: "#0071DC", inner: "#004F9A" };
const FONT =
  "'Instrument Serif', Georgia, 'Times New Roman', serif";

const iconSvg = (size) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="ps-tile" x1="64" y1="48" x2="448" y2="464" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0071DC"/>
      <stop offset="1" stop-color="#004F9A"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="${Math.round(size > 64 ? 96 : 72)}" fill="url(#ps-tile)"/>
  ${bloom({ ...bright, scale: 6.7, cx: 256, cy: 256 })}
</svg>`;

/**
 * Centered horizontal lockup: mark + wordmark balanced in the frame.
 * Tuned so left/right padding stay within ~40px of each other.
 */
const logoLockupSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400" viewBox="0 0 1200 400">
  <defs>
    <linearGradient id="ps-banner" x1="0" y1="0" x2="1200" y2="400" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0071DC"/>
      <stop offset="1" stop-color="#004F9A"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="400" rx="48" fill="url(#ps-banner)"/>
  ${bloom({ ...bright, scale: 4.6, cx: 360, cy: 200 })}
  <text x="563" y="200" dominant-baseline="middle" font-family="${FONT}" font-size="128" letter-spacing="-3.2" fill="#FFFFFF">Petalswift</text>
</svg>`;

/** Transparent horizontal wordmark for light backgrounds — content centered in frame. */
const wordmarkSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="320" viewBox="0 0 600 160">
  ${bloom({ ...deep, scale: 1.75, cx: 74, cy: 80 })}
  <text x="156" y="80" dominant-baseline="middle" font-family="${FONT}" font-size="78" letter-spacing="-1.8" fill="#0F1C2E">Petalswift</text>
</svg>`;

/** Square social tile with mark only (no cramped caption). */
const logoSquareSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="ps-tile" x1="64" y1="48" x2="448" y2="464" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0071DC"/>
      <stop offset="1" stop-color="#004F9A"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#ps-tile)"/>
  ${bloom({ ...bright, scale: 6.7, cx: 256, cy: 256 })}
</svg>`;

async function writeSquarePng(name, svg, size) {
  const buf = await sharp(Buffer.from(svg))
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toBuffer();
  writeFileSync(join(publicDir, name), buf);
  console.log(`wrote ${name} (${buf.length} bytes)`);
}

async function writeSvgPng(name, svg, width, height) {
  const buf = await sharp(Buffer.from(svg))
    .resize(width, height, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toBuffer();
  writeFileSync(join(publicDir, name), buf);
  console.log(`wrote ${name} (${buf.length} bytes, ${width}x${height})`);
}

async function main() {
  const markSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" role="img" aria-label="Petalswift lotus">
  ${bloom({ ...deep, scale: 0.98, cx: 32, cy: 32 })}
</svg>`;
  writeFileSync(join(publicDir, "logo-mark.svg"), markSvg);
  writeFileSync(join(publicDir, "logo.svg"), logoLockupSvg);
  writeFileSync(join(publicDir, "logo-wordmark.svg"), wordmarkSvg);
  console.log("wrote logo-mark.svg, logo.svg, logo-wordmark.svg");
  await writeSquarePng("icon.png", iconSvg(512), 512);
  await writeSquarePng("icon-192.png", iconSvg(192), 192);
  await writeSquarePng("logo-square.png", logoSquareSvg, 512);
  await writeSvgPng("logo.png", logoLockupSvg, 1200, 400);
  await writeSvgPng("logo-wordmark.png", wordmarkSvg, 1200, 320);
  await writeSquarePng("apple-touch-icon.png", iconSvg(180), 180);
  await writeSquarePng("favicon-32.png", iconSvg(32), 32);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
