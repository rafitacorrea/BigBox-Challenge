<template>
    <div id="actividad">
        <ActividadInfo :image="activityDescription.image[0]" :title="activity.title" :text="activityDescription.description" :province="activityDescription.locations[0].province" :participants="activityDescription.participants" :points="activity.points" />
        <Benefits :description="activityDescription.description" :benefits="activityDescription.benefits"/>
        <Reglas :small_print="activityDescription.small_print"/>
    </div>
</template>

<script>
import axios from 'axios';
import ActividadInfo from './ActividadInfo'
import Benefits from './Benefits'
import Reglas from './Reglas'

export default {
    name: 'Actividad',
    components: {
      ActividadInfo, 
      Benefits,
      Reglas
  },
    data(){
        return{
          activity: null,
          activityDescription: null
        }
    },
     methods: {
    getActivity(){
      axios
        .get(`https://json-biglifeapp.herokuapp.com/activity/116598`)
          .then(res =>{
            this.activity = res.data;
            console.log('activity:')
            console.log(this.activity)
            this.activityDescription = JSON.parse(this.activity.activity);
            console.log('description:')
            console.log(this.activityDescription);
          })
          .catch(e => console.log(e))
    }
  },
  mounted(){
    this.getActivity()
  } 
}
</script>