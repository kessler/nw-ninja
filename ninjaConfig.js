/*
	this config file is used to configure the nw-ninja envelope, not the app itself
*/
var rc = require('rc')

module.exports = rc('nw-ninja', {
	appDir: './nwapp',
	files: './nwapp/**/**', // use the glob format
    platforms: [ 'osx', 'win' ],
    buildDir: './dist',
    buildType: 'versioned',
    version: 'v0.10.2',
    argv: process.argv.slice(2)
})