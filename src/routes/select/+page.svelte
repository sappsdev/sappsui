<script lang="ts">
  import { Card, CardBody, Flex, Page, Select, Text } from "$lib/index.js";

  let value1 = $state("");
  let value6 = $state("");
  let value7 = $state("");
  let value8 = $state("");
  let textareaValue1 = $state("");
  let textareaValue2 = $state("");
  let textareaValue3 = $state("");
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Select</Text>
    <Text>A versatile select component with various styles and variants.</Text>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Basic Select</Text>
    <Card>
      <CardBody
        class="flex-row gap-4 flex-wrap grid grid-cols-1 md:grid-cols-3"
      >
        <Select label="Username"></Select>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Colors</Text>
    <Card>
      <CardBody
        class="flex-row gap-4 flex-wrap grid grid-cols-1 md:grid-cols-3"
      >
        <Select color="primary" label="Primary"></Select>
        <Select color="secondary" label="Secondary"></Select>
        <Select color="accent" label="Accent"></Select>
        <Select color="muted" label="Muted"></Select>
        <Select color="info" label="Info"></Select>
        <Select color="success" label="Success"></Select>
        <Select color="warning" label="Warning"></Select>
        <Select color="danger" label="Danger"></Select>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Variants</Text>
    <Card>
      <CardBody class="gap-4 grid grid-cols-1 md:grid-cols-3">
        <Select variant="flat" label="Flat"></Select>
        <Select variant="bordered" label="Bordered"></Select>
        <Select variant="faded" label="Faded"></Select>
        <Select variant="underlined" label="Underlined"></Select>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Label Placement</Text>
    <Card>
      <CardBody class="gap-4 grid grid-cols-1 md:grid-cols-3 items-end">
        <Select labelPlacement="inside" label="Inside Label"></Select>
        <Select labelPlacement="outside" label="Outside Label"></Select>
        <Select labelPlacement="outside-left" label="Outside Left"></Select>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody class="items-end gap-4 grid grid-cols-1 md:grid-cols-3">
        <Select size="s-sm" label="Small"></Select>
        <Select size="s-md" label="Medium"></Select>
        <Select size="s-lg" label="Large"></Select>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Radius</Text>
    <Card class="overflow-visible">
      <CardBody class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select radius="r-none" label="None"></Select>
        <Select radius="r-sm" label="Small"></Select>
        <Select radius="r-md" label="Medium"></Select>
        <Select radius="r-lg" label="Large"></Select>
        <Select radius="r-xl" label="Extra Large"></Select>
        <Select radius="r-full" label="Full"></Select>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">States</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select label="Disabled"></Select>
        <Select label="With Error" error="This field is required"></Select>
        <Select label="With Info" info="Enter your username"></Select>
      </CardBody>
    </Card>
  </Flex>
</Page>
