<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
  };
  const { children, class: className }: Props = $props();

  const table: any = getContext("table");
</script>

<tbody class={cn("table-body", className)}>
  {@render children?.()}
</tbody>