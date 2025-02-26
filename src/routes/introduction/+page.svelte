<script lang="ts">
  import {
    Button,
    Card,
    CardBody,
    Flex,
    Icons,
    Page,
    Text,
  } from "$lib/index.js";
</script>

<Page class="p-4 gap-4">
  <Flex direction="column" class="gap-6 max-w-4xl mx-auto">
    <Flex direction="column" class="gap-4 text-center">
      <Text
        variant="h1"
        class="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        SAPPS UI
      </Text>
      <Text variant="h2" class="text-2xl text-muted-foreground">
        A Modern Svelte Component Library for Building Beautiful Web
        Applications
      </Text>
    </Flex>

    <Card class="p-6">
      <CardBody>
        <Flex direction="column" class="gap-6">
          <Flex direction="column" class="gap-4">
            <Text variant="h3" class="text-xl font-semibold"
              >Get Started in Minutes</Text
            >
            <Text
              >Install SAPPS UI and start building beautiful interfaces right
              away:</Text
            >
            <Card class="bg-muted">
              <CardBody class="p-4">
                <code>npm install sappsui</code>
              </CardBody>
            </Card>
          </Flex>

          <Flex class="justify-center gap-4">
            <Button variant="bordered">
              <Icons icon="fluent:github-24-regular" class="mr-2" />
              GitHub
            </Button>
          </Flex>
          <Text variant="h3" class="text-xl font-semibold"
            >Why Choose SAPPS UI?</Text
          >

          <Flex class="gap-4 flex-wrap">
            <Card class="flex-1 min-w-[250px]">
              <CardBody
                class="flex flex-col gap-2 items-center text-center p-4"
              >
                <Icons
                  icon="fluent:design-ideas-24-regular"
                  class="w-8 h-8 text-primary"
                />
                <Text variant="h4" class="font-medium">Modern Design</Text>
                <Text
                  >Beautifully crafted components following the latest design
                  trends and best practices</Text
                >
              </CardBody>
            </Card>

            <Card class="flex-1 min-w-[250px]">
              <CardBody
                class="flex flex-col gap-2 items-center text-center p-4"
              >
                <Icons
                  icon="fluent:box-toolbox-24-regular"
                  class="w-8 h-8 text-primary"
                />
                <Text variant="h4" class="font-medium">Rich Component Set</Text>
                <Text
                  >Comprehensive collection of pre-built components to
                  accelerate your development</Text
                >
              </CardBody>
            </Card>

            <Card class="flex-1 min-w-[250px]">
              <CardBody
                class="flex flex-col gap-2 items-center text-center p-4"
              >
                <Icons
                  icon="fluent:paint-brush-24-regular"
                  class="w-8 h-8 text-primary"
                />
                <Text variant="h4" class="font-medium">Customizable</Text>
                <Text
                  >Easily customize and extend components to match your brand
                  and requirements</Text
                >
              </CardBody>
            </Card>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  </Flex>
</Page>
