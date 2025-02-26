<script lang="ts">
  import { Button, Card, CardBody, Flex, Page, Text } from "$lib/index.js";
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Button</Text>
    <Text>A button component with various styles and variants.</Text>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Colors</Text>
    <Card>
      <CardBody class="flex-row gap-2 flex-wrap">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="accent">Accent</Button>
        <Button color="muted">Muted</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Variants</Text>
    <Card>
      <CardBody class="flex-row gap-2 flex-wrap">
        <Button variant="solid">Solid</Button>
        <Button variant="faded">Faded</Button>
        <Button variant="bordered">Bordered</Button>
        <Button variant="light">Light</Button>
        <Button variant="flat">Flat</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="shadow">Shadow</Button>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Radius</Text>
    <Card>
      <CardBody class="flex-row gap-2 flex-wrap">
        <Button radius="r-full">Full</Button>
        <Button radius="r-sm">Small</Button>
        <Button radius="r-md">Medium</Button>
        <Button radius="r-lg">Large</Button>
        <Button radius="r-xl">Extra Large</Button>
        <Button radius="r-none">None</Button>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody class="flex-row items-center gap-2 flex-wrap">
        <Button size="s-xs">Extra Small</Button>
        <Button size="s-sm">Small</Button>
        <Button size="s-md">Medium</Button>
        <Button size="s-lg">Large</Button>
        <Button size="s-xl">Extra Large</Button>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Colored Variants</Text>
    <Card>
      <CardBody class="flex flex-col gap-4 flex-wrap">
        <Flex class="gap-2 flex-wrap">
          <Button color="primary" variant="solid">Solid</Button>
          <Button color="primary" variant="faded">Faded</Button>
          <Button color="primary" variant="bordered">Bordered</Button>
          <Button color="primary" variant="light">Light</Button>
          <Button color="primary" variant="flat">Flat</Button>
          <Button color="primary" variant="ghost">Ghost</Button>
          <Button color="primary" variant="shadow">Shadow</Button>
        </Flex>
        <Flex class="gap-2 flex-wrap">
          <Button color="secondary" variant="solid">Solid</Button>
          <Button color="secondary" variant="faded">Faded</Button>
          <Button color="secondary" variant="bordered">Bordered</Button>
          <Button color="secondary" variant="light">Light</Button>
          <Button color="secondary" variant="flat">Flat</Button>
          <Button color="secondary" variant="ghost">Ghost</Button>
          <Button color="secondary" variant="shadow">Shadow</Button>
        </Flex>
      </CardBody>
    </Card>
  </Flex>
</Page>
