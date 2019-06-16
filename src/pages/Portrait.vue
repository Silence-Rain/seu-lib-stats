<template>
  <div id="portrait">
    <div class="mask" v-if="isShare" @click="share">
      <img src="../../static/arrow-up-curve.png" />
      <p>点击这里分享</p>
    </div>

    <div id="slide1" class="slides-level" v-if="portrait">
      <p class="animated fadeInLeftBig">经过图书馆的分析，你应该是……</p>
    </div>

    <div id="portrait-title" class="animated fadeIn delay-1s">
      <p class="animated heartBeat delay-2s">{{ portraits[portrait.category] }}</p>
    </div>
    
    <div id="slide2" class="slides-level right-align">
      <p class="animated fadeInRightBig delay-2s">{{ portraitsDesc[portrait.category][0] }}</p>
      <p class="animated fadeInRightBig delay-3s">{{ portraitsDesc[portrait.category][1] }}</p>
    </div>

    <div id="btns" class="flex-column-container animated fadeInUp delay-4s">
      <a class="btn" @click="share">
        分享给朋友
      </a> 
      <a class="btn" @click="redirectToFirst">
        再次回忆
      </a> 
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        portraits: ["借书少进馆少", "借书少进馆多", "借书多进馆少", "借书多进馆多"],
        portraitsDesc: [["借书少进馆少111", "借书少进馆少222"], ["借书少进馆多111", "借书少进馆多222"], ["借书多进馆少111", "借书多进馆少222"], ["借书多进馆多111", "借书多进馆多222"]],
        isShare: false,
      }
    },
    props: {
      portrait: Object,
    },
    async mounted () {
    },
    methods: {
      share () {
        this.isShare = !this.isShare
      }, 
      redirectToFirst () {
        this.$emit("to-first")
      }
    }
  }
</script>

<style scoped>
  #portrait {
    height: 100%;
    font-size: 1.2em;
  }
  #slide1 {
    position: absolute;
    top: 10%;
  }
  #portrait-title {
    width: 80%;
    font-size: 3em;
    font-weight: bold;
    color: #104E8B;
    text-align: center;
    position: absolute;
    top: 20%;
    left: 10%;
  }
  #slide2 {
    position: absolute;
    top: 35%;
    right: 0;
  }
  #btns {
    width: 100%;
    position: absolute;
    top: 70%;
  }
  .flex-column-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mask {
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    z-index: 1000;
  }
  .mask img {
    width: 15%;
    position: absolute;
    top: 5%;
    right: 10%;
  }
  .mask p {
    position: absolute;
    top: 15%;
    right: 20%;
  }
  .slides-level {
    padding: 2% 5%;
  }
  .slides-level p {
    margin: 5px;
    padding: 2px 5px;
    border-bottom: 1px solid #ddd;
    line-height: 1.8em;
  }
  .right-align p {
    text-align: right;
  }
  .btn {
    width: 50%;
    padding: 15px;
    margin-bottom: 5%;
    border: 2px solid #ddd;
    border-radius: 30px;
    color: #777;
    box-shadow: 5px 5px 5px #ddd;
    font-size: 1.3em;
    font-weight: bold;
    text-align: center;
  }
</style>
