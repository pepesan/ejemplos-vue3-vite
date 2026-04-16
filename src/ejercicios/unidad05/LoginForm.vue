<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h2>Login</h2>

      <div>
        <label for="username">Nombre de usuario</label>
        <input
            id="username"
            type="text"
            v-model="form.username"
            placeholder="Introduce tu usuario"
        />
        <div v-if="errors.username">
          {{ errors.username[0] }}
        </div>
      </div>

      <div>
        <label for="password">Contraseña</label>
        <input
            id="password"
            type="password"
            v-model="form.password"
            placeholder="Introduce tu contraseña"
        />
        <div v-if="errors.password">
          {{ errors.password[0] }}
        </div>
      </div>

      <button type="submit">Entrar</button>

      <p>{{ mensaje }}</p>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import * as yup from 'yup'

const schema = yup.object({
  username: yup
      .string()
      .required('El nombre de usuario es obligatorio')
      .min(6, 'El nombre de usuario debe tener al menos 6 caracteres'),

  password: yup
      .string()
      .required('La contraseña es obligatoria')
      .min(12, 'La contraseña debe tener al menos 12 caracteres'),
})

const form = reactive({
  username: '',
  password: '',
})

const errors = ref({})
const mensaje = ref('')

const handleSubmit = async () => {
  errors.value = {}
  mensaje.value = ''

  try {
    const data = await schema.validate(form, { abortEarly: false })

    console.log('Datos del formulario:', data)

    mensaje.value = 'Formulario enviado correctamente'

    form.username = ''
    form.password = ''
  } catch (err) {
    errors.value = err.inner.reduce((prev, curr) => {
      if (!prev[curr.path]) {
        prev[curr.path] = []
      }
      prev[curr.path].push(curr.message)
      return prev
    }, {})
  }
}
</script>