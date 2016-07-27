var NwBuilder = require('nw-builder')
var ninjaConfig = require('../ninjaConfig.js')
var gutil = require('gulp-util')
var inspect = require('util').inspect

module.exports = function(cb) {

	if (!ninjaConfig.debug) {
		ninjaConfig.argv.push('--debug=true')
	}

	var nw = new NwBuilder(ninjaConfig)

	nw.on('log', gutil.log)

	nw.run(function (hasError, error) {
		if (hasError) return cb(error)

		cb()
	})

	return nw
}