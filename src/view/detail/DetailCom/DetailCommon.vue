<template>
  <div id="common">
    <div v-for="item in goodsRate" :key="item" class="item">
      <div class="use">
        <img :src="item.user.avatar" alt="">
        <div class="a1">
          <span class="a2">{{item.user.uname}}</span>
          <span class="a4">{{item.style}}</span>
        </div>
      </div>
      <span class="a5">{{item.content}}</span>
      <span class="a6">{{item.extraInfo}}</span>
      <div class="a7" >  
        <img v-for="a in item.images" :key="a"
         :src="a">
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailCommon",
  props:{
    goodsRate:{
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style scoped>
.item{
  padding:10px;
  border-bottom: solid 1px gray;
  border-top: solid 1px gray;
}
.use{position:relative;}
.use img{
  height: 60px;
  width: 60px;
  border-radius:25px;
}
.use .a1{
  display: inline-block;
  font-size: 13px;
  line-height: 50px;
}
.a2{
  position: absolute;
  top:15px;
  left: 60px;
}
.a4{
  position: absolute;
  right:5px;
  top:15px;
}
.a5, .a6{
  display: inline-block;
  font-size: 15px;
  text-indent:20px;
  margin-top:10px;
  letter-spacing:2px;
}
.a7{
  width: 100%;
}
.a7 img{
  height:80px;
  width:80px;  
  margin: 5px 3px 5px 1px;
  border-radius:25px;
}
</style>