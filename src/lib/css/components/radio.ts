export default {
  ".radio-root": {
    "@apply flex gap-4 w-full": {},
    "&.vertical": {
      "@apply flex-col": {},
    },
  },

  ".radio-item": {
    "@apply relative flex items-center gap-2": {},
    "@apply cursor-pointer select-none": {},
    "@apply text-sm text-gray-700 hover:text-gray-900": {},
  },

  ".radio-input": {
    // Base styles
    "@apply appearance-none m-0 relative cursor-pointer": {},
    "@apply border-2 border-gray-400/50 rounded-full": {},
    "@apply transition-all duration-200": {},

    // Default size (md)
    "@apply w-4 h-4": {},

    // Inner dot styles
    "@apply before:content-[''] before:absolute": {},
    "@apply before:w-2 before:h-2 before:rounded-full": {},
    "@apply before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2": {},
    "@apply before:scale-0 before:transition-transform before:duration-200": {},

    // Size variants
    "@apply group-[.s-xs]:w-3 group-[.s-xs]:h-3": {},
    "@apply group-[.s-xs]:before:w-1.5 group-[.s-xs]:before:h-1.5": {},

    "@apply group-[.s-sm]:w-3.5 group-[.s-sm]:h-3.5": {},
    "@apply group-[.s-sm]:before:w-1.5 group-[.s-sm]:before:h-1.5": {},

    "@apply group-[.s-md]:w-4 group-[.s-md]:h-4": {},
    "@apply group-[.s-md]:before:w-2 group-[.s-md]:before:h-2": {},

    "@apply group-[.s-lg]:w-5 group-[.s-lg]:h-5": {},
    "@apply group-[.s-lg]:before:w-2.5 group-[.s-lg]:before:h-2.5": {},

    "@apply group-[.s-xl]:w-6 group-[.s-xl]:h-6": {},
    "@apply group-[.s-xl]:before:w-3 group-[.s-xl]:before:h-3": {},

    // Color variants - Default is muted
    "&:hover:not(:checked)": {
      "@apply group-[.muted]:border-gray-400": {},
      "@apply group-[.primary]:border-primary/60": {},
      "@apply group-[.secondary]:border-secondary/60": {},
      "@apply group-[.accent]:border-accent/60": {},
      "@apply group-[.info]:border-info/60": {},
      "@apply group-[.success]:border-success/60": {},
      "@apply group-[.warning]:border-warning/60": {},
      "@apply group-[.danger]:border-danger/60": {},
    },

    "&:checked": {
      "@apply group-[.muted]:border-gray-500 group-[.muted]:before:bg-gray-500": {},
      "@apply group-[.primary]:border-primary group-[.primary]:before:bg-primary": {},
      "@apply group-[.secondary]:border-secondary group-[.secondary]:before:bg-secondary": {},
      "@apply group-[.accent]:border-accent group-[.accent]:before:bg-accent": {},
      "@apply group-[.info]:border-info group-[.info]:before:bg-info": {},
      "@apply group-[.success]:border-success group-[.success]:before:bg-success": {},
      "@apply group-[.warning]:border-warning group-[.warning]:before:bg-warning": {},
      "@apply group-[.danger]:border-danger group-[.danger]:before:bg-danger": {},
      "@apply before:scale-100": {},
    },

    "&:focus-visible": {
      "@apply outline-none ring-2": {},
      "@apply group-[.muted]:ring-gray-500/20": {},
      "@apply group-[.primary]:ring-primary/20": {},
      "@apply group-[.secondary]:ring-secondary/20": {},
      "@apply group-[.accent]:ring-accent/20": {},
      "@apply group-[.info]:ring-info/20": {},
      "@apply group-[.success]:ring-success/20": {},
      "@apply group-[.warning]:ring-warning/20": {},
      "@apply group-[.danger]:ring-danger/20": {},
    },
  },
};
