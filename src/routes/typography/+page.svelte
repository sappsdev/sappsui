<script lang="ts">
  import { Card, CardBody, Flex, Page, Text } from "$lib/index.js";
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Typography</Text>
    <Text>A versatile text component with various heading styles and sizes.</Text>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Headings</Text>
    <Card>
      <CardBody class="flex flex-col gap-4">
        <Text variant="h1">Heading 1</Text>
        <Text variant="h2">Heading 2</Text>
        <Text variant="h3">Heading 3</Text>
        <Text variant="h4">Heading 4</Text>
        <Text variant="h5">Heading 5</Text>
        <Text variant="h6">Heading 6</Text>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Paragraph</Text>
    <Card>
      <CardBody class="flex flex-col gap-4">
        <Text>
          This is a default paragraph text. The quick brown fox jumps over the lazy
          dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Small Text</Text>
    <Card>
      <CardBody class="flex flex-col gap-4">
        <Text variant="small">
          This is small text, useful for captions, footnotes, or supplementary
          information. The quick brown fox jumps over the lazy dog.
        </Text>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Mixed Styles</Text>
    <Card>
      <CardBody class="flex flex-col gap-4">
        <Text variant="h3">Article Title</Text>
        <Text>
          This is a regular paragraph with mixed content. The article discusses
          important topics and provides valuable insights.
        </Text>
        <Text variant="small" class="text-muted-foreground">
          Published on September 15, 2023
        </Text>
      </CardBody>
    </Card>
  </Flex>
</Page>