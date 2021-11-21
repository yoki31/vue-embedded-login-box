import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { Frontegg } from '@frontegg/vue';

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
});


Vue.use(Frontegg, {
  contextOptions: {
    baseUrl: 'https://samples-demo.frontegg.com',
  },
  // Replace this with your app logo 👇
  headerImage: 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg',
  router,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
