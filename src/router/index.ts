import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../pages/HomePage.vue'
import AboutView from '../pages/AboutPage.vue'
import UsersPage from '../pages/UsersPage.vue'
import UserDetailPage from '../pages/UserDetailPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import SearchPage from '../pages/SearchPage.vue'
import PropsExample01Page from '../pages/props/PropsExample01Page.vue'
import PropsExample02Page from '../pages/props/PropsExample02Page.vue'
import AbueloContador from '../components/emit/AbueloContador.vue'
import PadreContador from '../components/emit/PadreContador.vue'
import PadreProductos from '../components/emit/PadreProductos.vue'
import UsaCardLayout from '../components/slots/UsaCardLayout.vue'
import UsaScopedMasNamedSlots from '../components/slots/UsaScopedMasNamedSlots.vue'
import UsaSlotComponent from '../components/slots/UsaSlotComponent.vue'
import UsaUserList from '../components/slots/UsaUserList.vue'
import CicloVidaDemo from '../components/lifecycle/CicloVidaDemo.vue'
import ComputedComponent from '../components/reactive/ComputedComponent.vue'
import ReactiveComponent from '../components/reactive/ReactiveComponent.vue'
import WatchComponent from '../components/reactive/WatchComponent.vue'
import DataBinding from '../components/data-binding/DataBinding.vue'
import Binding from '../components/directives/Binding.vue'
import CondicionalComplexComponent from '../components/directives/CondicionalComplexComponent.vue'
import CondicionalCompositionComponent from '../components/directives/CondicionalCompositionComponent.vue'
import CondicionalElseCompositionComponent from '../components/directives/CondicionalElseCompositionComponent.vue'
import LlamaListadoCompositionComponent from '../components/directives/LlamaListadoCompositionComponent.vue'
import ModelCompositionComponent from '../components/directives/ModelCompositionComponent.vue'
import UsaDirectivaCustomComponent from '../components/directives/UsaDirectivaCustomComponent.vue'
import UsaDirectivaCustomCargaLocalComponent from '../components/directives/UsaDirectivaCustomCargaLocalComponent.vue'
import DynamicClassesStyles from '../components/dynamic-styles/DynamicClassesStyles.vue'
import EventosCompositionComponent from '../components/events/EventosCompositionComponent.vue'
import EventosParametros from '../components/events/EventosParametros.vue'
import EventosComoParametro from '../components/events/EventosComoParametro.vue'
import EventosModificadores from '../components/events/EventosModificadores.vue'
import EventoPrevent from '../components/events/EventoPrevent.vue'
import FormularioCompositionComponent from '../components/forms/FormularioCompositionComponent.vue'
import VuelidateFormExample from '../components/forms/VuelidateFormExample.vue'
import VuelidateLoginFormExample from '../components/forms/VuelidateLoginFormExample.vue'
import YupValidationCompositionComponent from '../components/forms/YupValidationCompositionComponent.vue'
import YupValidationLoginCompositionComponent from '../components/forms/YupValidationLoginCompositionComponent.vue'
import YupValidationComplexComponent from '../components/forms/YupValidationComplexComponent.vue'
import PartidosAxiosComponent from '../components/httprequest/PartidosAxiosComponent.vue'
import { profileRoutes } from '../modules/profile/profile.routes'
import PartidosAxiosEnvVariableComponent from "../components/httprequest/PartidosAxiosEnvVariableComponent.vue";
import PostAxiosFormComponent from "../components/httprequest/PostAxiosFormComponent.vue";
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/users',
        name: 'users',
        component: UsersPage
    },
    {
        path: '/users/:id',
        name: 'user-detail',
        component: UserDetailPage
    },
    {
        path: '/search',
        name: 'search',
        component: SearchPage
    },

    // Rutas de
    {
        path: '/props/ejemplo1',
        name: 'props-ejemplo1',
        component: PropsExample01Page
    },
    {
        path: '/props/ejemplo2',
        name: 'props-ejemplo2',
        component: PropsExample02Page
    },
    // Rutas de Emit
    {
        path: '/emit/abuelo-contador',
        name: 'emit-abuelo-contador',
        component: AbueloContador
    },
    {
        path: '/emit/padre-contador',
        name: 'emit-padre-contador',
        component: PadreContador
    },
    {
        path: '/emit/padre-productos',
        name: 'emit-padre-productos',
        component: PadreProductos
    },
    // Rutas de Slots
    {
        path: '/slots/card-layout',
        name: 'slots-card-layout',
        component: UsaCardLayout
    },
    {
        path: '/slots/scoped-named',
        name: 'slots-scoped-named',
        component: UsaScopedMasNamedSlots
    },
    {
        path: '/slots/slot-component',
        name: 'slots-slot-component',
        component: UsaSlotComponent
    },
    {
        path: '/slots/user-list',
        name: 'slots-user-list',
        component: UsaUserList
    },
    // Ruta de Lifecycle
    {
        path: '/lifecycle/demo',
        name: 'lifecycle-demo',
        component: CicloVidaDemo
    },
    // Rutas de reactive
    {
        path: '/reactive/computed',
        name: 'reactive-computed',
        component: ComputedComponent
    },
    {
        path: '/reactive/reactive',
        name: 'reactive-reactive',
        component: ReactiveComponent
    },
    {
        path: '/reactive/watch',
        name: 'reactive-watch',
        component: WatchComponent
    },
    // Ruta del data binding
    {
        path: '/data-binding',
        name: 'data-binding',
        component: DataBinding
    },
    // Rutas de directivas
    {
        path: '/directives/bind',
        name: 'directives-bind',
        component: Binding
    },
    {
        path: '/directives/if',
        name: 'directives-if',
        component: CondicionalCompositionComponent
    },
    {
        path: '/directives/if-else',
        name: 'directives-if-else',
        component: CondicionalElseCompositionComponent
    },
    {
        path: '/directives/if-complex',
        name: 'directives-if-complex',
        component: CondicionalComplexComponent
    },
    {
        path: '/directives/list',
        name: 'directives-list',
        component: LlamaListadoCompositionComponent
    },
    {
        path: '/directives/model',
        name: 'directives-model',
        component: ModelCompositionComponent
    },
    {
        path: '/directives/custom',
        name: 'directives-custom',
        component: UsaDirectivaCustomComponent
    },
    {
        path: '/directives/custom-local',
        name: 'directives-custom-local',
        component: UsaDirectivaCustomCargaLocalComponent
    },
    // ruta de estilos y clases dinámicos
    {
        path: '/dynamic-styles',
        name: 'dynamic-styles',
        component: DynamicClassesStyles
    },
    // Rutas de eventos
    {
        path: '/events/basico',
        name: 'events-basico',
        component: EventosCompositionComponent
    },
    {
        path: '/events/parametros',
        name: 'events-parametros',
        component: EventosParametros
    },
    {
        path: '/events/como-parametro',
        name: 'events-como-parametro',
        component: EventosComoParametro
    },
    {
        path: '/events/modificadores',
        name: 'events-modificadores',
        component: EventosModificadores
    },
    {
        path: '/events/prevent',
        name: 'events-prevent',
        component: EventoPrevent
    },
    // rutas de formularios
    {
        path: '/forms/basico',
        name: 'forms-basico',
        component: FormularioCompositionComponent
    },
    {
        path: '/forms/vuelidate',
        name: 'forms-vuelidate',
        component: VuelidateFormExample
    },
    {
        path: '/forms/vuelidate-login',
        name: 'forms-vuelidate-login',
        component: VuelidateLoginFormExample
    },
    {
        path: '/forms/yup',
        name: 'forms-yup',
        component: YupValidationCompositionComponent
    },
    {
        path: '/forms/yup-login',
        name: 'forms-yup-login',
        component: YupValidationLoginCompositionComponent
    },
    {
        path: '/forms/yup-complex',
        name: 'forms-yup-complex',
        component: YupValidationComplexComponent
    },
    // Ejemplos de Http request
    {
        path: '/http-request/partidos',
        name: 'http-request-partidos',
        component: PartidosAxiosComponent
    },
    {
        path: '/http-request/post',
        name: 'http-request-post',
        component: PostAxiosFormComponent
    },
    {
        path: '/http-request/envvars',
        name: 'http-request-envvars',
        component: PartidosAxiosEnvVariableComponent
    },
    // módulo profile
    profileRoutes,

    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router