<template>
  <div>
    <tab-bar>
      <tab-bar-item v-for="item in TabBarItems" :key="item" :path="item.to">
        <template #itemIco>
          <img :src="item.ico" :alt="item.name">
        </template>
        <template #itemIcoActive>
           <img :src="item.icoActive" :alt="item.name">
        </template>
        <template #itemText>
           <span>{{item.name}}</span>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from  '../common/tabbar/TabBar'
import TabBarItem  from  '../common/tabbar/TabBarItem'

export default {
  name:"TabBarContext",
  components: {
    TabBar, TabBarItem
  },
  data() {
    return{
       TabBarItems: [
        {
          name: "首页",
          ico: require("assets/image/tabbar/home.png"),
          icoActive: require("assets/image/tabbar/home-active.png"),
          to: "/home",
        },
        {
          name: "分类",
          ico: require("assets/image/tabbar/class.png"),
          icoActive: require("assets/image/tabbar/class-active.png"),
          to: "/class",
        },
        {
          name: "购物车",
          ico: require("assets/image/tabbar/shop.png"),
          icoActive: require("assets/image/tabbar/shop-active.png"),
          to: "/shop",
        },
        {
          name: "我的",
          ico: require("assets/image/tabbar/me.png"),
          icoActive: require("assets/image/tabbar/me-active.png"),
          to: "/me",
        },
      ],
  }
}
}
</script>

<style>

</style>