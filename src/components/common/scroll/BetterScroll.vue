<template>
  <div class="wrapper">
    <div class="content">
      <!-- 预留的空间 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Movable from "@better-scroll/movable";
import PullDown from '@better-scroll/pull-down'
import Pullup from '@better-scroll/pull-up'
// import Zoom from "@better-scroll/zoom";
export default {
  name: "BetterScroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType:{
      // 是否实时监听
      type:Number,
      default:0
    }
  },
  mounted() {
    // 通过refs准确获取子组件或者元素
    BScroll.use(Movable)
    BScroll.use(PullDown)
    BScroll.use(Pullup)
    this.scroll = new BScroll('.wrapper', {
      probeType:this.probeType,
      pullDownRefresh: true,
      pullUpLoad:true,
      click: true,
      bindToTarget: true,
      scrollX: true,
      scrollY: true,
      freeScroll: true,
      bounce: true,
      movable: true, // for movable plugin
    });
    // 监听事件
    this.scroll.on('scroll', (position)=>{
      this.$emit('scrollContent', position)
    })
    // 下拉刷新
    this.scroll.on('pullingDown', ()=>{
      this.$emit('pullingDown')
      // 监听一次必须手动关闭 不然下次调用不成功
      this.scroll.finishPullDown()
    })
    // 上拉刷新
    this.scroll.on("pullingUp", ()=>{
      this.$emit('pullingUp')
      this.scroll.finishPullUp()
    })
  },
  methods: {
    // 向外暴露接口
    scrollTo(x, y, timer=300){
      this.scroll && this.scroll.scrollTo(x, y, timer)
    },
    // 刷新 重新计算高度
    refresh(){      
      this.scroll && this.scroll.refresh()
    },
    getScorllY(){
      return this.scroll ? this.scroll.y : 0
    }
  }
};
</script>

<style scoped>
</style>