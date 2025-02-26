const popoverPosition = (node: HTMLElement) => {
  const updatePosition = () => {
    const { left, width, top, height } = node.getBoundingClientRect();
    const popoverHeight = node.offsetHeight;

    const spaceBelow = window.innerHeight - (top + height);
    const fitsBelow = spaceBelow >= popoverHeight;

    const positionClass =
      width >= window.innerWidth * 0.9
        ? "left-0"
        : left + width / 2 < window.innerWidth / 2
        ? "left-0"
        : "right-0";

    node.classList.toggle("top-full", fitsBelow);
    node.classList.toggle("bottom-full", !fitsBelow);

    // Posiciona horizontalmente
    node.classList.toggle("left-0", positionClass === "left-0");
    node.classList.toggle("right-0", positionClass === "right-0");
  };

  updatePosition();

  window.addEventListener("resize", updatePosition);
  return {
    destroy() {
      window.removeEventListener("resize", updatePosition);
    },
  };
};

export default popoverPosition;
