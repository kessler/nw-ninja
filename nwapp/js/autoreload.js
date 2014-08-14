var gulp = require('gulp')

gulp.task('reload', function () {
	if (location) location.reload()
})

gulp.watch('**/*', ['reload'])