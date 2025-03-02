<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    class?: string;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "small" | "p";
    href?: string;
    children?: Snippet;
  };
  const { class: className, variant = "p", href, children }: Props = $props();
</script>

{#if href}
  <a {href} class={cn(className)}>
    <svelte:element this={variant} class={cn(className)}>
      {@render children?.()}
    </svelte:element>
  </a>
{:else}
  <svelte:element this={variant} class={cn(className)}>
    {@render children?.()}
  </svelte:element>
{/if}
