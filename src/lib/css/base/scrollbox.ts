const scrollbar = {
  "::-webkit-scrollbar": {
    width: "6px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "color-mix(in oklch, currentColor 60%, transparent)",
    "border-radius": "3px",
  },
  "::-webkit-scrollbar-track": {
    background: "var(--color-background)",
  },
  html: {
    "scroll-behavior": "smooth",
    "scrollbar-width": "thin",
    "scrollbar-color":
      "color-mix(in oklch, currentColor 60%, transparent) var(--color-background)",
  },

  ".scrollbox": {
    "@apply flex flex-col gap-3 px-6 py-2": {},
    "overscroll-behavior": "contain",
    "scrollbar-width": "none",
    "scrollbar-color": "transparent transparent",
  },

  ".scrollbox-y": {
    "overflow-x": "hidden",
    "overflow-y": "auto",
    "overscroll-behavior": "contain",
    "scrollbar-width": "none",
    "scrollbar-color": "transparent transparent",
  },
  ".scrollbox-y::-webkit-scrollbar-thumb": {
    background: "transparent",
    "border-radius": "3px",
  },
  ".scrollbox-y::-webkit-scrollbar-track": {
    background: "transparent",
  },
  ".scrollbox-y:hover": {
    "scrollbar-width": "thin",
    "scrollbar-color":
      "color-mix(in oklch, currentColor 60%, transparent) transparent",
  },
  ".scrollbox-y:hover::-webkit-scrollbar": {
    width: "6px",
  },
  ".scrollbox-y:hover::-webkit-scrollbar-thumb": {
    background: "color-mix(in oklch, currentColor 60%, transparent)",
  },
  ".scrollbox-y:hover::-webkit-scrollbar-track": {
    background: "transparent",
  },
};
export default scrollbar;
