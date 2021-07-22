<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend" :key="item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"HomeRecommend",
  props:{
    recommend:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style>
  .recommend{
    display:flex;
    width:100%;
    font-size: 14px;
    padding:15px 0px 15px;
    text-align: center;
    border-bottom:4px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    height: 75px;
    width: 75px;
    margin-bottom: 7px;
  }
  .recommend-item span{
    display: block;
  }
</style>