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
  @font-face {
    font-family: "XingZheNote";
    src: url("../static/fonts/XingZheNote.woff");
  }
  * {
    font-family: 'XingZheNote', sans-serif;
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
  html {
    height: 100%;
  }
  body {
    height: 100%;
    background: url("../static/bg.png");
    background-size:100% 100%;
  }
  div {
    background-color: rgba(255, 255, 255, 0);
  }
  #app {
    height: 100%;
  }
  .ivu-progress-inner {
    padding: 1px;
    border: 1px solid #777;
  }
</style>
