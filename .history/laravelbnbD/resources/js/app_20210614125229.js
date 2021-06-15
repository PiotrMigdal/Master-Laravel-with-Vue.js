require('./bootstrap');

import Vue from 'vue';
//8 import VueRouter
import VueRouter from 'vue-router';

//6 import router
import router from './routes';

window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('example2-component', require('./components/Example2.vue').default);

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    //7 use router
    router
});
