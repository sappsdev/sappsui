<script lang="ts">

  import { slide } from "svelte/transition";
  import { getContext, type Snippet } from "svelte";
  import { cn, popoverPosition } from "$lib/utils/index.js";

  type Props = {
    children?: Snippet;
    class?: string;
    key?: string;
  };
  const { children, class: className }: Props = $props();
  
  const select: any = getContext("select");

</script>

{#if select.isOpen}
<div transition:slide={{duration: 150}} use:popoverPosition class={cn("dropdown-content")}>
    {@render children?.()}
</div>
{/if}