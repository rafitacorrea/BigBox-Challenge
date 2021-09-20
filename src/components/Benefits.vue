<template>
    <div id="benefits">
        <div class="benefits-title">
            <h3 class="benefits-title-text">¿Qué incluye?</h3>
            <hr class="benefits-title-line"/>
        </div>
        <div class="benefits-list">
            <p v-html="benefits"></p>
        </div>
        <p class="benefits-description">{{description}}</p> 
    </div>
</template>

<script>
export default {
    name: 'Benefits',
      props: {
        benefits: String,
        description: String 
    },
}
</script>