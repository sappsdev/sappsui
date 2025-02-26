<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    key?: string;
  };
  const { children, class: className, key }: Props = $props();

  const tabs: any = getContext("tabs");
  let buttonRef: HTMLButtonElement;

  const handleClick = () => {
    tabs.active = key;
    if (buttonRef && tabs.listRef && tabs.indicatorRef) {
      const rect = buttonRef.getBoundingClientRect();
      const parent = tabs.listRef.getBoundingClientRect();
      tabs.indicatorRef.style.width = `${rect.width}px`;
      tabs.indicatorRef.style.height = `${rect.height}px`;
      tabs.indicatorRef.style.left = `${rect.left - parent.left}px`;
      tabs.indicatorRef.style.top = `${rect.top - parent.top}px`;
    }
  };

  $effect(() => {
    if (tabs?.active === key && buttonRef) {
      buttonRef.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      handleClick();
    }
  });
</script>

<button
  bind:this={buttonRef}
  class={cn(
    "tab",
    tabs?.variant,
    tabs?.placement,
    tabs?.size,
    tabs?.radius,
    tabs?.color && `color-${tabs.color}`,
    tabs?.active === key && "active",
    className
  )}
  data-key={key}
  onclick={handleClick}
>
  <div class="tab-content">
    {@render children?.()}
  </div>
</button>
