export default  {
  // mutations 里面的事情 最好是 单一的， 不要执行很多步骤 
  // 如果执行很多  应该在 actions 里面执行
  addCount(state, payload){
    payload.count ++;
  },
  addPro(state, payload){
    payload.isCancel = false;  // 加上状态信息 是否取消
    payload.indexId = state.nowCartProduct  ? state.nowCartProduct.length : 0;
    state.nowCartProduct.push(payload)
  },
  SwicthActive(state, payload){
    state.nowCartProduct[payload].isCancel = ! state.nowCartProduct[payload].isCancel;
  },
  delProduct(state, payload){
    state.nowCartProduct.splice(payload, 1);
  },
  switchAll(state){
    // 全选切换 二种情况 默认 isCancel = false 
    const oldState = state.nowCartProduct.filter(item => {
      return item.isCancel === true;
    }).length;
    if (oldState){
      state.nowCartProduct.map((item) => {
        return item.isCancel = false;
      })
    }else{
      state.nowCartProduct.map((item) => {
        return item.isCancel = true;
      })
    }      
  }
}