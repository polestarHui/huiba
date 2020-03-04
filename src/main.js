// 引入vue
import Vue from 'vue'

// 引入根组件
import app from './app.vue'

// 引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

// 引入mui
import './lib/mui/css/mui.min.css'
// 导入mui扩展图标的样式文件
import './lib/mui/css/icons-extra.css'




const vm = new Vue({
    el:'#app',
    render:h=>h(app),
    router
})