#### Why do I make ?
- I Just want to learn how a project created .

#### How did I make it ?

##### Day-1:
  - Create the vue@3 project.
  - Dispatch the project demo.
  - Add my project link my Github.
      > git remote add  origin git@.......
  - Install the vue@3 plugin such as vue-router, vuex@next and axios.
  - Clone the common normalize of the Css, And config my project.
  
  **Now let's try !**


##### Day-2:
  - Config the base Css.
  - Set the vue alias(vue.config.js)
  - Add the editorconfig(.enditorconfig file)
  - Config the TabBar and the NavBar
  - Config the router and network of the axios 
  - Render the axios function of the request URL
  - Try to the test url and return the data of the home@vue in the vue@components-data.
  - About the vue@devtool install, I used to install the devtool, but i failed, today,
    I'm reading the blog, He let me to install a App named "谷歌上网助手", then I install 
    it and search the vue@devtool to add my plugin, Finally, I succeeded. 
    
##### Day-3:
  - SlideShow emm.. I have a little failure. 
  - HomeRecommend@vue is ok.
  - HomePopular@vue is ok.
  - TabControl@vue  is a banner, just send a title object.
  - position: sticky;  The css is amazing !
    .isFixed {
        /* 当滚动44px  定位就变成fixed */
        position: sticky;
        top: 44px;
      }

##### Day-4: 
  -  I think the SliderShow is important and must be understood.
  -  Goodslist to display !
  -  Look the better-scroll [better-scroll](https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md)
  -  About the home, I think we can finish it tomorrow !
  


##### Day-5:
  -  The Better-scorll plugin has a err, because of the scrollHeight computed error,
     if our image item running, The height is higher, so we should refresh the scrollHeight,
     but vue@3 remove the $bus and $on, we mush install other plugin, 
     [About the mitt, just the vue@2 $bus(eventBus)](https://www.cnblogs.com/sx00/p/13985486.html)
  -  事件总线改掉了， 通过事件总线实现更远的跨组件传播， 从而修复不能拖动的bug
  -  防抖函数， 处理调用频繁的代码
  -  状态栏的吸顶效果， 直接设置fixed样式不行， 用了第二个状态栏来显示隐藏
  -  滚动状态的保留， 用上了vue3的 keep-alive 改了很多
  -  修复了切换路由， wrapper的内容高度被更改200， 将绝对定位去除，重新计算了父容器的高度，
  
##### Day-6:
  - 首页结束， 但是轮播图的思想还是没理解，
  - 详情页 的轮播图， 商品信息 店铺信息，详情， 评论， 参数 完成，
  - 详情页加上了better-score  和 back-to
  - 详情页差滚动和状态栏联动效果未完成。
  - keep-alive 在vue3的用法还没了解

#### Day-7:
  -  时间戳格式化成为标准时间  new Data('时间戳')
  -  class of  custor.. 构造器
  -  相同部分的抽离， 高级混入 mixin:[] 
  
#### Day-8:
  - 关于购物车的设计全部结束.
  - 包括购物车的选择逻辑， 使用vuex作为一个全局管理系统
  - Toast 暂时使用了一个简单东西替换， 明天封装成组件，应用到多处，
  - 明天结束这个项目， 关于我的， 分类， 在后面进行扩展，将其搭建完整.

  
#### Day----
  - 终于把这些都搞完了， 
  - vue基础
  - vue复杂
  - vue@cli
  - vue@router
  - vue@vuex
  - axios
  - toast
  - better-scorll
  - 以及这个项目 superShop