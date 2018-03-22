'use strict';
var gulp = require('gulp');
var config = require('../config.js');
var dest_clean = require('../util/clean.js');

/**
 * and copy static assets to dist folder.
 */
module.exports = gulp.task('assets:copy', ['dest:clean'], function() {

  return gulp.src(
      config.copy
    , {base: config.assets}
  )
    .pipe(gulp.dest(config.app));
});
