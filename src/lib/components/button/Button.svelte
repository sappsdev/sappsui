<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    disabled?: boolean;
    type?: "submit" | "reset" | "button";
    onclick?: () => void;
    href?: string;
    class?: string;
    size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl";
    radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
    variant?:
      | "solid"
      | "faded"
      | "bordered"
      | "light"
      | "flat"
      | "ghost"
      | "shadow";
    color?:
      | "muted"
      | "primary"
      | "secondary"
      | "accent"
      | "info"
      | "success"
      | "warning"
      | "danger";
    isIcon?: boolean;
  };
  const {
    children,
    onclick,
    href,
    variant = "solid",
    size = "s-md",
    radius = "r-md",
    color = "primary",
    class: className,
    disabled,
    type = "button",
    isIcon,
  }: Props = $props();
</script>

{#if href}
  <a
    {href}
    class={cn(
      "btn",
      variant,
      size,
      radius,
      color,
      isIcon && "is-icon",
      className
    )}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    {onclick}
    {type}
    {disabled}
    class={cn(
      "btn",
      variant,
      size,
      radius,
      color,
      isIcon && "is-icon",
      className
    )}
  >
    {@render children?.()}
  </button>
{/if}
