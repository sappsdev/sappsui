<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";
  import { setContext } from "svelte";

  type Props = {
    children?: Snippet;
    class?: string;
    active?: string;
    placement?: 'horizontal' | 'vertical';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  };
  const {
    children,
    class: className,
    active,
    placement = 'horizontal',
    size = 'md',
  }: Props = $props();

  let steps = $state({
    active: active || '',
    items: [] as string[],
    placement,
    size
  });

  setContext('steps', {
    ...steps,
    registerStep: (key: string) => {
      steps.items = [...steps.items, key];
      return {
        unregister: () => {
          steps.items = steps.items.filter(k => k !== key);
        }
      };
    }
  });

  $effect(() => {
    if (active !== undefined && active !== steps.active) {
      steps.active = active;
    }
  });
</script>

<div class={cn("steps", placement, `s-${size}`, className)}>
  {@render children?.()}
</div>