




create table index_lunbo(
  lid int primary key auto_increment,
  img_url varchar(32)
);

INSERT INTO index_lunbo VALUES
(null,'index/lunbo1.jpg'),
(null,'index/lunbo2.jpg'),
(null,'index/lunbo3.jpg'),
(null,'index/lunbo4.jpg');

/**首页二楼**/
create table index_twofl(
  wid int primary key auto_increment,
	img_url varchar(32),
	href varchar(48),
	wname varchar(32), #文物名称
	attr varchar(32)  #文物属性
);

INSERT INTO index_twofl VALUES
(null,'index/twofl1.jpg','/detail?did=1','层像态空间 .  Movements Withinovo','纸本水墨质'),
(null,'index/twofl2.jpg','/detail?did=2','梦笔生花 — 全国中国画作品展','规格：144×367cm'),
(null,'index/twofl3.jpg','/detail?did=3','追寻与本色 — 古棕艺术作品展','创作年代：2006'),
(null,'index/twofl4.jpg','/detail?did=4','灵山秀水-——刘云中国画作品展','Wool scarf');

/**首页三楼**/
create table index_threefl(
  rid int primary key auto_increment,
	img_url varchar(32),
	rname varchar(32), #标题
	subtit varchar(32)  #副标题
);
INSERT INTO index_threefl VALUES
(null,'index/three1.png','中国古代青铜艺术精品','Architecture'),
(null,'index/three1.png','抽象艺术石刻佛像精品','艺术家展'),
(null,'index/three1.png','圆明园兽首铜像','艺术研讨会'),
(null,'index/three1.png','隋意扬古韵遗风——古琴文化浅析','艺术研讨会');

/**首页四楼**/
create table index_fourfl(
  oid int primary key auto_increment,
	img_url varchar(64),
	href varchar(32)
);
INSERT INTO index_fourfl VALUES
(null,'img/fourfl1.png',null),
(null,'img/fourfl2.png',null),
(null,'img/fourfl3.png',null),
(null,'img/fourfl1.png',null),
(null,'img/fourfl2.png',null),
(null,'img/fourfl3.png',null),
(null,'img/fourfl1.png',null),
(null,'img/fourfl2.png',null),
(null,'img/fourfl3.png',null);

/**分页1**/
create table onelist1(
  sid int primary key auto_increment,
	img_url varchar(64),
	ltitle varchar(48),
	subtitle varchar(64),
	href varchar(48)
);
INSERT INTO onelist1 VALUES
(null,'index/twofl1.jpg','层像态空间 .  Movements Withinovo ',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=1'),
(null,'index/twofl2.jpg','梦笔生花 - 全国中国画作品展 ',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=2'),
(null,'index/twofl3.jpg','追寻与本色 - 古棕艺术作品展 ',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=3'),
(null,'index/twofl4.jpg','光影见史——诞辰115周年摄影艺术展',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=4'),
(null,'index/twofl1.jpg','灵山秀水---刘云中国画作品展 ',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=1'),
(null,'index/twofl2.jpg','光影见史——诞辰115周年摄影艺术展',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=2'),

(null,'index/twofl1.jpg','层像态空间 .  Movements Withinovo ',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=1'),
(null,'index/twofl2.jpg','梦笔生花 - 全国中国画作品展 ',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=2'),
(null,'index/twofl3.jpg','追寻与本色 - 古棕艺术作品展 ',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=3'),
(null,'index/twofl4.jpg','光影见史——诞辰115周年摄影艺术展',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=4'),
(null,'index/twofl1.jpg','灵山秀水---刘云中国画作品展 ',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=1'),
(null,'index/twofl2.jpg','光影见史——诞辰115周年摄影艺术展',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=2'),



(null,'index/twofl2.jpg','光影见史——诞辰115周年摄影艺术展',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=2'),
(null,'index/twofl1.jpg','层像态空间 .  Movements Withinovo ',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=1'),
(null,'index/twofl2.jpg','梦笔生花 - 全国中国画作品展 ',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=2'),
(null,'index/twofl4.jpg','光影见史——诞辰115周年摄影艺术展',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=4'),
(null,'index/twofl1.jpg','灵山秀水---刘云中国画作品展 ',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=1'),
(null,'index/twofl3.jpg','追寻与本色 - 古棕艺术作品展 ',
' 展览时间：2017-11-17 至 2017-11-26主办单位：美术馆展览场地：2-7号厅','/detail?did=3');

/**列表页 人物**/
create table listpage2(
  wid int primary key auto_increment,
	img_url varchar(64),
	title varchar(128),
	name varchar(64),
	href varchar(32)
);
INSERT INTO listpage2 VALUES
(null,'list1/author1.jpg','做一朵向日葵，面朝太阳，心纳阳光。心,只要有了充盈的阳光，就不再那么的冰；人，
也就不再那么的冷；拥有了热度，心也跟着有了温度。','林曦','javascript:;'),
(null,'list1/author1.jpg','做一朵向日葵，面朝太阳，心纳阳光。心,只要有了充盈的阳光，就不再那么的冰；人，
也就不再那么的冷；拥有了热度，心也跟着有了温度。','林曦','javascript:;'),
(null,'list1/author1.jpg','做一朵向日葵，面朝太阳，心纳阳光。心,只要有了充盈的阳光，就不再那么的冰；人，
也就不再那么的冷；拥有了热度，心也跟着有了温度。','林曦','javascript:;'),
(null,'list1/author1.jpg','做一朵向日葵，面朝太阳，心纳阳光。心,只要有了充盈的阳光，就不再那么的冰；人，
也就不再那么的冷；拥有了热度，心也跟着有了温度。','林曦','javascript:;');



/**详情页**/
create table detail(
  did int primary key auto_increment,
	img_url varchar(64),
	dname varchar(32),
	chinesename varchar(24),
	material varchar(32), #材质
	author varchar(12),
	type varchar(12),  #类型
	size varchar(24),
	creattime varchar(16),
  title varchar(666),
	englishtitle varchar(666),
	positnews varchar(64), #位置信息
	Exhibition varchar(64) #展览信息
);
INSERT INTO detail VALUES
(null,'index/twofl1.jpg','层像态空间 . Movements Withinovo','层像态空间','纸本水墨质',
'蔡锦','油画','210x110cm','2010',
'Micaela Lattanzio在该作品中探讨了一些社会性问题，比如人口激增，全球沙漠化，提醒人类去反思我们对生态环境的影响。
与其他批判性作品不同，该系列只是艺术家对世界认知，是她对这种认知的回应。人类是生态系统中非常重要的组成部分，
人类与万物一样也需要进化，而在这个过程中，我们需要找到一种平衡。',
'Micaela Lattanzio explores socio-political themes such as overpopulation and globe desertification,
asking a fundamental question: what is the impact that our society has on the environment? 
The series is not a criticism, but rather a reflection on understanding the world, 
human being is an integral part of a complex system that is facing an evolutionary
process in which it is imperative to find a necessary equilibrium.','现位于天宇展览馆一号馆。','每月6号,16号,26号在一号馆6号展位展出。');



/**详情页评论数据**/
create table commdata(
  mid int primary key auto_increment,
	img_url varchar(64),
	nickname varchar(32), #昵称
	commcont varchar(128) #评论内容
);
INSERT INTO commdata VALUES
(null,'detail/touxiang1.png','我是一个美得感情的杀手','我靠,这是油画,不说我还以为是照片,牛逼!'),
(null,'detail/touxiang2.png','酷客家族制杖又铸剑','牛逼!膜拜大神'),
(null,'detail/touxiang3.png','乱世·帝轻羽','请收我五体投地一百'),
(null,'detail/touxiang4.png','转逝·年华','大神就是大神,操作就是牛逼。不像康亚坤,一段操作猛如虎啊,定睛一看原地杵!');

/**艺术家数据列表**/
create table artlist(
	aid int primary key auto_increment,
	img_url varchar(64),
	aname varchar(12),
	occupation varchar(32), #职业
	works varchar(128),    #作品
	href varchar(88)
);

INSERT INTO artlist VALUES
(null,'artist/artist1.jpg','陈丹青','画家、文艺评论家、作家',
'《陈丹青素描稿》,《陈丹青速写集》,《陈丹青素描集》,《陈丹青1968-1999素描油画集》',
'https://baike.baidu.com/item/%E9%99%88%E4%B8%B9%E9%9D%92/59356?fr=aladdin'),

(null,'artist/artist2.jpg','史国良','当代著名人物画家',
'《史国良速写集》,《水墨人物画技法》,《史国良画选》,写实水墨人物技法》',
'https://baike.baidu.com/item/%E5%8F%B2%E5%9B%BD%E8%89%AF/3128014'),

(null,'artist/artist3.jpg','关山月','著名国画家',
'《绿色长城》,《江山如此多娇》,《碧浪涌南天》,《山泉水清》',
'https://baike.baidu.com/item/%E5%85%B3%E5%B1%B1%E6%9C%88/5771'),

(null,'artist/artist4.jpg','宋步云','中国著名美术家',
'《桃圣》,《夏之晨》,《救国不分老幼》,《嘉陵摆渡》',
'https://baike.baidu.com/item/%E5%AE%8B%E6%AD%A5%E4%BA%91/3170597?fr=aladdin'),


(null,'artist/artist1.jpg','冷军','国家一级美术师',
'《葡萄》,《破损石膏像》,《五角星》,《小姜》',
'https://baike.baidu.com/item/%E9%99%88%E4%B8%B9%E9%9D%92/59356?fr=aladdin'),

(null,'artist/artist2.jpg','胡秋萍','中国国家画院研究员，国家一级美术师',
'《秋萍墨韵》,《秋萍诗韵》,《听花堂诗语》,《秋歌——浸月斋诗稿》',
'https://baike.baidu.com/item/%E5%8F%B2%E5%9B%BD%E8%89%AF/3128014'),

(null,'artist/artist3.jpg','齐慧娟','著名国画家',
'《有鱼》,《多吉》,《事事皆喜》',
'https://baike.baidu.com/item/%E5%85%B3%E5%B1%B1%E6%9C%88/5771'),

(null,'artist/artist4.jpg','白冰洋','青年艺术家',
'《无言》,《书房》,《花家地系列》,《静物》',
'https://baike.baidu.com/item/%E5%AE%8B%E6%AD%A5%E4%BA%91/3170597?fr=aladdin'),

(null,'artist/artist4.jpg','关羽','青年艺术家',
'《无言》,《书房》,《花家地系列》,《静物》',
'https://baike.baidu.com/item/%E5%AE%8B%E6%AD%A5%E4%BA%91/3170597?fr=aladdin');

/**展览信息**/
create table exhnews(
	eid int primary key auto_increment,
	title varchar(24),
	btime varchar(24),
	dtime varchar(24),
	location varchar(48),
	exhlist varchar(260)
);
INSERT INTO exhnews VALUES
(null,'油画展','2019-04-12','上午8:00-下午16:00','天宇展览馆七号展厅',
'《破损石膏像》 《夏之晨》《桃圣》 《嘉陵摆渡》《碧浪涌南天》 《山泉水清》'),
(null,'油画展','2019-04-12','上午8:00-下午16:00','天宇展览馆七号展厅',
'《破损石膏像》 《夏之晨》《桃圣》 《嘉陵摆渡》《碧浪涌南天》 《山泉水清》'),
(null,'油画展','2019-04-12','上午8:00-下午16:00','天宇展览馆七号展厅',
'《破损石膏像》 《夏之晨》《桃圣》 《嘉陵摆渡》《碧浪涌南天》 《山泉水清》'),
(null,'油画展','2019-04-12','上午8:00-下午16:00','天宇展览馆七号展厅',
'《破损石膏像》 《夏之晨》《桃圣》 《嘉陵摆渡》《碧浪涌南天》 《山泉水清》');

/**发现页面的学术研究**/
create table research(
	rid int primary key auto_increment,
	title varchar(48),
	year varchar(24),
	month varchar(24),
	suntitle varchar(128),
	href varchar(48)
);

INSERT INTO research VALUES
(null,'艺术+ 今日新春开讲！','2017','06-06','MAGMODE名堂是由作家蔡崇达、《智族GQ》原时尚副总监梁春敏、
《一条》原美学总监冯鹏、《外滩画报》前时尚版主编许佳、AD原资深编辑简君舫等文化媒体人','/study?tid=1'),

(null,'典藏活化系列展/层叠·生长','2016','11-22','诺曼·泰勒对周围的一切好奇，但不会对事情非常绝对地下定
论与真实相对的是绝对中国美术馆新加坡国家美术馆陈列,展出作品、艺术家及的','/study?tid=1'),

(null,'刹那影像形态的空间','2017','12-12','现代艺术之父杜尚曾说过我的生活是我最好的作品艺术品的是不是商品价值？当代艺术的症结 ...','/study?tid=1'),

(null,'超以相外，得其圜中艺术夜校','2017','06-06','我们将从艺术以外“抽象”的视角，让大家一步步剖析艺术
的并通过中国抽象艺术研究展 ... ','/study?tid=1'),

(null,'西班牙电影系列-离去无痕','2018','09-09','在索里亚的荒野中，有个名为Aldea的村庄。在数千年的平静生活后 ...',
'/study?tid=1'),

(null,'雕塑中空间、色彩与形式的探索','2017','08-08','现代艺术之父杜尚曾说过我的生活是我最好的作品艺术品的是不是商品
价值?这不停地诘问恰好预言了当代的症结 ...','/study?tid=1');

create table study(
	tid int primary key auto_increment,
	title varchar(48),
	time varchar(12),
	img_url varchar(48),
	p1 varchar(200),
	p2 varchar(200),
	p3 varchar(200),
	p4 varchar(200),
	p5 varchar(200),
	p6 varchar(200),
  p7 varchar(200),
	otitle varchar(32),
	otime varchar(16),
	op varchar(68)
);
INSERT INTO study VALUES
(null,'艺术+ 今日新春开讲！','2017-11-22','study/study.jpg',
'MAGMODE名堂是由作家蔡崇达、《智族GQ》原时尚副总监梁春敏、《一条》原美学总监冯鹏、《外滩画报》前时尚版主编许佳、AD原资深编辑简君舫等文化媒体人 ',

'中国美术馆与白俄罗斯国家美术馆倾力合作，历时两年，精心筹备，今天终于在这里成功举办展览，历史上第一次将白俄罗斯国家美术馆典藏精品搬到了中国美术馆的殿堂。',

'白俄罗斯国家美术馆拥有从古代圣像画到当代不同风格的重要美术收藏，本次展览共展出57件馆藏油画精品，创作年代跨越19世纪迄今，包括了人物肖像画、风景画、静物画、风俗画。不同历史时期、不同体裁、不同风格的作品基本串联起白俄罗斯美术发展的清晰脉络，向我们展现了白俄罗斯纯洁的大地与天空，这里的人民的平静自由的生活和他们对美好的向往。 ',

'首先，展览有中国人民熟悉和喜爱的，浸润着中国人的文化记忆和情感的俄罗斯巡回画派大师作品，像：克拉姆斯阿依、列宾、列维坦、希施金、涅斯捷罗夫等人的精彩作品，他们用高超的现实主义手法诠释了俄罗斯民族伟大的灵魂，他们的作品被当作人类共同的财富在白俄罗斯国家美术馆享有崇高的荣誉。',

'从19世纪中期开始，白俄罗斯美术在俄罗斯美术体制下发展起步，先后有赫鲁茨基、比鲁利亚、茹科夫斯基等在画坛崭露头角，本展选展了赫鲁茨基《玫瑰和水果》《男人的画像》，比鲁利亚的《早春》《冬日的一天》，茹科夫斯基的《春天的晚上》《圣诞前夜》等，画风朴实深厚，平静中内蕴诗意，显示出对俄罗斯美术传统的深刻理解与传承。',

'白俄罗斯民族艺术画派从20世纪下半叶开始形成，以丹茨格、古格尔为代表的白俄罗斯艺术家扎根民族生活的土壤，深入挖掘自身民族文化传统，歌咏自然的诗意和人性的美。特别是1991年白俄罗斯共和国宣布独立之后，白俄罗斯美术开始走上自我更新和文化寻根之路。艺术家视野更为开阔，一方面吸收西方现代主义影响，自由探索现实主义之外的各种表现形式，一方面从民族、民间资源中汲取营养，产生了像卡萨科夫《白俄罗斯》、科斯秋申克《把月亮送给我》这样具有浓郁民族精神和现代风格的作品。 ',

'今年是中国与白俄罗斯建交25周年，两国文化的交流合作通过多种方式飞速发展。作为“一带一路”倡议中重要的节点国家，白俄罗斯共和国是丝绸之路经济带进入欧洲的门户之一。当前，在“一带一路”倡议的框架下，两国携手在文化领域展开了广泛合作。两国美术馆、博物馆和图书馆之间的往来密切，构造了两国深厚的文化关系，增强了两国人民的友谊。此次展览正是落实中国美术馆与白俄罗斯国家美术馆合作协议的重要成果，凝结着两个国家美术馆的真挚情谊，通过这个展览，我们会走进白俄罗斯美术的世界，通过艺术上心与心的交流，必将激起更大范围的共鸣。 ',

'刹那影像形态的空间','2017-12-22',
'现代艺术之父杜尚曾说过我的生活是我最好的作品艺术品的是不是商品价值？当代艺术的症结 ......'
);


/**用户信息**/
create table usernews(
		uid int primary key auto_increment, 
		zh varchar(12),
		isLogin Bool,
		upwd varchar(14),
		uemail varchar(24),
		nickname varchar(24), #昵称
		touxing varchar(32) #头像
);


/**添加关注数据库**/
create table add_concern(
  cid int primary key auto_increment,
	chinesename varchar(24),
	material varchar(32), #材质
	author varchar(12),
	type varchar(12),  #类型
	size varchar(24),
	creattime varchar(16),
	positnews varchar(64), #位置信息
	exhibition varchar(64) #展览信息
);



