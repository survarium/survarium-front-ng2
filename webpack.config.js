const helpers = require('./webpack.helpers');

const webpack           = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const poststylus        = require('poststylus');
const ENV               = process.env.ENV || 'development';

const ngPkg = require('@angular/common/package');

const metadata = {
	title      : 'Survarium stats',
	description: 'Статистика игроков, матчей, кланов Survarium. Стримы Survarium. Сообщения разработчиков Survarium.',
	baseUrl    : 'http://127.0.0.1:3000/',
	host       : '127.0.0.1',
	port       : 3000,
	ENV        : ENV,
	API_PATH   : process.env.API_PATH || 'https://survarium.pro/api',
	version    : helpers.version,
	updated    : helpers.updated,
    ngVersion  : ngPkg.version
};
/*
 * Config
 */
module.exports = {
	metadata: metadata,
	devtool : 'eval',
	debug   : true, // cache: false,
	entry: {
		'vendor': './app/vendor.ts',
		'main'  : './app/bootstrap.ts'
	},

	output: {
		path             : helpers.root('dist'),
		filename         : '[name].bundle.js',
		sourceMapFilename: '[name].bundle.map',
		chunkFilename    : '[id].chunk.js'
	},

	resolve: {
		// ensure loader extensions match
		extensions: helpers.prepend(['.ts', '.js', '.json', '.css', '.html', '.styl'])
	},

	module: {
		preLoaders: [],
		loaders   : [
			{
				test   : /\.ts$/,
				loader : 'ts-loader',
				exclude: [/\.(spec|e2e|async)\.ts$/]
			},
			{
				test  : /\.json$/,
				loader: 'json-loader'
			},
			{
				test  : /\.css$/,
				loader: 'raw-loader'
			},
			{
				test   : /\.html$/,
				loader : 'raw-loader!html-minify-loader',
				exclude: [helpers.root('app/index.html')]
			},
			{
				test: /\.styl$/,
				loader: 'raw-loader!stylus-loader'
			}
		]
	},

	plugins: [
		new webpack.ProvidePlugin({
			'Chart': 'chart.js'
		}),
		new webpack.optimize.OccurenceOrderPlugin(true),
		new webpack.optimize.CommonsChunkPlugin({
			name     : 'vendor',
			filename : 'vendor.bundle.js',
			minChunks: Infinity
		}), // static assets
		new CopyWebpackPlugin([{
			from: 'app/assets',
			to  : 'assets'
		}]), // generating html
		new HtmlWebpackPlugin(Object.assign({}, helpers.HtmlWebpackPluginParams, { minify: false })),
		new webpack.DefinePlugin({
			'process.env': {
				'ENV'     : JSON.stringify(metadata.ENV),
				'NODE_ENV': JSON.stringify(metadata.ENV),
				'API_PATH': JSON.stringify(metadata.API_PATH),
				'TITLE'   : JSON.stringify(metadata.title),
				'VERSION' : JSON.stringify(metadata.version),
				'UPDATED' : JSON.stringify(metadata.updated),
				'APP_DESCRIPTION': JSON.stringify(metadata.description),
				'NG_VERSION': JSON.stringify(metadata.ngVersion)
			}
		})],

	// Other module loader config
	tslint   : {
		emitErrors  : true,
		failOnHint  : false,
		resourcePath: 'app'
	},

	devServer: {
		port              : metadata.port,
		host              : metadata.host, // contentBase: 'src/',
        disableHostCheck: true,
		historyApiFallback: true,
		watchOptions      : {
			aggregateTimeout: 300,
			poll            : 1000
		},
		progress: true,
		colors: true
	},
	// we need this due to problems with es6-shim
	node     : {
		global        : 'window',
		progress      : false,
		crypto        : 'empty',
		module        : false,
		clearImmediate: false,
		setImmediate  : false
	},
	stylus: {
		use: [
			poststylus([ 'autoprefixer', 'rucksack-css' ])
		]
	},
	'html-minify-loader': {
		quotes: true,
		loose: true,
		dom: {
			lowerCaseAttributeNames: false
		}
	}
};
