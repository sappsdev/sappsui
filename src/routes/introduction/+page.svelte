<script lang="ts">
  import {
    Layout,
    LayoutBody,
    LayoutMain,
    Navbar,
    NavbarBody,
    NavbarBrand,
    NavbarContent,
    Button,
    Flex,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Image,
    Grid,
    Icons,
    Badge,
    Tabs,
    TabsList,
    Tab,
    TabContent,
    I18n,
  } from "$lib/index.js";

  const features = [
    {
      icon: "solar:layout-left-panel-4-bold",
      title: "Responsive Layouts",
      description:
        "Create fluid, responsive layouts that work perfectly across all device sizes",
    },
    {
      icon: "solar:widget-3-bold",
      title: "Rich Component Library",
      description: "Access a comprehensive library of pre-built UI components",
    },
    {
      icon: "solar:palette-bold",
      title: "Theming System",
      description:
        "Easily customize colors, spacing, and more with the built-in theming system",
    },
    {
      icon: "solar:bolt-bold",
      title: "Fast Development",
      description:
        "Accelerate your development process with well-designed, ready-to-use components",
    },
    {
      icon: "solar:accessibility-bold",
      title: "Accessibility",
      description:
        "Built with accessibility in mind, following WCAG guidelines",
    },
    {
      icon: "solar:code-bold",
      title: "Developer-Friendly",
      description:
        "Intuitive APIs and comprehensive documentation for smooth development",
    },
  ];

  // Showcase examples data
  const showcaseExamples = [
    {
      title: "Dashboard Example",
      image: "/api/placeholder/600/350",
      description:
        "A complete admin dashboard with analytics, data visualization, and user management",
    },
    {
      title: "E-commerce Example",
      image: "/api/placeholder/600/350",
      description:
        "Product listings, cart functionality, and checkout process optimized for conversion",
    },
    {
      title: "Social Media Example",
      image: "/api/placeholder/600/350",
      description:
        "News feed, profile pages, and messaging interfaces with modern design patterns",
    },
  ];
</script>

<Flex direction="column" class="w-full bg-base100 pb-16">
  <Flex direction="column" class="py-16 px-4 text-center max-w-5xl mx-auto">
    <Badge color="primary" class="mb-4 mx-auto">
      <Icons icon="solar:star-bold" class="mr-1" />
      <Text>Modern UI Component Library</Text>
    </Badge>
    <Text variant="h1" class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      Build beautiful web apps faster with SappsUI
    </Text>
    <Text
      class="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
    >
      A comprehensive Svelte component library designed for creating responsive,
      accessible, and beautiful user interfaces with minimal effort.
    </Text>
    <Flex direction="row" class="gap-4 justify-center">
      <Button color="primary" size="s-lg">
        <Icons icon="solar:download-bold" />
        <Text>Install Now</Text>
      </Button>
      <Button variant="bordered" color="secondary" size="s-lg">
        <Icons icon="solar:book-bookmark-bold" />
        <Text>Documentation</Text>
      </Button>
    </Flex>
  </Flex>

  <!-- Code preview card -->
  <Card shadow="sh-lg" class="max-w-4xl mx-auto w-full">
    <CardBody class="p-0">
      <Flex direction="column" class="w-full overflow-hidden">
        <Flex direction="row" class="bg-base200 p-2 items-center">
          <Flex direction="row" class="gap-2 ml-2">
            <Flex class="w-3 h-3 rounded-full bg-danger"></Flex>
            <Flex class="w-3 h-3 rounded-full bg-warning"></Flex>
            <Flex class="w-3 h-3 rounded-full bg-success"></Flex>
          </Flex>
          <Text class="text-sm text-center flex-1">Installation.svelte</Text>
        </Flex>
        <Flex
          direction="column"
          class="bg-base200 p-6 text-base200-foreground overflow-x-auto"
        >
          <Text class="font-mono text-sm"></Text>
        </Flex>
      </Flex>
    </CardBody>
  </Card>
</Flex>

<!-- Features Section -->
<Flex direction="column" class="w-full py-16 px-4 bg-base200">
  <Flex direction="column" class="max-w-5xl mx-auto w-full">
    <Text variant="h2" class="text-3xl md:text-4xl font-bold text-center mb-4">
      Why Choose SappsUI
    </Text>
    <Text class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      SappsUI provides everything you need to build modern web applications with
      a focus on developer experience and design consistency.
    </Text>

    <Grid class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each features as feature}
        <Card shadow="sh-md" class="h-full">
          <CardBody>
            <Flex direction="column" class="h-full">
              <Flex
                class="w-12 h-12 rounded-full bg-primary/10 text-primary items-center justify-center mb-4"
              >
                <Icons icon={feature.icon} class="text-2xl" />
              </Flex>
              <Text variant="h4" class="font-bold mb-2">{feature.title}</Text>
              <Text class="text-muted-foreground">{feature.description}</Text>
            </Flex>
          </CardBody>
        </Card>
      {/each}
    </Grid>
  </Flex>
</Flex>

<!-- Showcase Section -->
<Flex direction="column" class="w-full py-16 px-4">
  <Flex direction="column" class="max-w-5xl mx-auto w-full">
    <Text variant="h2" class="text-3xl md:text-4xl font-bold text-center mb-4">
      Showcase
    </Text>
    <Text class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      See what you can build with SappsUI. Explore our example projects and get
      inspired.
    </Text>

    <Tabs active="features">
      <TabsList variant="underlined">
        <Tab key="features">
          <Text>Features</Text>
        </Tab>
        <Tab key="examples">
          <Text>Examples</Text>
        </Tab>
        <Tab key="templates">
          <Text>Templates</Text>
        </Tab>
      </TabsList>

      <TabContent key="features">
        <Grid class="grid-cols-1 md:grid-cols-3 gap-6">
          {#each showcaseExamples as example}
            <Card shadow="sh-md" class="overflow-hidden">
              <Image
                src={example.image}
                alt={example.title}
                class="w-full h-48 object-cover"
              />
              <CardBody>
                <Text variant="h4" class="font-bold mb-2">{example.title}</Text>
                <Text class="text-muted-foreground">{example.description}</Text>
              </CardBody>
              <CardFooter>
                <Button variant="ghost" color="primary" class="w-full">
                  <Text>View Demo</Text>
                  <Icons icon="solar:alt-arrow-right-bold" />
                </Button>
              </CardFooter>
            </Card>
          {/each}
        </Grid>
      </TabContent>

      <TabContent key="examples">
        <Flex
          direction="column"
          class="items-center justify-center p-8 bg-base200 rounded-lg"
        >
          <Icons icon="solar:code-bold" class="text-6xl mb-4 text-primary" />
          <Text variant="h3" class="mb-2">Example Projects</Text>
          <Text class="text-center mb-4"
            >Explore complete example projects built with SappsUI</Text
          >
          <Button color="primary">
            <Text>Browse Examples</Text>
          </Button>
        </Flex>
      </TabContent>

      <TabContent key="templates">
        <Flex
          direction="column"
          class="items-center justify-center p-8 bg-base200 rounded-lg"
        >
          <Icons
            icon="solar:template-bold"
            class="text-6xl mb-4 text-primary"
          />
          <Text variant="h3" class="mb-2">Starter Templates</Text>
          <Text class="text-center mb-4"
            >Kickstart your project with our pre-built templates</Text
          >
          <Button color="primary">
            <Text>View Templates</Text>
          </Button>
        </Flex>
      </TabContent>
    </Tabs>
  </Flex>
</Flex>

<!-- Getting Started Section -->
<Flex direction="column" class="w-full py-16 px-4 bg-base200">
  <Flex direction="column" class="max-w-5xl mx-auto w-full">
    <Text variant="h2" class="text-3xl md:text-4xl font-bold text-center mb-4">
      Get Started in Minutes
    </Text>
    <Text class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      Follow these simple steps to integrate SappsUI into your Svelte project.
    </Text>

    <Grid class="grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <Card shadow="sh-md" class="h-full">
        <CardBody>
          <Flex direction="column" class="items-center text-center">
            <Flex
              class="w-12 h-12 rounded-full bg-primary/10 text-primary items-center justify-center mb-4"
            >
              <Text variant="h3" class="font-bold">1</Text>
            </Flex>
            <Text variant="h4" class="font-bold mb-2">Install the Package</Text>
            <Text class="text-muted-foreground"
              >Run npm install sappsui to add the library to your project</Text
            >
          </Flex>
        </CardBody>
      </Card>

      <Card shadow="sh-md" class="h-full">
        <CardBody>
          <Flex direction="column" class="items-center text-center">
            <Flex
              class="w-12 h-12 rounded-full bg-primary/10 text-primary items-center justify-center mb-4"
            >
              <Text variant="h3" class="font-bold">2</Text>
            </Flex>
            <Text variant="h4" class="font-bold mb-2">Import Components</Text>
            <Text class="text-muted-foreground"
              >Import only the components you need from the sappsui library</Text
            >
          </Flex>
        </CardBody>
      </Card>

      <Card shadow="sh-md" class="h-full">
        <CardBody>
          <Flex direction="column" class="items-center text-center">
            <Flex
              class="w-12 h-12 rounded-full bg-primary/10 text-primary items-center justify-center mb-4"
            >
              <Text variant="h3" class="font-bold">3</Text>
            </Flex>
            <Text variant="h4" class="font-bold mb-2">Build Your UI</Text>
            <Text class="text-muted-foreground"
              >Use the components to quickly build beautiful and responsive
              interfaces</Text
            >
          </Flex>
        </CardBody>
      </Card>
    </Grid>

    <Flex direction="column" class="items-center">
      <Button color="primary" size="s-lg">
        <Icons icon="solar:book-bookmark-bold" />
        <Text>Read the Documentation</Text>
      </Button>
    </Flex>
  </Flex>
</Flex>

<!-- CTA Section -->
<Flex
  direction="column"
  class="w-full py-24 px-4 bg-primary text-primary-foreground"
>
  <Flex direction="column" class="max-w-5xl mx-auto w-full text-center">
    <Text variant="h2" class="text-3xl md:text-4xl font-bold mb-4">
      Ready to build something amazing?
    </Text>
    <Text class="mb-8 max-w-2xl mx-auto opacity-90">
      Join thousands of developers building beautiful, responsive applications
      with SappsUI.
    </Text>
    <Flex direction="row" class="gap-4 justify-center">
      <Button variant="solid" color="secondary" size="s-lg">
        <Icons icon="solar:rocket-bold" />
        <Text>Get Started Now</Text>
      </Button>
      <Button
        variant="bordered"
        class="bg-transparent border-primary-foreground text-primary-foreground"
        size="s-lg"
      >
        <Icons icon="solar:chat-round-dots-bold" />
        <Text>Join Community</Text>
      </Button>
    </Flex>
  </Flex>
</Flex>
