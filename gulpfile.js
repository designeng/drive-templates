var gulp = require('gulp');
var wrap = require('gulp-wrap');
var handlebars = require('gulp-handlebars');

var buildTpl = function() {
    return wrap("module.exports = require('handlebars').template(<%= contents %>)");
}
 
gulp.task('build', function() {
    gulp.src('blocks/**/*.hbs')
        .pipe(handlebars({
            handlebars: require('handlebars')
        }))
        .pipe(buildTpl())
        .pipe(gulp.dest('build/'));
});

gulp.task('build:fixtures', function() {
    gulp.src('test/fixtures/**/*.hbs')
        .pipe(handlebars({
            handlebars: require('handlebars')
        }))
        .pipe(buildTpl())
        .pipe(gulp.dest('test/fixtures/build/'));
});