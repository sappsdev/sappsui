<script lang="ts">
  import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Icons,
    Image,
    Page,
    Text,
  } from "$lib/index.js";
</script>

<Page class="p-4 gap-4 pb-16">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Card</Text>
    <Text>
      A versatile card component that can be used to display content in a
      contained way.
    </Text>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Basic Card</Text>
    <Card>
      <CardBody class="center">
        <Card class="max-w-md">
          <CardBody>
            Discover the features and benefits that our service offers. Enhance
            your experience with our user-friendly platform designed to meet all
            your needs.
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">With Header and Footer</Text>
    <Card>
      <CardBody class="center">
        <Card class="max-w-md">
          <CardHeader>Innovative Solution</CardHeader>
          <CardBody>
            Discover the features and benefits that our service offers. Enhance
            your experience with our user-friendly platform designed to meet all
            your needs.
          </CardBody>
          <CardFooter>Learn more about our features.</CardFooter>
        </Card>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Feature Card with Icon</Text>
    <Card>
      <CardBody class="center">
        <Card class="max-w-md">
          <CardHeader class="gap-2">
            <Icons icon="solar:star-bold" class="text-2xl text-primary" />
            <Text variant="h5">Premium Features</Text>
          </CardHeader>
          <CardBody>
            Access exclusive premium features designed to enhance your
            productivity and streamline your workflow.
          </CardBody>
          <CardFooter>
            <Button variant="light" size="s-sm">
              <Icons icon="solar:arrow-right-bold" />
              <Text>Learn More</Text>
            </Button>
          </CardFooter>
        </Card>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Profile Card</Text>
    <Card>
      <CardBody class="center">
        <Card class="max-w-md">
          <CardBody class="items-center text-center gap-4">
            <Image
              src="https://i.pravatar.cc/150"
              alt="Profile"
              radius="r-full"
            />
            <Flex direction="column" class="space-y-1">
              <Text variant="h5">Sarah Johnson</Text>
              <Text variant="small" class="text-default-500"
                >Product Designer</Text
              >
            </Flex>
            <Text
              >Creating beautiful and intuitive user experiences through
              thoughtful design solutions.</Text
            >
            <Flex class="gap-2">
              <Button variant="bordered" size="s-sm" radius="r-full">
                <Icons icon="solar:user-plus-bold" />
                <Text>Follow</Text>
              </Button>
              <Button variant="light" size="s-sm" radius="r-full">
                <Icons icon="solar:chat-round-dots-bold" />
                <Text>Message</Text>
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Music Player Card</Text>
    <Card>
      <CardBody class="center">
        <Card class="max-w-md" radius="r-xl">
          <CardBody class="items-center text-center gap-4">
            <Image
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
              alt="Album cover"
              class="w-full aspect-square"
              radius="r-lg"
            />
            <Flex direction="column" class="space-y-1 w-full">
              <Text variant="h5">Midnight Serenade</Text>
              <Text variant="small" class="text-default-500"
                >Electronic Dreams</Text
              >
            </Flex>
            <Flex class="gap-4 items-center">
              <Button variant="light" size="s-lg" radius="r-full" class="p-3">
                <Icons
                  icon="solar:double-alt-arrow-left-bold"
                  class="text-xl"
                />
              </Button>
              <Button variant="solid" size="s-lg" radius="r-full" class="p-3">
                <Icons icon="solar:play-bold" class="text-xl" />
              </Button>
              <Button variant="light" size="s-lg" radius="r-full" class="p-3">
                <Icons
                  icon="solar:double-alt-arrow-right-bold"
                  class="text-xl"
                />
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Cover Image Cards</Text>
    <Card>
      <CardBody class="center">
        <Flex class="gap-4 flex-wrap">
          <Card class="w-full lg:w-[300px] h-[200px] relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&h=400&fit=crop"
              alt="Event"
              class="w-full h-full object-cover absolute inset-0"
            />
            <Flex
              direction="column"
              class="relative z-10 p-4 h-full justify-end bg-gradient-to-t from-black/60 to-transparent"
            >
              <Text variant="h5" class="text-white">WHAT TO WATCH</Text>
              <Text class="text-white/90">Stream the Acme event</Text>
            </Flex>
          </Card>

          <Card class="w-full lg:w-[300px] h-[200px] relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542382257-80dedb725088?w=600&h=400&fit=crop"
              alt="Plant"
              class="w-full h-full object-cover absolute inset-0"
            />
            <Flex
              direction="column"
              class="relative z-10 p-4 h-full justify-end bg-gradient-to-t from-black/60 to-transparent"
            >
              <Text variant="h5" class="text-white">PLANT A TREE</Text>
              <Text class="text-white/90">Contribute to the planet</Text>
            </Flex>
          </Card>

          <Card class="w-full lg:w-[300px] h-[200px] relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=600&h=400&fit=crop"
              alt="Laptop"
              class="w-full h-full object-cover absolute inset-0"
            />
            <Flex
              direction="column"
              class="relative z-10 p-4 h-full justify-end bg-gradient-to-t from-black/60 to-transparent"
            >
              <Text variant="h5" class="text-white">SUPERCHARGED</Text>
              <Text class="text-white/90">Creates beauty like a beast</Text>
            </Flex>
          </Card>
        </Flex>
      </CardBody>
    </Card>
  </Flex>
</Page>
