<script lang="ts">
  import { Icons } from "$lib/index.js";
  import { clickOutside, cn, popoverPosition } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import { slide } from "svelte/transition";
  import { setContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    label?: string;
    info?: string;
    error?: string;
    isOpen?: boolean;
    value?: string | number | null;
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
    isOpen = $bindable(false),
    value = $bindable(),
  }: Props = $props();

  let select = $state({
    selected: value || null,
  });

  setContext("select", select);

  $effect(() => {
    value = select.selected;
  });
</script>

<div class="form-control" use:clickOutside={() => (isOpen = false)}>
  {#if label && labelPlacement === "outside"}
    <div class="label">{label}</div>
  {/if}
  <div class="dropdown">
    {#if labelPlacement === "inside"}
      <button
        onclick={() => (isOpen = !isOpen)}
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
          class={cn("dropdown-arrow", isOpen && "-rotate-90")}
        />
        {@render children?.()}
      </button>
    {:else if labelPlacement === "outside-left"}
      <div class={cn("flex gap-2 row items-center")}>
        {#if label}
          <div class="label">{label}</div>
        {/if}
        <button
          onclick={() => (isOpen = !isOpen)}
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
            class={cn("dropdown-arrow", isOpen && "-rotate-90")}
          />
          {@render children?.()}
        </button>
      </div>
    {:else}
      <button
        onclick={() => (isOpen = !isOpen)}
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
          class={cn("dropdown-arrow", isOpen && "-rotate-90")}
        />
        {@render children?.()}
      </button>
    {/if}
    {#if isOpen}
      <div transition:slide use:popoverPosition class="dropdown-content">
        <div class="dropdown-menu">
          <div class="dropdown-item">Item 1</div>
          <div class="dropdown-item">Item 2</div>
          <div class="dropdown-item">Item 3</div>
        </div>
      </div>
    {/if}
  </div>
  {#if info || error}
    <div class={cn(error ? "error" : "info")}>{error || info}</div>
  {/if}
</div>
