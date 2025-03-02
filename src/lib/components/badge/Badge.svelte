<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl";
    radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
    color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";
  };

  const {
    children,
    size = "s-md",
    radius = "r-md",
    color = "primary",
    class: className,
  }: Props = $props();
</script>

<span class={cn("badge", size, radius, color, className)}>
  {@render children?.()}
</span>