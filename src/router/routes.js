import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profie from '@/components/Profile'
import User from '@/components/User'
import SignIn from '@/components/SignIn'
import ProfileEdit from '@/components/ProfileEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/profile',
      name: 'Profile',
      component: Profie,
      meta: {requireAuth: true}
    }, {
      path: '/profile/edit',
      name: 'ProfileEdit',
      component: ProfileEdit,
      meta: {requireAuth: true}
    }, {
      path: '/user/:id',
      name: 'User',
      component: User
    }, {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    }, {
      path: '*',
      redirect: {name: 'SignIn'}
    }
  ],
  mode: 'history'
})
