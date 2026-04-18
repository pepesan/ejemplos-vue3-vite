<script setup lang="ts">
import { ref } from 'vue'
import {
  BApp,
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BContainer, BNavItemDropdown, BDropdownItem
} from 'bootstrap-vue-next'

const menuAbierto = ref(false)
</script>

<template>
  <BApp>
    <BNavbar toggleable="lg" variant="light" class="bg-light border-bottom">
      <BContainer>
        <BNavbarBrand to="/">Mi aplicación</BNavbarBrand>

        <BNavbarToggle target="nav-collapse" @click="menuAbierto = !menuAbierto" />

        <BCollapse id="nav-collapse" v-model="menuAbierto" is-nav>
          <BNavbarNav class="ms-auto">
            <BNavItem to="/" exact>Inicio</BNavItem>
            <BNavItem to="/about">Acerca de</BNavItem>
            <BNavItem to="/users">Usuarios</BNavItem>
            <BNavItem to="/profile">Profile</BNavItem>
            <!-- Desplegable -->
            <BNavItemDropdown text="Props">
              <BDropdownItem to="/props/ejemplo1">
                Basico
              </BDropdownItem>
              <BDropdownItem to="/props/ejemplo2">
                Default
              </BDropdownItem>
            </BNavItemDropdown>
            <BNavItemDropdown text="Emit">
              <BDropdownItem to="/emit/abuelo-contador">
                Abuelo contador
              </BDropdownItem>
              <BDropdownItem to="/emit/padre-contador">
                Padre contador
              </BDropdownItem>
              <BDropdownItem to="/emit/padre-productos">
                Padre productos
              </BDropdownItem>
            </BNavItemDropdown>
            <BNavItemDropdown text="Slots">
              <BDropdownItem to="/slots/card-layout">
                Card layout
              </BDropdownItem>
              <BDropdownItem to="/slots/scoped-named">
                Scoped y named slots
              </BDropdownItem>
              <BDropdownItem to="/slots/slot-component">
                Slot básico
              </BDropdownItem>
              <BDropdownItem to="/slots/user-list">
                User list
              </BDropdownItem>
            </BNavItemDropdown>
            <BNavItem to="/lifecycle/demo">Lifecycle</BNavItem>
            <BNavItemDropdown text="Reactividad">
              <BDropdownItem to="/reactive/reactive">
                Reactive
              </BDropdownItem>
              <BDropdownItem to="/reactive/computed">
                Computed
              </BDropdownItem>
              <BDropdownItem to="/reactive/watch">
                Watch
              </BDropdownItem>
            </BNavItemDropdown>
            <BNavItem to="/data-binding">DataBinding</BNavItem>
            <BNavItemDropdown text="Directivas">
              <BDropdownItem to="/directives/bind">v-bind</BDropdownItem>
              <BDropdownItem to="/directives/if">v-if</BDropdownItem>
              <BDropdownItem to="/directives/if-else">v-if / v-else</BDropdownItem>
              <BDropdownItem to="/directives/if-complex">Condicional complejo</BDropdownItem>
              <BDropdownItem to="/directives/list">v-for</BDropdownItem>
              <BDropdownItem to="/directives/model">v-model</BDropdownItem>
              <BDropdownItem to="/directives/custom">Directiva custom</BDropdownItem>
              <BDropdownItem to="/directives/custom-local">Custom local</BDropdownItem>
              <BDropdownItem to="/dynamic-styles">Clases y estilos</BDropdownItem>
            </BNavItemDropdown>
            <BNavItemDropdown text="Eventos">
              <BDropdownItem to="/events/basico">Evento básico</BDropdownItem>
              <BDropdownItem to="/events/parametros">Parámetros</BDropdownItem>
              <BDropdownItem to="/events/como-parametro">Evento como parámetro</BDropdownItem>
              <BDropdownItem to="/events/prevent">.prevent</BDropdownItem>
              <BDropdownItem to="/events/modificadores">Modificadores</BDropdownItem>
            </BNavItemDropdown>
            <BNavItemDropdown text="Formularios">
              <BDropdownItem to="/forms/basico">Formulario básico</BDropdownItem>
              <BDropdownItem to="/forms/vuelidate">Vuelidate</BDropdownItem>
              <BDropdownItem to="/forms/vuelidate-login">Vuelidate login</BDropdownItem>
              <BDropdownItem to="/forms/yup">Yup básico</BDropdownItem>
              <BDropdownItem to="/forms/yup-login">Yup login</BDropdownItem>
              <BDropdownItem to="/forms/yup-complex">Yup complejo</BDropdownItem>
            </BNavItemDropdown>
          </BNavbarNav>
        </BCollapse>
      </BContainer>
    </BNavbar>

    <BContainer class="py-4">
      <router-view />
    </BContainer>
  </BApp>
</template>