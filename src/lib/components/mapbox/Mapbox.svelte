<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import mapboxgl from 'mapbox-gl';
  import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
  import { cn } from "$lib/utils/index.js";
  import 'mapbox-gl/dist/mapbox-gl.css';
  import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

  type Props = {
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
    enableRealTimeUpdates?: boolean; // Enable real-time marker updates
    animateMarkerMovement?: boolean; // Animate marker movement
    animationDuration?: number; // Duration of animation in milliseconds
    onMarkerUpdate?: (markerId: string, newPosition: [number, number]) => void; // Callback when marker is updated
  };

  const {
    class: className,
    accessToken,
    style = 'mapbox://styles/mapbox/standard',
    center = [0, 0],
    zoom = 9,
    minZoom,
    maxZoom,
    bearing = 0,
    pitch = 0,
    interactive = true,
    attributionControl = false,
    showCurrentLocation = false,
    currentLocationColor = '#0078ff',
    showSearchControl = false,
    searchControlPosition = 'top-right',
    searchControlOptions = {},
    onSearchResult,
    markers = [],
    onLocationClick,
    enableRealTimeUpdates = false,
    animateMarkerMovement = true,
    animationDuration = 500,
    onMarkerUpdate
  }: Props = $props();

  let mapContainer: HTMLDivElement;
  let map: mapboxgl.Map | null = $state(null);
  let mapMarkers: mapboxgl.Marker[] = $state([]);
  let currentLocationMarker: mapboxgl.Marker | null = $state(null);
  let isLocating = $state(false);
  let locationError = $state<string | null>(null);
  let clickMarker: mapboxgl.Marker | null = $state(null);
  let geocoder: MapboxGeocoder | null = $state(null);

  onMount(() => {
    if (!mapContainer) return;
    
    (mapboxgl as any).accessToken = accessToken;

    map = new mapboxgl.Map({
      container: mapContainer,
      style,
      center,
      zoom,
      minZoom,
      maxZoom,
      bearing,
      pitch,
      interactive,
      attributionControl
    });
    
    if (showCurrentLocation) {
      map.on('load', () => {
        getCurrentLocation();
      });
    }

    if (markers.length > 0) {
      markers.forEach(marker => {
        // Create marker options
        const markerOptions: mapboxgl.MarkerOptions = {
          color: marker.color,
          scale: marker.scale || 1,
          rotation: marker.rotation || 0,
          draggable: enableRealTimeUpdates // Allow dragging if real-time updates are enabled
        };

        // Create custom element for avatar if provided
        if (marker.avatar) {
          const el = document.createElement('div');
          el.className = 'sappsui-mapbox-marker-avatar';
          
          // Check if avatar is an image URL or an icon class
          if (marker.avatar.startsWith('http') || marker.avatar.startsWith('/')) {
            // It's an image URL
            el.style.backgroundImage = `url(${marker.avatar})`;
          } else {
            // It's a CSS class (icon)
            el.classList.add(marker.avatar);
          }
          
          markerOptions.element = el;
        } else if (marker.element) {
          // Use custom element if provided
          markerOptions.element = marker.element;
        }
        
        // Create the marker
        const mapMarker = new mapboxgl.Marker(markerOptions)
          .setLngLat(marker.lngLat as [number, number])
          .addTo(map!);
        
        // Store marker ID for later reference
        const markerId = marker.id || `marker-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        (mapMarker as any).markerId = markerId;
        
        if (marker.popup) {
          const popup = new mapboxgl.Popup({
            closeButton: marker.popup.closeButton ?? true,
            className: cn('sappsui-mapbox-popup', marker.popup.className)
          })
            .setHTML(marker.popup.content);
          
          mapMarker.setPopup(popup);
          
          // If we have a custom close icon, replace the default one after popup is added
          if (marker.popup.closeIcon && marker.popup.closeButton !== false) {
            popup.on('open', () => {
              setTimeout(() => {
                const popupElement = popup.getElement();
                const closeButton = popupElement?.querySelector('.mapboxgl-popup-close-button');
                if (closeButton) {
                  closeButton.innerHTML = '';
                  const iconElement = document.createElement('div');
                  iconElement.className = 'sappsui-mapbox-popup-close-icon';

                  closeButton.appendChild(iconElement);
                }
              }, 0);
            });
          }
        }
        
        // Add drag end event for real-time updates
        if (enableRealTimeUpdates) {
          mapMarker.on('dragend', () => {
            const newPosition = mapMarker.getLngLat().toArray() as [number, number];
            if (onMarkerUpdate) {
              onMarkerUpdate((mapMarker as any).markerId, newPosition);
            }
          });
        }
        
        mapMarkers.push(mapMarker);
      });
    }

    map.on('load', () => {
      const mapboxElements = mapContainer.querySelectorAll('.mapboxgl-ctrl-logo, .mapboxgl-ctrl-attrib');
      mapboxElements.forEach(el => {
        (el as HTMLElement).style.display = 'none';
      });
    });
    
    if (showSearchControl) {
      geocoder = new MapboxGeocoder({
        accessToken: accessToken as string,
        mapboxgl: mapboxgl,
        placeholder: searchControlOptions.placeholder || 'Search for places',
        collapsed: searchControlOptions.collapsed || false,
        clearOnBlur: searchControlOptions.clearOnBlur || false
      });
      
      map.addControl(geocoder, searchControlPosition);
      
      if (typeof onSearchResult === 'function') {
        geocoder.on('result', (event) => {
          onSearchResult(event.result);
        });
      }
    }

    map.on('click', async (e) => {
      if (clickMarker) {
        clickMarker.remove();
      }

      clickMarker = new mapboxgl.Marker()
        .setLngLat([e.lngLat.lng, e.lngLat.lat])
        .addTo(map!);

      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.lngLat.lng},${e.lngLat.lat}.json?access_token=${accessToken}`
        );
        const data = await response.json();
        const features = data.features[0];

        const locationData = {
          coordinates: [e.lngLat.lng, e.lngLat.lat] as [number, number],
          country: features.context?.find((c: any) => c.id.startsWith('country.'))?.text,
          state: features.context?.find((c: any) => c.id.startsWith('region.'))?.text,
          city: features.context?.find((c: any) => c.id.startsWith('place.'))?.text,
          place: features.text,
          address: features.place_name
        };

        if (typeof onLocationClick === 'function') {
          onLocationClick(locationData);
        }
      } catch (error) {
        console.error('Error fetching location details:', error);
      }
    });
  });

  onDestroy(() => {
    mapMarkers.forEach(marker => marker.remove());
    
    if (geocoder) {
      geocoder = null;
    }
    
    if (map) {
      map.remove();
      map = null;
    }
  });

  function addMarker(lngLat: [number, number], options?: {
    id?: string;
    color?: string;
    avatar?: string;
    scale?: number;
    rotation?: number;
    popup?: {
      content: string;
      closeButton?: boolean;
      className?: string;
      closeIcon?: string;
    };
  }) {
    if (!map) return;
    
    const markerOptions: mapboxgl.MarkerOptions = {
      color: options?.color,
      scale: options?.scale || 1,
      rotation: options?.rotation || 0,
      draggable: enableRealTimeUpdates
    };

    // Create custom element for avatar if provided
    if (options?.avatar) {
      const el = document.createElement('div');
      el.className = 'sappsui-mapbox-marker-avatar';
      
      if (options.avatar.startsWith('http') || options.avatar.startsWith('/')) {
        el.style.backgroundImage = `url(${options.avatar})`;
      } else {
        el.classList.add(options.avatar);
      }
      
      markerOptions.element = el;
    }
    
    const marker = new mapboxgl.Marker(markerOptions)
      .setLngLat(lngLat)
      .addTo(map);
    
    // Store marker ID for later reference
    const markerId = options?.id || `marker-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    (marker as any).markerId = markerId;
    
    // Add popup if provided
    if (options?.popup) {
      const popup = new mapboxgl.Popup({
        closeButton: options.popup.closeButton ?? true,
        className: cn('sappsui-mapbox-popup', options.popup.className)
      })
        .setHTML(options.popup.content);
      
      marker.setPopup(popup);
    }
    
    // Add drag end event for real-time updates
    if (enableRealTimeUpdates) {
      marker.on('dragend', () => {
        const newPosition = marker.getLngLat().toArray() as [number, number];
        if (onMarkerUpdate) {
          onMarkerUpdate((marker as any).markerId, newPosition);
        }
      });
    }
    
    mapMarkers.push(marker);
    return { marker, id: markerId };
  }

  function removeAllMarkers() {
    mapMarkers.forEach(marker => marker.remove());
    mapMarkers = [];
  }
  
  function getCurrentLocation() {
    if (!map) return;
    
    isLocating = true;
    locationError = null;
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          
          // Remove existing current location marker if it exists
          if (currentLocationMarker) {
            currentLocationMarker.remove();
          }
          

          currentLocationMarker = new mapboxgl.Marker({
            color: currentLocationColor,
            scale: 1.2
          })
            .setLngLat([longitude, latitude])
            .addTo(map!);

          map!.flyTo({
            center: [longitude, latitude],
            zoom: 14,
            essential: true
          });
          
          isLocating = false;
        },
        (error) => {
          console.error('Error getting location:', error);
          locationError = 'Could not get your current location. Please check your browser permissions.';
          isLocating = false;
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    } else {
      locationError = 'Geolocation is not supported by your browser.';
      isLocating = false;
    }
  }

  $effect(() => {
    if (map && showCurrentLocation) {
      getCurrentLocation();
    }
  });

  $effect(() => {
    if (map) {
      map.setStyle(style);
    }
  });

  function updateMarkerPosition(markerId: string, newPosition: [number, number], animate = animateMarkerMovement) {
    if (!map) return;
    
    const markerToUpdate = mapMarkers.find(marker => (marker as any).markerId === markerId);
    
    if (markerToUpdate) {
      if (animate) {
        const markerElement = markerToUpdate.getElement();
        if (markerElement) {
          markerElement.style.setProperty('--animation-duration', `${animationDuration}ms`);
          
          markerElement.classList.remove('animate-marker-movement');
          
          void markerElement.offsetWidth;
          
          markerElement.classList.add('animate-marker-movement');
          
          setTimeout(() => {
            markerElement.classList.remove('animate-marker-movement');
          }, animationDuration);
        }
      } else {
        const markerElement = markerToUpdate.getElement();
        if (markerElement) {
          markerElement.setAttribute('data-dragging', 'true');
          setTimeout(() => {
            markerElement.removeAttribute('data-dragging');
          }, 50);
        }
      }
      
      markerToUpdate.setLngLat(newPosition);
      
      if (onMarkerUpdate) {
        onMarkerUpdate(markerId, newPosition);
      }
      
      return markerToUpdate;
    }
    
    return null;
  }
  
  export function updateMarkers(updates: Array<{id: string, position: [number, number], animate?: boolean}>) {
    if (!map) return;
    
    updates.forEach(update => {
      updateMarkerPosition(update.id, update.position, update.animate !== undefined ? update.animate : animateMarkerMovement);
    });
  }
  
  function getMarkerById(markerId: string) {
    return mapMarkers.find(marker => (marker as any).markerId === markerId);
  }
</script>

<div bind:this={mapContainer} class={cn("size-full rounded-xl", className)}></div>

<style>
  :global(.mapboxgl-ctrl-logo),
  :global(.mapboxgl-ctrl-attrib) {
    display: none !important;
  }
  
  :global(.mapboxgl-ctrl-geocoder) {
    font-family: var(--font-family, inherit);
    box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
    border-radius: var(--radius-md, 0.375rem);
    min-width: 250px;
  }
  
  :global(.mapboxgl-ctrl-geocoder--input) {
    height: 36px;
    padding: 6px 35px;
    font-size: 14px;
  }
  
  :global(.mapboxgl-ctrl-geocoder--icon) {
    top: 8px;
  }
  
  :global(.mapboxgl-ctrl-geocoder--button) {
    width: 24px;
    height: 24px;
    top: 6px;
  }
  
  :global(.sappsui-mapbox-marker-avatar) {
    width: 30px;
    height: 30px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform var(--animation-duration, 500ms) ease;
  }
  
  :global(.animate-marker-movement) {
    transition: transform var(--animation-duration, 500ms) cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  :global([data-dragging="true"]) {
    transition: none !important;
  }
  
  :global(.sappsui-mapbox-popup) {
    font-family: var(--font-family, inherit);
  }
  
  :global(.sappsui-mapbox-popup .mapboxgl-popup-content) {
    padding: 1rem;
    border-radius: var(--radius-md, 0.375rem);
    box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06));
  }
  
  :global(.sappsui-mapbox-popup .mapboxgl-popup-close-button) {
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color, inherit);
    opacity: 0.6;
    transition: opacity 0.2s ease;
  }
  
  :global(.sappsui-mapbox-popup .mapboxgl-popup-close-button:hover) {
    opacity: 1;
    background: none;
  }
</style>