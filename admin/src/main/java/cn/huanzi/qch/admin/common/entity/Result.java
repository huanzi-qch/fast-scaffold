package cn.huanzi.qch.admin.common.entity;

import lombok.Data;

/**
 * 自定义结果实体类
 */
@Data
public class Result<T> {

    public static Integer OK = 200;

    //消息
    private String message;

    //状态：200成功
    private Integer status;

    //内容
    private T data;

    @Deprecated
    public Result() {

    }

    private Result(Integer status, String message, T data) {
        this.message = message;
        this.status = status;
        this.data = data;
    }

    public static <T> Result<T> build(T data) {
        return Result.build(Result.OK,"操作成功",data);
    }

    public static <T> Result<T> build(Integer status, String message, T data) {
        return new Result<T>(status, message, data);
    }
}
