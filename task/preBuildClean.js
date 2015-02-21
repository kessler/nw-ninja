var gutil = require('gulp-util')
var ninjaConfig = require('../ninjaConfig.js')
var async = require('async')
var _ = require('lodash')
var rimraf = require('rimraf')
var preBuildCleanList = require('../preBuildCleanList.json')
var path = require('path')

module.exports = function (cb) {
	gutil.log('cleaning files before build...')
	
	var base = path.resolve(__dirname, '..', ninjaConfig.appDir)
	
	preBuildCleanList = _.map(preBuildCleanList, function(e) {
		e.unshift(base)
		return path.join.apply(path, e)
	})

	gutil.log('deleting the following:')
	gutil.log(preBuildCleanList)
	
	return async.each(path, rimraf, cb)
}