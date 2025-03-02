export default {
  ".avatar": {
    "@apply relative inline-flex items-center justify-center overflow-hidden bg-muted":
      {},

    // Size variants
    "@apply [.s-sm]:h-8 [.s-sm]:w-8 [.s-sm]:text-xs": {},
    "@apply [.s-md]:h-10 [.s-md]:w-10 [.s-md]:text-sm": {},
    "@apply [.s-lg]:h-14 [.s-lg]:w-14 [.s-md]:text-base": {},

    // Radius variants
    "@apply [.r-none]:rounded-none": {},
    "@apply [.r-xs]:rounded-sm": {},
    "@apply [.r-sm]:rounded": {},
    "@apply [.r-md]:rounded-md": {},
    "@apply [.r-lg]:rounded-lg": {},
    "@apply [.r-xl]:rounded-xl": {},
    "@apply [.r-full]:rounded-full": {},

    // Color variants
    "@apply [.default]:bg-muted [.default]:text-base100-foreground": {},
    "@apply [.primary]:bg-primary [.primary]:text-primary-foreground": {},
    "@apply [.secondary]:bg-secondary [.secondary]:text-secondary-foreground":
      {},
    "@apply [.success]:bg-success [.success]:text-success-foreground": {},
    "@apply [.warning]:bg-warning [.warning]:text-warning-foreground": {},
    "@apply [.danger]:bg-danger [.danger]:text-danger-foreground": {},

    // State variants
    "@apply [.bordered]:ring-2 [.bordered]:ring-border": {},
    "@apply [.disabled]:opacity-50 [.disabled]:cursor-not-allowed": {},
    "@apply [.unfocusable]:pointer-events-none": {},

    // Avatar image
    ".avatar-img": {
      "@apply h-full w-full object-cover": {},
    },

    // Fallback content
    ".avatar-fallback": {
      "@apply flex h-full w-full items-center justify-center font-medium": {},
    },
  },
};
