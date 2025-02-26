<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    href?: string;
  };
  const { children, class: className, href }: Props = $props();
</script>

<a class={cn("navbar-brand", className)} {href}>
  {@render children?.()}
</a>
