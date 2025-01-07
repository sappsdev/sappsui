<script lang="ts">
  import cn from "$lib/utils/classNames.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    orientation?: "vertical" | "horizontal";
  };
  const {
    children,
    class: className,
    orientation = "vertical",
  }: Props = $props();
</script>

<div class={cn("scrollbox", orientation, className)}>
  {@render children?.()}
</div>
