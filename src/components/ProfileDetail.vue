<template>
  <div class="ui centered grid">
    <br>
    <div class="ui card">
      <div class="image">
        <img src="https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header">
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
