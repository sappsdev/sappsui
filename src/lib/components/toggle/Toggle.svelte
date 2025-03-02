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
    iconOn?: string;
    iconOff?: string;
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
    iconOn = "",
    iconOff = "",
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
<label class={cn("toggle-container", className)}>
  <div
    class={cn(
      "toggle",
      size,
      radius,
      color,
      disabled ? "disabled" : "",
      isChecked ? "checked" : ""
    )}
    onclick={handleChange}
    role="switch"
    aria-checked={isChecked}
    tabindex={disabled ? -1 : 0}
  >
    <div class="toggle-track">
      <div class="toggle-thumb">
        {#if isChecked && iconOn}
          <Icons icon={iconOn} class="toggle-icon" />
        {:else if !isChecked && iconOff}
          <Icons icon={iconOff} class="toggle-icon" />
        {/if}
      </div>
    </div>
  </div>
  {#if children}
    <span class="label">
      {@render children?.()}
    </span>
  {/if}
</label>
