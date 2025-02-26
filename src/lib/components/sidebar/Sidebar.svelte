<script lang="ts">
  import type { LayoutState } from "$lib/types.js";
  import { cn } from "$lib/utils/index.js";

  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    placement?: "left" | "right";
    breakpoint?: string;
    hideCloseButton?: boolean;
  };
  const {
    children,
    class: className,
    placement = "left",
    breakpoint = "md",
    hideCloseButton = false,
  }: Props = $props();

  const BREAKPOINTS: Record<string, number> = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  };

  const layout: LayoutState = getContext("layout");
  let isSidebar = $derived<boolean>(
    BREAKPOINTS[layout.breakpoint] >= BREAKPOINTS[breakpoint]
  );

  const overlayClick = () => {
    document.body.classList.toggle("overlay", false);
    layout.drawerLeftOpen = false;
    layout.drawerRightOpen = false;
  };
</script>

{#if isSidebar}
  <div
    class:left={placement === "left"}
    class:right={placement === "right"}
    class={cn("sidebar-root")}
  >
    <div
      class:left={placement === "left"}
      class:right={placement === "right"}
      class={cn("sidebar-wrapper", className)}
    >
      {@render children?.()}
    </div>
  </div>
{:else}
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <button
    onclick={overlayClick}
    class:open={layout?.drawerLeftOpen || layout?.drawerRightOpen}
    class="sidebar-overlay"
  ></button>
  <div
    class:left={placement === "left"}
    class:right={placement === "right"}
    class:open-left={layout?.drawerLeftOpen}
    class:open-right={layout?.drawerRightOpen}
    class={cn("sidebar-wrapper drawer", className)}
  >
    {#if !hideCloseButton}
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button onclick={overlayClick} class="close-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    {/if}
    {@render children?.()}
  </div>
{/if}
