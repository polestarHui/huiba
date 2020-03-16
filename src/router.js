// 引入路由
import VueRouter from 'vue-router'

// 引入home
import home from './components/home/home_index.vue'
import search from './components/home/search.vue'
import host from './components/home/host.vue'

// 引入msg
import msg from './components/msg/msg_index.vue'
import aboutme from './components/msg/aboutme.vue'
import aboutDetails from './components/msg/aboutDetails.vue'
import comment from './components/msg/comment.vue'
import thumb from './components/msg/thumb.vue'


// 引入register
import login from './components/register/login.vue'
import register from './components/register/register.vue'
import quick from './components/register/quick.vue'
import find from './components/register/findPas.vue'

// 引入my
import my from './components/my/my_index.vue'
import set from './components/my/set.vue'
import changePas from './components/my/setPas.vue'
import setPeople from './components/my/setPeople.vue'
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/login'},
        {path:'/login',component:login,name:'login'},
        {path:'/home',component:home,name:'home'},
        {path:'/search',component:search,name:'search'},
        {path:'/msg',component:msg,name:'msg'},
        {path:'/aboutme',component:aboutme,name:'aboutme'},
        {path:'/aboutDetails',component:aboutDetails,name:'aboutDetails'},
        {path:'/comment',component:comment,name:'comment'},
        {path:'/thumb',component:thumb,name:'thumb'},
        {path:'/register',component:register,name:'register'},
        {path:'/quick',component:quick,name:'quick'},
        {path:'/find',component:find,name:'find'},
        {path:'/host',component:host,name:'host'},
        {path:'/my',component:my,name:'my'},
        {path:'/set',component:set,name:'set'},
        {path:'/changePas',component:changePas,name:'changePas'},
        {path:'/setPeople',component:setPeople,name:'setPeople'},
    ]
})
export default router