<script lang="ts">
  import cn from "$lib/utils/classNames.js";
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
  };
  const { children, class: className }: Props = $props();
  const layout: any = getContext("layout");
</script>

<div class:has-fixed={layout?.footerFixed} class={cn("footer", className)}>
  <div class="footer-wrapper">
    {@render children?.()}
  </div>
</div>
