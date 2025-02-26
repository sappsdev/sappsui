export default {
  ".navbar-root": {
    "@apply h-[var(--h-navbar)] w-full fixed top-0 z-30 bg-base-100": {},
    "@apply transition-all duration-300 ease-in-out": {},
  },
  ".navbar-body": {
    "@apply w-full px-6 gap-4": {},
    "@apply flex flex-row flex-nowrap items-center justify-between": {},
    "@apply h-full overflow-hidden": {},
  },
  ".navbar-brand": {
    "@apply flex basis-0 flex-row flex-grow flex-nowrap justify-start": {},
    "@apply bg-transparent items-center no-underline": {},
    "@apply text-base whitespace-nowrap box-border": {},
  },
  ".navbar-content": {
    "@apply flex gap-4 h-full flex-row flex-nowrap items-center": {},
  },
  ".navbar-item": {
    "@apply text-base whitespace-nowrap box-border list-none": {},
  },
};
