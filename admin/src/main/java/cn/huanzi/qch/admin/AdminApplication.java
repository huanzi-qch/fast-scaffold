package cn.huanzi.qch.admin;

import cn.huanzi.qch.admin.util.ErrorUtil;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.net.InetAddress;
import java.net.UnknownHostException;

@Slf4j
@SpringBootApplication
@MapperScan("cn.huanzi.qch.admin.*.mapper")
public class AdminApplication {

    @Value("${server.servlet.context-path:}")
    private String contextPath;

    @Value("${server.port}")
    private String port;

    @Bean
    public ApplicationRunner applicationRunner() {
        return applicationArguments -> {
            try {
                //获取本机内网IP
                log.info("启动成功：" + "http://" + InetAddress.getLocalHost().getHostAddress() + ":" + port + contextPath);
            } catch (UnknownHostException e) {
                //输出到日志文件中
                log.error(ErrorUtil.errorInfoToString(e));
            }
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(AdminApplication.class, args);
    }

}
