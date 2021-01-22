const { Module } = require("webpack");

// 与parcel的不同, 配置繁琐
// npm run build webpack --mode=development
//一定会去根目录下去找到 webpack.config.js 配置文件
// module node 模块化 commonjs  module.exports
// import export  es6 export default npm install -D webpack-cli
module.exports = {
    entry:'./main.js',//入口
    output: {
        filename:'bundle.js'//出口
    }
}