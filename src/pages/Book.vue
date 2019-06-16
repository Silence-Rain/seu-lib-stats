<template>
  <div id="book">
    <div id="stats" class="animated bounceInDown" style="width: 90%; height: 40%">
      <div class="card">
        <div>
          <div class="title-label">
            <p>大学期间总计借阅</p>
          </div>
          <div class="title-info">
            <p><span class="title-strong">{{ borrowCount_display }}</span> 本书</p>
          </div>
        </div>

        <div class="stats-level flex-row-container">
          <div class="flex-column-container" style="width: 60%;">
            <p>超过全校 <span class="text-strong">{{ borrowPercentage_display }}%</span> 的人</p>
            <Progress :percent="borrowPercentage_countup" stroke-color="#104E8B" hide-info />
          </div>
          <div class="flex-column-container" style="width: 40%; border-left: 1px solid #ddd;">
            <p style="margin-top: 0.6em;">在院系中排名</p>
            <p>第 <span class="text-strong">{{ rankDept_display }}</span> 名</p>
          </div>
        </div>
      </div>
    </div>

    <div id="slide1" class="slides-level" v-if="firstBook">
      <p class="animated fadeInLeftBig delay-1s slow"><span class="text-strong">{{ parseTime(firstBook.time) }} </span></p>
      <p class="animated fadeInLeftBig delay-1s slow">这天，你走进图书馆，借走了你的第一本书</p>
      <p class="animated fadeInLeftBig delay-2s slow"><span class="text-strong">《 {{ firstBook.bookName }} 》</span></p>
    </div>

    <div id="slide2" class="slides-level right-align" v-if="longestBorrow">
      <p class="animated fadeInRightBig delay-3s slow">从 <span class="text-slight-strong">{{ parseTime(longestBorrow.borrowTime) }}</span> 到 <span class="text-slight-strong">{{ parseTime(longestBorrow.returnTime) }}</span></p>
      <p class="animated fadeInRightBig delay-3s slow"><span class="text-strong">{{ longestBorrow.span }}</span> 天这么长的时间里，你始终和</p>
      <p class="animated fadeInRightBig delay-4s slow"><span class="text-strong">《 {{ longestBorrow.bookName }} 》</span></p>
      <p class="animated fadeInRightBig delay-5s slow">相伴</p>
      <p class="animated fadeInRightBig delay-5s slow">你一定是从中读出了熟悉的自己～</p>
    </div>


  </div>
</template>

<script>
  export default {
    data () {
      return {
        borrowCount_countup: 0,
        rankDept_countup: 0,
        borrowPercentage_countup: 0,
        borrowCount_display: "0",
        rankDept_display: "-",
        borrowPercentage_display: "0",
      }
    },
    computed: {
      borrowPercentage () {
        return 100 - (100 * this.totalBorrow.rankAll / this.totalBorrow.studentCount)
      }
    },
    props: {
      totalBorrow: Object,
      firstBook: Object,
      longestBorrow: Object,
    },
    async mounted () {
      if (this.totalBorrow) {
        setInterval(() => {
          let range = this.totalBorrow.borrowCount
          let delta = range / 150

          if (this.borrowCount_countup < range - delta) {
            this.borrowCount_countup += delta
          } else {
            this.borrowCount_countup = range
          }
          this.borrowCount_display = this.borrowCount_countup.toFixed(0)

        }, 10)

        setInterval(() => {
          let range = this.totalBorrow.rankDept
          let delta = range / 150
          
          if (this.rankDept_countup < range - delta) {
            this.rankDept_countup += delta
          } else {
            this.rankDept_countup = range
          }
          this.rankDept_display = this.rankDept_countup.toFixed(0)

        }, 10)

        setInterval(() => {
          let range = this.borrowPercentage
          let delta = range / 150
          
          if (this.borrowPercentage_countup < range - delta) {
            this.borrowPercentage_countup += delta
          } else {
            this.borrowPercentage_countup = range
          }
          this.borrowPercentage_display = this.borrowPercentage_countup.toFixed(2)

        }, 10)
      }
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
  #slide2 {
    position: absolute;
    top: 68%;
    right: 0;
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
