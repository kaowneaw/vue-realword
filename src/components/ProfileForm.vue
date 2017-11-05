<template>
  <form class="ui form" @submit.prevent="save">
    <div class="field">
      <label>Photo</label>
      <img :src="photo" class="ui small image" style="margin: auto"/>
      <br>
      <div @click="openUpload" class="ui green button">Select Photo</div>
    </div>
    <div class="field">
      <label>Name</label>
      <input v-model="name"/>
    </div>
    <div class="field">
      <label>Description</label>
      <input v-model="description"/>
    </div>
    <button class="ui submit blue button">Save</button>
    <div class="ui red button" @click="$emit('cancel')">Cancel</div>
    <upload-modal ref="upload" @success="uploaded"></upload-modal>
  </form>

</template>
<script>
  import UploadModal from './UploadModal'

  export default {
    components: {UploadModal},
    props: ['value'], // prop value is get value from v-model
    data: () => ({
      name: '',
      description: '',
      photo: ''
    }),
    created () {
      this.name = this.value.name
      this.description = this.value.description
      this.photo = this.value.photo
      console.log(this.value)
    },
    watch: {
      value () {
        this.name = this.value.name
        this.description = this.value.description
        this.photo = this.value.photo
        console.log(this.value)
      }
    },
    methods: {
      save () {
        this.$emit('input', { // emit input for update value in v-model
          name: this.name,
          description: this.description,
          photo: this.photo
        })
        this.$emit('save') // call function save on parent
      },
      openUpload () {
        this.$refs.upload.open()
      },
      uploaded (url) {
        this.photo = url
      }
    }
  }
</script>
