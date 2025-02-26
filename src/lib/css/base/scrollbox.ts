export default {
  "*": {
    "&::-webkit-scrollbar": {
      width: "6px !important",
      height: "6px !important",
      "&:hover": {
        width: "6px !important",
        height: "6px !important",
      },
    },
    "&::-webkit-scrollbar *": {
      width: "6px !important",
      height: "6px !important",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "color-mix(in oklch, currentColor 60%, transparent)",
      "border-radius": "3px",
      width: "6px !important",
      height: "6px !important",
      "&:hover": {
        width: "6px !important",
        height: "6px !important",
        background: "color-mix(in oklch, currentColor 80%, transparent)",
      },
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
      width: "6px !important",
      height: "6px !important",
      "&:hover": {
        width: "6px !important",
        height: "6px !important",
      },
    },
    "scrollbar-width": "thin !important",
  },

  html: {
    "overscroll-behavior": "contain",
    "scroll-behavior": "smooth",
    "scrollbar-width": "thin !important",
    "scrollbar-gutter": "stable",
    "scrollbar-color":
      "color-mix(in oklch, currentColor 60%, transparent) transparent",
  },

  "@-moz-document url-prefix()": {
    "*": {
      "scrollbar-width": "thin !important",
      "scrollbar-color":
        "color-mix(in oklch, currentColor 60%, transparent) transparent",
    },
  },
};
