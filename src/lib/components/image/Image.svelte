<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import { Image } from "@unpic/svelte";

  type Props = {
    class?: string;
    src: string;
    layout?: "constrained" | "fullWidth" | "fixed";
    priority?: boolean;
    fallback?: string;
    alt?: string;
    radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
    shadow?: "sh-sm" | "sh-md" | "sh-lg" | "sh-xl" | "sh-none";
    isBlurred?: boolean;
    isZoomed?: boolean;
  };
  const {
    class: className,
    src,
    layout,
    priority,
    fallback,
    alt,
    radius = "r-md",
    shadow = "sh-md",
    isBlurred,
    isZoomed,
  }: Props = $props();
</script>

<Image
  class={cn("img", radius, shadow, isBlurred, isZoomed, className)}
  {src}
  {layout}
  {priority}
  {fallback}
  {alt}
/>
