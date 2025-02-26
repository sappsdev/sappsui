<script lang="ts">
  import {
    LayoutBody,
    LayoutMain,
    Menu,
    MenuItem,
    MenuTittle,
    Sidebar,
    SidebarBody,
  } from "$lib/index.js";

  let { children } = $props();

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
          name: "Menu",
          href: "/menu",
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
          name: "Switch",
          href: "/switch",
        },
        {
          name: "Slider",
          href: "/slider",
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
  ];
</script>

<LayoutBody class="boxed">
  <Sidebar breakpoint="md">
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
