<template>
  <div class="detail-navbar">
    <nav-bar>
      <!-- 左侧 -->
      <template #left>
        <img src="~assets/image/common/back.svg" alt="" @click="backTo" />
      </template>
      <!-- 中间 -->
      <template #center>
        <div class="tab-control">
          <div
            class="tab-control-item"
            v-for="item in detailTitle"
            :key="item.id"
            :class="{ active: currentIndex === item.id }"
            @click="tabChange(item.id)"
          >
            <span>{{ item.name }}</span>
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavbar",
  components: {
    NavBar,
  },
  data() {
    return {
      detailTitle: [
        { id: 1, name: "商品" },
        { id: 2, name: "参数" },
        { id: 3, name: "评论" },
        { id: 4, name: "推荐" },
      ],
      currentIndex: 1, // 当前页
    };
  },
  methods: {
    tabChange(index) {
      // 状态改变
      this.currentIndex = index;
      this.$emit("tabChange", index);
    },
    backTo() {
      // 返回之前页面
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.detail-navbar {
  font-size: 13px;
}
.detail-navbar img {
  margin: 12px 0 0 12px;
}
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
  font-size: 12px;
}
.tab-control-item {
  flex: 1;
}
.active span {
  padding: 4px;
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
</style>