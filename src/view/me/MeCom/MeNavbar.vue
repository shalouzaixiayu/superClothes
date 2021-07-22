<template>
  <div>
    <nav-bar>
      <template #center> 
        <span class="title">{{msg}}</span>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:"MeNavbar",
  components: {
    NavBar,
  },
  data(){
    return{
      msg:"我的"
  }}
}
</script>

<style scoped>
  .title{
    color: var(--color-tint);
  }
</style>