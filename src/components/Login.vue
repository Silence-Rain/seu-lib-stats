<template>
  <div id="login" class="container">
    <transition 
      appear
      appear-active-class="animated bounceInDown slow"
    >
      <img src="../../static/logo.png" class="logo" />
    </transition>

    <transition
      appear
      appear-active-class="animated lightSpeedIn delay-2s"
    >
      <div class="title-level">
        <img src="../../static/title-animate.png" class="title-animate animated tada delay-3s"/>
        <img src="../../static/title-static.png" class="title-static" />
      </div>
    </transition>

    <transition
      appear
      appear-active-class="animated fadeIn delay-2s"
    >
      <div class="input-level">
        <Input v-model="cardnum" placeholder="你的一卡通号" />
        <Input v-model="name" placeholder="你的姓名" />
      </div>
    </transition>

    <transition
      enter-active-class="animated fadeInUp"
    >
      <a class="btn" @click="login" v-if="isInputFinished">
        开启回忆 ...
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
        if (this.isInputFinished) {

          // if (!/^[12]\d{8}$/.test(this.cardnum)) {
          //   this.$Message.error({
          //     content: "一卡通号写错啦>_<"
          //   })
          //   return
          // }
          // // 暂时取消姓名正则，以防莫名其妙的bug
          // if (!/^[\u4E00-\u9FA5]{2,}$/.test(this.name)) {
          //   this.$Message.error({
          //     content: "姓名写错啦>_<"
          //   })
          //   return
          // }

          this.$Message.loading({
            content: "正在提取回忆……"
          })
       
          // let res = api.get("", {
          //     cardnum: this.cardnum,
          //     name: this.num
          //   })

          // 测试数据
          let res = {
            result: true,
            data: {
              firstBook: {
                bookName: "第一本书",
                time: "2015-09-18"
              },
              totalBorrow: {
                borrowCount: 17,
                rankAll: 3456,
                rankDept: 201,
                studentCount: 4321
              },
              enter: {
                enterCount: 118,
                rank: 2789,
                studentCount: 4321
              },
              longestBorrow: {
                bookName: "最长的书",
                borrowTime: "2016-03-01",
                returnTime: "2016-05-29",
                span: 90
              },
              longestEnter: {
                beginTime: "2017-01-09",
                endTime: "2017-01-21",
                span: 13
              },
              portrait: "画像名称"
            }
          }
          this.$Message.destroy()

          if (res.result) {
            this.$router.replace({
              name: "首页",
              params: {
                data: res.data
              }
            })
          } else {
            this.$Message.error({
              content: "啊哦……没有找到回忆呢>_< <br/> 请确认信息填写无误哦～",
              duration: 3
            })
          }
        }
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    width: 80%;
    margin-top: 15%;
  }
  .title-level {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
    margin-top: 5%;
    justify-content: center;
    align-items: center;
  }
  .title-animate {
    width: 80px;
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
</style>
