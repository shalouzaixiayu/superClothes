<template>
  <div class="slider">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"SliderShowItem"
}
</script>

<style scoped>
  .slider{
    width: 100%;
    flex-shrink: 0;
  }
  .slider img{
    width: 100%;
  }
</style>