import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(iView);
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
