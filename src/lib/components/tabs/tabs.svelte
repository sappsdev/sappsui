<script lang="ts">
  import cn from "$lib/utils/classNames.js";
  import type { Snippet } from "svelte";
  import { setContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    active?: string;
  };
  const { children, class: className, active }: Props = $props();
  let tabs = $state({
    active: active || null,
  });

  setContext("tabs", tabs);
</script>

<div class={cn("tabs", className)}>
  {@render children?.()}
</div>
