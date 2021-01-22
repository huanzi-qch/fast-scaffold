/**
 * echart 工具类
 */
export default class EchartUtil {
    //公用配置
    public static getEchartOption(): {}{
        let echartUtil = this;
        return {
            grid: {
                top: "60",
                right: "10%",
                bottom: "60",
                left: "10%",
            },
            title: {
                text: '测试图表标题',
                subtext: '',
                left: 'left',
                textStyle: {
                    fontWeight: "normal",
                    color: "#FFF",
                    fontSize: "20",
                    fontFamily: "STHeiti",
                },
            },
            color: [
                "#4F9EFD",
                "#00E9EA",
                "#FFDD77",
                "#00EA9C",
                "#FF913F",
                "#FC5A5A",
                "#FF52CB",
                "#C847FF",
                "#00FFDD",
                "#F0FF00",
            ],
            legend: {
                top:10,
                right: 10,
                data:[],
                itemWidth: 12,
                itemHeight: 12,
                textStyle: {
                    color: "#FFF",
                    fontSize: 10,
                    fontFamily: "STHeiti",
                },
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {type: "shadow"},
                textStyle: {
                    color: "#FFF",
                    fontSize: 10,
                    fontFamily: "STHeiti",
                },
                formatter(params:any) {
                    if (!params.length) {
                        params = [params];
                    }
                    let html = params[0].name + "<br>";
                    for (let i = 0; i < params.length; i++) {
                        html +=
                            '<span style="display:inline-block;margin-right:10px;border-radius:10px;width:10px;height:10px;background-color:' +
                            params[i].color +
                            ';"></span>';
                        let unit = "";
                        if (params[i].units) {
                            unit = " " + params[i].units[0];
                        }
                        if (params.units) {
                            unit = " " + params.units[i];
                        }
                        html += params[i].seriesName + ": " + params[i].value + unit + "<br>";
                    }
                    return html;
                },
            },
            xAxis: {
                data:[],
                axisLine: {
                    // show: false,
                    lineStyle: { color: "rgba(239, 245, 255, 0.1)" },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    formatter(value:any){
                        value = value + "";
                        //如果年份是正好今年，则省略年份
                        let year = new Date().getFullYear();
                        value = value.replace(new RegExp(year + "-", "g"), "");
                        value = value.replace(new RegExp(year + "/", "g"), "");
                        value = value.replace(new RegExp(year + "年", "g"), "");

                        //是否换行：纯中文才需要换行
                        let flag = true;
                        let newValue = [];
                        for (let char of value + "") {
                            if (echartUtil.checkNum(char)) {
                                flag = false;
                                newValue.push(`{num|${char}}`);
                            } else {
                                newValue.push(`${char}`);
                            }
                        }
                        let params = newValue.join("");

                        if (!flag) {
                            return params;
                        }

                        //换行操作，k：每行显示个数
                        let i = 0,k = 4;
                        let newParams = "";
                        for (let char of params + "") {
                            i++;
                            if (i >= k) {
                                char = char + "\n";
                                i = 0;
                            }
                            newParams +=char;
                        }

                        return newParams;
                    },
                    rich: {
                        num: {
                            color: "rgba(9,16,255,0.56)",
                            fontSize: 12,
                            fontFamily: "STHeiti",
                        },
                    },
                    textStyle: {
                        color: "rgba(234,28,0,0.6)",
                        fontSize: 10,
                        fontFamily: "STHeiti",
                    },
                    rotate: 50
                },
            },
            yAxis: {
                name:"",
                axisLabel: {
                    formatter(value:any){
                        let newValue = [];
                        for(let char of value+""){
                            if(echartUtil.checkNum(char)){
                                newValue.push(`{num|${char}}`);
                            }else{
                                newValue.push(`${char}`);
                            }
                        }
                        return newValue.join("");
                    },
                    rich: {
                        num: {
                            color: "rgba(9,16,255,0.56)",
                            fontSize: 12,
                            fontFamily: "STHeiti",
                        },
                    },
                    textStyle: {
                        color: "rgba(234,28,0,0.6)",
                        fontSize: 10,
                        fontFamily: "STHeiti",
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    // lineStyle: { color: "#6173A3" },
                    show: false,
                },
                nameTextStyle: {
                    color: "#FFF",
                    fontSize: 10,
                    fontFamily: "STHeiti",
                    padding: [50, 0, 0, 50],
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(239, 245, 255, 0.1)",
                    },
                },
            },
            series: {
                name:"",
                type: "",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                    },
                },
                label: {
                    show: true,
                    color: "#FFF",
                    position: ["105%", "0%"],
                    textStyle: {
                        fontSize: 10,
                        fontFamily: "STHeiti",
                    },
                },
                barWidth: 15,
                symbolSize:10,
                smooth: true,
            },
        };
    };
    
    //tooltip自动轮播
    public static autoHover(myChart:any) {
        //轮播时间间隔
        let time = 6000;
        
        if(!myChart.timeTicket){
            myChart["timeTicket"] = "interval";
        }
        let currentIndex = -1;
        let dataLen = myChart.getOption().series[0].data.length;
        let startInterval = function(){
            myChart.timeTicket = setInterval(function () {
                myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
                currentIndex = (currentIndex + 1) % dataLen;
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: currentIndex
                });
            },time);
            return  myChart.timeTicket;
        };
        
        //停用旧的，再调用新的
        clearInterval( myChart.timeTicket);
        myChart.timeTicket = startInterval();

        myChart.getDom().addEventListener('mouseover',function () {
            clearInterval( myChart.timeTicket);
        });

        myChart.getDom().addEventListener('mouseout', function () {
            myChart.timeTicket = startInterval();
        });
    };

    //正则判断字符串是否为数字
    public static checkNum(value:string):boolean {
        return /^[0-9]*$/.test(value);
    };

    //获取随机数
    public static getRandomNumberByRange(start:number, end:number):number {
        return Math.floor(Math.random() * (end + 1 - start) + start)
    };

    //获取随机数组
    public static getRandomArray(length:number):number[] {
        let array = [];
        for (let i = 0; i <length; i++) {
            array.push(this.getRandomNumberByRange(10,100));
        }
        return array;
    };
}
