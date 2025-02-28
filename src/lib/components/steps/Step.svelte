<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import { getContext, onMount, onDestroy, type Snippet } from 'svelte';

  type Props = {
    children?: Snippet;
    key: string;
    title: string;
    description?: string;
    color?: 'muted' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger';
    variant?: 'solid' | 'outlined' | 'light';
    class?: string;
  };
  
  const {
    children,
    key = '',
    title = '',
    description = '',
    color = 'primary',
    variant = 'solid',
    class: className = ''
  }: Props = $props();

  const steps: any = getContext('steps');
  
  let stepIndex = $state(0);
  let status = $state<'completed' | 'current' | 'upcoming'>('upcoming');
  
  const unregister = steps.registerStep(key);
  
  $effect(() => {
    stepIndex = steps.items.indexOf(key);
    const currentIndex = steps.items.indexOf(steps.active);
    
    if (stepIndex < currentIndex) {
      status = 'completed';
    } else if (stepIndex === currentIndex) {
      status = 'current';
    } else {
      status = 'upcoming';
    }
  });

  onMount(() => {
    // If no active step is set, activate the first step
    if (steps.active === '' && stepIndex === 0) {
      steps.active = key;
    }
  });

  onDestroy(() => {
    unregister.unregister();
  });
</script>

<div class={cn("step", status, className)}>
  <div class={cn("step-circle", color, variant)}>
    {#if status === 'completed'}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    {:else}
      <span>{stepIndex + 1}</span>
    {/if}
  </div>
  <div class="step-content">
    <div class="step-title">{title}</div>
    {#if description}
      <div class="step-description">{description}</div>
    {/if}
    {@render children?.()}
  </div>
</div>