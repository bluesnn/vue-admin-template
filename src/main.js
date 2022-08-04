import { createApp } from 'vue'
import App from './App.vue'
import pinia from '@/store'
import router from '@/router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as Icons from '@element-plus/icons-vue'

import './settings'

import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import '@/styles/index.css'
import 'uno.css'

const app = createApp(App)

app.use(ElementPlus, { locale: zhCn })
app.use(pinia)
app.use(router)
app.mount('#app')

// 注册全局组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key])
})
