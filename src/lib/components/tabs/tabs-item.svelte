<script lang="ts">
  import cn from "$lib/utils/classNames.js";
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    key?: string;
  };
  const { children, class: className, key }: Props = $props();

  const tabs: any = getContext("tabs");

  const handleClick = () => {
    tabs.active = key;
  };
</script>

<button class={cn("tabs-item", className)} onclick={handleClick}>
  {@render children?.()}
</button>
