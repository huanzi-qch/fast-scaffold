package cn.huanzi.qch.admin.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.Date;
import java.util.HashMap;

/**
 * JWT工具类
 */
@Component
public class JwtUtil {

    /**
     * 过期时间，毫秒
     */
    private static long TOKEN_EXPIRE_TIME;
    @Value("${token.expire.time}")
    public void setExpireTime(long expireTime) {
        JwtUtil.TOKEN_EXPIRE_TIME = expireTime;
    }

    /**
     * token私钥
     */
    private static String TOKEN_SECRET;
    @Value("${token.secret}")
    public void setSecret(String secret) {
        JwtUtil.TOKEN_SECRET = secret;
    }

    /**
     * 生成签名
     */
    public static String sign(String userId){
        //过期时间
        Date date = new Date(System.currentTimeMillis() + TOKEN_EXPIRE_TIME);
        //私钥及加密算法
        Algorithm algorithm = Algorithm.HMAC256(TOKEN_SECRET);
        //设置头信息
        HashMap<String, Object> header = new HashMap<>(2);
        header.put("typ", "JWT");
        header.put("alg", "HS256");
        //附带userID生成签名
        return JWT.create().withHeader(header).withClaim("userId",userId).withExpiresAt(date).sign(algorithm);
    }

    /**
     * 验证签名
     */
    public static boolean verity(String token){
        //令牌为空
        if(StringUtils.isEmpty(token)){
            return false;
        }

        try {
            Algorithm algorithm = Algorithm.HMAC256(TOKEN_SECRET);
            JWTVerifier verifier = JWT.require(algorithm).build();

            //是否能解密
            DecodedJWT jwt = verifier.verify(token);

            //校验过期时间
            if(new Date().after(jwt.getExpiresAt())){
                return false;
            }

            return true;
        } catch (IllegalArgumentException | JWTVerificationException e) {
            ErrorUtil.errorInfoToString(e);
        }
        return false;
    }

    /**
     * 根据token获取用户id
     */
    public static String getUserIdByToken(String token){
        try {
            Algorithm algorithm = Algorithm.HMAC256(TOKEN_SECRET);
            JWTVerifier verifier = JWT.require(algorithm).build();
            DecodedJWT jwt = verifier.verify(token);
            return jwt.getClaim("userId").asString();
        } catch (IllegalArgumentException | JWTVerificationException e) {
            ErrorUtil.errorInfoToString(e);
        }
        return null;
    }
}
