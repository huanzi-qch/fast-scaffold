/**
 * localStorage没有时间期限，除非将它移除
 */
const lsa = window.localStorage;
export default class LocalStorageUtil {
    /**
     * 获取
     */
    public static getItem(key:string) {
        try {
            return JSON.parse(lsa.getItem(key)+"");
        } catch (err) {
            return null;
        }
    };

    /**
     * 设置
     */
    public static setItem(key:string, val:string) {
        lsa.setItem(key, JSON.stringify(val));
    };

    /**
     * 删除
     */
    public static removeItem(key:string) {
        lsa.removeItem(key);
    };

    /**
     * 清除所有
     */
    public static clear() {
        lsa.clear();
    };

    /**
     * 获取所有key
     */
    public static keys() {
        return lsa.keys();
    };
}