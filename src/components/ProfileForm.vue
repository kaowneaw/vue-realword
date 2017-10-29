<template>
  <form class="ui form" @submit.prevent="save">
    <div class="field">
      <label>Name</label>
      <input v-model="name"/>
    </div>
    <div class="field">
      <label>Description</label>
      <input v-model="description"/>
    </div>
    <button class="ui submit blue button">Save</button>
    <button class="ui red button" @click="$emit('cancel')">Cancel</button>
  </form>

</template>
<script>
  export default {
    props: ['value'], // prop value is get value from v-model
    data: () => ({
      name: '',
      description: ''
    }),
    created () {
      this.name = this.value.name
      this.description = this.value.description
      console.log(this.value)
    },
    watch: {
      value () {
        this.name = this.value.name
        this.description = this.value.description
        console.log(this.value)
      }
    },
    methods: {
      save () {
        this.$emit('input', { // emit input for update value in v-model
          name: this.name,
          description: this.description
        })
        this.$emit('save') // call function save on parent
      }
    }
  }
</script>
