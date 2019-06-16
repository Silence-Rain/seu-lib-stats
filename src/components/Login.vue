<template>
  <div>
  
  <div id="login" class="flex-column-container">
    <transition 
      appear
      appear-active-class="animated bounceInDown slow"
    >
      <img src="../../static/logo.png" class="logo" @load="loadImg" />
    </transition>

    <transition
      appear
      appear-active-class="animated lightSpeedIn delay-2s"
    >
      <div class="flex-column-container title-level">
        <p class="title-static">de</p>
        <p class="title-animate animated tada delay-3s">毕业回忆</p>
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
</div>
</template>

<script>
  import api from '@/api'

  export default {
    data () {
      return {
        cardnum: "",
        name: "",
        isLoaded: false,
      }
    },
    computed: {
      isInputFinished () {
        return this.cardnum && this.name
      }
    },
    async mounted () {
      this.$Message.loading("正在加载……")
    },
    methods: {
      loadImg () {
        this.$Message.destroy()
      },
      async login () {
        if (this.isInputFinished) {

          if (!/^[12]\d{8}$/.test(this.cardnum)) {
            this.$Message.error({
              content: "一卡通号写错啦>_<"
            })
            return
          }

          this.$Message.loading({
            content: "正在提取回忆……",
            duration: 5
          })
          let res = await api.get("", {
              cardnum: this.cardnum,
              name: this.name
            })
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
  .flex-column-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    width: 80%;
    margin-top: 15%;
  }
  .title-level {
    width: 100%;
  }
  .title-animate {
    font-size: 4.5em;
    color: #104E8B;
    font-weight: bolder;
  }
  .title-static {
    font-size: 3em;
  }
  .input-level {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-top: 10%;
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
