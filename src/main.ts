import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vRedBackground from './directives/v-red-background'
import vYellowBackground from './directives/v-yellow-background'
import router from './router'
import { createPinia } from 'pinia'

// importamos el css de bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const pinia = createPinia()

const app = createApp(App)

app.directive('red-background', vRedBackground)
app.directive('yellow-background', vYellowBackground)
app.use(router)
app.use(pinia)
app.mount('#app')
