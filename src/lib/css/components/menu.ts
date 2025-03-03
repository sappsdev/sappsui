export default {
  ".menu-root": {
    "@apply flex gap-2 p-2 w-full overflow-clip": {},
    "&.vertical": {
      "@apply flex-col flex-wrap": {},
    },

    /* Size variants */
    "&.s-sm": {
      "@apply gap-1 p-1 text-sm": {},
      ".menu-item": {
        "@apply px-2 py-1": {},
      },
    },
    "&.s-md": {
      "@apply gap-2 p-2 text-base": {},
      ".menu-item": {
        "@apply px-4 py-2": {},
      },
    },
    "&.s-lg": {
      "@apply gap-3 p-3 text-lg": {},
      ".menu-item": {
        "@apply px-6 py-3": {},
      },
    },

    /* Radius variants */
    "&.r-none": {
      "@apply rounded-none": {},
      ".menu-item": {
        "@apply rounded-none": {},
      },
    },
    "&.r-xs": {
      "@apply rounded-xs": {},
      ".menu-item": {
        "@apply rounded-xs": {},
      },
    },
    "&.r-sm": {
      "@apply rounded-sm": {},
      ".menu-item": {
        "@apply rounded-sm": {},
      },
    },
    "&.r-md": {
      "@apply rounded-md": {},
      ".menu-item": {
        "@apply rounded-md": {},
      },
    },
    "&.r-lg": {
      "@apply rounded-lg": {},
      ".menu-item": {
        "@apply rounded-lg": {},
      },
    },
    "&.r-xl": {
      "@apply rounded-xl": {},
      ".menu-item": {
        "@apply rounded-xl": {},
      },
    },
    "&.r-full": {
      "@apply rounded-full": {},
      ".menu-item": {
        "@apply rounded-full": {},
      },
    },
  },

  ".menu-item": {
    "@apply flex flex-row flex-nowrap items-center gap-2": {},
    "@apply w-full cursor-pointer relative whitespace-nowrap": {},

    "@apply text-muted-foreground": {},
    "&:hover": {
      "@apply bg-muted/20": {},
    },
    "&.active": {
      "@apply bg-muted/30": {},
    },

    /* Size variants */
    "&.s-sm": {
      "@apply text-sm px-2 py-1 gap-1": {},
    },
    "&.s-md": {
      "@apply text-base px-4 py-2 gap-2": {},
    },
    "&.s-lg": {
      "@apply text-lg px-6 py-3 gap-3": {},
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

    /* Color variants */
    "&.muted": {
      "@apply text-muted-foreground": {},
      "&:hover": {
        "@apply bg-muted/20": {},
      },
      "&.active": {
        "@apply bg-muted/30": {},
      },
    },
    "&.primary": {
      "@apply text-primary": {},
      "&:hover": {
        "@apply bg-primary/10": {},
      },
      "&.active": {
        "@apply bg-primary/20": {},
      },
    },
    "&.secondary": {
      "@apply text-secondary": {},
      "&:hover": {
        "@apply bg-secondary/10": {},
      },
      "&.active": {
        "@apply bg-secondary/20": {},
      },
    },
    "&.accent": {
      "@apply text-accent": {},
      "&:hover": {
        "@apply bg-accent/10": {},
      },
      "&.active": {
        "@apply bg-accent/20": {},
      },
    },
    "&.info": {
      "@apply text-info": {},
      "&:hover": {
        "@apply bg-info/10": {},
      },
      "&.active": {
        "@apply bg-info/20": {},
      },
    },
    "&.success": {
      "@apply text-success": {},
      "&:hover": {
        "@apply bg-success/10": {},
      },
      "&.active": {
        "@apply bg-success/20": {},
      },
    },
    "&.warning": {
      "@apply text-warning": {},
      "&:hover": {
        "@apply bg-warning/10": {},
      },
      "&.active": {
        "@apply bg-warning/20": {},
      },
    },
    "&.danger": {
      "@apply text-danger": {},
      "&:hover": {
        "@apply bg-danger/10": {},
      },
      "&.active": {
        "@apply bg-danger/20": {},
      },
    },
  },

  ".menu-item-indicator": {
    "@apply absolute size-6 z-20 right-1 top-1/2 -translate-y-1/2": {},
  },

  ".menu-title": {
    "@apply flex-1 font-medium": {},

    /* Size variants */
    "&.s-sm": {
      "@apply text-xs": {},
    },
    "&.s-md": {
      "@apply text-sm": {},
    },
    "&.s-lg": {
      "@apply text-base": {},
    },

    /* Color variants */
    "&.muted": {
      "@apply text-muted-foreground": {},
    },
    "&.primary": {
      "@apply text-primary": {},
    },
    "&.secondary": {
      "@apply text-secondary": {},
    },
    "&.accent": {
      "@apply text-accent": {},
    },
    "&.info": {
      "@apply text-info": {},
    },
    "&.success": {
      "@apply text-success": {},
    },
    "&.warning": {
      "@apply text-warning": {},
    },
    "&.danger": {
      "@apply text-danger": {},
    },
  },

  /* Collapse menu styles */
  ".menu-collapse": {
    "@apply w-full overflow-hidden": {},

    /* Size variants */
    "&.s-sm": {
      "@apply text-sm": {},
    },
    "&.s-md": {
      "@apply text-base": {},
    },
    "&.s-lg": {
      "@apply text-lg": {},
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

  ".menu-collapse-trigger": {
    "@apply flex w-full items-center justify-between px-4 py-2 cursor-pointer":
      {},
    "@apply text-muted-foreground": {},
    "&:hover": {
      "@apply bg-muted/20": {},
    },

    /* Size variants inherited from parent */
    ".s-sm &": {
      "@apply px-2 py-1 text-sm": {},
    },
    ".s-md &": {
      "@apply px-4 py-2 text-base": {},
    },
    ".s-lg &": {
      "@apply px-6 py-3 text-lg": {},
    },

    /* Radius variants inherited from parent */
    ".r-none &": {
      "@apply rounded-none": {},
    },
    ".r-xs &": {
      "@apply rounded-xs": {},
    },
    ".r-sm &": {
      "@apply rounded-sm": {},
    },
    ".r-md &": {
      "@apply rounded-md": {},
    },
    ".r-lg &": {
      "@apply rounded-lg": {},
    },
    ".r-xl &": {
      "@apply rounded-xl": {},
    },
    ".r-full &": {
      "@apply rounded-full": {},
    },

    /* Color variants inherited from parent */
    ".muted &": {
      "@apply text-muted-foreground": {},
      "&:hover": {
        "@apply bg-muted/20": {},
      },
    },
    ".primary &": {
      "@apply text-primary": {},
      "&:hover": {
        "@apply bg-primary/10": {},
      },
    },
    ".secondary &": {
      "@apply text-secondary": {},
      "&:hover": {
        "@apply bg-secondary/10": {},
      },
    },
    ".accent &": {
      "@apply text-accent": {},
      "&:hover": {
        "@apply bg-accent/10": {},
      },
    },
    ".info &": {
      "@apply text-info": {},
      "&:hover": {
        "@apply bg-info/10": {},
      },
    },
    ".success &": {
      "@apply text-success": {},
      "&:hover": {
        "@apply bg-success/10": {},
      },
    },
    ".warning &": {
      "@apply text-warning": {},
      "&:hover": {
        "@apply bg-warning/10": {},
      },
    },
    ".danger &": {
      "@apply text-danger": {},
      "&:hover": {
        "@apply bg-danger/10": {},
      },
    },
  },

  ".menu-collapse-icon": {
    "@apply transition-transform duration-200": {},
    "&.open": {
      "@apply rotate-180": {},
    },
  },

  ".menu-collapse-content": {
    "@apply w-full": {},
    /* Child items should have a slight indentation */
    ".menu-item": {
      "@apply pl-6": {},
    },
    ".s-sm & .menu-item": {
      "@apply pl-4": {},
    },
    ".s-lg & .menu-item": {
      "@apply pl-8": {},
    },
  },
};
