import Vue from 'vue'
import Router from 'vue-router'
import Launch from '@/components/launch/launch'
import Home from '@/components/home/home'
import Login from '@/components/login/login'
import Register from '@/components/register/register'
import Chat from '@/components/chat/chat'
import Contact from '@/components/contact/contact'
import Find from '@/components/find/find'
import My from '@/components/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/launch',
      meta:{index:0},
    },
    {
      path: '/launch',
      name: 'Launch',
      meta:{index:0},
      component: Launch
    },{
      path: '/home',
      name: 'Home',
      redirect: '/home/chat',
      meta:{index:1},
      component: Home,
      children: [
        {
          path: 'chat',
          component: Chat
        },
        {
          path: 'contact',
          component: Contact
        },
        {
          path: 'find',
          component: Find
        },
        {
          path: 'my',
          component: My
        },
      ]
    },{
      path: '/login',
      name: 'Login',
      meta:{index:2},
      component: Login
    },{
      path: '/register',
      name: 'Register',
      meta:{index:3},
      component: Register
    }
  ]
})
