<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    class?: string;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "small" | "p";
    children?: Snippet;
  };
  const { class: className, variant = "p", children }: Props = $props();
</script>

<svelte:element this={variant} class={cn(className)}>
  {@render children?.()}
</svelte:element>
