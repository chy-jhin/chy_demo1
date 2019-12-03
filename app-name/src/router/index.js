import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home/Home.vue'
import Home2 from '../components/Home2/Home2.vue'
import Home3 from '../components/Home3/Home3.vue'

Vue.use(Router)

// 导入路由组件
// 创建路由对象
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: 'Home',
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: Home,
        },
        {
          path: 'Home2',
          name: 'Home2',
          component: Home2
        },
        {
          path: 'Home3',
          name: 'Home3',
          component: Home3
        }
      ]
    }
  ]
})
