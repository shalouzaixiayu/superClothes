// 防抖函数 减少事件的触发频率
export function unShake(foo, interval){
  let timer = false;
  return (...args)=>{
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      foo.apply(this, args)
    }, interval)
  }
}