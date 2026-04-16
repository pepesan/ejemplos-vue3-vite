<template>
  <div class="form-container">
    <form id="miform" @submit.prevent="handleSubmit">
      <h2>Iniciar Sesión</h2>

      <!-- Campo de usuario -->
      <div class="form-group">
        <label id="username-label" for="username">Usuario</label>
        <input
            type="text"
            id="username"
            v-model="form.username"
            :class="{ 'is-invalid': v$.username.$error }"
            placeholder="Ingresa tu usuario"
            @blur="v$.username.$touch()"
        />
        <div
            v-for="error in v$.username.$errors"
            :key="error.$uid"
            class="invalid-feedback"
        >
          {{ error.$message }}
        </div>
      </div>

      <!-- Campo de contraseña -->
      <div class="form-group">
        <label id="password-label" for="password">Contraseña</label>
        <input
            type="password"
            id="password"
            v-model="form.password"
            :class="{ 'is-invalid': v$.password.$error }"
            placeholder="Ingresa tu contraseña"
            @blur="v$.password.$touch()"
        />
        <div
            v-for="error in v$.password.$errors"
            :key="error.$uid"
            class="invalid-feedback"
        >
          {{ error.$message }}
        </div>
      </div>

      <button type="submit">Enviar</button>
      <p id="resultado">{{ mensaje }}</p>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, helpers } from '@vuelidate/validators'

// Estado del formulario
const form = reactive({
  username: '',
  password: '',
})

// Mensaje final
const mensaje = ref('')

// Reglas de validación
const rules = computed(() => ({
  username: {
    required: helpers.withMessage(
        'El campo username es obligatorio',
        required
    ),
    minLength: helpers.withMessage(
        'El usuario debe tener al menos 3 caracteres',
        minLength(3)
    ),
  },
  password: {
    required: helpers.withMessage(
        'El campo password es obligatorio',
        required
    ),
    minLength: helpers.withMessage(
        'La contraseña debe tener al menos 12 caracteres',
        minLength(12)
    ),
  },
}))

// Instancia de Vuelidate
const v$ = useVuelidate(rules, form)

// Envío del formulario
const handleSubmit = async () => {
  mensaje.value = ''

  const isValid = await v$.value.$validate()

  if (!isValid) {
    mensaje.value = 'Hay errores en el formulario'
    return
  }

  mensaje.value = 'Formulario enviado exitosamente'
}
</script>

<style>
/* Contenedor principal del formulario */
.form-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Título del formulario */
form h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

/* Grupo de cada campo */
.form-group {
  margin-bottom: 20px;
}

/* Etiquetas de los campos */
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

/* Estilos de los campos de entrada */
.form-group input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

/* Estilos al enfocar los campos */
.form-group input:focus {
  border-color: #007bff;
  outline: none;
}

/* Estilos para campos inválidos */
.is-invalid {
  border-color: red;
}

/* Mensajes de error */
.invalid-feedback {
  color: red;
  margin-top: 5px;
  font-size: 14px;
}

/* Botón de envío */
button[type='submit'] {
  width: 100%;
  padding: 12px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Efecto hover en el botón */
button[type='submit']:hover {
  background-color: #0056b3;
}

/* Mensaje de resultado */
#resultado {
  margin-top: 25px;
  text-align: center;
  color: green;
  font-weight: bold;
  font-size: 16px;
}
</style>