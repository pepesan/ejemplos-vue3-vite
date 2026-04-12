<script setup lang="ts">
import { ref } from 'vue'
import { useProfileStore } from '../stores/profileStore'

const profileStore = useProfileStore()
const email = ref(profileStore.contactEmail)

const saveEmail = () => {
  profileStore.updateEmail(email.value)
}
</script>

<template>
  <section>
    <h2>Configuración del perfil</h2>

    <label for="email">Email de contacto:</label>
    <input
        id="email"
        v-model="email"
        type="email"
    />

    <button @click="saveEmail">
      Guardar cambios
    </button>

    <p>Email actual: {{ profileStore.contactEmail }}</p>
  </section>
</template>