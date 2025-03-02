export default {
  ".checkbox-container": {
    "@apply relative inline-flex items-center cursor-pointer gap-2": {},
  },
  ".checkbox": {
    // Base styles
    "@apply z-0 relative inline-flex cursor-pointer": {},
    "@apply box-border appearance-none outline-none select-none whitespace-nowrap":
      {},
    "@apply transition-all duration-200": {},
    "@apply active:scale-[0.97]": {},

    // Default size (md)
    "@apply h-6 w-6": {},

    // Size variants
    "@apply [.s-xs]:h-4 [.s-xs]:w-4": {},
    "@apply [.s-sm]:h-5 [.s-sm]:w-5": {},
    "@apply [.s-md]:h-6 [.s-md]:w-6": {},
    "@apply [.s-lg]:h-7 [.s-lg]:w-7": {},
    "@apply [.s-xl]:h-8 [.s-xl]:w-8": {},

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

  ".checkbox-box": {
    "@apply relative w-full h-full transition-colors duration-300": {},
    "@apply border border-gray-300 dark:border-gray-600": {},
    "@apply flex items-center justify-center": {},

    // Apply radius based on checkbox's radius
    ".checkbox.r-none &": { "@apply rounded-none": {} },
    ".checkbox.r-xs &": { "@apply rounded-sm": {} },
    ".checkbox.r-sm &": { "@apply rounded": {} },
    ".checkbox.r-md &": { "@apply rounded-md": {} },
    ".checkbox.r-lg &": { "@apply rounded-lg": {} },
    ".checkbox.r-xl &": { "@apply rounded-xl": {} },
    ".checkbox.r-full &": { "@apply rounded-full": {} },

    // Color variants for box
    ".checkbox.muted &": { "@apply bg-transparent": {} },
    ".checkbox.primary &": { "@apply bg-transparent": {} },
    ".checkbox.secondary &": { "@apply bg-transparent": {} },
    ".checkbox.accent &": { "@apply bg-transparent": {} },
    ".checkbox.info &": { "@apply bg-transparent": {} },
    ".checkbox.success &": { "@apply bg-transparent": {} },
    ".checkbox.warning &": { "@apply bg-transparent": {} },
    ".checkbox.danger &": { "@apply bg-transparent": {} },

    // Color variants for box when checked
    ".checkbox.checked.muted &": { "@apply bg-muted border-muted": {} },
    ".checkbox.checked.primary &": { "@apply bg-primary border-primary": {} },
    ".checkbox.checked.secondary &": {
      "@apply bg-secondary border-secondary": {},
    },
    ".checkbox.checked.accent &": { "@apply bg-accent border-accent": {} },
    ".checkbox.checked.info &": { "@apply bg-info border-info": {} },
    ".checkbox.checked.success &": { "@apply bg-success border-success": {} },
    ".checkbox.checked.warning &": { "@apply bg-warning border-warning": {} },
    ".checkbox.checked.danger &": { "@apply bg-danger border-danger": {} },
  },

  ".checkbox-icon": {
    // Size variants for the icon
    ".checkbox.s-xs &": { "@apply text-xs": {} },
    ".checkbox.s-sm &": { "@apply text-sm": {} },
    ".checkbox.s-md &": { "@apply text-base": {} },
    ".checkbox.s-lg &": { "@apply text-lg": {} },
    ".checkbox.s-xl &": { "@apply text-xl": {} },

    // Color based on checked state
    "@apply text-base100-foreground": {},
  },

  ".checkbox-checkmark": {
    "@apply opacity-0 transform scale-0 transition-all duration-200": {},
    "@apply border-b-2 border-r-2 border-white": {},
    "@apply rotate-45": {},

    // Size variants for the checkmark
    ".checkbox.s-xs &": { "@apply h-1.5 w-1": {} },
    ".checkbox.s-sm &": { "@apply h-2 w-1": {} },
    ".checkbox.s-md &": { "@apply h-2.5 w-1.5": {} },
    ".checkbox.s-lg &": { "@apply h-3 w-2": {} },
    ".checkbox.s-xl &": { "@apply h-3.5 w-2.5": {} },

    // Show checkmark when checked
    ".checkbox.checked &": { "@apply opacity-100 scale-100": {} },
  },
};
