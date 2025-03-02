<script lang="ts">
  import { cn } from "$lib/utils/index.js";

  type Props = {
    class?: string;
    src?: string;
    color?:
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger";
    radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
    size?: "s-sm" | "s-md" | "s-lg";
    name?: string;
    icon?: any;
    fallback?: any;
    isBordered?: boolean;
    isDisabled?: boolean;
    isFocusable?: boolean;
    showFallback?: boolean;
  };

  const {
    class: className,
    src,
    color = "default",
    radius = "r-full",
    size = "s-md",
    name,
    icon,
    fallback,
    isBordered = false,
    isDisabled = false,
    isFocusable = false,
    showFallback = false,
  }: Props = $props();

  let isLoading = $state(true);
  let hasError = $state(false);

  function handleError() {
    hasError = true;
    isLoading = false;
  }

  function handleLoad() {
    isLoading = false;
  }

  $effect(() => {
    if (src) {
      hasError = false;
      isLoading = true;
    }
  });

  function getFallback() {
    if (fallback && (showFallback || hasError)) {
      return fallback;
    }
    if (icon) {
      return icon;
    }
    if (name) {
      return name.charAt(0).toUpperCase();
    }
    return null;
  }
</script>

<div
  class={cn(
    "avatar",
    radius,
    size,
    color,
    isBordered && "bordered",
    isDisabled && "disabled",
    !isFocusable && "unfocusable",
    className
  )}
  role="img"
  aria-label={name || "avatar"}
>
  {#if src && !hasError}
    <img
      {src}
      alt={name || "avatar"}
      class={cn("avatar-img", isLoading && "animate-pulse")}
      onerror={handleError}
      onload={handleLoad}
    />
  {:else}
    <span class="avatar-fallback">
      {getFallback()}
    </span>
  {/if}
</div>
