var path = require('path');
var zlib = require('zlib');
var validateWebpackConfig = require('webpack-validator');
var pkg = require('./package.json');

// Helper functions

var now = new Date();
var updated = now.getUTCFullYear() + '.' +
	(now.getUTCMonth() < 9 ? '0' + (now.getUTCMonth() + 1) : now.getUTCMonth()) + '.' +
	(now.getUTCDate() < 10 ? '0' + now.getUTCDate() : now.getUTCDate()) + ' ' +
	(now.getUTCHours() < 10 ? '0' + now.getUTCHours() : now.getUTCHours()) + ':' +
	(now.getUTCMinutes() < 10 ? '0' + now.getUTCMinutes() : now.getUTCMinutes()) + ' UTC';

exports.version = pkg.version;
exports.updated = updated;
exports.validateWebpackConfig = validateWebpackConfig;
exports.validate = validateWebpackConfig;

function gzipMaxLevel(buffer, callback) {
  return zlib['gzip'](buffer, {level: 9}, callback)
}
exports.gzipMaxLevel = gzipMaxLevel;

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
exports.root = root;

function rootNode(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}
exports.rootNode = rootNode;

function prependExt(extensions, args) {
  args = args || [];
  if (!Array.isArray(args)) { args = [args] }
  return extensions.reduce(function(memo, val) {
    return memo.concat(val, args.map(function(prefix) {
      return prefix + val
    }));
  }, ['']);
}
exports.prependExt = prependExt;
exports.prepend = prependExt;
exports.HtmlWebpackPluginParams = { template: 'app/index.html', inject: 'body', minify: { collapseWhitespace: true, minifyJS: true, removeComments: true, minifyCSS: true } };
