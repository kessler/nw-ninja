var gui = require('nw.gui')

process.mainModule.exports.init(gui.App.argv)

if ($appConfig.debug) {
	$t.injectScript('js/autoreload.js') 
}

// Get the current window
// var win = gui.Window.get()

// $(function () {

// 	$('#closeApp').click(function () {
// 		gui.App.quit()
// 	})

// 	$('#minApp').click(function () {
// 		win.minimize()
// 	})

// })