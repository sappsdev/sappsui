<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    vertical?: boolean;
  };
  const { children, class: className, vertical }: Props = $props();
</script>

<div class:vertical class={cn("menu-root", className)}>
  {@render children?.()}
</div>
