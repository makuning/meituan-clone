import { createApp } from 'vue'
import App from './App.vue'


import 'amfe-flexible'  // 自适应字体大小插件
import { Button } from 'vant'   // vant组件库
import router from './router'  // 引入路由


const app = createApp(App)
app.use(Button)    // 使用vant组件
app.user(router)
app.mount('#app')
