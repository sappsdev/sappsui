export default {
  ".slider": {
    // Base styles
    "@apply flex flex-col w-full gap-1": {},
    "@apply transition-all duration-200": {},

    // Disabled state
    "&[data-disabled=true]": {
      "@apply opacity-50 cursor-not-allowed pointer-events-none": {},
    },

    // Label and value wrapper
    ".slider-label-wrapper": {
      "@apply w-full flex justify-between items-center": {},
    },

    // Label styles
    ".slider-label": {
      "@apply text-sm": {},

      "[.sm] &": {
        "@apply text-xs": {},
      },

      "[.lg] &": {
        "@apply text-base": {},
      },
    },

    // Value output styles
    ".slider-value": {
      "@apply text-sm": {},

      "[.sm] &": {
        "@apply text-xs": {},
      },

      "[.lg] &": {
        "@apply text-base": {},
      },
    },

    ".slider-track-wrapper": {
      "@apply relative w-full h-6 cursor-pointer px-2": {},
    },

    ".slider-track": {
      "@apply absolute top-1/2 left-0 w-full h-1 bg-border rounded-full -translate-y-1/2 transition-all duration-200":
        {},
      "@apply overflow-hidden": {},
    },

    // Filler styles
    ".slider-filler": {
      "@apply absolute h-full bg-primary/90 rounded-full transition-all duration-200":
        {},
    },

    // Thumb styles
    ".slider-thumb": {
      "@apply absolute top-1/2 w-4 h-4 bg-primary border-2 border-base-100 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-200 cursor-grab z-10":
        {},

      "&[data-dragging=true]": {
        "@apply scale-110 cursor-grabbing shadow-md": {},

        "[data-vertical=true] &": {
          "@apply scale-110": {},
        },
      },
    },

    // Mark styles
    ".slider-mark": {
      "@apply absolute top-1/2 w-2 h-2 bg-base-200 rounded-full -translate-x-1/2 -translate-y-1/2":
        {},

      "&[data-in-range=true]": {
        "@apply bg-primary": {},
      },
    },

    // Color variants
    "&.primary": {
      ".slider-filler, .slider-thumb, .slider-mark[data-in-range=true]": {
        "@apply bg-primary": {},
      },
    },

    "&.secondary": {
      ".slider-filler, .slider-thumb, .slider-mark[data-in-range=true]": {
        "@apply bg-secondary": {},
      },
    },

    "&.foreground": {
      ".slider-filler, .slider-thumb, .slider-mark[data-in-range=true]": {
        "@apply bg-base-100-foreground": {},
      },
    },

    "&.success": {
      ".slider-filler, .slider-thumb, .slider-mark[data-in-range=true]": {
        "@apply bg-success": {},
      },
    },

    "&.warning": {
      ".slider-filler, .slider-thumb, .slider-mark[data-in-range=true]": {
        "@apply bg-warning": {},
      },
    },

    "&.danger": {
      ".slider-filler, .slider-thumb, .slider-mark[data-in-range=true]": {
        "@apply bg-danger": {},
      },
    },

    // Size variants
    "&.sm": {
      ".slider-track": {
        "@apply h-0.5": {},

        "[data-vertical=true] &": {
          "@apply w-0.5": {},
        },
      },

      ".slider-thumb": {
        "@apply w-3 h-3": {},
      },
    },

    "&.lg": {
      ".slider-track": {
        "@apply h-1.5": {},

        "[data-vertical=true] &": {
          "@apply w-1.5": {},
        },
      },

      ".slider-thumb": {
        "@apply w-5 h-5": {},
      },
    },

    // Radius variants
    "&.none": {
      ".slider-track, .slider-filler": {
        "@apply rounded-none": {},
      },
    },

    "&.md": {
      ".slider-track, .slider-filler": {
        "@apply rounded-md": {},
      },
    },

    "&.full": {
      ".slider-track, .slider-filler": {
        "@apply rounded-full": {},
      },
    },
  },
};
