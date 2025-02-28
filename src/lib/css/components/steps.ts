export default {
  ".steps": {
    // Base styles
    "@apply flex items-center w-full": {},
    "@apply transition-all duration-200": {},

    // Orientation variants
    "&.horizontal": {
      "@apply flex-row": {},
    },
    "&.vertical": {
      "@apply flex-col items-start": {},
    },

    // Size variants
    "@apply [.s-xs]:gap-2 [.s-xs]:text-xs": {},
    "@apply [.s-sm]:gap-3 [.s-sm]:text-sm": {},
    "@apply [.s-md]:gap-4 [.s-md]:text-sm": {},
    "@apply [.s-lg]:gap-5 [.s-lg]:text-base": {},
    "@apply [.s-xl]:gap-6 [.s-xl]:text-lg": {},
  },

  ".step": {
    // Base styles
    "@apply flex items-center relative": {},
    "@apply transition-all duration-200": {},

    // Horizontal step
    ".steps.horizontal &": {
      "@apply flex-1": {},
      "&:not(:first-child):before": {
        "@apply content-[''] absolute h-0.5 w-full left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-muted/50": {},
      },
    },

    // Vertical step
    ".steps.vertical &": {
      "@apply w-full mb-4 last:mb-0": {},
      "&:not(:first-child):before": {
        "@apply content-[''] absolute w-0.5 h-full left-4 top-0 -translate-y-1/2 bg-muted/50": {},
      },
    },

    // Step states
    "&.completed": {
      "@apply text-success": {},
      "&:before": {
        "@apply bg-success": {},
      },
    },
    "&.current": {
      "@apply font-medium": {},
      "&:before": {
        "@apply bg-primary/50": {},
      },
    },
    "&.upcoming": {
      "@apply text-muted-foreground": {},
    },
  },

  ".step-circle": {
    // Base styles
    "@apply flex items-center justify-center rounded-full": {},
    "@apply transition-all duration-200": {},
    "@apply z-10 relative": {},

    // Default size (md)
    "@apply size-8": {},

    // Size variants
    "@apply [.s-xs]:size-6": {},
    "@apply [.s-sm]:size-7": {},
    "@apply [.s-md]:size-8": {},
    "@apply [.s-lg]:size-10": {},
    "@apply [.s-xl]:size-12": {},

    // Color variants - Default (solid)
    "@apply [.muted]:bg-muted [.muted]:text-muted-foreground": {},
    "@apply [.primary]:bg-primary [.primary]:text-primary-foreground": {},
    "@apply [.secondary]:bg-secondary [.secondary]:text-secondary-foreground": {},
    "@apply [.accent]:bg-accent [.accent]:text-accent-foreground": {},
    "@apply [.info]:bg-info [.info]:text-info-foreground": {},
    "@apply [.success]:bg-success [.success]:text-success-foreground": {},
    "@apply [.warning]:bg-warning [.warning]:text-warning-foreground": {},
    "@apply [.danger]:bg-danger [.danger]:text-danger-foreground": {},

    // Variant: outlined
    "&.outlined": {
      "@apply border-2 bg-transparent": {},
      "@apply [.muted]:border-muted [.muted]:text-muted": {},
      "@apply [.primary]:border-primary [.primary]:text-primary": {},
      "@apply [.secondary]:border-secondary [.secondary]:text-secondary": {},
      "@apply [.accent]:border-accent [.accent]:text-accent": {},
      "@apply [.info]:border-info [.info]:text-info": {},
      "@apply [.success]:border-success [.success]:text-success": {},
      "@apply [.warning]:border-warning [.warning]:text-warning": {},
      "@apply [.danger]:border-danger [.danger]:text-danger": {},
    },

    // Variant: light
    "&.light": {
      "@apply bg-transparent": {},
      "@apply [.muted]:text-muted [.muted]:bg-muted/20": {},
      "@apply [.primary]:text-primary [.primary]:bg-primary/20": {},
      "@apply [.secondary]:text-secondary [.secondary]:bg-secondary/20": {},
      "@apply [.accent]:text-accent [.accent]:bg-accent/20": {},
      "@apply [.info]:text-info [.info]:bg-info/20": {},
      "@apply [.success]:text-success [.success]:bg-success/20": {},
      "@apply [.warning]:text-warning [.warning]:bg-warning/20": {},
      "@apply [.danger]:text-danger [.danger]:bg-danger/20": {},
    },

    // Step states
    ".step.completed &": {
      "@apply border-success bg-success text-success-foreground": {},
    },
    ".step.current &": {
      "@apply border-primary": {},
      "@apply shadow-sm": {},
    },
    ".step.upcoming &": {
      "@apply border-muted/50": {},
    },
  },

  ".step-content": {
    // Base styles
    "@apply flex flex-col ml-3": {},
    ".steps.vertical &": {
      "@apply ml-4": {},
    },
  },

  ".step-title": {
    "@apply font-medium": {},
    ".step.upcoming &": {
      "@apply text-muted-foreground": {},
    },
  },

  ".step-description": {
    "@apply text-sm text-muted-foreground": {},
  },
};