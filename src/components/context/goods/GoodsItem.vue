<template>
  <!-- 一个个的商品 -->
  <div class="goods-item">
    <div @click="goDetail">
      <img :src="goodsItem.show.img" alt="" @load="imgLoad"/>
    <div class="info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ '￥' +goodsItem.price }}</span>
      <img src="~assets/image/common/love.png" alt="" />
      <span class="collage">{{ goodsItem.cfav }}</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods:{
    imgLoad(){
      // 更加路由的不同， 分别的来发送不同的load事件
      if(this.$route.path === '/home'){
        this.$bus.$emit('HomeImgLoad')
        // console.log('home load')
      }else if(this.$route.path === '/detail'){
        this.$bus.$emit('DetailImgLoad')
        // console.log('detail load')
      }else if(this.$route.path === '/class'){
        this.$bus.$emit('ClassImgLoad')
      }
    },
    goDetail(){
      this.$router.push({
        name:"Detail",
        query:{
          iid:this.goodsItem.iid
        }
      })
    }
  }
};
</script>

<style scoped>
.goods-item {
  width: 48%;
  padding: 2px;
}
.goods-item img {
  width: 100%;
  border-radius: 10px;
}
.info {
  font-size: 12px;
  text-align: center;
  margin-bottom: 1px;
}
.info p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
  margin-bottom: 4px;
}
.price {
  margin-right: 30px;
  color: var(--color-tint);
}
.info img {
  height: 12px;
  width: 12px;
  margin-right: 5px;
  padding-top:2px;
}
</style>