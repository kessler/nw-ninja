var gulp = require('gulp')
var gutil = require('gulp-util')
var path = require('path')
var NwBuilder = require('node-webkit-builder')
var logger = require('gulp-logger')

gulp.task('build', function() {
	var nw = new NwBuilder({
	    files: './nwapp/**/**', // use the glob format
	    platforms: [ 'osx', 'win' ],
	    buildDir: './dist',
	    buildType: 'versioned',
	    version: 'v0.10.2'
	})

	nw.on('log', gutil.log)

	return nw.build()
})

gulp.task('run', function(cb) {
	var nw = new NwBuilder({
	    files: './nwapp/**/**', // use the glob format
	    platforms: ['win','osx'],
	    buildDir: './dist',
	    buildType: 'versioned',
	    version: 'v0.10.2'
	})

	nw.on('log', gutil.log)

	return nw.run(cb)
})