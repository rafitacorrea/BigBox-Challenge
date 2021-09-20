import Vue from "vue";
import VueRouter from 'vue-router'
import Actividades from './components/Actividades'
import Actividad from './components/Actividad'
    

Vue.use(VueRouter)

const routes = [
    {
      path: "/Actividades",
      name: "Actividades",
      component: Actividades
    },
    {
        path: "/Actividad",
        name: "Actividad",
        component: Actividad
      }
  ];

  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;
