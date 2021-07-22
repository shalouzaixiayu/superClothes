<template>
  <div class="goods">
    <goods-item v-for="item in goodsType" :key="item" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  name:"Goods",
  components:{
    GoodsItem
  },
  props:{
    // 商品数量
    goodsType:{
      type:Array,
      default(){
        return []
      }
    } 
  },

}
</script>

<style scoped>
.goods{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding:2px;
  margin-top: 5px;

  /* 交叉轴单行排序 */
  align-items: center;
  /* 交叉轴多行排序 */
  align-content: center;
}
</style>