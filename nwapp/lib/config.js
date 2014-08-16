var rc = require('rc')
var packageJson = require('../package.json')
var minimist = require('minimist')

var config

module.exports.init = function (argv) {

	config = rc(packageJson.name, {
		debug: false
	}, minimist(argv))

	return config
}

module.exports.get = function () {
	if (!config)
		throw new Error('config not initialized, call init() first')

	return config
}