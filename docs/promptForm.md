# SappsUI Form Implementation
- Create atractive, moderm and consistent form design
## Critical Requirement
- always import and use existing components from the sappsui library
- Update imports if used multiple components
- Only use create form purpose by the design system
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
- For Plugins Dropzone | Mapbox add comment to import component

# Runes State
**Description**: used for loop on repeated contents
**Usage sigle**: `let state = $state(state);`
**Usage multiple**: `let state = $state({state, state2, state3});`
## Critical Requirement
- Create a new runes state for each form data

# Form Component
**Usage** `import { Form } from'sappsui';`
**Description**: A form is a collection of input fields and buttons that allow users to submit data to a server.
**Children**: any form component
## Critical Requirement
- DON'T: use FormGroup if you want form with cover image
- Use flex, grid, grid-cols for layout on class prop
- Create submit function and use on onsubmit form prop
## Props
- class: tailwind classes for color, align, responsive or animation styles
- onsubmit: function for submit form

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

# Button Component
**Usage**: `import { Button } from'sappsui';`
**Description**: A button is a clickable element that represents an action.
**Children**: Text | Icon | I18n
## Critical Requirement
- Use for submit, reset, or button type
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

# Checkbox Component
**Usage**: `import { Checkbox } from'sappsui';`
**Description**: A checkbox is a control that allows users to select one or more options from a list.
**Children**: Text | Icon | I18n
## Props
children?: Snippet;
checked?: boolean;
onchange?: (checked: boolean) => void;
disabled?: boolean;
class?: string;
size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl";
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";
iconChecked?: string;
iconUnchecked?: string;

# Icons Component
**Usage**: `import { Icon } from'sappsui';`
**Description**: An icon is a small image that represents an action or a status.
## Critical Requirement
- Use iconify icon names
- use class prop for size, color, responsive or animation styles
## Props
icon?: Iconify Icon;
class?: string;

# RadioGroup Component
**Usage**: `import { RadioGroup } from'sappsui';`
**Description**: A radio group is a collection of radio buttons that allows users to select one option from a list.
**Children**: Radio
## Critical Requirement
- bind:value for value of form
## Props
class?: string;
vertical?: boolean;
value?: string | number | null;
onchange?: (value: any) => void;
size?: "s-sm" | "s-md" | "s-lg";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";

# Radio Component
**Usage**: `import { Radio } from'sappsui';`
**Description**: A radio button is a control that allows users to select one option from a list.
**Children**: Text | Icon | I18n
## Critical Requirement
- value prop for value of form
- children prop for label of form
## Props
class?: string;
value?: string | number;

# Select Component
**Usage**: `import { Select } from'sappsui';`
**Description**: A select is a control that allows users to select one option from a list.
**Children**: SelectTrigger, SelectContent
## Critical Requirement
- bind:value for value of form
- required runes state array for options with id prop
## Props
value?: string | number | null | undefined | unknown;
onchange?: (value: any) => void;

# SelectTrigger Component
**Usage**: `import { SelectTrigger } from'sappsui';`
**Description**: A select trigger is a button that opens the select content.
**Children**: Text | Icon | I18n
## Critical Requirement
- Use this component for select trigger only
- Use find on runes state options for label or custom view
- Use || for placeholder if option is not selected
**Usage** {selectItems.find((item: any) => item.id === value1)?.label || "Select"}
## Props
class?: string;
label?: string;
info?: string;
error?: string;
variant?: "flat" | "bordered" | "faded" | "underlined";
labelPlacement?: "inside" | "outside" | "outside-left";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";
size?: "s-sm" | "s-md" | "s-lg";
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";

# SelectContent Component
**Usage**: `import { SelectContent } from'sappsui';`
**Description**: A select wrapper of options
**Children**: SelectItem

# SelectItem Component
**Usage**: `import { SelectItem } from'sappsui';`
**Description**: A select option
**Children**: Text | Icon | I18n | avatar
## Critical Requirement
- Use this component for select item only
- Use find on runes state options for loop on repeated options
## Props
class?: string;
value?: string | number | null | undefined | unknown;
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";

# Slider Component
**Usage**: `import { Slider } from'sappsui';`
**Description**: A slider is a control that allows users to select a value from a range.
**Children**: Text | Icon | I18n as label
## Critical Requirement
- bind:value | bind:minValue , bind:maxValue for value of form
## Props
disabled?: boolean;
value?: number;
minValue?: number;
maxValue?: number;
min?: number;
max?: number;
step?: number;
label?: string;
hideValue?: boolean;
hideThumb?: boolean;
showMarks?: boolean;
class?: string;
size?: "sm" | "md" | "lg";
radius?: "none" | "sm" | "md" | "lg" | "full";
color?: "foreground" | "primary" | "secondary" | "success" | "warning" | "danger";

# Toggle Component
**Usage**: `import { Toggle } from'sappsui';`
**Description**: A toggle is a control that allows users to switch between two states.
**Children**: Text | Icon | I18n as label
## Critical Requirement
- bind:value for value of form
## Props
checked?: boolean;
onchange?: (checked: boolean) => void;
disabled?: boolean;
class?: string;
size?: "s-xs" | "s-sm" | "s-md" | "s-lg" | "s-xl";
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";
iconOn?: string;
iconOff?: string;

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




