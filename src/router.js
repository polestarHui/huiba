// 引入路由
import VueRouter from 'vue-router'

// 引入home
import home from './components/home/home_index.vue'
import search from './components/home/search.vue'

// 引入msg
import msg from './components/msg/msg_index.vue'
import aboutme from './components/msg/aboutme.vue'
import aboutDetails from './components/msg/aboutDetails.vue'
import comment from './components/msg/comment.vue'

// 引入

const router = new VueRouter({
    // mode:'history',
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home,name:'home'},
        {path:'/search',component:search,name:'search'},
        {path:'/msg',component:msg,name:'msg'},
        {path:'/aboutme',component:aboutme,name:'aboutme'},
        {path:'/aboutDetails',component:aboutDetails,name:'aboutDetails'},
        {path:'/comment',component:comment,name:'comment'}
    ]
})
export default router