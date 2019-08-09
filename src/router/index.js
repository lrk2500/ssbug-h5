import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ArticleDisplay from '@/components/ArticleDisplay'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import Release from '@/components/article/Release'
import Writings from '@/components/article/Writings'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/homepage',
      name: 'HomePage',
      component: HomePage,
      children: [{
          path: 'writings',
          name: 'Writings',
          component: Writings
        }

      ]
    },
    {
      path: '/articleDisplay',
      name: 'ArticleDisplay',
      component: ArticleDisplay
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/release',
      name: 'Release',
      component: Release
    }
  ]
})
