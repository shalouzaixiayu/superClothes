import {RequestAxios} from './index'

// http://152.136.185.210:7878/api/m5/subcategory?maitKey=3627
export function ClassRequest(){
  return RequestAxios({
    url:'/subcategory',
    params:{
      maitKey:3627
    }
  })
}
