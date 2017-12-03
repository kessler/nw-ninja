/*
	this config file is used to configure the nw-ninja envelope, not the app itself
*/
var rc = require('rc')

module.exports = rc('nw-ninja', {
	appDir: './nwapp',
	files: './nwapp/**/**', // use the glob format
	platforms: ['osx64', 'win32', 'win64', 'linux32', 'linux64'],
	buildDir: './dist',
	buildType: 'versioned',
	version: '0.26.6',
	argv: process.argv.slice(2)
})
