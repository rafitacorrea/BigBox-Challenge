<template>
  <div id="app">
    <Activities/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import axios from 'axios';
import Activities from './components/Activities.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Activities
  }
  
  /*,
  data(){
    return{
      activities: [],
      activitiesDescription: []
    }
  } ,
  methods: {
    getActivities(){
      axios
        .get(`https://json-biglifeapp.herokuapp.com/activity?_page=${1}&_limit=9`)
          .then(res =>{
            this.activities = res.data;
            console.log(this.activities)
            this.activities.forEach(a => {
              this.activitiesDescription.push(JSON.parse(a.activity));
            })
            // this.activitiesDescription = JSON.parse(this.activities[0].activity)
            // console.log(this.activitiesDescription[0].category)
          })
          .catch(e => console.log(e))
    }
  },
  mounted(){
    this.getActivities()
  } */
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
