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
    MenuTittle,
    LayoutMain,
    NavbarContent,
  } from "$lib/index.js";
  import "@fontsource-variable/montserrat";
  import type { Snippet } from "svelte";
  import "../app.css";

  type Props = {
    children?: Snippet;
  };

  let { children }: Props = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

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
          name: "Dock",
          href: "/dock",
        },
        {
          name: "Error",
          href: "/error",
        },
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
        {
          name: "Page",
          href: "/page",
        },
      ],
    },
    {
      title: "Plugins",
      items: [
        {
          name: "Copy",
          href: "/copy",
        },
        {
          name: "Mapbox",
          href: "/mapbox",
        },
        {
          name: "Dropzone",
          href: "/dropzone",
        },
        {
          name: "Charts",
          href: "/charts",
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
        <Menu>
          <MenuItem href="/">Docs</MenuItem>
        </Menu>
      </NavbarContent>
    </NavbarBody>
  </Navbar>
  <LayoutBody class="boxed">
    <Sidebar breakpoint="lg">
      <SidebarBody>
        <Menu vertical>
          {#each menu as list}
            <MenuTittle>{list.title}</MenuTittle>
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
