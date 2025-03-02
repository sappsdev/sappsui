<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import { getContext, type Snippet, onMount } from "svelte";

  type Props = {
    children?: Snippet;
    size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl";
    variant?: "solid" | "bordered" | "light" | "underlined";
    radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
    color?:
      | "primary"
      | "secondary"
      | "accent"
      | "success"
      | "warning"
      | "error"
      | "info";
  };
  const {
    children,
    size = "s-md",
    variant = "solid",
    radius = "r-md",
    color,
  }: Props = $props();
  const tabs: any = getContext("tabs");
  let listRef: HTMLDivElement;
  let indicatorRef: HTMLDivElement;

  // Initialize the indicator for the active tab
  const initializeIndicator = () => {
    if (listRef && indicatorRef && tabs.active) {
      // Find the active tab button
      const activeTab = listRef.querySelector(`[data-key="${tabs.active}"]`);
      if (activeTab) {
        const rect = activeTab.getBoundingClientRect();
        const parent = listRef.getBoundingClientRect();
        indicatorRef.style.width = `${rect.width}px`;
        indicatorRef.style.height =
          variant === "solid" ? `${rect.height}px` : "2px";
        indicatorRef.style.transform = `translateX(${rect.left - parent.left}px)`;
        indicatorRef.style.top =
          variant === "solid"
            ? `${rect.top - parent.top}px`
            : `${rect.bottom - parent.top - 2}px`;
        indicatorRef.style.opacity = "1";
      }
    }
  };

  $effect(() => {
    if (listRef && indicatorRef) {
      tabs.listRef = listRef;
      tabs.indicatorRef = indicatorRef;
      tabs.size = size;
      tabs.variant = variant;
      tabs.radius = radius;
      tabs.color = color;

      // Initialize the indicator after DOM update
      setTimeout(initializeIndicator, 50);
    }
  });

  // Update indicator when active tab changes
  $effect(() => {
    if (tabs.active) {
      setTimeout(initializeIndicator, 50);
    }
  });
</script>

<div class="tabs-wrapper">
  <div
    bind:this={listRef}
    class={cn("tabs-list group", tabs?.placement, size, variant, radius, color)}
  >
    {@render children?.()}
    <div
      bind:this={indicatorRef}
      class={cn("tab-indicator", variant, radius, color)}
      style="transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    ></div>
  </div>
</div>
