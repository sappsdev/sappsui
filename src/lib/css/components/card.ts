const card = {
  ".card": {
    "@apply flex flex-col relative overflow-hidden": {},
    "@h-auto outline-none text-content box-border bg-base-100": {},
    "@apply shadow-medium rounded-lg": {},
  },
  ".card-header": {
    "@apply flex p-3 z-10 w-full justify-start items-center": {},
    "@apply  shrink-0  subpixel-antialiased": {},
  },
  ".card-body": {
    "@apply relative flex flex-1 w-full p-3 flex-auto flex-col ": {},
    "@apply h-auto break-words text-left overflow-y-auto subpixel-antialiased":
      {},
  },
  ".card-footer": {
    "@apply p-3 h-auto flex w-full items-center overflow-hidden": {},
    "@apply subpixel-antialiased": {},
  },
};

export default card;
