<template>
  <div id="home">
    <!-- 头部导航 -->
    <nav-bar class="home-bar">
      <template #center> 超级商店 </template>
    </nav-bar>
    <!-- 封装好的滚动scroll -->
    <!-- 后显示的状态栏 -->
    <tab-control :title="homeTitle" class="isFixed" @tabClick="tabClick" 
      ref="tabControl2" v-show="isShowTabControl"/>
      
    <better-scroll
      class="wrapper"
      ref="wrapper"
      :probe-type="3"
      @scrollContent="scrollContent"
      @pullingDown="pullingDown"
      @pullingUp="pullingUp"
    >
      <!-- 轮播图 成功了但是暂时看不懂 -->
      <!-- https://c.runoob.com/codedemo/3391 3D实例 -->
      <home-slider :bannerList="banner" @SlideLoad="SlideLoad"></home-slider>

      <!-- 推荐 -->
      <home-recommend :recommend="recommend"></home-recommend>
      <!-- 受欢迎的 -->
      <home-popular />
      <tab-control :title="homeTitle" class="isFixed" @tabClick="tabClick" 
      ref="tabControl1"/>
      <!-- 商品列表 -->
      <goods :goodsType="returnList" />
    </better-scroll>
    <!-- 返回顶部 -->
    <back-to @click="backTop" v-show="isShowBackTo" />
  </div>
</template>

<script>
import { RequestMultiData, RequestGoodsData } from "network/HomeRequest.js";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/context/TabControl";
import BetterScroll from "components/common/scroll/BetterScroll";
import Goods from "components/context/goods/Goods";

import HomeSlider from "./HomeCom/HomeSlider";
import HomeRecommend from "./HomeCom/HomeRecommend";
import HomePopular from "./HomeCom/HomePopular";

import {unShake} from 'common/utils'
import {Backto} from 'common/mixin'
export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    Goods,
    BetterScroll,
    HomeSlider,
    HomeRecommend,
    HomePopular,
  },
  mixins: [Backto],
  data() {
    return {
      banner: [],
      recommend: [],
      homeTitle: [
        { id: 1, name: "流行" },
        { id: 2, name: "新款" },
        { id: 3, name: "精选" },
      ],
      goodsList: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }, //精选
      },
      returnList: null,
      currentType: "pop", // 当前的分类
      TabControlTop:0,// 状态栏距离top的高度
      isShowTabControl:false,
      saveY:0
    };
  },
  created() {
    // 请求多个数据
    this.RequestMultiData();
    // 请求商品数据
    this.RequestGoodsData("pop");
    this.RequestGoodsData("new");
    this.RequestGoodsData("sell");
  },
  // keep-alive 生命周期函数
  activated() {
    // console.log(this.saveY)
    this.$refs.wrapper.scrollTo(0, this.saveY, 0)
    this.$refs.wrapper.refresh();
  },
  deactivated(){
    // console.log(this.saveY)
    this.saveY = this.$refs.wrapper.getScorllY();
  },
  methods: {
    // 网络请求方法
    RequestMultiData() {
      RequestMultiData().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    RequestGoodsData(type) {
      // 动态的增加page
      let page = this.goodsList[type].page + 1;
      RequestGoodsData(type, page).then((res) => {
        // 使用 ... 将可迭代对象 添加到数组中
        if(res.data.list){
            this.goodsList[type].list.push(...res.data.list);
            this.goodsList[type].page += 1;
        }else{
          setTimeout(()=>{
            this.RequestGoodsData(this.currentType)
          }, 1000)
        }
      });
      // 初始列表
      this.returnList = this.goodsList["pop"].list;
    },
    // 事件监听方法
    tabClick(item) {
      const index = item[0];
      switch (index) {
        case 1:
          this.returnList = this.goodsList["pop"].list;
          this.currentType = "pop";
          break;
        case 2:
          this.returnList = this.goodsList["new"].list;
          this.currentType = "new";
          break;
        case 3:
          this.returnList = this.goodsList["sell"].list;
          this.currentType = "sell";
          break;
      }
      // 让二个状态栏显示同步
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backTop() {
      //  返回顶部
      this.$refs.wrapper.scrollTo(0, 0);
      // 返回顶部在进行一次刷新
      this.pullingDown()
    },
    // 监听滚动方位
    scrollContent(position) {
      // 监听backtop 图标是否显示
      this.isShowBackTo = -position.y > 1000;
      // 监听tabControl 的滚动高度
      this.isShowTabControl = (-position.y) > this.TabControlTop
    },
    // 监听下拉刷新
    pullingDown() {
      this.RequestGoodsData(this.currentType);
      this.goodsList[this.currentType].list.reverse();
      console.log("下拉刷新");
    },
    // 监听上拉刷新
    pullingUp() {
      this.RequestGoodsData(this.currentType);
      console.log("上拉刷新");
    },
    // 监听轮播图是否加载完
    SlideLoad(){
      this.TabControlTop = this.$refs.tabControl1 ?  this.$refs.tabControl1.$el.offsetTop : 0;
    }
  },
  mounted() {
    // 间隔一段事件 重新计算滚动高度
    // setTimeout(() => {
    //   this.$refs.wrapper.refresh();
    // }, 800);
    // 监听事件总线
    let refresh = unShake(this.$refs.wrapper.refresh, 200)
    this.$bus.$on('HomeImgLoad', ()=>{
      // 这里需要来一个防抖函数， 不然执行太频繁了
      refresh();
    })
    
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: var(--font-size) + 2px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
/* 当滚动44px  定位就变成fixed  在原生js有效 但是用了插件 失效*/
/* .isFixed {
  position: sticky;
  top: 44px;
  z-index: 9;
} */
.isFixed {
  position: relative;
  z-index: 9;
  font-size: 15px;
}
/* 可滚动的高度 */
.wrapper {
  background: #fff;
  overflow-y: hidden;
  height: calc(100% - 49px);
  /* position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; */
}
</style>