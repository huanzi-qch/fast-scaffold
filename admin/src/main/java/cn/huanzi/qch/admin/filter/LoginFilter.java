package cn.huanzi.qch.admin.filter;

import cn.huanzi.qch.admin.util.JwtUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * 登录拦截器
 */
@Component
public class LoginFilter implements Filter {

    @Value("${server.servlet.context-path:}")
    private String contextPath;

    @Value("${portal.url:*}")
    private String portalUrl;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        String method = request.getMethod();

        //不拦截登录请求、跨域预检请求，其他请求全部拦截校验是否有令牌
        if (!"/login".equals(request.getRequestURI().replaceFirst(contextPath,"")) && !"options".equals(method.toLowerCase())) {
            String token = request.getHeader("token");

            //验证签名
            if(!JwtUtil.verity(token)){
                String dataString = "{\"status\":401,\"message\":\"无效token令牌，访问失败，请重新登录系统！\"}";

                //清除cookie
                Cookie cookie = new Cookie("PORTAL_TOKEN", null);
                cookie.setPath("/");
                cookie.setMaxAge(0);
                response.addCookie(cookie);

                //转json字符串并转成Object对象，设置到Result中并赋值给返回值，记得表明当前页面可以跨域访问
                response.setHeader("Access-Control-Allow-Credentials","true");
                response.setHeader("Access-Control-Allow-Headers","content-type, token");
                response.setHeader("Access-Control-Allow-Methods","*");
                response.setHeader("Access-Control-Allow-Origin",portalUrl);

                response.setCharacterEncoding("UTF-8");
                response.setContentType("application/json; charset=utf-8");
                PrintWriter out = response.getWriter();
                out.print(dataString);
                out.flush();
                out.close();

                return;
            }
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }
}
