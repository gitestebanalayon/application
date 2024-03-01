import { nav_active } from './assets/js/funtions-component/nav.js';

import './assets/sass/styles.scss';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

/*--ACTIVA EL MENU--*/
const container = document.querySelector('.left');
const btn = document.querySelector('.logo');
const arrow = document.querySelector('.arrow-logo');
const dropdown_options = document.querySelectorAll('.dropdown_options');
nav_active(container, btn, arrow, dropdown_options);