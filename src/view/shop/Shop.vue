<template>
  <div class="shop">
    <!-- 导航 -->
    <shop-nav-bar class="nav-bar" />
    <!-- 滚轮 -->
    <better-scroll class="wrapper">
      <div v-if="cartProduct.length !== 0">
        <shop-list-item
          v-for="item in cartProduct"
          :key="item"
          :ItemProduct="item"
          @scClick="scClick"
        />
      </div>
      <div v-else>
        <shop-null/>
      </div>
    </better-scroll>
    <!-- 底部计算 -->
    <shop-bottom-bar class="bottom" />
  </div>
</template>
i
<script>
import ShopNavBar from "./shopCom/ShopNavBar";
import ShopListItem from "./shopCom/ShopListItem";
import ShopBottomBar from "./shopCom/ShopBottomBar";
import ShopNull from './shopCom/ShopNull'
import BetterScroll from "components/common/scroll/BetterScroll";
export default {
  name: "Shop",
  components: {
    ShopNavBar,
    ShopListItem,
    ShopBottomBar,
    ShopNull,
    BetterScroll,
  },
  computed:{
    cartProduct() {
      // 收藏夹产品
      return this.$store.state.nowCartProduct
        ? this.$store.state.nowCartProduct
        : [];
    },
  },
  methods: {
    scClick(Index) {
      this.$store.commit("SwicthActive", Index);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #fff;
  z-index: 10;
}
.shop {
  height: 100vh;
}
.wrapper {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
  position: relative;
  top: 44px;
}
.bottom {
  background-color: #eee;
  height: 40px;
  position: relative;
  top: 47px;
}
</style>