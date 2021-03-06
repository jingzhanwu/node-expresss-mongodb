// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import SvgIcon from '@/components/SvgIcon'
import { format, chaining } from '@/utils/tools'
// 全局svg图标组件 使用方法
Vue.component('svg-icon', SvgIcon)

Vue.config.productionTip = false
Vue.prototype.format = format
Vue.prototype.chaining = chaining
Vue.use(ElementUi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
