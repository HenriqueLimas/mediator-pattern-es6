var gulp = require('gulp');
var babel = require('gulp-6to5');

var del = require('del');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['clean'], function() {
	return gulp.src(['src/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', function(cb) {
	return del('dist', cb);
});
