<template>
  <div class="fullpage-container flex-column-container">
    <div class="fullpage-wp" v-fullpage="opts" ref="pages">
      <div class="page">
        <Enter v-bind="enterData" v-if="showStatus[0]" />
      </div>
      <div class="page">
        <Book v-bind="bookData" v-if="showStatus[1]" />
      </div>
      <div class="page">
        <Portrait v-bind="portraitData" v-if="showStatus[2]" />
      </div>
    </div>
    
    <div @click="moveNext">
      <img src="../../static/arrow-down.png" class="arrow animated infinite fadeInDown slow delay-1s">
    </div>
  </div>
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
        bookData: null,
        enterData: null,
        portraitData: null,
        showStatus: [true, false, false],
        opts: {
          start: 0,
          dir: 'v',
          duration: 1000,
          beforeChange: this.changeHandler,
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
      let [ firstBook, firstEnter, totalBorrow, enter, longestBorrow, portrait ] = this.data
      this.bookData = {
        totalBorrow: totalBorrow,
        firstBook: firstBook,
        longestBorrow: longestBorrow
      }
      this.enterData = {
        enter: enter,
        firstEnter: firstEnter
      }
      this.portraitData = {
        portrait: portrait
      }
    },
    methods: {
      moveNext () {
        this.$refs.pages.$fullpage.moveNext()
      },
      changeHandler (el, cur, next) {
        this.$set(this.showStatus, cur, false)
        this.$set(this.showStatus, next, true)
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
    bottom: 2%;
  }
</style>
