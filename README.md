## 简介<br/> 
Fast Scaffold一套极简的前后端分离项目脚手架<br/> 
Fast Scaffold是一套极简的前后端分离项目脚手架，包含一个portal前端、一个admin后端，可用于快速的搭建前后端分离项目进行二次开发<br/>

## 技术栈<br/> 
portal前端：vue + element-ui + avue，使用typescript语法编码<br/> 
admin后端：springboot + mybatis-plus + mysql，采用jwt进行身份认证<br/> 

## 运行效果图<br/> 
![](https://huanzi.qzz.io/file-server/images/fast-scaffold.png) 

## 仓库地址<br/> 
国外：https://github.com/huanzi-qch/fast-scaffold<br/> 
国内：https://gitee.com/huanzi-qch/fast-scaffold<br/> 

## 前往博客查看详情<br/> 
具体介绍请看我的博客[《开源一套极简的前后端分离项目脚手架》](https://www.cnblogs.com/huanzi-qch/p/13933461.html)<br/> 

## 常见问题<br/>
1、如何下载依赖包、启动程序？
```text
注意：portal前端、admin后端分别用IDE打开，不要直接打开fast-scaffold文件夹

portal前端：node_modules的依赖包我没有上传，所有需要先下载依赖包，运行安装命令（npm install）下载依赖包，下载完成后在package.json中运行dev脚本启动程序
admin后端：等待IDE识别成springboot项目后，maven会自动下载依赖jar，等待依赖下载完成后，在AdminApplication.java中运行main函数启动程序
```
2、admin后端的数据库文件在哪？
```text
原因：没有好好看文档，建议先好好看下博客介绍，博客文末“代码开源”处已经早有说明

解决：admin.sql文件在admin后端项目的resources/sql下面
```
3、测试账号/密码是多少？
```text
账号/密码

sa/123456
```
## [AD广告位](https://huanzi.qzz.io/file-server/ad/adservice.html) （长期招租，如有需要请私信）<br/> 
[【阿里云】阿里云最全的优惠活动聚集地！](https://www.aliyun.com/activity?userCode=ckkryd9h) <br/>
[【腾讯云】腾讯云当前最新优惠活动专区！](https://cloud.tencent.com/act/cps/redirect?redirect=11447&cps_key=e1c9db729edccd479fc902634492bf53) <br/>
<br/>

## 交流群<br/>
有事请加群，有问题进群大家一起交流！<br/>
![](https://huanzi.qzz.io/file-server/images/qq.png) 

## 捐献<br/>
相应的资金支持能更好的持续项目的维护和开发，如果喜欢这个项目，请随意打赏！

| 支付宝 | 微信 |
|  ----  | ----  |
| <img src="https://huanzi.qzz.io/file-server/images/zhifubao.png"  width="150"> | <img src="https://huanzi.qzz.io/file-server/images/weixin.png" width="150"> |

