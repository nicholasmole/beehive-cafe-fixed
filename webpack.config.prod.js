process.env.NODE_ENV = 'production';
process.env.NODE_ENV_TYPE = 'production';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Compress = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const MakeSourceMap = true;
const sourceMap = process.env.SOURCE_MAP === 'true';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isDebug = process.env.isDebug;

// the path(s) that should be cleaned
let pathsToClean = [
	'public/src'
];

// the clean options to use
let cleanOptions = {
	root: path.resolve(__dirname, './'),
	exclude: ['shared.js'],
	verbose: true,
	dry: false
};

let buildConfig = {
	devtool: sourceMap ? 'eval-source-map' : 'none',
	cache: false,
	stats: 'errors-only',
	entry: {
		vendor: [
			'babel-polyfill',
			'react',
			'react-dom'
		],
		scripts: [
			'./src/index.js'
		]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					parallel: 4,
					sourceMap: MakeSourceMap,
					comments: false,

					compress: {
						ie8: true, // eslint-disable-line
						warnings: false,
						unused: true,
						dead_code: true // eslint-disable-line
					},
					mangle: {
						ie8: true // eslint-disable-line
					},
					output: {
						comments: false,
						ie8: true // eslint-disable-line
					}
				}
			})
		],
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
		path: path.resolve(__dirname, 'public'),
		filename: 'src/[name].[chunkhash].js',
		publicPath: '/'
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
							minimize: true,
							removeComments: true,
							collapseWhitespace: true
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
								sourceMap: MakeSourceMap,
								camelCase: true,
								minimize: true,
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
				test: /\.scss|sass$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								sourceMap: MakeSourceMap,
								camelCase: true,
								minimize: true,
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
							name: 'fonts/[hash:8].[ext]'
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
							name: 'img/[hash:8].[ext]'
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
		new CleanWebpackPlugin(
			pathsToClean,
			cleanOptions
		),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new ExtractTextPlugin({
			filename: 'src/styles.[hash].css',
			allChunks: true,
			ignoreOrder: true
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				NODE_ENV_TYPE: JSON.stringify('production'),
				isDebug: isDebug ? JSON.stringify('isDebug') : JSON.stringify('notDebug')
			}
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
			title: 'Webpack Boilerplate',
			cache: false,
			hash: false,
			filename: './index.html',
			inject: true,
			minify: {
				collapseWhitespace: true
			}
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
		new Compress({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.scss$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
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
			{
				from: path.resolve(__dirname, 'src/font'),
				to: path.resolve(__dirname, 'public/font'),
				toType: 'dir'
			},
			{
				from: path.resolve(__dirname, 'src/service-worker.js'),
				to: path.resolve(__dirname, 'public/service-worker.js'),
				toType: 'file'
			},
			{
				from: path.resolve(__dirname, 'src/manifest.json'),
				to: path.resolve(__dirname, 'public/manifest.json'),
				toType: 'file'
			}

		])
	]
};

module.exports = buildConfig;
