# Available Form Components
## TextField:

### description:

- TextField component for forms input OR textarea

### Props:

- class?: string (additional tailwind classes)
- label?: string (label of the input)
- info?: string (info of the input)
- error?: string (error of the input)
- variant?: "flat" | "bordered" | "faded" | "underlined", default "flat"
- labelPlacement?: "inside" | "outside" | "outside-left", default "inside"
- size?: "s-sm" | "s-md" | "s-lg", default "s-md"
- radius?: "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-none" | "r-full", default "r-md"
- color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger", default "muted"

### children:

- input | textarea, with props of the input or textarea and rune state for bind value

## Select:

### description:

- Select component for forms input

### Props:

- class?: string (additional tailwind classes)
- bind:value?: any (initial selected value)

### Requires:
- SelectTrigger | SelectContent



### children:
- SelectTrigger | SelectContent

## SelectTrigger:
### Props:
- class?: string (additional tailwind classes)
- label?: string (label of the input)
- info?: string (info of the input)
- error?: string (error of the input)
- variant?: "flat" | "bordered" | "faded" | "underlined", default "flat"
- labelPlacement?: "inside" | "outside" | "outside-left", default "inside"
- size?: "s-sm" | "s-md" | "s-lg", default "s-md"
- radius?: "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-none" | "r-full", default "r-md"
- color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger", default "muted"

### children:
- Icon | Text | I18n | Icon + Text

## SelectContent:
### Props:
- class?: string (additional tailwind classes)
### children:
- SelectItem

## SelectItem:
### Props:
- class?: string (additional tailwind classes)
- value: any (value of the item)

### children:
- Icon | Text | I18n | Icon + Text  


## RadioGroup:
### description:
- RadioGroup component for forms input
### Props:
- class?: string (additional tailwind classes)
- bind:value?: any (initial selected value)
### children:
- Radio

## Radio:
### Props:
- class?: string (additional tailwind classes)
- value: any (value of the item)
### children:
- Icon | Text | I18n | Icon + Text

# Specific Requirements

- Responsive design
- Use svelte 5 with typescript
- Use TailwindCSS for additional styles
- Only especific colors on parent components if needed
- Props with ? default values, especific only if needed
- Envolving components with form elment
- Create a formState with runes 