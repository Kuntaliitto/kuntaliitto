var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    sassGlob = require('gulp-sass-glob'),
    browserSync = require('browser-sync').create();

var config = require('./config.json');

// Compile SCSS files to CSS.
gulp.task('styles', function() {
  gulp.src('sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass()
    .on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream())
});

// Watch SASS files for changes.
gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss',['styles']);
});

// Keep multiple browsers & devices in sync.
gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: config.browsersync.proxy,
    notify: false
  });
});

// Default task.
gulp.task('default', ['watch', 'browser-sync']);
