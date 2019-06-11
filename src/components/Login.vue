<template>
  <div id="login" class="container">
    <transition 
      appear
      appear-class="item-appear"
      appear-active-class="item-appear-active"
    >
      <img src="../../static/logo.png" class="logo" />
    </transition>

    <transition
      appear
      appear-class="item-appear"
      appear-active-class="title-appear-active"
    >
      <div class="title-level">
        <img src="../../static/title-animate.png" class="title-animate"/>
        <img src="../../static/title-static.png" class="title-static" />
      </div>
    </transition>

    <transition
      appear
      appear-class="item-appear"
      appear-active-class="input-appear-active"
    >
      <div class="input-level">
        <Input v-model="cardnum" placeholder="我的一卡通号" />
        <Input v-model="name" placeholder="我的姓名" />
      </div>
    </transition>

    <transition
      enter-class="item-appear"
      enter-active-class="item-appear-active"
    >
      <a class="btn" :class="{ 'btn-active': isClick }" @click="login" v-if="isInputFinished">
        开启我的记录 ...
      </a> 
    </transition>
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
    computed: {
      isInputFinished () {
        return this.cardnum && this.name
      }
    },
    async created () {
      
    },
    methods: {
      login () {
        this.isClick = true

        if (this.isInputFinished) {

          if (!/^[12]\d{8}$/.test(this.cardnum)) {
            this.$Message.error({
              content: "一卡通号写错啦>_<"
            })
            return
          }

          // if (!/^[\u4E00-\u9FA5]{2,}$/.test(this.name)) {
          //   this.$Message.error({
          //     content: "姓名写错啦>_<"
          //   })
          //   return
          // }

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
              content: "啊哦……没有找到数据呢>_< <br/> 请确认信息填写无误哦～",
              duration: 3
            })
          }

          this.isClick = false
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
  .item-appear {
    opacity: 0;
  }
  .item-appear-active {
    transition: opacity 2s ease-in-out;
  }
  .logo {
    width: 80%;
    margin-top: 15%;
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
  .input-appear-active {
    transition: opacity 2s ease-in-out 3s;
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
