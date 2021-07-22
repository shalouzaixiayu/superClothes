<template>
  <!-- 点击触发状态 toast -->
  <div class="status" v-show="isShow">
    <span class="a">{{ a }}</span>
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: "", // 状态信息
  //   a: "😊 ",
  //   isShow: false, // 状态信息是否显示
  // },

  data() {
    return {
      message: "", // 状态信息
      a: "😊 ",
      isShow: false, // 状态信息是否显示
    };
  },
  methods: {
    show(message = "你是最牛逼id", timer = 1500) {
      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, timer);
    },
  },
};
</script>

<style scoped>
.status {
  text-align: center;
  font-size: 16px;
  color: #eeeeee;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  background-color: rgba(1, 1, 1, 0.4);
}
.status .a {
  display: block;
  color: var(--color-tint);
}
.status span {
  line-height: 20px;
}
</style>