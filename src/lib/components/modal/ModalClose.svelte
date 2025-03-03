<script lang="ts">
  import { Icons } from "$lib/index.js";
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    onClose?: () => void;
    isOpen?: boolean;
  };

  let {
    children,
    class: className,
    onClose,
    isOpen = $bindable(),
  }: Props = $props();

  const closeModal = () => {
    isOpen = false;
    onClose?.();
  };
</script>

<button
  type="button"
  class={cn("modal-close", className)}
  onclick={closeModal}
  aria-label="Close"
>
  {#if children}
    {@render children?.()}
  {:else}
    <Icons icon="mdi:close" class="size-8" />
  {/if}
</button>
