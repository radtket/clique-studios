const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('reload', () => {
  browserSync.reload();
});

gulp.task('serve', ['js', 'sass'], () => {
  browserSync({
    server: 'src/',
  });
  gulp.watch('src/*.html', ['reload']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('sass', () =>
  gulp
    .src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css/'))
);

gulp.task('js', () =>
  gulp
    .src('src/js/site.js')
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['env'],
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/js/dist/'))
);

gulp.task('default', ['serve']);
