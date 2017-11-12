<template>
  <div class="ui menu">
    <router-link to="/" class="item" active-class="active" exact>Home</router-link>
    <div class="right menu">
      <router-link v-if="currentUser" to="/profile" class="item" active-class="active">Profile</router-link>
      <div v-if="currentUser" @click="signOut" class="item link">SignOut</div>
      <router-link v-else to="/signIn" class="item" active-class="active">SignIn</router-link>
    </div>
  </div>
</template>
<script>
  import firebase from 'firebase'

  export default {
    data: () => ({
      currentUser: null
    }),
    created () {
      const auth = firebase.auth()
      auth.onAuthStateChanged((user) => {
        this.currentUser = user
      })
    },
    methods: {
      signOut () {
        firebase.auth().signOut().then(() => {
          // Sign-out successful.
          this.$router.push('/')
        }, function (error) {
          // An error happened.
          console.log(error)
        })
      }
    }
  }
</script>
