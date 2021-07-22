<template>
  <div class="shop">
    <div class="head">
      <img :src="shopInfo.logo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="infoss">
      <div class="info-item1">
        <span>{{ shopFan }}</span>
        <span>{{ shopInfo.goods }}</span>
      </div>
      <div class="info-item2">
        <span>店铺粉丝</span>
        <span>全部宝贝</span>
      </div>
    </div>
    <div class="score">
      <ul>
          <li v-for="item in shopInfo.score" :key="item">
            <span class="name">{{item.name}}</span>
            <span class="point" :class="{high:item.isBetter}">{{item.score}}</span>
            <span class="better" :class="{betterHigh:item.isBetter}">
              <span v-if="item.isBetter">高</span>
              <span v-else>低</span>
            </span>
          </li>
      </ul>
    </div>

    <div class="clean">
      <div class="goShop">
        <a :href="shopInfo.url">
          <span>进店逛逛</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "DetailShop",
  data() {
    return {
      shopFans: 0,
    };
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    shopFan() {
      let value = this.shopInfo.fans;
      if (value <= 10000) {
        return value;
      } else {
        return (value / 10000).toFixed(2) + "万";
      }
    },
  },
};
</script>
<style>
.shop {
  border-bottom: 3px solid rgba(100, 100, 100, 0.1);
  border-top: 3px solid rgba(100, 100, 100, 0.1);
}
.head img {
  height: 50px;
  width: 50px;
  border: 1px solid rgba(100, 100, 100, 0.1);
  border-radius: 25px;
  margin: 10px 0px 0 20px;
}
.head span {
  font-size: 13px;
  font-weight: 600;
  position: relative;
  top: -20px;
  left: 10px;
  color: rgba(100, 100, 100, 0.8);
}
.infoss {
  width: 50%;
  border-right: 2px solid rgba(100, 100, 100, 0.1);
  float: left;
}
.info-item1,
.info-item2 {
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  margin-top: 8px;
}
.info-item1 span {
  flex: 1;
  font-weight: 500;
  font-size: 14px;
}
.info-item2 span {
  flex: 1;
  font-weight: 550;
  font-size: 12px;
  margin-bottom: 10px;
}
.score ul li{
  list-style: none;
}
.score .name{
  font-size:12px;
  padding-left:25px;
}
.point{
  font-size: 13px;
  margin: 0 5px 0 5px;
  color: orange;
  opacity: 0.6;
}
.better{
  font-size: 12px;
  color: #fff;
  opacity: 0.6;
  background-color:green;
}
.betterHigh{
  background-color:#f00;
}
.high{
  color:#f00;
  opacity:1;
}
.goShop{
  text-align: center;
  padding:30px;
}
.goShop span{
  background: rgba(100, 100, 100, 0.1);
  font-size: 14px;
  color:gray;
  padding:5px 30px 5px 30px;
  border-radius: 25px;
}
.clean{
  clear: both;
}

</style>