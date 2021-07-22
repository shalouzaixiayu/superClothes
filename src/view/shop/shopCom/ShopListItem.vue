<template>
  <!-- 每个小商品item -->
  <div class="sp-item">
    <div class="ltBtn"  @click="scClick">
      <is-check-btn :isCancel="isCancel"/>
    </div>
    <div class="sp-info">
      <div class="smallImg">
        <img :src="ItemProduct.image" alt="" />
      </div>
      <div class="text">
        <span class="name">{{ ItemProduct.name }}</span>
        <span class="des">{{ ItemProduct.des }}</span>
      </div>
      <div class="pc">
        <span class="price">{{'￥' +  ItemProduct.nowPrice }}</span>
        <span class="del" @click="delProduct">X</span>
        <!-- 删除购物车 -->
        <span class="count">{{ ItemProduct.count }}</span>
      </div> 
    </div>
  </div>
</template>

<script>
import IsCheckBtn from 'components/common/checkBtn/IsCheckBtn.vue'
export default {
  name: "ShopListItem",
  components:{
    IsCheckBtn
  },
  data(){
    return{
    }
  },
  props: {
    ItemProduct: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    isCancel(){
      return this.ItemProduct.isCancel;
    }
  },
  methods: {
    scClick(){
      this.$emit('scClick', this.ItemProduct.indexId)
    },
    delProduct(){
      // 删除产品
      this.$store.commit('delProduct', this.ItemProduct.indexId)
    }
  }
};
</script>

<style scoped>

.sp-item{
  border-bottom: 1px solid grey;
  position: relative;
}
.ltBtn{
  position: absolute;
  left:8px;
  top:60px;
}
.smallImg img {
  height: 140px;
  border-radius: 25px;
}
.sp-info {
  height: 158px;
  position: relative;
  left:30px;
  padding:10px;
}
.text{
  position: absolute;
  top:0px;
  left:100px;
  right:50px;
}
.text .name, .text .des{
  display: block;
  white-space:nowrap;
  text-overflow: ellipsis;
  overflow:hidden;
  margin: 20px 0px  0px 10px;
}
.text .name{
  font-weight: 650;
}
.pc{
  position: absolute;
  left:120px;
  right:50px;
  top:100px
}
.pc .price{
  color: var(--color-tint);
  margin: 0 20px  0 -10px;
}
.pc .count::before{
  content: 'x'; 
}
.pc .count {
  margin-bottom:20px;
  margin-left: 80px;
  font-size: 18px;
}
.del{
  color: var(--color-tint);
}
</style>