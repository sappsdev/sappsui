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

  let activeTab1 = $state("tab1");
  let activeTab2 = $state("placement-top");
  let activeTab3 = $state("variant1");
  let activeTab4 = $state("size1");
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Tabs</Text>
    <Text>A tabbed interface component with various styles and variants.</Text>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Basic Usage</Text>
    <Card>
      <CardBody>
        <Tabs active={activeTab1}>
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
          <TabContent>
            {#if activeTab1 === "tab1"}
              <Flex direction="column" class="gap-4 p-4">
                <Text variant="h4">Profile Content</Text>
                <Text>This is the profile tab content.</Text>
              </Flex>
            {:else if activeTab1 === "tab2"}
              <Flex direction="column" class="gap-4 p-4">
                <Text variant="h4">Settings Content</Text>
                <Text>This is the settings tab content.</Text>
              </Flex>
            {:else}
              <Flex direction="column" class="gap-4 p-4">
                <Text variant="h4">Notifications Content</Text>
                <Text>This is the notifications tab content.</Text>
              </Flex>
            {/if}
          </TabContent>
        </Tabs>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Tab Placement</Text>
    <Card>
      <CardBody>
        <Tabs active={activeTab2}>
          <TabsList>
            <Tab key="placement-top">
              <Text>Top</Text>
            </Tab>
            <Tab key="placement-bottom">
              <Text>Bottom</Text>
            </Tab>
            <Tab key="placement-start">
              <Text>Start</Text>
            </Tab>
            <Tab key="placement-end">
              <Text>End</Text>
            </Tab>
          </TabsList>
          <TabContent>
            {#if activeTab2 === "placement-top"}
              <Tabs placement="top" active="demo1">
                <TabsList>
                  <Tab key="demo1"><Text>Tab 1</Text></Tab>
                  <Tab key="demo2"><Text>Tab 2</Text></Tab>
                </TabsList>
                <TabContent>
                  <Text class="p-4">Content for top placement demo</Text>
                </TabContent>
              </Tabs>
            {:else if activeTab2 === "placement-bottom"}
              <Tabs placement="bottom" active="demo1">
                <TabsList>
                  <Tab key="demo1"><Text>Tab 1</Text></Tab>
                  <Tab key="demo2"><Text>Tab 2</Text></Tab>
                </TabsList>
                <TabContent>
                  <Text class="p-4">Content for bottom placement demo</Text>
                </TabContent>
              </Tabs>
            {:else if activeTab2 === "placement-start"}
              <Tabs placement="start" active="demo1">
                <TabsList>
                  <Tab key="demo1"><Text>Tab 1</Text></Tab>
                  <Tab key="demo2"><Text>Tab 2</Text></Tab>
                </TabsList>
                <TabContent>
                  <Text class="p-4">Content for start placement demo</Text>
                </TabContent>
              </Tabs>
            {:else}
              <Tabs placement="end" active="demo1">
                <TabsList>
                  <Tab key="demo1"><Text>Tab 1</Text></Tab>
                  <Tab key="demo2"><Text>Tab 2</Text></Tab>
                </TabsList>
                <TabContent>
                  <Text class="p-4">Content for end placement demo</Text>
                </TabContent>
              </Tabs>
            {/if}
          </TabContent>
        </Tabs>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Variants</Text>
    <Card>
      <CardBody>
        <Tabs active={activeTab3}>
          <TabsList>
            <Tab key="variant1">
              <Text>Solid</Text>
            </Tab>
            <Tab key="variant2">
              <Text>Underlined</Text>
            </Tab>
            <Tab key="variant3">
              <Text>Bordered</Text>
            </Tab>
            <Tab key="variant4">
              <Text>Light</Text>
            </Tab>
          </TabsList>
          <TabContent>
            {#if activeTab3 === "variant1"}
              <Tabs active="demo1">
                <TabsList variant="solid">
                  <Tab key="demo1"><Text>Tab 1</Text></Tab>
                  <Tab key="demo2"><Text>Tab 2</Text></Tab>
                </TabsList>
                <TabContent>
                  <Text class="p-4">Content for solid variant</Text>
                </TabContent>
              </Tabs>
            {:else if activeTab3 === "variant2"}
              <Tabs active="demo1">
                <TabsList variant="underlined">
                  <Tab key="demo1"><Text>Tab 1</Text></Tab>
                  <Tab key="demo2"><Text>Tab 2</Text></Tab>
                </TabsList>
                <TabContent>
                  <Text class="p-4">Content for underlined variant</Text>
                </TabContent>
              </Tabs>
            {:else if activeTab3 === "variant3"}
              <Tabs active="demo1">
                <TabsList variant="bordered">
                  <Tab key="demo1"><Text>Tab 1</Text></Tab>
                  <Tab key="demo2"><Text>Tab 2</Text></Tab>
                </TabsList>
                <TabContent>
                  <Text class="p-4">Content for bordered variant</Text>
                </TabContent>
              </Tabs>
            {:else}
              <Tabs active="demo1">
                <TabsList variant="light">
                  <Tab key="demo1"><Text>Tab 1</Text></Tab>
                  <Tab key="demo2"><Text>Tab 2</Text></Tab>
                </TabsList>
                <TabContent>
                  <Text class="p-4">Content for light variant</Text>
                </TabContent>
              </Tabs>
            {/if}
          </TabContent>
        </Tabs>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody>
        <Tabs active={activeTab4}>
          <TabsList>
            <Tab key="size1">
              <Text>Small</Text>
            </Tab>
            <Tab key="size2">
              <Text>Medium</Text>
            </Tab>
            <Tab key="size3">
              <Text>Large</Text>
            </Tab>
          </TabsList>
          <TabContent>
            {#if activeTab4 === "size1"}
              <Tabs active="demo1">
                <TabsList size="sm">
                  <Tab key="demo1"><Text>Tab 1</Text></Tab>
                  <Tab key="demo2"><Text>Tab 2</Text></Tab>
                </TabsList>
                <TabContent>
                  <Text class="p-4">Content for small size</Text>
                </TabContent>
              </Tabs>
            {:else if activeTab4 === "size2"}
              <Tabs active="demo1">
                <TabsList size="md">
                  <Tab key="demo1"><Text>Tab 1</Text></Tab>
                  <Tab key="demo2"><Text>Tab 2</Text></Tab>
                </TabsList>
                <TabContent>
                  <Text class="p-4">Content for medium size</Text>
                </TabContent>
              </Tabs>
            {:else}
              <Tabs active="demo1">
                <TabsList size="lg">
                  <Tab key="demo1"><Text>Tab 1</Text></Tab>
                  <Tab key="demo2"><Text>Tab 2</Text></Tab>
                </TabsList>
                <TabContent>
                  <Text class="p-4">Content for large size</Text>
                </TabContent>
              </Tabs>
            {/if}
          </TabContent>
        </Tabs>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">With Icons</Text>
    <Card>
      <CardBody>
        <Tabs active="tab1">
          <TabsList>
            <Tab key="tab1">
              <Icons icon="fluent:home-24-regular" class="mr-2" />
              <Text>Home</Text>
            </Tab>
            <Tab key="tab2">
              <Icons icon="fluent:person-24-regular" class="mr-2" />
              <Text>Profile</Text>
            </Tab>
            <Tab key="tab3">
              <Icons icon="fluent:settings-24-regular" class="mr-2" />
              <Text>Settings</Text>
            </Tab>
          </TabsList>
          <TabContent>
            <Text class="p-4">Tab content with icons example</Text>
          </TabContent>
        </Tabs>
      </CardBody>
    </Card>
  </Flex>
</Page>
