var helpers = require('./webpack.helpers');

var path              = require('path');
var webpack           = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var poststylus        = require('poststylus');
var ENV               = process.env.ENV || 'development';

var metadata = {
	title      : 'Survarium stats',
	description: 'Players, matches, clans',
	baseUrl    : '/',
	host       : 'localhost',
	port       : 3000,
	ENV        : ENV,
	API_PATH   : process.env.API_PATH || 'https://survarium.pro/api',
	version    : helpers.version,
	updated    : helpers.updated
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
				loader : 'raw-loader',
				exclude: [root('app/index.html')]
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
		new HtmlWebpackPlugin({ template: 'app/index.html' }),
		new webpack.DefinePlugin({
			'process.env': {
				'ENV'     : JSON.stringify(metadata.ENV),
				'NODE_ENV': JSON.stringify(metadata.ENV),
				'API_PATH': JSON.stringify(metadata.API_PATH),
				'TITLE'   : JSON.stringify(metadata.title)
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
	}
};

// Helper functions

function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [__dirname].concat(args));
}

function prepend(extensions, args) {
	args = args || [];
	if (!Array.isArray(args)) {
		args = [args]
	}
	return extensions.reduce(function (memo, val) {
		return memo.concat(val, args.map(function (prefix) {
			return prefix + val
		}));
	}, ['']);
}
