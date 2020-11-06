package cn.huanzi.qch.admin.tbuser.entity;

import cn.huanzi.qch.admin.common.entity.PageCondition;
import lombok.Data;

import java.util.Date;

/**
 * <p>
 * 用户信息表
 * </p>
 *
 * @author huanzi-qch
 * @since 2020-08-25
 */
@Data
public class TbUserVo extends PageCondition {
    private Integer id;
    private String username;
    private String password;
    private Date created;
    private String token;//用于接收令牌
}
