<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import 'normalize.css'

  export default {
    name: 'app',
    data() {
      return {
      }
    },
    async created () {
    },
    methods: {
    }
  }
</script>

<style>
  :root {
    -webkit-tap-highlight-color: transparent;
  }
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Source Han Sans CN', 'Noto Sans CJK SC', 'Microsoft YaHei UI', 'Microsoft YaHei', sans-serif;
  }
  a, a:link, a:hover, a:active, a:focus, a:visited {
    color: inherit;
    text-decoration: none;
    -webkit-appearance: none;
  }
  button, input {
    outline: none;
    border: none;
  }
  input, input:focus {
    -webkit-appearance: none;
  }
</style>
