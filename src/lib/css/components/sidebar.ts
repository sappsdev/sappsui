export default {
  ".sidebar-root": {
    "&.left, &.right": {
      "@apply overflow-hidden": {},
      "@apply transition-all duration-300 ease-in-out": {},
    },

    "&.left": {
      "@apply w-[var(--w-sidebar-left)]": {},
    },

    "&.right": {
      "@apply w-[var(--w-sidebar-right)]": {},
    },
  },
  ".sidebar-wrapper": {
    "@apply fixed z-20": {},
    "@apply top-[var(--navbar-inset)]": {},
    "@apply bottom-[var(--dock-inset)]": {},
    "@apply h-[calc(100vh-var(--navbar-inset)-var(--dock-inset))]": {},
    "@apply flex flex-col bg-base-100 overflow-hidden": {},
    "@apply transition-all duration-300 ease-in-out": {},

    "&.left, &.right": {
      "@apply invisible": {},
    },

    "&.left": {
      "&:not(.drawer)": {
        "@apply w-[var(--w-sidebar-left)] visible": {},
      },

      "&.drawer": {
        "@apply -translate-x-full opacity-0 invisible left-0": {},
        "@apply transition-all duration-300 ease-in-out": {},

        "&.open-left": {
          "@apply translate-x-0 opacity-100 visible left-0": {},
          "@apply w-[var(--w-sidebar-left)]": {},
        },
      },
    },
    "&.right": {
      "&:not(.drawer)": {
        "@apply w-[var(--w-sidebar-right)] visible": {},
      },

      "&.drawer": {
        "@apply translate-x-full opacity-0 invisible right-0": {},
        "@apply transition-all duration-300 ease-in-out": {},

        "&.open-right": {
          "@apply translate-x-0 opacity-100 visible right-0": {},
          "@apply w-[var(--w-sidebar-right)]": {},
        },
      },
    },
  },
  ".sidebar-wrapper.left.drawer.full": {
    "@apply w-full": {},
  },

  ".sidebar-overlay": {
    "@apply invisible": {},
    "@apply h-[calc(100vh-var(--navbar-inset)-var(--dock-inset))]": {},
    "@apply fixed w-full bg-black/30 z-10 right-0 left-0": {},
    "@apply transition-opacity duration-300 ease-in-out": {},
    "@apply opacity-0": {},

    "&.open": {
      "@apply opacity-100 visible": {},
    },
  },
};
