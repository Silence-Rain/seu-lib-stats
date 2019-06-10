<template>
  <div id="login" class="container">
    <transition 
      appear
      appear-class="logo-appear"
      appear-active-class="logo-appear-active"
    >
      <img src="../../static/logo.png" class="logo" />
    </transition>

    <transition
      appear
      appear-class="title-appear"
      appear-active-class="title-appear-active"
    >
      <div class="title-level">
        <img src="../../static/title-animate.png" class="title-animate"/>
        <img src="../../static/title-static.png" class="title-static" />
      </div>
    </transition>

    <div class="input-level">
      <Input v-model="cardnum" placeholder="我的一卡通号" />
      <Input v-model="name" placeholder="我的姓名" />
    </div>

    <a class="btn" :class="{ 'btn-active': isClick }" @click="login">
      开启我的记录 ...
    </a>  
  </div>
</template>

<script>
  import api from '../api'

  export default {
    data () {
      return {
        cardnum: "",
        name: "",
        isClick: false,
      }
    },
    async created () {
      
    },
    async mounted () {

    },
    methods: {
      login () {
        this.isClick = true
        if (this.cardnum) {
          if (this.name) {
            this.$Message.loading({
              content: "正在查找我的记录……"
            })
            let res = api.get("", {
                cardnum: this.cardnum,
                name: this.num
              })
            this.$Message.destroy()

            if (res.result) {
              // 组件间通信，传递data
            } else {
              this.$Message.error({
                content: "啊哦……好像一卡通号或者姓名不正确呢>_<",
                duration: 3
              })
            }
            this.isClick = false
            
          } else {
            this.$Message.error({
              content: "忘了填写姓名啦>_<",
              duration: 1.5
            })
          }
        } else {
          this.$Message.error({
            content: "忘了填写一卡通号啦>_<",
            duration: 1.5
          })
        }   
      }
    }
  }
</script>

<style>
  html {
    height: 100%;
  }
  body {
    height: 100%;
    background: url("../../static/bg.png");
    background-size:100% 100%;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
  .logo-appear {
    opacity: 0;
  }
  .logo-appear-active {
    transition: opacity 2s ease-in-out;
  }
  .logo {
    width: 80%;
    margin-top: 15%;
  }
  .title-appear {
    opacity: 0;
  }
  .title-appear-active {
    transition: opacity 2s ease-in-out 1.5s;
  }
  .title-level {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
    margin-top: 5%;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0);
    overflow: hidden;
  }
  .title-animate {
    width: 70px;
    animation: bounce-in 1s ease-in-out 4s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.5);
    }
    50% {
      transform: scale(1.1);
    }
    75% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
  }
  .title-static {
    width: 240px;
  }
  .input-level {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-top: 15%;
    background-color: rgba(255, 255, 255, 0);
  }
  .ivu-input-wrapper {
    padding: 0;
    margin: 10px 0;
  }
  .ivu-input {
    opacity: 0.8;
  }
  .btn {
    width: 50%;
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 30px;
    color: #777;
    box-shadow: 5px 5px 5px #ddd;
    font-size: 1.3em;
    font-weight: bold;
    text-align: center;
    position: fixed;
    bottom: 60px;
  }
  .btn-active {
    color: #444;
    background: linear-gradient(to right, rgba(195, 221, 176, .5), rgba(88, 131, 9, .5));
  }
</style>
