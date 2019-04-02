// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store';
import chatEditor from 'v-chateditor';
Vue.config.productionTip = false
Vue.use(chatEditor);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  chatEditor,
  components: { App },
  template: '<App/>'
})
