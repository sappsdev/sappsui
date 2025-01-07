<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import "@fontsource/mallanna";
  import "../app.css";
  let { children } = $props();
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:head>
  <title>SappsUI</title>
</svelte:head>

{@render children()}
