<script lang="ts">
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

  let layout = $state({
    drawerLeftOpen: false,
    drawerRightOpen: false,
    railedLeft: false,
    railedRight: false,
    barsHidde: false,
  });
  setContext("layout", layout);

  let hNavbarActive = $derived(layout.barsHidde ? "0px" : `${hNavbar}px`);
  let hDockActive = $derived(layout.barsHidde ? "0px" : `${hDock}px`);
  let navbarInsetActive = $derived(navbarInset ? hNavbarActive : "0px");
  let dockInsetActive = $derived(hDock > 0 ? hDockActive : "0px");
  let wSidebarLeftActive = $derived(
    layout.railedLeft ? `${wlRail}px` : `${wlSidebar}px`
  );
  let wSidebarRightActive = $derived(
    layout.railedRight ? `${wrRail}px` : `${wrSidebar}px`
  );

  let lastScrollY = $state(0);

  $effect(() => {
    window.onscroll = () => {
      const scrollingDown = window.scrollY > lastScrollY + hNavbar;
      const scrollingUp = window.scrollY < lastScrollY - hNavbar;

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - hNavbar;

      const nearTop = window.scrollY <= hNavbar;

      if ((scrollingDown && !nearBottom) || (scrollingUp && !nearTop)) {
        if (fullOnScroll) layout.barsHidde = true;
        lastScrollY = window.scrollY;
      } else if (nearTop || nearBottom) {
        if (fullOnScroll) layout.barsHidde = false;
        lastScrollY = window.scrollY;
      }
    };
  });
</script>

<div
  class={cn("layout", className)}
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
