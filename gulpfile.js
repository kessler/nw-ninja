var gulp = require('gulp')
var gutil = require('gulp-util')
var path = require('path')
var _ = require('lodash')
var async = require('async')
var rimraf = require('rimraf')
var preBuildCleanList = require('./preBuildCleanList.json')
var NwBuilder = require('node-webkit-builder')
var ninjaConfig = require('./ninjaConfig.js')

gulp.task('build', ['preBuildClean'], function(cb) {
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


gulp.task('preBuildClean', function (cb) {
	gutil.log('cleaning files before build...')
	
	var base = path.join(__dirname, ninjaConfig.appDir)
	
	preBuildCleanList = _.map(preBuildCleanList, function(e) {
		e.unshift(base)
		return path.join.apply(path, e)
	})

	gutil.log('deleting the following:')
	gutil.log(preBuildCleanList)
	
	return async.each(path, rimraf, cb)
})
