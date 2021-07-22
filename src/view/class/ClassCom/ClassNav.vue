<template>
  <div>
    <nav-bar class="nav-bar">
      <template #left class="left">
        <img src="~assets/image/common/back.svg" alt="" @click="backTo" />
      </template>
      <template #center class="center">
        <span>分类</span>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"

export default {
  name:"ClassNav",
  components:{
    NavBar,
  },
  methods:{
    backTo(){
      this.$router.push({name:"Home"})
    }
  }

}
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .left img{
    margin: 10px 0 0 10px;
  }
</style>