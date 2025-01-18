<script lang="ts">
  import cn from "$lib/utils/classNames.js";
  import { getContext, type Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
  };
  const { children, class: className }: Props = $props();
  const tabs: any = getContext("tabs");
</script>

<div class="tabs-wrapper">
  <div class={cn("tabs-list", tabs?.placement, tabs?.variant, className)}>
    {@render children?.()}
  </div>
</div>
