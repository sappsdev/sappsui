<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    onsubmit?: () => void;
  };
  const { children, class: className, onsubmit }: Props = $props();

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    onsubmit?.();
  };
</script>

<form onsubmit={handleSubmit} class={cn(className)}>
  {@render children?.()}
</form>
