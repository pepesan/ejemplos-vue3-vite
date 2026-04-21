<script setup lang="ts">
import { ref } from 'vue'
import {
  BApp,
  BNavbar,
  BNavbarBrand,
  BContainer,
  BButton,
  BOffcanvas,
  BNav,
  BNavItem,
  BNavItemDropdown,
  BDropdownItem
} from 'bootstrap-vue-next'

const menuAbierto = ref(false)

const abrirMenu = () => {
  menuAbierto.value = true
}

const cerrarMenu = () => {
  menuAbierto.value = false
}
</script>

<template>
  <BApp>
    <!-- Barra superior -->
    <BNavbar class="bg-white border-bottom shadow-sm py-2">
      <BContainer fluid class="d-flex justify-content-between align-items-center">
        <BNavbarBrand to="/" class="fw-bold fs-5">
          Mi aplicación
        </BNavbarBrand>

        <BButton data-testid="menu" id="menu" variant="link" class="p-0 fs-4" @click="abrirMenu">
          <i class="bi bi-list"></i>
        </BButton>
      </BContainer>
    </BNavbar>

    <!-- Menú lateral -->
    <BOffcanvas
        v-model="menuAbierto"
        placement="start"
        header-close-label="Cerrar"
    >
      <template #title>
        Menú
      </template>

      <BNav vertical class="menu-lateral">
        <BNavItem to="/" exact @click="cerrarMenu">Inicio</BNavItem>
        <BNavItem to="/about" @click="cerrarMenu">Acerca de</BNavItem>
        <BNavItem to="/users" @click="cerrarMenu">Usuarios</BNavItem>
        <BNavItem to="/profile" @click="cerrarMenu">Profile</BNavItem>

        <div class="separador"></div>

        <BNavItemDropdown text="Props">
          <BDropdownItem to="/props/ejemplo1" @click="cerrarMenu">
            Básico
          </BDropdownItem>
          <BDropdownItem to="/props/ejemplo2" @click="cerrarMenu">
            Default
          </BDropdownItem>
        </BNavItemDropdown>

        <BNavItemDropdown text="Emit">
          <BDropdownItem to="/emit/abuelo-contador" @click="cerrarMenu">
            Abuelo contador
          </BDropdownItem>
          <BDropdownItem to="/emit/padre-contador" @click="cerrarMenu">
            Padre contador
          </BDropdownItem>
          <BDropdownItem to="/emit/padre-productos" @click="cerrarMenu">
            Padre productos
          </BDropdownItem>
        </BNavItemDropdown>

        <BNavItemDropdown text="Slots">
          <BDropdownItem to="/slots/card-layout" @click="cerrarMenu">
            Card layout
          </BDropdownItem>
          <BDropdownItem to="/slots/scoped-named" @click="cerrarMenu">
            Scoped y named slots
          </BDropdownItem>
          <BDropdownItem to="/slots/slot-component" @click="cerrarMenu">
            Slot básico
          </BDropdownItem>
          <BDropdownItem to="/slots/user-list" @click="cerrarMenu">
            User list
          </BDropdownItem>
        </BNavItemDropdown>

        <BNavItem to="/lifecycle/demo" @click="cerrarMenu">
          Lifecycle
        </BNavItem>

        <BNavItemDropdown text="Reactividad">
          <BDropdownItem to="/reactive/reactive" @click="cerrarMenu">
            Reactive
          </BDropdownItem>
          <BDropdownItem to="/reactive/computed" @click="cerrarMenu">
            Computed
          </BDropdownItem>
          <BDropdownItem to="/reactive/watch" @click="cerrarMenu">
            Watch
          </BDropdownItem>
        </BNavItemDropdown>

        <BNavItem to="/data-binding" @click="cerrarMenu">
          DataBinding
        </BNavItem>

        <BNavItemDropdown text="Directivas">
          <BDropdownItem to="/directives/bind" @click="cerrarMenu">v-bind</BDropdownItem>
          <BDropdownItem to="/directives/if" @click="cerrarMenu">v-if</BDropdownItem>
          <BDropdownItem to="/directives/if-else" @click="cerrarMenu">v-if / v-else</BDropdownItem>
          <BDropdownItem to="/directives/if-complex" @click="cerrarMenu">Condicional complejo</BDropdownItem>
          <BDropdownItem to="/directives/list" @click="cerrarMenu">v-for</BDropdownItem>
          <BDropdownItem to="/directives/model" @click="cerrarMenu">v-model</BDropdownItem>
          <BDropdownItem to="/directives/custom" @click="cerrarMenu">Directiva custom</BDropdownItem>
          <BDropdownItem to="/directives/custom-local" @click="cerrarMenu">Custom local</BDropdownItem>
          <BDropdownItem to="/dynamic-styles" @click="cerrarMenu">Clases y estilos</BDropdownItem>
        </BNavItemDropdown>

        <BNavItemDropdown text="Eventos">
          <BDropdownItem to="/events/basico" @click="cerrarMenu">Evento básico</BDropdownItem>
          <BDropdownItem to="/events/parametros" @click="cerrarMenu">Parámetros</BDropdownItem>
          <BDropdownItem to="/events/como-parametro" @click="cerrarMenu">Evento como parámetro</BDropdownItem>
          <BDropdownItem to="/events/prevent" @click="cerrarMenu">.prevent</BDropdownItem>
          <BDropdownItem to="/events/modificadores" @click="cerrarMenu">Modificadores</BDropdownItem>
        </BNavItemDropdown>

        <BNavItemDropdown text="Formularios">
          <BDropdownItem to="/forms/basico" @click="cerrarMenu">Formulario básico</BDropdownItem>
          <BDropdownItem to="/forms/vuelidate" @click="cerrarMenu">Vuelidate</BDropdownItem>
          <BDropdownItem to="/forms/vuelidate-login" @click="cerrarMenu">Vuelidate login</BDropdownItem>
          <BDropdownItem to="/forms/yup" @click="cerrarMenu">Yup básico</BDropdownItem>
          <BDropdownItem to="/forms/yup-login" @click="cerrarMenu">Yup login</BDropdownItem>
          <BDropdownItem to="/forms/yup-complex" @click="cerrarMenu">Yup complejo</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown text="HttpRequest">
          <BDropdownItem to="/http-request/partidos" @click="cerrarMenu">Lista Partidos</BDropdownItem>
          <BDropdownItem to="/http-request/post" @click="cerrarMenu">Post</BDropdownItem>
          <BDropdownItem to="/http-request/envvars" @click="cerrarMenu">Variables Entorno</BDropdownItem>
        </BNavItemDropdown>
        <BNavItem to="/pinia" @click="cerrarMenu">
          Pinia Counter
        </BNavItem>
      </BNav>
    </BOffcanvas>

    <!-- Contenido -->
    <BContainer class="py-4">
      <router-view />
    </BContainer>
  </BApp>
</template>

<style scoped>
.menu-lateral {
  gap: 0.35rem;
}

.separador {
  height: 1px;
  background: #dee2e6;
  margin: 0.75rem 0;
}

:deep(.offcanvas) {
  width: 320px;
}

:deep(.nav-link) {
  border-radius: 0.5rem;
  padding: 0.6rem 0.85rem;
}

:deep(.nav-link:hover) {
  background-color: #f8f9fa;
}

:deep(.dropdown-toggle) {
  width: 100%;
  text-align: left;
  border-radius: 0.5rem;
}

:deep(.dropdown-menu) {
  width: 100%;
}
</style>