import path from 'path';
import webpack from 'webpack';

export default {
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js'),
	],
	output: {
		path: '/',
		publicPath: '/'
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server/shared')
				],
				loaders: ['react-hot', 'babel']
			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
	node: {
		net: 'empty',
		dns: 'empty'
	}
}