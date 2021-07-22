<template>
  <div class="goodsInfos">
    <div class="desc">
      <span>{{ goodsInfos.desc }}</span>
    </div>
    <div class="kes">
      <span>{{ goodsInfos.kes }}</span>
    </div>
    <div class="list" v-for="item in goodsInfos.list" :key="item">
      <img :src="item" :alt="goodsInfos.kes" :title="goodsInfos.kes" @load="imgLoad"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfos: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data(){
    return{
      isCount:0, // 用来计算图片加载次数
    }
  },
  methods: {
    imgLoad(){
      if(++this.isCount === this.goodsInfos.list.length){
          this.$emit('imgLoad')
      }
    }
  }
};
</script>

<style scoped>
.goodsInfos {
  width: 100%;
}
.desc {
  padding: 20px;
  text-align: center;
  font-size: 14px;
  color: #a3a3a3;
  border-bottom: 1px solid;
}
.kes{
  text-align: center;
  margin: 40px;
  font-size: 16px;
  writing-mode: vertical-lr;
  letter-spacing: 10px;
  color: #a3a3a3;
}
.list img{
  width: 100%;
}
</style>