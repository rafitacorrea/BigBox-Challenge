<template>
    <div id="activities" >
      <div v-for="(activity, index) in activities" :key="activity.id">
      <Card :image="activitiesDescription[index].image[0]" :title="activity.title" :address="activitiesDescription[index].locations[0].address" :province="activitiesDescription[index].locations[0].province" :description="activitiesDescription[index].description" :points="activity.points"/>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import Card from './Card.vue';

export default {
  name: 'Activities',
  components: {
    Card
  },
  data(){
    return{
      activities: [],
      activitiesDescription: []
    }
  },
  methods: {
    getActivities(){
      axios
        .get(`https://json-biglifeapp.herokuapp.com/activity?_page=${1}&_limit=9`)
          .then(res =>{
            this.activities = res.data;
            console.log(this.activities)
            this.activities.forEach(a => {
              this.activitiesDescription.push(JSON.parse(a.activity));
              console.log(this.activitiesDescription)
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