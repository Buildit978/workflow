var gulp = require('gulp'),
    gutil =  require('gulp-util'),
	coffee = require('gulp-coffee')
	concat = require("gulp-concat")
	compass = require("gulp-compass")
    browserify = require("gulp-browserify");
	
	var coffeeSource = ['components/coffee/tagline.coffee'];
	var jsSource = [
	'components/scripts/rclick.js',
	'components/scripts/pixgrid.js',
	'components/scripts/tagline.js',
	'components/scripts/template.js'];
	var sassSources = ['components/sass/style.scss'];

gulp.task('coffee', function(){
	gulp.src(coffeeSource)
		.pipe(coffee({bare: true})
		.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
	
});

gulp.task('js',function(){
	gulp.src(jsSource)
	.pipe(concat('script.js'))
	.pipe(browserify())
	.pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass',function(){
	gulp.src(sassSources)
	.pipe(compass({
		sass: 'components/sass',
		images: 'builds/development/images',
		style: 'expanded'
	}))
	.on('error', gutil.log)
	.pipe(gulp.dest('builds/development/css'))
});

gulp.task('default', ['coffee', 'js', 'compass']) 