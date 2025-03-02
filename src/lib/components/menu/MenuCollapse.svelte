<script lang="ts">
  import { Icons } from "$lib/index.js";
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import { slide } from "svelte/transition";

  type Size = "s-sm" | "s-md" | "s-lg";
  type Radius =
    | "r-none"
    | "r-xs"
    | "r-sm"
    | "r-md"
    | "r-lg"
    | "r-xl"
    | "r-full";
  type Color =
    | "muted"
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "danger";

  type Props = {
    children?: Snippet;
    title?: string;
    class?: string;
    defaultOpen?: boolean;
    size?: Size;
    radius?: Radius;
    color?: Color;
  };

  const {
    children,
    title,
    class: className,
    defaultOpen = false,
    size = "s-md",
    radius = "r-md",
    color = "muted",
  }: Props = $props();

  let isOpen = $state(defaultOpen);

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<div class={cn("menu-collapse", size, radius, color, className)}>
  <button
    type="button"
    class={cn("menu-collapse-trigger", isOpen ? "open" : "")}
    onclick={toggle}
  >
    <div class="menu-collapse-content">
      {title}
    </div>
    <Icons
      icon="solar:alt-arrow-down-outline"
      class={cn("menu-collapse-icon", isOpen ? "open" : "")}
    />
  </button>

  {#if isOpen}
    <div class="menu-collapse-content" transition:slide={{ duration: 200 }}>
      {@render children?.()}
    </div>
  {/if}
</div>
