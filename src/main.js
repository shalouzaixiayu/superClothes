import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Bus from './mitt'
// import Toast from './components/common/toast/index'

const app = createApp(App)
app.use(store).use(router).mount('#app')
// 使用插件 模拟数据总线挂载
app.config.globalProperties.$bus = Bus
