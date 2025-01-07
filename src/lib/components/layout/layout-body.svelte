<script lang="ts">
  import cn from "$lib/utils/classNames.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
  };
  const { children, class: className }: Props = $props();
</script>

<div class="layout-wrapper">
  <div class={cn("layout-body", className)}>
    {@render children?.()}
  </div>
</div>
