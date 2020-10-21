module.exports = {
  outputDir: 'dist',  //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: true, //是否开启eslint
  publicPath: './', // 解决项目打包出现空白页问题
  devServer: {
    open: false, //是否自动弹出浏览器页面
    host: "localhost", 
    port: '8080', 
    https: false,  //是否使用https协议
    hotOnly: true, //是否开启热更新
    proxy: {
      '/api': {
        target: 'http://116.63.153.89:8090/cdadminapi', //API服务器的地址
        ws: true, //代理websockets
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: {  //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          '^/api': ''
        }
      }
    },
  },
}