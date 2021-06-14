import ExampleComponent from './components/ExampleComponent';
import VueRouter from 'vue-roater';
const routes = [
  {
    path: '/',
    comonent: ExampleComponent
  },
];

const router = new VueRouter((
  routes //short for routes: routes
));

export default router;