//SET UP ROUTER

//3 import VueRouter
import VueRouter from 'vue-router';

//1 import comonent
import ExampleComponent from './components/ExampleComponent';


//2 Set up routes variable
const routes = [
  {
    path: '/',
    component: ExampleComponent,
    name: 'home', //it shows now in the component view in VUE chrome ext.
    mode: 'history'
  },
];

//4 Set router variable
const router = new VueRouter({
  routes //short for routes: routes
});

//5 Export so it can be used in app.js - go there for point 6
export default router;