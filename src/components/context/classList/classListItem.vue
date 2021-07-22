<template>
  <div class="item">
    <a :href="classItem.link">
      <img :src="classItem.image" @load="classImageLoad">
      <span>{{classItem.title}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name:"ClassListItem",
  props:{
    classItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    classImageLoad(){
      this.$bus.$emit('classLeftImageLoad')
    }  
  }
}
</script>

<style scoped>
  .item{
    width:48%;  
    flex-shrink: 0;
  }
  .item a{
    padding:5px;
  }
  .item a img{
    width:50%;
    margin: 10px 10px 5px 20px;
  }
  .item a span{
    display: block;
    text-align: center;
    transform: translate(-5%, 10%);
  }
</style>