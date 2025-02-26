<script lang="ts">
  import type { ILayoutState } from "$lib/types/index.js";
  import { cn } from "$lib/utils/index.js";
  import { getContext, type Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
  };
  const { children, class: className }: Props = $props();

  const layout: ILayoutState = getContext("layout");
  let divElement: HTMLElement;

  const handleDivScroll = (event: Event) => {
    const target = event.target as HTMLDivElement;
    layout.scrollY = target.scrollTop;
  };
  $effect(() => {
    if (divElement) {
      divElement.addEventListener("scroll", handleDivScroll);
    }
  });
</script>

<div bind:this={divElement} class="layout-wrapper">
  <div class={cn("layout-body", className)}>
    {@render children?.()}
  </div>
</div>
