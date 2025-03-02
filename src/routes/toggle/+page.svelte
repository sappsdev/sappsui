<script lang="ts">
  import { Card, CardBody, Flex, Page, Text, Toggle } from "$lib/index.js";

  let toggleStates: any = {
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

  function handleToggleChange(section: string, key: string, value: any) {
    toggleStates[section][key] = value;
  }
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Toggle</Text>
    <Text
      >A toggle switch component with various styles and customization options.</Text
    >
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Colors</Text>
    <Card>
      <CardBody class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Toggle
          color="primary"
          checked={toggleStates.color.primary}
          onchange={(val) => handleToggleChange("color", "primary", val)}
        >
          Primary
        </Toggle>

        <Toggle
          color="secondary"
          checked={toggleStates.color.secondary}
          onchange={(val) => handleToggleChange("color", "secondary", val)}
        >
          Secondary
        </Toggle>

        <Toggle
          color="accent"
          checked={toggleStates.color.accent}
          onchange={(val) => handleToggleChange("color", "accent", val)}
        >
          Accent
        </Toggle>
        <Toggle
          color="muted"
          checked={toggleStates.color.muted}
          onchange={(val) => handleToggleChange("color", "muted", val)}
        >
          Muted
        </Toggle>

        <Toggle
          color="info"
          checked={toggleStates.color.info}
          onchange={(val) => handleToggleChange("color", "info", val)}
        >
          Info
        </Toggle>

        <Toggle
          color="success"
          checked={toggleStates.color.success}
          onchange={(val) => handleToggleChange("color", "success", val)}
        >
          Success
        </Toggle>

        <Toggle
          color="warning"
          checked={toggleStates.color.warning}
          onchange={(val) => handleToggleChange("color", "warning", val)}
        >
          Warning
        </Toggle>

        <Toggle
          color="danger"
          checked={toggleStates.color.danger}
          onchange={(val) => handleToggleChange("color", "danger", val)}
        >
          Danger
        </Toggle>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Toggle
          size="s-xs"
          checked={toggleStates.size.xs}
          onchange={(val) => handleToggleChange("size", "xs", val)}
        >
          Extra Small
        </Toggle>

        <Toggle
          size="s-sm"
          checked={toggleStates.size.sm}
          onchange={(val) => handleToggleChange("size", "sm", val)}
        >
          Small
        </Toggle>

        <Toggle
          size="s-md"
          checked={toggleStates.size.md}
          onchange={(val) => handleToggleChange("size", "md", val)}
        >
          Medium
        </Toggle>

        <Toggle
          size="s-lg"
          checked={toggleStates.size.lg}
          onchange={(val) => handleToggleChange("size", "lg", val)}
        >
          Large
        </Toggle>

        <Toggle
          size="s-xl"
          checked={toggleStates.size.xl}
          onchange={(val) => handleToggleChange("size", "xl", val)}
        >
          Extra Large
        </Toggle>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Radius</Text>
    <Card>
      <CardBody class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Toggle
          radius="r-full"
          checked={toggleStates.radius.full}
          onchange={(val) => handleToggleChange("radius", "full", val)}
        >
          Full
        </Toggle>

        <Toggle
          radius="r-sm"
          checked={toggleStates.radius.sm}
          onchange={(val) => handleToggleChange("radius", "sm", val)}
        >
          Small
        </Toggle>

        <Toggle
          radius="r-md"
          checked={toggleStates.radius.md}
          onchange={(val) => handleToggleChange("radius", "md", val)}
        >
          Medium
        </Toggle>

        <Toggle
          radius="r-lg"
          checked={toggleStates.radius.lg}
          onchange={(val) => handleToggleChange("radius", "lg", val)}
        >
          Large
        </Toggle>

        <Toggle
          radius="r-xl"
          checked={toggleStates.radius.xl}
          onchange={(val) => handleToggleChange("radius", "xl", val)}
        >
          Extra Large
        </Toggle>

        <Toggle
          radius="r-none"
          checked={toggleStates.radius.none}
          onchange={(val) => handleToggleChange("radius", "none", val)}
        >
          None
        </Toggle>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Icons</Text>
    <Card>
      <CardBody class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Toggle
          iconOn="material-symbols:check-circle"
          iconOff="material-symbols:circle-outline"
          checked={toggleStates.icons.checkCircle}
          onchange={(val) => handleToggleChange("icons", "checkCircle", val)}
        >
          Check/Circle
        </Toggle>

        <Toggle
          iconOn="ph:sun-bold"
          iconOff="ph:moon-bold"
          checked={toggleStates.icons.sunMoon}
          onchange={(val) => handleToggleChange("icons", "sunMoon", val)}
        >
          Sun/Moon
        </Toggle>

        <Toggle
          iconOn="material-symbols:play-arrow"
          iconOff="material-symbols:pause"
          checked={toggleStates.icons.playPause}
          onchange={(val) => handleToggleChange("icons", "playPause", val)}
        >
          Play/Pause
        </Toggle>

        <Toggle
          iconOn="mdi:power"
          iconOff="mdi:power-off"
          checked={toggleStates.icons.onOff}
          onchange={(val) => handleToggleChange("icons", "onOff", val)}
        >
          On/Off
        </Toggle>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Combinations</Text>
    <Card>
      <CardBody class="flex flex-col gap-4">
        <Flex class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Toggle
            color="primary"
            size="s-md"
            radius="r-full"
            iconOn="material-symbols:check"
            iconOff=""
            checked={true}
          >
            Primary + Check
          </Toggle>

          <Toggle
            color="success"
            size="s-lg"
            radius="r-lg"
            iconOn="material-symbols:check"
            iconOff="material-symbols:close"
            checked={true}
          >
            Success + Check
          </Toggle>

          <Toggle
            color="warning"
            size="s-sm"
            radius="r-full"
            iconOn="ph:sun-bold"
            iconOff="ph:moon-bold"
            checked={true}
          >
            Warning + Small
          </Toggle>

          <Toggle color="danger" size="s-xl" radius="r-none" checked={true}>
            XL + No Radius
          </Toggle>

          <Toggle
            color="info"
            size="s-xs"
            radius="r-xl"
            disabled={true}
            checked={false}
          >
            Info + XS + Disabled
          </Toggle>

          <Toggle
            color="accent"
            size="s-md"
            radius="r-sm"
            iconOn="mdi:power"
            iconOff="mdi:power-off"
            checked={true}
          >
            Accent + Power Icons
          </Toggle>

          <Toggle
            color="secondary"
            size="s-lg"
            radius="r-md"
            iconOn="material-symbols:check-circle"
            iconOff="material-symbols:circle-outline"
            checked={false}
          >
            Secondary + Off
          </Toggle>

          <Toggle
            color="muted"
            size="s-xl"
            radius="r-full"
            disabled={true}
            checked={true}
          >
            Muted + Disabled + On
          </Toggle>
        </Flex>
      </CardBody>
    </Card>
  </Flex>
</Page>
