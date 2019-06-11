<template>
  <transition 
    appear
    appear-class="item-appear"
    appear-active-class="item-appear-active"
  >
    <div style="height: 100%;">
      <div class="scroll-container" :style="{top: y + '%'}" @touchstart="ts" @touchmove="tm" @touchend="te">
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

      <button class="btn" @click="nextPage()">next</button>
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
        y: 0,
        startY: 0,
        isFirstTouch: true
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
      nextPage () {
        if (this.y > -200) {
          this.y -= 100
        }
      },
      lastPage () {
        if (this.y < 0) {
          this.y += 100
        }
      },
      ts (e) {
        e.preventDefault()
        this.startY = e.touches[0].pageY
      },
      tm (e) {
        e.preventDefault()
        let curY = e.touches[0].pageY

        if (this.startY - curY > 100 && this.isFirstTouch) {
          this.isFirstTouch = false
          this.nextPage()
        } else if (curY - this.startY > 100 && this.isFirstTouch) {
          this.isFirstTouch = false
          this.lastPage()
        }
      },
      te (e) {
        this.isFirstTouch = true
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
  .scroll-container{
    height: 100%;
    position: relative; 
    top: 0; 
    transition: top 1.5s;
  }
  .page{ 
    height: 100%; 
  }
  .btn {
    position: absolute;
    bottom: 10%;
    width: 30%;
    background-color: #333;
  }
</style>
