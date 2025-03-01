<script lang="ts">
  import { cn } from "$lib/utils/index.js";

  type Props = {
    class?: string;
    src: string;
    alt?: string;
    radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
    shadow?: "sh-sm" | "sh-md" | "sh-lg" | "sh-xl" | "sh-none";
    isBlurred?: boolean;
    isZoomed?: boolean;
    loading?: "eager" | "lazy";
    srcset?: string;
  };
  const {
    class: className,
    src,
    alt,
    radius = "r-md",
    shadow,
    isBlurred,
    isZoomed,
    loading = "lazy",
    srcset,
  }: Props = $props();
</script>


  <img
    class={cn("img", radius, shadow, isBlurred, isZoomed, className)}
    {src}
    {srcset}
    {alt}
    {loading}
  />
