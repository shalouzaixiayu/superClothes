<template>
  <div class="class">
    <!-- 导航 -->
    <class-nav />
    <!-- better-scroll 在一个页面中只能让一个组件实现局部滚动， 不能实现多个， 否则用嵌套 -->
    <!-- 左侧列表下拉 -->
    <class-left-list :classList="classList" class="left-wrapper" />

    <!-- 右侧状态栏 -->
    <tab-control :title="title" @tabClick="tabClick" class="isFixed" />
    <better-scroll
      :probe-type="3"
      class="right-wrapper"
      ref="rightWrapper"
      @scrollContent="scrollContent"
      @pullingDown="pullingDown"
      @pullingUp="pullingUp"
    >
      <!-- 右侧图片 -->
      <goods :goodsType="returnList" class="goods" />
    </better-scroll>
    <back-to v-show="isShowBackTo" @click="backTo"/>
  </div>
</template>
<script>
import { ClassRequest } from "network/ClassRequest.js";
import { RequestGoodsData } from "network/HomeRequest.js";

import { unShake } from "common/utils.js";
import { Backto } from "common/mixin";

import ClassNav from "./ClassCom/ClassNav";
import ClassLeftList from "./ClassCom/ClassLeftList";

// 导入滚动状态
import BetterScroll from "components/common/scroll/BetterScroll";

import TabControl from "components/context/TabControl";
import Goods from "components/context/goods/Goods";

export default {
  name: "Class",
  components: {
    ClassNav,
    ClassLeftList,
    TabControl,
    Goods,
    BetterScroll,
  },
  mixins: [Backto],
  data() {
    return {
      classList: [], // 分类列表数据
      returnList: [], // 右侧分类列表
      goodsList: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }, //精选
      },
      currentType: "pop", // 当前分类 流行
      title: [
        { id: 1, name: "流行" },
        { id: 2, name: "精选" },
        { id: 3, name: "新款" },
      ], // 状态分栏
    };
  },
  created() {
    // 请求分类数据
    ClassRequest()
      .then((res) => (this.classList = res.data.list))
      .catch((err) => console.log("请求分类失败" + err));
    // 商品信息请求
    this.RequestGoodsData("pop");
    this.RequestGoodsData("new");
    this.RequestGoodsData("sell");
  },
  mounted() {
    // 根据分类刷新
    // classImageLoad
    // let leftRefresh = unShake(this.$refs.leftWrapper.refresh, 200);
    let rightRefresh = unShake(this.$refs.rightWrapper.refresh, 100);
    // this.$bus.$on("classLeftImageLoad", () => leftRefresh());
    this.$bus.$on("ClassImgLoad", () => rightRefresh());
  },
  methods: {
    RequestGoodsData(type) {
      // 动态的增加page
      let page = this.goodsList[type].page + 1;
      RequestGoodsData(type, page).then((res) => {
        if (res.data.list && res) {
          this.goodsList[type].list.push(...res.data.list);
          this.goodsList[type].page += 1;
        } else {
          setTimeout(() => {
            // 如果没有请求到， 则1.5后，继续请求
            this.RequestGoodsData(this.currentType);
          }, 1500);
        }
      });

      // 初始化列表
      this.returnList = this.goodsList[this.currentType].list;
    },
    tabClick(item) {
      let _id = item[0];
      switch (_id) {
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
      }
    },
    // 状态监听
    scrollContent(position){
      this.isShowBackTo = -position.y > 300 
    },
    // 返回顶部
    backTo(){
      this.$refs.rightWrapper.scrollTo(0, 0)
      this.pullingDown()
    },
    // 下拉刷新
    pullingDown(){
      this.RequestGoodsData(this.currentType)
      this.goodsList[this.currentType].list.reverse()
    },
    // 上拉刷新
    pullingUp(){
      this.RequestGoodsData(this.currentType)
    }
  },
};
</script>

<style>
.class {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow-x: hidden;
}

.left-wrapper {
  height: calc(100% - 93px);
  overflow-y: auto;
  background-color: #fff;
  width: 45%;
}

.right-wrapper {
  position: absolute;
  top: 88px;
  left: 45%;
  right: 0;
  height: calc(100% - 137px);
  overflow-y: hidden;
  background: #fff;
  width: 55%;
}
.isFixed {
  position: absolute;
  top: 44px;
  left: 45%;
  right: 0;
}
.goods {
  /* position: absolute;
  top: 80px;
  left: 45%;
  right: 0; */
}
</style>