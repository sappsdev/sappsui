<script lang="ts">
  import { clickOutside } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import { setContext } from "svelte";

  type Props = {
    children?: Snippet;
    value?: string | number | null | undefined | unknown;
  };
  let {
    children,
    value = $bindable(),
  }: Props = $props();

  let select = $state({
    selected: value || null,
    isOpen: false
  });

  setContext("select", select);

  $effect(() => {
    if (select.selected !== value) {
      value = select.selected;
    }
  });
</script>

<div class="form-control" use:clickOutside={() => (select.isOpen = false)}>
  <div class="dropdown">
    {@render children?.()}
  </div>
</div>
