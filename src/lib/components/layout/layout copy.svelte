<script lang="ts">
  import cn from "$lib/utils/classNames.js";
  import type { Snippet } from "svelte";
  import { setContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    hNavbar?: number;
    hFooter?: number;
    wSidebarLeft?: number;
    wSidebarRight?: number;
    wCollapsedLeft?: number;
    wCollapsedRight?: number;
    rBox?: string;
    rBtn?: string;
    navbarFixed?: boolean;
    footerFixed?: boolean;
    navbarHiddeOnScroll?: boolean;
    footerHiddeOnScroll?: boolean;
    wNavbarFull?: boolean;
    wFooterFull?: boolean;
  };
  const {
    children,
    class: className,
    hNavbar = 0,
    hFooter = 0,
    wSidebarLeft = 0,
    wSidebarRight = 0,
    wCollapsedLeft = 0,
    wCollapsedRight = 0,
    rBox = "1rem",
    rBtn = "1rem",
    navbarFixed = false,
    footerFixed = false,
    navbarHiddeOnScroll = false,
    footerHiddeOnScroll = false,
    wNavbarFull = false,
    wFooterFull = false,
  }: Props = $props();

  let layout = $state({
    leftOpen: false,
    rightOpen: false,
    leftCollapsed: false,
    rightCollapsed: false,
    navbarFixed,
    footerFixed,
    navbarHidde: false,
    footerHidde: false,
  });
  setContext("layout", layout);
  let wSidebarLeftActive = $derived(
    layout.leftCollapsed ? `${wCollapsedLeft}px` : `${wSidebarLeft}px`
  );
  let wSidebarRightActive = $derived(
    layout.rightCollapsed ? `${wCollapsedRight}px` : `${wSidebarRight}px`
  );
  let hNavbarActive = $derived(layout.navbarHidde ? "0px" : `${hNavbar}px`);
  let hFooterActive = $derived(layout.footerHidde ? "0px" : `${hFooter}px`);
  let ptContent = $derived(navbarFixed ? hNavbarActive : "0px");
  let pbContent = $derived(footerFixed ? hFooterActive : "0px");
  let insetNavbar = $derived(wNavbarFull ? hNavbarActive : "0px");
  let insetFooter = $derived(wFooterFull ? hFooterActive : "0px");
  let mlNavbar = $derived(wNavbarFull ? "0px" : wSidebarLeftActive);
  let mrNavbar = $derived(wNavbarFull ? "0px" : wSidebarRightActive);
  let mlFooter = $derived(wFooterFull ? "0px" : wSidebarLeftActive);
  let mrFooter = $derived(wFooterFull ? "0px" : wSidebarRightActive);

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
        if (navbarHiddeOnScroll) layout.navbarHidde = true;
        if (footerHiddeOnScroll) layout.footerHidde = true;
        lastScrollY = window.scrollY;
      } else if (nearTop || nearBottom) {
        if (navbarHiddeOnScroll) layout.navbarHidde = false;
        if (footerHiddeOnScroll) layout.footerHidde = false;
        lastScrollY = window.scrollY;
      }
    };
  });
</script>

<div
  class={cn("layout", className)}
  style:--h-navbar={hNavbarActive}
  style:--h-footer={hFooterActive}
  style:--w-sidebar-left={wSidebarLeftActive}
  style:--w-sidebar-right={wSidebarRightActive}
  style:--rounded-box={rBox}
  style:--rounded-btn={rBtn}
  style:--inset-navbar={insetNavbar}
  style:--inset-footer={insetFooter}
  style:--pt-content={ptContent}
  style:--pb-content={pbContent}
  style:--ml-navbar={mlNavbar}
  style:--mr-navbar={mrNavbar}
  style:--ml-footer={mlFooter}
  style:--mr-footer={mrFooter}
>
  {@render children?.()}
</div>
