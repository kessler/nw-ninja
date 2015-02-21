var NwBuilder = require('node-webkit-builder')
var ninjaConfig = require('../ninjaConfig.js')
var gutil = require('gulp-util')

module.exports = function(cb) {

	if (!ninjaConfig.debug)
		ninjaConfig.argv.push('--debug=true')

	var nw = new NwBuilder(ninjaConfig)

	nw.on('log', gutil.log)
	
	return nw.run(cb)
}