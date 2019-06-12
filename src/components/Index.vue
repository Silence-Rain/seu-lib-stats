<template>
  <transition 
    appear
    appear-class="item-appear"
    appear-active-class="item-appear-active"
  >
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="pages">
        <div class="page">
          <Book />
        </div>
        <div class="page">
          <Enter />
        </div>
        <div class="page">
          <Portrait />
        </div>
      </div>
      <button @click="moveNext">next</button>
    </div>
  </transition>
</template>

<script>
  import api from '@/api'
  import Book from '@/pages/Book'
  import Enter from '@/pages/Enter'
  import Portrait from '@/pages/Portrait'

  export default {
    data () {
      return {
        data: null,
        opts: {
          start: 0,
          dir: 'v',
          duration: 500
        }
      }
    },
    components: {
      Book,
      Enter,
      Portrait
    },
    async created () {
      this.data = this.$route.params.data
      console.log("data: ", this.data)
    },
    methods: {
      moveNext(){
        this.$refs.pages.$fullpage.moveNext();
      }
    }
  }
</script>

<style scoped>
  .item-appear {
    opacity: 0;
  }
  .item-appear-active {
    transition: opacity 2s ease-in-out;
  }
</style>
