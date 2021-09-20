<template>
  <div id="app">
    <Paginacion/>
  </div>
</template>

<script>
//import Actividades from './components/Actividades.vue'
//import Actividad from './components/Actividad.vue'
import Paginacion from './components/Paginacion.vue'

export default {
  name: 'App',
  components: {
    Paginacion
  }

}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
