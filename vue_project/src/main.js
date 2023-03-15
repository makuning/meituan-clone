import { createApp } from 'vue'
import App from './App.vue'


import 'amfe-flexible'  // 自适应字体大小插件
import { Button } from 'vant'   // vant组件库


const app = createApp(App)
app.use(Button)    // 使用vant组件
app.mount('#app')

