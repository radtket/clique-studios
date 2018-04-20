const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const del = require('del');
const sequence = require('run-sequence');
const htmlMin = require('gulp-htmlmin');

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
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 3 versions'],
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css/'))
    .pipe(browserSync.stream())
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

gulp.task('img', () =>
  gulp
    .src('src/assets/**/*.{jpg,jpeg,png,gif}')
    .pipe(changed('docs/assets/'))
    .pipe(imagemin())
    .pipe(gulp.dest('docs/assets/'))
);

gulp.task('html', () =>
  gulp
    .src('src/*.html')
    .pipe(
      htmlMin({
        sortAttributes: true,
        sortClassName: true,
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest('docs/'))
);

gulp.task('clean', () => del(['docs/']));

gulp.task('build', () => {
  sequence('clean', ['html', 'js', 'img']);
});

gulp.task('default', ['serve']);
