<script lang="ts">
  import cn from "$lib/utils/classNames.js";
  import { getContext, type Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
  };
  const { children, class: className }: Props = $props();
  const layout: any = getContext("layout");
  const handleClick = () => {
    layout.drawerLeftOpen = !layout.drawerLeftOpen;
  };
</script>

<button class={cn(className)} onclick={handleClick}>
  {@render children?.()}
</button>
