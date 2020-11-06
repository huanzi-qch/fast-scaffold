import User from "@/vo/user";
import Store from "@/store"
import SessionStorageUtil from "@/utils/sessionStorageUtil";

/**
 * 工具类
 */
export default class CommonUtil {
    /**
     * 获取配置文件的值
     */
    public static getProfilesValueByKey(key: string): string{
        return process.env[key];
    }

    /**
     * 获取后端服务地址
     */
    public static getAdminUrl(): string{
        return CommonUtil.getProfilesValueByKey("VUE_APP_ADMIN_URL")
    }

    /**
     * 调用后台接口获取登录用户，并设置到Store
     */
    public static setLoginUser(callback?: ()=> void){
        Store.dispatch("setUser").then(() =>  {
            if(callback){
                callback();
            }
        });
    }

    /**
     * 获取登录用户
     */
    public static getLoginUser(): User{
        const user = Store.getters.getUser;
        if(!user.username){
            const user1 = SessionStorageUtil.getItem("loginUser");
            if(!user1){
                this.setLoginUser();
                return user;
            }
            return user1;
        }
        return user;
    }

    /**
     * 从url中获取参数
     * 实例：http: //xxxxx/index?id=1&name=张三
     * getQueryVariable("id")//1
     * getQueryVariable("name")//张三
     */
    public static getQueryVariable(variable: string):  string {
        const vars = window.location.search.substring(1).split("&");
        for (let i = 0; i < vars.length; i++) {
            const pair = vars[i].split("=");
            if (pair[0] === variable) {
                return pair[1];
            }
        }
        return "";
    }

    /**
     * 获取当前时间，并格式化输出为：2018-05-18 14: 21: 46
     */
    public static getNowTime():  string {
        const time = new Date();
        const year = time.getFullYear();//获取年
        const month = time.getMonth() + 1;//或者月
        const day = time.getDate();//或者天

        const hour = time.getHours();//获取小时
        const minu = time.getMinutes();//获取分钟
        const second = time.getSeconds();//或者秒
        let data = year + "-";
        if (month < 10) {
            data += "0";
        }
        data += month + "-";
        if (day < 10) {
            data += "0"
        }
        data += day + " ";
        if (hour < 10) {
            data += "0"
        }

        data += hour + ": ";
        if (minu < 10) {
            data += "0"
        }
        data += minu + ": ";
        if (second < 10) {
            data += "0"
        }
        data += second;
        return data;
    }

    /**
     * 原生方法引入js文件
     * 动态创建<scrtipt>标签并追加到body中
     */
    public static importJsByUrl(url: string){
        const element = document.createElement("script");
        element.src = url;
        document.body.appendChild(element);
    }
}

/*
    为了能使对象使用obj[key]、obj.key不报错

    引入：
        import {Object} from  "@/utils/commonUtil"
    使用：
        private obj: Object = {};
        this.obj["name"] = "huanzi-qch";
        this.obj.age = 19;
 */
export interface Object{
    [key:  string]:  any,
}