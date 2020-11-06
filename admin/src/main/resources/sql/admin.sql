/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50528
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50528
 File Encoding         : 65001

 Date: 05/11/2020 19:16:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '表id',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码',
  `created` datetime NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户信息表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tb_user
-- ----------------------------
INSERT INTO `tb_user` VALUES (1, 'sa', 'E10ADC3949BA59ABBE56E057F20F883E', '2020-01-10 15:56:04');
INSERT INTO `tb_user` VALUES (2, 'huanzixxxx', 'E10ADC3949BA59ABBE56E057F20F883E', '2020-01-16 19:56:04');
INSERT INTO `tb_user` VALUES (3, 'huanzi2222', 'E10ADC3949BA59ABBE56E057F20F883E', '2020-01-16 19:56:04');
INSERT INTO `tb_user` VALUES (4, 'huanziyyyy', 'E10ADC3949BA59ABBE56E057F20F883E', '2020-08-16 19:56:04');

SET FOREIGN_KEY_CHECKS = 1;
