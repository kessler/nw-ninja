var _argv
module.exports.init = function (argv) {
	_argv = argv
}

module.exports.get = function () {
	if (!_argv)
		throw new Error('not initialized')
	
	return _argv
}