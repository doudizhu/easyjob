var gulp = require('gulp'),
	jade = require('gulp-jade'),
    uglify = require('gulp-uglify');


gulp.task('default',['monitor']);

gulp.task('jsmin',function(){
	return gulp
	       		.src('js/gg.js')
	            .pipe(uglify())
	            .pipe(gulp.dest('dist/'));
});

gulp.task('jade',function(){
	gulp
		.src('pages/*.jade')
		.pipe(jade({
			pretty:true
		}))
		.pipe(gulp.dest('../pro/page/'));
});

gulp.task('monitor',function(){
	gulp.watch('js/*.js',['jsmin']);
	gulp.watch('pages/*.jade',['jade']);
});