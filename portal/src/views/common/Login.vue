<template>
  <div class="app-ccontent">
    <div class="login">
      <h3>Portal 登录页面</h3>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="登录账号">
          <el-input clearable v-model="form.username" placeholder="请输入登录账号" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="登录密码">
          <el-input clearable show-password v-model="form.password" placeholder="请输入登录密码" prefix-icon="el-icon-goods"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="onLogin" v-loading.fullscreen.lock="fullscreenLoading" style="width: 100%;">登 录</el-button>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Emit, Vue } from 'vue-property-decorator';
  import AxiosUtil from '@/utils/axiosUtil'
  import TokenUtil from "@/utils/tokenUtil"
  import CommonUtil from  "@/utils/commonUtil"
  import SessionStorageUtil from "@/utils/sessionStorageUtil";
  import router from '@/router'
  import Store from "@/store"

  @Component
  export default class Login extends Vue {
    private fullscreenLoading: boolean = false;
    private form: object = {
      username: "",
      password: ""
    };

    @Emit()
    private onLogin(): void{
      const vue = this;
      vue.fullscreenLoading = true;

      AxiosUtil.post(CommonUtil.getAdminUrl()+"/login",vue.form,function (result) {
        if(result.status !== 200){
          vue.fullscreenLoading = false;
          vue.$message.error(result.message);
          return
        }
        TokenUtil.setToken(result.data+"");

        CommonUtil.setLoginUser(function () {
          vue.fullscreenLoading = false;

          //跳转 params 是路由的一部分,必须要有。query 是拼接在url后面的参数，没有也没关系
          router.push({name:'Index'});
        })
      },function (error) {
        vue.fullscreenLoading = false;
      })
    }

    @Emit()
    public onLogout(): void{
      const vue = this;
      AxiosUtil.post(CommonUtil.getAdminUrl()+"/logout",{},function (result) {
        vue.$message.success('退出成功！');
        SessionStorageUtil.removeItem("loginUser");
        Store.commit('SET_USER', {});
        router.push({name:'Login'});
      })
    }
  }
</script>

<style scoped>
  /* <style scoped> 设置当前组件之外的元素不生效 */

  .app-ccontent{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login{
    width: 350px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #d7dae2;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-top: 15%;
  }
</style>