

require('./bootstrap');

//8 import Vue builded in
import Vue from 'vue';
import VueRouter from 'vue-router';

//6 import router
import router from './routes';

//9 - import index so it is single page
import Index from './index';

window.Vue = require('vue').default;

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    //7 use router
    router,
    components: {
      //10 - add index to components - go to welcome.blade for point 11
      "index": Index
    }
});
