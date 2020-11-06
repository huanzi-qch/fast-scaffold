/**
 * 登录用户
 */
export default class User {

    //构造参数，默认已经创建空构造
    constructor(id: string,username: string) {
        this.id = id;
        this.username = username;
    }

    public id: string;

    public username: string;

}