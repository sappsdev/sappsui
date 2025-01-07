<script lang="ts">
  import { Footer, Layout, Navbar, Sidebar, Text } from "$lib/index.js";
  let { children } = $props();
</script>

<Layout.Root class="container mx-auto" hDock={64} hNavbar={64}>
  <Navbar.Root>
    <Navbar.Content>
      <Navbar.Brand>
        <Text variant="h1">SappsUI</Text>
      </Navbar.Brand>
    </Navbar.Content>
    <Navbar.Content>
      <Navbar.Item>Docs</Navbar.Item>
      <Navbar.Item>Components</Navbar.Item>
      <Navbar.Item>Blog</Navbar.Item>
    </Navbar.Content>
  </Navbar.Root>
  <Sidebar.Root>
    <Sidebar.Body>
      <Sidebar.Menu>
        <Sidebar.Item href="/docs/card">Card</Sidebar.Item>
      </Sidebar.Menu>
    </Sidebar.Body>
  </Sidebar.Root>
  <Sidebar.Root placement="right">
    <Sidebar.Body>Right</Sidebar.Body>
  </Sidebar.Root>
  {@render children()}
  <Footer.Root>footer</Footer.Root>
</Layout.Root>
