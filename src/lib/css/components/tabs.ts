const tabs = {
  ".tabs": {
    "@apply flex flex-col": {},
  },
  ".tabs-item": {
    "@apply z-0 w-full px-3 py-1 flex relative": {},
    "@apply justify-center items-center outline-none transition-opacity": {},
  },
  ".tabs-item.active": {
    "@apply border-b-2 border-primary": {},
  },
  ".tabs-list": {
    "@apply flex p-1 h-fit gap-2 items-center flex-nowrap": {},
    "@apply overflow-x-scroll bg-base-100": {},
  },
  ".tabs-content": {
    "@apply relative z-10": {},
  },
};

export default tabs;
