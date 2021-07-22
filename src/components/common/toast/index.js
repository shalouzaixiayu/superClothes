import Toast from './Toast'
export default {
   // 创建组件构造器
  // const toastConstructor = Vue.extend(Toast)
  // // new的方式。根据组件构造器，可以创建一个组件对象
  // const toast = new toastConstructor()
  // // 将组件对象手动挂载到某一个元素上
  // toast.$mount(document.createElement('div'))
  // // toast.$el对应的就是DIV
  // document.body.appendChild(toast.$el)
  
  // Vue.config.globalProperties.$toast = toast
  // Vue.prototype.$toast = toast
  install: (app) => {
    // app.config.globalProperties.$translate = (key) => {
    //   return key.split('.')
    //     .reduce((o, i) => { if (o) return o[i] }, options)
    // }
    app.config.globalProperties.$toast = Toast;
    // app.provide('i18n', options)

    // app.directive('my-directive', {
    //   mounted (el, binding, vnode, oldVnode) {
    //     // some logic ...
    //   }
    // })

    console.log(app)
  }
}
 