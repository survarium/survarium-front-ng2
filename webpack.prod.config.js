var helpers = require('./webpack.helpers');
// Webpack Plugins
var webpack              = require('webpack');
var ProvidePlugin        = require('webpack/lib/ProvidePlugin');
var DefinePlugin         = require('webpack/lib/DefinePlugin');
var OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');
var DedupePlugin         = require('webpack/lib/optimize/DedupePlugin');
var UglifyJsPlugin       = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonsChunkPlugin   = require('webpack/lib/optimize/CommonsChunkPlugin');
var CompressionPlugin    = require('compression-webpack-plugin');
var CopyWebpackPlugin    = require('copy-webpack-plugin');
var HtmlWebpackPlugin    = require('html-webpack-plugin');
var WebpackMd5Hash       = require('webpack-md5-hash');
var poststylus           = require('poststylus');
var ENV                  = process.env.NODE_ENV = process.env.ENV = 'production';
var HOST = process.env.HOST || 'localhost';
var PORT = process.env.PORT || 8080;

var metadata = {
	title      : 'Survarium stats',
	description: 'Статистика игроков, матчей, кланов Survarium. Стримы Survarium. Сообщения разработчиков Survarium.',
	baseUrl    : 'https://survarium.pro/',
	host       : HOST,
	port       : PORT,
	ENV        : ENV,
	API_PATH   : process.env.API_PATH || 'https://survarium.pro/api',
	version    : helpers.version,
	updated    : helpers.updated
};

/*
 * Config
 */
module.exports = helpers.validate({
	// static data for index.html
	metadata: metadata,
	devtool : 'source-map',
	debug   : false,
	cache   : false,

	entry: {
		'vendor': './app/vendor.ts',
		'main'  : './app/bootstrap.ts' // our angular app
	},

	// Config for our build files
	output: {
		path             : helpers.root('dist_prod'),
		filename         : '[name].[chunkhash].bundle.js',
		sourceMapFilename: '[name].[chunkhash].bundle.map',
		chunkFilename    : '[id].[chunkhash].chunk.js'
	},

	resolve: {
		cache     : false,
		// ensure loader extensions match
		extensions: helpers.prepend(['.ts', '.js', '.json', '.css', '.html', '.styl'])
	},

	module: {
		/*preLoaders: [{
			test   : /\.ts$/,
			loader : 'tslint-loader',
			exclude: [root('node_modules')]
		}, {
			test   : /\.js$/,
			loader : "source-map-loader",
			exclude: [root('node_modules/rxjs')]
		}],*/
		loaders   : [
			{
				test   : /\.ts$/,
				loader : 'ts-loader',
				query  : {
					// remove TypeScript helpers to be injected below by DefinePlugin
					'compilerOptions': {
						'removeComments': true,
						'noEmitHelpers' : true
					}
				},
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
		//new WebpackMd5Hash(), // destroys app after angular2.rc-1
		new DedupePlugin(),
		new OccurenceOrderPlugin(true),
		new webpack.ProvidePlugin({
			'Chart': 'chart.js'
		}),
		new CommonsChunkPlugin({
			name    : 'vendor',
			filename: 'vendor.[chunkhash].bundle.js',
			chunks  : Infinity
		}),
		new CopyWebpackPlugin([{
			from: 'app/assets',
			to  : 'assets'
		}]),
		new HtmlWebpackPlugin(helpers.HtmlWebpackPluginParams),
		new DefinePlugin({
			// Environment helpers
			'process.env': {
				'ENV'     : JSON.stringify(metadata.ENV),
				'NODE_ENV': JSON.stringify(metadata.ENV),
				'API_PATH': JSON.stringify(metadata.API_PATH),
				'TITLE'   : JSON.stringify(metadata.title),
				'VERSION' : JSON.stringify(metadata.version),
				'UPDATED' : JSON.stringify(metadata.updated),
				'APP_DESCRIPTION': JSON.stringify(metadata.description)
			}
		}),
		new ProvidePlugin({
			// TypeScript helpers
			'__metadata': 'ts-helper/metadata',
			'__decorate': 'ts-helper/decorate',
			'__awaiter' : 'ts-helper/awaiter',
			'__extends' : 'ts-helper/extends',
			'__param'   : 'ts-helper/param'
		}),
		new UglifyJsPlugin({
			// to debug prod builds uncomment //debug lines and comment //prod lines

			// beautify: true,//debug
			// mangle: false,//debug
			// dead_code: false,//debug
			// unused: false,//debug
			// deadCode: false,//debug
			// compress : { screw_ie8 : true, keep_fnames: true, drop_debugger: false, dead_code: false, unused: false, }, // debug
			// comments: true,//debug

			beautify: false,
			mangle  : false,//{ screw_ie8 : true },
			compress: { screw_ie8: true },
			comments: false,
			sourceMap: false,
            exclude: [
                /\.js($|\?)/i,
                /^node_modules.*/
            ]
		}), // include uglify in production
		/*new CompressionPlugin({
			algorithm: helpers.gzipMaxLevel,
			regExp: /\.css$|\.html$|\.js$|\.map$|\.styl$/,
			threshold: 2 * 1024
		})*/
	], // Other module loader config
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
	},
	htmlLoader: {
		minimize: true,
		removeAttributeQuotes: false,
		caseSensitive: true,
		customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
		customAttrAssign: [ /\)?\]?=/ ]
	},
	// we need this due to problems with es6-shim
	node: {
		global        : 'window',
		progress      : false,
		crypto        : 'empty',
		module        : false,
		clearImmediate: false,
		setImmediate  : false
	}
});
