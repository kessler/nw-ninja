var gulp = require('gulp')
var build = require('./task/build.js')
var preBuildClean = require('./task/preBuildClean.js')
var run = require('./task/run.js')

/*
 *	clean all the files listed in preBuildCleanList.json. This task is normally run before the build task
 */
gulp.task('preBuildClean', preBuildClean)

/*
 *	build the application into the build dir for the specified platforms
 */
gulp.task('build', gulp.series(gulp.parallel(preBuildClean), build))

/*
 *	Launch the application. Unless otherwise specified the application with launch in debugMode
 */
gulp.task('run', run)

gulp.task('default', run)