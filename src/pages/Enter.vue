<template>
  <div id="enter">
    <div id="stats" class="animated bounceInDown" style="width: 90%; height: 40%">
      <div class="card">
        <div>
          <div class="title-label">
            <p>大学期间总计进馆</p>
          </div>
          <div class="title-info">
            <p><span class="title-strong">{{ enterCount_countup }}</span> 次</p>
          </div>
        </div>

        <div class="stats-level flex-row-container">
          <div class="flex-column-container" style="width: 60%;">
            <p>超过全校 <span class="text-strong">{{ enterPercentage_countup }}%</span> 的人</p>
            <Progress :percent="enterPercentage_countup" stroke-color="#104E8B" hide-info />
          </div>
          <div class="flex-column-container" style="width: 40%; border-left: 1px solid #ddd;">
            <p style="margin-top: 0.6em;">在院系中排名</p>
            <p>第 <span class="text-strong">{{ rankDept_countup }}</span> 名</p>
          </div>
        </div>
      </div>
    </div>

    <div id="slide1" class="slides-level">
      <p class="animated fadeInLeftBig delay-1s slow"><span class="text-strong">{{ parseTime(firstEnter.time) }} </span></p>
      <p class="animated fadeInLeftBig delay-1s slow">这天，你第一次走进了图书馆</p>
      <p class="animated fadeInLeftBig delay-2s slow">你可能还没有意识到</p>
      <p class="animated fadeInLeftBig delay-3s slow">这里将会伴你走过许多个充满学习的日日夜夜</p>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        enter: {
          enterCount: 118,
          rankAll: 2721,
          rankDept: 123,
          studentCount: 4321
        },
        firstEnter: {
          time: "2015-09-01"
        },
        enterCount_countup: 0,
        rankDept_countup: 0,
        enterPercentage_countup: 0.0,
      }
    },
    computed: {
      enterPercentage () {
        return 100 * this.enter.rankAll / this.enter.studentCount
      }
    },
    props: {
      // totalBorrow: Object,
      // firstBook: Object,
      // longestBorrow: Object,
    },
    async mounted () {
      setInterval(() => {
        if (this.enterCount_countup < this.enter.enterCount)
          this.enterCount_countup += 1
      }, 10)
      setInterval(() => {
        if (this.rankDept_countup < this.enter.rankDept)
          this.rankDept_countup += 1
      }, 10)
      setInterval(() => {
        if (this.enterPercentage_countup < this.enterPercentage)
          this.enterPercentage_countup = Number((this.enterPercentage_countup + 0.2).toFixed(1))
      }, 1)
    },
    methods: {
      parseTime (t) {
        let d = new Date(t)
        return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
      }
    }
  }
</script>

<style scoped>
  #stats {
    position: absolute;
    top: 5%;
    left: 5%;
  }
  #slide1 {
    position: absolute;
    top: 48%;
  }
  .card {
    padding: 7% 3%;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 3px 3px 3px #eee;
    border-radius: 10px;
  }
  .flex-row-container {
    display: flex;
    flex-direction: row;
  }
  .flex-column-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title-label {
    font-size: 2.2em;
    font-weight: bolder;
    color: #444;
  }
  .title-info {
    font-size: 1.8em;
    margin-top: -10px;
    margin-bottom: 10px;
  }
  .title-strong {
    font-size: 2.2em;
    font-weight: bolder;
    color: #104E8B;
  }
  .stats-level {
    border-top: 1px dashed #ddd;
    border-bottom: 1px solid #ddd;
  }
  .stats-level div {  
    padding: 5% 2%;
  }
  .text-strong {
    font-size: 1.6em;
    font-weight: bold;
    color: #104E8B;
  }
  .text-slight-strong {
    font-size: 1.1em;
    font-weight: bold;
    color: #104E8B;
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
</style>
