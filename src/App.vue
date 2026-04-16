<script setup lang="ts">
import Contador from "./ejercicios/unidad03/Contador.vue";
import UsaUserCard from "./ejercicios/unidad03/UsaUserCard.vue";
import UsaBotonAccion from "./ejercicios/unidad03/UsaBotonAccion.vue";
import UsaCajaContenido from "./ejercicios/unidad03/UsaCajaContenido.vue";
import ContadorBasico from "./ejercicios/unidad04/ContadorBasico.vue";
import FichaUsuario from "./ejercicios/unidad04/FichaUsuario.vue";
import NombreCompleto from "./ejercicios/unidad04/NombreCompleto.vue";
import BuscadorLista from "./ejercicios/unidad04/BuscadorLista.vue";
import ContadorConAviso from "./ejercicios/unidad04/ContadorConAviso.vue";
import MostrarOcultar from "./ejercicios/unidad04/MostrarOcultar.vue";
import ListaAlumnos from "./ejercicios/unidad04/ListaAlumnos.vue";
import BotonColor from "./ejercicios/unidad04/BotonColor.vue";
import BuscadorListaConWatch from "./ejercicios/unidad04/BuscadorListaConWatch.vue";
import LoginForm from "./ejercicios/unidad05/LoginForm.vue";
import ListadoForm from "./ejercicios/unidad05/ListadoForm.vue";
import BotonMensaje from "./ejercicios/unidad05/BotonMensaje.vue";
import BotonUnSoloClick from "./ejercicios/unidad05/BotonUnSoloClick.vue";
import CambiarColor from "./ejercicios/unidad05/CambiarColor.vue";
import InputEnter from "./ejercicios/unidad05/InputEnter.vue";
import ListaEliminar from "./ejercicios/unidad05/ListaEliminar.vue";
import Saludos from "./ejercicios/unidad05/Saludos.vue";
</script>

<template>

  <div>
    <nav>
      <router-link to="/">Inicio</router-link>
      |
      <router-link to="/about">Acerca de</router-link>
      |
      <router-link to="/users">Usuarios</router-link>
      |
      <router-link to="/profile">Profile</router-link>
    </nav>

    <router-view />
  </div>
  <BotonMensaje />
  <BotonUnSoloClick />
  <CambiarColor />
  <InputEnter />
  <ListadoForm />
  <ListaEliminar />
  <LoginForm />
  <Saludos />
</template>
