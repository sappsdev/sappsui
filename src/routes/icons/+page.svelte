<script lang="ts">
  import { Card, CardBody, Flex, Icons, Page, Text } from "$lib/index.js";
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Icons</Text>
    <Text>A versatile icon component that supports various Iconify icon sets.</Text>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Basic Icons</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap">
        <Icons icon="solar:home-bold" class="text-2xl" />
        <Icons icon="solar:user-bold" class="text-2xl" />
        <Icons icon="solar:settings-bold" class="text-2xl" />
        <Icons icon="solar:bell-bold" class="text-2xl" />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Different Icon Sets</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap">
        <Icons icon="material-symbols:home" class="text-2xl" />
        <Icons icon="ph:user-bold" class="text-2xl" />
        <Icons icon="bi:gear-fill" class="text-2xl" />
        <Icons icon="lucide:bell" class="text-2xl" />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody class="flex-row gap-4 items-center flex-wrap">
        <Icons icon="solar:star-bold" class="text-sm" />
        <Icons icon="solar:star-bold" class="text-base" />
        <Icons icon="solar:star-bold" class="text-lg" />
        <Icons icon="solar:star-bold" class="text-xl" />
        <Icons icon="solar:star-bold" class="text-2xl" />
        <Icons icon="solar:star-bold" class="text-3xl" />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Colors</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap">
        <Icons icon="solar:heart-bold" class="text-2xl text-primary" />
        <Icons icon="solar:heart-bold" class="text-2xl text-secondary" />
        <Icons icon="solar:heart-bold" class="text-2xl text-accent" />
        <Icons icon="solar:heart-bold" class="text-2xl text-success" />
        <Icons icon="solar:heart-bold" class="text-2xl text-info" />
        <Icons icon="solar:heart-bold" class="text-2xl text-warning" />
        <Icons icon="solar:heart-bold" class="text-2xl text-danger" />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Custom Colors</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap">
        <Icons icon="solar:star-bold" class="text-2xl text-blue-500" />
        <Icons icon="solar:star-bold" class="text-2xl text-green-500" />
        <Icons icon="solar:star-bold" class="text-2xl text-yellow-500" />
        <Icons icon="solar:star-bold" class="text-2xl text-red-500" />
        <Icons icon="solar:star-bold" class="text-2xl text-purple-500" />
        <Icons icon="solar:star-bold" class="text-2xl text-pink-500" />
      </CardBody>
    </Card>
  </Flex>
</Page>