webpackJsonp([1],{"36Im":function(t,i){},"4RZZ":function(t,i){},BVzG:function(t,i){},DsGW:function(t,i){},Ffyk:function(t,i){},I6z6:function(t,i){},MXM7:function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("7+uW"),a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"app-container"},[s("header",{staticClass:"mui-bar mui-bar-nav"},[s("a",{staticClass:"mui-icon mui-action-menu mui-icon-bars mui-pull-left",attrs:{id:"sideBar-indicator",href:"javascript:;"},on:{click:t.sideBarbtn}}),t._v(" "),s("a",{staticClass:"mui-action-back mui-btn mui-btn-link mui-pull-right",on:{click:t.back}},[s("span",{staticClass:"mui-icon mui-icon-forward"})]),t._v(" "),s("h1",{staticClass:"mui-title"},[t._v("TIANYU")])]),t._v(" "),s("div",{class:{move:!t.isT,movere:t.isT},attrs:{id:"sidebar"}},[t._m(0),t._v(" "),s("div",{staticClass:"sidebtn"},[s("router-link",{staticClass:"sidebar-icon sidebar-8",attrs:{to:"/"}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-9",attrs:{to:"list"}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-10",attrs:{to:"detail?did=1"}}),t._v(" "),s("a",{staticClass:"close-sidebar sidebar-icon sidebar-11",attrs:{href:""},on:{click:t.sideBarbtn}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-12",attrs:{to:"set"}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-13",attrs:{to:"about"}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-14",attrs:{to:"login"}})],1),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"sidebtn"},[s("router-link",{staticClass:"sidebar-icon sidebar-8",attrs:{to:"study?tid=1"}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-9",attrs:{to:"list"}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-10",attrs:{to:"detail?did=1"}}),t._v(" "),s("a",{staticClass:"close-sidebar sidebar-icon sidebar-11",attrs:{href:""},on:{click:t.sideBarbtn}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-12",attrs:{to:""}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-13",attrs:{to:"study?tid=1"}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-14",attrs:{to:"login"}})],1),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),t.isRouterAlive?s("router-view"):t._e(),t._v(" "),s("nav",{staticClass:"mui-bar mui-bar-tab"},[s("router-link",{staticClass:"mui-tab-item mui-active",attrs:{to:"home"}},[s("span",{staticClass:"mui-icon mui-icon-home"}),t._v(" "),s("span",{staticClass:"mui-tab-label"},[t._v("首页")])]),t._v(" "),s("router-link",{staticClass:"mui-tab-item",attrs:{to:"service"}},[s("span",{staticClass:"mui-icon-extra mui-icon-extra-find"}),t._v(" "),s("span",{staticClass:"mui-tab-label"},[t._v("发现")])]),t._v(" "),s("router-link",{staticClass:"mui-tab-item",attrs:{to:"center"}},[s("span",{staticClass:"mui-icon mui-icon-contact"}),t._v(" "),s("span",{staticClass:"mui-tab-label"},[t._v("个人中心")])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("p",{staticStyle:{"margin-left":"0","margin-top":"10px"}},[this._v("导航")]),this._v(" "),i("div",{staticClass:"line"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{"margin-top":"20px"}},[i("p",{staticClass:"line",staticStyle:{"margin-bottom":"8px"}}),this._v(" "),i("p",[this._v("联系")]),this._v(" "),i("div",{staticClass:"line"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{"margin-top":"20px"}},[i("p",{staticClass:"line",staticStyle:{"margin-bottom":"8px"}}),this._v(" "),i("p",[this._v("页面更新")]),this._v(" "),i("div",{staticClass:"line"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"tztitle"},[i("ul",[i("li",[i("h5",[this._v("通知标题")]),this._v(" "),i("p",[this._v("\n                          我们没有必要压抑自己，更没有必要去奉承巴结，保持我们应有的人格，才会赢得更多的尊重。\n                        ")])]),this._v(" "),i("li",[i("h5",[this._v("通知标题")]),this._v(" "),i("p",[this._v("\n                          我们没有必要压抑自己，更没有必要去奉承巴结，保持我们应有的人格，才会赢得更多的尊重。\n                        ")])])])])}]};var n=s("VU/8")({provide:function(){return{reload:this.reload}},data:function(){return{isT:!0,isRouterAlive:!0}},methods:{reload:function(){this.isRouterAlive=!1,this.$nextTick(function(){this.isRouterAlive=!0})},back:function(){this.$router.go(-1)},sideBarbtn:function(){this.isT?this.isT=!1:0==this.isT&&(this.isT=!0)}}},a,!1,function(t){s("f239")},null,null).exports,r=s("/ocq"),o=s("Au9i"),l={data:function(){return{isT:!0,lunboimg:[],twolist:[],threelist:[],fourlist:[],i:0,startX:0,startY:0,startClientX:0,zt:0,seavalue:"",isV:!0}},created:function(){this.lunbo(),this.twofl(),this.threefl(),this.fourfl()},mounted:function(){this.animation()},methods:{animation:function(){var t=this.$refs.animg;this.anim(t,400,0)},sideBarbtn:function(){this.isT?this.isT=!1:0==this.isT&&(this.isT=!0)},lunbo:function(){var t=this;this.axios.get("indexlunbo").then(function(i){t.lunboimg=i.data})},sear:function(){var t=this,i=this.$refs.search;if(this.isV)i.style.top="7%",this.isV=!1;else if(!this.isV){if(i.style.top="-7%",""==this.seavalue)Object(o.Toast)("查询条件为空");else var s=this.qs.stringify({title:this.seavalue});this.axios.post("insearch",s).then(function(i){if(0==i.data.code)Object(o.Toast)("对不起,没有查到相关信息"),t.seavalue="";else if(1==i.data.code){var s=i.data.data[0].did;t.$router.push({path:"detail",query:{did:""+s}})}}),this.seavalue="",this.isV=!0}},twofl:function(){var t=this;this.axios.get("indextwofl").then(function(i){t.twolist=i.data})},threefl:function(){var t=this;this.axios.get("indexthreefl").then(function(i){t.threelist=i.data})},fourfl:function(){var t=this;this.axios.get("indexfourfl").then(function(i){t.fourlist=i.data})},touchstart:function(t){t.preventDefault(),this.startClientX=t.touches[0].clientX,this.startX=t.changedTouches[0].pageX,this.startY=t.changedTouches[0].pageY},move:function(t){var i=t.path[3];this.zt+=t.changedTouches[0].clientX-this.startClientX,this.zt<-7537&&(this.zt=-7537),this.zt>0&&(this.zt=0),i.style.left=this.zt/12+"px"},touchend:function(t){}}},c={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"app-home"},[s("header",{staticClass:"mui-bar mui-bar-nav"},[s("a",{staticClass:"mui-icon mui-action-menu mui-icon-bars mui-pull-left",attrs:{id:"sideBar-indicator",href:"javascript:;"},on:{click:t.sideBarbtn}}),t._v(" "),s("a",{staticClass:"mui-action-back mui-btn mui-btn-link mui-pull-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.seavalue,expression:"seavalue"}],ref:"search",staticClass:"search",attrs:{id:"in-search",placeholder:"请输入关键词",type:"text"},domProps:{value:t.seavalue},on:{input:function(i){i.target.composing||(t.seavalue=i.target.value)}}}),t._v(" "),s("span",{staticClass:"mui-icon mui-icon-search",on:{click:t.sear}})]),t._v(" "),s("h1",{staticClass:"mui-title"},[t._v("TIANYU")])]),t._v(" "),s("div",{class:{move:!t.isT,movere:t.isT},attrs:{id:"sidebar"}},[t._m(0),t._v(" "),s("div",{staticClass:"sidebtn"},[s("router-link",{staticClass:"sidebar-icon sidebar-8",attrs:{to:""}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-9",attrs:{to:"list"}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-10",attrs:{to:"detail?did=1"}}),t._v(" "),s("a",{staticClass:"close-sidebar sidebar-icon sidebar-11",on:{click:t.sideBarbtn}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-12",attrs:{to:"set"}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-13",attrs:{to:"about"}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-14",attrs:{to:"login"}})],1),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"sidebtn"},[s("router-link",{staticClass:"sidebar-icon sidebar-8",attrs:{to:""}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-9",attrs:{to:""}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-10",attrs:{to:""}}),t._v(" "),s("a",{staticClass:"close-sidebar sidebar-icon sidebar-11",attrs:{to:""},on:{click:t.sideBarbtn}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-12",attrs:{to:""}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-13",attrs:{to:""}}),t._v(" "),s("router-link",{staticClass:"sidebar-icon sidebar-14",attrs:{to:""}})],1),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),s("div",{staticClass:"indexcon"},[s("mt-swipe",t._l(t.lunboimg,function(t,i){return s("mt-swipe-item",{key:i},[s("img",{attrs:{src:t.img_url,alt:""}})])}),1)],1),t._v(" "),s("div",{staticClass:"onefloor"},[s("div",[s("router-link",{attrs:{to:"list"}},[s("span",{staticClass:"mui-icon-extra mui-icon-extra-class"}),t._v(" "),s("p",[t._v("文艺珍品")])])],1),t._v(" "),s("div",[s("router-link",{attrs:{to:"artist"}},[s("span",{staticClass:"mui-icon mui-icon-starhalf"}),t._v(" "),s("p",[t._v("艺术大家")])])],1),t._v(" "),s("div",[s("router-link",{attrs:{to:"detail?did=1"}},[s("span",{staticClass:"mui-icon-extra mui-icon-extra-dictionary"}),t._v(" "),s("p",[t._v("在线展览")])])],1),t._v(" "),s("div",[s("router-link",{attrs:{to:"study?tid=1"}},[s("span",{staticClass:"mui-icon-extra mui-icon-extra-hotel"}),t._v(" "),s("p",[t._v("艺术演讲")])])],1)]),t._v(" "),s("div",{attrs:{id:"twofloor"}},[t._m(4),t._v(" "),s("div",{staticClass:"twocont"},t._l(t.twolist,function(i){return s("div",{staticClass:"twodel"},[s("img",{attrs:{src:i.img_url,alt:""}}),t._v(" "),s("p",[s("router-link",{attrs:{to:i.href}},[t._v(t._s(i.wname))])],1),t._v(" "),s("p",[t._v(t._s(i.attr))])])}),0)]),t._v(" "),s("div",{attrs:{id:"threefl"}},[s("div",[s("img",{ref:"animg",attrs:{src:"index/three1.png",alt:""}})]),t._v(" "),t._m(5),t._v(" "),s("div",{staticClass:"threecont"},t._l(t.threelist,function(i){return s("div",{staticClass:"threetit"},[s("h5",[t._v(t._s(i.rname))]),t._v(" "),s("p",[t._v(t._s(i.subtit))])])}),0)]),t._v(" "),s("div",{attrs:{id:"fourfl"}},[s("div",[s("ul",{staticStyle:{position:"relative"},on:{touchstart:t.touchstart,touchmove:t.move,touchend:t.touchend}},t._l(t.fourlist,function(t){return s("li",[s("router-link",{attrs:{to:""}},[s("img",{attrs:{src:t.img_url,alt:""}})])],1)}),0)])]),t._v(" "),s("div",{attrs:{id:"footer"}},[s("p",[s("span",{staticClass:"ellipsis"},[t._v("COPYRIGHT (©) 2018  艺术品展览类模板.")]),t._v(" "),s("router-link",{staticClass:"beian",staticStyle:{display:"inline",width:"auto",color:"#8e8e8e"},attrs:{to:"javascript:;",target:"_blank"}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("p",{staticStyle:{"margin-left":"0","margin-top":"10px"}},[this._v("导航")]),this._v(" "),i("div",{staticClass:"line"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{"margin-top":"20px"}},[i("p",{staticClass:"line",staticStyle:{"margin-bottom":"8px"}}),this._v(" "),i("p",[this._v("联系")]),this._v(" "),i("div",{staticClass:"line"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{"margin-top":"20px"}},[i("p",{staticClass:"line",staticStyle:{"margin-bottom":"8px"}}),this._v(" "),i("p",[this._v("页面更新")]),this._v(" "),i("div",{staticClass:"line"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"tztitle"},[i("ul",[i("li",[i("h5",[this._v("通知标题")]),this._v(" "),i("p",[this._v("\n                          我们没有必要压抑自己，更没有必要去奉承巴结，保持我们应有的人格，才会赢得更多的尊重。\n                        ")])]),this._v(" "),i("li",[i("h5",[this._v("通知标题")]),this._v(" "),i("p",[this._v("\n                          我们没有必要压抑自己，更没有必要去奉承巴结，保持我们应有的人格，才会赢得更多的尊重。\n                        ")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"textale"},[i("p",[this._v("馆藏精选")]),this._v(" "),i("p",[this._v("Selected Collection")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("h5",[this._v("交流服务")]),this._v(" "),i("p",[this._v("Artist")])])}]};var u=s("VU/8")(l,c,!1,function(t){s("I6z6")},null,null).exports,v={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"app-home",attrs:{id:"container"}},[s("div",[s("mt-swipe",t._l(t.lunboimg,function(t,i){return s("mt-swipe-item",{key:i},[s("img",{attrs:{src:t.img_url,alt:""}})])}),1)],1),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"nav"},[s("h3",[t._v("精美艺术")]),t._v(" "),s("p",{staticClass:"line"}),t._v(" "),s("ul",{staticClass:"navdh",on:{click:t.cmove}},t._l(t.fenlei,function(i,e){return s("li",{class:{active:t.currentIndex===e},on:{click:function(i){return t.changeIndex(e)}}},[t._v(t._s(i))])}),0),t._v(" "),s("p",{staticClass:"line"})]),t._v(" "),s("div",{staticClass:"class-cont"},[s("div",{ref:"ccon",attrs:{id:"ccon"}},[s("ul",{staticClass:"one-cont"},t._l(t.trealist1,function(i){return s("li",[s("img",{attrs:{src:i.img_url,alt:""}}),t._v(" "),s("h5",[t._v(t._s(i.ltitle))]),t._v(" "),s("p",[t._v(t._s(i.subtitle))]),t._v(" "),s("router-link",{attrs:{to:i.href}},[t._v("查看详情")])],1)}),0),t._v(" "),s("ul",{staticClass:"one-cont"},t._l(t.trealist2,function(i){return s("li",[s("img",{attrs:{src:i.img_url,alt:""}}),t._v(" "),s("h5",[t._v(t._s(i.ltitle))]),t._v(" "),s("p",[t._v(t._s(i.subtitle))]),t._v(" "),s("router-link",{attrs:{to:i.href}},[t._v("查看详情")])],1)}),0),t._v(" "),s("ul",{staticClass:"one-cont"},t._l(t.trealist3,function(i){return s("li",[s("img",{attrs:{src:i.img_url,alt:""}}),t._v(" "),s("h5",[t._v(t._s(i.ltitle))]),t._v(" "),s("p",[t._v(t._s(i.subtitle))]),t._v(" "),s("router-link",{attrs:{to:i.href}},[t._v("查看详情")])],1)}),0)])]),t._v(" "),s("div",{attrs:{id:"author_news"}},[s("h3",[t._v("知名画家")]),t._v(" "),s("p",{staticClass:"line1"}),t._v(" "),s("ul",{ref:"author_det",staticClass:"author_det",attrs:{id:"author_det"}},t._l(t.authorlist,function(i){return s("li",[s("router-link",{attrs:{to:i.href}},[s("p",[s("span",[t._v(t._s(i.title))])]),t._v(" "),s("p",[t._v("---- 林曦")]),t._v(" "),s("img",{attrs:{src:i.img_url,alt:""}})])],1)}),0),t._v(" "),s("div",{staticClass:"author_indicator"},[s("span",{staticClass:"mui-icon mui-icon-back",on:{click:t.authorbtn1}}),t._v(" "),s("span",{staticClass:"mui-icon mui-icon-forward",on:{click:t.authorbtn}})])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"ty_news"}},[i("h3",[this._v("关于美术馆")]),this._v(" "),i("p",{staticClass:"line1"}),this._v(" "),i("p",[this._v("\n            天宇美术馆位于***,始建于1988年，是以收藏、研究、展示中国近现代艺术家作品为重点的造型艺术博物馆,中国美术馆收藏有近现代美术作品和民间美术作品10万余件，除收藏、保管、陈列、研究中国近现代优秀美术作品和民间美术作品外，该馆还担负着主办各种类型的中外美术作品展览，进行国内外美术学术交流，建立中国近现代美术史料、艺术档案，编辑出版藏品画集、理论文集等任务。 \n            欢迎您参观天宇美术馆，我馆的所有展览免费向公众开放，您可在参观当日凭有效证件入馆参观或提前一天预约参观。\n        ")])])}]};var d=s("VU/8")({data:function(){return{isT:!0,lunboimg:[],trealist1:[],trealist2:[],trealist3:[],authorlist:[],fenlei:["油画","写实画","水墨画"],currentIndex:0,tr:0,pno:0,pageSize:6}},created:function(){this.lunbod(),this.trea(),this.author()},methods:{lunbod:function(){var t=this;this.axios.get("indexlunbo").then(function(i){t.lunboimg=i.data})},trea:function(){var t=this;this.axios.get("list").then(function(i){for(var s=0;s<6;s++)t.trealist1.push(i.data.data[s]);for(s=6;s<12;s++)t.trealist2.push(i.data.data[s]);for(s=12;s<18;s++)t.trealist3.push(i.data.data[s])})},author:function(){var t=this;this.axios.get("listpage2").then(function(i){t.authorlist=i.data.data})},cmove:function(t){var i=this.$refs.ccon,s=t.target.innerHTML;i.getAttribute("class"),s==this.fenlei[0]?i.style.webkitTransform="translateX(-0%)":s==this.fenlei[1]?i.style.webkitTransform="translateX(-33%)":i.style.webkitTransform="translateX(-66%)"},changeIndex:function(t){this.currentIndex=t},authorbtn:function(){this.tr-=25,this.tr<-75&&(this.tr=-75),this.$refs.author_det.style.webkitTransform="translateX("+this.tr+"%)"},authorbtn1:function(){this.tr+=25,this.tr>0&&(this.tr=0),this.$refs.author_det.style.webkitTransform="translateX("+this.tr+"%)"}}},v,!1,function(t){s("4RZZ")},null,null).exports,_={data:function(){return{worklist:["展览信息","评论"],currentIndex:0,detlist:[],commlist:[],did:0}},created:function(){this.bigdata(),this.commdata()},methods:{bigdata:function(){var t=this;this.did=document.URL.split("=")[1];var i="detail/?did="+this.did;this.axios.get(i).then(function(i){t.detlist=i.data.data[0]})},commdata:function(){var t=this;this.axios.get("comm").then(function(i){t.commlist=i.data,t.commlist=t.commlist.reverse()})},changeIndex:function(t){this.currentIndex=t},add_concern:function(){var t=this.qs.stringify({chinesename:this.detlist.chinesename,material:this.detlist.material,author:this.detlist.author,type:this.detlist.type,size:this.detlist.size,creattime:this.detlist.creattime,positnews:this.detlist.positnews,exhibition:this.detlist.Exhibition});this.axios.post("addconcern",t).then(function(t){1==t.data.code&&Object(o.Toast)("添加成功")})},remove:function(t){var i=t.target.innerHTML,s=this.$refs.exhibition,e=this.$refs.exhibition_comments;"展览信息"==i?(s.style.webkitTransform="translateX(0%)",e.style.display="none"):"评论"==i&&(s.style.webkitTransform="translateX(-50%)",e.style.display="block")},submit_comm:function(){var t=this,i=this.$refs.cont_comm.value;if("true"==sessionStorage.getItem("isLogin")){var s=sessionStorage.getItem("uPhoneq");if(""==i)Object(o.Toast)("评论不能为空");else{var e=this.qs.stringify({img_url:"detail/touxiang.png",nickname:s,commcont:i});this.axios.post("subcomm",e).then(function(i){1==i.data.code&&(t.commdata(),Object(o.Toast)("提交成功"))})}}else Object(o.Toast)("对不起,未登录不能评论")},cancel_comm:function(){this.$refs.cont_comm.value=""}}},h={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{attrs:{id:"deta"}},[s("div",[s("img",{attrs:{src:t.detlist.img_url,alt:""}})]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.detlist.dname))]),t._v(" "),s("p",[t._v(" "+t._s(t.detlist.material))]),t._v(" "),s("p",[t._v("\n                 艺术家:     "),s("span",[t._v(t._s(t.detlist.author))]),t._v("\n                 / 材料:     "),s("span",[t._v(t._s(t.detlist.type))]),t._v("\n                 / 尺寸:     "),s("span",[t._v(t._s(t.detlist.size)+" ")]),t._v("  \n                 / 创作时间: "),s("span",[t._v(t._s(t.detlist.creattime))])]),t._v(" "),s("p",[t._v("\n                "+t._s(t.detlist.title)+"\n            ")]),t._v(" "),s("p",[t._v("\n                "+t._s(t.detlist.englishtitle)+"\n            ")])]),t._v(" "),s("div",{attrs:{id:"works_news"}},[s("div",{staticClass:"de_nav"},[s("h4",[t._v("作品相关")]),t._v(" "),s("p",{staticClass:"line"}),t._v(" "),s("ul",{staticClass:"works_ul",on:{click:t.remove}},t._l(t.worklist,function(i,e){return s("li",{class:{active:t.currentIndex===e},on:{click:function(i){return t.changeIndex(e)}}},[t._v(t._s(i))])}),0),t._v(" "),s("p",{staticClass:"line"})]),t._v(" "),s("div",{ref:"exhibition",attrs:{id:"exhibition"}},[s("ul",{ref:"exhibition_info",staticClass:"exhibition_info"},[s("li",[s("p",[s("span",[s("b",[t._v("作品名称:")]),t._v(" "+t._s(t.detlist.chinesename))]),t._v(" "),s("span",[s("b",[t._v("材       质:")]),t._v("  "+t._s(t.detlist.material))])]),t._v(" "),s("p",[s("span",[s("b",[t._v("作       者:")]),t._v("  "+t._s(t.detlist.author))]),t._v(" "),s("span",[s("b",[t._v("材       料:")]),t._v("  "+t._s(t.detlist.type))])]),t._v(" "),s("p",[s("span",[s("b",[t._v("尺       寸:")]),t._v(t._s(t.detlist.size))]),t._v(" "),s("span",[s("b",[t._v("创作时间:")]),t._v(t._s(t.detlist.creattime))])]),t._v(" "),s("div",[s("span",[s("b",[t._v("位置信息:")]),t._v(t._s(t.detlist.positnews)+" ")]),t._v(" "),s("p",[s("b",[t._v("展览信息:")]),t._v(t._s(t.detlist.Exhibition))])]),t._v(" "),s("div",[s("button",{on:{click:t.add_concern}},[t._v("添加关注")])])])]),t._v(" "),s("ul",{ref:"exhibition_comments",staticClass:"exhibition_comments"},[s("li",[s("textarea",{ref:"cont_comm",staticStyle:{"font-size":"14px"},attrs:{name:"cont_comm",id:"cont_comm",cols:"30",rows:"4"}}),t._v(" "),s("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined",attrs:{type:"button"},on:{click:t.submit_comm}},[t._v("\n\t\t\t\t\t        提交评论\n\t\t\t\t        ")]),t._v(" "),s("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined",attrs:{type:"button"},on:{click:t.cancel_comm}},[t._v("\n\t\t\t\t        \t取消评论\n\t\t\t\t        ")])]),t._v(" "),t._l(t.commlist,function(i){return s("li",[s("img",{attrs:{src:i.img_url,alt:""}}),t._v(" "),s("img",{attrs:{src:"detail/tx.png",alt:""}}),t._v(" "),s("div",{staticClass:"mui-card"},[s("div",{staticClass:"mui-card-header"},[t._v(t._s(i.nickname))]),t._v(" "),s("div",{staticClass:"mui-card-content"},[s("div",{staticClass:"mui-card-content-inner"},[t._v("\n                                    "+t._s(i.commcont)+"\n\t\t\t\t\t         ")])])])])})],2)])])])},staticRenderFns:[]};var m=s("VU/8")(_,h,!1,function(t){s("MXM7")},null,null).exports,p={inject:["reload"],data:function(){return{datalist:[],pno:1,tstart:0,tend:0}},created:function(){this.artdata()},methods:{artdata:function(){var t=this;this.axios.get("person").then(function(i){t.datalist=i.data.data})},loadMore:function(){var t=this;this.pno++;var i="person?pno="+this.pno;this.axios.get(i).then(function(i){if(1==i.data.code){var s=t.datalist.concat(i.data.data);t.datalist=s}else 0==i.data.code&&Object(o.Toast)("没有更多数据了")})},search:function(){var t=this,i=(i=this.$refs.search,this.qs.stringify({aname:i.value}));this.axios.post("search",i).then(function(i){0==i.data.code?Object(o.Toast)("对不起,没有信息"):1==i.data.code&&(t.datalist=i.data.data)})},astart:function(t){this.tstart=t.touches[0].clientY},amove:function(t){this.tend=t.touches[0].clientY;var i=this.tend-this.tstart,s=this.$refs.artist,e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;i>20&&0==e&&(s.style.webkitTransform="translateY(60px)")},aend:function(){artist.style.webkitTransform="translateY(0)"}}},f={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{ref:"artist",attrs:{id:"artist"},on:{touchstart:t.astart,touchmove:t.amove,touchend:t.aend}},[s("div",{staticClass:"dnav"},[s("input",{ref:"search",attrs:{id:"search",placeholder:"请输入姓氏或姓名",type:"text"}}),t._v(" "),s("span",{staticClass:"mui-icon mui-icon-search",on:{click:t.search}})]),t._v(" "),s("div",{attrs:{id:"person"}},[s("ul",t._l(t.datalist,function(i){return s("li",[s("img",{attrs:{src:i.img_url,alt:""}}),t._v(" "),s("div",[s("div",[t._v(t._s(i.aname))]),t._v(" "),s("p",[t._v(t._s(i.occupation))]),t._v(" "),s("p",[s("b",[t._v("画集:")]),t._v(" "),s("span",[t._v("\n                            "+t._s(i.works)+"\n                        ")])]),t._v(" "),s("p",[s("router-link",{attrs:{to:i.href}},[t._v("查看详细信息\n                         ")])],1)])])}),0),t._v(" "),s("button",{staticClass:"mui-btn mui-btn-outlined mui-btn-primary",attrs:{type:"button"},on:{click:t.loadMore}},[t._v("加载更多")])])])},staticRenderFns:[]};var b=s("VU/8")(p,f,!1,function(t){s("DsGW")},null,null).exports,g={data:function(){return{navlist:["即将展览","学术研究"],curr:0,newslist:[],researchlist:[]}},created:function(){this.news(),this.research(),this.menu()},mounted:function(){},methods:{menu:function(){window.scrollTo(0,0)},btnCl:function(t){this.curr=t},news:function(){var t=this;this.axios.get("exhnews").then(function(i){console.log(i),t.newslist=i.data.data})},research:function(){var t=this;this.axios.get("research").then(function(i){t.researchlist=i.data.data})},smove:function(t){this.menu();var i=t.target.innerHTML,s=this.$refs.scont,e=0;"即将展览"==i?(e=0,s.style.webkitTransform="translateX("+e+"%)"):"学术研究"==i&&(e=-50,s.style.webkitTransform="translateX("+e+"%)")}}},C={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{ref:"box",attrs:{id:"service"}},[s("div",{staticClass:"s-nav"},[s("ul",{staticClass:"ul-nav",on:{click:t.smove}},t._l(t.navlist,function(i,e){return s("li",{class:{btncl:t.curr===e},on:{click:function(i){return t.btnCl(e)}}},[t._v(t._s(i))])}),0)]),t._v(" "),s("div",{ref:"scont",attrs:{id:"s-cont"}},[s("ul",t._l(t.newslist,function(i,e){return s("li",{key:e},[s("h6",[t._v(t._s(i.title))]),t._v(" "),s("p",[s("b",[t._v("时         间:")]),t._v(" "),s("span",[t._v(t._s(i.btime)+"    ")]),t._v(" "),s("span",[t._v(t._s(i.dtime))])]),t._v(" "),s("p",[s("b",[t._v("地       点:")]),t._v(" "),s("span",[t._v("天"+t._s(i.location))])]),t._v(" "),s("p",[s("b",[t._v("主要展品:")]),t._v(" "),s("span",[t._v("\n                        "+t._s(i.exhlist)+"\n                    ")])])])}),0),t._v(" "),s("ul",t._l(t.researchlist,function(i){return s("li",[s("router-link",{attrs:{to:i.href}},[s("h5",[t._v(t._s(i.title))]),t._v(" "),s("p",[s("span",[t._v(t._s(i.year))]),t._v("  \n                        "),s("span",[t._v(t._s(i.month))])]),t._v(" "),s("p",[t._v("\n                        "+t._s(i.suntitle)+"...\n                    ")])]),t._v(" "),s("hr")],1)}),0)])])},staticRenderFns:[]};var x=s("VU/8")(g,C,!1,function(t){s("36Im")},null,null).exports,y={data:function(){return{tid:0,studylist:{}}},created:function(){this.datastudy()},methods:{datastudy:function(){var t=this;this.tid=document.URL.split("=")[1];var i="study?tid="+this.tid;this.axios.get(i).then(function(i){t.studylist=i.data.data[0]})}}},k={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"study"}},[s("div",{staticClass:"study"},[s("h5",[t._v(t._s(t.studylist.title))]),t._v(" "),s("p",[s("span",[t._v(t._s(t.studylist.time))])]),t._v(" "),s("p",[t._v("\n           "+t._s(t.studylist.p1)+"\n        ")]),t._v(" "),s("p",[t._v("\n           "+t._s(t.studylist.p2)+"\n        ")]),t._v(" "),s("p",[t._v("\n           "+t._s(t.studylist.p3)+"\n        ")]),t._v(" "),s("p",[s("img",{attrs:{src:t.studylist.img_url,alt:""}})]),t._v(" "),s("p",[t._v("\n            "+t._s(t.studylist.p4)+"\n        ")]),t._v(" "),s("p",[t._v("\n           "+t._s(t.studylist.p5)+"\n        ")]),t._v(" "),s("p",[t._v("\n          "+t._s(t.studylist.p6)+" \n        ")]),t._v(" "),s("p",[t._v("\n           "+t._s(t.studylist.p7)+" \n        ")])]),t._v(" "),s("div",{staticClass:"other"},[s("div",[s("router-link",{attrs:{to:"service"}},[t._v("艺术演讲")])],1),t._v(" "),s("div",{staticStyle:{"margin-top":"10px"}},[s("h5",[t._v(t._s(t.studylist.otitle))]),t._v(" "),s("p",[s("span",[t._v(t._s(t.studylist.otime))])]),t._v(" "),s("p",[t._v("\n                "+t._s(t.studylist.op)+"\n            ")])])])])},staticRenderFns:[]};var w=s("VU/8")(y,k,!1,function(t){s("syeL")},null,null).exports,T={data:function(){return{name:""}},created:function(){this.get()},methods:{get:function(){var t=sessionStorage.getItem("isLogin");"true"==t?this.name=sessionStorage.getItem("uPhoneq"):t||(this.name="")}}},$={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"center"}},[s("div",{staticClass:"c-header"},[t._m(0),t._v(" "),s("p",[s("span",[t._v("\n                "+t._s(t.name)+"\n            ")]),t._v(" "),s("img",{attrs:{src:"center/centerpen.png",alt:""}})])]),t._v(" "),s("div",{attrs:{id:"c-body"}},[s("div",[s("router-link",{attrs:{to:"login"}},[t._v("登录")]),t._v(" "),s("span",[t._v("|")]),t._v(" "),s("router-link",{attrs:{to:"login"}},[t._v("注册")])],1),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"set"}},[t._v("个人设置")]),t._v(" "),s("span",{staticClass:"mui-icon mui-icon-arrowright"})],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"follow"}},[t._v("我的关注")]),t._v(" "),s("span",{staticClass:"mui-icon mui-icon-arrowright"})],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"about"}},[t._v("关于我们")]),t._v(" "),s("span",{staticClass:"mui-icon mui-icon-arrowright"})],1),t._v(" "),s("li",[s("router-link",{attrs:{to:""}},[t._v("意见反馈")]),t._v(" "),s("span",{staticClass:"mui-icon mui-icon-arrowright"})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("img",{attrs:{src:"detail/touxiang.png",alt:""}})])}]};var S=s("VU/8")(T,$,!1,function(t){s("WYVo")},null,null).exports,P={data:function(){return{navlist:["登录","|","注册"],currin:0,lAcc:"",lPwd:"",rEmail:"",rPhone:"",rPwd:""}},methods:{optionAct:function(t){1==t&&(t=666),this.currin=t},lmove:function(t){var i=this.$refs.lbody,s=0,e=t.target.innerHTML;"登录"==e?(s=0,i.style.webkitTransform="translateX("+s+"%)"):"注册"==e&&(s=-50,i.style.webkitTransform="translateX("+s+"%)")},loginbtn:function(){var t=this;if(/^[1][3-8][0-9]{9}$/.test(this.lAcc))var i=this.lAcc;else Object(o.Toast)("账号请输入手机号码正确格式");if(/^[A-Za-z0-9]{6,12}$/.test(this.lPwd))var s=this.lPwd;else Object(o.Toast)("密码请输入6-12位数字或字母");var e=this.qs.stringify({upwd:s,zh:i});this.axios.post("login",e).then(function(i){1==i.data.code?(sessionStorage.setItem("uPhoneq",i.data.data[0].zh),sessionStorage.setItem("isLogin",!0),Object(o.Toast)("登录成功"),t.$router.push("/home")):Object(o.Toast)("账号密码有误,请重新登录")})},regbtn:function(){var t=this;if(/^[1][3-8][0-9]{9}$/.test(this.rPhone))var i=this.rPhone;else Object(o.Toast)("账号请输入手机号码正确格式");if(/^[A-Za-z0-9]{6,12}$/.test(this.rPwd))var s=this.rPwd;else Object(o.Toast)("密码请输入6-12位数字或字母");var e=this.rEmail,a=this.qs.stringify({upwd:s,zh:i,uemail:e});this.axios.post("reg",a).then(function(i){0==i.data.code?(Object(o.Toast)("账号已存在,请重新输入"),t.rPhone=""):1==i.data.code&&(Object(o.Toast)("注册成功,请登录"),t.$refs.lbody.style.webkitTransform="translateX(0%)")})}}},z={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"option"},[s("ul",{on:{click:t.lmove}},t._l(t.navlist,function(i,e){return s("li",{class:{btnclass:t.currin===e},on:{click:function(i){return t.optionAct(e)}}},[t._v(t._s(i))])}),0)]),t._v(" "),s("div",{ref:"lbody",staticClass:"l-body"},[s("ul",{staticClass:"login"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.lAcc,expression:"lAcc"}],attrs:{type:"text",placeholder:"请输入手机号码"},domProps:{value:t.lAcc},on:{input:function(i){i.target.composing||(t.lAcc=i.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.lPwd,expression:"lPwd"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.lPwd},on:{input:function(i){i.target.composing||(t.lPwd=i.target.value)}}}),t._v(" "),s("button",{staticClass:"mui-btn mui-btn-primary mui-btn-block mui-btn-outlined",attrs:{type:"button"},on:{click:t.loginbtn}},[t._v("点击登录")])]),t._v(" "),s("ul",{staticClass:"reg"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.rPhone,expression:"rPhone"}],attrs:{type:"text",placeholder:"请输入手机号码"},domProps:{value:t.rPhone},on:{input:function(i){i.target.composing||(t.rPhone=i.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.rPwd,expression:"rPwd"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.rPwd},on:{input:function(i){i.target.composing||(t.rPwd=i.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.rEmail,expression:"rEmail"}],attrs:{type:"text",placeholder:"请输入邮箱号"},domProps:{value:t.rEmail},on:{input:function(i){i.target.composing||(t.rEmail=i.target.value)}}}),t._v(" "),s("button",{staticClass:"mui-btn mui-btn-primary mui-btn-block mui-btn-outlined",attrs:{type:"button"},on:{click:t.regbtn}},[t._v("点击注册")])])])])},staticRenderFns:[]};var E=s("VU/8")(P,z,!1,function(t){s("NLwr")},null,null).exports,I={data:function(){return{folllist:[]}},created:function(){this.getdata()},methods:{getdata:function(){var t=this;this.axios.get("follow").then(function(i){(t.folllist=i.data.data,t.folllist=t.folllist.reverse(),0==t.folllist.length)&&(t.$refs.alert.innerHTML=" 你还没有关注呦,清先添加关注 !")})},deletefollow:function(t){var i=this,s="defollow?cid="+t.target.dataset.id;this.axios.get(s).then(function(t){1==t.data.code&&(Object(o.Toast)("删除成功"),i.getdata())})}}},j={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"follow"}},[s("ul",{staticClass:"follow"},t._l(t.folllist,function(i){return s("li",[s("p",[s("span",[s("b",[t._v("作品名称:")]),t._v(" "+t._s(i.chinesename))]),t._v(" "),s("span",[s("b",[t._v("材       质:")]),t._v(" \n                    "+t._s(i.material))])]),t._v(" "),s("p",[s("span",[s("b",[t._v("作       者:")]),t._v(" \n                    "+t._s(i.author))]),t._v(" "),s("span",[s("b",[t._v("材       料:")]),t._v("  \n                    "+t._s(i.type))])]),t._v(" "),s("p",[s("span",[s("b",[t._v("尺       寸:")]),t._v("\n                    "+t._s(i.size))]),t._v(" "),s("span",[s("b",[t._v("创作时间:")]),t._v(t._s(i.creattime))])]),t._v(" "),s("div",[s("p",[s("b",[t._v("位置信息:")]),t._v(t._s(i.positnews)+" ")]),t._v(" "),s("p",[s("b",[t._v("展览信息:")]),t._v(t._s(i.exhibition))])]),t._v(" "),s("div",[s("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined",attrs:{"data-id":i.cid,type:"button"},on:{click:t.deletefollow}},[t._v("\n\t\t\t\t\t删除\n\t\t\t\t")])])])}),0),t._v(" "),s("div",{ref:"alert",attrs:{id:"alert"}})])},staticRenderFns:[]};var O=s("VU/8")(I,j,!1,function(t){s("BVzG")},null,null).exports,X={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"about"}},[s("div",[s("p",[t._v("关于我们")]),t._v(" "),s("p",[t._v("The art museum")])]),t._v(" "),s("img",{attrs:{src:"index/three1.png",alt:""}}),t._v(" "),s("p",[t._v("\n        美术馆走过十年的历程，在这十年中，美术馆以其当代性的视野、国际化的平台、规范化的运营，持续推出数以百计的当代艺术展览、讲座、教育活动和艺术项目，始终坚持推动中国当代艺术的发展，引进并展现世界当代艺术的精神。\n    ")]),t._v(" "),s("p",[t._v("\n        从创办开始，美术馆即展开了一系列探索与改革。不断修正与确立了公益性美术馆的定位和战略目标，持续完善运营机制与组织结构，\n    ")]),t._v(" "),s("p",[t._v("\n        逐步扩大美术馆的规模，健全展览、收藏、研究、教育推广等相关机构功能，同时带动书籍出版、数字虚拟展示。\n    ")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticStyle:{margin:"30px 0 0px 0",padding:"0 0 40px 0"}},[s("span",{staticStyle:{"font-size":"16px",margin:"20px 15px 20px 15px"}},[t._v("与全球最具影响力品牌合作，并全力协助新兴品牌")]),t._v(" "),s("p",{staticStyle:{margin:"10px 15px 0 15px"}},[t._v("\n            未来的五年，美术馆在进一步规范民营美术馆运营模式的同时，将更加丰富其社会功能，承担更多的社会责任。美术馆将更深层次地关注中国当代艺术的整体发展，更加注重开展与国际间的文化艺术交流，通过展览、学术沟通等多种形式建立共同发展的机制，努力寻求共同发展的有效契机，不遗余力地推进国内与国外艺术家、艺术机构、艺术项目的良性互动。\n        ")])])])}]};var V=s("VU/8")({},X,!1,function(t){s("UoNV")},null,null).exports,A={data:function(){return{zh:"",xpwd:"",name:name}},created:function(){this.moren()},methods:{moren:function(){this.name=sessionStorage.getItem("uPhoneq"),this.zh=this.name},outclick:function(){sessionStorage.setItem("isLogin",!1),sessionStorage.setItem("uPhoneq",""),Object(o.Toast)("退出成功"),this.$router.push("/center")},update:function(){if(""==this.name)Object(o.Toast)("对不起,未登录状态下不能修改密码");else{if(/^[A-Za-z0-9]{6,12}$/.test(this.xpwd)){var t=this.qs.stringify({zh:this.zh,xpwd:this.xpwd});this.axios.post("updatep",t).then(function(t){1==t.data.code&&Object(o.Toast)("密码修改成功")})}else Object(o.Toast)("密码请输入6-12位数字或字母")}}}},R={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"setting"}},[s("ul",[s("li",[s("span",[t._v("修改密码")]),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.zh,expression:"zh"}],attrs:{type:"text",placeholder:"请输入账号",value:""},domProps:{value:t.zh},on:{input:function(i){i.target.composing||(t.zh=i.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.xpwd,expression:"xpwd"}],attrs:{type:"password",placeholder:"新密码"},domProps:{value:t.xpwd},on:{input:function(i){i.target.composing||(t.xpwd=i.target.value)}}}),t._v(" "),s("button",{on:{click:t.update}},[t._v("确认")])])]),t._v(" "),s("li",{staticClass:"mui-table-view-cell"})]),t._v(" "),s("div",[s("button",{staticClass:"mui-btn mui-btn-danger mui-btn-block mui-btn-outlined",attrs:{type:"button"},on:{click:t.outclick}},[t._v("退出登录")])])])},staticRenderFns:[]};var N=s("VU/8")(A,R,!1,function(t){s("Zmjd")},null,null).exports;e.default.use(r.a);var U=new r.a({routes:[{path:"/",component:u},{path:"/home",component:u},{path:"/App",component:n},{path:"/list",component:d},{path:"/detail",component:m},{path:"/artist",component:b},{path:"/service",component:x},{path:"/study",component:w},{path:"/center",component:S},{path:"/login",component:E},{path:"/follow",component:O},{path:"/about",component:V},{path:"/set",component:N}]}),M=(s("d8/S"),s("NYxO")),F=(s("Ffyk"),s("tNkr"),s("zMXm"),s("mw3O")),q=s.n(F),L=s("mtWM"),Y=s.n(L);e.default.use(M.a);var B=new M.a.Store({state:{cartCount:sessionStorage.getItem("cartCount")||0,uPhone:""},mutations:{increment:function(t){t.cartCount++,sessionStorage.setItem("cartCount",t.cartCount)}},getters:{optCartCount:function(t){return t.cartCount}}});e.default.config.productionTip=!1,e.default.component("mt-button",o.Button),e.default.component(o.Header.name,o.Header),e.default.component(o.Swipe.name,o.Swipe),e.default.component(o.SwipeItem.name,o.SwipeItem),e.default.prototype.qs=q.a,Y.a.defaults.withCredentials=!0,e.default.prototype.axios=Y.a,e.default.prototype.anim=function(t,i,s){window.onscroll=function(s){document.documentElement.scrollTop>i&&(t.style.top=0)}},e.default.filter("datetimeFilter",function(t){var i=new Date(t),s=i.getFullYear(),e=i.getMonth(),a=i.getDate(),n=i.getHours(),r=i.getMinutes(),o=i.getSeconds();return e<10&&(e="0"+e),a<10&&(a="0"+a),s+"-"+e+"-"+a+"- "+n+":"+r+":"+o}),new e.default({router:U,render:function(t){return t(n)},store:B}).$mount("#app")},NLwr:function(t,i){},UoNV:function(t,i){},WYVo:function(t,i){},Zmjd:function(t,i){},"d8/S":function(t,i){},f239:function(t,i){},syeL:function(t,i){},tNkr:function(t,i){},zMXm:function(t,i){}},["NHnr"]);