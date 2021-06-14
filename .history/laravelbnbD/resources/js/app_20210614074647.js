require('./bootstrap');

//8 import VueRouter
import VueRouter from 'vue-router';

//6 import router
import router from './routes';

window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    //7 use router
    router
});
