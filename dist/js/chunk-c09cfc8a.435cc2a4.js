(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c09cfc8a"],{1480:function(t,e,n){"use strict";n.r(e);var i=n("7a23"),r=Object(i["H"])("data-v-cc9ad742");Object(i["t"])("data-v-cc9ad742");var o={id:"home"},s=Object(i["g"])(" 超级商店 ");Object(i["r"])();var c=r((function(t,e,n,c,a,l){var u=Object(i["y"])("nav-bar"),d=Object(i["y"])("tab-control"),h=Object(i["y"])("home-slider"),b=Object(i["y"])("home-recommend"),f=Object(i["y"])("home-popular"),p=Object(i["y"])("goods"),m=Object(i["y"])("better-scroll"),j=Object(i["y"])("back-to");return Object(i["q"])(),Object(i["e"])("div",o,[Object(i["h"])(u,{class:"home-bar"},{center:r((function(){return[s]})),_:1}),Object(i["G"])(Object(i["h"])(d,{title:a.homeTitle,class:"isFixed",onTabClick:l.tabClick,ref:"tabControl2"},null,8,["title","onTabClick"]),[[i["D"],a.isShowTabControl]]),Object(i["h"])(m,{class:"wrapper",ref:"wrapper","probe-type":3,onScrollContent:l.scrollContent,onPullingDown:l.pullingDown,onPullingUp:l.pullingUp},{default:r((function(){return[Object(i["h"])(h,{bannerList:a.banner,onSlideLoad:l.SlideLoad},null,8,["bannerList","onSlideLoad"]),Object(i["h"])(b,{recommend:a.recommend},null,8,["recommend"]),Object(i["h"])(f),Object(i["h"])(d,{title:a.homeTitle,class:"isFixed",onTabClick:l.tabClick,ref:"tabControl1"},null,8,["title","onTabClick"]),Object(i["h"])(p,{goodsType:a.returnList},null,8,["goodsType"])]})),_:1},8,["onScrollContent","onPullingDown","onPullingUp"]),Object(i["G"])(Object(i["h"])(j,{onClick:l.backTop},null,8,["onClick"]),[[i["D"],t.isShowBackTo]])])})),a=n("2909"),l=n("ed18"),u=n("a7ac"),d=n("6f86"),h=n("4421"),b=n("25da");n("9911");function f(t,e,n,r,o,s){var c=Object(i["y"])("slider-show-item"),a=Object(i["y"])("slider-show");return Object(i["q"])(),Object(i["e"])("div",null,[Object(i["h"])(a,null,{default:Object(i["F"])((function(){return[(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(n.bannerList,(function(t){return Object(i["q"])(),Object(i["e"])(c,{key:t},{default:Object(i["F"])((function(){return[Object(i["h"])("a",{href:t.link},[Object(i["h"])("img",{src:t.image,alt:"",onLoad:e[1]||(e[1]=function(){return s.SlideLoad&&s.SlideLoad.apply(s,arguments)})},null,40,["src"])],8,["href"])]})),_:2},1024)})),128))]})),_:1})])}var p=n("64a6"),m={name:"HomeSlider",components:{SliderShow:p["a"],SliderShowItem:p["b"]},props:{bannerList:{type:Array,default:function(){return[]}}},data:function(){return{flag:!1}},methods:{SlideLoad:function(){this.flag||this.$emit("SlideLoad"),this.flag=!0}}};m.render=f;var j=m,O={class:"recommend"};function v(t,e,n,r,o,s){return Object(i["q"])(),Object(i["e"])("div",O,[(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(n.recommend,(function(t){return Object(i["q"])(),Object(i["e"])("div",{class:"recommend-item",key:t},[Object(i["h"])("a",{href:t.link},[Object(i["h"])("img",{src:t.image,alt:""},null,8,["src"]),Object(i["h"])("span",null,Object(i["B"])(t.title),1)],8,["href"])])})),128))])}var w={name:"HomeRecommend",props:{recommend:{type:Array,default:function(){return[]}}}};n("198e");w.render=v;var g=w,T=n("518d"),y=n.n(T),C={class:"popular"},S=Object(i["h"])("img",{src:y.a,alt:""},null,-1);function k(t,e,n,r,o,s){return Object(i["q"])(),Object(i["e"])("div",C,[Object(i["h"])("a",{href:o.linkTo},[S],8,["href"])])}var x={name:"HomePopular",data:function(){return{linkTo:"https://www.bilibili.com/"}}};n("4a33");x.render=k;var I=x,L=n("90b9"),q=n("eecb"),D={name:"Home",components:{NavBar:u["a"],TabControl:d["a"],Goods:b["a"],BetterScroll:h["a"],HomeSlider:j,HomeRecommend:g,HomePopular:I},mixins:[q["a"]],data:function(){return{banner:[],recommend:[],homeTitle:[{id:1,name:"流行"},{id:2,name:"新款"},{id:3,name:"精选"}],goodsList:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},returnList:null,currentType:"pop",TabControlTop:0,isShowTabControl:!1,saveY:0}},created:function(){this.RequestMultiData(),this.RequestGoodsData("pop"),this.RequestGoodsData("new"),this.RequestGoodsData("sell")},activated:function(){this.$refs.wrapper.scrollTo(0,this.saveY,0),this.$refs.wrapper.refresh()},deactivated:function(){this.saveY=this.$refs.wrapper.getScorllY()},methods:{RequestMultiData:function(){var t=this;Object(l["b"])().then((function(e){t.banner=e.data.banner.list,t.recommend=e.data.recommend.list}))},RequestGoodsData:function(t){var e=this,n=this.goodsList[t].page+1;Object(l["a"])(t,n).then((function(n){var i;n.data.list?((i=e.goodsList[t].list).push.apply(i,Object(a["a"])(n.data.list)),e.goodsList[t].page+=1):setTimeout((function(){e.RequestGoodsData(e.currentType)}),1e3)})),this.returnList=this.goodsList["pop"].list},tabClick:function(t){var e=t[0];switch(e){case 1:this.returnList=this.goodsList["pop"].list,this.currentType="pop";break;case 2:this.returnList=this.goodsList["new"].list,this.currentType="new";break;case 3:this.returnList=this.goodsList["sell"].list,this.currentType="sell";break}this.$refs.tabControl1.currentIndex=e,this.$refs.tabControl2.currentIndex=e},backTop:function(){this.$refs.wrapper.scrollTo(0,0),this.pullingDown()},scrollContent:function(t){this.isShowBackTo=-t.y>1e3,this.isShowTabControl=-t.y>this.TabControlTop},pullingDown:function(){this.RequestGoodsData(this.currentType),this.goodsList[this.currentType].list.reverse(),console.log("下拉刷新")},pullingUp:function(){this.RequestGoodsData(this.currentType),console.log("上拉刷新")},SlideLoad:function(){this.TabControlTop=this.$refs.tabControl1?this.$refs.tabControl1.$el.offsetTop:0}},mounted:function(){var t=Object(L["a"])(this.$refs.wrapper.refresh,200);this.$bus.$on("HomeImgLoad",(function(){t()}))}};n("1d2a");D.render=c,D.__scopeId="data-v-cc9ad742";e["default"]=D},"198e":function(t,e,n){"use strict";n("44e4")},"1d2a":function(t,e,n){"use strict";n("5a45")},"44e4":function(t,e,n){},"4a33":function(t,e,n){"use strict";n("d05d")},"518d":function(t,e,n){t.exports=n.p+"img/popular.c73400a2.png"},"5a45":function(t,e,n){},"64a6":function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var i=n("7a23"),r=Object(i["H"])("data-v-0b29d14b");Object(i["t"])("data-v-0b29d14b");var o={id:"swiper"},s={class:"indicator"};Object(i["r"])();var c=r((function(t,e,n,r,c,a){return Object(i["q"])(),Object(i["e"])("div",o,[Object(i["h"])("div",{class:"swiper",onTouchstart:e[1]||(e[1]=function(){return a.touchStart&&a.touchStart.apply(a,arguments)}),onTouchmove:e[2]||(e[2]=function(){return a.touchMove&&a.touchMove.apply(a,arguments)}),onTouchend:e[3]||(e[3]=function(){return a.touchEnd&&a.touchEnd.apply(a,arguments)})},[Object(i["x"])(t.$slots,"default")],32),Object(i["x"])(t.$slots,"indicator"),Object(i["h"])("div",s,[n.showIndicator&&t.slideCount>1?Object(i["x"])(t.$slots,"indicator",{key:0},(function(){return[(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(t.slideCount,(function(e){return Object(i["q"])(),Object(i["e"])("div",{class:["indi-item",{active:e===t.currentIndex-1}],key:e},null,2)})),128))]})):Object(i["f"])("",!0)])])})),a=(n("a9e3"),{name:"SliderShow",props:{interval:{type:Number,default:2e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),300)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slider");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),i=e[this.slideCount-1].cloneNode(!0);t.insertBefore(i,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(){var t=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&t>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&t>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}});n("d181");a.render=c,a.__scopeId="data-v-0b29d14b";var l=a,u=Object(i["H"])("data-v-b15c90ee");Object(i["t"])("data-v-b15c90ee");var d={class:"slider"};Object(i["r"])();var h=u((function(t,e,n,r,o,s){return Object(i["q"])(),Object(i["e"])("div",d,[Object(i["x"])(t.$slots,"default")])})),b={name:"SliderShowItem"};n("a727");b.render=h,b.__scopeId="data-v-b15c90ee";var f=b},"6f86":function(t,e,n){"use strict";n("b0c0");var i=n("7a23"),r={class:"tab-control"};function o(t,e,n,o,s,c){return Object(i["q"])(),Object(i["e"])("div",r,[(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(n.title,(function(t){return Object(i["q"])(),Object(i["e"])("div",{class:["tab-control-item",{active:s.currentIndex===t.id}],key:t.id,onClick:function(e){return c.tabClick(t.id)}},[Object(i["h"])("span",null,Object(i["B"])(t.name),1)],10,["onClick"])})),128))])}var s={name:"TabControl",props:{title:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:1}},methods:{tabClick:function(t){this.currentIndex=t,this.$emit("tabClick",[t])}}};n("debb");s.render=o;e["a"]=s},"857a":function(t,e,n){var i=n("1d80"),r=/"/g;t.exports=function(t,e,n,o){var s=String(i(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(o).replace(r,"&quot;")+'"'),c+">"+s+"</"+e+">"}},9911:function(t,e,n){"use strict";var i=n("23e7"),r=n("857a"),o=n("af03");i({target:"String",proto:!0,forced:o("link")},{link:function(t){return r(this,"a","href",t)}})},a727:function(t,e,n){"use strict";n("dc85")},af03:function(t,e,n){var i=n("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},d05d:function(t,e,n){},d181:function(t,e,n){"use strict";n("e72d")},d445:function(t,e,n){},dc85:function(t,e,n){},debb:function(t,e,n){"use strict";n("d445")},e72d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-c09cfc8a.435cc2a4.js.map