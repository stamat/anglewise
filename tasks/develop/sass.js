'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var sourceMaps = require('gulp-sourcemaps');
var config = require('../config.js');

/**
 * Compiles sass files into css.
 */

module.exports = gulp.task('sass', function () {
  gulp.src(config.sass.path)
    .pipe(sourceMaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      loadPath: config.app,
      errLogToConsole: true
    }))
    .pipe(prefix('last 2 versions', 'ie 9'))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(config.dest.sass.path));
});