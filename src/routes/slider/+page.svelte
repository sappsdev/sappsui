<script lang="ts">
  import { Slider, Card, CardBody, Flex, Page, Text } from "$lib/index.js";
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Slider</Text>
    <Text>A slider component for selecting values within a range with various styles and features.</Text>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Single Value Sliders</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Slider label="Default Slider" value={50} />
        <Slider label="Custom Range" min={20} max={80} value={50} />
        <Slider label="Custom Step" step={10} showMarks value={40} />
        <Slider label="Disabled" disabled value={30} />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Range Sliders</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Slider label="Default Range" minValue={25} maxValue={75} />
        <Slider label="Custom Range" min={20} max={80} minValue={30} maxValue={70} />
        <Slider label="Custom Step" step={10} showMarks minValue={20} maxValue={80} />
        <Slider label="Disabled" disabled minValue={30} maxValue={60} />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Colors</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Slider color="primary" label="Primary" minValue={30} maxValue={70} />
        <Slider color="secondary" label="Secondary" minValue={20} maxValue={60} />
        <Slider color="foreground" label="Foreground" minValue={40} maxValue={80} />
        <Slider color="success" label="Success" minValue={10} maxValue={40} />
        <Slider color="warning" label="Warning" minValue={30} maxValue={70} />
        <Slider color="danger" label="Danger" minValue={20} maxValue={60} />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Slider size="sm" label="Small" minValue={25} maxValue={50} />
        <Slider size="md" label="Medium" minValue={30} maxValue={70} />
        <Slider size="lg" label="Large" minValue={40} maxValue={75} />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Radius</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Slider radius="none" label="None" minValue={20} maxValue={50} />
        <Slider radius="sm" label="Small" minValue={30} maxValue={60} />
        <Slider radius="md" label="Medium" minValue={40} maxValue={70} />
        <Slider radius="lg" label="Large" minValue={50} maxValue={80} />
        <Slider radius="full" label="Full" minValue={60} maxValue={90} />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Display Options</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Slider label="With Value Display" minValue={35} maxValue={65} />
        <Slider label="Hide Value" hideValue minValue={25} maxValue={55} />
        <Slider label="Hide Thumb" hideThumb minValue={45} maxValue={75} />
        <Slider label="Show Marks" showMarks step={10} minValue={30} maxValue={70} />
        <Slider label="No Label" hideValue minValue={40} maxValue={80} />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Combined Features</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Slider color="success" showMarks step={20} label="Success with Marks" minValue={20} maxValue={80} />
        <Slider color="warning" size="lg" radius="sm" label="Warning Large Small-Radius" minValue={30} maxValue={70} />
        <Slider color="danger" hideThumb showMarks step={25} label="Danger with Marks No Thumb" minValue={25} maxValue={75} />
      </CardBody>
    </Card>
  </Flex>
</Page>