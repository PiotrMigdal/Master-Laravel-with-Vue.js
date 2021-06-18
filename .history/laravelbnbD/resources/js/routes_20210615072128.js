/*SETTING UP ROUTER
- In here you set up what will be presented under which link.
  so the http://127.0.0.1:8000/second will display './components/Example2'
  and http://127.0.0.1:8000/ will display'./components/ExampleComponent'
- You use VueRouter build in method
- Once set up you export this as router and you can import this in app.js
*/

//3 import VueRouter
import VueRouter from 'vue-router';

//1 import comonent
import ExampleComponent from './components/ExampleComponent';
import Example2 from './components/Example2';


//2 Set up routes variable
const routes = [
  {
    path: '/',
    component: ExampleComponent,
    name: 'home' //it shows now in the component view in VUE chrome ext.
  },
  {
    path: '/second',
    component: Example2,
    name: 'second'
  },
];

const router = new VueRouter({
  routes, //short for routes: routes
  mode: 'history' //so it won't show /#/ in address
});

//5 Export so it can be used in app.js - go there for point 6
export default router;