<template>
  <div class="show-null">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "ShopNull",
  data() {
    return{
      msg:"购物车貌似什么都没有呀 \n 快去购物吧 ！"
    }
  }
};
</script>

<style scoped>
.show-null {
  text-align: center;
  font-size: 16px;
  color: #eeeeee;
  position: fixed;
  top: 30%;
  left: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  background-color: rgba(1, 1, 1, 0.4);
}
</style>