var gulp = require('gulp')
var gutil = require('gulp-util')
var path = require('path')
var NwBuilder = require('node-webkit-builder')
var config = require('./config.js')

gulp.task('build', function(cb) {
	var nw = new NwBuilder(config)

	nw.on('log', gutil.log)

	return nw.build(cb)
})

gulp.task('run', function(cb) {
	var nw = new NwBuilder(config)

	nw.on('log', gutil.log)

	return nw.run(cb)
})