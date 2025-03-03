<script lang="ts">
  import {
    Card,
    CardBody,
    Flex,
    Icons,
    Layout,
    LayoutBody,
    LayoutMain,
    Menu,
    MenuItem,
    MenuTitle,
    Page,
    Sidebar,
    SidebarBody,
    SidebarFooter,
    SidebarHeader,
    SidebarTrigger,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Text
  } from "$lib/index.js";
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Sidebar</Text>
    <Text>
      The Sidebar component provides a responsive navigation panel that transforms into a drawer on smaller screens.
    </Text>
  </Flex>

  <!-- Basic Sidebar Example -->
  <Flex direction="column" class="gap-2">
    <Text variant="h4">Basic Sidebar</Text>
    <Card>
      <CardBody>
        <div class="border rounded-lg overflow-hidden mb-4 p-4">
          <div class="flex">
            <div class="w-48 h-64 border-r p-2">
              <Text variant="h6" class="mb-2">Sidebar</Text>
              <Menu vertical>
                <MenuItem>
                  <Icons icon="solar:home-bold" class="mr-2" />
                  <Text>Dashboard</Text>
                </MenuItem>
                <MenuItem>
                  <Icons icon="solar:user-bold" class="mr-2" />
                  <Text>Profile</Text>
                </MenuItem>
                <MenuItem>
                  <Icons icon="solar:settings-bold" class="mr-2" />
                  <Text>Settings</Text>
                </MenuItem>
              </Menu>
            </div>
            <div class="flex-1 p-4">
              <Text>Main Content Area</Text>
            </div>
          </div>
        </div>

        <Text variant="h4" class="mt-4 mb-2">Implementation</Text>
        <pre class="bg-gray-100 p-4 rounded overflow-x-auto text-sm">{`<Layout wlSidebar={200}>
  <LayoutBody>
    <Sidebar>
      <SidebarBody>
        <Menu vertical>
          <MenuItem>
            <Icons icon="solar:home-bold" class="mr-2" />
            <Text>Dashboard</Text>
          </MenuItem>
          <MenuItem>
            <Icons icon="solar:user-bold" class="mr-2" />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <Icons icon="solar:settings-bold" class="mr-2" />
            <Text>Settings</Text>
          </MenuItem>
        </Menu>
      </SidebarBody>
    </Sidebar>
    <LayoutMain>
      <!-- Main content -->
    </LayoutMain>
  </LayoutBody>
</Layout>`}</pre>
      </CardBody>
    </Card>
  </Flex>

  <!-- Responsive Sidebar Example -->
  <Flex direction="column" class="gap-2">
    <Text variant="h4">Responsive Sidebar</Text>
    <Card>
      <CardBody>
        <div class="border rounded-lg overflow-hidden mb-4 p-4">
          <div class="flex">
            <div class="w-48 h-64 border-r p-2">
              <Flex class="justify-between items-center mb-2">
                <Text variant="h6">Sidebar</Text>
                <Icons icon="solar:close-circle-bold" class="text-muted-foreground" />
              </Flex>
              <Menu vertical>
                <MenuTitle>Navigation</MenuTitle>
                <MenuItem>
                  <Icons icon="solar:home-bold" class="mr-2" />
                  <Text>Dashboard</Text>
                </MenuItem>
                <MenuItem>
                  <Icons icon="solar:user-bold" class="mr-2" />
                  <Text>Profile</Text>
                </MenuItem>
                <MenuItem>
                  <Icons icon="solar:settings-bold" class="mr-2" />
                  <Text>Settings</Text>
                </MenuItem>
              </Menu>
            </div>
            <div class="flex-1 p-4">
              <Flex class="mb-4">
                <SidebarTrigger placement="left" class="mr-2">
                  <Icons icon="solar:hamburger-menu-bold" />
                </SidebarTrigger>
                <Text>Main Content Area (with sidebar trigger)</Text>
              </Flex>
              <Text class="text-muted-foreground">Resize browser to see responsive behavior</Text>
            </div>
          </div>
        </div>

        <Text variant="h4" class="mt-4 mb-2">Implementation</Text>
        <pre class="bg-gray-100 p-4 rounded overflow-x-auto text-sm">{`<Layout wlSidebar={200}>
  <LayoutBody>
    <Sidebar breakpoint="md">
      <SidebarHeader>
        <Flex class="justify-between items-center p-4">
          <Text variant="h6">App Name</Text>
        </Flex>
      </SidebarHeader>
      <SidebarBody>
        <Menu vertical>
          <MenuTitle>Navigation</MenuTitle>
          <MenuItem>
            <Icons icon="solar:home-bold" class="mr-2" />
            <Text>Dashboard</Text>
          </MenuItem>
          <MenuItem>
            <Icons icon="solar:user-bold" class="mr-2" />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <Icons icon="solar:settings-bold" class="mr-2" />
            <Text>Settings</Text>
          </MenuItem>
        </Menu>
      </SidebarBody>
    </Sidebar>
    <LayoutMain>
      <SidebarTrigger placement="left">
        <Icons icon="solar:hamburger-menu-bold" />
      </SidebarTrigger>
      <!-- Main content -->
    </LayoutMain>
  </LayoutBody>
</Layout>`}</pre>
      </CardBody>
    </Card>
  </Flex>

  <!-- Sidebar with Header and Footer -->
  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sidebar with Header and Footer</Text>
    <Card>
      <CardBody>
        <div class="border rounded-lg overflow-hidden mb-4 p-4">
          <div class="flex">
            <div class="w-48 h-80 border-r p-2 flex flex-col">
              <div class="border-b p-2 mb-2">
                <Text variant="h6">App Logo</Text>
              </div>
              <div class="flex-1 overflow-y-auto">
                <Menu vertical>
                  <MenuItem>
                    <Icons icon="solar:home-bold" class="mr-2" />
                    <Text>Dashboard</Text>
                  </MenuItem>
                  <MenuItem>
                    <Icons icon="solar:user-bold" class="mr-2" />
                    <Text>Profile</Text>
                  </MenuItem>
                  <MenuItem>
                    <Icons icon="solar:chart-bold" class="mr-2" />
                    <Text>Analytics</Text>
                  </MenuItem>
                  <MenuItem>
                    <Icons icon="solar:settings-bold" class="mr-2" />
                    <Text>Settings</Text>
                  </MenuItem>
                  <MenuItem>
                    <Icons icon="solar:chat-round-bold" class="mr-2" />
                    <Text>Messages</Text>
                  </MenuItem>
                </Menu>
              </div>
              <div class="border-t p-2 mt-2">
                <Flex class="items-center">
                  <Icons icon="solar:user-circle-bold" class="mr-2" />
                  <Text>User Profile</Text>
                </Flex>
              </div>
            </div>
            <div class="flex-1 p-4">
              <Text>Main Content Area</Text>
            </div>
          </div>
        </div>

        <Text variant="h4" class="mt-4 mb-2">Implementation</Text>
        <pre class="bg-gray-100 p-4 rounded overflow-x-auto text-sm">{`<Layout wlSidebar={200}>
  <LayoutBody>
    <Sidebar>
      <SidebarHeader>
        <Flex class="p-4 border-b">
          <Text variant="h6">App Logo</Text>
        </Flex>
      </SidebarHeader>
      <SidebarBody>
        <Menu vertical>
          <MenuItem>
            <Icons icon="solar:home-bold" class="mr-2" />
            <Text>Dashboard</Text>
          </MenuItem>
          <MenuItem>
            <Icons icon="solar:user-bold" class="mr-2" />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <Icons icon="solar:chart-bold" class="mr-2" />
            <Text>Analytics</Text>
          </MenuItem>
          <MenuItem>
            <Icons icon="solar:settings-bold" class="mr-2" />
            <Text>Settings</Text>
          </MenuItem>
          <MenuItem>
            <Icons icon="solar:chat-round-bold" class="mr-2" />
            <Text>Messages</Text>
          </MenuItem>
        </Menu>
      </SidebarBody>
      <SidebarFooter>
        <Flex class="p-4 border-t items-center">
          <Icons icon="solar:user-circle-bold" class="mr-2" />
          <Text>User Profile</Text>
        </Flex>
      </SidebarFooter>
    </Sidebar>
    <LayoutMain>
      <!-- Main content -->
    </LayoutMain>
  </LayoutBody>
</Layout>`}</pre>
      </CardBody>
    </Card>
  </Flex>

  <!-- Sidebar Props and Configuration -->
  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sidebar Props and Configuration</Text>
    <Card>
      <CardBody>
        <Table class="mb-6">
          <TableHeader>
            <TableColumn>Prop</TableColumn>
            <TableColumn>Description</TableColumn>
            <TableColumn>Example</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><code>class</code></TableCell>
              <TableCell>Additional CSS classes</TableCell>
              <TableCell><code>class="bg-gray-100"</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>placement</code></TableCell>
              <TableCell>Position of the sidebar</TableCell>
              <TableCell><code>placement="left"</code> or <code>placement="right"</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>breakpoint</code></TableCell>
              <TableCell>Breakpoint at which sidebar converts to drawer</TableCell>
              <TableCell><code>breakpoint="md"</code></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>hideCloseButton</code></TableCell>
              <TableCell>Whether to hide the close button in drawer mode</TableCell>
              <TableCell><code>hideCloseButton={true}</code></TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Text variant="h4" class="mt-4 mb-2">Responsive Behavior</Text>
        <Text class="mb-4">
          The Sidebar component automatically transforms into a drawer on smaller screens based on the specified breakpoint.
          Available breakpoints are: <code>"sm"</code>, <code>"md"</code>, <code>"lg"</code>, <code>"xl"</code>, <code>"2xl"</code>.
        </Text>
        <Text>
          When in drawer mode, the sidebar can be toggled using the SidebarTrigger component, which should be placed in your layout.
        </Text>
      </CardBody>
    </Card>
  </Flex>
</Page>