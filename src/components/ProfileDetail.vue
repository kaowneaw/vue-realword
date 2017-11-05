<template>
  <div class="ui centered grid">
    <br>
    <div class="ui card">
      <div class="image">
        <img v-if="profile.photo" :src="profile.photo">
      </div>
      <div class="content">
        <a class="header">{{profile.name}}</a>
        <div class="description">
          {{profile.description}}
        </div>
      </div>
    </div>
    <br>
  </div>
</template>
<script>
  export default {
    props: ['profile']
  }
</script>
