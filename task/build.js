var gutil = require('gulp-util')
var NwBuilder = require('nw-builder')
var ninjaConfig = require('../ninjaConfig.js')

module.exports = function(cb) {
	var nw = new NwBuilder(ninjaConfig)

	nw.on('log', gutil.log)

	return nw.build(cb)
}