
import Vue from 'vue'
import App from './App'
import GoTop from "./index";
Vue.use(GoTop)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
