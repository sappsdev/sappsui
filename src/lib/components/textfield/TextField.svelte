<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    label?: string;
    info?: string;
    error?: string;
    variant?: "flat" | "bordered" | "faded" | "underlined";
    labelPlacement?: "inside" | "outside" | "outside-left";
    color?:
      | "muted"
      | "primary"
      | "secondary"
      | "accent"
      | "info"
      | "success"
      | "warning"
      | "danger";
    size?: "s-sm" | "s-md" | "s-lg";
    radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
  };
  const {
    children,
    class: className,
    label,
    info,
    error,
    labelPlacement = "inside",
    variant = "flat",
    color = "muted",
    size = "s-md",
    radius = "r-md",
  }: Props = $props();
</script>

<label class="form-control">
  {#if labelPlacement === "inside"}
    <div
      class={cn(
        "text-field inside group",
        variant,
        color,
        size,
        radius,
        className
      )}
    >
      {#if label}
        <div class="label">{label}</div>
      {/if}
      {@render children?.()}
    </div>
  {:else}
    <div
      class={cn(
        "flex gap-2",
        labelPlacement === "outside-left" ? "row items-center" : "column"
      )}
    >
      {#if label}
        <div class="label">{label}</div>
      {/if}
      <div
        class={cn("text-field group", variant, color, size, radius, className)}
      >
        {@render children?.()}
      </div>
    </div>
  {/if}
  {#if info || error}
    <div class={cn(error ? "error" : "info")}>{error || info}</div>
  {/if}
</label>
