export default {
  ".toggle-container": {
    "@apply relative inline-flex items-center cursor-pointer gap-2": {},
  },
  ".toggle": {
    // Base styles
    "@apply z-0 relative inline-flex cursor-pointer": {},
    "@apply box-border appearance-none outline-none select-none whitespace-nowrap":
      {},
    "@apply transition-all duration-200": {},
    "@apply active:scale-[0.97]": {},

    // Default size (md)
    "@apply h-6 w-12": {},

    // Size variants
    "@apply [.s-xs]:h-4 [.s-xs]:w-8": {},
    "@apply [.s-sm]:h-5 [.s-sm]:w-10": {},
    "@apply [.s-md]:h-6 [.s-md]:w-12": {},
    "@apply [.s-lg]:h-7 [.s-lg]:w-14": {},
    "@apply [.s-xl]:h-8 [.s-xl]:w-16": {},

    // Radius variants
    "@apply [.r-none]:rounded-none": {},
    "@apply [.r-xs]:rounded-sm": {},
    "@apply [.r-sm]:rounded": {},
    "@apply [.r-md]:rounded-md": {},
    "@apply [.r-lg]:rounded-lg": {},
    "@apply [.r-xl]:rounded-xl": {},
    "@apply [.r-full]:rounded-full": {},

    // Disabled state
    "&:disabled, &.disabled": {
      "@apply opacity-50 cursor-not-allowed pointer-events-none": {},
    },

    // Focus styles
    "&:focus-visible": {
      "@apply outline-none ring-2": {},
      "@apply [.muted]:ring-muted/20": {},
      "@apply [.primary]:ring-primary/20": {},
      "@apply [.secondary]:ring-secondary/20": {},
      "@apply [.accent]:ring-accent/20": {},
      "@apply [.info]:ring-info/20": {},
      "@apply [.success]:ring-success/20": {},
      "@apply [.warning]:ring-warning/20": {},
      "@apply [.danger]:ring-danger/20": {},
    },
  },

  ".toggle-track": {
    "@apply relative w-full h-full transition-colors duration-300": {},
    "@apply border border-gray-300 dark:border-gray-600": {},

    // Apply radius based on toggle's radius
    ".toggle.r-none &": { "@apply rounded-none": {} },
    ".toggle.r-xs &": { "@apply rounded-sm": {} },
    ".toggle.r-sm &": { "@apply rounded": {} },
    ".toggle.r-md &": { "@apply rounded-md": {} },
    ".toggle.r-lg &": { "@apply rounded-lg": {} },
    ".toggle.r-xl &": { "@apply rounded-xl": {} },
    ".toggle.r-full &": { "@apply rounded-full": {} },

    // Color variants for track
    ".toggle.muted &": { "@apply bg-muted/20": {} },
    ".toggle.primary &": { "@apply bg-primary/20": {} },
    ".toggle.secondary &": { "@apply bg-secondary/20": {} },
    ".toggle.accent &": { "@apply bg-accent/20": {} },
    ".toggle.info &": { "@apply bg-info/20": {} },
    ".toggle.success &": { "@apply bg-success/20": {} },
    ".toggle.warning &": { "@apply bg-warning/20": {} },
    ".toggle.danger &": { "@apply bg-danger/20": {} },

    // Color variants for track when checked
    ".toggle.checked.muted &": { "@apply bg-muted": {} },
    ".toggle.checked.primary &": { "@apply bg-primary": {} },
    ".toggle.checked.secondary &": { "@apply bg-secondary": {} },
    ".toggle.checked.accent &": { "@apply bg-accent": {} },
    ".toggle.checked.info &": { "@apply bg-info": {} },
    ".toggle.checked.success &": { "@apply bg-success": {} },
    ".toggle.checked.warning &": { "@apply bg-warning": {} },
    ".toggle.checked.danger &": { "@apply bg-danger": {} },
  },

  ".toggle-thumb": {
    "@apply absolute top-[1px] left-[2px] right-[2px] bg-base100": {},
    "@apply shadow transition-transform duration-200": {},
    "@apply flex items-center justify-center": {},

    // Size variants for the thumb
    ".toggle.s-xs &": { "@apply h-3 w-3": {} },
    ".toggle.s-sm &": { "@apply h-4 w-4": {} },
    ".toggle.s-md &": { "@apply h-5 w-5": {} },
    ".toggle.s-lg &": { "@apply h-6 w-6": {} },
    ".toggle.s-xl &": { "@apply h-7 w-7": {} },

    // Apply radius based on toggle's radius
    ".toggle.r-none &": { "@apply rounded-none": {} },
    ".toggle.r-xs &": { "@apply rounded-sm": {} },
    ".toggle.r-sm &": { "@apply rounded": {} },
    ".toggle.r-md &": { "@apply rounded-md": {} },
    ".toggle.r-lg &": { "@apply rounded-lg": {} },
    ".toggle.r-xl &": { "@apply rounded-xl": {} },
    ".toggle.r-full &": { "@apply rounded-full": {} },

    // Move thumb when checked
    ".toggle.checked &": { "@apply translate-x-[calc(100%+2px)]": {} },
  },

  ".toggle-icon": {
    // Size variants for the icon
    ".toggle.s-xs &": { "@apply text-xs": {} },
    ".toggle.s-sm &": { "@apply text-sm": {} },
    ".toggle.s-md &": { "@apply text-base": {} },
    ".toggle.s-lg &": { "@apply text-lg": {} },
    ".toggle.s-xl &": { "@apply text-xl": {} },

    // Color based on checked state
    "@apply text-base100-foreground": {},
  },
};
