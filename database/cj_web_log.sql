/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50506
Source Host           : localhost:3306
Source Database       : cj_web_log

Target Server Type    : MYSQL
Target Server Version : 50506
File Encoding         : 65001

Date: 2019-10-30 18:49:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for err_log
-- ----------------------------
DROP TABLE IF EXISTS `err_log`;
CREATE TABLE `err_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `title` text,
  `content` text,
  `access_url` varchar(255) DEFAULT NULL,
  `params` varchar(255) DEFAULT NULL,
  `add_time` datetime DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
