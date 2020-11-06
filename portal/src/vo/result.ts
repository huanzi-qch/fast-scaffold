/**
 * 自定义结果实体类
 */
export default class Result {

    //构造参数，默认已经创建空构造
    constructor(message: string,status: number,data: object) {
        this.message = message;
        this.status = status;
        this.data = data;
    }

    //消息
     public message: string;

    //状态：200成功
    public status: number;

    //内容
    public data: object;
}