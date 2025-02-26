<script lang="ts">
  import { cn } from "$lib/utils/index.js";

  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
  };
  const { children, class: className }: Props = $props();
</script>

<div class={cn("content-footer", className)}>
  {@render children?.()}
</div>
