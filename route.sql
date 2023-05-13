/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : route

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 02/02/2023 22:11:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for discussion
-- ----------------------------
DROP TABLE IF EXISTS `discussion`;
CREATE TABLE `discussion`  (
  `cid` int(0) NOT NULL AUTO_INCREMENT,
  `uid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `rating` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `likes` int(0) NULL DEFAULT NULL,
  `time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of discussion
-- ----------------------------

-- ----------------------------
-- Table structure for sightsinf
-- ----------------------------
DROP TABLE IF EXISTS `sightsinf`;
CREATE TABLE `sightsinf`  (
  `id` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `main` varchar(1023) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pricen` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `price` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cloud` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT 'no',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sightsinf
-- ----------------------------
INSERT INTO `sightsinf` VALUES ('1', '上海迪士尼乐园', '<div>上海迪士尼乐园，位于上海市浦东新区川沙镇黄赵路310号，于2016年6月16日正式开园，是中国内地首座迪士尼主题乐园，也是中国规模最大的现代服务业中外合作项目之一，是一座具有纯正迪士尼风格并融汇了中国风的主题乐园。上海迪士尼乐园占地1.16平方公里，主题园区分为米奇大街、奇想花园、探险岛、宝藏湾、明日世界、梦幻世界、迪士尼·皮克斯玩具总动员。拥有迪士尼城堡、漫威英雄总部、巴斯光年星际营救等游乐项目。2020年游客量达到550万人次。 2017年，包含上海迪士尼乐园在内的上海迪士尼度假区获“2016—2017年度中国建设工程鲁班奖”。 2020年3月24日，第十一届中国最佳文化旅游大奖榜单发布，上海迪士尼乐园荣获“年度最佳文化旅游大奖”。</div></div><div>很久以前，华特迪士尼公司创始人华特迪士尼先生梦想建造出比普通游乐园更令人流连忘返的场所。“那时两个女儿还小，一般星期六是父亲日，我会带她们去坐旋转木马，到处玩耍。我坐在旁边看时，突然有个想法，我觉得应该建造一个能让父母和子女共度欢乐时光的场所。最终这个想法促成了迪士尼乐园的诞生。但一切始于一位爸爸冥思苦想应该带两个女儿到哪里玩耍，才能一起享受快乐时光。因此，迪士尼乐园诞生于60多年前，致力于让人们回归纯真，感受快乐，分享难忘经历。如今，上海迪士尼度假区以新颖特别的方式延续着这种精神，打造了“探险岛”、“宝藏湾” 和“奇想花园”等全新的主题园区，以及众多独一无二的游乐项目和体验。包括全球迪士尼主题乐园中最大的城堡。华特迪士尼公司的梦想在上海迪士尼度假区延续，欣欣向荣。与任何其他迪士尼产业有所不同的是，上海迪士尼度假区提供独特的、具有中国特色的体验，为形形色色的游客而设计。一切都始于华特先生的想法：建造“一个供父母与子女一起玩乐的家庭乐园。”</div>', '\'乐园美食套餐门票\', \'标准票\', \'儿童/老年人票\', \'二日标准票\', \'二日儿童/老年人票\',', '407.8, 399, 299, 808, 605', 'no');
INSERT INTO `sightsinf` VALUES ('10', '东方明珠', '<div>位于上海市浦东新区陆家嘴世纪大道1号，地处黄浦江畔，地铁二、十、十四号线途经。国家5A级景区，背拥陆家嘴地区现代化建筑楼群，与隔江的外滩万国建筑博览群交相辉映，是集都市观光、时尚餐饮、购物娱乐、历史陈列、浦江游览、会展演出、广播电视发射等多功能于一体的上海市标志性建筑之一。</div></div>', '\'巅峰票：成人票\',\'巅峰票：儿童票\',\'速通票：成人票\',\'速通票：儿童票\',\'超值票：成人票\',\'超值票：儿童票\',\'至尊VIP套票\',', '220,110,299,199,199,99,399', 'http://www.quanjingke.com/jq/m/103');
INSERT INTO `sightsinf` VALUES ('11', '陆家嘴', '<div>地处上海市区中部，位于上海市浦东新区的黄浦江畔，地铁二号线、十四号线途经。两面环水，西面隔江与外滩 万国建筑博览群相望，北面隔江眺望北外滩。陆家嘴是上海国际金融中心的核心功能区，为多家跨国银行的中国（含港澳台）及东亚总部所在地。陆家嘴境内有东方明珠广播电视塔、上海中心大厦、上海环球金融中心、上海金茂大厦等现代化建筑群。</div></div>', '\'免费\'', '0', 'http://www.quanjingke.com/jq/m/1279');
INSERT INTO `sightsinf` VALUES ('12', '上海国际会议中心', '<div>地处陆家嘴金融贸易中心，毗邻东方明珠电视塔，与外滩万国建筑群隔江相望，被评为建国五十年十 大经典建筑之一，素以举办大型国际会议、商务论坛而蜚声海内外。</div></div>', '\'免费\'', '0', 'http://www.quanjingke.com/jq/m/409');
INSERT INTO `sightsinf` VALUES ('13', '上海科技馆', '<div>位于中国上海市浦东新区世纪大道2000号，花木行政文化中心区，世纪广场西侧，南邻世纪公园。国家5A级 景区。主馆占地面积6.8万多平方米，建筑面积9.8万平方米，分为11个风格各异的主题展区、4个高科技特种影院、3个古今中外科学家及其足迹的艺术长廊、2个主题特展和若干个临时展厅，它们共同为四方游客生动地演绎着\"自然、人、科技\"的永恒话题。</div></div>', '\'成人票\',\'学生票\',\'老年票\'', '45,22,37', 'http://www.quanjingke.com/jq/m/411');
INSERT INTO `sightsinf` VALUES ('14', '上海人民公园', '<div>上海人民公园地处黄浦区，位于上海市中心，主园门位于南京西路231号。园内有南极石、张思德雕像和五卅纪念碑成为青少年爱国主义教育的标志，还设有艺术馆、迷你但齐全的\"欢乐谷\"，北面有国际饭店、大光明电影院等古董老建筑，南面隔着人民广场是摩天楼组成的城市新兴天际线。</div></div>', '\'免费\'', '0', 'http://www.quanjingke.com/jq/m/413');
INSERT INTO `sightsinf` VALUES ('15', '上海世纪广场', '<div>位于浦东新区世纪大道南道，是上海最大的露天广场，也是唯一一个以时间为主题的雕塑景观广场。广场 整体建筑主要体现\"世纪之光\"这一主题。广场的入口是以日晷为原形设计的大型景观雕塑\"东方之光\"，突出跨世纪的时间主题，是雕塑艺术语言与现代高科技建筑语言的完美结合。</div></div>', '\'免费\'', '0', 'http://www.quanjingke.com/jq/m/411');
INSERT INTO `sightsinf` VALUES ('16', '上海植物园', '<div>位于徐汇区。国家4A级景区。园区分为展览区和绿化种植区，展览区建有植物进化区、环境保护区、人工生 态区、绿化示范区4个展出区和黄道婆庙游览区，各区下分以专类植物为主景的若干小区，配以园林建筑小品。园区主要收集引种长江中 下游野生植物，共收集活植物3500余种，6000多个品种。</div></div>', '\'成人大门票\',\'成人联票(含大门票及售票专类园)\',\'儿童大门票\',\'儿童联票(含大门票及售票专类园)\',', '15,40,7.5,20', 'http://www.quanjingke.com/jq/m/416');
INSERT INTO `sightsinf` VALUES ('17', '上海中山公园', '<div>位于长宁区中心，地铁二、三、四号线途经，附近有来福士、龙之梦等大商场。1941年为纪念孙中山先生 而得名。公园以英国式自然造园风格为主，融中国园林艺术之精华，中西合壁，风格独特，是上海原有景观风格保持最为完整的老公园。</div></div>', '\'免费\'', '0', 'http://www.quanjingke.com/jq/m/668');
INSERT INTO `sightsinf` VALUES ('18', '世纪公园', '<div>位于浦东新区，地铁二、十八号线途经，邻近上海科技馆。大型城市生态公园，国家4A级旅游景区。公园以大 面积草坪、森林、湖泊为主体，体现了东西方园林艺术与自然的融洽，划分为7个区域：湖滨区、观景区、疏林草坪区、鸟类保护区、乡 土田园区、异国园区以及迷你高尔夫球场区。</div></div>', '\'免费\'', '0', 'http://www.quanjingke.com/jq/m/447');
INSERT INTO `sightsinf` VALUES ('19', '田子坊', '<div>田子坊位于中国上海市泰康路210弄。泰康路是打浦桥地区的一条小街，1998年前这里还是一个马路集市，自1998年9月区政府实施马路集市入室后，把泰康路的路面进行重新铺设，使原来下雨一地泥、天晴一片尘的马路焕然一新。曾经拥挤平常的田 子坊弄堂抹上了苏荷SOHO的色彩，宛如上海市著名的荣乐东路一样，变身成为现代创意聚集地，增添了人文艺术气息。国家3A级别景区，由上海最具特色的石库门里弄演变而来，是时尚地标性创业产业聚集区</div></div>', '\'免费\'', '0', 'http://www.quanjingke.com/jq/m/1117');
INSERT INTO `sightsinf` VALUES ('2', '外滩', '<div>上海外滩，北起外白渡桥，南至延安东路，全程大约1.5公里，东边毗邻黄浦江，西侧与浦东金融中心陆家嘴隔江而对，是感受中国历史沧海桑田之变化的都市游览胜地。黄浦江从城市中心蜿蜒流过，东侧是有“万国博览建筑群”之称的旧上海建筑，是旧上海城市历史的见证；西侧为现代上海的地标建筑：金茂大厦、东方明珠、上海环球金融中心、上海中心大厦等，是中国现代化建设与改革开放成果的缩影。漫步外滩，我们可以感受到上海这座国际化大都市的历史与发展，更能体会到祖国在世界东方崛起带来的风云变幻。</div></div><div>白天游览外滩可以从外白渡桥出发，一路游览万国博览建筑群。外白渡桥本身也是著名的景点。这是一座简支钢桁架桥，同时也是一座全钢结构铆接桥梁和不等高桁架结构桥梁，有两孔。外白渡桥上部结构为下承式简支铆接钢珩架，下部木桩基础钢筋混凝土桥台和混凝土空心薄板桥墩桥支撑着上部下承式筒支铆接钢桁架，下部结构为木桩基础钢筋混凝土桥台和混凝土空心薄板桥墩。外白渡桥同时也是中国的第一座全钢结构铆接桥梁和仅存的不等高桁架结构桥梁自19世纪40年代租界被英法等国抢占后，外滩便成了一个主权区，西方列强以他们的方式经营、管理、建设租界，当商行、金融企业在外滩占有一席之地后，即大兴土木，营建公司大楼，而外滩的建筑大多也经过三次或三次以上的重建。20世纪，由于建筑技术的发展和经济实力的增长，外滩出现了多层和高层建筑，式样五花八门，诸如英国古典式、英国新古典式、英国文艺复兴式亚细亚大楼（原上海冶金设计院）、上海总会（今东风饭店）、浦发银行大楼（原汇丰银行大楼）、恰和大楼（今外贸局大楼）等，还有法国古典式、法国大住宅式、哥特式、巴洛克式、近代西方式、东印度式、折中主义式、中西掺合式等，呈现世界各国建筑共存的局面。因而，北起苏州河外白渡桥，南至中山东一路金陵东路的这一片建筑群，被誉为“万国建筑博览”。这些古典主义与现代主义并存的建筑，已成为了上海的象征。</div>', '\'外滩轮渡\', \'外滩观光隧道单程票成人票\', \'外滩观光隧道（单程）票+太空秘境体验馆门票成人票\', \'外滩观光隧道（单程）票+新魔幻趣味馆门票优待票(儿童/老人) \', \'外滩观光隧道单程票优待票(儿童/老人等) \',', '2, 45, 85, 60, 23', 'http://www.quanjingke.com/jq/m/508');
INSERT INTO `sightsinf` VALUES ('20', '朱家角古镇', '<div>位于青浦区，地铁十七号线途经。东靠虹桥国际机场，北连昆山，南接嘉兴，西通平望，淀山湖下游、黄金 水道漕港河穿镇而过。镇内河港纵横，九条长街沿河而伸，千栋明清建筑依水而立，36座石桥古风犹存，名胜古迹比比皆是。1991年被上海市政府命名为首批四大文化名镇之一。</div></div>', '\'免费\'', '0', 'http://www.quanjingke.com/jq/m/717');
INSERT INTO `sightsinf` VALUES ('3', '中共一大纪念馆', '<div>中共一大会址地处上海原法租界望志路106号（今兴业路76号），属典型上海石库门风格建筑，建于1920年秋。1921年7月23日，中国共产党第一次全国代表大会在此召开。中国共产党第一次全国代表大会通过了中国共产党的第一个纲领和第一个决议，选举产生了中央领导机构，宣告了中国共产党的诞生。1952年9月，中共一大会址修复，建立纪念馆并对外开放。1961年3月，国务院公布中共一大会址为全国重点文物保护单位。2017年10月31日，习近平总书记带领中央政治局常委集体瞻仰中共一大会址并在宣誓大厅庄严宣誓，回顾建党历史，重温入党誓词，宣示新一届党中央领导集体的坚定政治信念。</div></div><div>中共一大会址原楼于民国九年（1920年）夏秋间建，与左右紧邻4幢同类房屋同时建成，属贝勒路树德里（今黄陂南路374弄）一部分。为上海典型石库门式样建筑，外墙青红砖交错，镶嵌白色粉线，门楣有矾红色雕花，黑漆大门上配铜环，门框围以米黄色石条，门楣上部有拱形堆塑花饰。“中国共产党创建历史文物陈列”由三部分内容组成：中国党成立的历史背景；中国共产党早期组织的成立及其活动；中国共产党第一次全国代表大会召开的全过程。陈列室内还按照历史资料开辟了一个蜡像室，形象地刻画出当年出席中共“一大”会议的15位出席者（包括2位共产国际代表）围桌而坐、热烈讨论的生动场景。栩栩如生的蜡像人物增强了陈列的直观性和历史感染力，成为参观中的新热点。</div>', '\'免费不免票\'', '0', 'https://360.zgyd1921.com/project/57/index1.html?content=0&&startscene=0&startactions=lookat(-291.47,88.21,149.4,0.91,0);');
INSERT INTO `sightsinf` VALUES ('4', '城隍庙', '<div>位于上海市黄浦区方浜中路，地铁十、十四号线途经。国家4A级旅游景区，为“长江三大庙”之一 。</div></div><div>城隍庙殿堂建筑属南方大式建筑，红墙泥瓦，庙内主体建筑由庙前广场、大殿、元辰殿，财神殿、慈航殿、城隍殿、娘娘殿组成。现门前存有1535年所建的牌坊，戏台为1865年建。</div>', '\'成人票\'', '10', 'http://www.quanjingke.com/jq/m/67');
INSERT INTO `sightsinf` VALUES ('5', '南京路步行街', '<div>位于黄浦区，素有“中华商业第一街”之誉，东起外滩，西至静安寺与延安西路交汇，全长5.5公里，两侧商厦鳞次栉比，云集着约600多家商店，各地的名、特、优、新产品，以及进口的名牌商品，不下数十万种。几家老字号特色商店的商品，尤为名声卓著。</div></div>', '\'免费\'', '0', 'http://www.quanjingke.com/jq/m/340');
INSERT INTO `sightsinf` VALUES ('6', '南园公园', '<div>系闽南同乡会泉漳会馆旧址，曾是中国共产党的地下活动场所，内有各种建筑及茔地。</div></div>', '\'免费\'', '0', 'http://www.quanjingke.com/jq/m/350');
INSERT INTO `sightsinf` VALUES ('7', '上海博物馆', '<div>位于上海市黄浦区人民大道201号，陈列面积共计12000平方米，一楼为中国古代青铜馆、中国古代雕塑馆和展览大厅；二楼为中国古代陶瓷馆、暂得楼陶瓷馆和展览厅；三楼为中国历代书法馆、中国历代绘画馆、中国历代玺印馆；四楼为中国古代玉器馆、中国历代钱币馆、中国明清家具馆、中国少数民族工艺馆和展览厅，是综合性博物馆。</div></div>', '\'免费\'', '0', 'http://www.quanjingke.com/jq/m/407');
INSERT INTO `sightsinf` VALUES ('8', ',上海城市规划馆', '<div>位于上海市黄浦区人民大道100号，靠近人民公园、上海博物馆。地下1层为临展厅，地上1层是序厅，地上1层和2层之间的M层为文创区、阅览区和咖啡馆，地上2、3、4层分别为“人文之城”“创新之城”和“生态之城”展区，5楼设多媒体展示厅。	</div></div>', '\'免费\'', '0', 'http://www.quanjingke.com/jq/m/408');
INSERT INTO `sightsinf` VALUES ('9', '滨江大道', '<div>位于上海市浦东新区，1997年建成，全长2500米，从泰东路沿黄浦江一直到东昌路，与浦西外滩隔江相望，是集观光、绿化、交通及服务设施为一体的沿江景观工程。它由亲水平台、坡地绿化、半地下厢体及景观道路等组成，被人们赞誉为浦东的新外滩。</div></div>', '\'免费\'', '0', 'http://www.quanjingke.com/jq/m/55');

-- ----------------------------
-- Table structure for userinf
-- ----------------------------
DROP TABLE IF EXISTS `userinf`;
CREATE TABLE `userinf`  (
  `username` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `driving` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userinf
-- ----------------------------
INSERT INTO `userinf` VALUES ('lxh', '123', '1', '0');
INSERT INTO `userinf` VALUES ('200023571', '1', '1', '0');

SET FOREIGN_KEY_CHECKS = 1;
