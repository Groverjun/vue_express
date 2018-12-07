import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import message from '@/components/messagePage/message'
import data from '@/components/dataPage/data'
import markdown from '@/components/markdown/markdown'
import img from '@/components/upimg/img'
import sentenceday from '@/components/sentenceday/sentenceday'

Vue.use(Router)

const router = new Router({
//mode: 'history',
  routes: [
        {
		      path: '/',
		      name: 'home',
		      component: home,
		      children:[
				    {
					    path: '/home/message',
					    name: 'message',
					    component: message,
					},
		      {
					    path: '/home/data',
					    name: 'data',
					    component: data,
					},
					{
					    path: '/home/markdown',
					    name: 'markdown',
					    component: markdown,
					},
					{
					    path: '/home/sentenceday',
					    name: 'sentenceday',
					    component: sentenceday,
					},
					{
					    path: '/home/img',
					    name: 'img',
					    component: img,
					},
		      ],redirect:'/home/markdown'
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
