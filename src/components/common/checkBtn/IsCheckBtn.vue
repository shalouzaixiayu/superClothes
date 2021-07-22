<template>
  <div class="check"  :class="{cancel: isCancel}">
    <img src="~assets/image/detail/sc_ed.png" alt="">
  </div>
</template>

<script>
export default {
  name:"IsCheckBtn",
  props: {
    isCancel:{
      type:Boolean,
      default:false,
    }
  },
}
</script>

<style>
.check img{
  height: 25px;
  opacity:1;
}
.cancel img{
  opacity:0.15;
}
</style>