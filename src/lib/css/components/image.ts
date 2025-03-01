export default {
  ".img": {
    "@apply relative overflow-hidden bg-muted": {},
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

    // Additional effects
    "@apply [.isBlurred]:before:content-[''] [.isBlurred]:before:absolute [.isBlurred]:before:inset-0 [.isBlurred]:before:bg-[inherit] [.isBlurred]:before:blur-[20px] [.isBlurred]:before:scale-150 [.isBlurred]:before:-z-10":
      {},
    "@apply [.isZoomed]:hover:scale-125 [.isZoomed]:transition-all [.isZoomed]:duration-300 [.isZoomed]:ease-in-out [.isZoomed]:origin-center":
      {},
  },
};
