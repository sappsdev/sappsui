<script lang="ts">
  import type { LayoutState } from "$lib/types.js";
  import cn from "$lib/utils/classNames.js";
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
  };
  const { children, class: className }: Props = $props();
  const layout: LayoutState = getContext("layout");
</script>

<div class={cn("navbar-root", className)}>
  {@render children?.()}
</div>
