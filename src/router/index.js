import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'

Vue.use(Router)

const router = new Router({
  routes: [
        {
		      path: '/',
		      name: 'home',
		      component: home,
		    },
		    {
		      path: '/login',
		      name: 'login',
		      component: login,
		    },
		    {
		      path: '**',   // 错误路由
		      redirect: '/'   //重定向
		    },
  ]
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
//console.log(to);
//console.log(from);
	next()
});

export default router;


