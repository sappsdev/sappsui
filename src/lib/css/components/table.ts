export default {
  ".table-container": {
    "@apply relative w-full": {},
    "&.full-width": {
      "@apply w-full": {},
    },
    "&.compact": {
      ".table-cell, .table-column": {
        "@apply py-1 px-2": {},
      },
    },
    "&.striped": {
      ".table-row:nth-child(even)": {
        "@apply bg-base200/30": {},
      },
    },
    "&.sticky-header": {
      ".table-header": {
        "@apply sticky top-0 z-10 bg-base100": {},
      },
    },

    // Size variants
    "@apply [.s-xs]:text-xs": {},
    "@apply [.s-sm]:text-sm": {},
    "@apply [.s-md]:text-base": {},
    "@apply [.s-lg]:text-lg": {},
    "@apply [.s-xl]:text-xl": {},

    // Radius variants
    "@apply [.r-none]:rounded-none": {},
    "@apply [.r-xs]:rounded-sm": {},
    "@apply [.r-sm]:rounded": {},
    "@apply [.r-md]:rounded-md": {},
    "@apply [.r-lg]:rounded-lg": {},
    "@apply [.r-xl]:rounded-xl": {},
    "@apply [.r-full]:rounded-full": {},

    // Color variants
    "@apply [.primary]:border-primary/50 [.secondary]:border-secondary/50 [.accent]:border-accent/50 [.success]:border-success/50 [.warning]:border-warning/50 [.danger]:border-danger/50 [.info]:border-info/50":
      {},
  },
  ".table": {
    "@apply border-collapse w-full h-auto": {},
  },
  ".table-header": {
    "@apply bg-base200/50": {},
  },
  ".table-body": {
    "@apply divide-y divide-base300": {},
  },
  ".table-row": {
    "@apply border-b border-base300 transition-colors hover:bg-base200/20": {},
    "&.selected": {
      "@apply bg-primary/10": {},
      "@apply [.primary]:bg-primary/10": {},
      "@apply [.secondary]:bg-secondary/10": {},
      "@apply [.accent]:bg-accent/10": {},
      "@apply [.success]:bg-success/10": {},
      "@apply [.warning]:bg-warning/10": {},
      "@apply [.danger]:bg-danger/10": {},
      "@apply [.info]:bg-info/10": {},
    },
  },
  ".table-columns": {
    "@apply py-3 px-4 text-left font-medium text-base100-foreground": {},
    "&.sortable": {
      "@apply cursor-pointer select-none": {},
      "&:hover": {
        "@apply bg-base300/30": {},
      },
    },
    "&.sorted": {
      "@apply bg-base300/50": {},
      "@apply [.primary]:text-primary [.secondary]:text-secondary [.accent]:text-accent [.success]:text-success [.warning]:text-warning [.danger]:text-danger [.info]:text-info":
        {},
    },
  },
  ".table-column-content": {
    "@apply flex items-center gap-2": {},
  },
  ".table-cell": {
    "@apply py-3 px-4 align-middle": {},
  },
  ".sort-icon": {
    "@apply inline-flex ml-2 h-4 w-4 items-center justify-center text-muted-foreground":
      {},
    "@apply [.primary]:text-primary/70 [.secondary]:text-secondary/70 [.accent]:text-accent/70 [.success]:text-success/70 [.warning]:text-warning/70 [.danger]:text-danger/70 [.info]:text-info/70":
      {},
  },
};
