'use strict'

//讲师信息
let lecturers=[
    {
        name: 'Philippe Le Hégaret',
        desc: 'W3C技术产品总经理',
        img: 'philippe.png',
        title: 'Now and the Future',
        qr: 'PhilippeLeHegaret.png',
        content: 'Philippe Le Hegaret is the Project Manager for W3C, responsible to meet all of the milestones of all of the groups, facilitate the work of Team Contacts, Chairs, and Editors, and drive the work necessary to achieve operational success. Until 2016, he was for the former W3C Interaction Domain, which produced frontend Web technologies including HTML5, CSS3, SVG, WOFF, or Web APIs. Prior to 2009, Philippe lead the W3C Architecture Domain, which produced the W3C Core technologies in the area of XML, Web Services, and Internationalization. He is a former Chair of the Document Object Model (DOM) Working Group.'
    },
    {
        name: 'Michael Yeung',
        desc: 'Google开发者平台工程师',
        img: 'michael.png',
        title: 'PWA与AMP - 移动Web的现在与未来',
        qr: 'MichaelYeung.png',
        content: 'Michael Yeung，毕业于加州大学柏克萊分校电机及电脑科学系，而后在麻省理工学院取得硕士学位。曾在甲骨文担任软体工程师，及在德勤担任顾问一职。于 2011 年起加入 Google，在山景总部进行 Google Offers 与 Google Wallet 的技术整合工作。目前主要负责分享和推动 PWA 和 AMP 的前端技术，与 Web 开发者一起通过新颖的前端技术创造更快更优的用户体验。'
    },
    {
        name: '陈映平',
        desc: '云汉金融科技前端负责人',
        img: 'casper.png',
        title: 'WebAssembly：面向未来的web开发',
        qr: 'chenyingping.png',
        content: 'WebAssembly作为一种新的面向web的二进制格式，从设计之初，就以其高效和可移植性吸引了众多开发者的关注。本次分享将对WebAssembly进行总览性的介绍，同时结合当下开发实践，展望WebAssembly的未来。'
    },
    {
        name: 'Limin zhu',
        desc: '微软TypeScript专家',
        img: 'liming.png',
        title: 'TypeScript:高效可扩展的JS开发体验',
        qr: 'Liminzhu.png',
        content: '微软程序经理，负责开源的TypeScript以及ChakraCore JavaScript引擎。'
    },
    {
        name: '陈申海',
        desc: '某大型电商公司资深前端工程师',
        img: 'chenshenhai.png',
        title: 'Koa2 的奇思妙想',
        qr: 'chenshenhai.png',
        content: '目前从事Web前端、Node.js开发，在GitHub发表过拙作《Koa2进阶学习笔记》开源电子书。在前端/Node.js技术日新月异的浪潮中，致力于用低门槛的学习思路分享前沿的开发技术，本次将以接地气的思路分享Koa2的奇思妙想和进阶实践。'
    },
    {
        name: '黄伟明',
        desc: '腾讯Web前端高级工程师',
        img: 'kavink.png',
        title: 'Node.js 构建高可用Web服务',
        qr: 'huangweiming.png',
        content: '2011年加入腾讯，先后负责QQ会员游戏特权、QQ钱包等业务。目前负责QQ钱包node.js服务的建设维护。长期关注前端技术动向，在node.js的web服务建设上面具有丰富的实践经验。'
    },
    {
        name: '唐俊俊',
        desc: '腾讯Web前端高级工程师',
        img: 'derick.png',
        title: 'WebIM Node.js 微服务应用开发与实践',
        qr: 'tangjunjun.png',
        content: 'webim是腾讯企点重要消息通路之一，它实现了无需客户端就可以和腾讯企点客户端进行即时沟通，Node.js主要实现了消息通路的前端接入层服务，本次将基于webim接入层实现架构，柔性服务特性，监控上报等方面的实践进行分享。'
    },
    {
        name: '狼叔',
        desc: 'Qunar前端架构师',
        img: 'langshu.png',
        title: '更了不起的 Node.js',
        qr: 'langshu.png',
        content: 'Node更新过快，大家开发中天天用，但对Node没有大局观，对一些更好的写法，最佳实践不熟悉。《更了不起的Node.js：将下一代Web框架Koa进行到底》一书的核心内容，覆盖最新技术栈，大局观和最佳实践。'
    },
    {
        name: '天猪',
        desc: '阿里游戏前端负责人，EggJS 核心开发者',
        img: 'tianzhu.png',
        title: 'Egg&Node.js 从小工坊走向企业级开发',
        qr: 'langshu.png',
        content: 'Egg 是阿里 Node.js 的核心基础框架，通过「微内核 + 插件机制 + 框架定制能力」，完美达成生态共建和差异化定制的平衡点。Egg 已开源近一年，本次分享将介绍 Egg 的设计理念和特点，演示在团队里如何渐进式演进，希望能帮助开发者定制适合自己团队的上层框架，走向企业级开发协作。'
    },
    {
        name: '崔进',
        desc: '腾讯Web前端高级工程师，TSW组件核心开发',
        img: 'neilcui.png',
        title: 'TSW抓包原理解析',
        qr: 'cuijin.png',
        content: '2012年开始进入腾讯实习，期间负责空间相册，空间直播等业务。同时是腾讯内部TSW(Tencent Server Web)组件的核心开发者和维护者。<br> 本次主要解析在TSW演进中沉淀下来的Node.js请求抓包工具的原理，该工具可以将单次用户访问涉及到的所有请求打包成Fiddler可以查看的saz包，下载到本地进行查看和重放调试。'
    },
    {
        name: '郭达峰',
        desc: 'Strikingly／上线了 联合创始人',
        img: 'dafeng.png',
        title: 'Inside React Fiber',
        qr: 'guodafeng.png',
        content: '于 2010 年开发了三款 Facebook 平台的应用，获取了超过 2 千万的用户。2012 年创立了市面上最简易的建站平台 Strikingly，成为第一家进入 YC 孵化器的华人团队。'
    },
    {
        name: '张成文',
        desc: '前IMWeb团队成员',
        img: 'ouven.png',
        title: 'React组件的运行质量监控方案',
        qr: 'guodafeng.png',
        content: '主要讲解react组件异常日志的捕获方式与性能问题，包括全局捕获、入侵式捕获和无痕方式捕获。帮助react组件开发者调试和线上质量改进。'
    },
    {
        name: '姜天意',
        desc: '阿里巴巴前端技术专家',
        img: '99.png',
        title: 'Web安全风险与Node框架安全方案介绍',
        qr: 'jiangtianyi.png',
        content: '深入浅出的介绍的常见的安全问题，一些不常见的安全问题，以及对应的防范方法。开发一个Node框架，需要考虑哪些安全方面的问题？相信你会得到一些答案。'
    },
    {
        name: '方应杭',
        desc: '饥人谷联合创始人',
        img: 'fangfang.png',
        title: '我从TJ身上学到了什么',
        qr: 'fangyinghang.png',
        content: '2012年就职于腾讯IMWeb，负责IMQQ官网已经公司内部产品体验环境优化。2014年就职于阿里巴巴B2B，负责1688商家平台前端开发。现在在饥人谷从事前端培训行业。<br> 演讲内容：<br> 1. 从 Ruby 社区学习<br> 2. 从 TJ 的代码中学习<br> 主要涉及前端框架、工具、社区文化等方面的知识。'
    },
    {
        name: '张耀春',
        desc: '现任摩拜科技前端负责人',
        img: 'zhangyaochun.png',
        title: '过来人论框架和工具的抉择和落地',
        qr: 'zhangyaochun.png',
        content: '现任摩拜科技前端负责人，之前滴滴公共前端团队负责人，再之前的最近的经历主要在豌豆荚，喜好前端，也做过后端和客户端，出版过2本前端读物，包含 《vue.js权威指南》等，作为分享嘉宾最近参与了 2016 SDCC 中国软件开发者大会 以及最近的全球首届 vueconf 等技术分享大会。'
    },
    {
        name: '林子杰',
        desc: '阿里前端开发专家，UC内核前端负责人',
        img: 'linzijie.png',
        title: '如何建立 Web 前端性能评估体系',
        qr: 'linzijie.png',
        content: '本主题主要从浏览器内核在各业务的前端性能优化工作的实践积累，阐述如何建立 Web 前端性能评估体系：<br/> 1. 前端性能优化最佳实践若干案例介绍（UC 各自有业务如信息流、自媒体、营销活动、神马搜索等）；<br/>2. 从内核和前端开发角度，分别来看前端性能优化这项工作；<br/>3. 如何根据不同业务的特点，建立适合业务的前端性能评估体系。'
    }
];

//嘉宾信息
let guests=[
    {
        name: 'angusdu',
        desc: '微信开放平台基础部开发中心总监，Web前端专家工程师',
        img: 'angusdu.jpg',
        qr: 'angusdu.png'
    },
    {
        name: 'zishunchen',
        desc: '腾讯云技术总监，Web前端专家工程师',
        img: 'zishunchen.jpg',
        qr: 'zishunchen.png'
    },
    {
        name: 'jetyu',
        desc: '腾讯SNG基础Web中心总监，AlloyTeam创始人，十年前端从业经历，JX框架作者，WebQQ主程， CodeTank、AlloyGameEngine、Alloy Stick、iPresst等项目主要负责人。',
        img: 'jetyu.jpg',
        qr: 'jetyu.png'
    },
    {
        name: 'sethchen',
        desc: '腾讯自选股技术总监',
        img: 'sethchen.jpg',
        qr: 'sethchen.png'
    },
    {
        name: 'twinliang',
        desc: '腾讯用研设计总监，专家UI工程师',
        img: 'twinliang.jpg',
        qr: 'twinliang.png'
    },
    {
        name: 'vicyao',
        desc: '腾讯技术总监',
        img: 'vicyao.jpg',
        qr: 'vicyao.png'
    },
    {
        name: 'kpxu',
        desc: '腾讯技术总监，Web前端专家工程师',
        img: 'kpxu.jpg',
        qr: 'kpxu.png'
    },
    {
        name: 'stonehuang',
        desc: '腾讯云技术专家，Web前端专家工程师',
        img: 'stonehuang.jpg',
        qr: 'stonehuang.png'
    },
    {
        name: 'tyan',
        desc: '腾讯国际业务部高级技术总监',
        img: 'tyan.png',
        qr: 'tyan.png'
    },
    {
        name: 'wellwinkwok',
        desc: '腾讯社区项目运营组高级总监',
        img: 'wellwinkwok.jpg',
        qr: 'wellwinkwok.png'
    },
    {
        name: 'brianlin',
        desc: '腾讯Web前端高级工程师',
        img: 'brianlin.jpg',
        qr: 'brianlin.png'
    },
    {
        name: 'herbertliu',
        desc: '腾讯Web前端高级工程师',
        img: 'herbertliu.jpg',
        qr: 'herbertliu.png'
    },
    {
        name: 'youkunhuang',
        desc: '腾讯Web前端高级工程师',
        img: 'youkunhuang.jpg',
        qr: 'youkunhuang.png'
    },
    {
        name: 'rehornchen',
        desc: '腾讯Web前端高级工程师',
        img: 'rehornchen.jpg',
        qr: 'rehornchen.png'
    },
    {
        name: 'liveliang',
        desc: '腾讯Web前端高级工程师',
        img: 'liveliang.jpg',
        qr: 'liveliang.png'
    },
    {
        name: 'rocmanzhao',
        desc: '腾讯Web前端高级工程师',
        img: 'rocmanzhao.jpg',
        qr: 'rocmanzhao.png'
    },
    {
        name: 'evanyuan',
        desc: '腾讯Web前端高级工程师',
        img: 'evanyuan.jpg',
        qr: 'evanyuan.png'
    },
    {
        name: 'willliang',
        desc: '腾讯Web前端高级工程师',
        img: 'willliang.png',
        qr: 'willliang.png'
    },
    {
        name: 'zhuoyingmo',
        desc: '腾讯Web前端高级工程师',
        img: 'zhuoyingmo.png',
        qr: 'zhuoyingmo.png'
    },
    {
        name: 'kexinwu',
        desc: '腾讯Web前端高级工程师',
        img: 'kexinwu.png',
        qr: 'kexinwu.png'
    },
    {
        name: 'camdyzeng',
        desc: '腾讯Web前端高级工程师',
        img: 'camdyzeng.jpg',
        qr: 'camdyzeng.png'
    },
    {
        name: 'jimyan',
        desc: '腾讯Web前端高级工程师',
        img: 'jimyan.png',
        qr: 'jimyan.png'
    },
    {
        name: 'henryguo',
        desc: '腾讯在线教育前端中心总监，IMWeb团队负责人',
        img: 'henryguo.jpg',
        qr: 'henryguo.png'
    },
    {
        name: '杨文坚',
        desc: '阿里巴巴技术专家，前IMWeb高级开发工程师',
        img: 'yangwenjian.jpg',
        qr: 'yangwenjian.png'
    },
    {
        name: '方应杭',
        desc: '饥人谷联合创始人，前IMWeb团队成员',
        img: 'fangfang.png',
        qr: 'fangfang.png'
    },
    {
        name: '张成文',
        desc: '著有书籍《现代前端技术解析》，前IMWeb团队成员',
        img: 'ouven.png',
        qr: 'ouven.png'
    },
    {
        name: '冉海俊',
        desc: '腾讯Web前端工程师，前IMWeb团队成员',
        img: 'ranhaijun.jpg',
        qr: 'ranhaijun.png'
    },
    {
        name: '李冬冬',
        desc: '前IMWeb团队成员',
        img: 'lidongdong.png',
        qr: 'lidongdong.png'
    },
    {
        name: '袁飞翔',
        desc: '前IMWeb团队成员',
        img: 'yuanfeixiang.png',
        qr: 'yuanfeixiang.png'
    },
    {
        name: '邓海龙',
        desc: '前IMWeb团队成员',
        img: 'denghailong.jpg',
        qr: 'denghailong.png'
    },
    {
        name: '杨宾生',
        desc: '前IMWeb团队成员',
        img: 'yangbingsheng.png',
        qr: 'yangbingsheng.png'
    },
    {
        name: '黄龙',
        desc: '前IMWeb团队成员',
        img: 'huanglong.jpg',
        qr: 'huanglong.png'
    },
    {
        name: '张颖',
        desc: '腾讯Web前端工程师，前IMWeb团队成员',
        img: 'zhangying.jpg',
        qr: 'zhangying.png'
    },
    {
        name: 'adamhe',
        desc: '腾讯Web前端工程师',
        img: 'adamhe.png',
        qr: 'adamhe.png'
    },
    {
        name: 'kevinyyang',
        desc: '腾讯Web前端高级工程师',
        img: 'kevinyyang.jpg',
        qr: 'kevinyyang.png'
    },
    {
        name: 'linkzhu',
        desc: '腾讯Web前端工程师',
        img: 'linkzhu.png',
        qr: 'linkzhu.png'
    },
    {
        name: 'kurtshen',
        desc: '腾讯Web前端工程师',
        img: 'kurtshen.png',
        qr: 'kurtshen.png'
    },
    {
        name: 'sampsonwang',
        desc: '腾讯Web前端工程师',
        img: 'sampsonwang.jpg',
        qr: 'sampsonwang.png'
    },
    {
        name: 'linjianghe',
        desc: '腾讯Web前端工程师',
        img: 'linjianghe.jpg',
        qr: 'linjianghe.png'
    },
    {
        name: 'weberpan',
        desc: '腾讯高级Web前端工程师',
        img: 'weberpan.jpg',
        qr: 'weberpan.png'
    },
    {
        name: '小倩',
        desc: 'Xiaoqian(aka Cindy) joined W3C at Beihang site in Oct 2013 and previously worked in this area for several companies such as Alibaba, Baidu and Apple.',
        img: 'xiaoqian.png',
        qr: 'xiaoqian.png'
    },
    {
        name: 'An Qi Li',
        desc: 'Site Manager of W3C/Beihang',
        img: 'anqili.png',
        qr: 'anqili.png'
    },
    {
        name: 'zbhuang',
        desc: 'IMWebConf2017赞助商',
        img: 'zbhuang.png',
        qr: 'zbhuang.png'
    }
];

let staffs=[
    {
        name: 'andy',
        desc: 'IMWeb团队成员，腾讯Web前端工程师',
        img: 'andyzlliu.png'
    },
    {
        name: 'aven',
        desc: 'IMWeb团队成员，腾讯Web前端高级工程师',
        img: 'avenwu.png'
    },
    {
        name: 'bleany',
        desc: 'IMWeb团队女神，腾讯Web前端高级工程师',
        img: 'bleanycao.jpg'
    },
    {
        name: 'blue',
        desc: 'IMWeb团队成员，腾讯Web前端工程师',
        img: 'bluecjiang.png'
    },
    {
        name: 'cover',
        desc: 'IMWeb团队成员，腾讯Web前端工程师',
        img: 'coverguo.jpg'
    },
    {
        name: 'daisy',
        desc: 'IMWeb团队女神，腾讯Web前端工程师',
        img: 'daisyhhuang.png'
    },
    {
        name: 'elvin',
        desc: 'IMWeb团队成员，腾讯Web前端工程师',
        img: 'elvinpeng.png'
    },
    {
        name: 'fred',
        desc: 'IMWeb团队成员，腾讯Web前端高级工程师',
        img: 'fredwu.png'
    },
    {
        name: 'hal',
        desc: 'IMWeb团队成员，腾讯Web前端工程师',
        img: 'halwu.jpg'
    },
    {
        name: 'henry',
        img: 'henryguo.jpg',
        desc: '腾讯在线教育前端中心总监，IMWeb团队负责人'
    },
    {
        name: 'jay',
        img: 'jayccchen.png',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'jero',
        img: 'jerojiang.jpg',
        desc: 'IMWeb团队成员，腾讯Web前端高级工程师'
    },
    {
        name: 'jery',
        img: 'jerytang.png',
        desc: 'IMWeb团队成员，腾讯Web前端高级工程师'
    },
    {
        name: 'json',
        img: 'jsonhuang.png',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'kevin',
        img: 'kevinkuang.jpg',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'kinka',
        img: 'kinkahuang.jpg',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'kris',
        img: 'krisluo.png',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'litten',
        img: 'littenli.jpg',
        desc: 'IMWeb团队成员，腾讯Web前端高级工程师'
    },
    {
        name: 'lizzy',
        img: 'lizzydeng.png',
        desc: 'IMWeb团队女神，腾讯Web前端工程师'
    },
    {
        name: 'moon',
        img: 'moonye.png',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'mox',
        img: 'moxhe.jpg',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'nix',
        img: 'nixzheng.png',
        desc: 'IMWeb团队成员，腾讯Web前端高级工程师'
    },
    {
        name: 'payton',
        img: 'paytonzhao.png',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'qlin',
        img: 'qlin.png',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'terrance',
        img: 'terrancewan.jpg',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'vien',
        img: 'vienwu.jpg',
        desc: 'IMWeb团队成员，腾讯Web前端高级工程师'
    },
    {
        name: 'went',
        img: 'wentliang.jpg',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'wsong',
        img: 'wsongzhang.png',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'yc',
        img: 'ycxu.png',
        desc: 'IMWeb团队成员，腾讯Web前端高级工程师'
    },
    {
        name: 'zard',
        img: 'zardliu.png',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'zzbo',
        img: 'zzbozheng.png',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'lqlong',
        img: 'lqlongli.png',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    },
    {
        name: 'shiji',
        img: 'shijisun.png',
        desc: 'IMWeb团队成员，腾讯Web前端工程师'
    }
];

//请勿修改此段代码，与构建相关
exports.guests=guests;