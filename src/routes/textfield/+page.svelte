<script lang="ts">
  import { Card, CardBody, Flex, Page, Text, TextField } from "$lib/index.js";

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
    <Text variant="h2">TextField</Text>
    <Text
      >A versatile text input component with various styles and variants.</Text
    >
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Basic TextField</Text>
    <Card>
      <CardBody
        class="flex-row gap-4 flex-wrap grid grid-cols-1 md:grid-cols-3"
      >
        <TextField label="Username">
          <input bind:value={value1} placeholder="Placeholder" />
        </TextField>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Colors</Text>
    <Card>
      <CardBody
        class="flex-row gap-4 flex-wrap grid grid-cols-1 md:grid-cols-3"
      >
        <TextField color="primary" label="Primary">
          <input />
        </TextField>
        <TextField color="secondary" label="Secondary">
          <input />
        </TextField>
        <TextField color="accent" label="Accent">
          <input />
        </TextField>
        <TextField color="muted" label="Muted">
          <input />
        </TextField>
        <TextField color="info" label="Info">
          <input />
        </TextField>
        <TextField color="success" label="Success">
          <input />
        </TextField>
        <TextField color="warning" label="Warning">
          <input />
        </TextField>
        <TextField color="danger" label="Danger">
          <input />
        </TextField>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Variants</Text>
    <Card>
      <CardBody class="gap-4 grid grid-cols-1 md:grid-cols-3">
        <TextField variant="flat" label="Flat">
          <input />
        </TextField>
        <TextField variant="bordered" label="Bordered">
          <input />
        </TextField>
        <TextField variant="faded" label="Faded">
          <input />
        </TextField>
        <TextField variant="underlined" label="Underlined">
          <input />
        </TextField>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Label Placement</Text>
    <Card>
      <CardBody class="gap-4 grid grid-cols-1 md:grid-cols-3 items-end">
        <TextField labelPlacement="inside" label="Inside Label">
          <input />
        </TextField>
        <TextField labelPlacement="outside" label="Outside Label">
          <input />
        </TextField>
        <TextField labelPlacement="outside-left" label="Outside Left">
          <input />
        </TextField>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody class="items-end gap-4 grid grid-cols-1 md:grid-cols-3">
        <TextField size="s-sm" label="Small">
          <input />
        </TextField>
        <TextField size="s-md" label="Medium">
          <input />
        </TextField>
        <TextField size="s-lg" label="Large">
          <input />
        </TextField>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Radius</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TextField radius="r-none" label="None">
          <input />
        </TextField>
        <TextField radius="r-sm" label="Small">
          <input />
        </TextField>
        <TextField radius="r-md" label="Medium">
          <input />
        </TextField>
        <TextField radius="r-lg" label="Large">
          <input />
        </TextField>
        <TextField radius="r-xl" label="Extra Large">
          <input />
        </TextField>
        <TextField radius="r-full" label="Full">
          <input />
        </TextField>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">States</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TextField label="Disabled">
          <input disabled placeholder="Placeholder" />
        </TextField>
        <TextField label="With Error" error="This field is required">
          <input />
        </TextField>
        <TextField label="With Info" info="Enter your username">
          <input />
        </TextField>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Start & End Content</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TextField label="Email">
          <Text class="text-muted">@</Text>
          <input bind:value={value6} placeholder="you@example.com" />
        </TextField>

        <TextField label="Price">
          <Text class="text-muted">$</Text>
          <input bind:value={value7} placeholder="0.00" />
          <Text class="text-muted">USD</Text>
        </TextField>

        <TextField label="Website">
          <Text class="text-muted">https://</Text>
          <input bind:value={value8} placeholder="sappsdev.com" />
          <Text class="text-muted">.org</Text>
        </TextField>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Textarea Examples</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <TextField label="Basic Textarea" variant="bordered">
          <textarea
            bind:value={textareaValue1}
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </TextField>

        <TextField
          label="Description"
          variant="flat"
          color="primary"
          labelPlacement="outside"
        >
          <textarea
            bind:value={textareaValue2}
            rows="4"
            placeholder="Write a brief description"
          ></textarea>
        </TextField>

        <TextField
          label="Feedback"
          variant="underlined"
          color="accent"
          size="s-lg"
        >
          <textarea
            bind:value={textareaValue3}
            rows="4"
            placeholder="Share your feedback"
          ></textarea>
        </TextField>
      </CardBody>
    </Card>
  </Flex>
</Page>
