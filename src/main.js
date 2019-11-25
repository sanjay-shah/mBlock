import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';

Vue.use(BootstrapVue);

const vm = new Vue({
  render: h => h(App),
  router
});

vm.$mount('#app');
