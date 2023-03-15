import { createApp } from 'vue'
import App from './App.vue'


import 'amfe-flexible'                  // 自适应字体大小插件
import { Button,Icon } from 'vant'      // vant组件库
import router from './router/index'     // 引入路由
import './common/css/base.less'         // 引入自定义全局样式


const app = createApp(App)
app.use(Button)     // 使用vant-button组件
app.use(Icon)       // 使用vant-icon组件
app.use(router)
app.mount('#app')
