<template>
    <div id="actividad-image">
         <VueSlickCarousel v-bind="settings" v-for="(slide, index) in slides" :key="slide" :index="index">
           <div></div>
        </VueSlickCarousel> 
    </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'ActividadImage',
    components: { VueSlickCarousel },
    data() {
      return {
        slides:{
          '<h3>1</h3>',
          '<h3>2</h3>'
        }
        settings: {
            arrows: true,
            dots: true,
            autoplay: true,
            dotsClass: "slick-dots custom-dot-class",
            edgeFriction: 0.35,
            infinite: false,
            speed: 100,
            slidesToShow: 4,
            slidesToScroll: 4
        }
      }
    }
  }
</script>