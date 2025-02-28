# Available Components

## Flex:

### Description:

- Flex component for layout

### Props:

- direction?: "row" | "column" | "row-reverse" | "column-reverse" | responsive "column md:row"
- class?: string (additional tailwind classes)

### Children:

- Any component

## Card:

### description:

- Card component for layout

### Props:

- shadow?: "sh-sm" | "sh-md" | "sh-lg" | "sh-xl" | "sh-none", default "sh-md"
- radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full", default "r-md"
- class?: string (additional tailwind classes)

### Children:

- Cardheader | CardBody | CardFooter | Content of the card without padding

## CardHeader:

### Props:

- class?: string (additional tailwind classes)

### Children:

- Any component

## CardBody:

### Props:

- class?: string (additional tailwind classes)

### Children:

- Any component

## CardFooter:

### Props:

- class?: string (additional tailwind classes)

### Children:

- Any component

## Text:

### Props:

- variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "small" | "p", default "p"
- class?: string (additional tailwind classes)

### Children:

- I18n | text content

## I18n:

### description:

- I18n component for translations

### Props:

- key: string (key of the translation)
- props?: object (props of the translation) optional svelte-i18n component

### requires:

- languages used in the application

### returns:

- string (translated text for the given keys)

## Icon:

### Props:

- icon: string (name of the icon of iconify library)
- class: string (additional tailwind classes)

### requires:

- iconify icon sets used in the application, default solar icons

## Button:

### Props:

- variant?: "solid" | "faded" | "bordered" | "light" | "flat" | "ghost" | "shadow", default "solid"
- radius?: "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-none" | "r-full", default "s-md"
- size?: "s-sm" | "s-md" | "s-lg" | "s-xl", default "s-md"
- class?: string (additional tailwind classes)
- color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger", default "primary"

### Children:

- Icon | Text | I18n | Icon + Text

## Image:

### Props:

- src: string (src of the image)
- alt: string (alt of the image)
- layout?: "constrained" | "fullWidth" | "fixed", default "constrained"
- priority?: boolean;
- fallback?: string;
- class?: string (additional tailwind classes)
- shadow?: "sh-sm" | "sh-md" | "sh-lg" | "sh-xl" | "sh-none", default "sh-md"
- radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full", default "r-md"

### Requires:

- image sizes used tailwind sizes



# Available Components

## Tabs:

### Props:

- active?: string (key of the active tab)
- placement?: "top" | "bottom" | "start" | "end", default "top"
- class?: string (additional tailwind classes)

### Children:

- TabList | TabContent

## TabList:

### Props:

- size?: "sm" | "md" | "lg", default "md"
- variant?: "solid" | "underlined" | "bordered" | "light", default "solid"
  radius?: "sm" | "md" | "lg", default "md";
- class?: string (additional tailwind classes)

### children:

- Tab

## Tab:

### Props:

- key?: string (key of the tab)
- class?: string (additional tailwind classes)

### children:

- Icon | Text | I18n | Icon + Text

## TabContent:

### description:

- Tab content component for layout

### Props:

- class: string (additional tailwind classes)

### children:

- any component

# Specific Requirements

- Responsive design
- Use svelte 5 with typescript
- Use TailwindCSS for additional styles
- Only especific colors on parent components if needed
- Props with ? default values, especific only if needed

# Style

- Minimalist, attractive and modern design
- Consistent spacing
- Smooth transitions
