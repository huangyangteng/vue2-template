'use strict'

/**
 * webpack-merge提供了一个合并函数,合并多个对象组成一个新对象
 * 文档：https://www.npmjs.com/package/webpack-merge
 * 在这里，将dev于prod进行合并
 */
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
