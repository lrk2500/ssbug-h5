import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path: "*",
			redirect: "/HomePage"
		},
		{
      path: '/homepage',
      name: 'HomePage',
      component: HomePage,
      children: [{
          path: 'writings',
          name: 'Writings',
          // component: Writings,
					component: resolve => require(['@/components/article/Writings'], resolve),
        }

      ]
    },
    {
      path: '/articleDisplay',
      name: 'ArticleDisplay',
      // component: ArticleDisplay
			component: resolve => require(['@/components/ArticleDisplay'], resolve),
    },
    {
      path: '/login',
      name: 'Login',
      // component: Login,
			component: resolve => require(['@/components/user/Login'], resolve),
    },
    {
      path: '/register',
      name: 'Register',
      // component: Register,
			component: resolve => require(['@/components/user/Register'], resolve),
    },
    {
      path: '/release',
      name: 'Release',
      // component: Release
			component: resolve => require(['@/components/article/Release'], resolve),
    },

  ]
})
