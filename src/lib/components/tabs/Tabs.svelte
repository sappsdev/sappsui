<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import { setContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    active?: string;
    placement?: "top" | "bottom" | "start" | "end";
  };
  const {
    children,
    class: className,
    active,
    placement = "top",
  }: Props = $props();
  let tabs = $state({
    active: active || null,
    placement,
  });

  setContext("tabs", tabs);
</script>

<div class={cn("tabs", placement, className)}>
  {@render children?.()}
</div>
