<script lang="ts">
  import { page } from "$app/state";
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

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
    class?: string;
    href?: string;
    onclick?: () => void;
    size?: Size;
    radius?: Radius;
    color?: Color;
    selected?: boolean;
  };

  const {
    children,
    class: className,
    href,
    onclick,
    size = "s-md",
    radius = "r-md",
    color = "muted",
    selected = false,
  }: Props = $props();
</script>

{#if href}
  <a
    class:active={page.url.pathname.includes(href)}
    class={cn("menu-item", size, radius, color, className)}
    {href}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    class:active={selected}
    class={cn("menu-item", size, radius, color, className)}
    {onclick}
  >
    {@render children?.()}
  </button>
{/if}
