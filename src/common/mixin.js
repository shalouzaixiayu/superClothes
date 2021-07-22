//  vue中高级的混入用法
import BackTo from "components/context/backTo/BackTo";
export const Backto = {
  components:{
    BackTo,
  },
  data(){
    return {
      isShowBackTo: false, // 是否显示
    }
  }
  // 方法暂时不引入 有区别
}