<script lang="ts">
  import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Modal,
    ModalContent,
    ModalTrigger,
    ModalClose,
    Button,
    Text,
  } from "$lib/index.js";

  let basicModal = false;
  let sizeModal = false;
  let radiusModal = false;
  let placementModal = false;

  function closeAllModals() {
    basicModal = false;
    sizeModal = false;
    radiusModal = false;
    placementModal = false;
  }
</script>

<div class="container mx-auto p-6 space-y-8">
  <h1 class="text-3xl font-bold">Ejemplos de Modales</h1>

  <!-- Modal Básico -->
  <div class="space-y-2">
    <h2 class="text-xl font-semibold">Modal Básico</h2>
    <Button onclick={() => (basicModal = true)}>Abrir Modal Básico</Button>

    <Modal bind:isOpen={basicModal} size="s-md" radius="r-md">
      <ModalContent>
        <Card>
          <CardHeader>
            <Text>Modal Básico</Text>
            <Text>Este es un modal básico con componente Card</Text>
            <ModalClose
              bind:isOpen={basicModal}
              class="absolute right-4 top-4"
            />
          </CardHeader>
          <CardBody>
            <p>
              Este es un ejemplo de contenido dentro de un modal. Puedes usar el
              componente Card para estructurar tu contenido.
            </p>
          </CardBody>
          <CardFooter class="flex justify-end gap-2">
            <Button onclick={() => (basicModal = false)}>Cancelar</Button>
            <Button>Guardar</Button>
          </CardFooter>
        </Card>
      </ModalContent>
    </Modal>
  </div>

  <!-- Modal con diferentes tamaños -->
  <div class="space-y-2">
    <h2 class="text-xl font-semibold">Tamaños de Modal</h2>
    <div class="flex flex-wrap gap-2">
      <Button
        onclick={() => {
          sizeModal = true;
        }}>Tamaño Pequeño (s-sm)</Button
      >
      <Button
        onclick={() => {
          sizeModal = true;
        }}>Tamaño Mediano (s-md)</Button
      >
      <Button
        onclick={() => {
          sizeModal = true;
        }}>Tamaño Grande (s-lg)</Button
      >
    </div>

    <Modal bind:isOpen={sizeModal} size="s-lg" radius="r-md">
      <ModalContent>
        <Card>
          <CardHeader>
            <Text>Modal con diferentes tamaños</Text>
            <Text>Este modal está configurado con tamaño grande (s-lg)</Text>
          </CardHeader>
          <CardBody>
            <p>
              Puedes configurar el tamaño del modal usando la propiedad
              size="s-sm" | "s-md" | "s-lg".
            </p>
            <div class="mt-4 grid grid-cols-3 gap-4">
              <div class="border p-4 rounded text-center">s-sm</div>
              <div class="border p-4 rounded text-center">s-md</div>
              <div class="border p-4 rounded bg-muted text-center">s-lg</div>
            </div>
          </CardBody>
          <CardFooter class="flex justify-end gap-2">
            <Button onclick={() => (sizeModal = false)}>Cerrar</Button>
          </CardFooter>
        </Card>
      </ModalContent>
    </Modal>
  </div>

  <!-- Modal con diferentes radios -->
  <div class="space-y-2">
    <h2 class="text-xl font-semibold">Radios de Modal</h2>
    <div class="flex flex-wrap gap-2">
      <Button
        onclick={() => {
          radiusModal = true;
        }}>Sin Radio (r-none)</Button
      >
      <Button
        onclick={() => {
          radiusModal = true;
        }}>Radio Medio (r-md)</Button
      >
      <Button
        onclick={() => {
          radiusModal = true;
        }}>Radio Completo (r-full)</Button
      >
    </div>

    <Modal bind:isOpen={radiusModal} size="s-md" radius="r-xl">
      <ModalContent>
        <Card class="border-0">
          <CardHeader>
            <Text>Modal con diferentes radios</Text>
            <Text
              >Este modal está configurado con radio extra grande (r-xl)</Text
            >
          </CardHeader>
          <CardBody>
            <p>
              Puedes configurar el radio del modal usando la propiedad radius
              con cualquier valor desde r-none hasta r-full.
            </p>
            <div class="mt-4 grid grid-cols-3 gap-4">
              <div class="border rounded-none p-4 text-center">r-none</div>
              <div class="border rounded-md p-4 text-center">r-md</div>
              <div class="border rounded-xl p-4 text-center bg-muted">r-xl</div>
            </div>
          </CardBody>
          <CardFooter class="flex justify-end gap-2">
            <Button onclick={() => (radiusModal = false)}>Cerrar</Button>
          </CardFooter>
        </Card>
      </ModalContent>
    </Modal>
  </div>
</div>
