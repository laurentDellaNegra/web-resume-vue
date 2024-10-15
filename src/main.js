import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@openfonts/work-sans_all/index.css';
import '@mdi/font/css/materialdesignicons.css';

// Plugins
import vuetify from './plugins/vuetify';
import './plugins';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
