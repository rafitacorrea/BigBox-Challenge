<template>
    <div id="reglas">
        <h3 class="reglas-title">
        <font-awesome-icon class="reglas-title-icon" :icon="icon" /> 
        Reglas:</h3>
        <p class="reglas-text">{{small_print}}</p>
    </div>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'Reglas',
    components: {FontAwesomeIcon},
    props:{
        small_print: String
    },
  data () {
    return {
      icon: faFileAlt
    }
  }
}
</script>