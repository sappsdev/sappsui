<script lang="ts">
  import cn from "$lib/utils/classNames.js";
  import type { Snippet } from "svelte";
  import { setContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    active?: string;
    placement?: "top" | "bottom" | "start" | "end";
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "underlined" | "bordered" | "light";
    radius?: "sm" | "md" | "lg";
  };
  const {
    children,
    class: className,
    active,
    placement = "top",
    size = "md",
    variant = "solid",
    radius = "md",
  }: Props = $props();
  let tabs = $state({
    active: active || null,
    placement,
    size,
    variant,
  });

  setContext("tabs", tabs);
</script>

<div class={cn("tabs-root", placement, className)}>
  {@render children?.()}
</div>
