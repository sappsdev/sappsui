export default {
  ".menu-root": {
    "@apply flex gap-2 p-2 w-full overflow-clip": {},
    "&.vertical": {
      "@apply flex-col flex-wrap": {},
    },
  },
  ".menu-item": {
    "@apply flex flex-row flex-nowrap items-center gap-2": {},
    "@apply px-4 py-2 w-full cursor-pointer relative": {},
    
    "@apply text-muted-foreground": {},
    "&:hover": {
      "@apply bg-muted": {},
    },
    
    "&[class*=\"muted\"]": {
      "@apply text-muted": {},
      "&:hover": {
        "@apply bg-muted": {},
      },
      "&.active": {
        "@apply text-muted bg-muted": {},
      },
    },
    "&[class*=\"primary\"]": {
      "@apply text-primary": {},
      "&:hover": {
        "@apply bg-primary": {},
      },
      "&.active": {
        "@apply text-primary bg-primary": {},
      },
    },
    "&[class*=\"secondary\"]": {
      "@apply text-secondary": {},
      "&:hover": {
        "@apply bg-secondary": {},
      },
      "&.active": {
        "@apply text-secondary bg-secondary": {},
      },
    },
    "&[class*=\"accent\"]": {
      "@apply text-accent": {},
      "&:hover": {
        "@apply bg-accent": {},
      },
      "&.active": {
        "@apply text-accent bg-accent": {},
      },
    },
    "&[class*=\"info\"]": {
      "@apply text-info": {},
      "&:hover": {
        "@apply bg-info": {},
      },
      "&.active": {
        "@apply text-info bg-info": {},
      },
    },
    "&[class*=\"success\"]": {
      "@apply text-success": {},
      "&:hover": {
        "@apply bg-success": {},
      },
      "&.active": {
        "@apply text-success bg-success": {},
      },
    },
    "&[class*=\"warning\"]": {
      "@apply text-warning": {},
      "&:hover": {
        "@apply bg-warning": {},
      },
      "&.active": {
        "@apply text-warning bg-warning": {},
      },
    },
    "&[class*=\"danger\"]": {
      "@apply text-danger": {},
      "&:hover": {
        "@apply bg-danger": {},
      },
      "&.active": {
        "@apply text-danger bg-danger": {},
      },
    },
  },
  ".menu-item-indicator": {
    "@apply absolute size-6 z-20 right-1 top-1/2 -translate-y-1/2": {},
  },
  ".menu-title": {
    "@apply flex-1 text-xs font-normal": {},
  },
};
