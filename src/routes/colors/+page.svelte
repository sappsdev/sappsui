<script lang="ts">
  import { Card, CardBody, Color, Flex, Page, Text } from "$lib/index.js";
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Colors</Text>
    <Text
      >A comprehensive color system for consistent and accessible design.</Text
    >
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Layout</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap">
        <div class="flex flex-col gap-2">
          <Color hex="oklch(98% 0 0)" class="w-24 h-24">
            <Text>background</Text>
            <Text class="text-sm text-muted-foreground">var(--color-background)</Text>
          </Color>
        </div>
        <div class="flex flex-col gap-2">
          <Color hex="oklch(25% 0 0)" class="w-24 h-24">
            <Text>foreground</Text>
            <Text class="text-sm text-muted-foreground">var(--color-foreground)</Text>
          </Color>
        </div>
        <div class="flex flex-col gap-2">
          <Color hex="oklch(85% 0 0)" class="w-24 h-24">
            <Text>divider</Text>
            <Text class="text-sm text-muted-foreground">var(--color-divider)</Text>
          </Color>
        </div>
        <div class="flex flex-col gap-2">
          <Color hex="oklch(56.3% 0.255 296.7)" class="w-24 h-24">
            <Text>focus</Text>
            <Text class="text-sm text-muted-foreground">var(--color-primary)</Text>
          </Color>
        </div>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Content</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap">
        <div class="flex flex-col gap-2">
          <Color hex="oklch(98% 0 0)" class="w-24 h-24">
            <Text>content1</Text>
            <Text class="text-sm text-muted-foreground">var(--color-background)</Text>
          </Color>
        </div>
        <div class="flex flex-col gap-2">
          <Color hex="oklch(95% 0 0)" class="w-24 h-24">
            <Text>content2</Text>
            <Text class="text-sm text-muted-foreground">var(--color-background-100)</Text>
          </Color>
        </div>
        <div class="flex flex-col gap-2">
          <Color hex="oklch(92% 0 0)" class="w-24 h-24">
            <Text>content3</Text>
            <Text class="text-sm text-muted-foreground">var(--color-background-200)</Text>
          </Color>
        </div>
        <div class="flex flex-col gap-2">
          <Color hex="oklch(85% 0 0)" class="w-24 h-24">
            <Text>content4</Text>
            <Text class="text-sm text-muted-foreground">var(--color-muted)</Text>
          </Color>
        </div>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Base</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap">
        <div class="flex flex-col gap-2">
          <Color hex="oklch(85% 0 0)" class="w-24 h-24">
            <Text>default</Text>
            <Text class="text-sm text-muted-foreground">var(--color-muted)</Text>
          </Color>
        </div>
        <div class="flex flex-col gap-2">
          <Color hex="oklch(56.3% 0.255 296.7)" class="w-24 h-24">
            <Text>primary</Text>
            <Text class="text-sm text-muted-foreground">var(--color-primary)</Text>
          </Color>
        </div>
        <div class="flex flex-col gap-2">
          <Color hex="oklch(55.3% 0.22 262.3)" class="w-24 h-24">
            <Text>secondary</Text>
            <Text class="text-sm text-muted-foreground">var(--color-secondary)</Text>
          </Color>
        </div>
        <div class="flex flex-col gap-2">
          <Color hex="oklch(65% 0.15 142.5)" class="w-24 h-24">
            <Text>success</Text>
            <Text class="text-sm text-muted-foreground">var(--color-success)</Text>
          </Color>
        </div>
        <div class="flex flex-col gap-2">
          <Color hex="oklch(75% 0.15 82.5)" class="w-24 h-24">
            <Text>warning</Text>
            <Text class="text-sm text-muted-foreground">var(--color-warning)</Text>
          </Color>
        </div>
        <div class="flex flex-col gap-2">
          <Color hex="oklch(65% 0.25 25.5)" class="w-24 h-24">
            <Text>danger</Text>
            <Text class="text-sm text-muted-foreground">var(--color-danger)</Text>
          </Color>
        </div>
      </CardBody>
    </Card>
  </Flex>
</Page>
