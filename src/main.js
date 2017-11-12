//Modulos
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'

//Componentes
import App from './App.vue'
import login from './components/login.vue'
import empleado from './components/empleado.vue'

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
      name: 'empleado',
      path: '/newempleado',
      component: empleado
    },
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
