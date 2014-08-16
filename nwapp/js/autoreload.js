var gulp = require('gulp')

gulp.task('reload', function () {
	if (location) location.reload()
})

gulp.watch('**/*', ['reload'])
console.log('watching changes, page will reload automatically.')	