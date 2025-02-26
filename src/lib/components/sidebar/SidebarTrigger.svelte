<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import { getContext, type Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    placement?: "left" | "right";
  };
  const { children, class: className, placement = "left" }: Props = $props();
  const layout: any = getContext("layout");
  const handleClick = () => {
    if (placement === "right") layout.drawerRightOpen = !layout.drawerRightOpen;
    else layout.drawerLeftOpen = !layout.drawerLeftOpen;
  };
</script>

<button class={cn(className)} onclick={handleClick}>
  {@render children?.()}
</button>
