var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = require('./webpack.client.js')
var hostname = process.env.HOSTNAME || 'localhost'
var port = 8080

config.cache   = true
config.debug   = true
config.devtool = 'cheap-module-eval-source-map'

config.entry.unshift(
	'webpack-dev-server/client?http://' + hostname + ':' + port,
	'webpack/hot/only-dev-server'
)

config.output.publicPath = 'http://' + hostname + ':' + port + '/'
config.output.hotUpdateMainFilename = 'update/[hash]/update.json'
config.output.hotUpdateChunkFilename = 'update/[hash]/[id].update.js'

config.plugins = [
  new CopyWebpackPlugin([{
    from: '../src/static',
    to: '../static'   // copy to dist/views
  }]),
	new webpack.DefinePlugin({ __CLIENT__: true, __SERVER__: false, __PRODUCTION__: false, __DEV__: true }),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('../static/[name].css')
]

config.module.postLoaders = [
	{test: /\.js$/, loaders: ['babel?cacheDirectory&presets[]=es2015&presets[]=stage-0&presets[]=react&presets[]=react-hmre'], exclude: /node_modules/}
]

config.devServer = {
	publicPath: config.output.publicPath,
	hot: true,
	inline: false,
	lazy: false,
	quiet: true,
	noInfo: true,
	headers: { 'Access-Control-Allow-Origin': '*' },
	stats: { colors: true },
	host: hostname
}

module.exports = config
