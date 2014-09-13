var gulp = require('gulp')
var gutil = require('gulp-util')
var path = require('path')
var _ = require('lodash')
var async = require('async')
var rimraf = require('rimraf')

var NwBuilder = require('node-webkit-builder')
var ninjaConfig = require('./ninjaConfig.js')

gulp.task('build', ['cleanModules'], function(cb) {
	var nw = new NwBuilder(ninjaConfig)

	nw.on('log', gutil.log)

	return nw.build(cb)
})

gulp.task('run', function(cb) {

	if (!ninjaConfig.debug)
		ninjaConfig.argv.push('--debug=true')

	var nw = new NwBuilder(ninjaConfig)

	nw.on('log', gutil.log)
	
	return nw.run(cb)
})


gulp.task('cleanModules', function (cb) {
	var base = path.join(__dirname, ninjaConfig.appDir, 'node_modules')
	gutil.log('cleaning modules at: ' + base)
	
	var paths = [
		'.bin',
		// path.join('lodash', 'dist', 'lodash.compat.js'),
		// path.join('lodash', 'dist', 'lodash.compat.min.js'),
		// path.join('lodash', 'dist', 'lodash.min.js'),
		// path.join('lodash', 'dist', 'lodash.underscore.js'),
		// path.join('lodash', 'dist', 'lodash.underscore.min.js'),
		path.join('minimist', 'example'),
		path.join('minimist', 'test'),
		path.join('minimist', 'example')
	]

	paths = _.map(paths, function(e) {
		return path.join(base, e)
	})

	gutil.log('deleting the following:')
	gutil.log(paths)

	return async.each(paths, rimraf, cb)
})
