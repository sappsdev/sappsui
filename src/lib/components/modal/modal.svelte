<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import { fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";

  type Size = "s-sm" | "s-md" | "s-lg";
  type Radius =
    | "r-none"
    | "r-xs"
    | "r-sm"
    | "r-md"
    | "r-lg"
    | "r-xl"
    | "r-full";
  type Placement = "center" | "top" | "bottom" | "auto";

  type Props = {
    children?: Snippet;
    class?: string;
    isOpen?: boolean;
    size?: Size;
    radius?: Radius;
    placement?: Placement;
    backdrop?: boolean;
    closeOnEsc?: boolean;
    closeOnBackdropClick?: boolean;
    onClose?: () => void;
  };

  let {
    children,
    class: className,
    isOpen = $bindable(false),
    size = "s-md",
    radius = "r-md",
    placement = "center",
    backdrop = true,
    closeOnEsc = true,
    closeOnBackdropClick = true,
    onClose,
  }: Props = $props();

  let modalContainer: HTMLDivElement | undefined = $state();

  const handleBackdropClick = (e: MouseEvent) => {
    if (closeOnBackdropClick && e.target === modalContainer) {
      isOpen = false;
      onClose?.();
    }
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (closeOnEsc && e.key === "Escape" && isOpen) {
      isOpen = false;
      onClose?.();
    }
  };

  onMount(() => {
    if (closeOnEsc) {
      document.addEventListener("keydown", handleKeydown);
    }
  });

  onDestroy(() => {
    if (closeOnEsc) {
      document.removeEventListener("keydown", handleKeydown);
    }
  });
</script>

{#if isOpen}
  <div
    class="modal-backdrop"
    class:backdrop-visible={backdrop}
    transition:fade={{ duration: 150 }}
  >
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      bind:this={modalContainer}
      class={cn("modal-container", placement, className)}
      onclick={handleBackdropClick}
    >
      <div
        class={cn("modal", size, radius)}
        transition:fade={{ duration: 200, delay: 50 }}
      >
        {@render children?.()}
      </div>
    </div>
  </div>
{/if}
