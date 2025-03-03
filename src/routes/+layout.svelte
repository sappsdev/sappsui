<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import {
    Layout,
    LayoutBody,
    Menu,
    MenuItem,
    Navbar,
    NavbarBody,
    NavbarBrand,
    Text,
    SidebarBody,
    Sidebar,
    MenuTitle,
    LayoutMain,
    NavbarContent,
    Icons,
    Button,
    SidebarTrigger,
  } from "$lib/index.js";
  import "@fontsource-variable/montserrat";
  import type { Snippet } from "svelte";
  import "../app.css";

  type Props = {
    children?: Snippet;
  };

  let { children }: Props = $props();
  let isDarkTheme = $state(false);

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.documentElement.classList.toggle("dark");
  }

  const menu = [
    {
      title: "Getting Started",
      items: [
        {
          name: "Introduction",
          href: "/introduction",
        },
        {
          name: "Colors",
          href: "/colors",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          name: "Avatar",
          href: "/avatar",
        },
        {
          name: "Badge",
          href: "/badge",
        },
        {
          name: "Button",
          href: "/button",
        },
        {
          name: "Card",
          href: "/card",
        },
        {
          name: "Icons",
          href: "/icons",
        },
        {
          name: "Image",
          href: "/image",
        },
        {
          name: "Modal",
          href: "/modal",
        },
        {
          name: "Table",
          href: "/table",
        },
        {
          name: "Typography",
          href: "/typography",
        },
      ],
    },
    {
      title: "Forms",
      items: [
        {
          name: "Text Field",
          href: "/textfield",
        },
        {
          name: "Select",
          href: "/select",
        },
        {
          name: "Checkbox",
          href: "/checkbox",
        },
        {
          name: "Radio",
          href: "/radio",
        },
        {
          name: "Slider",
          href: "/slider",
        },
        {
          name: "Toggle",
          href: "/toggle",
        },
      ],
    },
    {
      title: "Navigation",
      items: [
        {
          name: "Tabs",
          href: "/tabs",
        },
        {
          name: "Menu",
          href: "/menu",
        },
      ],
    },
    {
      title: "Layouts",
      items: [
        {
          name: "Layout",
          href: "/layout",
        },
        {
          name: "Navbar",
          href: "/navbar",
        },
        {
          name: "Sidebar",
          href: "/sidebar",
        },
      ],
    },
    {
      title: "Plugins",
      items: [
        {
          name: "Mapbox",
          href: "/mapbox",
        },
        {
          name: "Dropzone",
          href: "/dropzone",
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>SappsUI</title>
</svelte:head>

<Layout hNavbar={64} wlSidebar={250} wrSidebar={250} navbarInset>
  <Navbar>
    <NavbarBody class="boxed">
      <NavbarContent>
        <NavbarBrand href="/">
          <Text class="font-light" variant="h3">SappsUI</Text>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent>
        <SidebarTrigger class="lg:hidden">
          <Icons icon="mdi:menu" class="size-6" />
        </SidebarTrigger>
        <Button onclick={toggleTheme} isIcon variant="ghost">
          <Icons
            icon={isDarkTheme ? "mdi:weather-sunny" : "mdi:weather-night"}
            class="size-5"
          />
        </Button>
        <Button
          href="https://www.paypal.com/donate/?hosted_button_id=PXSBYPKW9X4FL"
          variant="ghost"
          isIcon
        >
          <Icons icon="mdi:heart" class="size-5 text-danger" />
        </Button>
      </NavbarContent>
    </NavbarBody>
  </Navbar>
  <LayoutBody class="boxed">
    <Sidebar breakpoint="lg">
      <SidebarBody class="py-4">
        <Menu vertical class="py-4">
          {#each menu as list}
            <MenuTitle>{list.title}</MenuTitle>
            {#each list.items as item}
              <MenuItem href={item.href}>{item.name}</MenuItem>
            {/each}
          {/each}
        </Menu>
      </SidebarBody>
    </Sidebar>
    <LayoutMain>
      {@render children?.()}
    </LayoutMain>
  </LayoutBody>
</Layout>
