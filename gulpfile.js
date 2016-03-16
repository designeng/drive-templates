var gulp = require('gulp');
var wrap = require('gulp-wrap');
var handlebars = require('gulp-handlebars');
 
gulp.task('build', function() {
    gulp.src('blocks/**/*.hbs')
        .pipe(handlebars({
            handlebars: require('handlebars')
        }))
        .pipe(wrap('require(\'handlebars\').template(<%= contents %>)'))
        .pipe(gulp.dest('build/'));
});