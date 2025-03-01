export default {
  ".dropzone": {
    "@apply relative flex flex-col items-center justify-center w-full min-h-[200px] cursor-pointer":
      {},
    "@apply border-2 border-dashed transition-all duration-200": {},
    "@apply bg-base100": {},

    "@apply [.s-sm]:min-h-[150px] [.s-sm]:text-sm": {},
    "@apply [.s-md]:min-h-[200px] [.s-md]:text-base": {},
    "@apply [.s-lg]:min-h-[250px] [.s-lg]:text-lg": {},

    "@apply [.r-none]:rounded-none": {},
    "@apply [.r-xs]:rounded-sm": {},
    "@apply [.r-sm]:rounded": {},
    "@apply [.r-md]:rounded-md": {},
    "@apply [.r-lg]:rounded-lg": {},
    "@apply [.r-xl]:rounded-xl": {},
    "@apply [.r-full]:rounded-full": {},

    "@apply [.sh-sm]:shadow-sm": {},
    "@apply [.sh-md]:shadow-md": {},
    "@apply [.sh-lg]:shadow-lg": {},
    "@apply [.sh-xl]:shadow-xl": {},
    "@apply [.sh-none]:shadow-none": {},

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
      "@apply [.muted]:bg-muted/20": {},
      "@apply [.primary]:bg-primary/20": {},
      "@apply [.secondary]:bg-secondary/20": {},
      "@apply [.accent]:bg-accent/20": {},
      "@apply [.info]:bg-info/20": {},
      "@apply [.success]:bg-success/20": {},
      "@apply [.warning]:bg-warning/20": {},
      "@apply [.danger]:bg-danger/20": {},
    },

    "&.drag-over": {
      "@apply border-primary/50 bg-primary/5": {},
    },

    "&.disabled": {
      "@apply opacity-50 cursor-not-allowed": {},
    },

    ".file-input": {
      "@apply hidden": {},
    },

    ".dropzone-placeholder": {
      "@apply flex flex-col items-center justify-center gap-2 p-4 text-center":
        {},
      ".icon": {
        "@apply text-gray-400 mb-2": {},
      },
      ".label": {
        "@apply text-gray-600 font-medium": {},
      },
      ".info": {
        "@apply text-gray-400 text-sm": {},
      },
    },

    ".file-list": {
      "@apply w-full grid gap-4 p-4": {},
      "@apply grid-cols-1 sm:grid-cols-2 lg:grid-cols-3": {},

      ".file-item": {
        "@apply relative": {},

        ".file-preview": {
          "@apply relative flex items-center gap-3 p-3 rounded-lg border bg-base200":
            {},

          ".file-icon": {
            "@apply flex items-center justify-center w-10 h-10 rounded-md bg-base300 text-gray-500":
              {},
          },

          ".file-info": {
            "@apply flex-1 min-w-0": {},

            ".file-name": {
              "@apply text-sm font-medium truncate": {},
            },
            ".file-size": {
              "@apply text-xs text-gray-400": {},
            },
          },

          ".progress-bar": {
            "@apply absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-b-lg overflow-hidden":
              {},
            ".progress": {
              "@apply h-full bg-primary transition-all duration-200": {},
            },
          },

          ".remove-button": {
            "@apply flex items-center justify-center w-6 h-6 text-gray-400 hover:text-danger transition-colors":
              {},
            "@apply disabled:opacity-50 disabled:cursor-not-allowed": {},
          },
        },
      },

      ".add-more": {
        "@apply flex items-center justify-center w-full h-full min-h-[100px] rounded-lg border-2 border-dashed":
          {},
        "@apply text-gray-400 hover:text-primary hover:border-primary transition-colors":
          {},
      },
    },
  },
};
