<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import { setContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    color?:
      | "muted"
      | "primary"
      | "secondary"
      | "accent"
      | "info"
      | "success"
      | "warning"
      | "danger";
    size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl";
    radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
    isCompact?: boolean;
    isStriped?: boolean;
    isHeaderSticky?: boolean;
    fullWidth?: boolean;
    sortDescriptor?: {
      column: string;
      direction: "ascending" | "descending";
    };
    selectedKeys?: Set<string>;
    defaultSelectedKeys?: Set<string>;
  };

  const {
    children,
    class: className,
    color = "primary",
    size = "s-md",
    radius = "r-md",
    isCompact = false,
    isStriped = false,
    isHeaderSticky = false,
    fullWidth = false,
    sortDescriptor = $bindable(undefined),
    selectedKeys = $bindable(new Set()),
    defaultSelectedKeys = new Set(),
  }: Props = $props();

  setContext("table", {
    color,
    size,
    radius,
    isCompact,
    isStriped,
    isHeaderSticky,
    fullWidth,
    sortDescriptor,
    selectedKeys,
    defaultSelectedKeys,
  });
</script>

<div
  class={cn(
    "table-container",
    color,
    size,
    radius,
    isCompact && "compact",
    isStriped && "striped",
    isHeaderSticky && "sticky-header",
    fullWidth && "full-width",
    className
  )}
>
  <div class="w-full overflow-x-auto">
    <table class="table">
      {@render children?.()}
    </table>
  </div>
</div>
