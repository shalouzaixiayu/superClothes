export default {
  addProduce(context, payload){
    // 进行id判断
    //  拿到的就是相同的产品
    let oldPro = context.state.nowCartProduct.find((item)=>{
      return item.iid === payload.iid
    })

    if(oldPro){
      context.commit('addCount', oldPro)
    }else{
      context.commit('addPro', payload)
    } 
  },
  ChangeActive(context, payload){
    // 先找到相同iid的商品
    let iidEqu = context.state.nowCartProduct.find((item) =>{
      return item.iid === payload;
    })

    if(iidEqu){
      // 修改商品的 isActive
      context.commit('SwicthActive', iidEqu)
    }
  }
}