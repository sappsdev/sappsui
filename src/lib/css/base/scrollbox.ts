const scrollbar = {
  "*::-webkit-scrollbar": {
    "scrollbar-width": "thin",
    width: "6px",
  },
  "*::-webkit-scrollbar-thumb": {
    background: "color-mix(in oklch, currentColor 60%, transparent)",
    "border-radius": "3px",
  },
  "*::-webkit-scrollbar-track": {
    background: "transparent",
  },
  html: {
    "overscroll-behavior": "contain",
    "scroll-behavior": "smooth",
    "scrollbar-width": "thin",
    "scrollbar-color":
      "color-mix(in oklch, currentColor 60%, transparent) transparent",
  },
};
export default scrollbar;
