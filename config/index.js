'use strict'
// config文件夹的作用是服务于build的，大部分是定义一个变量export出去
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  /**
   * 开发环境下的配置
   */
  dev: {


    assetsSubDirectory: 'static',// 子目录，一般存放静态文件
    assetsPublicPath: '/',//根目录
    proxyTable: {
      '/apis':{
        target:'http://118.24.85.97:22222',//后台地址 proxyTable  把/apis映射成target 即 /apis=http://118.24.85.97:22222
        changeOrigin:true,//是否跨域
        pathRewrite:{
          '^/apis':''
        }
      },
      // '/apis':{
      //   target:'http://localhost:22222',//后台地址 proxyTable  把/apis映射成target 即 /apis=http://118.24.85.97:22222
      //   changeOrigin:true,//是否跨域
      //   pathRewrite:{
      //     '^/apis':''
      //   }
      // }

    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,//输入npm run dev之后是否自动打开浏览器
    errorOverlay: true,//浏览器错误提示
    notifyOnErrors: true,//跨平台错误提示
    poll: false,//使用文件系统获取文件改动时是否通知devServer.watchOptions // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,//使缓存失效

    cssSourceMap: true//引入sourcemap,方便调试
  },
  /**
   * 生产环境配置
   */
  build: {
    // index.html编译后生成的位置和名字，可根据需要更改
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),//编译后存放代码的位置
    assetsSubDirectory: 'static',//静态文件夹名字
    assetsPublicPath: '/',//发布的根目录，通常本地打包dist后打开文件会报错，此处修改为./。如果是上线的文件，可根据文件存放位置进行更改路径

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 是否使用gzip压缩文件
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // 打包完成后启动一个服务器报告打包后文件的体积
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
