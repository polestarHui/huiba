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

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入axios
import axios from 'axios'
// 配置请求的域名
// axios.defaults.baseURL='http://doobu.biz/datateach/server/public/index.php?s=/index'
// axios.defaults.baseURL='http://116.62.7.120/phpz/datateach/public/index.php?s=/index'

Vue.prototype.$ajax=axios

// 引入qs
import qs from 'qs'
// 超时时间
axios.defaults.timeout = 10000;
// http请求拦截器
axios.interceptors.request.use(config => {
  if(config.method=='post'){
    config.data=qs.stringify(config.data);//防止post请求参数无法传到后台  在这里就用到了qs
  }
  let loading = ElementUI.Loading.service({//使用element-ui的加载条组件
    fullscreen: true,
    text: '拼命加载中...',
  });
  return config
}, error => {
  let loading = ElementUI.Loading.service({});
  loading.close();    //关闭加载前，记得重新定义实例
  return Promise.reject(error)
});
// http响应拦截器
axios.interceptors.response.use(data => {
  let loading = ElementUI.Loading.service({});
  loading.close();
  return data
}, error => {
  let loading = ElementUI.Loading.service({
    fullscreen: true,
    text: '拼命加载中...',
  });
  loading.close();
  return Promise.reject(error)
});

const vm = new Vue({
    el:'#app',
    render:h=>h(app),
    router
})