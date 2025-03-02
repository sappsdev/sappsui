export default {
  ".badge": {
    // Base styles
    "@apply inline-flex items-center justify-center": {},
    "@apply whitespace-nowrap font-medium": {},
    "@apply transition-all duration-200": {},

    // Default size (md)
    "@apply px-2.5 h-6 text-xs": {},

    // Size variants
    "@apply [.s-xs]:px-1.5 [.s-xs]:h-4 [.s-xs]:text-xs": {},
    "@apply [.s-sm]:px-2 [.s-sm]:h-5 [.s-sm]:text-xs": {},
    "@apply [.s-md]:px-2.5 [.s-md]:h-6 [.s-md]:text-xs": {},
    "@apply [.s-lg]:px-3 [.s-lg]:h-7 [.s-lg]:text-sm": {},
    "@apply [.s-xl]:px-4 [.s-xl]:h-8 [.s-xl]:text-sm": {},

    // Radius variants
    "@apply [.r-none]:rounded-none": {},
    "@apply [.r-xs]:rounded-sm": {},
    "@apply [.r-sm]:rounded": {},
    "@apply [.r-md]:rounded-md": {},
    "@apply [.r-lg]:rounded-lg": {},
    "@apply [.r-xl]:rounded-xl": {},
    "@apply [.r-full]:rounded-full": {},

    // Color variants
    "@apply [.muted]:bg-muted [.muted]:text-muted-foreground": {},
    "@apply [.primary]:bg-primary [.primary]:text-primary-foreground": {},
    "@apply [.secondary]:bg-secondary [.secondary]:text-secondary-foreground": {},
    "@apply [.accent]:bg-accent [.accent]:text-accent-foreground": {},
    "@apply [.info]:bg-info [.info]:text-info-foreground": {},
    "@apply [.success]:bg-success [.success]:text-success-foreground": {},
    "@apply [.warning]:bg-warning [.warning]:text-warning-foreground": {},
    "@apply [.danger]:bg-danger [.danger]:text-danger-foreground": {}
  }
};