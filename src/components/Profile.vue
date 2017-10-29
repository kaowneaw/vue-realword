<template>
  <div class="ui segment">
    <h3 class="ui header">Profile</h3>
    <h4>Name:</h4>{{profile.name}}
    <h4>Description</h4> {{profile.description}}
  </div>
</template>
<script>
  export default {
    data: () => ({
      profile: {
        name: '',
        profile: ''
      }
    })
  }
</script>
