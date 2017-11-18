//Modulos
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'

//Componentes
import App from './App.vue'
import login from './components/login.vue'
import empleado from './components/empleado.vue'
import udEmpleado from './components/udEmpleado.vue'
import modificarempleador from './components/modificarempleador.vue'

Vue.use(VueResouce);
Vue.use(VueRouter);

Vue.http.options.credentials = true;
const router = new VueRouter({
  routes:[
    {
      name: 'LogIn',
      path: '/',
      component: login
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
