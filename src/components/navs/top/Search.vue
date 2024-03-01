<template>
    <input type="text" required>
    <button class="fas fa-search"></button>
</template>
  
<script setup>
  
</script>
  
<style scoped lang="scss">
    @import '../../../assets/sass/config/_mixins.scss';
    button{
        position: absolute;
        right: 0;
        @include align-justify-content-center;
        width: $em-b;
        height: 100%;
        cursor: pointer;
        background: #00000000;
        border: none;
        color: rgb(208, 208, 208);
        font-size: 1em;
    }
    input{
        padding: 0 2.5em 0 0.625em !important;
        height: 100%;
        outline: none;
        border: 1px solid $color-border;
        border-radius: 3px;
        transition: $transition-efect;
        width: 15em;
        font-size: 1em;
    }
    input:focus{
        border: 1px solid $color-focus;
    }
</style>
  