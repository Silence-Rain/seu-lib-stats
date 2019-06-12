import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueFullpage from 'fullpage-vue'
import 'fullpage-vue/src/fullpage.css'
import 'animate.css'

// Vue.config.productionTip = false

Vue.use(iView)
Vue.use(VueFullpage)

router.afterEach(route => document.title = route.name)

const vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
