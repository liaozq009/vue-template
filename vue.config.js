const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
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
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 这个是加上自己的路径,不能使用(如下:alias)中配置的别名路径
        resolve( "./src/style/theme.less"),
      ]
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'text-color': '#111',
            'blue': '#3eaf7c',
            'green': '#19e67c',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            // hack: `true; @import "${resolve( "./src/style/theme.less")}";`,
          },
        },
      },
    },
  },
}