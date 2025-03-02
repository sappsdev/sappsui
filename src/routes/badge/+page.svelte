<script lang="ts">
  import { Badge, Card, CardBody, Flex, Page, Text } from "$lib/index.js";
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Badge</Text>
    <Text>A badge component with various styles and customization options.</Text>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Colors</Text>
    <Card>
      <CardBody class="flex-row gap-2 flex-wrap">
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="accent">Accent</Badge>
        <Badge color="muted">Muted</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="danger">Danger</Badge>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody class="flex-row items-center gap-2 flex-wrap">
        <Badge size="s-xs">Extra Small</Badge>
        <Badge size="s-sm">Small</Badge>
        <Badge size="s-md">Medium</Badge>
        <Badge size="s-lg">Large</Badge>
        <Badge size="s-xl">Extra Large</Badge>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Radius</Text>
    <Card>
      <CardBody class="flex-row gap-2 flex-wrap">
        <Badge radius="r-full">Full</Badge>
        <Badge radius="r-xs">Extra Small</Badge>
        <Badge radius="r-sm">Small</Badge>
        <Badge radius="r-md">Medium</Badge>
        <Badge radius="r-lg">Large</Badge>
        <Badge radius="r-xl">Extra Large</Badge>
        <Badge radius="r-none">None</Badge>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Combined Examples</Text>
    <Card>
      <CardBody class="flex flex-col gap-4">
        <Flex class="gap-2 flex-wrap">
          <Badge color="primary" size="s-lg" radius="r-full">New Feature</Badge>
          <Badge color="success" size="s-md" radius="r-sm">Completed</Badge>
          <Badge color="warning" size="s-sm" radius="r-lg">In Progress</Badge>
          <Badge color="danger" size="s-xs" radius="r-xl">Critical</Badge>
        </Flex>
      </CardBody>
    </Card>
  </Flex>
</Page>