const tabs = {
  ".tabs-root": {
    "&.top": {},
    "&.bottom": {
      "@apply flex flex-col-reverse": {},
    },
    "&.start": {
      "@apply flex": {},
    },
    "&.end": {
      "@apply flex flex-row-reverse": {},
    },
  },
  ".tabs-wrapper": {
    "@apply inline-flex": {},
  },
  ".tabs-list": {
    "@apply flex p-1 h-fit gap-2 items-center flex-nowrap": {},
    "@apply overflow-x-scroll scrollbar-hide": {},
    "&.top": {},
    "&.bottom": {},
    "&.start": {
      "@apply flex-col": {},
    },
    "&.end": {
      "@apply flex-col": {},
    },
    "&.solid": {
      "@apply bg-base-200": {},
    },
    "&.underlined": {
      "@apply bg-transparent": {},
    },
    "&.bordered": {
      "@apply bg-transparent": {},
    },
    "&.light": {
      "@apply bg-transparent": {},
    },
  },
  ".tab": {
    "@apply z-0 w-full px-3 py-1 flex relative": {},
    "@apply justify-center items-center outline-none transition-opacity": {},
    "@apply cursor-pointer": {},
    "&.sm": {
      "@apply h-7 text-xs rounded-sm": {},
    },
    "&.md": {
      "@apply h-8 text-sm rounded-md": {},
    },
    "&.lg": {
      "@apply h-9 text-base rounded-lg": {},
    },
    "&.solid": {},
    "&.underlined": {
      "@apply bg-transparent": {},
    },
    "&.bordered": {
      "@apply bg-transparent border-2 shadow-md border-border": {},
    },
    "&.light": {
      "@apply bg-transparent": {},
    },
  },
  ".tab-content": {
    "@apply relative z-10 whitespace-nowrap": {},
  },
  ".tab-cursor": {
    "@apply absolute z-0": {},
    "&.solid": {
      "@apply inset-0": {},
    },
    "&.underlined": {
      "@apply h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]":
        {},
    },
    "&.bordered": {
      "@apply inset-0": {},
    },
    "&.light": {
      "@apply inset-0": {},
    },
  },
  ".tabs-content": {
    "@apply py-3 px-1 w-full": {},
    "&.top": {},
    "&.bottom": {},
    "&.start": {
      "@apply py-0 px-3": {},
    },
    "&.end": {
      "@apply py-0 px-3": {},
    },
  },
};

export default tabs;
