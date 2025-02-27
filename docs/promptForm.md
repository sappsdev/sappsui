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

## Select:

### description:

- Select component for forms input

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


# Specific Requirements

- Responsive design
- Use svelte 5 with typescript
- Use TailwindCSS for additional styles
- Only especific colors on parent components if needed
- Props with ? default values, especific only if needed
- Envolving components with form elment
- Create a formState with runes 