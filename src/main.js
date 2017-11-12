// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/routes'
import firebase from 'firebase'
import '../node_modules/semantic-ui-css/semantic.min.css'
import '../node_modules/semantic-ui-css/semantic.min.js'
import { Auth } from './services'
import moment from 'moment'
import store from './store'

Vue.config.productionTip = false

// Initialize Firebase
firebase.initializeApp(
  {
    apiKey: 'AIzaSyDNBwUjjK4TZiDv9RRAlYoGpWSkgxPGA2E',
    authDomain: 'vue-realworld.firebaseapp.com',
    databaseURL: 'https://vue-realworld.firebaseio.com',
    projectId: 'vue-realworld',
    storageBucket: 'vue-realworld.appspot.com',
    messagingSenderId: '771940835048'
  }
)

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.requireAuth)) {
    Auth.requireUser((user) => {
      if (user) {
        next()
        return
      }
      next({path: '/signin', query: {redirect: to.fullPath}})
    })
    return
  }
  next()
})

const ticker = new Vue({
  data: () => ({
    tick: 0
  }),
  created () {
    setInterval(() => {
      this.tick = Date.now()
    }, 10000)
  }
})

Vue.filter('fromNow', (value) => {
  /* eslint-disable */ ticker.tick  //ticker filter date every 10 sec
  return moment(value).fromNow()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
