// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/routes'
import firebase from 'firebase'
import '../node_modules/semantic-ui-css/semantic.min.css'

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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
