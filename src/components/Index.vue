<template>
  <transition 
    appear
    appear-active-class="animated fadeIn slow"
  >
    <div class="fullpage-container flex-column-container">
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
      
      <div @click="moveNext">
        <img src="../../static/arrow-down.png" class="arrow animated infinite fadeInDown slow delay-1s">
      </div>
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
  .flex-column-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .arrow {
    width: 10%;
    position: fixed;
    left: 45%;
    bottom: 5%;
  }
</style>
