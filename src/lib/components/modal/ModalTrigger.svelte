<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    onOpen?: () => void;
  };

  const { children, class: className, onOpen }: Props = $props();

  let isOpen = false;
  const toggleModal = () => {
    isOpen = true;
    onOpen?.();
  };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class={cn("modal-trigger", className)} onclick={toggleModal}>
  {@render children?.()}
</div>
