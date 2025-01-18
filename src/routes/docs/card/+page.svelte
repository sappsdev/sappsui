<script lang="ts">
  import { Card, Code, Flex, Page, Tabs, Text } from "$lib/index.js";
</script>

<Page class="gap-4">
  <Flex direction="column">
    <Text variant="h3">Card</Text>
    <Text>
      Cards are used to group and display content in a way that is easily
      readable.
    </Text>
  </Flex>
  <Tabs.Root active="preview" variant="underlined">
    <Tabs.List>
      <Tabs.Item key="preview">Preview</Tabs.Item>
      <Tabs.Item key="code">Code</Tabs.Item>
    </Tabs.List>
    <Tabs.Content key="preview">
      <Card.Root>
        <Card.Body>
          <Card.Root>
            <Card.Body
              >Discover the features and benefits that our service offers.
            </Card.Body>
          </Card.Root>
        </Card.Body>
      </Card.Root>
    </Tabs.Content>
    <Tabs.Content key="code">
      <Code
        lang="html"
        code={`<script lang="ts">
    import { Card } from "sappsui";
<\/script>
<Card.Root>
    <Card.Body>
        Discover the features and benefits that our service offers.
    </Card.Body>
</Card.Root>`}
      />
    </Tabs.Content>
  </Tabs.Root>
</Page>
