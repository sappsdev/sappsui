<script lang="ts">
  import {
    Navbar,
    NavbarBody,
    NavbarBrand,
    NavbarContent,
    Menu,
    MenuItem,
    Card,
    CardBody,
    Flex,
    Page,
    Text,
    Icons,
  } from "$lib/index.js";
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Navbar</Text>
    <Text
      >A navigation bar component that provides consistent navigation structure
      across your application.</Text
    >
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Basic Navbar</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Navbar class="static">
          <NavbarBody>
            <NavbarContent>
              <Menu>
                <MenuItem href="/#">Home</MenuItem>
                <MenuItem href="/#">About</MenuItem>
                <MenuItem href="/#">Contact</MenuItem>
              </Menu>
            </NavbarContent>
          </NavbarBody>
        </Navbar>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Navbar with Brand</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Navbar class="static">
          <NavbarBody>
            <NavbarBrand href="/#">
              <Icons icon="lucide:layout" class="text-2xl" />
              <Text class="font-bold ml-2">SappsUI</Text>
            </NavbarBrand>
            <NavbarContent class="hidden md:flex">
              <Menu>
                <MenuItem href="/#">Home</MenuItem>
                <MenuItem href="/#">About</MenuItem>
                <MenuItem href="/#">Contact</MenuItem>
              </Menu>
            </NavbarContent>
          </NavbarBody>
        </Navbar>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Multiple Content Sections</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Navbar class="static">
          <NavbarBody>
            <NavbarBrand href="/#">
              <Icons icon="lucide:layout" class="text-2xl" />
              <Text class="font-bold ml-2">SappsUI</Text>
            </NavbarBrand>
            <NavbarContent class="hidden md:flex">
              <Menu>
                <MenuItem href="/#">Products</MenuItem>
                <MenuItem href="/#">Features</MenuItem>
                <MenuItem href="/#">Resources</MenuItem>
              </Menu>
            </NavbarContent>
            <NavbarContent>
              <Menu>
                <MenuItem href="/#">Login</MenuItem>
                <MenuItem href="/#" color="primary">Sign Up</MenuItem>
              </Menu>
            </NavbarContent>
          </NavbarBody>
        </Navbar>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Responsive Navbar</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Navbar class="md:flex hidden static">
          <NavbarBody>
            <NavbarBrand href="/#">
              <Icons icon="lucide:layout" class="text-2xl" />
              <Text class="font-bold ml-2">SappsUI</Text>
            </NavbarBrand>
            <NavbarContent>
              <Menu>
                <MenuItem href="/#">Dashboard</MenuItem>
                <MenuItem href="/#">Analytics</MenuItem>
                <MenuItem href="/#">Reports</MenuItem>
                <MenuItem href="/#">Settings</MenuItem>
              </Menu>
            </NavbarContent>
          </NavbarBody>
        </Navbar>
        <Navbar class="flex md:hidden static">
          <NavbarBody>
            <NavbarBrand href="/#">
              <Icons icon="lucide:layout" class="text-2xl" />
            </NavbarBrand>
            <NavbarContent>
              <Menu>
                <MenuItem>
                  <Icons icon="lucide:menu" class="text-xl" />
                </MenuItem>
              </Menu>
            </NavbarContent>
          </NavbarBody>
        </Navbar>
      </CardBody>
    </Card>
  </Flex>
</Page>
