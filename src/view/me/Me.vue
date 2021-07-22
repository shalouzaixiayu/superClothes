<template>
  <div class="me">
    <!-- 导航 -->
    <me-navbar />
    <!-- 信息 -->
    <me-info />
  </div>
</template>

<script>
import MeNavbar from "./MeCom/MeNavbar";
import MeInfo from "./MeCom/MeInfo";
export default {
  name: "Me",
  components: {
    MeNavbar,
    MeInfo,
  },
};
</script>

<style scoped>
.me {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>