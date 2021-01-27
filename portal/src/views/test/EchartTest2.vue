<template>
    <div class="main">
        <el-row :gutter="20">
            <el-col :span="6"><div class="echart" id="echart1"></div></el-col>
            <el-col :span="6"><div class="echart" id="echart2"></div></el-col>
            <el-col :span="6"><div class="echart" id="echart3"></div></el-col>
            <el-col :span="6"><div class="echart" id="echart4"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="echart" id="echart5"></div></el-col>
            <el-col :span="6"><div class="echart" id="echart6"></div></el-col>
            <el-col :span="6"><div class="echart" id="echart7"></div></el-col>
            <el-col :span="6"><div class="echart" id="echart8"></div></el-col>
        </el-row>
    </div>
</template>

<script>
    import echartUtil from "@/utils/echartUtil"
    import "@/assets/js/china.js"
    import "@/assets/js/huanzi-qch-theme.js"

    var vue;
    export default {
        data() {
            return {

            }
        },
        created() {
            vue = this;
            setTimeout(function () {
                vue.initEchart1();
                vue.initEchart2();
                vue.initEchart3();
                vue.initEchart4();
                vue.initEchart5();
                vue.initEchart6();
                vue.initEchart7();
                vue.initEchart8();
            },300);
        },
        methods: {
            initEchart1(){
                //初始化 echart
                let echart = vue.$echarts.init(document.getElementById('echart1'),"huanzi-qch-theme");

                //获取数据
                let serieData = [];
                let xAxisData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
                let legendData = [
                    "衣服",
                    "裤子"
                ];
                let metaDate = [
                    echartUtil.getRandomArray(7),
                    echartUtil.getRandomArray(7),
                ];

                //处理数据
                for (let i = 0; i < legendData.length; i++) {
                    let serie = echartUtil.getEchartOption().series;
                    if(i % 2 === 0){
                        serie.type = "bar";
                    }else{
                        serie.type = "line";
                    }
                    serie.name = legendData[i];
                    serie.data = metaDate[i];
                    serieData.push(serie);
                }

                //个性化配置
                let option = {
                    title: {
                        text: '测试图表标题',
                    },
                    legend:{
                        data:legendData,
                    },
                    xAxis:{
                        data:xAxisData,
                    },
                    yAxis:{
                        name:"单位：数量"
                    },
                    series:serieData,
                };

                //图表设置配置
                echart.setOption(option);

                //绑定点击事件
                echart.on("click", function (param) {
                    console.log(param);
                });
            },
            initEchart2(){
                //初始化 echart
                let echart = vue.$echarts.init(document.getElementById('echart2'),"huanzi-qch-theme");

                //获取数据
                let serieData = [];
                let xAxisData = ['2021-01-20', '2021-01-21', '2021-01-22', '2021-01-23', '2021-01-24', '2021-01-25', '2021-01-26'];
                let legendData = [
                    "衣服",
                    "裤子"
                ];
                let metaDate = [
                    echartUtil.getRandomArray(7),
                    echartUtil.getRandomArray(7),
                ];

                //处理数据
                for (let i = 0; i < legendData.length; i++) {
                    let serie = echartUtil.getEchartOption().series;
                    serie["stack"] = "yw";
                    serie.type = "bar";
                    serie.name = legendData[i];
                    serie.data = metaDate[i];
                    serieData.push(serie);
                }

                //个性化配置
                let option = {
                    title: {
                        text: '测试图表标题',
                    },
                    legend:{
                        data:legendData,
                    },
                    xAxis:{
                        data:xAxisData,
                    },
                    yAxis:{
                        name:"单位：数量"
                    },
                    series:serieData,
                };

                //图表设置配置
                echart.setOption(option);

                //绑定点击事件
                echart.on("click", function (param) {
                    console.log(param);
                });
            },
            initEchart3(){
                //初始化 echart
                let echart = vue.$echarts.init(document.getElementById('echart3'),"huanzi-qch-theme");

                //获取数据
                let serieData = [];
                let xAxisData = ['2021年01月01日', '2021年01月02日', '2021年01月03日', '2021年01月04日', '2021年01月05日', '2021年01月06日', '2021年01月07日'];
                let legendData = [
                    "衣服",
                    "裤子"
                ];
                let metaDate = [
                    echartUtil.getRandomArray(7),
                    echartUtil.getRandomArray(7),
                ];

                //处理数据
                for (let i = 0; i < legendData.length; i++) {
                    let serie = echartUtil.getEchartOption().series;
                    serie.type = "line";
                    serie["areaStyle"]={
                        opacity:0.3
                    };
                    serie.name = legendData[i];
                    serie.data = metaDate[i];
                    serieData.push(serie);
                }

                //个性化配置
                let option = {
                    title: {
                        text: '测试图表标题',
                    },
                    legend:{
                        data:legendData,
                    },
                    xAxis:{
                        data:xAxisData,
                    },
                    yAxis:{
                        name:"单位：数量"
                    },
                    series:serieData,
                };

                //图表设置配置
                echart.setOption(option);

                //绑定点击事件
                echart.on("click", function (param) {
                    console.log(param);
                });
            },
            initEchart4(){
                //初始化 echart
                let echart = vue.$echarts.init(document.getElementById('echart4'),"huanzi-qch-theme");

                //获取数据
                let serieData = [];
                let xAxisData = ['中国', '俄罗斯', '澳大利亚', '印度尼西亚', '美国', '中国香港', '中国台湾'];
                let legendData = [
                    "衣服",
                    "裤子"
                ];
                let metaDate = [
                    echartUtil.getRandomArray(7),
                    echartUtil.getRandomArray(7),
                ];

                //处理数据
                let serie = echartUtil.getEchartOption().series;
                serie.type = "bar";
                serie["yAxisIndex"] = 0;
                serie.name = legendData[0];
                serie.data = metaDate[0];
                serieData.push(serie);

                let serie1 = echartUtil.getEchartOption().series;
                serie1.type = "line";
                serie1["yAxisIndex"] = 1;
                serie1["markPoint"] = {
                    //symbol:'path://',
                    symbolOffset:[0,0],
                    label:{
                        color:"#FFF",
                        fontSize: 12,
                        fontFamily: "STHeiti"
                    },
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                };
                serie1.name = legendData[1];
                serie1.data = metaDate[1];
                serieData.push(serie1);

                //个性化配置
                let option = {
                    title: {
                        text: '测试图表标题',
                    },
                    legend:{
                        data:legendData,
                    },
                    xAxis:{
                        data:xAxisData,
                        axisLabel:{
                            rotate:0
                        }
                    },
                    yAxis:[
                        {
                            name:"单位：件"
                        },{
                            name:"单位：条"
                        }
                    ],
                    series:serieData,
                };

                //图表设置配置
                echart.setOption(option);

                //绑定点击事件
                echart.on("click", function (param) {
                    console.log(param);
                });
            },
            initEchart5(){
                //初始化 echart
                let echart = vue.$echarts.init(document.getElementById('echart5'),"huanzi-qch-theme");

                //获取数据
                let serieData = [];
                let xAxisData = ['中国', '俄罗斯', '澳大利亚', '印度尼西亚', '美国'];
                let legendData = [
                    "衣服",
                ];
                let metaDate = [
                    echartUtil.getRandomArray(5).sort((a, b) =>{return a - b}),
                ];

                //处理数据
                let serie = echartUtil.getEchartOption().series;
                serie.type = "bar";
                serie.name = legendData[0];
                serie.data = metaDate[0];
                serieData.push(serie);

                //个性化配置
                let option = {
                    title: {
                        text: '测试图表标题',
                    },
                    legend:{
                        data:legendData,
                    },
                    xAxis:{
                        type:"value",
                        axisLabel:{
                            rotate:0
                        }
                    },
                    yAxis:{
                        type:"category",
                        name:"单位：件",
                        data:xAxisData,
                        splitLine:{
                            show:false
                        }
                    },
                    series:serieData,
                };

                //图表设置配置
                echart.setOption(option);

                //绑定点击事件
                echart.on("click", function (param) {
                    console.log(param);
                });
            },
            initEchart6(){
                //初始化 echart
                let echart = vue.$echarts.init(document.getElementById('echart6'),"huanzi-qch-theme");

                //获取数据
                let serieData = [];
                let legendData = ['中国', '俄罗斯', '澳大利亚', '印度尼西亚', '美国', '中国香港', '中国台湾'];
                let metaDate = echartUtil.getRandomArray(7);

                //处理数据
                let serie = echartUtil.getEchartOption().series;
                serie.type = "pie";
                serie.data = [];
                serie.name = "衣服";
                for (let i = 0; i < legendData.length; i++) {
                    serie.data.push({
                        name:legendData[i],
                        value:metaDate[i]
                    });
                }
                serieData.push(serie);

                //个性化配置
                let option = {
                    title: {
                        text: '测试图表标题',
                    },
                    legend:{
                        data:legendData,
                        top:'center',
                        right:0,
                        orient:'vertical',
                    },
                    series:serieData,
                };

                //图表设置配置
                echart.setOption(option);

                //绑定点击事件
                echart.on("click", function (param) {
                    console.log(param);
                });
            },
            initEchart7(){
                //初始化 echart
                let echart = vue.$echarts.init(document.getElementById('echart7'),"huanzi-qch-theme");

                //获取数据
                let serieData = [];
                let legendData = ['中国', '俄罗斯', '澳大利亚', '印度尼西亚', '美国', '中国香港', '中国台湾'];
                let metaDate = echartUtil.getRandomArray(7);

                //处理数据
                let serie = echartUtil.getEchartOption().series;
                serie.type = "pie";
                serie["radius"]=['50%', '70%'];
                serie["emphasis"]={
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                };
                serie["label"]={
                    show: false,
                    position: 'center'
                };
                delete serie.itemStyle;
                serie.data = [];
                serie.name = "衣服";
                for (let i = 0; i < legendData.length; i++) {
                    serie.data.push({
                        name:legendData[i],
                        value:metaDate[i]
                    });
                }
                serieData.push(serie);

                //个性化配置
                let option = {
                    title: {
                        text: '测试图表标题',
                    },
                    legend:{
                        data:legendData,
                        top:'center',
                        right:0,
                        orient:'vertical',
                    },
                    series:serieData,
                };

                //图表设置配置
                echart.setOption(option);

                //绑定点击事件
                echart.on("click", function (param) {
                    console.log(param);
                });
            },
            initEchart8(){
                //初始化 echart
                let echart = vue.$echarts.init(document.getElementById('echart8'),"huanzi-qch-theme");

                //获取数据
                let serieData = [];
                let legendData = ["衣服"];
                let dataMap = [{ name: '北京' }, { name: '天津' }, { name: '上海' }, { name: '重庆' }, { name: '河北' }, { name: '河南' }, { name: '云南' }, { name: '辽宁' }, { name: '黑龙江' }, { name: '湖南' }, { name: '安徽' }, { name: '山东' },
                    { name: '新疆' }, { name: '江苏' }, { name: '浙江' }, { name: '江西' }, { name: '湖北' }, { name: '广西' }, { name: '甘肃' }, { name: '山西' }, { name: '内蒙古' }, { name: '陕西' }, { name: '吉林' }, { name: '福建' }, { name: '贵州' },
                    { name: '广东' }, { name: '青海' }, { name: '西藏' }, { name: '四川' }, { name: '宁夏' }, { name: '海南' }, { name: '台湾' }, { name: '香港' }, { name: '澳门' }]
                let metaDate = echartUtil.getRandomArray(dataMap.length);

                //处理数据
                let serie = echartUtil.getEchartOption().series;
                serie.type = "map";
                serie["map"] = "china";
                delete serie.itemStyle;
                serie.data = [];
                for (let i = 0; i < dataMap.length; i++) {
                    let item = dataMap[i];
                    item["value"] = metaDate[i];
                    serie.data.push(item);
                }
                serie.name = "衣服";
                serieData.push(serie);

                //个性化配置
                let option = {
                    title: {
                        text: '测试图表标题',
                    },
                    legend:{
                        data:legendData,
                    },
                    series:serieData,
                };

                //图表设置配置
                echart.setOption(option);

                //绑定点击事件
                echart.on("click", function (param) {
                    console.log(param);
                });
            },
        },
    }
</script>

<style scoped>
    .el-row{
        margin-top: 10px;
    }
    .echart{
        height: 250px;
        border: 1px solid #a7a7a7;
    }
</style>

