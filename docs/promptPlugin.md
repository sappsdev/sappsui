# SappsUI Form Implementation
- Create atractive, moderm and consistent plugins form design
## Critical Requirement
- always import and use existing components from the sappsui library
- Update imports if used multiple components
- on class props always use tailwind

# Dropzone Plugin
**Usage**: `import { Dropzone } from'sappsui';`
**Description**: A dropzone is a visual element that allows users to drag and drop files into a designated area.
## Props
class?: string;
label?: string;
info?: string;
error?: string;
variant?: "flat" | "bordered" | "faded" | "underlined";
color?: "muted" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "danger";
size?: "s-sm" | "s-md" | "s-lg";
radius?: "r-none" | "r-xs" | "r-sm" | "r-md" | "r-lg" | "r-xl" | "r-full";
shadow?: "sh-sm" | "sh-md" | "sh-lg" | "sh-xl" | "sh-none";
accept?: string;
multiple?: boolean;
maxSize?: number; // in bytes
maxFiles?: number;
disabled?: boolean;
uploadToStorage?: boolean;
storageType?: "r2" | "s3";
storageConfig?: {
    endpoint?: string;
    region?: string;
    bucket?: string;
    accessKeyId?: string;
    secretAccessKey?: string;
};

## Mapbox Plugin
**Usage**: `import { Mapbox } from'sappsui';`
**Description**: A mapbox is a visual element that shows a map.
## Props
class?: string;
accessToken?: string;
style?: string;
center?: [number, number];
zoom?: number;
minZoom?: number;
maxZoom?: number;
bearing?: number;
pitch?: number;
interactive?: boolean;
attributionControl?: boolean;
showCurrentLocation?: boolean;
currentLocationColor?: string;
showSearchControl?: boolean;
searchControlPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
searchControlOptions?: {
    placeholder?: string;
    collapsed?: boolean;
    clearOnBlur?: boolean;
    showResultsWhileTyping?: boolean;
};
onSearchResult?: (result: any) => void;
markers?: Array<{
    id?: string;
    lngLat: [number, number] | number[];
    color?: string;
    avatar?: string;
    element?: HTMLElement;
    rotation?: number;
    scale?: number;
    popup?: {
    content: string;
    closeButton?: boolean;
    className?: string;
    closeIcon?: string;
    };
}>;
onLocationClick?: (data: {
    coordinates: [number, number];
    country?: string;
    state?: string;
    city?: string;
    place?: string;
    address?: string;
}) => void;
enableRealTimeUpdates?: boolean;
animateMarkerMovement?: boolean;
animationDuration?: number;
onMarkerUpdate?: (markerId: string, newPosition: [number, number]) => void;