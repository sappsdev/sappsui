<script lang="ts">
  import { Card, Text } from "$lib/index.js";
</script>

<div class="p-4">
  <Text variant="h1" class="mb-6">Layout Component Examples</Text>
  <Text class="mb-8">
    The Layout component is a versatile container that can be configured for
    various use cases. Below are examples of common layout patterns implemented
    with SappsUI components.
  </Text>

  <!-- Login Layout Example (No navbar, no sidebar) -->
  <Card class="mb-12 p-6">
    <Text variant="h2" class="mb-4">Login Layout</Text>
    <Text class="mb-4">
      A simple layout without navbar or sidebar, perfect for authentication
      pages.
    </Text>
    <div class="border rounded-lg overflow-hidden mb-4"></div>

    <Text variant="h4" class="mt-4 mb-2">Implementation</Text>
    <pre class="bg-gray-100 p-4 rounded overflow-x-auto text-sm">{`<Layout>
  <LayoutBody>
    <LayoutMain>
      <!-- Page content -->
    </LayoutMain>
  </LayoutBody>
</Layout>`}</pre>
  </Card>

  <!-- Landing Page Layout Example (Navbar only) -->
  <Card class="mb-12 p-6">
    <Text variant="h2" class="mb-4">Landing Page Layout</Text>
    <Text class="mb-4">
      A layout with only a navbar, commonly used for landing pages and marketing
      sites.
    </Text>

    <div class="border rounded-lg overflow-hidden mb-4"></div>

    <Text variant="h4" class="mt-4 mb-2">Implementation</Text>
    <pre
      class="bg-gray-100 p-4 rounded overflow-x-auto text-sm">{`<Layout hNavbar={64} navbarInset>
  <Navbar>
    <NavbarBody>
      <!-- Navbar content -->
    </NavbarBody>
  </Navbar>
  <LayoutBody>
    <LayoutMain>
      <!-- Page content -->
    </LayoutMain>
  </LayoutBody>
</Layout>`}</pre>
  </Card>

  <!-- Dashboard Layout Example (Navbar + Sidebar) -->
  <Card class="mb-12 p-6">
    <Text variant="h2" class="mb-4">Dashboard Layout</Text>
    <Text class="mb-4">
      A complete layout with navbar and sidebar, ideal for dashboards and admin
      panels. The sidebar is responsive and becomes a drawer on mobile devices
      based on the breakpoint.
    </Text>

    <div class="border rounded-lg overflow-hidden mb-4"></div>

    <Text variant="h4" class="mt-4 mb-2">Implementation</Text>
    <pre
      class="bg-gray-100 p-4 rounded overflow-x-auto text-sm">{`<Layout hNavbar={64} wlSidebar={200} navbarInset>
  <Navbar>
    <NavbarBody>
      <!-- Navbar content with menu toggle for mobile -->
    </NavbarBody>
  </Navbar>
  <LayoutBody>
    <Sidebar breakpoint="md">
      <SidebarBody>
        <!-- Sidebar content -->
      </SidebarBody>
    </Sidebar>
    <LayoutMain>
      <!-- Main content -->
    </LayoutMain>
  </LayoutBody>
</Layout>`}</pre>
  </Card>

  <!-- Additional Layout Configurations -->
  <Card class="p-6">
    <Text variant="h2" class="mb-4">Additional Layout Configurations</Text>
    <Text class="mb-4">
      The Layout component supports various configurations through props:
    </Text>

    <table class="w-full border-collapse mb-6">
      <thead>
        <tr class="border-b">
          <th class="text-left p-2">Prop</th>
          <th class="text-left p-2">Description</th>
          <th class="text-left p-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b">
          <td class="p-2"><code>hNavbar</code></td>
          <td class="p-2">Height of the navbar in pixels</td>
          <td class="p-2"><code>hNavbar={64}</code></td>
        </tr>
        <tr class="border-b">
          <td class="p-2"><code>hDock</code></td>
          <td class="p-2">Height of the dock in pixels</td>
          <td class="p-2"><code>hDock={56}</code></td>
        </tr>
        <tr class="border-b">
          <td class="p-2"><code>wlSidebar</code></td>
          <td class="p-2">Width of the left sidebar in pixels</td>
          <td class="p-2"><code>wlSidebar={250}</code></td>
        </tr>
        <tr class="border-b">
          <td class="p-2"><code>wrSidebar</code></td>
          <td class="p-2">Width of the right sidebar in pixels</td>
          <td class="p-2"><code>wrSidebar={250}</code></td>
        </tr>
        <tr class="border-b">
          <td class="p-2"><code>navbarInset</code></td>
          <td class="p-2">Whether to inset the layout body below the navbar</td>
          <td class="p-2"><code>navbarInset={true}</code></td>
        </tr>
        <tr class="border-b">
          <td class="p-2"><code>fullOnScroll</code></td>
          <td class="p-2">Whether to hide the navbar when scrolling down</td>
          <td class="p-2"><code>fullOnScroll={true}</code></td>
        </tr>
      </tbody>
    </table>

    <Text variant="h4" class="mt-6 mb-2">Responsive Behavior</Text>
    <Text class="mb-4">
      The sidebar component has a <code>breakpoint</code> prop that determines
      when it transforms into a drawer on smaller screens. Common breakpoint
      values are: <code>"sm"</code>, <code>"md"</code>, <code>"lg"</code>,
      <code>"xl"</code>, <code>"2xl"</code>.
    </Text>
    <Text>
      Resize your browser window to see how the dashboard example above changes
      between sidebar and drawer modes.
    </Text>
  </Card>
</div>
