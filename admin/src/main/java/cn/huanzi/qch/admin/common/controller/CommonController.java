package cn.huanzi.qch.admin.common.controller;

import cn.huanzi.qch.admin.common.entity.PageInfo;
import cn.huanzi.qch.admin.common.entity.Result;
import cn.huanzi.qch.admin.common.service.CommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

/**
 * 通用controller
 * @param <V> vo对象
 * @param <T> entity实体
 */
public class CommonController<V, T> {

    @Autowired
    private CommonService<V,T> commonService;

    /*
        CRUD、分页、排序测试
     */

    @PostMapping("page")
    public Result<PageInfo<V>> page(V entityVo) {
        return commonService.page(entityVo);
    }

    @PostMapping("list")
    public Result<List<V>> list(V entityVo) {
        return commonService.list(entityVo);
    }

    @GetMapping("get/{id}")
    public Result<V> get(@PathVariable("id") String id) {
        return commonService.get(id);
    }

    @PostMapping("save")
    public Result<V> save(V entityVo) {
        return commonService.save(entityVo);
    }

    @GetMapping("delete/{id}")
    public Result<String> delete( @PathVariable("id") String id) {
        return commonService.delete(id);
    }
}
