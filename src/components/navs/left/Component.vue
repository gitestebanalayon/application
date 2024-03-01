<template>
        <div class="logo">
            <Logo/>
        </div>
        <div class="options">
            <Options/>
        </div>
</template>
  
<script setup>
    import Logo from './Logo.vue'
    import Options from './Options.vue'
</script>
  
<style scoped lang="scss">
    @import '../../../assets/sass/config/_mixins.scss';

    .logo{
        overflow: hidden;
        position: relative;
        height: $em-a;
        border-bottom: 1px solid $color-border;
        @include align-items-center;
        padding: $em-c;
        cursor: pointer;
    }
    .options{
        overflow: hidden;
        overflow-y: auto;
        height: 92%;
    }
</style>
  