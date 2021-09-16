<template>
    <div id="activities" >
      <div v-for="(activity, index) in activities" :key="activity.id">
       <Card :image="activitiesDescription[index].image[0]" :title="activity.title" :address="activitiesDescription[index].locations[0].address" :province="activitiesDescription[index].locations[0].province" :description="activitiesDescription[index].description" :points="activity.points" v-if="activitiesDescription[index].participants != 1" :icon="iconUserFriends"/>
       <Card :image="activitiesDescription[index].image[0]" :title="activity.title" :address="activitiesDescription[index].locations[0].address" :province="activitiesDescription[index].locations[0].province" :description="activitiesDescription[index].description" :points="activity.points" v-else :icon="iconUser"/>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import Card from './Card.vue';
import { faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Activities',
  components: {
    Card
  },
  data(){
    return{
      activities: [],
      activitiesDescription: [],
      iconUser: faUser,
      iconUserFriends: faUserFriends
    }
  },
  methods: {
    getActivities(){
      axios
        .get(`https://json-biglifeapp.herokuapp.com/activity?_page=${1}&_limit=9`)
          .then(res =>{
            this.activities = res.data;
            console.log(this.activities)
            let i = 0;
            this.activities.forEach(a => {
              this.activitiesDescription.push(JSON.parse(a.activity));
              console.log(this.activitiesDescription)
              console.log(this.activitiesDescription[i].participants)
              i++;
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