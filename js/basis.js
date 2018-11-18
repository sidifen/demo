!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),i=o(r),a=n(3),s=o(a);angular.module("bootstrap",[i.default,s.default])},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){return["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"].every(function(e){return navigator.userAgent.indexOf(e)<0})}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(2),s=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(){function e(){o(this,e)}return i(e,[{key:"extend",value:function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}}]),e}(),c=function(){function e(t){o(this,e);var n="ontouchend"in t.document,r=void 0;r={start:n?"touchstart":"mousedown",move:n?"touchmove":"mousemove",end:n?"touchend":"mouseup",wheel:"mousewheel"},this.event=r}return i(e,null,[{key:"$inject",get:function(){return["$window"]}}]),e}(),u=function(){function e(){o(this,e)}return i(e,[{key:"stop",value:function(e){document.querySelector("body").addEventListener(e.event.start,function(e){r()||!r()&&"A"==e.target.nodeName||e.preventDefault()})}}]),e}(),d=function(){function e(){o(this,e)}return i(e,[{key:"init",value:function(){var e=document.querySelectorAll(".dock-fill"),t=document.createElement("div");t.classList.add("-arrow"),e[0].appendChild(t)}},{key:"destroy",value:function(){var e=document.querySelector(".-arrow");e.parentNode.removeChild(e)}}]),e}();t.default=angular.module("appServices",[]).constant("resumeData",s.default).service("actionEvent",c).service("stopIosDropDown",u).service("dataExtend",l).service("initArrow",d).name},function(e,t){e.exports={cn:{header:{langList:["中","英"],titleList:[{svg:"img/d_home.svg",title:"首页"},{svg:"img/d_info.svg",title:"关于我"},{svg:"img/d_skills.svg",title:"技能栈"},{svg:"img/d_exp.svg",title:"经历"},{svg:"img/d_works.svg",title:"作品集"},{svg:"img/d_contact.svg",title:"联系我"}]},footer:{},default:{quote:"生活是一种绵延不绝的渴望，渴望不断上升，变得更伟大而高贵。",desList:["我叫赵柯宇","一名前端研发工程师","zhaoky2016@163.com"]},info:{title:"关于我",infoList:[{icon:"img/i_age.svg",key:"年龄",value:"26岁"},{icon:"img/i_edu.svg",key:"学历",value:"本科"},{icon:"img/i_site.svg",key:"坐标",value:"成都"},{icon:"img/i_status.svg",key:"状态",value:"在职"}],desList:["三年互联网经验,两年半全职前端开发经验","熟悉MV*开发,深谙自动化,模块化开发之道","高效的自学能力,具备独立分析解决问题能力","强烈的自我驱动力,代码强迫症患者"]},skill:{title:"技能栈",outCircleList:[{color:"rgba(121,100,102,0.8)",name:"gulp"},{color:"rgba(49,65,82,0.8)",name:"angular"},{color:"rgba(76,157,160,0.8)",name:"webpack"},{color:"rgba(66,66,66,0.8)",name:"less"},{color:"rgba(193,131,106,0.8)",name:"git"},{color:"rgba(117,148,179,0.8)",name:"nodejs"},{color:"rgba(71,83,94,0.8)",name:"cordova"},{color:"rgba(147,147,189,0.8)",name:"react"}],innerCircleList:[{color:"rgba(179,164,140,0.8)",name:"es6"},{color:"rgba(171,209,220,0.8)",name:"vue"},{color:"rgba(238,215,163,0.8)",name:"ng2"},{color:"rgba(207,184,178,0.8)",name:"fp"}],desList:["熟练使用angularJs1.x及各种类库的指令封装","常驻PC/APP/微信三平台前端研发","擅长组件/插件开发，能脱离库书写JS代码","编码常思其健壮性，扩展性，维护性"]},works:{title:"作品集",worksList:[{title:"web前端工程师简历（2015年版）",des:"本简历初版，上线一个月后，百度关键词“web前端工程师简历”排名前三，点击量数百万，深受广大前端初学者的好评及模仿，至今搜该关键词百度前10页都处处能见该简历的仿版。",url:"http://www.flqin.com/2015/"},{title:"移动校园APP",des:"一站式、全生命周期的校园官方移动服务平台，涵盖PC、安卓、IOS、微信平台，上线学校包括中央财经大学，北京交通大学，中国戏曲学院，辽宁大学，西南财经大学等等，下载量数十万，深受学生老师喜爱。",url:"http://app.cufe.edu.cn/"},{title:"移动校园管理系统",des:"针对校园APP的后台管理系统，包括人员架构，信息统计，权限设置，H5生产机，数据交换平台，各个模块的数据管理，反馈设置等等，为高校提供基于互联网运营的移动校园整体解决方案。",url:"http://www.app8848.com/cloud_mgr/#/user/login"},{title:"企业官网",des:"普通性的各类企业网站开发，兼容IE8+,适配全移动机型，具有良好的兼容性，扩展性。根据客户群体的习性进行详细分析策划，制定出一套适合企业自身的网站建设的设计风格方案。",url:"http://www.lantunet.com"}],viewMore:"github上面查看更多"},experience:{title:"经历",expList:[{title:"兰途网络科技有限公司",time:"2015年6月~至今",post:"web前端研发工程师",imgUrl:"img/e_js.svg",tech:"less gulp angular1.x cordova 原生js及若干类库",contentList:["负责快速构建高质量移动APP/PC/微信页面","根据业务需求设计合适的工程项目","高度组件化、模块化思维，拥有各平台调试能力","同期学习ES6及vue,react,ng2,体会函数式编程思想"]},{title:"卓煌企业管理有限公司",time:"2014年8月~2015年6月",post:"网页开发兼SEO优化",imgUrl:"img/e_html.svg",tech:"html5,css3,javascript,jquery,bootstrap等",contentList:["负责企业站静态页开发","负责网站后台维护","负责百度竞价操作及seo优化","同期工作之余提升自己原生JS的编码能力"]},{title:"壹零陆文化传播有限责任公司",time:"2014年3月~2014年8月",post:"SEO",imgUrl:"img/e_seo.svg",tech:"SEO,SEM,百度（360，搜狗）竞价、推广等",contentList:["负责网站后台维护，微博、微信等新媒体营销和推广","负责百度PPC后台调整","获得最佳新人奖","同期工作之余开始系统性的自学web前端各项技术"]}],des:"2014年初，放弃网络工程师职位，开始前端自学生涯。"},contact:{title:"联系我",desList1:["灵感","代码","梦想","未来"],desList2:["注重效率，偏爱敏捷开发","喜欢尝试，期待新鲜事物","前端即兴趣，兴趣即未来","行路有良友，便是捷径","带上我吧，一起看到更大的世界"],download:"下载简历",fileList:[{title:"HTML版",url:"www.baidu.com"},{title:"PDF版",url:"www.baidu.com"}],typeList:[{icon:"img/s_github.svg",url:"https://github.com/zhaoky"},{icon:"img/s_sf.svg",url:"https://segmentfault.com/u/keyu2016"},{icon:"img/s_blog.svg",url:""},{icon:"img/s_zh.svg",url:"https://www.zhihu.com/people/fezky"},{icon:"img/s_wb.svg",url:"http://weibo.com/zky2013"}]}},en:{header:{langList:["CN","EN"],titleList:[{svg:"img/d_home.svg",title:"home"},{svg:"img/d_info.svg",title:"about"},{svg:"img/d_skills.svg",title:"skills"},{svg:"img/d_exp.svg",title:"exp"},{svg:"img/d_works.svg",title:"works"},{svg:"img/d_contact.svg",title:"contact"}]},footer:{},default:{quote:"Life is a kind of endless yearning, eager to continue to rise, become more great and noble.",desList:["I am Zhao Keyu","A front-end R & D engineer","zhaoky2016@163.com"]},info:{title:"About Me",infoList:[{icon:"img/i_age.svg",key:"Age",value:"26"},{icon:"img/i_edu.svg",key:"Edu.",value:"B.S."},{icon:"img/i_site.svg",key:"Add.",value:"ChengDu"},{icon:"img/i_status.svg",key:"Status",value:"On Job"}],desList:["Three years of Internet experience, two and a half years full-time front-end development experience","Familiar with MV * development, well versed in automation, modular development of the road","Efficient self-learning ability, with independent analysis to solve problems","Strong self-driving force, the code OCD"]},skill:{title:"Skills",outCircleList:[{color:"rgba(121,100,102,0.8)",name:"gulp"},{color:"rgba(49,65,82,0.8)",name:"angular"},{color:"rgba(76,157,160,0.8)",name:"webpack"},{color:"rgba(66,66,66,0.8)",name:"less"},{color:"rgba(193,131,106,0.8)",name:"git"},{color:"rgba(117,148,179,0.8)",name:"nodejs"},{color:"rgba(71,83,94,0.8)",name:"cordova"},{color:"rgba(147,147,189,0.8)",name:"react"}],innerCircleList:[{color:"rgba(179,164,140,0.8)",name:"es6"},{color:"rgba(171,209,220,0.8)",name:"vue"},{color:"rgba(238,215,163,0.8)",name:"ng2"},{color:"rgba(207,184,178,0.8)",name:"fp"}],desList:["Skilled use of angularJs1.x and encapsulate all kinds of libraries","Permanent PC / APP / WeChat three platform front-end research and development","Good at component / plugin development, can be written out of the library to write JS code","Coding thinking robustness/scalability/maintainability"]},works:{title:"Works",worksList:[{title:"Web front engineer resumes (2015)",des:"The first edition of this resume, on the line a month later, Baidu keyword 'web front engineer resumes' ranked the top three, hundreds of millions of traffic, by the majority of front-end beginners praise and imitation, so far the search Baidu 10 pages are everywhere See the copy of the resume.",url:"http://www.flqin.com/2015/"},{title:"Campus APP",des:"One-stop, the whole life cycle of the campus official mobile service platform, covering PC, Andrews, IOS, WeChat platform, on-line schools, including CUFE, BJTU, NACTA, LNU, SWUFE and so on, download Hundreds of thousands, loved by the students teacher.",url:"http://app.cufe.edu.cn/"},{title:"campus management system",des:"According to the background management system of campus APP, including the personnel structure, information statistics, H5 production machine, data exchange platform, data management of each module, feedback settings, etc., for the university to provide Internet-based mobile campus overall solution.",url:"http://www.app8848.com/cloud_mgr/#/user/login"},{title:"Enterprise official website",des:"Ordinary enterprise website development, compatible with IE8 +, suitable for all mobile models, with good compatibility, scalability. According to the habits of customer groups for detailed analysis planning, to develop a set of corporate website for their own design style program.",url:"http://www.lantunet.com"}],viewMore:"Go github to see more"},experience:{title:"Experience",expList:[{title:"LANTU TECH",time:"2015.06~now",post:"Web front-end R & D engineers",imgUrl:"img/e_js.svg",tech:"less gulp angular1.x cordova javascript and some libraries",contentList:["Responsible for the rapid construction of high-quality APP / PC / WeChat page","According to business needs to design the appropriate project","Highly component, modular thinking, with the platform debugging capabilities","Learning ES6 and vue, react, ng2, experience the function of programming ideas"]},{title:"Zhuohuang Management Co., Ltd",time:"2014.08~2015.06",post:"Web development and SEO",imgUrl:"img/e_html.svg",tech:"html5,css3,javascript,jquery,bootstrap",contentList:["Responsible for enterprise station static page development","Responsible for website background maintenance","Responsible for Baidu bid operation and seo optimization","Outside of work to enhance their own javascript coding ability"]},{title:"106 Culture Co., Ltd.",time:"2014.03~2014.08",post:"SEO",imgUrl:"img/e_seo.svg",tech:"SEO,SEM,Baidu (360, Sogou) bid, promotion",contentList:["Responsible for site background maintenance, new media marketing and promotion","Responsible for Baidu PPC background adjustment","Get the best new person award","The same period of work began to self-learning web front-end technology"]}],des:"In early 2014, to abandon the network engineer position, began front self-study career."},contact:{title:"Contact Me",desList1:["INSPIRATION","CODE","DREAM","FUTURE"],desList2:["Focus on efficiency, preference for agile development","Like to try, look forward to something new","Front is interested, interest is the future","Line road friends, is a shortcut","With me, see the bigger world together"],download:"Download Resume",fileList:[{title:"HTML",url:"www.baidu.com"},{title:"PDF",url:"www.baidu.com"}],typeList:[{icon:"img/s_github.svg",url:"https://github.com/zhaoky"},{icon:"img/s_sf.svg",url:"https://segmentfault.com/u/keyu2016"},{icon:"img/s_blog.svg",url:""},{icon:"img/s_zh.svg",url:"https://www.zhihu.com/people/fezky"},{icon:"img/s_wb.svg",url:"http://weibo.com/zky2013"}]}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),a=o(i),s=n(5),l=o(s),c=n(6),u=o(c);t.default=angular.module("zkyResume",[a.default,l.default,u.default]).component("zkyResume",{templateUrl:"components/zkyResume/cmpt.html",controllerAs:"zr",controller:r}).name},function(e,t){"use strict";function n(e,t,n,o){var r=this;e.extend(r,t.cn.header),r.pageIndex=0,r.selectedLang=1,n.$on("switchLang",function(n,i){var a=2==Number(i)?t.en.header:t.cn.header;e.extend(r,a),o.$apply()})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=angular.module("rHeader",[]).component("resumeHeader",{templateUrl:"components/rHeader/cmpt.html",controller:n,bindings:{pageIndex:"="}}).directive("showNav",["actionEvent",function(e){function t(t,n){function o(){r.isShowNav=!r.isShowNav,t.$apply()}var r=t.$ctrl;n[0].addEventListener(e.event.start,o)}return{restrict:"A",link:t}}]).directive("switchLang",["actionEvent","$rootScope",function(e,t){function n(n,o){function r(e){"SPAN"===e.target.nodeName&&(i.selectedLang=Number(e.target.dataset.index)+1,n.$apply(),t.$broadcast("switchLang",i.selectedLang))}var i=n.$ctrl;o[0].addEventListener(e.event.start,r)}return{restrict:"A",link:n}}]).directive("selectedNavItem",["resumeData","actionEvent",function(e,t){function n(n,o){function r(t){"EM"==t.target.nodeName&&(+t.target.dataset.index!==i.pageIndex&&!e.moving&&(i.pageIndex=+t.target.dataset.index),i.isShowNav=!1,n.$apply())}var i=n.$ctrl;o[0].addEventListener(t.event.start,r)}return{restrict:"A",link:n}}]).name,n.$inject=["dataExtend","resumeData","$rootScope","$scope"]},function(e,t){"use strict";function n(){}Object.defineProperty(t,"__esModule",{value:!0}),t.default=angular.module("rFooter",[]).component("resumeFooter",{templateUrl:"components/rFooter/cmpt.html",controllerAs:"rf",controller:n}).name},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),i=o(r),a=n(8),s=o(a),l=n(9),c=o(l),u=n(10),d=o(u),m=n(11),p=o(m),g=n(12),f=o(g);t.default=angular.module("rMain",[i.default,s.default,c.default,d.default,p.default,f.default]).directive("resumeMain",["initArrow","stopIosDropDown","$timeout","resumeData","actionEvent",function(e,t,n,o,r){function i(i,a){function s(e,t){var n=new Date;return function(){var o=new Date;o-n>t&&e.apply(void 0,arguments),n=o}}function l(e){w||e.wheelDelta<0&&b==E-1||e.wheelDelta>0&&0==b||(e.wheelDelta<0?b++:b--,g(b))}function c(e){w||"touchstart"!=e.type||(y=e.changedTouches[0].pageY,a[0].addEventListener(r.event.move,u))}function u(e){w||(L=e.changedTouches[0].pageY-y)<0&&b==E-1||L>0&&0==b||(f(),a[0].addEventListener(r.event.end,d))}function d(){w||(Math.abs(L)<100?p():g(k))}function m(){w=!1,o.moving=w,v(),a[0].removeEventListener("touchmove",u),a[0].removeEventListener("touchend",d)}function p(){var e=a[0].querySelectorAll(".page-section");e[k].style.transform="",e[k].style.transition="transform 0.5s",e[L<0?k-1:k+1].style.transform="",e[L<0?k-1:k+1].style.transition="transform 0.5s",e[k].addEventListener("webkitTransitionEnd",m)}function g(e){i.$apply(function(){i.pageIndex=e})}function f(){var e=a[0].querySelectorAll(".page-section");k=L<0?b+1:b-1,e[k].classList.add("touch-page"),e[k].style.transform=L<0?"translateY("+(a[0].offsetHeight+L)+"px)":"translateY("+(-a[0].offsetHeight+L)+"px)",e[L<0?k-1:k+1].style.transform="translateY("+L+"px)"}function v(){var e=a[0].querySelectorAll(".page-section");e=Array.prototype.slice.call(e),e.forEach(function(e,t){e.classList.remove("prev-page","active","next-page","cur-page","touch-page"),e.style.transform="",e.style.transition="",0!==b&&t==b-1&&e.classList.add("prev-page"),t==b&&e.classList.add("cur-page"),b!==E-1&&t==b+1&&e.classList.add("next-page"),e.removeEventListener("webkitTransitionEnd",m)}),a[0].querySelectorAll(".-arrow")[0].style.display=b==E-1?"none":"block"}function h(){console.log("Hi! 朋友，感谢您愿意调试简历代码。\n本简历采用ES6,angularJS 1.x,gulp,less,webpack开发构建。\n源码已开源在（https://github.com/zhaoky/flqin),喜欢请点个star吧！ \n如果您有什么建议或者想学习前端，欢迎您加入我们,我们互相学习，共同进步^_^ \n%c QQ小群(http://t.cn/RtlQbTq)","color: red")}var b=0,w=void 0,y=void 0,L=void 0,k=void 0,x=a[0].querySelectorAll(".page-section"),E=x.length;!function(){a[0].classList.add("dock-fill"),x[0].classList.add("cur-page"),x[b+1].classList.add("next-page"),e.init(),t.stop(r),h(),a[0].addEventListener(r.event.start,c),a[0].addEventListener("mousewheel",s(l,100))}(),i.$watch("pageIndex",function(e,t){var r=a[0].querySelectorAll(".page-section");if(!w&&void 0!==e){var i=+e;if(w=void 0!==t,o.moving=w,Math.abs(i-t)>1){new Promise(function(e){r[i].style.display="block",r[i].style.transform=i>t?"translateY(100%)":"translateY(-100%)",n(function(){e()},200)}).then(function(){r[i].classList.add("active"),r[i].style.display="",void 0!==t&&(r[t].style.transform=i>t?"translateY(-100%)":"translateY(100%)",r[t].style.transition="transform 0.5s")})}else 1==Math.abs(i-t)&&(r[i].classList.add("active"),void 0!==t&&(r[t].style.transform=i>t?"translateY(-100%)":"translateY(100%)",r[t].style.transition="transform 0.5s"));b=i,r[i].addEventListener("webkitTransitionEnd",m)}}),i.$on("$destroy",function(){e.destroy(),a[0].removeEventListener("touchstart",c),a[0].removeEventListener("mousewheel",l)})}return{restrict:"E",link:i,template:"<div ng-transclude></div>",transclude:!0,replace:!0,scope:{pageIndex:"="}}}]).name},function(e,t){"use strict";function n(e,t,n,o){var r=this;e.extend(r,t.cn.contact),n.$on("switchLang",function(n,i){var a=2==Number(i)?t.en.contact:t.cn.contact;r.isEng=2==Number(i),e.extend(r,a),o.$apply()})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=angular.module("rContact",[]).component("resumeContact",{templateUrl:"components/_rContact/cmpt.html",controller:n}).name,n.$inject=["dataExtend","resumeData","$rootScope","$scope"]},function(e,t){"use strict";function n(e,t,n,o){var r=this;e.extend(r,t.cn.default),n.$on("switchLang",function(n,i){var a=2==Number(i)?t.en.default:t.cn.default;e.extend(r,a),o.$apply()})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=angular.module("rDefault",[]).component("resumeDefault",{templateUrl:"components/_rDefault/cmpt.html",controller:n}).name,n.$inject=["dataExtend","resumeData","$rootScope","$scope"]},function(e,t){"use strict";function n(e,t,n,o){var r=this;e.extend(r,t.cn.works),n.$on("switchLang",function(n,i){var a=2==Number(i)?t.en.works:t.cn.works;r.isEng=2==Number(i),e.extend(r,a),o.$apply()})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=angular.module("rWorks",[]).component("resumeWorks",{templateUrl:"components/_rWorks/cmpt.html",controller:n}).directive("switchWork",["actionEvent",function(e){function t(t,n,o){function r(e){"I"===e.target.nodeName&&(a+="-left"==e.target.className?90:-90,i.style.transform="rotateY("+a+"deg)")}var i=document.body.querySelector(".-work-list"),a=0;n[0].addEventListener(e.event.start,r)}return{link:t}}]).name,n.$inject=["dataExtend","resumeData","$rootScope","$scope"]},function(e,t){"use strict";function n(e,t,n,o){var r=this;e.extend(r,t.cn.experience),r.curIndex=0,r.exp=r.expList[r.curIndex],n.$on("switchLang",function(n,i){var a=2==Number(i)?t.en.experience:t.cn.experience;r.isEng=2==Number(i),e.extend(r,a),r.exp=r.expList[0],o.$apply()})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=angular.module("rExperience",[]).component("resumeExperience",{templateUrl:"components/_rExperience/cmpt.html",controller:n,bindings:{pageIndex:"<"}}).directive("touchThreeD",["$window","actionEvent",function(e,t){function n(n,o){function r(e){var t=e.pageX,n=e.pageY,r=t-c-s/2,i=l/2-n+u+140;o[0].style.transform="rotateY("+r/50+"deg) rotateX("+i/50+"deg)"}function i(e){o[0].style.transform="rotateY(0deg) rotateX(0deg)"}function a(){c=o[0].offsetLeft,u=o[0].offsetTop}var s=void 0,l=void 0,c=void 0,u=void 0;n.$watch("$parent.$parent.pageIndex",function(e){3===Number(e)&&(s=o[0].offsetWidth,l=o[0].offsetHeight,c=o[0].offsetLeft,u=o[0].offsetTop)}),o[0].addEventListener(t.event.move,r),o[0].addEventListener("mouseout",i),e.onresize=a}return{restrict:"A",link:n}}]).directive("switchExp",["actionEvent",function(e){function t(t,n){function o(e){"LI"==e.target.nodeName&&e.target.dataset.index!==i.curIndex&&(i.curIndex=e.target.dataset.index,a.style.opacity="0",a.addEventListener("webkitTransitionEnd",r))}function r(){a.style.opacity="1",t.$apply(function(){i.exp=i.expList[i.curIndex]}),a.removeEventListener("webkitTransitionEnd",r)}var i=t.$ctrl,a=document.body.querySelectorAll(".-experience-content")[0];i.cutList=new Array(3),n[0].addEventListener(e.event.start,o)}return{link:t}}]).name,n.$inject=["dataExtend","resumeData","$rootScope","$scope"]},function(e,t){"use strict";function n(e,t,n,o){var r=this;e.extend(r,t.cn.info),n.$on("switchLang",function(n,i){var a=2==Number(i)?t.en.info:t.cn.info;r.isEng=2==Number(i),e.extend(r,a),o.$apply()})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=angular.module("rInfo",[]).component("resumeInfo",{templateUrl:"components/_rInfo/cmpt.html",controller:n}).name,n.$inject=["dataExtend","resumeData","$rootScope","$scope"]},function(e,t){"use strict";function n(e,t,n,o){var r=this;e.extend(r,t.cn.skill),n.$on("switchLang",function(n,i){var a=2==Number(i)?t.en.skill:t.cn.skill;r.isEng=2==Number(i),e.extend(r,a),o.$apply()})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=angular.module("rSkill",[]).component("resumeSkill",{templateUrl:"components/_rSkill/cmpt.html",controller:n}).name,n.$inject=["dataExtend","resumeData","$rootScope","$scope"]}]);