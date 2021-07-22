module.exports = {
  configureWebpack:{
    resolve:{
      extensions:['.js', '.css', '.vue', '.html'],
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'view':'@/view'
      }
    }
  }
}
