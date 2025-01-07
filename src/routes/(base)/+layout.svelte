<script lang="ts">
  import { Dock, Flex, Layout, Navbar, Sidebar } from "$lib/index.js";

  let { children } = $props();
</script>

<Layout.Root
  hNavbar={64}
  hDock={64}
  wlSidebar={250}
  wrSidebar={250}
  navbarInset
>
  <Navbar.Root>
    <Navbar.Body class="boxed">
      <Navbar.Content>
        <Sidebar.Open>Open</Sidebar.Open>
      </Navbar.Content>
    </Navbar.Body>
  </Navbar.Root>
  <Layout.Body class="boxed">
    <Sidebar.Root class="">
      <Sidebar.Header>Header</Sidebar.Header>
      <Sidebar.Body>
        <Sidebar.Menu>
          {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as item}
            <Flex class="p-10">
              {item}
            </Flex>
          {/each}
        </Sidebar.Menu>
      </Sidebar.Body>
      <Sidebar.Footer>Footer</Sidebar.Footer>
    </Sidebar.Root>
    <Layout.Main>
      {@render children()}
      {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as item}
        <Flex class="p-10">
          {item}
        </Flex>
      {/each}
    </Layout.Main>
    <Sidebar.Root placement="right">
      <Sidebar.Header>Header</Sidebar.Header>
      <Sidebar.Body>
        <Sidebar.Menu>
          {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as item}
            <Flex class="p-10">
              {item}
            </Flex>
          {/each}
        </Sidebar.Menu>
      </Sidebar.Body>
      <Sidebar.Footer>Footer</Sidebar.Footer>
    </Sidebar.Root>
  </Layout.Body>
  <Dock.Root>
    <Dock.Body>dock</Dock.Body>
  </Dock.Root>
</Layout.Root>
