// lib/colors.ts
export const colors = {
  // CHANGE: tetap sama, tapi sekarang juga disinkron ke CSS var di globals.css
  bg: "10 34 68",

  border: "255 255 255 / 0.10",
  borderSoft: "255 255 255 / 0.06",
  borderHover: "255 255 255 / 0.12",

  surface: {
    panel: "255 255 255 / 0.035",
    base: "255 255 255 / 0.055",
    hover: "255 255 255 / 0.085",
  },

  text: {
    muted: "255 255 255 / 0.72",
    faint: "255 255 255 / 0.62",
  },

  accent: {
    base: "36 150 237",
    hover: "28 128 214",
  },
};
// NOTE: gunakan format "R G B" atau "R G B / A" biar gampang dipakai di CSS var dengan opacity custom
// Contoh: background-color: rgb(var(--color-bg) / 0.8);