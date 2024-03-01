<template>
    <div class="container-info">
        <i class="icon fas fa-bell"></i>
        <span class="data">43</span>
    </div>
    <div class="container-info">
        <img class="img" src="../../../assets/img/esteban.jpg" alt="picture">
    </div>
</template>
  
<script setup>
    
</script>
  
<style scoped lang="scss">
    @import '../../../assets/sass/config/_vars.scss';
    @import '../../../assets/sass/config/_mixins.scss';
    .container-info{
        position: relative;
        height: 100%;
        width: $em-b;
        @include align-justify-content-center;
    }
    .container-info .icon{
        cursor: pointer;
        color: $color-icon;
    }
    .container-info .data{
        position: absolute;
        top: 2px;
        right: 7px;
        background: red;
        height: 1.2em;
        padding: 0 2px !important;
        @include align-justify-content-center;
        color: #fff;
        border-radius: 4px;
        font-size: 0.75em;
        font-weight: 700;
    }
    .container-info .img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        cursor: pointer;
    }

</style>
  