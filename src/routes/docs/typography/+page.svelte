<script lang="ts">
  import { Card, Code, Flex, Page, Tabs, Text } from "$lib/index.js";
</script>

<Page class="gap-4">
  <Flex direction="column">
    <Text variant="h3">Typography</Text>
    <Text>
      Typography is used to display text in a way that is easily readable.
    </Text>
  </Flex>
  <Tabs.Root active="preview">
    <Tabs.List>
      <Tabs.Item key="preview">Preview</Tabs.Item>
      <Tabs.Item key="code">Code</Tabs.Item>
    </Tabs.List>
    <Tabs.Content key="preview">
      <Card.Root>
        <Card.Body>
          <Flex class="gap-4" direction="column">
            <Text variant="h1">Heading 1</Text>
            <Text variant="h2">Heading 2</Text>
            <Text variant="h3">Heading 3</Text>
            <Text variant="h4">Heading 4</Text>
            <Text variant="h5">Heading 5</Text>
            <Text variant="h6">Heading 6</Text>
            <Text>Paragraph</Text>
            <Text variant="small">Small</Text>
          </Flex>
        </Card.Body>
      </Card.Root>
    </Tabs.Content>
    <Tabs.Content key="code">
      <Code
        code={`<script lang="ts">
    import { Text, Flex } from "sappsui";
<\/script>
<Flex class="gap-4" direction="column">
    <Text variant="h1">Heading 1</Text>
    <Text variant="h2">Heading 2</Text>
    <Text variant="h3">Heading 3</Text>
    <Text variant="h4">Heading 4</Text>
    <Text variant="h5">Heading 5</Text>
    <Text variant="h6">Heading 6</Text>
    <Text>Paragraph</Text>
    <Text variant="small">Small</Text>
</Flex>`}
      />
    </Tabs.Content>
  </Tabs.Root>
</Page>
