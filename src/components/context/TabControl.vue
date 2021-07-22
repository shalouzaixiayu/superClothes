<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="item in title" :key="item.id"
      :class="{active:currentIndex === item.id}"
      @click="tabClick(item.id)">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:1
    }
  },
  methods:{
    tabClick(index){
      this.currentIndex = index;
      this.$emit('tabClick', [index]);
    }
  }
}
</script>
<style>
.tab-control{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color:#fff;
  font-size: 12px;
}
.tab-control-item{
  flex:1;
}
.active span{
  padding:4px;
  color:var(--color-high-text);
  border-bottom:2px solid var(--color-tint);
}
</style>