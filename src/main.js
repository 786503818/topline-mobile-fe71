import Vue from 'vue'// 导入vue
import App from './App.vue'// 导入根组件
import router from './router'// 导入路由模块
import store from './store'
import Vant from 'vant' // 导入组件库
import 'vant/lib/index.css'// 导入样式
import 'amfe-flexible' // 导入适配
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
