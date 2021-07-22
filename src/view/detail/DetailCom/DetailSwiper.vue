<template>
  <div>
    <slider-show class="topImage">
      <slider-show-item v-for="item in topImageList" :key="item">
        <img :src="item" :alt="iid" title="生活如此美好!" />
      </slider-show-item>
    </slider-show>
  </div>
</template>

<script>
// 导入轮播组件 进行封装
import {
  SliderShow,
  SliderShowItem,
} from "components/common/slidershow/Slider.js";
export default {
  name: "DetailSwiper",
  components: {
    SliderShow,
    SliderShowItem,
  },
  data() {
    return{
      iid:0
    }
  },
  props: {
    topImageList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.topImage {
  height: 300px;
  overflow: hidden;
}
</style>