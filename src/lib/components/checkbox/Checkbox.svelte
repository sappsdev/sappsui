<script lang="ts">
  import { Icons } from "$lib/index.js";
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    checked?: boolean;
    onchange?: (checked: boolean) => void;
    disabled?: boolean;
    class?: string;
    size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl";
    radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
    color?:
      | "muted"
      | "primary"
      | "secondary"
      | "accent"
      | "info"
      | "success"
      | "warning"
      | "danger";
    iconChecked?: string;
    iconUnchecked?: string;
  };

  let {
    children,
    checked = $bindable(false),
    onchange,
    size = "s-md",
    radius = "r-md",
    color = "primary",
    class: className,
    disabled = false,
    iconChecked = "",
    iconUnchecked = "",
  }: Props = $props();

  let isChecked = $state(checked);

  function handleChange() {
    if (disabled) return;
    isChecked = !isChecked;
    onchange?.(isChecked);
  }

  $effect(() => {
    isChecked = checked;
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<label class={cn("checkbox-container", className)}>
  <div
    class={cn(
      "checkbox",
      size,
      radius,
      color,
      disabled ? "disabled" : "",
      isChecked ? "checked" : ""
    )}
    onclick={handleChange}
    role="checkbox"
    aria-checked={isChecked}
    tabindex={disabled ? -1 : 0}
  >
    <div class="checkbox-box">
      {#if isChecked && iconChecked}
        <Icons icon={iconChecked} class="checkbox-icon" />
      {:else if !isChecked && iconUnchecked}
        <Icons icon={iconUnchecked} class="checkbox-icon" />
      {:else if isChecked}
        <div class="checkbox-checkmark"></div>
      {/if}
    </div>
  </div>
  {#if children}
    <span class="label">
      {@render children?.()}
    </span>
  {/if}
</label>
