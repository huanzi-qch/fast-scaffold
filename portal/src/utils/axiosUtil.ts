import axios, {AxiosResponse} from 'axios'
import {Message} from "element-ui";
import TokenUtil from "@/utils/tokenUtil"
import Result from "@/vo/result";
import {Object} from  "@/utils/commonUtil"
import router from '@/router'

//创建axios对象
const service = axios.create({
    timeout: 15000,
    withCredentials:true,
});

//设置request拦截
service.interceptors.request.use(config => {
        //设置token令牌
        if (TokenUtil.getToken()) {
          config.headers['token'] = TokenUtil.getToken()
        }
        return config
    },error => {
        console.error(error);
        return Promise.reject(error)
    });

//设置response拦截
service.interceptors.response.use(response => {
        const res = response.data;

        //响应正常
        if (response.status === 200 || response.status === 201) {

            //401，令牌无效
            if(response.data.status === 401){
                Message({
                    message: response.data.message,
                    type: 'error'
                });
                setTimeout(function () {
                    router.push({name:'Login'});
                },1000);

                return Promise.reject(new Error(response.data.message))
            }

            return res
        } else {
            Message({
                message: res.message,
                type: 'error'
            });
            return Promise.reject(new Error(res.message || 'Error'))
        }
    },error => {
        console.error('err' + error);
        Message({
            message: error.message,
            type: 'error'
        });
        return Promise.reject(error)
    });

//Blob响应，转成文件下载
function download(blob:Blob,fileName:string) {
    //创建一个隐藏的下载a标签
    let url = window.URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);

    link.click();
    //过河拆桥
    link.remove();

    Message({
        type: "success",
        message: "信息导出完成，请您注意浏览器的下载管理器！",
    });
}


/**
 * axios工具类
 */
export default class AxiosUtil{

    /**
     * 封装get请求
     */
    public static get(url:string,data:{},succeedCallBack:(response:Result) => void,errorCallBack?:(error:Error) => void){
        service({
            url: url,
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
            data:data
        }).then(response => {
            let responseAsObject = response as Object;
            succeedCallBack(new Result(responseAsObject.message,responseAsObject.status,responseAsObject.data));
        }).catch(error => {
            if(errorCallBack){
                errorCallBack(error);
            }
        })
    };

    /**
     * 封装post请求
     */
    public static post(url:string,data:{},succeedCallBack:(response:Result) => void,errorCallBack?:(error:Error) => void){
        service({
            url: url,
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data:data
        }).then(response => {
            let responseAsObject = response as Object;
            succeedCallBack(new Result(responseAsObject.message,responseAsObject.status,responseAsObject.data));
        }).catch(error => {
            if(errorCallBack){
                errorCallBack(error);
            }
        })
    };

    /**
     * 封装download请求
     */
    public static download(url:string,data:{},succeedCallBack:(response:string) => void,errorCallBack?:(error:Error) => void){
        service({
            url: url,
            method: 'post',
            responseType: 'blob',
            headers: {
                "Content-Type": "application/json"
            },
            data:data
        }).then(response => {
            //设置文件名，文件名从响应头中获取
            let fileName = response.headers["content-disposition"].split(";")[2].split("=")[1].replace(/"/g,"");

            //解决乱码问题
            fileName = decodeURIComponent(escape(fileName));
            console.log("文件名：" + fileName);

            download(new Blob([response.data]),fileName);

            //回调返回文件名
            succeedCallBack(fileName);
        }).catch(error => {
            if(errorCallBack){
                errorCallBack(error);
            }
        })
    };
}