import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vRedBackground from './directives/v-red-background'
import vYellowBackground from './directives/v-yellow-background'
import router from './router'

const app = createApp(App)

app.directive('red-background', vRedBackground)
app.directive('yellow-background', vYellowBackground)
app.use(router)
app.mount('#app')
