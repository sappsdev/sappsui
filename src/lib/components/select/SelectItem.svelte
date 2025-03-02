<script lang="ts">
  import { getContext, type Snippet } from "svelte";
  import { cn } from "$lib/utils/index.js";
  import { Icons } from "$lib/index.js";

  type Props = {
    children?: Snippet;
    class?: string;
    value?: string | number | null | undefined | unknown;
    color?:
      | "muted"
      | "primary"
      | "secondary"
      | "accent"
      | "info"
      | "success"
      | "warning"
      | "danger";
  };
  const { children, class: className, value }: Props = $props();

  const select: any = getContext("select");

  const handleClick = () => {
    select.selected = value;
    select.isOpen = false;
  };
</script>

<button
  onclick={handleClick}
  class:active={select.selected === value}
  class={cn("menu-item s-md r-md", className)}
>
  {@render children?.()}
  {#if select.selected === value}
    <span class={cn("menu-item-indicator")}
      ><Icons icon="solar:check-read-linear" />
    </span>
  {/if}
</button>
