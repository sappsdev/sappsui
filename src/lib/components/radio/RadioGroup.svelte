<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import { setContext, type Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    vertical?: boolean;
    value?: string | number | null;
    size?: "s-sm" | "s-md" | "s-lg";
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
  let {
    children,
    class: className,
    vertical,
    value = $bindable(),
    size,
    color = "muted",
  }: Props = $props();

  let radio = $state({
    selected: value || null,
  });

  setContext("radio", radio);
  $effect(() => {
    if (radio.selected) {
      value = radio.selected;
    }
  });
</script>

<div class:vertical class={cn("radio-root group", size, color, className)}>
  {@render children?.()}
</div>
