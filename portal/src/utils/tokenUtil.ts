//如果报错找不到.d.ts声明文件，执行：npm install @types/js-cookie
import Cookies from 'js-cookie'

/**
 * token令牌工具类
 */
export default class TokenUtil{

    //token令牌关键字
    private static tokenKey:string = 'PORTAL_TOKEN';

    public static getToken(){
        return Cookies.get(this.tokenKey)
    }

    public static setToken(token:string) {
        //过期时间，24小时
        return Cookies.set(this.tokenKey, token,{ expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) })
    }

    public static removeToken() {
        return Cookies.remove(this.tokenKey)
    }
}