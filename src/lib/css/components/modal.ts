export default {
  ".modal-backdrop": {
    "@apply fixed inset-0 z-[1000] flex": {}, // Increased z-index to ensure it's above everything
    "&.backdrop-visible": {
      "@apply bg-black/50 backdrop-blur-sm": {},
    },
  },

  ".modal-container": {
    "@apply flex items-center justify-center w-full h-full": {}, // Added h-full to ensure full height
    "&.center": {
      "@apply items-center": {},
    },
    "&.top": {
      "@apply items-start pt-16": {},
    },
    "&.bottom": {
      "@apply items-end pb-16": {},
    },
    "&.auto": {
      "@apply items-start pt-16 md:items-center md:pt-0": {},
    },
  },

  ".modal": {
    "@apply w-full max-h-[90vh] overflow-visible": {}, // Changed to overflow-visible
    "@apply bg-base100 shadow-lg relative": {}, // Added relative positioning

    /* Size variants */
    "&.s-sm": {
      "@apply max-w-sm mx-auto": {},
    },
    "&.s-md": {
      "@apply max-w-md mx-auto": {},
    },
    "&.s-lg": {
      "@apply max-w-lg mx-auto": {},
    },

    /* Radius variants */
    "&.r-none": {
      "@apply rounded-none": {},
    },
    "&.r-xs": {
      "@apply rounded-xs": {},
    },
    "&.r-sm": {
      "@apply rounded-sm": {},
    },
    "&.r-md": {
      "@apply rounded-md": {},
    },
    "&.r-lg": {
      "@apply rounded-lg": {},
    },
    "&.r-xl": {
      "@apply rounded-xl": {},
    },
    "&.r-full": {
      "@apply rounded-full": {},
    },
  },

  ".modal-content": {
    "@apply w-full max-h-[80vh] overflow-auto": {}, // Added max-height and overflow-auto to content only
  },

  ".modal-trigger": {
    "@apply cursor-pointer inline-flex": {},
  },

  ".modal-close": {
    "@apply absolute right-4 top-4 rounded-sm opacity-70 ring-offset-base100 z-[10]":
      {}, // Added z-index
    "@apply hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-2":
      {},
    "@apply disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground":
      {},
  },
};
