<template>
  <div class="list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"ClassList"
}
</script>

<style scoped>
  .list{
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
</style>