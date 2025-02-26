<script lang="ts">
  import {
    Card,
    CardBody,
    Flex,
    Grid,
    Page,
    Radio,
    RadioGroup,
    Text,
  } from "$lib/index.js";

  let basicValue = $state("1");
  let colorValue = $state("primary");
  let sizeValue = $state("md");
  let verticalValue = $state("1");
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Radio</Text>
    <Text>
      A versatile radio component that allows users to select a single option
      from a set of choices.
    </Text>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Basic Usage</Text>
    <Card>
      <CardBody class="flex-col gap-2">
        <Text>Selected value: {basicValue}</Text>
        <RadioGroup bind:value={basicValue}>
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
          <Radio value="3">Option 3</Radio>
        </RadioGroup>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Colors</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Text>Selected color: {colorValue}</Text>
        <Grid class="gap-8 grid-cols-1 md:grid-cols-2">
          <RadioGroup color="primary" bind:value={colorValue}>
            <Radio value="primary">Primary</Radio>
            <Radio value="primary2">Primary 2</Radio>
          </RadioGroup>

          <RadioGroup color="secondary" bind:value={colorValue}>
            <Radio value="secondary">Secondary</Radio>
            <Radio value="secondary2">Secondary 2</Radio>
          </RadioGroup>

          <RadioGroup color="accent" bind:value={colorValue}>
            <Radio value="accent">Accent</Radio>
            <Radio value="accent2">Accent 2</Radio>
          </RadioGroup>

          <RadioGroup color="success" bind:value={colorValue}>
            <Radio value="success">Success</Radio>
            <Radio value="success2">Success 2</Radio>
          </RadioGroup>
        </Grid>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Text>Selected size: {sizeValue}</Text>
        <Grid class="gap-8 items-center grid-cols-1 md:grid-cols-2">
          <RadioGroup size="s-sm" bind:value={sizeValue}>
            <Radio value="sm">Small</Radio>
            <Radio value="sm2">Small 2</Radio>
          </RadioGroup>

          <RadioGroup size="s-md" bind:value={sizeValue}>
            <Radio value="md">Medium</Radio>
            <Radio value="md2">Medium 2</Radio>
          </RadioGroup>

          <RadioGroup size="s-lg" bind:value={sizeValue}>
            <Radio value="lg">Large</Radio>
            <Radio value="lg2">Large 2</Radio>
          </RadioGroup>
        </Grid>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Vertical Layout</Text>
    <Card>
      <CardBody class="flex-col gap-4">
        <Text>Selected value: {verticalValue}</Text>
        <RadioGroup vertical bind:value={verticalValue}>
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
          <Radio value="3">Option 3</Radio>
          <Radio value="4">Option 4</Radio>
        </RadioGroup>
      </CardBody>
    </Card>
  </Flex>
</Page>
