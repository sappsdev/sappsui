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
  };

  $effect(() => {
    if (tabs?.active === key && buttonRef) {
      buttonRef.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  });
</script>

<button
  bind:this={buttonRef}
  data-key={key}
  class={cn(
    "tab",
    tabs?.variant,
    tabs?.radius,
    tabs?.color,
    tabs?.active === key && "selected",
    className
  )}
  onclick={handleClick}
>
  {@render children?.()}
</button>
