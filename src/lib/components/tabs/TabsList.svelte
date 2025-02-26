<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import { getContext, type Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "underlined" | "bordered" | "light";
    radius?: "sm" | "md" | "lg";
  };
  const {
    children,
    class: className,
    size = "md",
    variant = "solid",
    radius = "md",
  }: Props = $props();
  const tabs: any = getContext("tabs");
  let listRef: HTMLDivElement;
  let indicatorRef: HTMLDivElement;

  $effect(() => {
    if (listRef && indicatorRef) {
      tabs.listRef = listRef;
      tabs.indicatorRef = indicatorRef;
    }
  });
</script>

<div class="tabs-wrapper">
  <div
    bind:this={listRef}
    class={cn("tabs-list", tabs?.placement, size, variant, radius, className)}
  >
    {@render children?.()}
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <div
      bind:this={indicatorRef}
      class={cn(
        "tab-indicator",
        tabs?.variant,
        tabs?.color && `color-${tabs.color}`
      )}
    />
  </div>
</div>
