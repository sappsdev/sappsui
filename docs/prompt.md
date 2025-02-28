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
- Button sizes: `"w-full md:w-auto"`

# Design System

## ALready base theme colors

- bg--base-100 text-base-100-foreground

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

- Base: bg-base-100
- Base foreground: text-base-100-foreground
- Base 100: bg-base-100
- Base 100 foreground: text-base-100-foreground
- Base 200: bg-base-200
- Base 200 foreground: text-base-200-foreground

### Utility Colors

- Border: border-border
- Muted: bg-muted, text-muted-foreground

## Component Usage

### Import Statement
Always begin by importing components from the sappsui library:
```svelte
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
  TabList,
  Tab,
  TabContent,
  Icons
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

### Layout Components

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
- `value: any` (required: value of the item)
**Children:** Icons | Text | I18n | Combination of these
**Relationships:** Must be a direct child of RadioGroup

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
**Children:** TabList | TabContent
**Relationships:** Parent for TabList and TabContent

#### TabList (from sappsui)
**Usage:** `import { TabList } from 'sappsui';`
**Props:**
- `size?: "sm" | "md" | "lg"` (default "md")
- `variant?: "solid" | "underlined" | "bordered" | "light"` (default "solid")
- `radius?: "sm" | "md" | "lg"` (default "md")
- `class?: string` (additional tailwind classes)
**Children:** Tab components
**Relationships:** Must be a direct child of Tabs

#### Tab (from sappsui)
**Usage:** `import { Tab } from 'sappsui';`
**Props:**
- `key?: string` (key of the tab)
- `class?: string` (additional tailwind classes)
**Children:** Icons | Text | I18n | Combination of these
**Relationships:** Must be a direct child of TabList

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
    TabList,
    Tab,
    TabContent,
    Icons
  } from 'sappsui';
  
  // Form state with runes
  const username = $state('');
  const selection = $state('');
  const radioValue = $state('');
  const activeTab = $state('tab1');
</script>

<form>
  <Flex direction="column" class="gap-4">
    <!-- TextField component with input child -->
    <TextField label="Username" variant="bordered" color="primary">
      <input type="text" bind:value={$username} />
    </TextField>
    
    <!-- Select with proper child hierarchy -->
    <Select bind:value={$selection}>
      <SelectTrigger label="Options">
        <Text>{$selection || "Choose an option"}</Text>
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
    <Tabs active={$activeTab}>
      <TabList>
        <Tab key="tab1">
          <Text>First Tab</Text>
        </Tab>
        <Tab key="tab2">
          <Text>Second Tab</Text>
        </Tab>
      </TabList>
      <TabContent>
        <!-- Content changes based on active tab -->
        <Text>Tab content here</Text>
      </TabContent>
    </Tabs>
  </Flex>
</form>
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