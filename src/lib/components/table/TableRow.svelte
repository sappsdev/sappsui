<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    id?: string;
    isSelected?: boolean;
  };
  const { children, class: className, id, isSelected = false }: Props = $props();

  const table: any = getContext("table");
  
  $effect(() => {
    if (id && isSelected) {
      table.selectedKeys.add(id);
    } else if (id && table.selectedKeys.has(id)) {
      table.selectedKeys.delete(id);
    }
  });
</script>

<tr 
  class={cn(
    "table-row", 
    (id && table.selectedKeys.has(id)) && "selected",
    className
  )}
>
  {@render children?.()}
</tr>