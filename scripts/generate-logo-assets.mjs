import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

const petalPath =
  "M0 2.2C7.4-0.4 13.6-8 11.4-15.6C9.6-21.6 4.2-23.6 0-24.4C-4.2-23.6-9.6-21.6-11.4-15.6C-13.6-8-7.4-0.4 0 2.2Z";

function bloom({ fills, scale = 1, cx = 0, cy = 0 }) {
  const outer = [0, 45, 90, 135, 180, 225, 270, 315];
  const petals = outer
    .map(
      (angle, i) =>
        `<path transform="rotate(${angle})" fill="${fills[i % fills.length]}" d="${petalPath}"/>`,
    )
    .join("");
  const inner = outer
    .map((angle, i) => {
      const fill = fills[(i + 2) % fills.length];
      return `<path transform="rotate(${angle + 22.5}) scale(0.72)" fill="${fill}" d="${petalPath}"/>`;
    })
    .join("");
  const seeds = [0, 60, 120, 180, 240, 300]
    .map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x = (Math.cos(rad) * 4.15).toFixed(2);
      const y = (Math.sin(rad) * 4.15).toFixed(2);
      return `<circle cx="${x}" cy="${y}" r="1.15" fill="#C4841D"/>`;
    })
    .join("");
  return `<g transform="translate(${cx} ${cy}) scale(${scale})">${petals}${inner}<circle r="8.2" fill="#FFC220"/>${seeds}<circle r="1.35" fill="#E09A1A"/></g>`;
}

const bright = ["#E8F3FF", "#8EC5FF", "#FFFFFF", "#B8DBFF"];
const deep = ["#1F7FE8", "#005CBC", "#2B8AF0", "#004F9A"];
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
  ${bloom({ fills: bright, scale: 8, cx: 256, cy: 256 })}
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
  ${bloom({ fills: bright, scale: 5.4, cx: 370, cy: 200 })}
  <text x="563" y="200" dominant-baseline="middle" font-family="${FONT}" font-size="128" letter-spacing="-3.2" fill="#FFFFFF">Petalswift</text>
</svg>`;

/** Transparent horizontal wordmark for light backgrounds — content centered in frame. */
const wordmarkSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="320" viewBox="0 0 600 160">
  ${bloom({ fills: deep, scale: 2.15, cx: 86, cy: 80 })}
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
  ${bloom({ fills: bright, scale: 8, cx: 256, cy: 256 })}
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
  ${bloom({ fills: deep, scale: 1.18, cx: 32, cy: 32 })}
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
