<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";

  type Props = {
    children?: Snippet;
    class?: string;
    key?: string;
  };
  const { children, class: className, key }: Props = $props();
  const tabs: any = getContext("tabs");
</script>

{#if tabs.active === key}
  <div in:fade class={cn("tabs-content", tabs?.placement, className)}>
    {@render children?.()}
  </div>
{/if}
