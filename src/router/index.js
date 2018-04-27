import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../view/hello';
const rolesRouterMap = [ {
    path: "/hello",
    name: "hello",
    component: Hello
  }];
Vue.use(Router);

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: rolesRouterMap
})