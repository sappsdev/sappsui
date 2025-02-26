<script lang="ts">
  import { Icons } from "$lib/index.js";
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    hex?: string;
    rgb?: string;
    cmyk?: string;
    oklch?: string;
    foreground?: string;
  };
  let {
    children,
    class: className,
    hex = $bindable(),
    rgb = $bindable(),
    cmyk = $bindable(),
    oklch = $bindable(),
    foreground = $bindable(),
  }: Props = $props();

  let showColorPicker = $state(false);
  let isHovered = $state(false);

  function handleCopy() {
    if (hex) {
      navigator.clipboard.writeText(hex);
    }
  }

  function handleEdit() {
    showColorPicker = !showColorPicker;
  }

  function handleColorChange(e: Event) {
    const input = e.target as HTMLInputElement;
    hex = input.value;
    // Here we would add the logic to generate other color formats
    // This is a placeholder for the color conversion logic
    rgb = hexToRgb(hex);
    cmyk = hexToCmyk(hex);
    oklch = hexToOklch(hex);
    foreground = calculateForeground(hex);
  }

  // Placeholder color conversion functions
  function hexToRgb(hex: string): string {
    // Add actual conversion logic
    return "rgb(0, 0, 0)";
  }

  function hexToCmyk(hex: string): string {
    // Add actual conversion logic
    return "cmyk(0%, 0%, 0%, 100%)";
  }

  function hexToOklch(hex: string): string {
    // Add actual conversion logic
    return "oklch(0% 0 0)";
  }

  function calculateForeground(hex: string): string {
    // Add actual contrast calculation logic
    return "#ffffff";
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class={cn(
    "relative p-6 rounded-lg shadow-sm transition-all duration-200",
    "hover:shadow-md hover:scale-[1.02]",
    className
  )}
  style="background-color: {hex}; color: {foreground};"
  onmouseenter={() => (isHovered = true)}
  onmouseleave={() => (isHovered = false)}
>
  <div class="flex items-center justify-between">
    <div class="space-y-1">
      <span class="font-semibold text-lg">{hex}</span>
      {#if rgb}
        <div class="text-sm opacity-80">{rgb}</div>
      {/if}
    </div>
    {#if isHovered}
      <div class="flex gap-2">
        <button
          class="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          onclick={handleEdit}
          aria-label="Edit color"
        >
          <Icons icon="solar:pen-2-linear" class="w-4 h-4" />
        </button>
        <button
          class="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          onclick={handleCopy}
          aria-label="Copy color code"
        >
          <Icons icon="solar:copy-linear" class="w-4 h-4" />
        </button>
      </div>
    {/if}
  </div>

  {#if showColorPicker}
    <div
      class="absolute top-full left-0 mt-4 p-4 bg-white rounded-lg shadow-xl border border-gray-100 z-10 min-w-[240px]"
    >
      <input
        type="color"
        value={hex}
        oninput={handleColorChange}
        class="w-full h-12 rounded cursor-pointer mb-4"
      />
      <div class="space-y-2 text-sm text-gray-600">
        {#if rgb}
          <div class="flex justify-between items-center">
            <span class="font-medium">RGB</span>
            <span>{rgb}</span>
          </div>
        {/if}
        {#if cmyk}
          <div class="flex justify-between items-center">
            <span class="font-medium">CMYK</span>
            <span>{cmyk}</span>
          </div>
        {/if}
        {#if oklch}
          <div class="flex justify-between items-center">
            <span class="font-medium">OKLCH</span>
            <span>{oklch}</span>
          </div>
        {/if}
      </div>
    </div>
  {/if}

  {@render children?.()}
</div>

<style>
  input[type="color"] {
    -webkit-appearance: none;
    appearance: none;
    border: none;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 0.5rem;
  }
</style>
