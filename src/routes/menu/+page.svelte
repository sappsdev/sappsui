<script lang="ts">
  import { Menu, MenuCollapse, MenuItem, MenuTitle } from "$lib/index.js";
</script>

<div class="p-4">
  <h2 class="text-xl font-bold mb-4">Menú Horizontal</h2>
  <Menu size="s-md" radius="r-md" color="primary">
    <MenuItem href="/dashboard">Dashboard</MenuItem>
    <MenuItem href="/users">Usuarios</MenuItem>
    <MenuItem href="/settings">Configuración</MenuItem>
    <MenuItem href="/menu">menu</MenuItem>
  </Menu>

  <h2 class="text-xl font-bold mt-8 mb-4">Menú Vertical</h2>
  <Menu vertical size="s-md" radius="r-md" color="secondary">
    <MenuTitle>GENERAL</MenuTitle>
    <MenuItem href="/dashboard">Dashboard</MenuItem>
    <MenuItem href="/analytics">Analíticas</MenuItem>

    <MenuTitle>ADMINISTRACIÓN</MenuTitle>
    <MenuCollapse title="Gestión de usuarios" defaultOpen={true}>
      <MenuItem href="/users">Lista de usuarios</MenuItem>
      <MenuItem href="/users/new">Nuevo usuario</MenuItem>
      <MenuItem href="/users/roles">Roles y permisos</MenuItem>
    </MenuCollapse>

    <MenuCollapse title="Configuración">
      <MenuItem href="/settings/profile">Perfil</MenuItem>
      <MenuItem href="/settings/security">Seguridad</MenuItem>
      <MenuItem href="/settings/notifications">Notificaciones</MenuItem>
    </MenuCollapse>

    <MenuTitle>OTROS</MenuTitle>
    <MenuItem href="/help" color="info">Ayuda</MenuItem>
    <MenuItem href="/logout" color="danger">Cerrar sesión</MenuItem>
  </Menu>

  <h2 class="text-xl font-bold mt-8 mb-4">Tamaños</h2>
  <div class="space-y-4">
    <Menu vertical size="s-sm" radius="r-sm" color="muted">
      <MenuTitle>MENÚ PEQUEÑO</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
      <MenuCollapse title="Más opciones">
        <MenuItem href="/option3">Opción 3</MenuItem>
        <MenuItem href="/option4">Opción 4</MenuItem>
      </MenuCollapse>
    </Menu>

    <Menu vertical size="s-md" radius="r-md" color="accent">
      <MenuTitle>MENÚ MEDIANO</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
      <MenuCollapse title="Más opciones">
        <MenuItem href="/option3">Opción 3</MenuItem>
        <MenuItem href="/option4">Opción 4</MenuItem>
      </MenuCollapse>
    </Menu>

    <Menu vertical size="s-lg" radius="r-lg" color="success">
      <MenuTitle>MENÚ GRANDE</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
      <MenuCollapse title="Más opciones">
        <MenuItem href="/option3">Opción 3</MenuItem>
        <MenuItem href="/option4">Opción 4</MenuItem>
      </MenuCollapse>
    </Menu>
  </div>

  <h2 class="text-xl font-bold mt-8 mb-4">Bordes redondeados</h2>
  <div class="space-y-4">
    <Menu vertical size="s-md" radius="r-none" color="primary">
      <MenuTitle>SIN BORDE (r-none)</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
    </Menu>

    <Menu vertical size="s-md" radius="r-md" color="secondary">
      <MenuTitle>BORDE MEDIO (r-md)</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
    </Menu>

    <Menu vertical size="s-md" radius="r-full" color="warning">
      <MenuTitle>BORDE COMPLETO (r-full)</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
    </Menu>
  </div>

  <h2 class="text-xl font-bold mt-8 mb-4">Colores</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <Menu vertical size="s-sm" radius="r-md" color="muted">
      <MenuTitle>MUTED</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
    </Menu>

    <Menu vertical size="s-sm" radius="r-md" color="primary">
      <MenuTitle>PRIMARY</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
    </Menu>

    <Menu vertical size="s-sm" radius="r-md" color="secondary">
      <MenuTitle>SECONDARY</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
    </Menu>

    <Menu vertical size="s-sm" radius="r-md" color="accent">
      <MenuTitle>ACCENT</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
    </Menu>

    <Menu vertical size="s-sm" radius="r-md" color="info">
      <MenuTitle>INFO</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
    </Menu>

    <Menu vertical size="s-sm" radius="r-md" color="success">
      <MenuTitle>SUCCESS</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
    </Menu>

    <Menu vertical size="s-sm" radius="r-md" color="warning">
      <MenuTitle>WARNING</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
    </Menu>

    <Menu vertical size="s-sm" radius="r-md" color="danger">
      <MenuTitle>DANGER</MenuTitle>
      <MenuItem href="/option1">Opción 1</MenuItem>
      <MenuItem href="/option2">Opción 2</MenuItem>
    </Menu>
  </div>
</div>
