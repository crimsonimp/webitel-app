import Vue from 'vue';
import store from './store.js';

import App from './App.vue';

new Vue({
  el: '#app',
  store,
  render: function(h){
    return h(App)
  }
});