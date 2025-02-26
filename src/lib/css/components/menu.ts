export default {
  ".menu-root": {
    "@apply flex gap-2 p-2 w-full overflow-clip": {},
    "&.vertical": {
      "@apply flex-col flex-wrap": {},
    },
  },
  ".menu-item": {
    "@apply flex flex-row flex-nowrap items-center gap-2": {},
    "@apply px-4 py-2 w-full cursor-pointer": {},
    "&.active": {
      "@apply text-primary bg-primary/10": {},
    },
  },
  ".menu-title": {
    "@apply flex-1 text-xs font-normal": {},
  },
};
