import Vue from 'vue';
import App from './App';
import store from './store.js';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store // 所有的组件对象多了个$store对象
});
