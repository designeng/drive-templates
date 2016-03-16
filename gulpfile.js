var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
 
gulp.task('build', function() {
    gulp.src('blocks/**/*.hbs')
        .pipe(handlebars())
        .pipe(gulp.dest('build/'));
});