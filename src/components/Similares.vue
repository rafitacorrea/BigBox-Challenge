<template>
    <div id="similares">
        <h3 class="similares-title">Otras actividades similares:</h3>
        <div class="similares-cards" >
         <div v-for="(activity, index) in activities" :key="activity.id">
        <router-link v-bind:to="'/actividades/'+activity.id">
       <ActividadCard :image="activitiesDescription[index].image[0]" :title="activity.title" :address="activitiesDescription[index].locations[0].address" :province="activitiesDescription[index].locations[0].province" :description="activitiesDescription[index].description" :points="activity.points" v-if="activitiesDescription[index].participants != 1" :icon="iconUserFriends"/>
        </router-link>
        <router-link v-bind:to="'/actividades/'+activity.id">
       <ActividadCard :image="activitiesDescription[index].image[0]" :title="activity.title" :address="activitiesDescription[index].locations[0].address" :province="activitiesDescription[index].locations[0].province" :description="activitiesDescription[index].description" :points="activity.points" v-if="activitiesDescription[index].participants == 1" :icon="iconUser"/>
        </router-link>
      </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import ActividadCard from './ActividadCard';
import { faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'Similares',
    components: {
    ActividadCard
  },
  props:{
    location: String

  },
  data(){
    return{
      activities: [],
      activitiesDescription: [],
      similares: [],
      iconUser: faUser,
      iconUserFriends: faUserFriends
    }
  },
  methods: {
    getActivities(){
      axios
        .get("https://json-biglifeapp.herokuapp.com/activity?_page=1&_limit=4")
          .then(res =>{
            this.activities = res.data;
            this.activities.forEach(a => {
            this.activitiesDescription.push(JSON.parse(a.activity));
            })
          })
          .catch(e => console.log(e))
    }
    },
  mounted(){
    this.getActivities()
  }
}

</script>