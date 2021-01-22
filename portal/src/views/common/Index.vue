<template>
  <div class="app-ccontent">
    <div class="index">
      <HelloWorld msg="Portal 首页"/>

      <p>简单路由跳转</p>
      <router-link to="/login">登录页面</router-link> /
      <router-link to="/test">测试页面</router-link> /
      <router-link to="/info">信息页面</router-link> /
      <router-link to="/admin">管理页面</router-link> /
      <router-link to="/echart">Echart页面</router-link>

      <br/>
      <br/>
      <p>欢迎你，{{getUserName}}</p>
      <el-button type="primary" @click="onLogout" style="width: 100%;">退出</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import CommonUtil from  "@/utils/commonUtil"
import Login from "@/views/common/Login.vue"

@Component({
  components: {
    HelloWorld,
  },
})

export default class Index extends Vue {

  get getUserName(){
    return CommonUtil.getLoginUser().username;
  }

  @Emit()
  onLogout(){
    // @ts-ignore
    new Login().onLogout();
  }
}
</script>

<style scoped>
  .app-ccontent{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .index{
    width: 500px;
  }
</style>
