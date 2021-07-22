<template>
  <div>
    <div class="info">
      <table class="infoTb">
        <tr><th class="tTitle">{{goodsParams.infoKey}}</th></tr>
        <tr v-for="item in goodsParams.infoSet"
          :key="item">
          <td>{{item.key + ':'}}</td>
          <td>{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class="rule">
        <tr><th>{{goodsParams.ruleKey}}</th></tr>
        <tr><th>{{goodsParams.ruleDes}}</th></tr>
       <table class="ruleTb" v-for="table in goodsParams.ruleTable"
       :key="table">
        <tr v-for="itemX in table"
          :key="itemX">
            <td v-for="itemY in itemX"
            :key="itemY">
            {{itemY}}
            </td>
          </tr>
        
      </table>
    </div> 

  </div>
</template>

<script>
export default {
  name:"DetailGoodsParams",
  props:{
    goodsParams:{
      type:Object,
      default(){
        return {};
      }
    }
  },
}
</script>

<style scoped>
.info, .rule{
  padding:20px;
}
/* .tTitle{
  font-size:15px;
  flex:1;
} */
.infoTb, .ruleTb{
 text-align: center;
 border-bottom: solid 1px gray;
 border-top: solid 1px gray;
 padding:20px;
}
.infoTb tr, .ruleTb tr{
  line-height: 30px;
}
.infoTb{
   border-left: solid 1px gray;
}
.ruleTb {
   border-right: solid 1px gray;
}
.ruleTb td{
  padding-left: 25px;
}
</style>