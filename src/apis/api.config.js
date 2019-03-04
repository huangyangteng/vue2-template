//判断是否是生产环境
//webpack在开发环境和生产环境分别执行不同的js文件，process.env.NODE_ENV设置了不同的值，process.env.NODE_ENV在生产环境中值为'production'(这个值是在build/build.js中第4行设置的)
var isPro = process.env.NODE_ENV=== 'production'
// 如果是生产环境 我们在本机上使用nginx部署应用，端口为http://localhost:12345
module.exports = {
    baseUrl: isPro ? 'http://localhost:12345' : '/apis'
}
