<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import { getContext, type Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    value?: string | number;
  };
  const { children, class: className, value }: Props = $props();

  const radio: any = getContext("radio");
</script>

<label class={cn("radio-item", className)}>
  <input type="radio" {value} bind:group={radio.selected} class="radio-input" />
  {@render children?.()}
</label>
