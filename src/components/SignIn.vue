<template>
  <div class="ui segment">
    <h2 class="ui header">SignIn</h2>
    <div @click="signIn" class="ui google plus button"><i class="google plus icon"></i> SignIn</div>
  </div>
</template>
<script>
  import firebase from 'firebase'

  export default {
    beforeRouteEnter (to, from, next) {
      const cancel = firebase.auth().onAuthStateChanged((user) => {
        cancel()
        if (user) {
          next(to.query.redirect || '/')
          return
        }
        next()
      })
    },
    methods: {
      signIn () {
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('profile')
        provider.addScope('email')
        firebase.auth().signInWithPopup(provider).then((res) => {
          this.$router.replace(this.$route.query.redirect || '/')
        })
      }
    }
  }
</script>
