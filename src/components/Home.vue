<template>
  <div class="ui basic segment">
    <div class="ui segment">
      <form class="ui form" @submit.prevent="post">
        <div class="field">
          <textarea v-model.trim="input"></textarea>
        </div>
        <button class="ui blue button" :class="{'loading disable': posting}">Post</button>
      </form>
    </div>
    <div v-for="tweet in tweets" class="ui segment">
      <div><img class="ui circular image" :src="findUserPhoto(tweet.owner)"/>{{ findUserName(tweet.owner) }}</div>
      {{tweet.content}}
      <br>
      {{tweet.timestamp | fromNow}}
    </div>
  </div>
</template>
<script>
  import { Post, User } from '../services'

  export default {
    data: () => ({
      input: '',
      posting: false,
      tweets: [],
      users: []
    }),
    created () {
      Post.list((result) => {
        this.tweets = result
      })
      User.list((result) => {
        this.users = result
        console.log(this.users)
      })
    },
    methods: {
      post () {
        if (!this.input) return
        this.posting = true
        Post.post(this.input)
          .then(() => {
            this.posting = false
            this.input = ''
          })
      },
      findUserName (id) {
        const x = this.users.find((it) => it.$id === id)
        return x ? x.name : ''
      },
      findUserPhoto (id) {
        const x = this.users.find((it) => it.$id === id)
        return x ? x.photo : ''
      }
    }
  }
</script>
<style scope>
  .circular.image{
    width: 42px;
    height:42px;
  }
</style>
