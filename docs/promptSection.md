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

# Design System
## ALready base theme colors
- bg--base100 text-base100-foreground
## Brand Colors
- primary: "bg-primary text-primary-foreground"
- secondary: "bg-secondary text-secondary-foreground"
- accent: "bg-accent text-accent-foreground"
- muted: "bg-muted text-muted-foreground"
## Semantic colors
- info: "bg-info text-info-foreground"
- success: "bg-success text-success-foreground"
- warning: "bg-warning text-warning-foreground"
- danger: "bg-danger text-danger-foreground"
## Background Colors
- base100: "bg-base100 text-base100-foreground"
- base200: "bg-base200 text-base200-foreground"
- base300: "bg-base300 text-base300-foreground"
## Border Colors
- border: "border-border"

# Card Component
**Usage**: `import { Card } from 'sappsui';`
**Description**: A card is a container that holds content and actions related to a single subject.
**Children**: CardHeader, CardBody, CardFooter, or any component
## Critical Requirement
- DON'T: use CardHeader, CardBody, CardFooter if you want cards with cover image
- DON'T: use CardHeader, CardBody, CardFooter if you want cards with outer padding
## Props
- class: tailwind classes for color, responsive or animation styles
- radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
- shadow?: "sh-sm" | "sh-md" | "sh-lg" | "sh-xl" | "sh-none";

# CardHeader Component
**Usage**: `import { CardHeader } from'sappsui';`
**Description**: A card header is a container that holds the title and subtitle of a card.
**Children**: Any Component
## Props
- class: tailwind classes for color, responsive or animation styles

# CardBody Component
**Usage**: `import { CardBody } from'sappsui';`
**Description**: A card body is a container that holds the content of a card.
**Children**: Any Component
## Critical Requirement
- Use runes state for loop on repeated contents
- DON'T: use children Flex or Grid on repeated cards, add grid or flex and gap on class
- DON'T: use Tabs, Table, Form, Plugin, Modal as children add comment to import
# Props
- class: tailwind classes for flex, grid, color, responsive or animation styles

# CardFooter Component
**Usage**: `import { CardFooter } from'sappsui';`
**Description**: A card footer is a container that holds the actions of a card.
**Children**: Any Component
## Props
- class: tailwind classes for color, responsive or animation styles

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
**Children**: Text | Icon | I18n
## Props
class?: string;
size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl";
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";

# Button Component
**Usage**: `import { Button } from'sappsui';`
**Description**: A button is a clickable element that represents an action.
**Children**: Text | Icon | I18n
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
**Usage**: `import { Icon } from'sappsui';`
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

# Table Component
**Usage**: `import { Table } from'sappsui';`
**Description**: A table is a component that represents a table.
**Children**: TableHeader, TableBody
## Props
class?: string;
color?:
    | "muted"
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "danger";
size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl";
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
isCompact?: boolean;
isStriped?: boolean;
isHeaderSticky?: boolean;
fullWidth?: boolean;
sortDescriptor?: {column: string; direction: "ascending" | "descending";};
selectedKeys?: Set<string>;
defaultSelectedKeys?: Set<string>;

# TableHeader Component
**Usage**: `import { TableHeader } from'sappsui';`
**Description**: A table header is a component that represents a table header.
**Children**: TableColumn
# Props
class?: string;

# TableColumn Component
**Usage**: `import { TableColumn } from'sappsui';`
**Description**: A table column is a component that represents a table column.
**Children**: Text | Icon | I18n
## Critical Requirement
- Use runes state for loop on repeated columns
# Props
class?: string;
id?: string;
sortable?: boolean;

# TableBody Component
**Usage**: `import { TableBody } from'sappsui';`
**Description**: A table body is a component that represents a table body.
**Children**: TableRow
## Props
class?: string;

# TableRow Component
**Usage**: `import { TableRow } from'sappsui';`
**Description**: A table row is a component that represents a table row.
**Children**: TableCell
## Critical Requirement
- Use runes state for loop on repeated rows
# Props
class?: string;
id?: string;
isSelected?: boolean;

# TableCell Component
**Usage**: `import { TableCell } from'sappsui';`
**Description**: A table cell is a component that represents a table cell.
**Children**: Text | Icon | I18n
## Props
class?: string;

# Tabs Component
**Usage**: `import { Tabs } from'sappsui';`
**Description**: A tabs is a component that represents a tabs.
**Children**: TabsList | TabContent
## Critical Requirement
- active prop is required and need set on some TabContent and Tab key prop
## Props
active?: string;
placement?: "top" | "bottom" | "start" | "end";

# TabsList Component
**Usage**: `import { TabsList } from'sappsui';`
**Description**: A tabs list is a component that represents a tabs list.
**Children**: Tab
## Props
size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl";
variant?: "solid" | "bordered" | "light" | "underlined";
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";

# Tab Component
**Usage**: `import { Tab } from'sappsui';`
**Description**: A tab is a component that represents a tab.
**Children**: Text | Icon | I18n
## Critical Requirement
- key prop is required and need set on TabContent and optional Tabs active prop
## Props
class?: string;
key?: string;

# TabContent Component
**Usage**: `import { TabContent } from'sappsui';`
**Description**: A tab content is a component that represents a tab content.
**Children**: Any Component
## Critical Requirement
- key prop is required and need set on TabContent and TabsList
## Props
class?: string;
key?: string;

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




