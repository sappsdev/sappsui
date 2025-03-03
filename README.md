# SappsUI Component Library

A modern, responsive UI component library for Svelte 5 applications with a focus on consistency and beautiful design.

## Overview

SappsUI is a comprehensive design system that provides ready-to-use components to build attractive, consistent interfaces across mobile, tablet, and desktop. Built with Svelte 5 runes, it leverages Tailwind CSS for styling flexibility while maintaining a cohesive design language.

## Installation

```bash
npm install sappsui
# or
yarn add sappsui
# or
pnpm add sappsui
```

## Key Features

- **Fully Responsive**: All components work perfectly across mobile, tablet, and desktop
- **Modern Design**: Clean, attractive components with consistent styling
- **Svelte 5 Runes**: Built using Svelte's latest reactive primitives
- **Tailwind Integration**: Customize components using Tailwind utility classes
- **Comprehensive Components**: From simple buttons to complex modal dialogs
- **Internationalization**: Built-in i18n support

## Components

SappsUI includes a wide range of components organized by type:

### Layout Components
- Card, CardHeader, CardBody, CardFooter
- Flex
- Grid

### UI Elements
- Avatar
- Badge
- Button
- Image
- Text
- Code
- Icons
- I18n (internationalization)

### Interactive Components
- Modal, ModalContent, ModalTrigger, ModalClose
- Table, TableHeader, TableColumn, TableBody, TableRow, TableCell
- Tabs, TabsList, Tab, TabContent

## Design System

SappsUI implements a consistent design system with:

### Colors
- **Brand**: primary, secondary, accent, muted
- **Semantic**: info, success, warning, danger
- **Background**: base100, base200, base300
- **Border**: border

### Design Properties
- **Border Radius**: r-none, r-xs, r-sm, r-md, r-lg, r-xl, r-full
- **Shadows**: sh-none, sh-sm, sh-md, sh-lg, sh-xl
- **Sizes**: s-xs, s-sm, s-md, s-lg, s-xl, s-2xl

## Usage

```svelte
<script>
  import { Card, CardHeader, CardBody, CardFooter, Button, Text } from 'sappsui';
  
  let items = $state([
    { title: 'Item 1', description: 'Description for item 1' },
    { title: 'Item 2', description: 'Description for item 2' },
    { title: 'Item 3', description: 'Description for item 3' },
  ]);
</script>

<Card radius="r-md" shadow="sh-md" class="max-w-md">
  <CardHeader class="p-4">
    <Text variant="h4">Card Example</Text>
  </CardHeader>
  <CardBody class="p-4 grid gap-4">
    {#each items as item}
      <div>
        <Text variant="h5">{item.title}</Text>
        <Text variant="p" class="text-sm">{item.description}</Text>
      </div>
    {/each}
  </CardBody>
  <CardFooter class="p-4 flex justify-end gap-2">
    <Button variant="ghost" color="muted">Cancel</Button>
    <Button color="primary">Save</Button>
  </CardFooter>
</Card>
```

## Guidelines

### Component Usage

- Use the appropriate components for their intended purpose
- Don't use layout components (Flex, Grid) for section purposes
- Always use existing components from the SappsUI library
- Follow breakpoint patterns for responsive design
- Use runes state for looping through repeated content

### Best Practices

- Don't add IDs to components directly
- Use Tailwind classes for styling instead of custom CSS
- Don't use CardHeader, CardBody, CardFooter for cards with cover images
- Follow SappsUI's naming conventions for sizes, radiuses, and shadows
