<script lang="ts">
  import {
    Button,
    Card,
    CardBody,
    Flex,
    Icons,
    Page,
    Tab,
    TabContent,
    TabsList,
    Tabs,
    Text,
  } from "$lib/index.js";
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Tabs</Text>
    <Text>A tabbed interface component with various styles and variants.</Text>
  </Flex>

  <Flex direction="column" class="gap-4">
    <Text variant="h4">Basic Usage</Text>
    <Card>
      <CardBody>
        <Tabs active="tab1">
          <TabsList>
            <Tab key="tab1">
              <Text>Profile</Text>
            </Tab>
            <Tab key="tab2">
              <Text>Settings</Text>
            </Tab>
            <Tab key="tab3">
              <Text>Notifications</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1">
            <Flex direction="column" class="gap-4 p-4">
              <Text variant="h4">Profile Content</Text>
              <Text>This is the profile tab content.</Text>
            </Flex>
          </TabContent>
          <TabContent key="tab2">
            <Flex direction="column" class="gap-4 p-4">
              <Text variant="h4">Settings Content</Text>
              <Text>This is the settings tab content.</Text>
            </Flex>
          </TabContent>
          <TabContent key="tab3">
            <Flex direction="column" class="gap-4 p-4">
              <Text variant="h4">Notifications Content</Text>
              <Text>This is the notifications tab content.</Text>
            </Flex>
          </TabContent>
        </Tabs>
      </CardBody>
    </Card>

    <Text variant="h4">Variants</Text>
    <Card>
      <CardBody class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Tabs active="photos">
          <TabsList variant="solid">
            <Tab key="photos">
              <Text>Photos</Text>
            </Tab>
            <Tab key="music">
              <Text>Music</Text>
            </Tab>
            <Tab key="videos">
              <Text>Videos</Text>
            </Tab>
          </TabsList>
          <TabContent key="photos" class="p-4">
            <Text>Solid variant content</Text>
          </TabContent>
          <TabContent key="music" class="p-4">
            <Text>Music</Text>
          </TabContent>
          <TabContent key="videos" class="p-4">
            <Text>Videos</Text>
          </TabContent>
        </Tabs>

        <Tabs active="photos">
          <TabsList variant="light">
            <Tab key="photos">
              <Text>Photos</Text>
            </Tab>
            <Tab key="music">
              <Text>Music</Text>
            </Tab>
            <Tab key="videos">
              <Text>Videos</Text>
            </Tab>
          </TabsList>
          <TabContent key="photos" class="p-4">
            <Text>Light variant content</Text>
          </TabContent>
          <TabContent key="music" class="p-4">
            <Text>Music</Text>
          </TabContent>
          <TabContent key="videos" class="p-4">
            <Text>Videos</Text>
          </TabContent>
        </Tabs>

        <Tabs active="photos">
          <TabsList variant="bordered">
            <Tab key="photos">
              <Text>Photos</Text>
            </Tab>
            <Tab key="music">
              <Text>Music</Text>
            </Tab>
            <Tab key="videos">
              <Text>Videos</Text>
            </Tab>
          </TabsList>
          <TabContent key="photos" class="p-4">
            <Text>Bordered variant content</Text>
          </TabContent>
          <TabContent key="music" class="p-4">
            <Text>Music</Text>
          </TabContent>
          <TabContent key="videos" class="p-4">
            <Text>Videos</Text>
          </TabContent>
        </Tabs>
        <Tabs active="photos">
          <TabsList variant="underlined">
            <Tab key="photos">
              <Text>Photos</Text>
            </Tab>
            <Tab key="music">
              <Text>Music</Text>
            </Tab>
            <Tab key="videos">
              <Text>Videos</Text>
            </Tab>
          </TabsList>
          <TabContent key="photos" class="p-4">
            <Text>Underlined variant content</Text>
          </TabContent>
          <TabContent key="music" class="p-4">
            <Text>Music</Text>
          </TabContent>
          <TabContent key="videos" class="p-4">
            <Text>Videos</Text>
          </TabContent>
        </Tabs>
      </CardBody>
    </Card>

    <Text variant="h4">Placement</Text>
    <Card>
      <CardBody class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Tabs active="tab1" placement="top">
          <TabsList>
            <Tab key="tab1">
              <Text>Top</Text>
            </Tab>
            <Tab key="tab2">
              <Text>Music</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1" class="p-4">
            <Text>Bottom placement content</Text>
          </TabContent>
          <TabContent key="tab2" class="p-4">
            <Text>Music content</Text>
          </TabContent>
        </Tabs>
        <Tabs active="tab1" placement="bottom">
          <TabsList>
            <Tab key="tab1">
              <Text>Bottom</Text>
            </Tab>
            <Tab key="tab2">
              <Text>Music</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1" class="p-4">
            <Text>Bottom placement content</Text>
          </TabContent>
          <TabContent key="tab2" class="p-4">
            <Text>Music content</Text>
          </TabContent>
        </Tabs>

        <Tabs active="tab1" placement="start">
          <TabsList>
            <Tab key="tab1">
              <Text>Start</Text>
            </Tab>
            <Tab key="tab2">
              <Text>Music</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1" class="p-4">
            <Text>Start placement content</Text>
          </TabContent>
          <TabContent key="tab2" class="p-4">
            <Text>Music content</Text>
          </TabContent>
        </Tabs>
        <Tabs active="tab1" placement="end">
          <TabsList>
            <Tab key="tab1">
              <Text>End</Text>
            </Tab>
            <Tab key="tab2">
              <Text>Music</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1" class="p-4">
            <Text>Start placement content</Text>
          </TabContent>
          <TabContent key="tab2" class="p-4">
            <Text>Music content</Text>
          </TabContent>
        </Tabs>
      </CardBody>
    </Card>

    <Text variant="h4">With Icons</Text>
    <Card>
      <CardBody>
        <Tabs active="tab1">
          <TabsList class="with-icons">
            <Tab key="tab1">
              <Icons icon="solar:user-plus-bold-duotone" class="size-6 mr-2" />
              <Text>Profile</Text>
            </Tab>
            <Tab key="tab2">
              <Icons icon="solar:settings-bold-duotone" class="size-6 mr-2" />
              <Text>Settings</Text>
            </Tab>
            <Tab key="tab3">
              <Icons icon="solar:bell-bing-bold-duotone" class="size-6 mr-2" />
              <Text>Notifications</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1" class="p-4">
            <Text>Profile content with icon</Text>
          </TabContent>
          <TabContent key="tab2" class="p-4">
            <Text>Settings content with icon</Text>
          </TabContent>
          <TabContent key="tab3" class="p-4">
            <Text>Notifications content with icon</Text>
          </TabContent>
        </Tabs>
      </CardBody>
    </Card>

    <Text variant="h4">Colors</Text>
    <Card>
      <CardBody class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Tabs active="tab1">
          <TabsList color="primary">
            <Tab key="tab1">
              <Text>Primary</Text>
            </Tab>
            <Tab key="tab2">
              <Text>Music</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1" class="p-4">
            <Text>Primary color content</Text>
          </TabContent>
          <TabContent key="tab2" class="p-4">
            <Text>Music content</Text>
          </TabContent>
        </Tabs>

        <Tabs active="tab1">
          <TabsList color="secondary">
            <Tab key="tab1">
              <Text>Secondary</Text>
            </Tab>
            <Tab key="tab2">
              <Text>Music</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1" class="p-4">
            <Text>Secondary color content</Text>
          </TabContent>
          <TabContent key="tab2" class="p-4">
            <Text>Music content</Text>
          </TabContent>
        </Tabs>

        <Tabs active="tab1">
          <TabsList color="success">
            <Tab key="tab1">
              <Text>Success</Text>
            </Tab>
            <Tab key="tab2">
              <Text>Music</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1" class="p-4">
            <Text>Success color content</Text>
          </TabContent>
          <TabContent key="tab2" class="p-4">
            <Text>Music content</Text>
          </TabContent>
        </Tabs>
      </CardBody>
    </Card>

    <Text variant="h4">Radius</Text>
    <Card>
      <CardBody class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Tabs active="tab1">
          <TabsList radius="r-none">
            <Tab key="tab1">
              <Text>No Radius</Text>
            </Tab>
            <Tab key="tab2">
              <Text>Music</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1" class="p-4">
            <Text>No radius content</Text>
          </TabContent>
          <TabContent key="tab2" class="p-4">
            <Text>Music content</Text>
          </TabContent>
        </Tabs>

        <Tabs active="tab1">
          <TabsList radius="r-lg">
            <Tab key="tab1">
              <Text>Large Radius</Text>
            </Tab>
            <Tab key="tab2">
              <Text>Music</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1" class="p-4">
            <Text>Extra large radius content</Text>
          </TabContent>
          <TabContent key="tab2" class="p-4">
            <Text>Music content</Text>
          </TabContent>
        </Tabs>

        <Tabs active="tab1">
          <TabsList radius="r-full">
            <Tab key="tab1">
              <Text>Full Radius</Text>
            </Tab>
            <Tab key="tab2">
              <Text>Music</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1" class="p-4">
            <Text>Full radius content</Text>
          </TabContent>
          <TabContent key="tab2" class="p-4">
            <Text>Music content</Text>
          </TabContent>
        </Tabs>
      </CardBody>
    </Card>

    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Tabs active="tab1">
          <TabsList size="s-xs">
            <Tab key="tab1">
              <Text>Extra Small</Text>
            </Tab>
            <Tab key="tab2">
              <Text>Music</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1" class="p-4">
            <Text>Extra small size content</Text>
          </TabContent>
          <TabContent key="tab2" class="p-4">
            <Text>Music content</Text>
          </TabContent>
        </Tabs>

        <Tabs active="tab1">
          <TabsList size="s-xl">
            <Tab key="tab1">
              <Text>Extra Large</Text>
            </Tab>
            <Tab key="tab2">
              <Text>Music</Text>
            </Tab>
          </TabsList>
          <TabContent key="tab1" class="p-4">
            <Text>Extra large size content</Text>
          </TabContent>
          <TabContent key="tab2" class="p-4">
            <Text>Music content</Text>
          </TabContent>
        </Tabs>
      </CardBody>
    </Card>
  </Flex>
</Page>
