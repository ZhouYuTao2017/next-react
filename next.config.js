
// 融合page
const withPlugins = require('next-compose-plugins');
// next插件
const nextPlugins=require('./next.plugins');

module.exports=withPlugins(nextPlugins,{
	distDir: 'dist'  // 定义构建目录,默认为.next
})