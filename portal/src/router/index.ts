import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TokenUtil from "@/utils/tokenUtil"
import {Object} from "@/utils/commonUtil"

Vue.use(VueRouter);

/* 公用模块菜单路由 */
const commonRoutes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Index',
        meta: { title: '主页' },
        component: () => import( '@/views/common/Index.vue')
    },
    {
        path: '/login',
        name: 'Login',
        meta: { title: '登录' },
        component: () => import('@/views/common/Login.vue')
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('@/views/common/404.vue')
    },
    { path: '*', redirect: '/404'}
];

/* test模块菜单路由 */
const testRoutes: Array<RouteConfig> = [
    {
        path: '/admin',
        name: 'Admin',
        meta: { title: 'Admin管理页面' },
        component: () => import( '@/views/test/Admin.vue')
    },
    {
        path: '/test',
        name: 'Test',
        meta: { title: 'demo测试' },
        component: () => import( '@/views/test/Test.vue')
    },
    {
        path: '/info',
        name: 'Info',
        meta: { title: 'demo测试' },
        component: () => import( '@/views/test/Info.vue')
    },
    {
        path: '/echart',
        name: 'EchartTest',
        meta: { title: 'echart测试' },
        component: () => import( '@/views/test/EchartTest.vue')
    },
];

const router = new VueRouter({
    base:"/portal",//应用路径，配置应用路径，可方便进行反向代理
    // history：路径直接是/test，文件丢到Tomcat的webapps，文件夹名 + url路径不能访问（需要把文件放在ROOT默认文件夹下面）
    //hash：路径会多一层/#，/#/test，文件丢到Tomcat的webapps，文件夹名 + url路径能访问
    mode: 'history',
    routes:commonRoutes.concat(testRoutes),
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition
      } else {
          return { x: 0, y: 0 }
      }
    }
});

router.beforeEach(async(to, from, next) => {
    console.log("跳转开始，目标："+to.path);
    document.title = `${to.meta.title}`;

    //无令牌，跳转登录页面
    if (to.name !== 'Login' && !TokenUtil.getToken()){
        console.log("无令牌，跳转登录页面");
        next({ name: 'Login' });
    }

    //跳转页面
    next();
});

router.afterEach(() => {
    console.log("跳转结束");
});

/* 路由异常错误处理，尝试解析一个异步组件时发生错误，重新渲染目标页面 */
router.onError((error) => {
    console.error("router路由异常!");
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    if (isChunkLoadFailed) {
        const routerCp = router as Object;
        const targetPath = routerCp.history.pending.fullPath;
        //再次刷新路由，可能还会继续路由异常，出现死循环的情况！
        // router.replace(targetPath);

        //防止死循环，浏览器地址直接访问 /
        window.location.href = window.location.origin + "/";
    }
});

export default router
