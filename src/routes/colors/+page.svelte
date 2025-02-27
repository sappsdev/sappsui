<script lang="ts">
  import { Card, CardBody, Color, Flex, Page, Text } from "$lib/index.js";

  let light = {
    primary: {
      default: "#8a3af5",
      foreground: "#f9f8fb",
      oklch: "oklch(56.3% 0.255 296.7)",
      oklchForeground: "oklch(98% 0.005 296.7)"
    },
    secondary: {
      default: "#2165f0",
      foreground: "#f7f8fc",
      oklch: "oklch(55.3% 0.22 262.3)",
      oklchForeground: "oklch(98% 0.005 262.3)"
    },
    accent: {
      default: "#00b7be",
      foreground: "#f5f9fa",
      oklch: "oklch(70% 0.15 198.5)",
      oklchForeground: "oklch(98% 0.005 198.5)"
    },
    muted: {
      default: "#cecece",
      foreground: "#555555",
      oklch: "oklch(85% 0 0)",
      oklchForeground: "oklch(45% 0 0)"
    },
    success: {
      default: "#52a54c",
      foreground: "#f7f9f6",
      oklch: "oklch(65% 0.15 142.5",
      oklchForeground: "oklch(98% 0.005 142.5)"
    },
    info: {
      default: "#009dd9",
      foreground: "#f5f9fb",
      oklch: "oklch(65% 0.15 230.5)",
      oklchForeground: "oklch(98% 0.005 230.5)"
    },
    warning: {
      default: "#dca317",
      foreground: "#faf8f5",
      oklch: "oklch(75% 0.15 82.5)",
      oklchForeground: "oklch(98% 0.005 82.5)"
    },
    danger: {
      default: "#ff2333",
      foreground: "#fcf7f7",
      oklch: "oklch(65% 0.25 25.5)",
      oklchForeground: "oklch(98% 0.005 25.5)"
    },
    "base-100": {
      default: "#f8f8f8",
      foreground: "#222222",
      oklch: "oklch(98% 0 0)",
      oklchForeground: "oklch(25% 0 0)"
    },
    "base-200": {
      default: "#eeeeee",
      foreground: "#0b0b0b",
      oklch: "oklch(95% 0 0)",
      oklchForeground: "oklch(15% 0 0)"
    },
    "base-300": {
      default: "#e4e4e4",
      foreground: "#030303",
      oklch: "oklch(92% 0 0)",
      oklchForeground: "oklch(10% 0 0)"
    },
    border: {
      default: "#cecece",
      foreground: "#0b0b0b",
      oklch: "oklch(85% 0 0)",
      oklchForeground: "oklch(15% 0 0)"
    }
  }

  let dark = {
    primary: {
      default: "#8a3af5",
      foreground: "#f9f8fb",
      oklch: "oklch(56.3% 0.255 296.7)",
      oklchForeground: "oklch(98% 0.005 296.7)"
    },
    secondary: {
      default: "#2165f0",
      foreground: "#f7f8fc",
      oklch: "oklch(55.3% 0.22 262.3)",
      oklchForeground: "oklch(98% 0.005 262.3)"
    },
    accent: {
      default: "#00b7be",
      foreground: "#f5f9fa",
      oklch: "oklch(70% 0.15 198.5)",
      oklchForeground: "oklch(98% 0.005 198.5)"
    },
    muted: {
      default: "#2e2e2e",
      foreground: "#8f8f8f",
      oklch: "oklch(30% 0 0)",
      oklchForeground: "oklch(65% 0 0)"
    },
    success: {
      default: "#52a54c",
      foreground: "#f7f9f6",
      oklch: "oklch(65% 0.15 142.5",
      oklchForeground: "oklch(98% 0.005 142.5)"
    },
    info: {
      default: "#009dd9",
      foreground: "#f5f9fb",
      oklch: "oklch(65% 0.15 230.5)",
      oklchForeground: "oklch(98% 0.005 230.5)"
    },
    warning: {
      default: "#dca317",
      foreground: "#faf8f5",
      oklch: "oklch(75% 0.15 82.5)",
      oklchForeground: "oklch(98% 0.005 82.5)"
    },
    danger: {
      default: "#ff2333",
      foreground: "#fcf7f7",
      oklch: "oklch(65% 0.25 25.5)",
      oklchForeground: "oklch(98% 0.005 25.5)"
    },
    "base-100": {
      default: "#0b0b0b",
      foreground: "#eeeeee",
      oklch: "oklch(15% 0 0)",
      oklchForeground: "oklch(95% 0 0)"
    },
    "base-200": {
      default: "#161616",
      foreground: "#cecece",
      oklch: "oklch(20% 0 0)",
      oklchForeground: "oklch(85% 0 0)"
    },
    "base-300": {
      default: "#222222",
      foreground: "#aeaeae",
      oklch: "oklch(25% 0 0)",
      oklchForeground: "oklch(75% 0 0)"
    },
    border: {
      default: "#2e2e2e",
      foreground: "#8f8f8f",
      oklch: "oklch(30% 0 0)",
      oklchForeground: "oklch(65% 0 0)"
    }
  }
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Colors</Text>
    <Text
      >A comprehensive color system for consistent and accessible design.</Text
    >
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Light</Text>
    <Card>
      <CardBody class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {#each Object.entries(light) as [key, value]}
          <Color hex={value.default} label={key} hexForeground={value.foreground}  class="w-24 h-24" />
        {/each}
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Dark</Text>
    <Card class="dark">
      <CardBody class="grid grid-cols-2 md:grid-cols-4 gap-4 dark">
        {#each Object.entries(dark) as [key, value]}
          <Color hex={value.default} label={key} hexForeground={value.foreground}  class="w-24 h-24" />
        {/each}
      </CardBody>
    </Card>
  </Flex>
</Page>
