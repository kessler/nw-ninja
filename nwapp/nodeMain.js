/*
	node-main code

	for stuff that persists beyond page scope

	communicate with page via window object
*/
var config = require('./lib/config.js')

module.exports.init = function (argv) {
	window.$appConfig = config.init(argv)
	
	window.console.log('node-main init()')
}