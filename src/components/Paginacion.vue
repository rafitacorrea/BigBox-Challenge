<template>
    <div id="paginacion">
      <Actividades :page="page"/>
        <nav class="pagination" role="navigation" aria-label="pagination">
            <a class="pagination-prev" v-on:click="changePage(page-1)">Anterior</a>
            <ul class="pagination-list">
                <li>
                    <a class="pagination-link is-current">{{page}}</a>
                </li>
            </ul>
            <a class="pagination-next" v-on:click="changePage(page+1)">Siguiente</a>
        </nav>
    </div>
</template>

<script>

import axios from 'axios';
import Actividades from './Actividades.vue';

export default {
  components: { Actividades },
    name: 'Paginacion',
    data(){
        return{
            activities: [],
            page: 1,
            pages: Number
        }
    },
  methods: {
    changePage(page){
    this.page = page <= 0 || page > this.pages ? this.page : page;
    console.log(page)
  }, 
    getActivities(){
      const params = {
        page: this.page
      }
      axios
        .get(`https://json-biglifeapp.herokuapp.com/activity`, {params})
          .then(res =>{
            this.activities = res.data;
            console.log('paginacion:')
            this.pages = parseInt(this.activities.length / 9);
            console.log(this.pages)
          })
          .catch(e => console.log(e))
    }
  },
  mounted(){
    this.getActivities()
  }
}
</script>