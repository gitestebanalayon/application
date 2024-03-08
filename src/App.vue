<template>
  <!--NAV TOP-->
  <div class="top">
    <NavTop/>
  </div>

  <!--NAV LEFT-->
  <div class="left">
    <NavLeft/>
  </div>
  
  <RouterView/>
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import  NavTop  from './components/navs/top/Component.vue'
  import  NavLeft  from './components/navs/left/Component.vue'
</script>

<style scoped lang="scss">
    @import './assets/sass/config/_mixins.scss';
    .top{
        @include style-nav-top;
    }
    .left{
        @include style-nav-left;
    }

    .open_nav{
        width: 15.625em !important;
    }

</style>
