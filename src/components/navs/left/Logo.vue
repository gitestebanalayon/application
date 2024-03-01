<template>
    <i class="arrow-logo fa-solid fa-chevron-down"></i>
    <p>Electronic</p>
</template>
  
<script setup>
    
</script>

<style scoped lang="scss">
    @import '../../../assets/sass/config/_vars.scss';
    @import '../../../assets/sass/config/_mixins.scss';
    i{
        position: absolute;
        width: $em-d;
        text-align: center;
        color: $color-icon;
        pointer-events: none;
        transition: $transition-efect cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    p{
        position: absolute;
        left: $em-a;
        pointer-events: none;
    }

    .rotate-arrow{
        transform: rotate(-90deg);
    }
</style>
  