<template>
  <div class="popular">
    <a :href="linkTo">
      <img src="~assets/image/home/popular.png" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name:"HomePopular",
  data(){
    return{
      linkTo:"https://www.bilibili.com/"
    }
  }
}
</script>

<style>
.popular{
  margin-top: 10px;
  width: 100%;
}
.popular img{
  width: 100%;
}
</style>