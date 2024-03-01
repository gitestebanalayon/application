<template>
  <!--NAV TOP-->
  <div class="top">
    <MenuTop/>
  </div>

  <!--NAV LEFT-->
  <div class="left">
    <MenuLeft/>
  </div>
  
</template>

<script setup>
  import  MenuTop  from './components/navs/top/Component.vue'
  import  MenuLeft  from './components/navs/left/Component.vue'
</script>

<style scoped lang="scss">
    @import './assets/sass/config/_mixins.scss';
    .top{
        position: sticky;
        top: 0;
        left: 0;
        @include align-items-center;
        width: 100%;
        padding: 0 0.625em 0 4.375em !important;
        height: $em-a;
        z-index: 1;
        background: $background-navs;
        box-shadow: 0px 1px 2px $box-shadow;
    }
    .left{
        position: fixed;
        top: 0;
        left: 0;
        width: 3.75em;/*15.625em*/
        height: 100%;
        z-index: 1;
        background: $background-navs;
        box-shadow: 1px 0px 2px $box-shadow;
        transition: $transition-efect cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .open_nav{
        width: 15.625em !important;
    }

</style>
