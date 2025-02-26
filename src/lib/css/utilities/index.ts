const utilitiesStyles = {
  ".scrollbar-hide": {
    "-ms-overflow-style": "none",
    "scrollbar-width": "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  ".row": {
    "@apply flex flex-row": {},
  },
  ".column": {
    "@apply flex flex-col": {},
  },
  ".row-reverse": {
    "@apply flex flex-row-reverse": {},
  },
  ".column-reverse": {
    "@apply flex flex-col-reverse": {},
  },
  ".center": {
    "@apply flex h-full items-center justify-center": {},
  },
  ".label": {
    "@apply text-sm font-medium text-nowrap": {},
  },
  ".s-xl": {},
  ".s-lg": {},
  ".s-md": {},
  ".s-sm": {},
  ".s-xs": {},
  ".sh-xl": {},
  ".sh-lg": {},
  ".sh-md": {},
  ".sh-sm": {},
  ".sh-xs": {},
  ".r-xl": {},
  ".r-lg": {},
  ".r-md": {},
  ".r-sm": {},
  ".r-xs": {},
  ".r-full": {},
  ".r-none": {},
  ".primary": {},
  ".secondary": {},
  ".accent": {},
  ".muted": {},
  ".info": {},
  ".success": {},
  ".warning": {},
  ".danger": {},
  ".solid": {},
  ".bordered": {},
  ".underlined": {},
  ".light": {},
  ".flat": {},
  ".faded": {},
  ".shadow": {},
  ".ghost": {},
};

export default utilitiesStyles;
