<template>
  <div class="bg">
    <img :src="bgImage" alt="" />
    <div class="info">
      <ul v-for="item in infoList" :key="item">
        <li v-for="(value, key) in item" :key="key">
          <span>{{ key }} : </span>
          <span>{{ value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeInfo",
  data() {
    return {
      bgImage: require("assets/image/me/girl.jpg"),
      infoList: [
        { username: "沙漏在下雨" },
        { msg: "道路太长，要学的永远也学不完 \n 兜兜转转几年载，却始终跌跌撞撞."},
        { learnTime: "3 Months" },
        { ProductTime: "1 Months" },
        { plugin: "Vue@3" },
        {collection: "Bilibili Collection"}
      ],
    };
  },
};
</script>

<style scoped>
.bg {
  height: calc(100vh - 93px);
  width: 100vw;
  position: relative;
}
.bg img {
  height: 100%;
  width: 100%;
  opacity: 0.6;
}
.info {
  position: absolute;
  top: 25%;
  left: 10%;
  right: 0;
  bottom: 40%;
}
.info ul{
  list-style: none;
  margin: 20px;
  font-size: 18px;
  color: #fff;
  opacity: .7;
}

</style>