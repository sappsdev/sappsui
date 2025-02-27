<script lang="ts">
  import { Icons } from "$lib/index.js";
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    hex?: string;
    hexForeground?: string;
    oklch?: string;
    oklchForeground?: string;
    label?: string;
  };
  let {
    hex = $bindable(),
    hexForeground = $bindable(),
    oklch = $bindable(),
    oklchForeground = $bindable(),
    label,
  }: Props = $props();

  let showColorPicker = $state(false);

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
    oklch = hexToOklch(hex);
    hexForeground = calculateForeground(hex);
    oklchForeground = calculateForeground(hex);
  }

  function hexToOklch(hex: string): string {
    return "oklch(0% 0 0)";
  }

  function calculateForeground(hex: string): string {
    return "#ffffff";
  }
</script>

<div class={cn("column relative rounded-2xl border-border border-2 justify-end p-2 w-full md:max-w-56 h-24 label")} style={`background-color: ${hex}; color: ${hexForeground}`}>
  <div>
    {label}
  </div>
  <div>
    {hex}
  </div>
</div>