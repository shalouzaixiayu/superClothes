import {RequestAxios} from './index';
export function RequestDetail(iid){
  return RequestAxios({
    url:'/detail',
    params: {iid}
  })
}

// 封装一个类的构造器
// export class Person {
//   constructor(P){
//     this.name = P.name;
//     this.id = P.id;
//     this.age = P.age;
//   }
// }

// const p = {
//   name: 'xiaohua',
//   id: 1,
//   age:14,
// }
// const xiaohua =  new Person(p);
// xiaohua.id