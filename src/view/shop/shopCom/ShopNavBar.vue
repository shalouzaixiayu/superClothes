<template>
  <div>
    <nav-bar>
      <template #left>
        <div class="bkt">
          <img src="~assets/image/common/back.svg" alt="" @click="backTo" />
        </div>
      </template>
      <template #center>
        <div class="title">
          <span>购物车</span>
          <span>{{ count }}</span>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "ShopNavBar",
  components: {
    NavBar,
  },
  methods: {
      backTo() {
      // 返回之前页面
      this.$router.push('/home');
    },
  },
  computed: {
    count() {
      return this.$store.state.nowCartProduct  ? 
      '( ' + this.$store.state.nowCartProduct.length + " )" : 0;
    },
  },
};
</script>

<style scoped>
.title {
  color: var(--color-tint);
}
.bkt{
  margin: 5px 8px;
}
</style>