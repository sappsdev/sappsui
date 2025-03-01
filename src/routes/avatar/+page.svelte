<script lang="ts">
  import {
    Avatar,
    Card,
    CardBody,
    Flex,
    Icons,
    Page,
    Text,
  } from "$lib/index.js";
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Avatar</Text>
    <Text>A versatile avatar component for user profile images and fallback content.</Text>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Basic Usage</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap items-center">
        <Avatar src="https://i.pravatar.cc/150?u=1" name="John Doe" />
        <Avatar name="Alice Smith" />
        <Avatar icon={Icons} />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Sizes</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap items-center">
        <Avatar src="https://i.pravatar.cc/150?u=2" size="sm" />
        <Avatar src="https://i.pravatar.cc/150?u=3" size="md" />
        <Avatar src="https://i.pravatar.cc/150?u=4" size="lg" />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Colors</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap items-center">
        <Avatar name="JD" color="default" />
        <Avatar name="AS" color="primary" />
        <Avatar name="RB" color="secondary" />
        <Avatar name="MC" color="success" />
        <Avatar name="TW" color="warning" />
        <Avatar name="EH" color="danger" />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Radius</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap items-center">
        <Avatar src="https://i.pravatar.cc/150?u=5" radius="r-none" />
        <Avatar src="https://i.pravatar.cc/150?u=6" radius="r-sm" />
        <Avatar src="https://i.pravatar.cc/150?u=7" radius="r-md" />
        <Avatar src="https://i.pravatar.cc/150?u=8" radius="r-lg" />
        <Avatar src="https://i.pravatar.cc/150?u=9" radius="r-xl" />
        <Avatar src="https://i.pravatar.cc/150?u=10" radius="r-full" />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Bordered</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap items-center">
        <Avatar src="https://i.pravatar.cc/150?u=11" isBordered />
        <Avatar name="BS" color="primary" isBordered />
        <Avatar src="https://i.pravatar.cc/150?u=12" isBordered isDisabled />
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Fallback States</Text>
    <Card>
      <CardBody class="flex-row gap-4 flex-wrap items-center">
        <Avatar src="invalid-image.jpg" name="John Doe" />
        <Avatar name="Alice Smith" showFallback />
        <Avatar icon={Icons} showFallback />
      </CardBody>
    </Card>
  </Flex>

  <!-- Component API Reference -->
  <Flex direction="column" class="gap-2 mt-4">
    <Text variant="h4">Component API Reference</Text>
    <Card>
      <CardBody>
        <Text variant="h5" class="mb-2">Props</Text>
        <ul class="list-disc pl-5 space-y-2">
          <li><code>src?: string</code> - URL of the avatar image</li>
          <li><code>name?: string</code> - Name to display as fallback or for accessibility</li>
          <li><code>color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger"</code> - Color variant of the avatar</li>
          <li><code>radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full"</code> - Border radius of the avatar</li>
          <li><code>size?: "sm" | "md" | "lg"</code> - Size of the avatar</li>
          <li><code>icon?: any</code> - Icon component to display as fallback</li>
          <li><code>fallback?: any</code> - Custom fallback content</li>
          <li><code>isBordered?: boolean</code> - Whether to show a border around the avatar</li>
          <li><code>isDisabled?: boolean</code> - Whether the avatar is in a disabled state</li>
          <li><code>isFocusable?: boolean</code> - Whether the avatar can receive focus</li>
          <li><code>showFallback?: boolean</code> - Force display of fallback content</li>
          <li><code>class?: string</code> - Additional CSS classes</li>
        </ul>
      </CardBody>
    </Card>
  </Flex>
</Page>