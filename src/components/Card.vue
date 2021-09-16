<template>
    <div id="card">
        <div class="card-img">
            <img :src=image />
        </div>
        <div class="card-header">
            <h3 class="card-header-title">{{title}}</h3>
        </div>
        <div class="card-location">
            <i/>
            <h4 class="card-location-info">{{address}}, {{province}}</h4>
        </div>
        <div class="card-description">
            <p class="card-description-text">{{description}}</p>
        </div>
        <div class="card-points">
            <p>{{points}} puntos</p>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        image: String,
        title: String,
        address: String,
        province: String ,
        description: String, 
        points: Number 
    },
    data(){
        return{
            texto: 'hola mundo'
        }
    }
}
</script>