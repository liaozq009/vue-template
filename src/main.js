import Vue from "vue"
import App from "./App.vue"
import router from './router'
import store from './store'
import 'amfe-flexible'
import '@/assets/css/global.less'

import {
  Button,
  Tabbar,
  TabbarItem,
  Checkbox,
  Switch
} from "vant";

Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem)
Vue.use(Checkbox)
Vue.use(Switch)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
