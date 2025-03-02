<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";
  import { Icons } from "$lib/index.js";

  type Props = {
    children?: Snippet;
    class?: string;
    id?: string;
    sortable?: boolean;
  };
  const { children, class: className, id, sortable = false }: Props = $props();

  const table: any = getContext("table");

  function handleSort() {
    if (!sortable || !id) return;

    if (table.sortDescriptor?.column === id) {
      // Toggle direction if already sorting by this column
      table.sortDescriptor = {
        column: id,
        direction:
          table.sortDescriptor.direction === "ascending"
            ? "descending"
            : "ascending",
      };
    } else {
      // Set new sort column with default ascending direction
      table.sortDescriptor = {
        column: id,
        direction: "ascending",
      };
    }
  }

  $effect(() => {
    // This effect will run when sortDescriptor changes
  });
</script>

<th
  class={cn(
    "table-columns",
    sortable && "sortable",
    table.sortDescriptor?.column === id && "sorted",
    className
  )}
  onclick={handleSort}
>
  <div class="table-column-content">
    {@render children?.()}
    {#if sortable}
      <span class="sort-icon">
        {#if table.sortDescriptor?.column === id}
          {#if table.sortDescriptor?.direction === "ascending"}
            <Icons icon="solar:arrow-up-linear" />
          {:else}
            <Icons icon="solar:arrow-down-linear" />
          {/if}
        {:else}
          <Icons icon="solar:arrow-up-down-linear" />
        {/if}
      </span>
    {/if}
  </div>
</th>
