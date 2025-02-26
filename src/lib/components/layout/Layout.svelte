<script lang="ts">
  import type { ILayoutState } from "$lib/types/index.js";
  import { cn } from "$lib/utils/index.js";
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
    navbarInset?: boolean;
    fullOnScroll?: boolean;
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
    navbarInset = false,
    fullOnScroll = false,
  }: Props = $props();

  let layoutState = $state<ILayoutState>({
    drawerLeftOpen: false,
    drawerRightOpen: false,
    railedLeft: false,
    railedRight: false,
    barsHidden: false,
    breakpoint: "",
    scrollY: 0,
  });
  setContext("layout", layoutState);

  let hNavbarActive = $derived(layoutState.barsHidden ? "0px" : `${hNavbar}px`);
  let hDockActive = $derived(layoutState.barsHidden ? "0px" : `${hDock}px`);
  let navbarInsetActive = $derived(navbarInset ? hNavbarActive : "0px");
  let dockInsetActive = $derived(hDock > 0 ? hDockActive : "0px");
  let wSidebarLeftActive = $derived(
    layoutState.railedLeft ? `${wlRail}px` : `${wlSidebar}px`
  );
  let wSidebarRightActive = $derived(
    layoutState.railedRight ? `${wrRail}px` : `${wrSidebar}px`
  );

  const checkBreakpoint = () => {
    const width = window.innerWidth;

    layoutState.breakpoint =
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

    const scrollY = layoutState.scrollY;
    const scrollingDown = scrollY > lastScrollY + hNavbar;
    const scrollingUp = scrollY < lastScrollY - hNavbar;
    const nearTop = scrollY <= hNavbar;

    if (scrollingDown) {
      if (fullOnScroll) layoutState.barsHidden = true;
      lastScrollY = layoutState.scrollY;
    } else if (nearTop || scrollingUp) {
      if (fullOnScroll) layoutState.barsHidden = false;
      lastScrollY = layoutState.scrollY;
    }
  };

  $effect(() => {
    if (layoutState.scrollY) handleScroll();
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
  style:--w-sidebar-left={wSidebarLeftActive}
  style:--w-sidebar-right={wSidebarRightActive}
>
  {@render children?.()}
</div>
