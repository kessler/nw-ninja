var rc = require('rc')
var packageJson = require('../package.json')
var minimist = require('minimist')
var gui = require('nw.gui')

window.$appConfig = rc(packageJson.name, {
	debug: true
}, minimist(gui.App.argv))