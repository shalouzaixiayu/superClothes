<template>
  <div class="detail-info">
    <p class="deTitle">{{ detailInfo.deTitle }}</p>
    <div class="price">
      <span class="nowPrice"><span class="lg">￥</span>{{detailInfo.lowNowPrice }}</span>
      <span class="oldPrice"><span class="lg">￥</span>{{detailInfo.lowPrice }}</span>
      <span class="discountDesc">{{ detailInfo.discountDesc }}</span>
    </div>
    <div>
      <ul class="columns">
        <li v-for="item in detailInfo.columns" :key="item">{{ item }}</li>
        <li>{{ detailInfo.sentTime }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail-info",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-info{
  padding: 5px;
}
.deTitle{
  font-weight: 600;
  font-size: 16px;
  text-indent: 10px;
  margin-top: 5px;
}
.price{
  margin-top: 10px;
  letter-spacing:0px;
  margin-bottom:10px;
}
.lg{
  position: relative;
  right: -4px;
}
.nowPrice{
  color: var(--color-tint);
  font-size: 20px;
}
.oldPrice{
  color:#d3d3d3;
  font-size:13px;
  text-decoration: line-through;
  margin-left: -3px;
}
.discountDesc{
  background-color: rgba(500, 100, 100, .8);
  color:#fff;
  border-radius:10px;
  border:1px solid;
  padding:2px;
  position: relative;
  top:-9px;
  margin-left:10px;
}
.columns{
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  text-align: center;
  margin-top:20px;
  padding-bottom:4px;
  color:gray;
}
.columns li {
  list-style: none;
  flex: 1;
}
</style>


 