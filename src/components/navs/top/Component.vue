<template>
    <div class="container-info">
        <form class="info-search">
            <Search/>
        </form>

        <div class="info-social">
            <Info/>
        </div>
    </div>
</template>
  
<script setup>
    import Search from './Search.vue';
    import Info from './Info.vue';
</script>
  
<style scoped lang="scss">
    @import '../../../assets/sass/config/_mixins.scss';
    .container-info{
        @include justify-content-between;
        width: 100%;
        height: $em-b;
    }
    .container-info .info-search{
        position: relative;
        @include align-items-center;
        height: 100%;
    }
    .container-info .info-social{
        @include align-items-center;
        gap: $em-c;
        height: 100%;
    }
</style>
  