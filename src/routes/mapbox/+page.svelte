<script lang="ts">
  import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Icons,
    Page,
    Text,
    Mapbox
  } from "$lib/index.js";

  // Sample access token - this should be replaced with a real token in production
  const mapboxAccessToken = "pk.eyJ1Ijoic2FwcHNkZXYiLCJhIjoiY203anhmNzN4MGNiZzJ4cHN3cDY1b2JkNSJ9.i4tJrEeUDPPCasE5GLm5ew";

  // Sample locations
  const newYork = [-74.006, 40.7128];
  const london = [-0.1278, 51.5074];
  const tokyo = [139.6917, 35.6895];
  const sydney = [151.2093, -33.8688];

  // Sample markers
  const cityMarkers = [
    {
      lngLat: newYork,
      color: "#FF5733",
      popup: {
        content: "<h3 class='text-lg font-bold mb-1'>New York City</h3><p>The Big Apple</p>",
        closeButton: true,
        closeIcon: "solar:close-circle-bold",
        className: "custom-popup"
      }
    },
    {
      lngLat: london,
      color: "#33A1FF",
      popup: {
        content: "<h3 class='text-lg font-bold mb-1'>London</h3><p>The City of Westminster</p>",
        closeButton: true,
        closeIcon: "solar:close-square-bold",
        className: "custom-popup"
      }
    }
  ];

  // Sample styles
  const mapStyles = {
    streets: "mapbox://styles/mapbox/streets-v12",
    outdoors: "mapbox://styles/mapbox/outdoors-v12",
    light: "mapbox://styles/mapbox/light-v11",
    dark: "mapbox://styles/mapbox/dark-v11",
    satellite: "mapbox://styles/mapbox/satellite-v9",
    satelliteStreets: "mapbox://styles/mapbox/satellite-streets-v12"
  };

  let selectedStyle = mapStyles.outdoors;
  
  // Real-time tracking example data
  const vehicleMarkers = [
    {
      id: "vehicle-1",
      lngLat: [-73.9857, 40.7484],  // Near Times Square
      avatar: "fluent:vehicle-car-24-filled",
      popup: {
        content: "<h3 class='text-lg font-bold mb-1'>Taxi #1</h3><p>En route to destination</p>",
        closeButton: true
      }
    },
    {
      id: "vehicle-2",
      lngLat: [-73.9950, 40.7362],  // Near Madison Square Garden
      avatar: "fluent:vehicle-truck-24-filled",
      popup: {
        content: "<h3 class='text-lg font-bold mb-1'>Delivery Truck</h3><p>Delivering packages</p>",
        closeButton: true
      }
    }
  ];
  
  // Reference to the Mapbox component for real-time updates
  let mapboxRef: any;
  
  // Simulate vehicle movement
  function simulateVehicleMovement() {
    console.log("Simulating vehicle movement...");
    // Update vehicle positions
    const updates = vehicleMarkers.map(vehicle => {
      // Generate small random movement
      const newLng = vehicle.lngLat[0] + (Math.random() * 0.002 - 0.001);
      const newLat = vehicle.lngLat[1] + (Math.random() * 0.002 - 0.001);
      
      // Update the stored position
      vehicle.lngLat = [newLng, newLat];
      
      return {
        id: vehicle.id,
        position: [newLng, newLat] as [number, number],
        animate: true
      };
    });
    
    // Update markers on the map
    if (mapboxRef && mapboxRef.updateMarkers) {
      mapboxRef.updateMarkers(updates);
    }
  }
  
  // Start simulation when component is mounted
  let movementInterval: number;
  
  function startSimulation() {
    if (!movementInterval) {
      movementInterval = setInterval(simulateVehicleMovement, 2000) as unknown as number;
    }
  }
  
  function stopSimulation() {
    if (movementInterval) {
      clearInterval(movementInterval);
      movementInterval = 0;
    }
  }
</script>

<Page class="p-4 gap-4 pb-16">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Mapbox</Text>
    <Text>
      A component that integrates Mapbox GL JS for interactive maps with customizable markers, popups, and styles.
    </Text>
  </Flex>

  <!-- Basic Map Example -->
  <Flex direction="column" class="gap-2">
    <Text variant="h4">Basic Map</Text>
    <Card>
      <CardBody class="center">
        <Card class="w-full max-w-3xl h-[300px]">
          <CardBody>
            <Mapbox
              accessToken={mapboxAccessToken}
              center={[-96, 37.8]}
              zoom={3}
            showCurrentLocation
            showSearchControl
            />
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  </Flex>

  <!-- Map with Markers -->
  <Flex direction="column" class="gap-2">
    <Text variant="h4">Map with Markers and Popups</Text>
    <Card>
      <CardBody class="center">
        <Card class="w-full max-w-3xl h-[300px]">
          <CardBody>
            <Mapbox
              accessToken={mapboxAccessToken}
              center={[-40, 40]}
              zoom={2}
              markers={cityMarkers as { lngLat: [number, number]; color?: string; popup?: { content: string; closeButton?: boolean; closeIcon?: string; className?: string; } }[]}
            />
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  </Flex>

  <!-- Map Styles -->
  <Flex direction="column" class="gap-2">
    <Text variant="h4">Map Styles</Text>
    <Card>
      <CardHeader>
        <Flex class="gap-2 flex-wrap">
          <Button size="s-sm" onclick={() => selectedStyle = mapStyles.streets}>Streets</Button>
          <Button size="s-sm" onclick={() => selectedStyle = mapStyles.outdoors}>Outdoors</Button>
          <Button size="s-sm" onclick={() => selectedStyle = mapStyles.light}>Light</Button>
          <Button size="s-sm" onclick={() => selectedStyle = mapStyles.dark}>Dark</Button>
          <Button size="s-sm" onclick={() => selectedStyle = mapStyles.satellite}>Satellite</Button>
          <Button size="s-sm" onclick={() => selectedStyle = mapStyles.satelliteStreets}>Satellite Streets</Button>
        </Flex>
      </CardHeader>
      <CardBody class="center">
        <Card class="w-full max-w-3xl h-[300px]">
          <CardBody>
            <Mapbox
              accessToken={mapboxAccessToken}
              style={selectedStyle}
              center={[0, 20]}
              zoom={2}
            />
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  </Flex>

  <!-- Interactive Map Features -->
  <Flex direction="column" class="gap-2">
    <Text variant="h4">Interactive Map Features</Text>
    <Card>
      <CardBody class="center">
        <Card class="w-full max-w-3xl h-[300px]">
          <CardBody>
            <Mapbox
              accessToken={mapboxAccessToken}
              center={sydney as [number, number]}
              zoom={12}
              pitch={45}
              bearing={-45}
            />
          </CardBody>
        </Card>
      </CardBody>
      <CardFooter>
        <Text class="text-sm text-gray-600">
          This map demonstrates pitch and bearing settings for a 3D-like view of Sydney.
        </Text>
      </CardFooter>
    </Card>
  </Flex>

  <!-- Click-to-Add Marker Example -->
  <Flex direction="column" class="gap-2">
    <Text variant="h4">Click-to-Add Marker</Text>
    <Card>
      <CardBody class="center">
        <Card class="w-full max-w-3xl h-[300px]">
          <CardBody>
            <Mapbox
              accessToken={mapboxAccessToken}
              center={[-3.7038, 40.4168]}
              zoom={5}
              onLocationClick={(data) => {
                console.log('Location clicked:', data);
                // You can use this data in your application
                alert(`Clicked at: ${data.coordinates}\nCountry: ${data.country || 'Unknown'}\nState/Region: ${data.state || 'Unknown'}\nCity: ${data.city || 'Unknown'}`);
              }}
            />
          </CardBody>
        </Card>
      </CardBody>
      <CardFooter>
        <Text class="text-sm text-gray-600">
          Click anywhere on the map to add a marker. The marker will be removed when you click elsewhere. Location details (country, state, city) will be displayed in an alert.
        </Text>
      </CardFooter>
    </Card>
  </Flex>

  <!-- Real-time Location Tracking Example -->
  <Flex direction="column" class="gap-2">
    <Text variant="h4">Real-time Location Tracking</Text>
    <Card>
      <CardHeader>
        <Flex class="gap-2">
          <Button size="s-sm" onclick={startSimulation}>Start Simulation</Button>
          <Button size="s-sm" variant="bordered" onclick={stopSimulation}>Stop Simulation</Button>
        </Flex>
      </CardHeader>
      <CardBody class="center">
        <Card class="w-full max-w-3xl h-[300px]">
          <CardBody>
            <Mapbox
              bind:this={mapboxRef}
              accessToken={mapboxAccessToken}
              center={[-73.99, 40.73]}
              zoom={13}
              markers={vehicleMarkers}
              enableRealTimeUpdates={true}
              animateMarkerMovement={true}
              animationDuration={500}
              onMarkerUpdate={(markerId, newPosition) => {
                console.log(`Marker ${markerId} moved to:`, newPosition);
                // You can use this callback to update your application state
              }}
            />
          </CardBody>
        </Card>
      </CardBody>
      <CardFooter>
        <Text class="text-sm text-gray-600">
          This example demonstrates real-time marker updates with animation. The markers simulate moving vehicles with custom icons. 
          You can start/stop the simulation with the buttons above. In a real application, this could be used for tracking delivery vehicles, ride-sharing services, or other moving objects.
        </Text>
      </CardFooter>
    </Card>
  </Flex>

  <!-- Component API Reference -->
  <Flex direction="column" class="gap-2 mt-4">
    <Text variant="h4">Component API Reference</Text>
    <Card>
      <CardBody>
        <Text variant="h5" class="mb-2">Props</Text>
        <ul class="list-disc pl-5 space-y-2">
          <li><code>accessToken: string</code> - Your Mapbox access token</li>
          <li><code>style?: string</code> - Map style URL (default: 'mapbox://styles/mapbox/streets-v12')</li>
          <li><code>center?: [number, number]</code> - Initial map center coordinates [longitude, latitude] (default: [0, 0])</li>
          <li><code>zoom?: number</code> - Initial zoom level (default: 9)</li>
          <li><code>minZoom?: number</code> - Minimum zoom level</li>
          <li><code>maxZoom?: number</code> - Maximum zoom level</li>
          <li><code>bearing?: number</code> - Map rotation in degrees (default: 0)</li>
          <li><code>pitch?: number</code> - Map tilt in degrees (default: 0)</li>
          <li><code>interactive?: boolean</code> - Whether the map can be interacted with (default: true)</li>
          <li><code>attributionControl?: boolean</code> - Whether to show attribution control (default: true)</li>
          <li><code>markers?: Array</code> - Array of marker objects with the following properties:
            <ul class="list-disc pl-5 mt-1">
              <li><code>lngLat: [number, number]</code> - Longitude and latitude coordinates</li>
              <li><code>color?: string</code> - Marker color (hex code)</li>
              <li><code>popup?: object</code> - Popup configuration with these properties:
                <ul class="list-disc pl-5 mt-1">
                  <li><code>content: string</code> - HTML content for the popup</li>
                  <li><code>closeButton?: boolean</code> - Whether to show a close button</li>
                  <li><code>closeIcon?: string</code> - Icon name for the close button (uses Icons component)</li>
                  <li><code>className?: string</code> - Additional CSS class for styling the popup</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><code>onLocationClick?: Function</code> - Callback function when map is clicked, returns location data</li>
          <li><code>enableRealTimeUpdates?: boolean</code> - Enable real-time marker updates and draggable markers (default: false)</li>
          <li><code>animateMarkerMovement?: boolean</code> - Animate marker movement when position is updated (default: true)</li>
          <li><code>animationDuration?: number</code> - Duration of marker movement animation in milliseconds (default: 500)</li>
          <li><code>onMarkerUpdate?: Function</code> - Callback function when marker position is updated, receives markerId and newPosition</li>
          <li><code>class?: string</code> - Additional CSS classes</li>
        </ul>
      </CardBody>
    </Card>
  </Flex>

  <!-- Important Note -->
  <Card>
    <CardBody>
      <Flex class="items-center gap-2">
        <Icons icon="fluent:warning-24-regular" class="text-amber-500 w-6 h-6" />
        <Text>
          Note: Replace <code>YOUR_MAPBOX_ACCESS_TOKEN</code> with your actual Mapbox access token to make the maps work.
        </Text>
      </Flex>
    </CardBody>
  </Card>
</Page>