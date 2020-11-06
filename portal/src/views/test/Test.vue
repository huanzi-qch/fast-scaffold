<template>
    <div class="app-ccontent">
        <el-row>
            <el-col :span="12">
                <div style="padding: 20px;">
                    <el-divider content-position="left">数据绑定测试</el-divider>
                    <el-row>
                        <el-input placeholder="请输入新msg内容" v-model="msg" clearable></el-input>
                        <p>直接绑定data数据：{{msg}}</p>
                        <p>普通方法获取data数据：{{getMsg()}}</p>
                        <p>computed的get方法获取data数据：{{computedTest}}</p>
                        <el-button type="primary" plain @click="buttonClick">调用computed的set方法修改data数据</el-button>
                    </el-row>

                    <el-divider content-position="left">引用HelloWorld组件测试</el-divider>
                    <el-row>
                        <HelloWorld :msg="msg"/>
                    </el-row>

                    <el-divider content-position="left">if-else条件渲染测试</el-divider>
                    <el-row>
                        <p style="color: green" v-if="flag">if条件渲染：true</p>
                        <p style="color: red" v-else="flag">if条件渲染：false</p>
                        <el-button type="primary" plain @click="flag=!flag">if条件渲染取反</el-button>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="12">
                <div style="padding: 20px;">

                    <el-divider content-position="left">for循环-数组渲染测试</el-divider>
                    <el-row>
                        <p v-for="(item,index) in items">
                            序号：{{index}}，编号：{{item.id}}，姓名：{{item.name}}
                        </p>
                        <el-button type="primary" plain @click="items.push({id:'0000',name:'new item'})">新增记录</el-button>
                    </el-row>

                    <el-divider content-position="left">for循环-对象渲染测试</el-divider>
                    <el-row>
                        <p v-for="(value,key,index) in itemsByObj">
                            序号：{{index}}，{{key}}：{{value}}
                        </p>
                    </el-row>

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
    import { Component, Emit, Watch, Prop, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue';

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Test extends Vue {
        //data 数据
        private msg:string = "test测试";
        private flag:boolean = true;
        private items:any = [
            {id:1001,name:"张三"},
            {id:1002,name:"李四"},
            {id:1002,name:"王五"},
        ];
        private itemsByObj:object = {
            id:1001,
            name:"huanzi-qch",
            age:18,
            email:"huanzi-qch@qq.com",
            phone:"12345678900",
        };

        //生命周期钩子函数
        created(){
            console.log("created");
        };
        mounted(){
            console.log("mounted");
        };

        //methods 普通方法
        @Emit()
        getMsg(): string{
            return this.msg;
        }
        @Emit()
        buttonClick(): void{
            this.computedTest = 'test测试0001';
        }

        //computed 获取/设置计算属性
        get computedTest(): string{
            return this.msg;
        }
        set computedTest(newMsg:string){
            this.msg = newMsg;
        }

        //watch 监听
        @Watch('msg')
        onMsgChanged(newVal: string, oldVal: string) {
            this.$message.info("msg值发生改变，旧值：" + oldVal + "，新值：" + newVal);
        }
    }
</script>

<style scoped>
    .app-ccontent{
        padding: 20px;
    }
</style>