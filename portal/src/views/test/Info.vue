<template>
    <div class="app-ccontent">
        <p>profiles active：{{profilesActive}}</p>
        <p>node env：{{nodeEnv}}</p>
        <p>{{adminUrl()}}</p>
        <br/>
        <br/>
        <el-divider content-position="left">所有登录用户列表</el-divider>
        <el-button type="primary" @click="getUserList">调用接口获取数据</el-button>
        <p v-for="user in userList">
            {{user}}
        </p>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import CommonUtil from  "@/utils/commonUtil"
    import AxiosUtil from '@/utils/axiosUtil'


    @Component
    export default class Info extends Vue {
        private profilesActive: string = CommonUtil.getProfilesValueByKey("VUE_APP_PROFILES_ACTIVE");
        private nodeEnv: string = CommonUtil.getProfilesValueByKey("NODE_ENV");
        private userList: {} = [];

        adminUrl(): string {
            return '后台服务地址：' + CommonUtil.getAdminUrl();
        }
        getUserList(){
            const vue = this;
            AxiosUtil.post("/tbUser/list",{},function (result) {
                vue.userList = result.data;
            })
        }
    }
</script>

<style scoped>
    .app-ccontent{
        padding: 20px;
    }
</style>
