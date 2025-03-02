<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes, SvelteHTMLElements } from "svelte/elements";
  import Tab from "../tabs/Tab.svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    direction?: string;
  };
  const { children, class: className, direction = "row" }: Props = $props();
</script>

<div class={cn(direction, className)}>
  {@render children?.()}
</div>
