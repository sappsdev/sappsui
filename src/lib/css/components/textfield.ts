export default {
  ".text-field": {
    "@apply relative flex items-center gap-2 w-full": {},
    "@apply border appearance-none outline-none select-none": {},
    "@apply transition-all duration-200": {},
    "@apply bg-base100 border": {},
    "@apply py-2": {},

    "@apply px-4 min-h-[3rem] text-sm": {},

    "@apply [.s-sm]:min-h-[2.75rem] [.s-sm]:text-sm": {},
    "@apply [.s-md]:min-h-[3rem] [.s-md]:text-base": {},
    "@apply [.s-lg]:min-h-[3.5rem] [.s-lg]:text-lg": {},

    "@apply [.r-none]:rounded-none": {},
    "@apply [.r-xs]:rounded-sm": {},
    "@apply [.r-sm]:rounded": {},
    "@apply [.r-md]:rounded-md": {},
    "@apply [.r-lg]:rounded-lg": {},
    "@apply [.r-xl]:rounded-xl": {},
    "@apply [.r-full]:rounded-full": {},

    "input, textarea": {
      "@apply appearance-none w-full bg-transparent border-none outline-none p-0 m-0":
        {},
      "@apply placeholder:text-gray-400": {},
      "@apply disabled:opacity-50": {},
    },

    textarea: {
      "@apply resize-none field-sizing-content": {},
    },

    // Variant: flat
    "&.flat": {
      "@apply [.muted]:border-muted/10 [.muted]:bg-muted/20": {},
      "@apply [.primary]:border-primary/10 [.primary]:bg-primary/20": {},
      "@apply [.secondary]:border-secondary/10 [.secondary]:bg-secondary/20":
        {},
      "@apply [.accent]:border-accent/10 [.accent]:bg-accent/20": {},
      "@apply [.info]:border-info/10 [.info]:bg-info/20": {},
      "@apply [.success]:border-success/10 [.success]:bg-success/20": {},
      "@apply [.warning]:border-warning/10 [.warning]:bg-warning/20": {},
      "@apply [.danger]:border-danger/10 [.danger]:bg-danger/20": {},
    },

    "&.bordered": {
      "@apply border-1": {},
      "@apply [.muted]:border-muted": {},
      "@apply [.primary]:border-primary": {},
      "@apply [.secondary]:border-secondary": {},
      "@apply [.accent]:border-accent": {},
      "@apply [.info]:border-info": {},
      "@apply [.success]:border-success": {},
      "@apply [.warning]:border-warning": {},
      "@apply [.danger]:border-danger": {},
    },

    "&.faded": {
      "@apply bg-muted/30 border": {},
      "@apply [.muted]:border-muted/50": {},
      "@apply [.primary]:border-primary/50": {},
      "@apply [.secondary]:border-secondary/50": {},
      "@apply [.accent]:border-accent/50": {},
      "@apply [.info]:border-info/50": {},
      "@apply [.success]:border-success/50": {},
      "@apply [.warning]:border-warning/50": {},
      "@apply [.danger]:border-danger/50": {},
    },

    // Variant: underlined
    "&.underlined": {
      "@apply rounded-none border-x-0 border-t-0 border-b-1 px-0": {},
      "@apply [.muted]:border-muted": {},
      "@apply [.primary]:border-primary": {},
      "@apply [.secondary]:border-secondary": {},
      "@apply [.accent]:border-accent": {},
      "@apply [.info]:border-info": {},
      "@apply [.success]:border-success": {},
      "@apply [.warning]:border-warning": {},
      "@apply [.danger]:border-danger": {},
    },

    "&:focus-within": {
      "@apply border-2": {},
      "@apply [.underlined]:rounded-none [.underlined]:border-x-0 [.underlined]:border-t-0":
        {},
      "@apply [.muted]:ring-muted/20 [.muted]:border-muted": {},
      "@apply [.primary]:ring-primary/20 [.primary]:border-primary": {},
      "@apply [.secondary]:ring-secondary/20 [.secondary]:border-secondary": {},
      "@apply [.accent]:ring-accent/20 [.accent]:border-accent": {},
      "@apply [.info]:ring-info/20 [.info]:border-info": {},
      "@apply [.success]:ring-success/20 [.success]:border-success": {},
      "@apply [.warning]:ring-warning/20 [.warning]:border-warning": {},
      "@apply [.danger]:ring-danger/20 [.danger]:border-danger": {},
    },
  },

  ".text-field.inside": {
    "@apply items-end": {},
    "@apply [.s-sm]:min-h-12 [.s-sm]:text-sm": {},
    "@apply [.s-md]:min-h-14 [.s-md]:text-base": {},
    "@apply [.s-lg]:min-h-16 [.s-lg]:text-lg": {},

    // Label styles
    ".label": {
      "@apply absolute left-3 top-0.5 px-1 text-sm pointer-events-none transition-all duration-200 z-10 text-base100-foreground/70":
        {},

      "@apply group-[.underlined]:left-0": {},
      "@apply group-[.s-sm]:text-xs": {},
    },
    textarea: {
      "@apply mt-3": {},
    },
  },

  ".info": {
    "@apply text-sm": {},
  },
  ".error": {
    "@apply text-sm text-danger": {},
  },

  ".form-control": {
    "@apply flex column gap-0.5 w-full": {},
  },
};
