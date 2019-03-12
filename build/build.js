'use strict'
require('./check-versions')()//检查版本
/**
 * 该文件作用：构建生产版本
 */
process.env.NODE_ENV = 'production'//设置当前是生产环境

const ora = require('ora')//加载动画
const rm = require('rimraf')//删除文件
const path = require('path')
const chalk = require('chalk')//对文字输出的一个彩色设置
const webpack = require('webpack')
const config = require('../config')//默认读取下面的index.js文件
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('la la la building...')
spinner.start()//npm run build时显示的动画

// 先删除dist文件，再生产新文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  fuck! failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
