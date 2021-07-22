<template>
  <div>
    <!-- 有点难理解 -->
    <router-view v-slot="{ Component }">
    <!-- 缓存页面 -->
    <keep-alive include="Home" exclude="Detail">
      <component :is="Component" />
    </keep-alive>
    </router-view>

    <!-- <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive> -->

    <!-- <router-view></router-view> -->
    <tab-bar-context/>
  </div>
</template>
<script>
import TabBarContext from 'components/context/TabBarContext.vue'; // 底部的导航
export default {
  name: "App",
  components: {
    TabBarContext
  }
};
</script>
<style>
  @import 'assets/css/base';
</style>