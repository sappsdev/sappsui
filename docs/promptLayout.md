

# Menu Component
**Usage**: `import { Menu } from 'sappsui';`
**Description**: A menu is a component that represents a navigation menu.
**Children**: MenuItem | MenuTitle | MenuCollapse
## Props
class?: string;
vertical?: boolean;
size?: "s-sm" | "s-md" | "s-lg";
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";

# MenuItem Component
**Usage**: `import { MenuItem } from 'sappsui';`
**Description**: A menu item is a component that represents a clickable item within a menu.
**Children**: Text | Icon | I18n
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