<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    isOpen?: boolean;
  };
  const {
    children,
    class: className,
    isOpen = $bindable(false),
  }: Props = $props();
</script>

{#if isOpen}
  <div class={cn("modal", className)}>
    {@render children?.()}
  </div>
{/if}
