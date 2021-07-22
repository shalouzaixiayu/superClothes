<template>
  <div>
    <class-list>
      <class-list-item
       v-for="item in classList"
       :key="item" 
       :classItem="item"/>
    </class-list>
  </div>
</template>

<script>
import ClassList from 'components/context/classList/classList'
import ClassListItem from 'components/context/classList/classListItem'
export default {
  name:"ClassLeftList",
  components:{
    ClassList,
    ClassListItem,
  },
  props:{
    classList:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped lang>

</style>