export default {
  ".card": {
    "@apply flex flex-col relative": {},
    "@apply h-auto outline-none box-border bg-base-100 border border-border":
      {},
    // Radius variants
    "@apply [.r-none]:rounded-none": {},
    "@apply [.r-xs]:rounded-sm": {},
    "@apply [.r-sm]:rounded": {},
    "@apply [.r-md]:rounded-md": {},
    "@apply [.r-lg]:rounded-lg": {},
    "@apply [.r-xl]:rounded-xl": {},
    "@apply [.r-full]:rounded-full": {},

    // Shadow variants
    "@apply [.sh-none]:shadow-none": {},
    "@apply [.sh-sm]:shadow-sm": {},
    "@apply [.sh-md]:shadow": {},
    "@apply [.sh-lg]:shadow-lg": {},
    "@apply [.sh-xl]:shadow-xl": {},
  },
  ".card-header": {
    "@apply flex p-3 z-10 w-full justify-start items-center": {},
    "@apply  shrink-0  subpixel-antialiased": {},
  },
  ".card-body": {
    "@apply relative flex flex-1 w-full p-3 flex-auto flex-col ": {},
    "@apply h-auto break-words text-left subpixel-antialiased": {},
  },
  ".card-footer": {
    "@apply p-3 h-auto flex w-full items-center overflow-hidden": {},
    "@apply subpixel-antialiased": {},
  },
};
