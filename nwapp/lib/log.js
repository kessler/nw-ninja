var Logger = require('yalla').Logger
var LogLevel = require('yalla').LogLevel

var log = new Logger(LogLevel.DEBUG)
log.clearOutputs()

var consoleLogColoredOutput = {
	write: function(args) {
		console.log.apply(console, args)
	},
	prepare: function(level, label, args) {
		label = '%c ' + label

		var style = 'color: black'

		if (level === LogLevel.DEBUG) {
			style = 'color: green'
		}

		if (level === LogLevel.INFO) {
			style = 'color: blue'
		}

		if (level === LogLevel.WARN) {
			style = 'color: orange'
		}

		if (level === LogLevel.ERROR) {
			style = 'color: red'
		}

		args.splice(1, 0, style)

		return Logger.addLogLevelLabel(level, label, args)
	}
}

log.addOutput(consoleLogColoredOutput)

module.exports = log