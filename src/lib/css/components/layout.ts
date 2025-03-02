export default {
  ".layout-root": {
    "@apply h-dvh w-full flex flex-col": {},
  },

  ".layout-wrapper": {
    "@apply w-full fixed overflow-y-auto": {},
    "@apply mt-[var(--navbar-inset)]": {},
    "@apply mb-[var(--dock-inset)]": {},
    "@apply h-[calc(100vh-var(--navbar-inset)-var(--dock-inset))]": {},
  },

  ".layout-body": {
    "@apply flex h-full": {},
  },

  ".layout-main": {
    "@apply flex-1 flex flex-col overflow-hidden overflow-y-auto": {},
  },
};
