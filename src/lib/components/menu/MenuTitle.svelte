<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Size = "s-sm" | "s-md" | "s-lg";
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
    size?: Size;
    color?: Color;
  };

  const {
    children,
    class: className,
    size = "s-md",
    color = "muted",
  }: Props = $props();
</script>

<div class={cn("menu-title", size, color, className)}>
  {@render children?.()}
</div>
