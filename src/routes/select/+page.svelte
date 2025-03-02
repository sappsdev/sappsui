<script lang="ts">
  import {
    Card,
    CardBody,
    Flex,
    Page,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    Text,
  } from "$lib/index.js";

  let value1 = $state();
  let value2 = $state();
  let value3 = $state();
  let value4 = $state();
  let value5 = $state();
  let value6 = $state();
  let value7 = $state();
  let value8 = $state();
  let value9 = $state();
  let value10 = $state();
  let value11 = $state();
  let value12 = $state();
  let value13 = $state();
  let value14 = $state();
  let value15 = $state();
  let value16 = $state();
  let value17 = $state();
  let value18 = $state();
  let value19 = $state();
  let value20 = $state();
  let value21 = $state();
  let value22 = $state();
  let value23 = $state();
  let value24 = $state();
  let value25 = $state();
  let value26 = $state();
  let value27 = $state();
  let value28 = $state();
  const selectItems: any = [
    { id: 1, label: "Item 1" },
    { id: 2, label: "Item 2" },
    { id: 3, label: "Item 3" },
    { id: 4, label: "Item 4" },
    { id: 5, label: "Item 5" },
    { id: 6, label: "Item 6" },
    { id: 7, label: "Item 7" },
    { id: 8, label: "Item 8" },
    { id: 9, label: "Item 9" },
    { id: 10, label: "Item 10" },
  ];
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
        <Select bind:value={value1}>
          <SelectTrigger label="Username">
            {selectItems.find((item: any) => item.id === value1)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Colors</Text>
    <Card>
      <CardBody
        class="flex-row gap-4 flex-wrap grid grid-cols-1 md:grid-cols-3"
      >
        <Select bind:value={value2}>
          <SelectTrigger label="Primary" color="primary">
            {selectItems.find((item: any) => item.id === value2)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value3}>
          <SelectTrigger label="Secondary" color="secondary">
            {selectItems.find((item: any) => item.id === value3)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value4}>
          <SelectTrigger label="Accent" color="accent">
            {selectItems.find((item: any) => item.id === value4)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value5}>
          <SelectTrigger label="Muted" color="muted">
            {selectItems.find((item: any) => item.id === value5)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value6}>
          <SelectTrigger label="Info" color="info">
            {selectItems.find((item: any) => item.id === value6)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value7}>
          <SelectTrigger label="Success" color="success">
            {selectItems.find((item: any) => item.id === value7)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value8}>
          <SelectTrigger label="Warning" color="warning">
            {selectItems.find((item: any) => item.id === value8)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value9}>
          <SelectTrigger label="Danger" color="danger">
            {selectItems.find((item: any) => item.id === value9)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Variants</Text>
    <Card>
      <CardBody class="gap-4 grid grid-cols-1 md:grid-cols-3">
        <Select bind:value={value10}>
          <SelectTrigger label="Flat" variant="flat">
            {selectItems.find((item: any) => item.id === value10)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value11}>
          <SelectTrigger label="Bordered" variant="bordered">
            {selectItems.find((item: any) => item.id === value11)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value12}>
          <SelectTrigger label="Faded" variant="faded">
            {selectItems.find((item: any) => item.id === value12)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value13}>
          <SelectTrigger label="Underlined" variant="underlined">
            {selectItems.find((item: any) => item.id === value13)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Label Placement</Text>
    <Card>
      <CardBody class="gap-4 grid grid-cols-1 md:grid-cols-3 items-end">
        <Select bind:value={value14}>
          <SelectTrigger label="Inside Label" labelPlacement="inside">
            {selectItems.find((item: any) => item.id === value14)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value15}>
          <SelectTrigger label="Outside Label" labelPlacement="outside">
            {selectItems.find((item: any) => item.id === value15)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value16}>
          <SelectTrigger label="Outside Left" labelPlacement="outside-left">
            {selectItems.find((item: any) => item.id === value16)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody class="items-end gap-4 grid grid-cols-1 md:grid-cols-3">
        <Select bind:value={value17}>
          <SelectTrigger size="s-sm" label="Small">
            {selectItems.find((item: any) => item.id === value17)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value18}>
          <SelectTrigger size="s-md" label="Medium">
            {selectItems.find((item: any) => item.id === value18)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value19}>
          <SelectTrigger size="s-lg" label="Large">
            {selectItems.find((item: any) => item.id === value19)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Radius</Text>
    <Card class="overflow-visible">
      <CardBody class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select bind:value={value20}>
          <SelectTrigger radius="r-none" label="None">
            {selectItems.find((item: any) => item.id === value20)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value21}>
          <SelectTrigger radius="r-sm" label="Small">
            {selectItems.find((item: any) => item.id === value21)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value22}>
          <SelectTrigger radius="r-md" label="Medium">
            {selectItems.find((item: any) => item.id === value22)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value23}>
          <SelectTrigger radius="r-lg" label="Large">
            {selectItems.find((item: any) => item.id === value23)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value24}>
          <SelectTrigger radius="r-xl" label="Extra Large">
            {selectItems.find((item: any) => item.id === value24)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value25}>
          <SelectTrigger radius="r-full" label="Full">
            {selectItems.find((item: any) => item.id === value25)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">States</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select bind:value={value26}>
          <SelectTrigger label="Disabled">
            {selectItems.find((item: any) => item.id === value26)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value27}>
          <SelectTrigger label="With Error" error="This field is required">
            {selectItems.find((item: any) => item.id === value27)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Select bind:value={value28}>
          <SelectTrigger label="With Info" info="Enter your username">
            {selectItems.find((item: any) => item.id === value28)?.label ||
              "Select"}
          </SelectTrigger>
          <SelectContent>
            {#each selectItems as item}
              <SelectItem value={item.id}>{item.label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
      </CardBody>
    </Card>
  </Flex>
</Page>
