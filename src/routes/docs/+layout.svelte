<script lang="ts">
  import { Flex, Layout, Sidebar } from "$lib/index.js";
  let { children } = $props();
</script>

<Layout.Body class="boxed">
  <Sidebar.Root breakpoint="md">
    <Sidebar.Body>
      <Sidebar.Menu>
        <Sidebar.Item href="/docs/card">Card</Sidebar.Item>
        <Sidebar.Item href="/docs/layout">Layout</Sidebar.Item>
        <Sidebar.Item href="/docs/button">Button</Sidebar.Item>
        <Sidebar.Item href="/docs/tabs">Tabs</Sidebar.Item>
        <Sidebar.Item href="/docs/textfield">TextField</Sidebar.Item>
        <Sidebar.Item href="/docs/typography">Typography</Sidebar.Item>
      </Sidebar.Menu>
    </Sidebar.Body>
    <Sidebar.Footer>Footer</Sidebar.Footer>
  </Sidebar.Root>
  <Layout.Main class="p-3 overflow-x-hidden">
    {@render children()}
  </Layout.Main>
  <Sidebar.Root placement="right" breakpoint="xl">
    <Sidebar.Header>Header</Sidebar.Header>
    <Sidebar.Body>
      <Sidebar.Menu>
        {#each [1, 2, 3, 4] as item}
          <Flex class="p-10">
            {item}
          </Flex>
        {/each}
      </Sidebar.Menu>
    </Sidebar.Body>
    <Sidebar.Footer>Footer</Sidebar.Footer>
  </Sidebar.Root>
</Layout.Body>
