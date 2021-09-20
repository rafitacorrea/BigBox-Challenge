import Vue from "vue";
import VueRouter from 'vue-router'
import Home from './views/Home'
import Actividad from './views/Actividad'
    

Vue.use(VueRouter)

const routes = [
    {
      path: "/actividades",
      name: "Actividades",
      component: Home
    },
    {
        path: "/actividades/:id",
        name: "Actividad",
        component: Actividad
      }
  ];

  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;
