<script lang="ts">
  import { Card, CardBody, Flex, Image, Page, Text } from "$lib/index.js";
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Image</Text>
    <Text>A versatile image component with various styles and effects.</Text>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Usage</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap">
        <Image
          class="w-[300px] h-[200px]"
          src="https://i.pravatar.cc/300"
          alt="Colorful portrait with headphones"
        />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Blurred</Text>
    <Text
      >You can use the `isBlurred` prop to duplicate the image and blur it to
      create a blurred effect.</Text
    >
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap">
        <Image
          class="w-[300px] h-[200px]"
          src="https://images.unsplash.com/photo-1502082553048-f009c37129b9"
          alt="Sunset landscape"
          isBlurred
        />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Zoomed</Text>
    <Text
      >You can use the `isZoomed` prop make the image zoomed when hovered.</Text
    >
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap">
        <Image
          class="w-[300px] h-[200px]"
          src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3"
          alt="Orange slices on blue background"
          isZoomed
        />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Radius</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Image
          class="w-[300px] h-[200px]"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
          alt="Colorful portrait with headphones"
          radius="r-none"
        />
        <Image
          class="w-[300px] h-[200px]"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
          alt="Colorful portrait with headphones"
          radius="r-sm"
        />
        <Image
          class="w-[300px] h-[200px]"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
          alt="Colorful portrait with headphones"
          radius="r-md"
        />
        <Image
          class="w-[300px] h-[200px]"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
          alt="Colorful portrait with headphones"
          radius="r-lg"
        />
        <Image
          class="w-[300px] h-[200px]"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
          alt="Colorful portrait with headphones"
          radius="r-full"
        />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Shadow</Text>
    <Card>
      <CardBody class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Image
          class="w-[300px] h-[200px]"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
          alt="Colorful portrait with headphones"
          shadow="sh-none"
        />
        <Image
          class="w-[300px] h-[200px]"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
          alt="Colorful portrait with headphones"
          shadow="sh-sm"
        />
        <Image
          class="w-[300px] h-[200px]"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
          alt="Colorful portrait with headphones"
          shadow="sh-md"
        />
        <Image
          class="w-[300px] h-[200px]"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
          alt="Colorful portrait with headphones"
          shadow="sh-lg"
        />
        <Image
          class="w-[300px] h-[200px]"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
          alt="Colorful portrait with headphones"
          shadow="sh-xl"
        />
      </CardBody>
    </Card>
  </Flex>
</Page>
