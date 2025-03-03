# SappsUI Componets Implementation
- Create atractive, moderm and consistent section design
## Critical Requirement
- always import and use existing components from the sappsui library
- Update imports if used multiple components
- Only use create sections purpose by the design system
- DON'T: use for Layout purpose
- i need a fully responsive design that works perfectly on mobile, tablet, and desktop
- clear visual hierarchy with proper spacing and typography
- use svelte 5 with runes
- on class props always use tailwind
- appropriate breakpoint on class for responsive ("sm: | md:| lg: | xl: | 2xl:")
- DON'T: add id prop on any components
- DON'T: Svelte transitions only with tailwind on class prop
- If props include ? this is a optional prop
- r-none: used for border radius none
- r-full: used for border radius full
- sh-none: used for shadow none
- use s- for sizes sample s-sm, s-md, s-lg, s-xl, s-2xl

# Runes State
**Description**: used for loop on repeated contents
**Usage sigle**: `let state = $state(state);`
**Usage multiple**: `let state = $state({state, state2, state3});`

# Dock Component
**Usage**: `import { Dock } from 'sappsui';`
**Description**: The Dock component provides a container that sits at the bottom of the layout.
**Children**: DockBody
## Props
class?: string;

# DockBody Component
**Usage**: `import { DockBody } from 'sappsui';`
**Description**: The container for the dock content.
**Children**: Any content components
## Props
class?: string;

# Layout Component
**Usage**: `import { Layout } from 'sappsui';`
**Description**: The Layout component is the main container that manages the overall page structure including navbar, sidebars, and content area.
**Children**: Navbar | LayoutBody | Dock
## Critical Requirement
- Only use for layouts purpose by the design system
## Props
class?: string;
hNavbar?: number; // Height of the navbar in pixels
hDock?: number; // Height of the dock in pixels
wlSidebar?: number; // Width of the left sidebar in pixels
wrSidebar?: number; // Width of the right sidebar in pixels
wlRail?: number; // Width of the left rail in pixels when collapsed
wrRail?: number; // Width of the right rail in pixels when collapsed
navbarInset?: boolean; // Whether the navbar should be inset
fullOnScroll?: boolean; // Whether to hide bars on scroll

# LayoutBody Component
**Usage**: `import { LayoutBody } from 'sappsui';`
**Description**: The LayoutBody component contains the main content area and optional sidebars.
**Children**: Sidebar | LayoutMain
## Props
class?: string;

# LayoutMain Component
**Usage**: `import { LayoutMain } from 'sappsui';`
**Description**: The LayoutMain component is the container for the main content of the page.
**Children**: Any content components
## Props
class?: string;

# Menu Component
**Usage**: `import { Menu } from 'sappsui';`
**Description**: A menu is a component that represents a navigation menu.
**Children**: MenuItem | MenuTitle | MenuCollapse
## Critical Requirement
- Only use for Sidebar or Navbar purpose by the design system
- Create a menu runes state for loop on repeated contents
## Props
class?: string;
vertical?: boolean;
size?: "s-sm" | "s-md" | "s-lg";
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";

# MenuItem Component
**Usage**: `import { MenuItem } from 'sappsui';`
**Description**: A menu item is a component that represents a clickable item within a menu.
**Children**: Text | Icons | I18n
## Props
class?: string;
href?: string;
onclick?: () => void;
size?: "s-sm" | "s-md" | "s-lg";
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";
selected?: boolean;

# MenuTitle Component
**Usage**: `import { MenuTitle } from 'sappsui';`
**Description**: A menu title is a component that represents a section header within a menu.
**Children**: Text | I18n
## Props
class?: string;
size?: "s-sm" | "s-md" | "s-lg";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";

# MenuCollapse Component
**Usage**: `import { MenuCollapse } from 'sappsui';`
**Description**: A menu collapse is a component that represents a collapsible section within a menu.
**Children**: MenuItem
## Props
class?: string;
title?: Snippet;
defaultOpen?: boolean;
size?: "s-sm" | "s-md" | "s-lg";
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";

# Navbar Component
**Usage**: `import { Navbar } from 'sappsui';`
**Description**: The Navbar component serves as the main navigation bar at the top of the page.
**Children**: NavbarBody
## Critical Requirement
- Only use for Navbar purpose by the design system
## Props
class?: string;

# NavbarBody Component
**Usage**: `import { NavbarBody } from 'sappsui';`
**Description**: The container for the navbar content.
**Children**: NavbarContent | NavbarBrand
## Props
class?: string;

# NavbarBrand Component
**Usage**: `import { NavbarBrand } from 'sappsui';`
**Description**: A component for displaying the brand/logo in the navbar.
**Children**: Any content components (typically Text or images)
## Props
class?: string;
href?: string; // URL to navigate to when clicked

# NavbarContent Component
**Usage**: `import { NavbarContent } from 'sappsui';`
**Description**: A container for grouping navbar items.
**Children**: Any content components (typically Menu)
## Props
class?: string;

# Sidebar Component
**Usage**: `import { Sidebar } from 'sappsui';`
**Description**: The Sidebar component provides a responsive sidebar layout that transforms into a drawer on smaller screens.
**Children**: SidebarHeader | SidebarBody | SidebarFooter
## Critical Requirement
- Only use for Sidebar purpose by the design system
## Props
class?: string;
placement?: "left" | "right"; // Position of the sidebar
breakpoint?: string; // Breakpoint at which the sidebar converts to a drawer ("xs", "sm", "md", "lg", "xl", "2xl")
hideCloseButton?: boolean; // Whether to hide the close button in drawer mode

# SidebarBody Component
**Usage**: `import { SidebarBody } from 'sappsui';`
**Description**: The container for the main content of the sidebar.
**Children**: Any content components
## Props
class?: string;

# SidebarHeader Component
**Usage**: `import { SidebarHeader } from 'sappsui';`
**Description**: The container for the header section of the sidebar.
**Children**: Any content components
## Props
class?: string;

# SidebarFooter Component
**Usage**: `import { SidebarFooter } from 'sappsui';`
**Description**: The container for the footer section of the sidebar.
**Children**: Any content components
## Props
class?: string;

# SidebarTrigger Component
**Usage**: `import { SidebarTrigger } from 'sappsui';`
**Description**: A button component that toggles the visibility of the sidebar drawer.
**Children**: Any content components (typically icons)
## Props
class?: string;
placement?: "left" | "right"; // Which sidebar to toggle


# Flex Component
**Usage**: `import { Flex } from'sappsui';`
**Description**: A flex is a container that holds the content of a card.
**Children**: Any Component
## Critical Requirement
- Use runes state for loop on repeated contents
- DON'T: use Tabs, Table, Form, Plugin, Modal as children add comment to import
## Props
- class: tailwind classes for flex, color, responsive or animation styles

# Grid Component
**Usage**: `import { Grid } from'sappsui';`
**Description**: A grid is a container that holds the content of a card.
**Children**: Any Component
## Critical Requirement
- Use runes state for loop on repeated contents
- Add grid columns or rows and gap on class
- DON'T: use Tabs, Table, Form, Plugin, Modal as children add comment to import
## Props
- class: tailwind classes for grid, color, responsive or animation styles

# Avatar Component
**Usage**: `import { Avatar } from'sappsui';`
**Description**: An avatar is a circular image that represents a user or a group of users.
## Critical Requirement
- Add tailwind sizes and aspect ratio on class
## Props
- class?: tailwind classes for size, aspect ratio, responsive or animation styles
- color?: "primary" | "secondary" | "accent" | "muted" | "info" | "success" | "warning" | "danger";
- radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
size?: "s-sm" | "s-md" | "s-lg";
src?: string;
name?: string;
icon?: Iconify Icon;
fallback?: string;
isBordered?: boolean;
isDisabled?: boolean;
isFocusable?: boolean;
showFallback?: boolean;

# Badge Component
**Usage**: `import { Badge } from'sappsui';`
**Description**: A badge is a small label that represents a status or a number.
**Children**: Text | Icons | I18n
## Props
class?: string;
size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl";
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";

# Button Component
**Usage**: `import { Button } from'sappsui';`
**Description**: A button is a clickable element that represents an action.
**Children**: Text | Icons | I18n
## Critical Requirement
- If href prop is used, use a Link component instead
## Props
disabled?: boolean;
type?: "submit" | "reset" | "button";
onclick?: () => void;
href?: string;
class?: string;
size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl";
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
variant?: "solid" | "faded" | "bordered" | "light" | "flat" | "ghost" | "shadow";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";

# I18n Component
**Usage**: `import { I18n } from'sappsui';`
**Description**: An i18n is a component that represents a text in a specific language.
## Critical Requirement
- This component use svelte i18n library to translate the text
- Required languages used in the app
- Return the language json key and values defined in the app
- props is used for plurar or dynamic values in the text
## Props
key?: string;
props?: Record<string, unknown>;

# Icons Component
**Usage**: `import { Icons } from'sappsui';`
**Description**: An icon is a small image that represents an action or a status.
## Critical Requirement
- Use iconify icon names
- use class prop for size, color, responsive or animation styles
## Props
icon?: Iconify Icon;
class?: string;

# Image Component
**Usage**: `import { Image } from'sappsui';`
**Description**: An image is a component that represents an image.
## Props
class?: string;
src: string;
alt?: string;
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
shadow?: "sh-sm" | "sh-md" | "sh-lg" | "sh-xl" | "sh-none";
isBlurred?: boolean;
isZoomed?: boolean;
loading?: "eager" | "lazy";
srcset?: string;

# Text Component
**Usage**: `import { Text } from'sappsui';`
**Description**: A text is a component that represents a text.
**Children**: Only text
## Critical Requirement
- If href prop is used, use a Link component instead
- Use class prop for size, color, align, responsive or animation styles
## Props
class?: string;
variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "small" | "p";
href?: string;