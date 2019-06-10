<template>
  <div id="index">
    <Button type="primary">Primary</Button>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
  </div>
</template>

<script>
  import api from '../api'

  export default {
    data () {
      return {
        value: ""
      }
    },
    async created () {
      //console.log(await api.get('api/notice'))
    },
    methods: {
    }
  }
</script>

<style>
  
</style>
