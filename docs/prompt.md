# SappsUI Implementation Guide

## Critical Requirement

**IMPORTANT: Always import and use existing components from the sappsui library. DO NOT create new components from scratch.**

## Responsive Layout Requirements

- **Always use responsive utilities** from Tailwind when defining layouts
- **Use the appropriate breakpoint modifiers** (`sm:`, `md:`, `lg:`, `xl:`)
- **Pay attention to mobile-first designs** - start with mobile layout, then add larger breakpoint adjustments
- **Use built-in responsive utilities** such as `"column md:row"` in Flex components

## Responsive Layout Patterns - Do's and Don'ts

### ✅ DO: Use Flex direction for responsive layouts

```svelte
<!-- Elements stack vertically on mobile, horizontally on desktop -->
<Flex direction="column md:row" class="gap-4">
  <Card>Left content</Card>
  <Card>Right content</Card>
</Flex>
```

### ❌ DON'T: Place elements side-by-side by default

### ❌ DON'T: Svelte transitions only with tailwind on class prop

### ❌ DON'T: add id prop on any components

```svelte
<!-- This will be side-by-side on all screens including mobile -->
<Flex direction="row" class="gap-4">
  <Card>Left content</Card>
  <Card>Right content</Card>
</Flex>
```

## Common Responsive Patterns

### Text Alignment

- Consider text alignment across devices: `"text-center md:text-left"`
- Headers on mobile should typically be centered: `"text-center"`

### Layout Direction

- Use column layout on mobile, row on larger screens: `direction="column md:row"`
- For side-by-side elements that stack on mobile: `"flex-col md:flex-row"`

### Spacing

- Adjust gaps based on screen size: `"gap-2 md:gap-4 lg:gap-6"`
- Consider margin/padding adjustments: `"p-4 md:p-6 lg:p-8"`

### Element Sizing

- Adjust widths responsively: `"w-full md:w-1/2 lg:w-1/3"`
- Button sizes: `"s-xs" | "s-sm" | "s-md" | "s-lg"`

# Design System

## ALready base theme colors

- bg--base100 text-base100-foreground

## Colors

### Primary Colors

- Primary: bg-primary, text-primary
- Primary Foreground: bg-primary-foreground, text-primary-foreground

### Secondary Colors

- Secondary: bg-secondary, text-secondary
- Secondary Foreground: bg-secondary-foreground, text-secondary-foreground

### Accent Colors

- Accent: bg-accent, text-accent
- Accent Foreground: bg-accent-foreground, text-accent-foreground

### Status Colors

- Success: bg-success, text-success-foreground
- Info: bg-info, text-info-foreground
- Warning: bg-warning, text-warning-foreground
- Danger: bg-danger, text-danger-foreground

### Background Colors

- Base: bg-base100
- Base foreground: text-base100-foreground
- Base 100: bg-base100
- Base 100 foreground: text-base100-foreground
- Base 200: bg-base200
- Base 200 foreground: text-base200-foreground

### Utility Colors

- Border: border-border
- Muted: bg-muted, text-muted-foreground

## Component Usage

### Import Statement

Always begin by importing components from the sappsui library:

```svelte
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Code,
  Color,
  Dock,
  DockBody,
  Flex,
  Grid,
  I18n,
  Icons,
  Image,
  Layout,
  LayoutBody,
  LayoutMain,
  Menu,
  MenuItem,
  MenuTittle,
  Navbar,
  NavbarBody,
  NavbarBrand,
  NavbarContent,
  Page,
  Provider,
  Radio,
  RadioGroup,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  Tab,
  TabContent,
  Tabs,
  TabsList,
  Text,
  TextField,
  Mapbox,
  Slider,
  Dropzone,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Badge,
  Toggle,
  Checkbox,
} from 'sappsui';
```

## Core Principles

- **Always import and use sappsui components** - Never recreate these components
- **Use Flex or Grid from sappsui** for layout instead of div elements
- **Always use the Image component from sappsui** for images, never use img tags
- **Follow the design token system** for consistent styling
- **Respect parent-child component relationships** (e.g., CardHeader must be inside Card)
- **Use only props defined by sappsui** - Avoid using props that are not defined by sappsui

## SappsUI Component Reference

## Layout Component Usage

- Only for +layout.svelte files

The Layout component is a versatile container that can be configured for various use cases. Here are common layout patterns and their implementations:

### Basic Layout Structure

Every layout consists of these main components:

- `Layout`: The main container component
- `LayoutBody`: Wrapper for the main content area
- `LayoutMain`: The primary content container

### Common Layout Patterns

#### 1. Simple Layout (No navbar/sidebar)

Ideal for authentication pages or focused content:

```svelte
<Layout>
  <LayoutBody>
    <LayoutMain>
      <!-- Page content -->
    </LayoutMain>
  </LayoutBody>
</Layout>
```

#### 2. Landing Page Layout (With navbar)

Perfect for marketing sites and landing pages:

```svelte
<Layout hNavbar={64} navbarInset>
  <Navbar>
    <NavbarBody>
      <!-- Navbar content -->
    </NavbarBody>
  </Navbar>
  <LayoutBody>
    <LayoutMain>
      <!-- Page content -->
    </LayoutMain>
  </LayoutBody>
</Layout>
```

#### 3. Dashboard Layout (Navbar + Sidebar)

Ideal for admin panels and complex applications:

```svelte
<Layout hNavbar={64} wlSidebar={200} navbarInset>
  <Navbar>
    <NavbarBody>
      <!-- Navbar content -->
    </NavbarBody>
  </Navbar>
  <LayoutBody>
    <Sidebar breakpoint="md">
      <SidebarBody>
        <!-- Sidebar content -->
      </SidebarBody>
    </Sidebar>
    <LayoutMain>
      <!-- Main content -->
    </LayoutMain>
  </LayoutBody>
</Layout>
```

### Layout Configuration Props

| Prop           | Description                                       | Example               |
| -------------- | ------------------------------------------------- | --------------------- |
| `hNavbar`      | Height of the navbar in pixels                    | `hNavbar={64}`        |
| `hDock`        | Height of the dock in pixels                      | `hDock={56}`          |
| `wlSidebar`    | Width of the left sidebar in pixels               | `wlSidebar={250}`     |
| `wrSidebar`    | Width of the right sidebar in pixels              | `wrSidebar={250}`     |
| `navbarInset`  | Whether to inset the layout body below the navbar | `navbarInset={true}`  |
| `fullOnScroll` | Whether to hide the navbar when scrolling down    | `fullOnScroll={true}` |

### Responsive Behavior

The sidebar component includes a `breakpoint` prop that controls its responsive behavior:

- Available breakpoints: `"sm"`, `"md"`, `"lg"`, `"xl"`, `"2xl"`
- Below the breakpoint: Sidebar becomes a drawer
- Above the breakpoint: Sidebar remains fixed

#### Flex (from sappsui)

**Usage:** `import { Flex } from 'sappsui';`
**Props:**

- `direction?: "row" | "column" | "row-reverse" | "column-reverse"` or responsive variants like `"column md:row"`
- `class?: string` (additional tailwind classes)
  **Children:** Any components
  **Usage:** Use instead of div for layouts

#### Card (from sappsui)

**Usage:** `import { Card } from 'sappsui';`
**Props:**

- `shadow?: "sh-sm" | "sh-md" | "sh-lg" | "sh-xl" | "sh-none"` (default "sh-md")
- `radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full"` (default "r-md")
- `class?: string` (additional tailwind classes)
  **Children:** CardHeader | CardBody | CardFooter | Direct content (without padding)
  **Relationships:** Parent for CardHeader, CardBody, and CardFooter components

#### CardHeader (from sappsui)

**Usage:** `import { CardHeader } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
  **Children:** Any components
  **Relationships:** Must be a direct child of Card

#### CardBody (from sappsui)

**Usage:** `import { CardBody } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
  **Children:** Any components
  **Relationships:** Must be a direct child of Card

#### CardFooter (from sappsui)

**Usage:** `import { CardFooter } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
  **Children:** Any components
  **Relationships:** Must be a direct child of Card

### Typography Components

#### Text (from sappsui)

**Usage:** `import { Text } from 'sappsui';`
**Props:**

- `variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "small" | "p"` (default "p")
- `class?: string` (additional tailwind classes)
  **Children:** I18n | direct text content
  **Usage:** Use instead of direct HTML typography elements

#### I18n (from sappsui)

**Usage:** `import { I18n } from 'sappsui';`
**Props:**

- `key: string` (required: key of the translation)
- `props?: object` (optional: parameters for svelte-i18n)
  **Children:** None
  **Relationships:** Can be used inside Text component or standalone

### Media Components

#### Icons (from sappsui)

**Usage:** `import { Icons } from 'sappsui';`
**Props:**

- `icon: string` (required: name of the icon)
- `class?: string` (additional tailwind classes)
  **Children:** None
  **Relationships:** Can be used inside Button, Tab, etc.

#### Image (from sappsui)

**Usage:** `import { Image } from 'sappsui';`
**Props:**

- `src: string` (required: image source)
- `alt: string` (required: alt text for accessibility)
- `class?: string` (additional tailwind classes)
- `shadow?: "sh-sm" | "sh-md" | "sh-lg" | "sh-xl" | "sh-none"` (default "sh-md")
- `radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full"` (default "r-md")
  **Children:** None
  **Usage:** Always use this component instead of img tags
  **Note:** Add tailwind classes to the Image component to adjust size, aspect ratio and object-fit

## Avatar Component Usage

The Avatar component is a versatile element for displaying user profile images with fallback options. Here's how to implement it effectively:

### Basic Avatar Implementation

```svelte
<!-- Basic avatar with image -->
<Avatar src="user-image-url.jpg" name="User Name" />

<!-- Fallback with initials -->
<Avatar name="John Doe" />

<!-- With icon fallback -->
<Avatar icon={Icons} />
```

### Avatar Variants

#### 1. Sizes

```svelte
<Avatar src="user-image.jpg" size="s-sm" />
<Avatar src="user-image.jpg" size="s-md" />
<Avatar src="user-image.jpg" size="s-lg" />
```

#### 2. Colors

```svelte
<Avatar name="JD" color="default" />
<Avatar name="AS" color="primary" />
<Avatar name="RB" color="secondary" />
<Avatar name="MC" color="success" />
<Avatar name="TW" color="warning" />
<Avatar name="EH" color="danger" />
```

#### 3. Border Radius

```svelte
<Avatar src="user-image.jpg" radius="r-none" />
<Avatar src="user-image.jpg" radius="r-sm" />
<Avatar src="user-image.jpg" radius="r-md" />
<Avatar src="user-image.jpg" radius="r-lg" />
<Avatar src="user-image.jpg" radius="r-xl" />
<Avatar src="user-image.jpg" radius="r-full" />
```

#### 4. Bordered and Disabled States

```svelte
<Avatar src="user-image.jpg" isBordered />
<Avatar name="BS" color="primary" isBordered />
<Avatar src="user-image.jpg" isBordered isDisabled />
```

### Avatar Props

- `src`: URL of the avatar image
- `name`: Name to display as fallback or for accessibility
- `color`: Color variant ("default", "primary", "secondary", "success", "warning", "danger")
- `radius`: Border radius ("r-none", "r-xs", "r-sm", "r-md", "r-lg", "r-xl", "r-full")
- `size`: Size variant ("s-sm", "s-md", "s-lg")
- `icon`: Icon component to display as fallback
- `fallback`: Custom fallback content
- `isBordered`: Whether to show a border
- `isDisabled`: Whether the avatar is disabled
- `isFocusable`: Whether the avatar can receive focus
- `showFallback`: Force display of fallback content
- `class`: Additional CSS classes

### Form Components

#### TextField (from sappsui)

**Usage:** `import { TextField } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `label?: string` (label of the input)
- `info?: string` (info text for the input)
- `error?: string` (error message)
- `variant?: "flat" | "bordered" | "faded" | "underlined"` (default "flat")
- `labelPlacement?: "inside" | "outside" | "outside-left"` (default "inside")
- `size?: "s-sm" | "s-md" | "s-lg"` (default "s-md")
- `radius?: "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-none" | "r-full"` (default "r-md")
- `color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"` (default "muted")
  **Children:** input | textarea element with bind:value
  **Usage:** Must be wrapped in a form element

#### Select (from sappsui)

**Usage:** `import { Select } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `bind:value?: any` (initial selected value)
- `onchange?: (value: any) => void` (event handler for value change)
  **Children:** SelectTrigger | SelectContent
  **Relationships:** Parent for SelectTrigger and SelectContent

#### SelectTrigger (from sappsui)

**Usage:** `import { SelectTrigger } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `label?: string` (label of the input)
- `info?: string` (info text for the input)
- `error?: string` (error message)
- `variant?: "flat" | "bordered" | "faded" | "underlined"` (default "flat")
- `labelPlacement?: "inside" | "outside" | "outside-left"` (default "inside")
- `size?: "s-sm" | "s-md" | "s-lg"` (default "s-md")
- `radius?: "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-none" | "r-full"` (default "r-md")
- `color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"` (default "muted")
  **Children:** Icons | Text | I18n | Combination of these
  **Relationships:** Must be a direct child of Select

#### SelectContent (from sappsui)

**Usage:** `import { SelectContent } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
  **Children:** SelectItem components
  **Relationships:** Must be a direct child of Select

#### SelectItem (from sappsui)

**Usage:** `import { SelectItem } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `value: any` (required: value of the item)
  **Children:** Icons | Text | I18n | Combination of these
  **Relationships:** Must be a direct child of SelectContent

#### RadioGroup (from sappsui)

**Usage:** `import { RadioGroup } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `bind:value?: any` (initial selected value)
- `onchange?: (value: any) => void` (event handler for value change)
  **Children:** Radio components
  **Relationships:** Parent for Radio components

#### Radio (from sappsui)

**Usage:** `import { Radio } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `value: any` (required: value of the item)
  **Children:** Icons | Text | I18n | Combination of these
  **Relationships:** Must be a direct child of RadioGroup

#### Toggle (from sappsui)

**Usage:** `import { Toggle } from 'sappsui';`
**Props:**

- `checked?: boolean` (bindable value for the toggle state)
- `onchange?: (checked: boolean) => void` (event handler for value change)
- `disabled?: boolean` (whether the toggle is disabled)
- `class?: string` (additional tailwind classes)
- `size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl"` (default "s-md")
- `radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full"` (default "r-md")
- `color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"` (default "primary")
- `iconOn?: string` (icon to show when toggle is on)
- `iconOff?: string` (icon to show when toggle is off)
  **Children:** Text content for toggle label
  **Usage:** Use for boolean input fields that can be toggled on/off
  **Example:**

  ```svelte
  <!-- Basic toggle -->
  <Toggle checked={isEnabled} onchange={(val) => isEnabled = val}>
    Enable Feature
  </Toggle>

  <!-- Styled toggle with icons -->
  <Toggle
    color="primary"
    size="s-md"
    radius="r-full"
    iconOn="ph:sun-bold"
    iconOff="ph:moon-bold"
    bind:checked={isDarkMode}
    onchange={(val) => isDarkMode = val}
  >
    Dark Mode
  </Toggle>
  ```

#### Checkbox (from sappsui)

**Usage:** `import { Checkbox } from'sappsui';`
**Props:**

- `checked?: boolean` (bindable value for the checkbox state)
- `onchange?: (checked: boolean) => void` (event handler for value change)
- `disabled?: boolean` (whether the checkbox is disabled)
- `class?: string` (additional tailwind classes)
- `size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl"` (default "s-md")
- `radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full"` (default "r-md")
- `color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"` (default "primary")
  **Children:** Text content for checkbox label
  **Usage:** Use for boolean input fields that can be toggled on/off

````svelte
<!-- Basic checkbox -->
<Checkbox checked={isChecked} onchange={(val) => isChecked = val}>
  Check me
</Checkbox>
<!-- Styled checkbox with icons -->
<Checkbox
  color="primary"
  size="s-md"
  radius="r-full"
  bind:checked={isDarkMode}
  onchange={(val) => isDarkMode = val}
>
  Dark Mode
</Checkbox>


#### Slider (from sappsui)

**Usage:** `import { Slider } from 'sappsui';`
**Props:**

- `value?: number` (for single value slider mode)
- `minValue?: number` (for range slider mode, default 0)
- `maxValue?: number` (for range slider mode, default 100)
- `min?: number` (minimum possible value, default 0)
- `max?: number` (maximum possible value, default 100)
- `step?: number` (step increment, default 1)
- `label?: string` (label text for the slider)
- `hideValue?: boolean` (hide the value display)
- `hideThumb?: boolean` (hide the thumb element)
- `showMarks?: boolean` (show step marks on the track)
- `size?: "sm" | "md" | "lg"` (default "md")
- `radius?: "none" | "sm" | "md" | "lg" | "full"` (default "full")
- `color?: "foreground" | "primary" | "secondary" | "success" | "warning" | "danger"` (default "primary")
- `disabled?: boolean` (whether the slider is disabled)
- `class?: string` (additional tailwind classes)
  **Children:** None
  **Usage:** Use for selecting single values or ranges
  **Note:** Use either `value` for single value mode OR `minValue`/`maxValue` for range mode

### Interactive Components

#### Button (from sappsui)

**Usage:** `import { Button } from 'sappsui';`
**Props:**

- `variant?: "solid" | "faded" | "bordered" | "light" | "flat" | "ghost" | "shadow"` (default "solid")
- `radius?: "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-none" | "r-full"` (default "r-md")
- `size?: "s-sm" | "s-md" | "s-lg" | "s-xl"` (default "s-md")
- `class?: string` (additional tailwind classes)
- `color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"` (default "primary")
- `onclick?: (event: MouseEvent) => void` (event handler for click)
- `disabled?: boolean` (whether the button is disabled)
  **Children:** Icons | Text | I18n | Combination of these
  **Usage:** Use for all clickable button actions

#### Tabs (from sappsui)

**Usage:** `import { Tabs } from 'sappsui';`
**Props:**

- `active?: string` (key of the active tab)
- `placement?: "top" | "bottom" | "start" | "end"` (default "top")
  **Children:** TabsList | TabContent
  **Relationships:** Parent for TabsList and TabContent

#### TabsList (from sappsui)

**Usage:** `import { TabsList } from 'sappsui';`
**Props:**

- `variant?: "solid" | "underlined" | "bordered" | "light"` (default "solid")
- `radius?: "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-none" | "r-full"` (default "r-md")
- `size?: "s-sm" | "s-md" | "s-lg" | "s-xl"` (default "s-md")
- `color?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"`
  **Children:** Tab components
  **Relationships:** Must be a direct child of Tabs

#### Tab (from sappsui)

**Usage:** `import { Tab } from 'sappsui';`
**Props:**

- `key?: string` (key of the tab)
- `class?: string` (additional tailwind classes)
  **Children:** Icons | Text | I18n | Combination of these
  **Relationships:** Must be a direct child of TabsList

#### TabContent (from sappsui)

**Usage:** `import { TabContent } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
  **Children:** Any components
  **Relationships:** Must be a direct child of Tabs

### Data Display Components

#### Table (from sappsui)

**Usage:** `import { Table } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `color?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"` (default "primary")
- `radius?: "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-none" | "r-full"` (default "r-md")
- `shadow?: "sh-sm" | "sh-md" | "sh-lg" | "sh-xl" | "sh-none"` (default "sh-md")
- `striped?: boolean` (default false)
- `hoverable?: boolean` (default false)
  **Children:** TableHeader | TableBody
  **Relationships:** Parent for TableHeader and TableBody components

#### TableHeader (from sappsui)

**Usage:** `import { TableHeader } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
  **Children:** TableColumn
  **Relationships:** Must be a direct child of Table

#### TableColumn (from sappsui)

**Usage:** `import { TableColumn } from'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
  **Children:** Any components
  **Relationships:** Must be a direct child of TableHeader

#### TableBody (from sappsui)

**Usage:** `import { TableBody } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
  **Children:** TableRow
  **Relationships:** Must be a direct child of Table

#### TableRow (from sappsui)

**Usage:** `import { TableRow } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
  **Children:** TableCell
  **Relationships:** Must be a direct child of TableHeader or TableBody

#### TableCell (from sappsui)

**Usage:** `import { TableCell } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
  **Children:** Any components
  **Relationships:** Must be a direct child of TableRow

### Status Components

#### Badge (from sappsui)

**Usage:** `import { Badge } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `color?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"` (default "primary")
- `variant?: "solid" | "bordered" | "light"` (default "solid")
- `size?: "s-sm" | "s-md" | "s-lg"` (default "s-md")
- `radius?: "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-none" | "r-full"` (default "r-md")
- `placement?: "start" | "end"` (default "end")
  **Children:** Icons | Text | I18n | Combination of these
  **Usage:** Use for status indicators, tags, or labels

### Form Components

#### TextField (from sappsui)

**Usage:** `import { TextField } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `label?: string` (label of the input)
- `info?: string` (info text for the input)
- `error?: string` (error message)
- `variant?: "flat" | "bordered" | "faded" | "underlined"` (default "flat")
- `labelPlacement?: "inside" | "outside" | "outside-left"` (default "inside")
- `size?: "s-sm" | "s-md" | "s-lg"` (default "s-md")
- `radius?: "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-none" | "r-full"` (default "r-md")
- `color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"` (default "muted")
  **Children:** input | textarea element with bind:value
  **Usage:** Must be wrapped in a form element

#### Select (from sappsui)

**Usage:** `import { Select } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `bind:value?: any` (initial selected value)
  **Children:** SelectTrigger | SelectContent
  **Relationships:** Parent for SelectTrigger and SelectContent

#### SelectTrigger (from sappsui)

**Usage:** `import { SelectTrigger } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `label?: string` (label of the input)
- `info?: string` (info text for the input)
- `error?: string` (error message)
- `variant?: "flat" | "bordered" | "faded" | "underlined"` (default "flat")
- `labelPlacement?: "inside" | "outside" | "outside-left"` (default "inside")
- `size?: "s-sm" | "s-md" | "s-lg"` (default "s-md")
- `radius?: "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-none" | "r-full"` (default "r-md")
- `color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"` (default "muted")
  **Children:** Icons | Text | I18n | Combination of these
  **Relationships:** Must be a direct child of Select

#### SelectContent (from sappsui)

**Usage:** `import { SelectContent } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
  **Children:** SelectItem components
  **Relationships:** Must be a direct child of Select

#### SelectItem (from sappsui)

**Usage:** `import { SelectItem } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `value: any` (required: value of the item)
  **Children:** Icons | Text | I18n | Combination of these
  **Relationships:** Must be a direct child of SelectContent

#### RadioGroup (from sappsui)

**Usage:** `import { RadioGroup } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `bind:value?: any` (initial selected value)
  **Children:** Radio components
  **Relationships:** Parent for Radio components

#### Radio (from sappsui)

**Usage:** `import { Radio } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
- `bind:value: any` (required: bindable value for the radio)
  **Children:** Icons | Text | I18n | Combination of these
  **Relationships:** Must be a direct child of RadioGroup

#### Toggle (from sappsui)

**Usage:** `import { Toggle } from 'sappsui';`
**Props:**

- `checked?: boolean` (whether the toggle is checked)
- `onchange?: (checked: boolean) => void` (event handler for value change)
- `disabled?: boolean` (whether the toggle is disabled)
- `class?: string` (additional tailwind classes)
- `size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl"` (default "s-md")
- `radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full"` (default "r-md")
- `color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"` (default "primary")
- `iconOn?: string` (icon to show when toggle is on)
- `iconOff?: string` (icon to show when toggle is off)
  **Children:** Text content for toggle label
  **Usage:** Use for boolean input fields that can be toggled on/off
  **Example:**

  ```svelte
  <!-- Basic toggle -->
  <Toggle checked={isEnabled} onchange={(val) => isEnabled = val}>
    Enable Feature
  </Toggle>

  <!-- Styled toggle with icons -->
  <Toggle
    color="primary"
    size="s-md"
    radius="r-full"
    iconOn="ph:sun-bold"
    iconOff="ph:moon-bold"
    checked={isDarkMode}
    onchange={(val) => isDarkMode = val}
  >
    Dark Mode
  </Toggle>
````

#### Slider (from sappsui)

**Usage:** `import { Slider } from 'sappsui';`
**Props:**

- `value?: number` (for single value slider mode)
- `minValue?: number` (for range slider mode, default 0)
- `maxValue?: number` (for range slider mode, default 100)
- `min?: number` (minimum possible value, default 0)
- `max?: number` (maximum possible value, default 100)
- `step?: number` (step increment, default 1)
- `label?: string` (label text for the slider)
- `hideValue?: boolean` (hide the value display)
- `hideThumb?: boolean` (hide the thumb element)
- `showMarks?: boolean` (show step marks on the track)
- `size?: "sm" | "md" | "lg"` (default "md")
- `radius?: "none" | "sm" | "md" | "lg" | "full"` (default "full")
- `color?: "foreground" | "primary" | "secondary" | "success" | "warning" | "danger"` (default "primary")
- `disabled?: boolean` (whether the slider is disabled)
- `class?: string` (additional tailwind classes)
  **Children:** None
  **Usage:** Use for selecting single values or ranges
  **Note:** Use either `value` for single value mode OR `minValue`/`maxValue` for range mode

### Interactive Components

#### Button (from sappsui)

**Usage:** `import { Button } from 'sappsui';`
**Props:**

- `variant?: "solid" | "faded" | "bordered" | "light" | "flat" | "ghost" | "shadow"` (default "solid")
- `radius?: "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-none" | "r-full"` (default "r-md")
- `size?: "s-sm" | "s-md" | "s-lg" | "s-xl"` (default "s-md")
- `class?: string` (additional tailwind classes)
- `color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"` (default "primary")
- `onclick?: (event: MouseEvent) => void` (event handler for click)
- `disabled?: boolean` (whether the button is disabled)
  **Children:** Icons | Text | I18n | Combination of these
  **Usage:** Use for all clickable button actions

#### Tabs (from sappsui)

**Usage:** `import { Tabs } from 'sappsui';`
**Props:**

- `active?: string` (key of the active tab)
- `placement?: "top" | "bottom" | "start" | "end"` (default "top")
- `class?: string` (additional tailwind classes)
  **Children:** TabsList | TabContent
  **Relationships:** Parent for TabsList and TabContent

#### TabsList (from sappsui)

**Usage:** `import { TabsList } from 'sappsui';`
**Props:**

- `variant?: "solid" | "underlined" | "bordered" | "light"` (default "solid")
- `radius?: "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-none" | "r-full"` (default "r-md")
- `size?: "s-sm" | "s-md" | "s-lg" | "s-xl"` (default "s-md")
- `color?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"`
- `class?: string` (additional tailwind classes)
  **Children:** Tab components
  **Relationships:** Must be a direct child of Tabs

#### Tab (from sappsui)

**Usage:** `import { Tab } from 'sappsui';`
**Props:**

- `key?: string` (key of the tab)
- `class?: string` (additional tailwind classes)
  **Children:** Icons | Text | I18n | Combination of these
  **Relationships:** Must be a direct child of TabsList

#### TabContent (from sappsui)

**Usage:** `import { TabContent } from 'sappsui';`
**Props:**

- `class?: string` (additional tailwind classes)
  **Children:** Any components
  **Relationships:** Must be a direct child of Tabs

## Form State Management with Svelte 5 Runes

- Create a formState using Svelte 5 runes for all form components
- Example:
  ```svelte
  const username = $state('');
  const password = $state('');
  const isValid = $derived(username.length >= 3 && password.length >= 6);
  ```

## Complete Example Using sappsui Library

```svelte
<script lang="ts">
  import {
    Flex,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    I18n,
    Image,
    Button,
    TextField,
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    RadioGroup,
    Radio,
    Tabs,
    TabsList,
    Tab,
    TabContent,
    Icons
  } from 'sappsui';

  let username = $state('');
  let selection = $state('');
  let radioValue = $state('');
  let activeTab = $state('tab1');

  const handleSubmit = (event: Event) => {
    event.preventDefault();
  }
</script>

<form onsubmit={handleSubmit}>
  <Flex direction="column" class="gap-4">
    <!-- TextField component with input child -->
    <TextField label="Username" variant="bordered" color="primary">
      <input type="text" bind:value={username} />
    </TextField>

    <!-- Select with proper child hierarchy -->
    <Select bind:value={selection}>
      <SelectTrigger label="Options">
        <Text>{selection || "Choose an option"}</Text>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">
          <Text>Option 1</Text>
        </SelectItem>
        <SelectItem value="option2">
          <Text>Option 2</Text>
        </SelectItem>
      </SelectContent>
    </Select>

    <!-- Radio group -->
    <RadioGroup bind:value={$radioValue}>
      <Radio value="option1">
        <Text>Option 1</Text>
      </Radio>
      <Radio value="option2">
        <Text>Option 2</Text>
      </Radio>
    </RadioGroup>

    <!-- Card with proper section components -->
    <Card shadow="sh-md">
      <CardHeader>
        <Text variant="h3">Card Title</Text>
      </CardHeader>
      <CardBody>
        <Text>Content goes here</Text>
        <Image src="/example.jpg" alt="Example image" radius="r-md" />
      </CardBody>
      <CardFooter>
        <Button variant="solid" color="primary">
          <Icons icon="solar:check-circle-bold" />
          <Text>Action</Text>
        </Button>
      </CardFooter>
    </Card>

    <!-- Tabs with proper child hierarchy -->
    <Tabs active="tab1>
      <TabsList>
        <Tab key="tab1">
          <Text>First Tab</Text>
        </Tab>
        <Tab key="tab2">
          <Text>Second Tab</Text>
        </Tab>
      </TabsList>
      <TabContent key="tab1">
        <!-- Content changes based on active tab -->
        <Text>Tab content here</Text>
      </TabContent>
    </Tabs>
  </Flex>
</form>
```

## Plugins

### Mapbox (from sappsui)

**Usage:** `import { Mapbox } from 'sappsui';`
**Props:**

- `accessToken: string` - Your Mapbox access token
- `style?: string` - Map style URL (default: 'mapbox://styles/mapbox/streets-v12')
- `center?: [number, number]` - Initial map center coordinates [longitude, latitude] (default: [0, 0])
- `zoom?: number` - Initial zoom level (default: 9)
- `minZoom?: number` - Minimum zoom level
- `maxZoom?: number` - Maximum zoom level
- `bearing?: number` - Map rotation in degrees (default: 0)
- `pitch?: number` - Map tilt in degrees (default: 0)
- `interactive?: boolean` - Whether the map can be interacted with (default: true)
- `attributionControl?: boolean` - Whether to show attribution control (default: true)
- `showCurrentLocation?: boolean` - Show user's current location (default: false)
- `showSearchControl?: boolean` - Show search control (default: false)
- `searchControlPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'` - Position of search control
- `markers?: Array` - Array of marker objects with properties:
  - `lngLat: [number, number]` - Marker coordinates
  - `color?: string` - Marker color (hex code)
  - `avatar?: string` - Icon or image URL for custom marker
  - `popup?: object` - Popup configuration:
    - `content: string` - HTML content
    - `closeButton?: boolean` - Show close button
    - `closeIcon?: string` - Custom close icon
    - `className?: string` - Additional CSS class
- `enableRealTimeUpdates?: boolean` - Enable real-time marker updates (default: false)
- `animateMarkerMovement?: boolean` - Animate marker movement (default: true)
- `animationDuration?: number` - Animation duration in milliseconds (default: 500)
- `onLocationClick?: Function` - Callback for map clicks with location data
- `onMarkerUpdate?: Function` - Callback for marker position updates
- `class?: string` - Additional CSS classes

**Example Usage:**

```svelte
<!-- Basic Map -->
<Mapbox
  accessToken={mapboxAccessToken}
  center={[-96, 37.8]}
  zoom={3}
  showCurrentLocation
  showSearchControl
/>

<!-- Map with Markers and Popups -->
<Mapbox
  accessToken={mapboxAccessToken}
  center={[-40, 40]}
  zoom={2}
  markers={[
    {
      lngLat: [-74.006, 40.7128],
      color: "#FF5733",
      popup: {
        content: "<h3>New York City</h3><p>The Big Apple</p>",
        closeButton: true
      }
    }
  ]}
/>

<!-- Real-time Updates -->
<Mapbox
  bind:this={mapboxRef}
  accessToken={mapboxAccessToken}
  center={[-73.99, 40.73]}
  zoom={13}
  markers={vehicleMarkers}
  enableRealTimeUpdates={true}
  animateMarkerMovement={true}
  onMarkerUpdate={(markerId, newPosition) => {
    console.log(`Marker ${markerId} moved to:`, newPosition);
  }}
/>
```

### Dropzone (from sappsui)

**Usage:** `import { Dropzone } from 'sappsui';`
**Props:**

- `class?: string` - Additional CSS classes
- `label?: string` - Text displayed when no files are selected (default: "Drag and drop files here or click to browse")
- `info?: string` - Additional information text displayed below the label
- `error?: string` - Error message to display
- `variant?: "flat" | "bordered" | "faded" | "underlined"` - Component style variant (default: "bordered")
- `color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger"` - Color theme (default: "primary")
- `size?: "s-sm" | "s-md" | "s-lg"` - Component size (default: "s-md")
- `radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full"` - Border radius (default: "r-md")
- `shadow?: "sh-sm" | "sh-md" | "sh-lg" | "sh-xl" | "sh-none"` - Shadow style (default: "sh-sm")
- `accept?: string` - File types to accept (default: "image/\*,application/pdf")
- `multiple?: boolean` - Allow multiple file selection (default: true)
- `maxSize?: number` - Maximum file size in bytes (default: 10MB)
- `maxFiles?: number` - Maximum number of files allowed (default: 5)
- `disabled?: boolean` - Disable the dropzone (default: false)
- `uploadToStorage?: boolean` - Automatically upload files to cloud storage (default: false)
- `storageType?: "r2" | "s3"` - Cloud storage provider (default: "r2")
- `storageConfig?: object` - Configuration for cloud storage:
  - `endpoint?: string` - Storage endpoint URL
  - `region?: string` - Storage region
  - `bucket?: string` - Storage bucket name
  - `accessKeyId?: string` - Access key ID
  - `secretAccessKey?: string` - Secret access key

**Events:**

- `filesSelected` - Fired when files are selected with `{ files }` payload
- `fileRemoved` - Fired when a file is removed with `{ file, remainingFiles }` payload
- `uploadStart` - Fired when upload begins with `{ files }` payload
- `uploadSuccess` - Fired when all uploads complete successfully with `{ files, urls }` payload
- `uploadPartial` - Fired when some uploads fail with `{ successful, failed }` payload
- `uploadError` - Fired when upload encounters an error with `{ error }` payload

**Example Usage:**

```svelte
<!-- Basic Dropzone -->
<Dropzone />

<!-- Customized Dropzone -->
<Dropzone
  label="Upload your documents"
  info="Max 5MB per file, up to 3 files"
  variant="bordered"
  color="primary"
  maxSize={5 * 1024 * 1024}
  maxFiles={3}
  accept="image/*,.pdf,.doc,.docx"
/>

<!-- With Cloud Storage -->
<Dropzone
  label="Upload to Cloud"
  uploadToStorage={true}
  storageType="s3"
  storageConfig={{
    region: "us-east-1",
    bucket: "my-uploads"
  }}
  on:uploadSuccess={({ detail }) => {
    console.log("Files uploaded:", detail.urls);
  }}
/>
```

## Critical Reminders

1. **NEVER create components from scratch**
2. **ALWAYS import components from the sappsui library**
3. **ALWAYS use Flex with appropriate direction for responsive layouts**
4. **ALWAYS consider mobile-first design and use responsive utilities**
5. **ALWAYS test layouts on both small and large screens**
6. **ALWAYS wrap login page titles and subtitles in a column-directed Flex component**
7. **ALWAYS use semantic components (no raw divs, img, etc.)**
8. **ALWAYS use the proper parent-child relationships**
