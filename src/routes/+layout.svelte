<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import { Layout, Navbar, Text } from "$lib/index.js";
  import "@fontsource-variable/montserrat";
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

<Layout.Root
  hNavbar={64}
  wlSidebar={250}
  wrSidebar={250}
  navbarInset
  fullOnScroll
>
  <Navbar.Root>
    <Navbar.Body class="boxed">
      <Navbar.Content>
        <Navbar.Brand href="/">
          <Text class="font-light" variant="h1">SappsUI</Text>
        </Navbar.Brand>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item href="/docs">Docs</Navbar.Item>
        <Navbar.Item href="/components">Components</Navbar.Item>
        <Navbar.Item href="/blog">Blog</Navbar.Item>
      </Navbar.Content>
    </Navbar.Body>
  </Navbar.Root>
  {@render children()}
</Layout.Root>
