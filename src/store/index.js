// Vuex config
import {createStore} from 'vuex'
import mutations from './mutations'
import actions from './actions'

const state =  {
  nowCartProduct: [], // 现在购物车产品
  nowSaveProduct: [], // 现在收藏夹产品  后面扩展
}

const store = createStore({
  state,
  mutations,
  actions,
})

export default  store
