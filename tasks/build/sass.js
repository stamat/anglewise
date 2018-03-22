'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config.js');

gulp.task('build:sass', [
  'sass:app:build'
]);

/**
 * Compiles sass files into css.
 */

module.exports = gulp.task('sass:app:build', function() {
  gulp.src(config.sass.path).pipe(sass({
      outputStyle: 'compressed',
      loadPath: config.assets,
    }))
    .pipe(gulp.dest(config.dest.sass.path));
});
