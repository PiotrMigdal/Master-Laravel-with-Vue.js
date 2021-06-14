require('./bootstrap');

//6 import router
import router from './routes';

window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    //7 use router
    router
});
