<template>
  <div class="fullpage-container flex-column-container">
    <div class="fullpage-wp" v-fullpage="opts" ref="pages">
      <div class="page fullsize">
        <Enter v-bind="enterData" v-if="showStatus[0]" />
      </div>
      <div class="page fullsize">
        <Book v-bind="bookData" v-if="showStatus[1]" />
      </div>
      <div class="page fullsize">
        <Portrait v-bind="portraitData" v-if="showStatus[2]" @to-first="moveToFirst" />
      </div>
    </div>
    
    <div @click="moveNext" v-if="!showStatus[2]">
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
        totalBorrow: Object.keys(totalBorrow).length !== 0 ? totalBorrow : null,
        firstBook: Object.keys(firstBook).length !== 0 ? firstBook : null,
        longestBorrow: Object.keys(longestBorrow).length !== 0 ? longestBorrow : null
      }
      this.enterData = {
        enter: Object.keys(enter).length !== 0 ? enter : null,
        firstEnter: Object.keys(firstEnter).length !== 0 ? firstEnter : null
      }
      this.portraitData = {
        portrait: Object.keys(portrait).length !== 0 ? portrait : null
      }
    },
    async mounted () {
    },
    methods: {
      moveNext () {
        this.$refs.pages.$fullpage.moveNext()
      },
      moveToFirst () {
        this.showStatus = [true, false, false]
        this.$refs.pages.$fullpage.moveTo(0)
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
  .fullsize {
    height: 100%;
  }
  .arrow {
    width: 10%;
    position: fixed;
    left: 45%;
    bottom: 2%;
  }
</style>
