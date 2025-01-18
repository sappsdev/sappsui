<script lang="ts">
  import type { LayoutState } from "$lib/types.js";
  import cn from "$lib/utils/classNames.js";
  import type { Snippet } from "svelte";
  import { setContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    hNavbar?: number;
    hDock?: number;
    wlSidebar?: number;
    wrSidebar?: number;
    wlRail?: number;
    wrRail?: number;
    rBox?: string;
    rBtn?: string;
    navbarInset?: boolean;
    fullOnScroll?: boolean;
    drawerFull?: boolean;
  };
  const {
    children,
    class: className,
    hNavbar = 0,
    hDock = 0,
    wlSidebar = 0,
    wrSidebar = 0,
    wlRail = 0,
    wrRail = 0,
    rBox = "1rem",
    rBtn = "1rem",
    navbarInset = false,
    fullOnScroll = false,
    drawerFull = false,
  }: Props = $props();

  let layout = $state<LayoutState>({
    drawerLeftOpen: false,
    drawerRightOpen: false,
    railedLeft: false,
    railedRight: false,
    barsHidden: false,
    breakpoint: "",
    scrollY: 0,
  });
  setContext("layout", layout);

  let hNavbarActive = $derived(layout.barsHidden ? "0px" : `${hNavbar}px`);
  let hDockActive = $derived(layout.barsHidden ? "0px" : `${hDock}px`);
  let navbarInsetActive = $derived(navbarInset ? hNavbarActive : "0px");
  let dockInsetActive = $derived(hDock > 0 ? hDockActive : "0px");
  let wSidebarLeftActive = $derived(
    layout.railedLeft ? `${wlRail}px` : `${wlSidebar}px`
  );
  let wSidebarRightActive = $derived(
    layout.railedRight ? `${wrRail}px` : `${wrSidebar}px`
  );

  const checkBreakpoint = () => {
    const width = window.innerWidth;

    layout.breakpoint =
      width >= 1536
        ? "2xl"
        : width >= 1280
          ? "xl"
          : width >= 1024
            ? "lg"
            : width >= 768
              ? "md"
              : width >= 640
                ? "sm"
                : "xs";
  };

  let lastScrollY = $state(0);

  const handleScroll = () => {
    if (!fullOnScroll) return;

    const scrollY = layout.scrollY;
    const scrollingDown = scrollY > lastScrollY + hNavbar;
    const scrollingUp = scrollY < lastScrollY - hNavbar;
    const nearTop = scrollY <= hNavbar;

    if (scrollingDown) {
      if (fullOnScroll) layout.barsHidden = true;
      lastScrollY = layout.scrollY;
    } else if (nearTop || scrollingUp) {
      if (fullOnScroll) layout.barsHidden = false;
      lastScrollY = layout.scrollY;
    }
  };

  $effect(() => {
    if (layout.scrollY) handleScroll();
  });

  $effect(() => {
    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => {
      window.removeEventListener("resize", checkBreakpoint);
    };
  });
</script>

<div
  class={cn("layout-root", className)}
  style:--h-navbar={hNavbarActive}
  style:--h-dock={hDockActive}
  style:--navbar-inset={navbarInsetActive}
  style:--dock-inset={dockInsetActive}
  style:--rounded-box={rBox}
  style:--rounded-btn={rBtn}
  style:--w-sidebar-left={wSidebarLeftActive}
  style:--w-sidebar-right={wSidebarRightActive}
>
  {@render children?.()}
</div>
