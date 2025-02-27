export default {
  ".btn": {
    // Base styles
    "@apply z-0 relative inline-flex items-center justify-center": {},
    "@apply box-border appearance-none outline-none select-none whitespace-nowrap":
      {},
    "@apply min-w-max font-normal subpixel-antialiased overflow-hidden": {},
    "@apply transition-all duration-200": {},
    "@apply active:scale-[0.97]": {},

    // Default size (md)
    "@apply px-4 h-10 text-sm gap-2": {},

    // Size variants
    "@apply [.s-xs]:px-3 [.s-xs]:h-8 [.s-xs]:text-xs [.s-xs]:gap-1.5": {},
    "@apply [.s-sm]:px-3 [.s-sm]:h-9 [.s-sm]:text-sm [.s-sm]:gap-1.5": {},
    "@apply [.s-md]:px-4 [.s-md]:h-10 [.s-md]:text-sm [.s-md]:gap-2": {},
    "@apply [.s-lg]:px-6 [.s-lg]:h-12 [.s-lg]:text-base [.s-lg]:gap-2": {},
    "@apply [.s-xl]:px-8 [.s-xl]:h-14 [.s-xl]:text-lg [.s-xl]:gap-3": {},

    // Radius variants
    "@apply [.r-none]:rounded-none": {},
    "@apply [.r-xs]:rounded-sm": {},
    "@apply [.r-sm]:rounded": {},
    "@apply [.r-md]:rounded-md": {},
    "@apply [.r-lg]:rounded-lg": {},
    "@apply [.r-xl]:rounded-xl": {},
    "@apply [.r-full]:rounded-full": {},

    // Variant: solid
    "&.solid": {
      "@apply [.muted]:bg-muted [.muted]:text-muted-foreground": {},
      "@apply [.primary]:bg-primary [.primary]:text-primary-foreground": {},
      "@apply [.secondary]:bg-secondary [.secondary]:text-secondary-foreground": {},
      "@apply [.accent]:bg-accent [.accent]:text-accent-foreground": {},
      "@apply [.info]:bg-info [.info]:text-info-foreground": {},
      "@apply [.success]:bg-success [.success]:text-success-foreground": {},
      "@apply [.warning]:bg-warning [.warning]:text-warning-foreground": {},
      "@apply [.danger]:bg-danger [.danger]:text-danger-foreground": {},

      "@apply hover:opacity-90": {},
    },

    // Variant: bordered
    "&.bordered": {
      "@apply border-2 bg-transparent": {},
      "@apply [.muted]:border-muted [.muted]:text-muted": {},
      "@apply [.primary]:border-primary [.primary]:text-primary": {},
      "@apply [.secondary]:border-secondary [.secondary]:text-secondary": {},
      "@apply [.accent]:border-accent [.accent]:text-accent": {},
      "@apply [.info]:border-info [.info]:text-info": {},
      "@apply [.success]:border-success [.success]:text-success": {},
      "@apply [.warning]:border-warning [.warning]:text-warning": {},
      "@apply [.danger]:border-danger [.danger]:text-danger": {},

      "@apply hover:opacity-80": {},
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

      "@apply [.muted]:hover:bg-muted/30": {},
      "@apply [.primary]:hover:bg-primary/30": {},
      "@apply [.secondary]:hover:bg-secondary/30": {},
      "@apply [.accent]:hover:bg-accent/30": {},
      "@apply [.info]:hover:bg-info/30": {},
      "@apply [.success]:hover:bg-success/30": {},
      "@apply [.warning]:hover:bg-warning/30": {},
      "@apply [.danger]:hover:bg-danger/30": {},
    },

    // Variant: flat
    "&.flat": {
      "@apply [.muted]:text-muted [.muted]:bg-gray-100": {},
      "@apply [.primary]:text-primary [.primary]:bg-primary/10": {},
      "@apply [.secondary]:text-secondary [.secondary]:bg-secondary/10": {},
      "@apply [.accent]:text-accent [.accent]:bg-accent/10": {},
      "@apply [.info]:text-info [.info]:bg-info/10": {},
      "@apply [.success]:text-success [.success]:bg-success/10": {},
      "@apply [.warning]:text-warning [.warning]:bg-warning/10": {},
      "@apply [.danger]:text-danger [.danger]:bg-danger/10": {},

      "@apply hover:opacity-80": {},
    },

    // Variant: faded
    "&.faded": {
      "@apply border bg-base-100/80": {},
      "@apply [.muted]:border-muted/50 [.muted]:text-muted": {},
      "@apply [.primary]:border-primary/50 [.primary]:text-primary": {},
      "@apply [.secondary]:border-secondary/50 [.secondary]:text-secondary": {},
      "@apply [.accent]:border-accent/50 [.accent]:text-accent": {},
      "@apply [.info]:border-info/50 [.info]:text-info": {},
      "@apply [.success]:border-success/50 [.success]:text-success": {},
      "@apply [.warning]:border-warning/50 [.warning]:text-warning": {},
      "@apply [.danger]:border-danger/50 [.danger]:text-danger": {},

      "@apply hover:bg-base-100": {},
    },

    // Variant: shadow
    "&.shadow": {
      "@apply shadow-lg": {},
      "@apply [.muted]:bg-muted [.muted]:text-muted-foreground [.muted]:shadow-muted/50":
        {},
      "@apply [.primary]:bg-primary [.primary]:text-primary-foreground [.primary]:shadow-primary/50":
        {},
      "@apply [.secondary]:bg-secondary [.secondary]:text-secondary-foreground [.secondary]:shadow-secondary/50":
        {},
      "@apply [.accent]:bg-accent [.accent]:text-accent-foreground [.accent]:shadow-accent/50":
        {},
      "@apply [.info]:bg-info [.info]:text-info-foreground [.info]:shadow-info/50": {},
      "@apply [.success]:bg-success [.success]:text-success-foreground [.success]:shadow-success/50":
        {},
      "@apply [.warning]:bg-warning [.warning]:text-warning-foreground [.warning]:shadow-warning/50":
        {},
      "@apply [.danger]:bg-danger [.danger]:text-danger-foreground [.danger]:shadow-danger/50":
        {},

      "@apply hover:opacity-90 hover:shadow-xl": {},
    },

    // Variant: ghost
    "&.ghost": {
      "@apply border-2 bg-transparent": {},
      "@apply [.muted]:border-transparent [.muted]:text-muted hover:[.muted]:bg-muted/20":
        {},
      "@apply [.primary]:border-transparent [.primary]:text-primary hover:[.primary]:bg-primary/20":
        {},
      "@apply [.secondary]:border-transparent [.secondary]:text-secondary hover:[.secondary]:bg-secondary/20":
        {},
      "@apply [.accent]:border-transparent [.accent]:text-accent hover:[.accent]:bg-accent/20":
        {},
      "@apply [.info]:border-transparent [.info]:text-info hover:[.info]:bg-info/20":
        {},
      "@apply [.success]:border-transparent [.success]:text-success hover:[.success]:bg-success/20":
        {},
      "@apply [.warning]:border-transparent [.warning]:text-warning hover:[.warning]:bg-warning/20":
        {},
      "@apply [.danger]:border-transparent [.danger]:text-danger hover:[.danger]:bg-danger/20":
        {},
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

    // Disabled state
    "&:disabled": {
      "@apply opacity-50 cursor-not-allowed pointer-events-none": {},
    },
  },
};
