package cn.huanzi.qch.admin.tbuser.service;

import cn.huanzi.qch.admin.common.service.CommonServiceImpl;
import cn.huanzi.qch.admin.tbuser.entity.TbUser;
import cn.huanzi.qch.admin.tbuser.entity.TbUserVo;
import cn.huanzi.qch.admin.tbuser.mapper.TbUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 用户信息表 服务实现类
 * </p>
 *
 * @author huanzi-qch
 * @since 2020-08-25
 */
@Service
public class TbUserServiceImpl  extends CommonServiceImpl<TbUserVo, TbUser> implements TbUserService {

    @Autowired
    private TbUserMapper tbuserMapper;
}
