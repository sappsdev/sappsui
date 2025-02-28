<script lang="ts">
  import { Icons } from "$lib/index.js";
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

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
  let {
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

  const select: any = getContext("select");
</script>

{#if label && labelPlacement === "outside"}
  <div class="label">{label}</div>
{/if}
{#if labelPlacement === "inside"}
  <button
    onclick={() => (select.isOpen = !select.isOpen)}
    class={cn(
      "text-field inside group cursor-pointer",
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
    <Icons
      icon="solar:alt-arrow-down-outline"
      class={cn("dropdown-arrow", select.isOpen && "-rotate-90")}
    />
    {@render children?.()}
  </button>
{:else if labelPlacement === "outside-left"}
  <div class={cn("flex gap-2 row items-center")}>
    {#if label}
      <div class="label">{label}</div>
    {/if}
    <button
      onclick={() => (select.isOpen = !select.isOpen)}
      class={cn(
        "text-field group cursor-pointer",
        variant,
        color,
        size,
        radius,
        className
      )}
    >
      <Icons
        icon="solar:alt-arrow-down-outline"
        class={cn("dropdown-arrow", select.isOpen && "-rotate-90")}
      />
      {@render children?.()}
    </button>
  </div>
{:else}
  <button
    onclick={() => (select.isOpen = !select.isOpen)}
    class={cn(
      "text-field group cursor-pointer",
      variant,
      color,
      size,
      radius,
      className
    )}
  >
    <Icons
      icon="solar:alt-arrow-down-outline"
      class={cn("dropdown-arrow", select.isOpen && "-rotate-90")}
    />
    {@render children?.()}
  </button>
{/if}
{#if info || error}
  <div class={cn(error ? "error" : "info")}>{error || info}</div>
{/if}
