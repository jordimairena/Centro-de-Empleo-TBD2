//Modulos
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'

//Componentes
import App from './App.vue'
import login from './components/login.vue'
import oferta from './components/oferta.vue'
import dashboard from './components/dashboard.vue'
import empleado from './components/empleado.vue'
import udEmpleado from './components/udEmpleado.vue'
import modificarempleador from './components/modificarempleador.vue'


Vue.use(VueResouce);
Vue.use(VueRouter);

Vue.http.options.credentials = true;
const router = new VueRouter({
  routes:[
    {
      name: 'Dashboard',
      path: '/home',
      component: dashboard
    },{
      name: 'LogIn',
      path: '/',
      component: login
    },
    {
      name: 'Oferta',
      path: '/newoferta',
      component: oferta
    },
    {
      name: 'modificarempleador',
      path: '/modificarempleador',
      component: modificarempleador
    },
    {
      name: 'empleado',
      path: '/newempleado',
      component: empleado
    },
    {
      name: 'udempleado',
      path: '/updatempleado',
      component: udEmpleado
    },
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
