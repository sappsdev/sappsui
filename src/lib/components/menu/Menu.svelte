<script lang="ts">
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
    vertical?: boolean;
    size?: Size;
    radius?: Radius;
    color?: Color;
  };

  const {
    children,
    class: className,
    vertical = false,
    size = "s-md",
    radius = "r-md",
    color = "muted",
  }: Props = $props();
</script>

<div class:vertical class={cn("menu-root", size, radius, color, className)}>
  {@render children?.()}
</div>
