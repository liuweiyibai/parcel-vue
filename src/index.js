import Vue from 'vue';
import App from './App';
import router from './router';
import './style/index.scss';
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})