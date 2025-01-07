const layout = {
  // Layout
  ".layout-root": {
    "@apply h-screen w-full flex flex-col": {},
  },

  ".layout-wrapper": {
    "@apply h-full w-full flex-1 overflow-y-auto": {},
  },

  ".layout-body": {
    "@apply flex h-full": {},
  },

  ".layout-main": {
    "@apply flex-1 flex flex-col": {},
  },

  // Navbar
  ".navbar-root": {
    "@apply h-[var(--h-navbar)] w-full": {},
  },
  ".navbar-wrapper": {
    "@apply h-auto fixed top-0 z-30 w-full": {},
    "@apply bg-background": {},
  },
  ".navbar-body": {
    "@apply w-full px-6 gap-4 relative": {},
    "@apply flex flex-row flex-nowrap items-center justify-between": {},
    "@apply h-[var(--h-navbar)]": {},
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

  // Sidebar
  ".sidebar-root": {},
  ".sidebar-root.left": {
    "@apply w-[var(--w-sidebar-left)]": {},
  },
  ".sidebar-wrapper.left.drawer": {
    "@apply fixed left-0 z-20": {},
  },
  ".sidebar-wrapper.left.drawer.full": {
    "@apply w-full": {},
  },
  ".sidebar-root.right": {
    "@apply w-[var(--w-sidebar-right)]": {},
  },

  ".sidebar-wrapper": {
    "@apply fixed h-[calc(100vh-var(--navbar-inset)-var(--dock-inset))]": {},
    "@apply flex flex-col bg-background": {},
  },
  ".sidebar-wrapper.left": {
    "@apply w-[var(--w-sidebar-left)]": {},
  },
  ".sidebar-wrapper.right": {
    "@apply w-[var(--w-sidebar-right)]": {},
  },

  ".sidebar-overlay": {
    "@apply hidden h-[calc(100vh-var(--navbar-inset)-var(--dock-inset))]": {},
    "@apply fixed w-full h-full bg-black/50 z-10": {},
  },

  ".sidebar-overlay.drawer": {
    "@apply block": {},
  },

  // Content

  ".content-header": {
    "@apply flex py-4 px-6 flex-initial font-semibold": {},
  },
  ".content-footer": {
    "@apply flex mt-auto gap-2 px-6 py-4 justify-end": {},
  },
  ".content-body": {
    "@apply flex-1  flex flex-col": {},
  },

  // Menu

  ".menu-list": {
    "@apply w-full flex flex-col gap-0.5 outline-none h-full": {},
  },
  ".menu-item": {
    "@apply flex gap-2 items-center justify-between relative": {},
    "@apply px-2 py-1.5 h-full w-full box-border": {},
  },

  // Dock

  ".dock-root": {
    "@apply w-full": {},
    "@apply h-[var(--h-dock)]": {},
  },
  ".dock-wrapper": {
    "@apply h-auto w-full fixed bottom-0 z-30": {},
    "@apply bg-background": {},
  },
  ".dock-body": {
    "@apply w-full px-6 gap-4 relative": {},
    "@apply flex flex-row flex-nowrap items-center justify-between": {},
    "@apply h-[var(--h-dock)]": {},
  },

  // Main

  ".main-content": {
    "@apply flex-1": {},
    "@apply transition-all duration-300 ease-in-out": {},
  },
};

export default layout;
