<script lang="ts">
  import { cn } from "$lib/utils/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    disabled?: boolean;
    value?: number;
    minValue?: number;
    maxValue?: number;
    min?: number;
    max?: number;
    step?: number;
    label?: string;
    hideValue?: boolean;
    hideThumb?: boolean;
    showMarks?: boolean;
    class?: string;
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    color?: "foreground" | "primary" | "secondary" | "success" | "warning" | "danger";
  };

  let {
    children,
    value,
    minValue = 0,
    maxValue = 100,
    min = 0,
    max = 100,
    step = 1,
    label = "",
    hideValue = false,
    hideThumb = false,
    showMarks = false,
    size = "md",
    radius = "full",
    color = "primary",
    disabled = false,
    class: className,
  }: Props = $props();
  
  // Determine if we're in single value mode (using 'value' prop) or range mode
  let isSingleValueMode = value !== undefined;
  
  // If in single value mode, set maxValue to the value
  $effect(() => {
    if (isSingleValueMode && value !== undefined) {
      maxValue = value;
      minValue = min;
    }
  });

  let isDraggingMin = $state(false);
  let isDraggingMax = $state(false);
  let trackElement: HTMLDivElement;

  function calculatePercentage(val: number) {
    return ((val - min) / (max - min)) * 100;
  }

  function calculateValueFromPosition(position: number, trackRect: DOMRect) {
    const percentage = ((position - trackRect.left) / trackRect.width) * 100;
    const rawValue = (percentage / 100) * (max - min) + min;
    const steppedValue = Math.round(rawValue / step) * step;
    return Math.max(min, Math.min(max, steppedValue));
  }

  function handleMouseDown(event: MouseEvent, isMin: boolean) {
    if (disabled) return;
    
    if (isMin) {
      isDraggingMin = true;
    } else {
      isDraggingMax = true;
    }

    const trackRect = trackElement.getBoundingClientRect();
    const position = event.clientX;
    const newValue = calculateValueFromPosition(position, trackRect);

    if (isMin) {
      minValue = Math.min(newValue, maxValue - step);
    } else {
      maxValue = Math.max(newValue, minValue + step);
    }
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isDraggingMin && !isDraggingMax) return;
    
    const trackRect = trackElement.getBoundingClientRect();
    const position = event.clientX;
    const newValue = calculateValueFromPosition(position, trackRect);

    if (isDraggingMin) {
      minValue = Math.min(newValue, maxValue - step);
    } else if (isDraggingMax) {
      maxValue = Math.max(newValue, minValue + step);
    }
  }

  function handleMouseUp() {
    isDraggingMin = false;
    isDraggingMax = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }

  function handleTrackClick(event: MouseEvent) {
    if (disabled) return;
    
    const trackRect = trackElement.getBoundingClientRect();
    const position = event.clientX;
    const newValue = calculateValueFromPosition(position, trackRect);
    
    // In single value mode, update maxValue (which represents the value)
    if (isSingleValueMode) {
      maxValue = newValue;
    } else {
      // In range mode, update the closest thumb
      const distanceToMin = Math.abs(calculatePercentage(newValue) - calculatePercentage(minValue));
      const distanceToMax = Math.abs(calculatePercentage(newValue) - calculatePercentage(maxValue));
      
      if (distanceToMin < distanceToMax) {
        minValue = Math.min(newValue, maxValue - step);
      } else {
        maxValue = Math.max(newValue, minValue + step);
      }
    }
  }

  function handleMarkClick(event: MouseEvent, markValue: number) {
    if (disabled) return;
    event.stopPropagation(); // Prevent the track click handler from also firing
    
    // In single value mode, update maxValue (which represents the value)
    if (isSingleValueMode) {
      maxValue = markValue;
    } else {
      // In range mode, update the closest thumb
      const distanceToMin = Math.abs(markValue - minValue);
      const distanceToMax = Math.abs(markValue - maxValue);
      
      if (distanceToMin < distanceToMax) {
        minValue = Math.min(markValue, maxValue - step);
      } else {
        maxValue = Math.max(markValue, minValue + step);
      }
    }
  }
  
  $effect(() => {
    // Ensure minValue doesn't exceed maxValue
    if (minValue > maxValue - step) {
      minValue = maxValue - step;
    }
    // Ensure maxValue doesn't fall below minValue
    if (maxValue < minValue + step) {
      maxValue = minValue + step;
    }
  });
</script>

<div class={cn("slider", size, radius, color, className)} data-disabled={disabled}>
  <div class="slider-label-wrapper">
    {#if label}
      <label class="slider-label" for="slider-input">{label}</label>
    {/if}
    {#if !hideValue}
      <output class="slider-value" for="slider-input">
        {#if isSingleValueMode}
          {maxValue}
        {:else}
          {minValue} - {maxValue}
        {/if}
      </output>
    {/if}
  </div>
  
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="slider-track-wrapper" bind:this={trackElement} onclick={handleTrackClick}>
    <div class="slider-track">
      <div 
        class="slider-filler" 
        style={`left: ${calculatePercentage(minValue)}%; width: ${calculatePercentage(maxValue) - calculatePercentage(minValue)}%`}
      ></div>
    </div>
    
    {#if !isSingleValueMode}
    <div 
      class="slider-thumb" 
      style={`left: ${calculatePercentage(minValue)}%`}
      class:hide={hideThumb}
      data-dragging={isDraggingMin}
      onmousedown={(e) => handleMouseDown(e, true)}
    ></div>
    {/if}

    <div 
      class="slider-thumb" 
      style={`left: ${calculatePercentage(maxValue)}%`}
      class:hide={hideThumb}
      data-dragging={isDraggingMax}
      onmousedown={(e) => handleMouseDown(e, false)}
    ></div>
    
    {#if showMarks}
      {#each Array.from({ length: (max - min) / step + 1 }) as _, i}
        <div 
          class="slider-mark" 
          data-in-range={min + i * step >= minValue && min + i * step <= maxValue}
          style={`left: ${calculatePercentage(min + i * step)}%`}
          onclick={(e) => handleMarkClick(e, min + i * step)}
        ></div>
      {/each}
    {/if}
  </div>
</div>