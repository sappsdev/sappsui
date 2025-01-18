<script lang="ts">
  import cn from "$lib/utils/classNames.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
  };
  const { children, class: className, direction = "row" }: Props = $props();
</script>

<div class={cn(direction, className)}>
  {@render children?.()}
</div>
