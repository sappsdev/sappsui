export default {
  ".tabs": {
    "@apply flex flex-col relative": {},
    "&.bottom": {
      "@apply flex-col-reverse": {},
    },
    "&.start": {
      "@apply flex-row h-full": {},
    },
    "&.end": {
      "@apply flex-row-reverse h-full": {},
    },
  },
  ".tabs-wrapper": {
    "@apply flex flex-row items-center": {},
  },
  ".tabs-list": {
    "@apply flex gap-2 items-center flex-nowrap overflow-x-auto relative": {},

    "&.start": {
      "@apply flex-col overflow-y-auto overflow-x-hidden": {},
    },
    "&.end": {
      "@apply flex-col  overflow-y-auto overflow-x-hidden": {},
    },

    // Size variants
    "@apply [.s-xs]:p-0.5 [.s-xs]:gap-1": {},
    "@apply [.s-sm]:p-1 [.s-sm]:gap-1.5": {},
    "@apply [.s-md]:p-1 [.s-md]:gap-2": {},
    "@apply [.s-lg]:p-1.5 [.s-lg]:gap-2.5": {},
    "@apply [.s-xl]:p-2 [.s-xl]:gap-3": {},

    // Radius variants
    "@apply [.r-none]:rounded-none": {},
    "@apply [.r-xs]:rounded-sm": {},
    "@apply [.r-sm]:rounded": {},
    "@apply [.r-md]:rounded-md": {},
    "@apply [.r-lg]:rounded-lg": {},
    "@apply [.r-xl]:rounded-xl": {},
    "@apply [.r-full]:rounded-full": {},

    // Color variants for the tabs list
    "@apply [.primary]:border-primary/50 [.secondary]:border-secondary/50 [.accent]:border-accent/50 [.success]:border-success/50 [.warning]:border-warning/50 [.error]:border-danger/50 [.info]:border-info/50":
      {},

    // Variant styles
    "&.solid": {
      "@apply bg-base300 text-base200-foreground": {},
      ".tab": {
        "@apply hover:bg-base200/50": {},
        "&.selected": {
          "@apply bg-base100 text-base100-foreground": {},
          "@apply [.primary]:bg-primary/10 [.primary]:text-primary": {},
          "@apply [.secondary]:bg-secondary/10 [.secondary]:text-secondary": {},
          "@apply [.accent]:bg-accent/10 [.accent]:text-accent": {},
          "@apply [.success]:bg-success/10 [.success]:text-success": {},
          "@apply [.warning]:bg-warning/10 [.warning]:text-warning": {},
          "@apply [.error]:bg-danger/10 [.error]:text-danger": {},
          "@apply [.info]:bg-info/10 [.info]:text-info": {},
        },
      },
      ".tab-indicator": {
        "@apply absolute z-10": {},
        // Radius variants
        "@apply [.r-none]:rounded-none": {},
        "@apply [.r-xs]:rounded-sm": {},
        "@apply [.r-sm]:rounded": {},
        "@apply [.r-md]:rounded-md": {},
        "@apply [.r-lg]:rounded-lg": {},
        "@apply [.r-xl]:rounded-xl": {},
        "@apply [.r-full]:rounded-full": {},
      },
    },
    "&.light": {
      "@apply bg-transparent": {},
      ".tab": {
        "@apply hover:bg-base300": {},
        "@apply [.primary]:text-primary/70 [.secondary]:text-secondary/70 [.accent]:text-accent/70 [.success]:text-success/70 [.warning]:text-warning/70 [.error]:text-danger/70 [.info]:text-info/70":
          {},
        "&.selected": {
          "@apply bg-base300": {},
          "@apply [.primary]:bg-primary/20 [.primary]:text-primary": {},
          "@apply [.secondary]:bg-secondary/20 [.secondary]:text-secondary": {},
          "@apply [.accent]:bg-accent/20 [.accent]:text-accent": {},
          "@apply [.success]:bg-success/20 [.success]:text-success": {},
          "@apply [.warning]:bg-warning/20 [.warning]:text-warning": {},
          "@apply [.error]:bg-danger/20 [.error]:text-danger": {},
          "@apply [.info]:bg-info/20 [.info]:text-info": {},
        },
      },
    },
    "&.bordered": {
      "@apply bg-transparent border border-border": {},
      ".tab": {
        "@apply hover:bg-base200": {},
        "@apply [.primary]:text-primary/70 [.secondary]:text-secondary/70 [.accent]:text-accent/70 [.success]:text-success/70 [.warning]:text-warning/70 [.error]:text-danger/70 [.info]:text-info/70":
          {},
        "&.selected": {
          "@apply bg-base300 text-base300-foreground": {},
          "@apply [.primary]:bg-primary/10 [.primary]:text-primary": {},
          "@apply [.secondary]:bg-secondary/10 [.secondary]:text-secondary": {},
          "@apply [.accent]:bg-accent/10 [.accent]:text-accent": {},
          "@apply [.success]:bg-success/10 [.success]:text-success": {},
          "@apply [.warning]:bg-warning/10 [.warning]:text-warning": {},
          "@apply [.error]:bg-danger/10 [.error]:text-danger": {},
          "@apply [.info]:bg-info/10 [.info]:text-info": {},
        },
      },
    },
    "&.underlined": {
      "@apply bg-transparent": {},
      ".tab": {
        "@apply hover:bg-base200/30": {},
        "@apply [.primary]:text-primary/70 [.secondary]:text-secondary/70 [.accent]:text-accent/70 [.success]:text-success/70 [.warning]:text-warning/70 [.error]:text-danger/70 [.info]:text-info/70":
          {},
        "&.selected": {
          "@apply bg-transparent": {},
          "@apply [.primary]:text-primary [.secondary]:text-secondary [.accent]:text-accent [.success]:text-success [.warning]:text-warning [.error]:text-danger [.info]:text-info":
            {},
        },
      },
      ".tab-indicator": {
        "@apply block": {},
      },
    },
    "@apply [.disabled]:opacity-50 [.disabled]:pointer-events-none": {},
  },
  ".tab": {
    "@apply z-20 w-full px-3 py-1 h-full flex relative justify-center items-center outline-none cursor-pointer whitespace-nowrap":
      {},

    // Size variants
    "@apply [.s-xs]:px-2 [.s-xs]:py-0.5 [.s-xs]:text-xs": {},
    "@apply [.s-sm]:px-2.5 [.s-sm]:py-0.5 [.s-sm]:text-sm": {},
    "@apply [.s-md]:px-3 [.s-md]:py-1 [.s-md]:text-base": {},
    "@apply [.s-lg]:px-4 [.s-lg]:py-1.5 [.s-lg]:text-lg": {},
    "@apply [.s-xl]:px-5 [.s-xl]:py-2 [.s-xl]:text-xl": {},

    // Radius variants
    "@apply [.r-none]:rounded-none": {},
    "@apply [.r-xs]:rounded-sm": {},
    "@apply [.r-sm]:rounded": {},
    "@apply [.r-md]:rounded-md": {},
    "@apply [.r-lg]:rounded-lg": {},
    "@apply [.r-xl]:rounded-xl": {},
    "@apply [.r-full]:rounded-full": {},

    "@apply [.disabled]:cursor-not-allowed [.disabled]:opacity-30": {},
    "@apply hover:opacity-80 focus:outline-none": {},
  },
  ".tab-content": {
    "@apply flex items-center h-full relative whitespace-nowrap transition-colors text-muted-foreground flex-1":
      {},
    "@apply [.selected]:text-base100-foreground [.selected]:font-medium": {},
    "@apply [.muted.selected]:text-muted [.primary.selected]:text-primary [.secondary.selected]:text-secondary [.accent.selected]:text-accent [.info.selected]:text-info [.success.selected]:text-success [.warning.selected]:text-warning [.error.selected]:text-danger":
      {},
  },
  ".tab-indicator": {
    "@apply block absolute z-0 opacity-0 pointer-events-none transition-all duration-300 ease-in-out":
      {},
    "@apply [.solid]:inset-0 [.light]:inset-0": {},
    "@apply [.underlined]:h-[2px] [.underlined]:w-full [.underlined]:bottom-0":
      {},
    "@apply [.bordered]:hidden": {},
    "@apply [.r-none]:rounded-none [.r-sm]:rounded [.r-md]:rounded-md [.r-lg]:rounded-lg [.r-full]:rounded-full":
      {},
    "@apply [.solid]:bg-transparent [.light]:bg-base200 [.underlined]:bg-base100-foreground [.bordered]:bg-base200":
      {},
    "@apply [.primary]:!bg-primary/20 [.secondary]:!bg-secondary/20 [.accent]:!bg-accent/20 [.info]:!bg-info/20 [.success]:!bg-success/20 [.warning]:!bg-warning/20 [.error]:!bg-danger/20":
      {},
  },
  ".tabs-content": {
    "@apply py-1 px-1 outline-none flex-1": {},
    "@apply [.placement-start]:py-0 [.placement-start]:px-3 [.placement-start]:ml-2":
      {},
    "@apply [.placement-end]:py-0 [.placement-end]:px-3 [.placement-end]:mr-2":
      {},
    "@apply [.hidden]:hidden": {},
    "@apply focus:outline-none focus:ring-2 focus:ring-border": {},
  },
};
