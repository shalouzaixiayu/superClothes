<template>
  <div>
    <slider-show>
      <slider-show-item v-for="item in bannerList" :key="item">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="SlideLoad">
        </a>          
      </slider-show-item>
    </slider-show>
  </div>
</template>
<script>
// 导入轮播组件 进行封装
import {SliderShow, SliderShowItem} from 'components/common/slidershow/Slider.js'
export default {
  name:'HomeSlider',
  components:{
    SliderShow, SliderShowItem
    },
  props:{
    bannerList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      flag:false
    }
  },
  methods:{
    SlideLoad(){
      if(!this.flag){
        this.$emit('SlideLoad')
      }
        this.flag = true
    }
  },
}
</script>

<style>

</style>