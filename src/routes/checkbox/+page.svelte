<script lang="ts">
  import { Card, CardBody, Flex, Page, Text, Checkbox } from "$lib/index.js";

  let CheckboxStates: any = {
    color: {
      primary: false,
      secondary: false,
      accent: false,
      muted: false,
      info: false,
      success: false,
      warning: false,
      danger: false,
    },
    size: {
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
    },
    radius: {
      full: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      none: false,
    },
    icons: {
      checkCircle: false,
      sunMoon: false,
      playPause: false,
      onOff: false,
    },
  };

  function handleCheckboxChange(section: string, key: string, value: any) {
    CheckboxStates[section][key] = value;
  }
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Checkbox</Text>
    <Text
      >A Checkbox switch component with various styles and customization
      options.</Text
    >
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Colors</Text>
    <Card>
      <CardBody class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Checkbox
          color="primary"
          checked={CheckboxStates.color.primary}
          onchange={(val) => handleCheckboxChange("color", "primary", val)}
        >
          Primary
        </Checkbox>

        <Checkbox
          color="secondary"
          checked={CheckboxStates.color.secondary}
          onchange={(val) => handleCheckboxChange("color", "secondary", val)}
        >
          Secondary
        </Checkbox>

        <Checkbox
          color="accent"
          checked={CheckboxStates.color.accent}
          onchange={(val) => handleCheckboxChange("color", "accent", val)}
        >
          Accent
        </Checkbox>
        <Checkbox
          color="muted"
          checked={CheckboxStates.color.muted}
          onchange={(val) => handleCheckboxChange("color", "muted", val)}
        >
          Muted
        </Checkbox>

        <Checkbox
          color="info"
          checked={CheckboxStates.color.info}
          onchange={(val) => handleCheckboxChange("color", "info", val)}
        >
          Info
        </Checkbox>

        <Checkbox
          color="success"
          checked={CheckboxStates.color.success}
          onchange={(val) => handleCheckboxChange("color", "success", val)}
        >
          Success
        </Checkbox>

        <Checkbox
          color="warning"
          checked={CheckboxStates.color.warning}
          onchange={(val) => handleCheckboxChange("color", "warning", val)}
        >
          Warning
        </Checkbox>

        <Checkbox
          color="danger"
          checked={CheckboxStates.color.danger}
          onchange={(val) => handleCheckboxChange("color", "danger", val)}
        >
          Danger
        </Checkbox>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Checkbox
          size="s-xs"
          checked={CheckboxStates.size.xs}
          onchange={(val) => handleCheckboxChange("size", "xs", val)}
        >
          Extra Small
        </Checkbox>

        <Checkbox
          size="s-sm"
          checked={CheckboxStates.size.sm}
          onchange={(val) => handleCheckboxChange("size", "sm", val)}
        >
          Small
        </Checkbox>

        <Checkbox
          size="s-md"
          checked={CheckboxStates.size.md}
          onchange={(val) => handleCheckboxChange("size", "md", val)}
        >
          Medium
        </Checkbox>

        <Checkbox
          size="s-lg"
          checked={CheckboxStates.size.lg}
          onchange={(val) => handleCheckboxChange("size", "lg", val)}
        >
          Large
        </Checkbox>

        <Checkbox
          size="s-xl"
          checked={CheckboxStates.size.xl}
          onchange={(val) => handleCheckboxChange("size", "xl", val)}
        >
          Extra Large
        </Checkbox>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Radius</Text>
    <Card>
      <CardBody class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Checkbox
          radius="r-full"
          checked={CheckboxStates.radius.full}
          onchange={(val) => handleCheckboxChange("radius", "full", val)}
        >
          Full
        </Checkbox>

        <Checkbox
          radius="r-sm"
          checked={CheckboxStates.radius.sm}
          onchange={(val) => handleCheckboxChange("radius", "sm", val)}
        >
          Small
        </Checkbox>

        <Checkbox
          radius="r-md"
          checked={CheckboxStates.radius.md}
          onchange={(val) => handleCheckboxChange("radius", "md", val)}
        >
          Medium
        </Checkbox>

        <Checkbox
          radius="r-lg"
          checked={CheckboxStates.radius.lg}
          onchange={(val) => handleCheckboxChange("radius", "lg", val)}
        >
          Large
        </Checkbox>

        <Checkbox
          radius="r-xl"
          checked={CheckboxStates.radius.xl}
          onchange={(val) => handleCheckboxChange("radius", "xl", val)}
        >
          Extra Large
        </Checkbox>

        <Checkbox
          radius="r-none"
          checked={CheckboxStates.radius.none}
          onchange={(val) => handleCheckboxChange("radius", "none", val)}
        >
          None
        </Checkbox>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Icons</Text>
    <Card>
      <CardBody class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Checkbox
          checked={CheckboxStates.icons.checkCircle}
          onchange={(val) => handleCheckboxChange("icons", "checkCircle", val)}
        >
          Check/Circle
        </Checkbox>

        <Checkbox
          checked={CheckboxStates.icons.sunMoon}
          onchange={(val) => handleCheckboxChange("icons", "sunMoon", val)}
        >
          Sun/Moon
        </Checkbox>

        <Checkbox
          checked={CheckboxStates.icons.playPause}
          onchange={(val) => handleCheckboxChange("icons", "playPause", val)}
        >
          Play/Pause
        </Checkbox>

        <Checkbox
          checked={CheckboxStates.icons.onOff}
          onchange={(val) => handleCheckboxChange("icons", "onOff", val)}
        >
          On/Off
        </Checkbox>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Combinations</Text>
    <Card>
      <CardBody class="flex flex-col gap-4">
        <Flex class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Checkbox color="primary" size="s-md" radius="r-full" checked={true}>
            Primary + Check
          </Checkbox>

          <Checkbox color="success" size="s-lg" radius="r-lg" checked={true}>
            Success + Check
          </Checkbox>

          <Checkbox color="warning" size="s-sm" radius="r-full" checked={true}>
            Warning + Small
          </Checkbox>

          <Checkbox color="danger" size="s-xl" radius="r-none" checked={true}>
            XL + No Radius
          </Checkbox>

          <Checkbox
            color="info"
            size="s-xs"
            radius="r-xl"
            disabled={true}
            checked={false}
          >
            Info + XS + Disabled
          </Checkbox>

          <Checkbox color="accent" size="s-md" radius="r-sm" checked={true}>
            Accent + Power Icons
          </Checkbox>

          <Checkbox color="secondary" size="s-lg" radius="r-md" checked={false}>
            Secondary + Off
          </Checkbox>

          <Checkbox
            color="muted"
            size="s-xl"
            radius="r-full"
            disabled={true}
            checked={true}
          >
            Muted + Disabled + On
          </Checkbox>
        </Flex>
      </CardBody>
    </Card>
  </Flex>
</Page>
