var gulp = require('gulp')

/*
 *	build the application into the build dir for the specified platforms
 */
gulp.task('build', ['preBuildClean'], require('./task/build.js'))

/*
 *	Launch the application. Unless otherwise specified the application with launch in debugMode
 */
gulp.task('run', require('./task/run.js'))

/*
 *	clean all the files listed in preBuildCleanList.json. This task is normally run before the build task
 */
gulp.task('preBuildClean', require('./task/preBuildClean.js'))
