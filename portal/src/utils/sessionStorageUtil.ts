/**
 * sessionStorage即会话，当浏览器关闭时会话结束，有时间期限
 */
const ssa = window.sessionStorage;
export default class SessionStorageUtil {
    /**
     * 获取
     */
    public static getItem(key:string) {
        try {
            return JSON.parse(ssa.getItem(key)+"");
        } catch (err) {
            return null;
        }
    };

    /**
     * 设置
     */
    public static setItem(key:string, val:string) {
        ssa.setItem(key, JSON.stringify(val));
    };

    /**
     * 删除
     */
    public static removeItem(key:string) {
        ssa.removeItem(key);
    };

    /**
     * 清除所有
     */
    public static clear() {
        ssa.clear();
    };

    /**
     * 获取所有key
     */
    public static keys() {
        return ssa.keys();
    };
}