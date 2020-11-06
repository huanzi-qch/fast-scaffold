<!-- 这里是项目路口，配置<router-view/>即可 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component,Vue } from 'vue-property-decorator';

  @Component
  export default class App extends Vue {

  }
</script>

<style>
  /* 公用样式 */
  html,body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .el-divider__text {
    color: #03A9F4 !important;
  }
</style>
