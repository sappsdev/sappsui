<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
    shadow?: "sh-sm" | "sh-md" | "sh-lg" | "sh-xl" | "sh-none";
  };
  const {
    children,
    class: className,
    shadow = "sh-md",
    radius = "r-lg",
  }: Props = $props();
</script>

<div class={cn("card", shadow, radius, className)}>
  {@render children?.()}
</div>
