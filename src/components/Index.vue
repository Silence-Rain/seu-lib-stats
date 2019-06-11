<template>
  <transition 
    appear
    appear-class="item-appear"
    appear-active-class="item-appear-active"
  >
    <div id="index">
      111
    </div>
  </transition>
</template>

<script>
  import api from '../api'

  export default {
    data () {
      return {
        data: null,
      }
    },
    async created () {
      this.data = this.$route.params.data
      console.log(this.data)
    },
    methods: {
    }
  }
</script>

<style>
  .item-appear {
    opacity: 0;
  }
  .item-appear-active {
    transition: opacity 2s ease-in-out;
  }
</style>
