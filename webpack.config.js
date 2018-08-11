const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isDev = true;
const devEnv = process.env.NODE_ENV;
const devEnvType = process.env.NODE_ENV_TYPE;
const isLocalBuild = process.env.isLocalBuild;
const CopyWebpackPlugin = require('copy-webpack-plugin');

let browserConfig = {
	devtool: isDev ? 'eval-source-map' : false,
	cache: true,
	stats: 'errors-only',
	entry: {
		scripts: [
			'./src/index.js'
		]
	},
	optimization: {
		splitChunks: {
			chunks: 'async',
			cacheGroups: {
				vendor: {
					name: 'vendor',
					minChunks: Infinity
				}
			}
		}
	},
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'src/[name].js',
		publicPath: isLocalBuild ? './' : '/'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				include: path.join(__dirname, './src'),
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: !isDev,
							removeComments: !isDev,
							collapseWhitespace: !isDev
						}
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								sourceMap: isDev,
								camelCase: true,
								minimize: !isDev,
								importLoaders: 1,
								localIdentName: '[local]',
								discardComments: {
									removeAll: true
								}
							}
						}
					]
				})
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								sourceMap: isDev,
								camelCase: true,
								minimize: !isDev,
								importLoaders: 1,
								localIdentName: '[local]',
								discardComments: {
									removeAll: true
								}
							}
						},
						{
							loader: 'sass-loader' // compiles Sass to CSS
						}		
					]
				})
			},
			{
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[ext]?[hash:8]'
						}
					}
				],
				include: path.resolve(__dirname, './src'),
				exclude: /img/
			},
			{
				test: /\.(jpe?g|png|gif|svg|ico)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]?[hash:8]'
						}
					}
				],
				include: path.resolve(__dirname, './src'),
				exclude: /css/
			}
		]
	},
	resolve: {
		alias: {
			'react': 'preact-compat',
			'react-dom': 'preact-compat',
			'react-addons-test-utils': 'preact-test-utils',
			'react-addons-css-transition-group': 'preact-css-transition-group'
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: devEnv === 'production' ? JSON.stringify('production') : JSON.stringify('development'),
				NODE_ENV_TYPE: devEnvType === 'production' ? JSON.stringify('production') : JSON.stringify('development'),
			},
			API_URL: JSON.stringify((isDev ? '' : '')),
			COOKIE_DOMAIN: JSON.stringify((isDev ? null : ''))
		}),
		new ExtractTextPlugin({
			filename: 'src/styles.css',
			allChunks: true,
			ignoreOrder: true
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
			title: 'Webpack Boilerplate',
			cache: !isDev,
			hash: false,
			filename: './index.html',
			inject: true,
			minify: {
				collapseWhitespace: !isDev
			}
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, '_redirects'),
				to: path.resolve(__dirname, 'public/_redirects'),
				toType: 'file'
			},
			{
				from: path.resolve(__dirname, 'src/img'),
				to: path.resolve(__dirname, 'public/img'),
				toType: 'dir'
			},
			// {
			// 	from: path.resolve(__dirname, 'src/service-worker.js'),
			// 	to: path.resolve(__dirname, 'public/service-worker.js'),
			// 	toType: 'file'
			// },
			{
				from: path.resolve(__dirname, 'src/manifest.json'),
				to: path.resolve(__dirname, 'public/manifest.json'),
				toType: 'file'
			}
		])
	]
};

if (isDev) {
	browserConfig.devServer = {
		contentBase: path.resolve(__dirname, './public'),
		historyApiFallback: true,
		inline: true,
		open: false,
		port: 3000
	};

	browserConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = browserConfig;
