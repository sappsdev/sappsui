export default {
  ".dropdown": {
    "@apply relative inline-block": {},
  },
  ".dropdown-content": {
    "@apply absolute z-30 bg-base-100 w-full column": {},
    "@apply max-h-56 overflow-y-auto drop-shadow-lg box-border": {},
    "@apply my-1 rounded-xl": {},
    "@apply flex flex-1 w-full flex-auto flex-col": {},
  },
  ".dropdown-arrow": {
    "@apply absolute size-4 text-muted-foreground z-20": {},
    "@apply pointer-events-none right-1 top-1/2 -translate-y-1/2": {},
    "@apply transition-all duration-300 ease-in-out": {},
  },
};
