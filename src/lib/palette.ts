export const paletteSchemes = {
  analogous: { label: "Analogous", adjustments: [[-40, -12], [-20, -4], [0, 0], [20, 4], [40, 12]] },
  complementary: { label: "Complementary", adjustments: [[0, -24], [0, -10], [0, 0], [180, -7], [180, 15]] },
  monochromatic: { label: "Monochromatic", adjustments: [[0, -33], [0, -17], [0, 0], [0, 14], [0, 28]] },
} as const;

export type PaletteScheme = keyof typeof paletteSchemes;

function hexToHsl(hex: string) {
  const [red, green, blue] = [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16) / 255);
  const high = Math.max(red, green, blue);
  const low = Math.min(red, green, blue);
  const chroma = high - low;
  const lightness = (high + low) / 2;
  if (chroma === 0) return { hue: 0, saturation: 0, lightness };

  let sector = (red - green) / chroma + 4;
  if (high === red) sector = (green - blue) / chroma;
  else if (high === green) sector = (blue - red) / chroma + 2;

  return {
    hue: (sector * 60 + 360) % 360,
    saturation: chroma / (1 - Math.abs(2 * lightness - 1)),
    lightness,
  };
}

function hslToHex(hue: number, saturation: number, lightness: number) {
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const sector = ((hue + 360) % 360) / 60;
  const middle = chroma * (1 - Math.abs((sector % 2) - 1));
  const channels = [
    [chroma, middle, 0], [middle, chroma, 0], [0, chroma, middle],
    [0, middle, chroma], [middle, 0, chroma], [chroma, 0, middle],
  ][Math.floor(sector)];
  const offset = lightness - chroma / 2;
  return `#${channels.map((channel) => Math.round((channel + offset) * 255).toString(16).padStart(2, "0")).join("")}`;
}

export function buildPalette(hex: string, scheme: PaletteScheme) {
  const { hue, saturation, lightness } = hexToHsl(hex);

  return paletteSchemes[scheme].adjustments.map(([hueShift, lightShift]) => {
    if (hueShift === 0 && lightShift === 0) return hex;

    const adjustedLightness = Math.max(0.05, Math.min(0.95, lightness + lightShift / 100));
    return hslToHex(hue + hueShift, saturation, adjustedLightness);
  });
}
