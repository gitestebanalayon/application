<template>
    <ul class="ul-base">
        <li v-for="optionGlobal in optionsGlobal" :key="optionGlobal.id">

            <!----------------------------------SUBMENU PERSONAL---------------------------------->
            <ul v-if="optionGlobal.name == 'Personal'" class="personal">
                <li>
                    <a class="dropdown_options" id="personal">
                        <i :class="optionGlobal.icon" class="icon"></i>
                        <span class="span">{{ optionGlobal.name }}</span>
                        <i class="fa-solid fa-caret-left arrow-nav"></i>
                    </a>
                    <ul class="block">
                        <li v-for="optionPersonal in optionsPersonales" :key="optionPersonal.id">
                            <RouterLink to="/" class="a">
                                <i :class="optionPersonal.icon" class="icon"></i>
                                <span class="span">{{ optionPersonal.name }}</span>
                            </RouterLink>
                        </li>
                    </ul>
                </li>
            </ul>

            <!----------------------------------SUBMENU COMPRAS---------------------------------->
            <ul v-else-if="optionGlobal.name == 'Compras'">
                <li>
                    <a class="dropdown_options" id="compras">
                        <i :class="optionGlobal.icon" class="icon"></i>
                        <span class="span">{{ optionGlobal.name }}</span>
                        <i class="fa-solid fa-caret-left arrow-nav"></i>
                    </a>

                    <ul class="block">
                        <li v-for="optionCompra in optionsCompras" :key="optionCompra.id">

                            <!----------------------------------SUBMENU BS---------------------------------->
                            <ul v-if="optionCompra.name == 'Euro'">
                                <li>
                                    <a class="dropdown_options" id="euro">
                                        <i :class="optionCompra.icon" class="icon"></i>
                                        <span class="span">{{ optionCompra.name }}</span>
                                        <i class="fa-solid fa-caret-left arrow-nav"></i>
                                    </a>
                                    <ul class="block">
                                        <li v-for="optionPago in optionsPagos" :key="optionPago.id">
                                            <RouterLink to="/" class="a">
                                                <i :class="optionPago.icon" class="icon"></i>
                                                <span class="span">{{ optionPago.name }}</span>
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <!----------------------------------SUBMENU DOLARES---------------------------------->
                            <ul v-if="optionCompra.name == 'Dolares'">
                                <li>
                                    <a class="dropdown_options" id="dolares">
                                        <i :class="optionCompra.icon" class="icon"></i>
                                        <span class="span">{{ optionCompra.name }}</span>
                                        <i class="fa-solid fa-caret-left arrow-nav"></i>
                                    </a>
                                    <ul class="block">
                                        <li v-for="optionPago in optionsPagos" :key="optionPago.id">
                                            <RouterLink to="/" class="a">
                                                <i :class="optionPago.icon" class="icon"></i>
                                                <span class="span">{{ optionPago.name }}</span>
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </li>
                                
                            </ul>

                        </li>
                    </ul>

                </li>
            </ul>

            <ul v-else-if="optionGlobal.name == 'Bank'">
                <li>
                    <a class="dropdown_options" id="bank">
                        <i :class="optionGlobal.icon" class="icon"></i>
                        <span class="span">{{ optionGlobal.name }}</span>
                        <i class="fa-solid fa-caret-left arrow-nav"></i>
                    </a>
                    <ul class="block">
                        <li v-for="optionBank in optionsBank" :key="optionBank.id">
                            <RouterLink to="/" class="a">
                                <i :class="optionBank.icon" class="icon"></i>
                                <span class="span">{{ optionBank.name }}</span>
                            </RouterLink>
                        </li>
                    </ul>
                </li>
            </ul>

            <ul v-else>
                <li>
                    <RouterLink :to="optionGlobal.url" class="a">
                        <i :class="optionGlobal.icon" class="icon"></i>
                        <span class="span">{{ optionGlobal.name }}</span>
                    </RouterLink>
                </li>
            </ul>

        </li>
    </ul>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    const optionsGlobal = [
        { url: {name: "home"}, icon: 'fas fa-home', name: 'Inicio' },
        { url: {name: "customer"}, icon: 'fas fa-users', name: 'Clientes' },
        { url: "", icon: 'fas fa-tv', name: 'Aparatos' },
        { url: "", icon: 'fas fa-user-tie', name: 'Personal' },
        { url: "", icon: 'fa-solid fa-basket-shopping', name: 'Compras' },
        { url: "", icon: 'fa-solid fa-file-invoice-dollar', name: 'Bank' },
        { url: "", icon: 'fa-solid fa-gears', name: 'Configuración'},
        { url: "", icon: 'fa-solid fa-trash', name: 'Papelera'}
    ]
    const optionsPersonales = [
        { icon: 'fas fa-male', name: 'Hombre' },
        { icon: 'fas fa-female', name: 'Mujer' }
    ]
    const optionsCompras = [
        { icon: 'fa-solid fa-euro-sign', name: 'Euro' },
        { icon: 'fas fa-dollar', name: 'Dolares' }
    ]
    const optionsPagos = [
        { icon: 'fas fa-check', name: 'Pago Movil' },
        { icon: 'fas fa-check-double', name: 'Transferencias' }
    ]
    const optionsBank = [
        { icon: 'fa-brands fa-cc-visa', name: 'Visa' },
        { icon: 'fa-brands fa-cc-paypal', name: 'Paypal' }
    ]
</script>
  
<style scoped lang="scss">
    @import '../../../assets/sass/config/_mixins.scss';

    ul{
        list-style: none;
    }

    .ul-base{
        padding: $em-c;
    }

    a{
        position: relative;
        text-decoration: none;
        color: $color-icon;
        height: $em-d;
        margin: 0 0 $em-c 0;
        @include align-items-center; 
        border-radius: 3px;
        transition: $transition-efect cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;
    }
    
    .icon{
        position: absolute;
        width: $em-d;
        text-align: center;
        pointer-events: none;
    }

    .span{
        position: absolute;
        left: 3.3em;
        pointer-events: none;
    }

    .arrow-nav{
        position: absolute;
        right: 0;
        font-size: 0.8em;
        pointer-events: none;
        transition: $transition-efect cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .block{
        height: 0;
        overflow: hidden;
        transition: height $transition-efect cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .rotate_arrow{
        transform: rotate(-90deg);
        color: #005eff;
    }

    .options-focus{
        color: #005eff;
    }


    
</style>
  