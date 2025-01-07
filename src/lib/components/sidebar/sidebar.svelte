<script lang="ts">
  import cn from "$lib/utils/classNames.js";
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    placement?: "left" | "right";
  };
  const { children, class: className, placement = "left" }: Props = $props();

  const layout: any = getContext("layout");
</script>

<div
  class:drawer={layout?.drawerLeftOpen || layout?.drawerRightOpen}
  class="sidebar-overlay"
></div>
<div
  class:left={placement === "left"}
  class:right={placement === "right"}
  class="sidebar-root"
>
  <div
    class:left={placement === "left"}
    class:right={placement === "right"}
    class:drawer={layout?.drawerLeftOpen || layout?.drawerRightOpen}
    class={cn("sidebar-wrapper", className)}
    class:block={layout?.drawerLeftOpen || layout?.drawerRightOpen}
  >
    {@render children?.()}
  </div>
</div>
