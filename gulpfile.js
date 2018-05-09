var gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  gulp.src('scss/**/*.scss')
        .pipe(sass({
          outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});
