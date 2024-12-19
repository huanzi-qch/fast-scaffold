<template>
    <div class="app-ccontent">
        <el-container>
            <el-aside width="200px">
                <!-- 标题 -->
                <h3 class="title">Admin管理页面</h3>
                <el-menu
                        default-active="1"
                        @select="handleSelect"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <el-menu
                            default-active="1"
                            class="el-menu-demo"
                            mode="horizontal"
                            @select="handleSelect"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项1</el-menu-item>
                                <el-menu-item index="2-4-2">选项2</el-menu-item>
                                <el-menu-item index="2-4-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="3" disabled>消息中心</el-menu-item>
                    </el-menu>
                </el-header>
                <el-main>
                    <div class="main">
                        <el-divider content-position="left">avue骚气封装-FORM表单</el-divider>
                        <avue-form ref="form" v-model="form.obj" :option="form.option" @reset-change="emptytChange" @submit="submit">
                            <template slot-scope="scope" slot="menuForm">
                                <el-button @click="tip">自定义按钮</el-button>
                            </template>
                        </avue-form>

                        <el-divider content-position="left">avue骚气封装-CRUD表格</el-divider>
                        <avue-crud ref="crud" :option="crud.option" :data="crud.data" :page="crud.page" @on-load="onLoad"></avue-crud>
                    </div>
                </el-main>
                <el-footer>@ huanzi-qch 2020</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
    import { Component, Emit, Vue } from 'vue-property-decorator';
    import {Object} from  "@/utils/commonUtil"

    @Component
    export default class Admin extends Vue {
        private crud: Object = {
            page: {
                pageSize: 20,
                pagerCount:5,
                currentPage: 1,
                total: 30,
                layout: "sizes, prev, pager, next, jumper,total",
                background:true,
                pageSizes:[10, 20, 30, 40, 50, 100],
            },
            option:{
                border: true,
                index: true,
                expandLevel: 3,
                headerAlign: 'center',
                align: 'center',
                tree: true,
                labelWidth: 100,
                column: [{
                    width:130,
                    label: '姓名',
                    prop: 'name',
                }, {
                    label: '性别1',
                    prop: 'sex',
                },
                    {
                        label: '自定义图标',
                        prop: 'icon',
                        type: "icon",
                        iconList: [{
                            label: '基本图表',
                            list: ['el-icon-time', 'el-icon-bell', 'el-icon-star-on']
                        }]
                    }, {
                        label: '复杂表头',
                        children: [{
                            label: '信息',
                            children: [{
                                label: '年龄',
                                prop: 'age'
                            }, {
                                label: '手机号',
                                prop: 'phone',
                            }]
                        }, {
                            label: '级别',
                            prop: 'grade',
                            type: 'select',
                            dicData: [{
                                label: '测试',
                                value: 1
                            }]
                        }]
                    }, {
                        label: '测试',
                        prop: 'test',
                    }],
                group: [{
                    label: '用户信息',
                    prop: 'jbxx',
                    icon: 'el-icon-edit-outline',
                    column: [
                        {
                            label: '姓名',
                            prop: 'name'
                        },
                        {
                            label: '年龄',
                            prop: 'age'
                        }
                    ]
                }, {
                    label: '其他信息',
                    prop: 'jbxxs',
                    icon: 'el-icon-edit-outline',
                    column: [
                        {
                            label: '级别',
                            prop: 'grade',
                            type: 'select',
                            dicData: [{
                                label: '测试',
                                value: 1
                            }]
                        },
                        {
                            label: '手机信息',
                            prop: 'phone'
                        },
                        {
                            label: '自定义图标',
                            prop: 'icon',
                            type: "icon",
                            iconList: [{
                                label: '基本图表',
                                list: ['el-icon-time', 'el-icon-bell', 'el-icon-star-on']
                            }]
                        },
                    ]
                }]
            },
            data:[{
                id:'1',
                name: '张三',
                age: 14,
                grade: 1,
                phone1: '17547400800',
                phone: '17547400800',
                icon: 'el-icon-time',
                test: 1,
                sex: '男',
                children: [{
                    id:'2',
                    name: '李四',
                    age: 20,
                    grade: 1,
                    sex: '男',
                    test: 1,
                    phone1: '17547400800',
                    phone: '17547400800',
                    icon: 'el-icon-bell',
                    children: [{
                        id:'3',
                        name: '王五',
                        age: 10,
                        grade: 1,
                        test: 1,
                        sex: '女',
                        icon: 'el-icon-star-on',
                        phone1: '17547400800',
                        phone: '17547400800'
                    }]
                }]
            }, {
                id:'4',
                name: '王五',
                age: 10,
                grade: 1,
                test: 1,
                sex: '女',
                icon: 'el-icon-star-on',
                phone1: '17547400800',
                phone: '17547400800'
            }]
        };
        private DIC: Object = {
            VAILD: [{
                label: '真',
                value: 'true'
            }, {
                label: '假',
                value: 'false'
            }],
            SEX: [{
                label: '男',
                value: 0
            }, {
                label: '女',
                value: 1
            }]
        };
        private form: Object = {
            obj:{},
            option:{
                    size:"smallwei",
                    mockBtn:false,
                    submitText: '完成',
                    printBtn:false,
                    column: [{
                        label: "用户名",
                        prop: "username",
                        tip: '这是信息提示',
                        span: 8,
                        maxlength: 3,
                        suffixIcon: 'el-icon-tickets',
                        prefixIcon: 'el-icon-tickets',
                        minlength: 2,
                        mock:{
                            type:'name',
                            en:true,
                        },
                        rules: [{
                            required: true,
                            message: "请输入用户名",
                            trigger: "blur"
                        }],
                        change:({value,column}: any)=>{
                            this.form.obj.address=value;
                            this.$message.success('address change')
                        },
                        click:({value,column}: any)=>{
                            this.$message.success('click')
                        }
                    },
                        {
                            label: "姓名",
                            prop: "name",
                            mock:{
                                type:'name'
                            },
                            span:8
                        },
                        {
                            label: "密码",
                            prop: "password",
                            type:'password',
                            mock:{
                                type:'name'
                            },
                            span:8
                        },
                        {
                            label: "类型",
                            prop: "type",
                            type: "select",
                            dicData: this.DIC.VAILD,
                            span:6,
                            mock:{
                                type:'dic',
                            },
                        },
                        {
                            label: "权限",
                            prop: "grade",
                            span: 6,
                            type: "checkbox",
                            dicData: this.DIC.VAILD,
                            mock:{
                                type:'dic',
                            },
                        },
                        {
                            label: "开关",
                            prop: "switch",
                            span: 6,
                            type: "switch",
                            dicData: this.DIC.SEX,
                            mock:{
                                type:'dic'
                            },
                            hide: true,
                            row:true,
                        },
                        {
                            label: "性别",
                            prop: "sex",
                            span: 6,
                            type: "radio",
                            dicData: this.DIC.SEX,
                            mock:{
                                type:'dic'
                            },
                            change:({value,column}: any)=>{
                                this.$message.success('change')
                            }
                        },
                        {
                            label: "数字",
                            prop: "number",
                            type: 'number',
                            span: 6,
                            precision:2,
                            mock:{
                                type:'number',
                                max:1,
                                min:2,
                                precision:2
                            },
                            minRows: 0,
                            maxRows: 3,
                            row:true,
                        },
                        {
                            label: "网站",
                            span: 12,
                            prop: "url",
                            prepend:'http://',
                            mock:{
                                type:'url',
                                header:false,
                            },
                            append:'com',
                            row:true,
                        },
                        {
                            label: "日期",
                            prop: "date",
                            type: "date",
                            span:8,
                            format:'yyyy-MM-dd',
                            valueFormat:'yyyy-MM-dd',
                            mock:{
                                type:'datetime',
                                format:'yyyy-MM-dd'
                            },
                        },
                        {
                            label: "日期时间",
                            prop: "datetime",
                            type: "datetime",
                            span:8,
                            format:'yyyy-MM-dd hh:mm:ss',
                            valueFormat:'yyyy-MM-dd hh:mm:ss',
                            mock:{
                                type:'datetime',
                                format:'yyyy-MM-dd hh:mm:ss',
                                now:true,
                            },
                        },
                        {
                            label: "时间",
                            prop: "time",
                            type: "time",
                            span:8,
                            format:'hh:mm:ss',
                            valueFormat:'hh:mm:ss',
                            mock:{
                                type:'datetime',
                                format:'hh:mm:ss'
                            },
                        },
                        {
                            label: "地址",
                            span: 24,
                            prop: "address",
                            mock:{
                                type:'county'
                            },
                        },{
                            label: "建议",
                            span: 24,
                            prop: "adit",
                            mock:{
                                type:'word',
                                min:10,
                                max:30
                            },
                        },{
                            label: "手机号",
                            mock:{
                                type:'phone'
                            },
                            span: 12,
                            prop: "phone",
                        }]
            }
        };

        mounted(){
            console.log("mounted");
            this.autoHeight();
        };

        @Emit()
        autoHeight(): void{
            /* 自适应高度 */
            let clientHeight1 = document.getElementsByClassName("el-header")[0].clientHeight;
            let clientHeight2 = document.getElementsByClassName("el-footer")[0].clientHeight;
            for (let main of document.getElementsByClassName("main")) {
                (main as HTMLElement).style.height = document.documentElement.clientHeight - (clientHeight1 + clientHeight2) - 44 + "px";
            }
        };
        @Emit()
        handleSelect(key: string, keyPath: string): void {
            console.log(key, keyPath);
        }
        @Emit()
        onLoad(): void{
            console.log("onLoad")
        }
        @Emit()
        emptytChange(): void{
            this.$message.success('清空方法回调');
        }
        @Emit()
        submit(form: Object,done: Function): void{
            this.$message.success('当前数据'+JSON.stringify(this.form.obj));
            setTimeout(()=>{
                done()
            },1000)
        }
        @Emit()
        tip(): void{
            this.$message.success('自定义按钮');
        }
    }
</script>

<style scoped>
    .el-header, .el-footer, .el-aside {
        padding: 0 !important;
    }

    .el-main {
        padding: 10px 0 10px 10px !important;
    }

    .el-aside {
        background-color: #545c64;
    }

    .el-footer {
        text-align: center;
        line-height: 60px;
        background-color: aliceblue;
    }

    .title {
        text-align: center;
        color: white;
    }
</style>
