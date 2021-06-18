require('./bootstrap');

import Vue from 'vue';
//8 import VueRouter
import VueRouter from 'vue-router';


//6 import router
import router from './routes';

import Index from './index';

window.Vue = require('vue').default;

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    //7 use router
    router,
    components: {
      "index": Index
    }
});
