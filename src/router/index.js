import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('view/home/Home.vue')
const Class = () => import('view/class/Class.vue')
const Shop = () => import('view/shop/Shop.vue')
const Me = () => import('view/me/Me.vue')
const Detail = ()=> import('view/detail/Detail')
const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home',
    name:"Home",
    component: Home,
    meta: {
      title:"首页",
      keepAlive:true,  // alive 
    }
  },
  {
    path:'/class',
    name:'Class',
    component: Class,
    meta: {
      title:"分类"
    }
  },
  {
    path:'/shop',
    name:'Shop',
    component:Shop,
    meta: {
      title:"购物车"
    }
  },
  {
    path:'/me',
    name:'Me',
    component:Me,
    meta: {
      title:"我的"
    }
  },
  {
    path:"/detail",
    name:'Detail',
    component:Detail,
    meta: {
      title:'详情'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  document.title = to.meta.title
  next()
})


export default router
