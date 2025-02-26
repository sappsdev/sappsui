export default {
  ".dock-root": {
    "@apply h-[var(--h-dock)] w-full fixed bottom-0 z-30 bg-base-100": {},
    "@apply transition-all duration-300 ease-in-out": {},
  },
  ".dock-body": {
    "@apply w-full px-6 gap-4 relative": {},
    "@apply flex flex-row flex-nowrap items-center justify-between": {},
    "@apply h-full overflow-hidden": {},
  },
};
