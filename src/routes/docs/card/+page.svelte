<script lang="ts">
  import { Card, Code, Page, Tabs, Text } from "$lib/index.js";
</script>

<Page>
  <Text variant="h3">Card</Text>
  <Text>
    Cards are used to group and display content in a way that is easily
    readable.
  </Text>
  <Tabs.Root active="preview">
    <Tabs.List>
      <Tabs.Item key="preview">Preview</Tabs.Item>
      <Tabs.Item key="code">Code</Tabs.Item>
    </Tabs.List>
    <Tabs.Content key="preview">
      <Card.Root>
        <Card.Body
          >Discover the features and benefits that our service offers. Enhance
          your experience with our user-friendly platform designed to meet all
          your needs.
        </Card.Body>
      </Card.Root>
    </Tabs.Content>
    <Tabs.Content key="code">
      <Code code={`console.log("Hello world")`} />
    </Tabs.Content>
  </Tabs.Root>
</Page>
