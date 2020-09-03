import VueRouter from 'vue-router'

// 导入路由组件
import HomeContainer from './components/tabbars/HomeContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
import ShopcarContainer from './components/tabbars/ShopcarContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import goodsdesc from './components/goods/goodsdesc.vue'
import goodscomment from './components/goods/goodscomment.vue'
// 创建路由对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo, props: true }, // 启用 props 来接收路由的参数
    { path: '/home/photolist', component: PhotoList },
    { path: '/home/goodslist', component: goodslist },
    { path: '/home/goodsinfo/:id', component: goodsinfo,props: true},
    { path: '/home/goodsdesc/:id', component: goodsdesc,props: true},
    { path: '/home/goodscomment/:id', component:goodscomment,props:true,name:'goodscmt'},

  ],
  linkActiveClass: 'mui-active' // 手动设置 被激活的 路由链接的高亮类名
})

export default router