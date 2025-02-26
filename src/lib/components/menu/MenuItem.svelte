<script lang="ts">
  import { page } from "$app/state";
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    href?: string;
    onclick?: () => void;
  };
  const { children, class: className, href }: Props = $props();
</script>

{#if href}
  <a
    class:active={page.url.pathname.includes(href || "")}
    class={cn("menu-item", className)}
    {href}
  >
    {@render children?.()}
  </a>
{:else}
  <!-- svelte-ignore attribute_global_event_reference -->
  <button class={cn("menu-item", className)} {onclick}>
    {@render children?.()}
  </button>
{/if}
