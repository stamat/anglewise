/* global
   gulp: true
*/
'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
/**
 * Reusable browserify recipe
 *
 * @param opts {object}
 */
module.exports = function bundleBrowserify(opts) {
  var templateCache = require('gulp-angular-templatecache');

  var b = browserify({
    entries: opts.entry,
    debug: opts.debug,
  })
  .transform(babelify);

  return b.bundle()
    .pipe(source(opts.outFileName))
    .pipe(buffer())
    .pipe(sourcemaps.init({
      loadMaps: opts.debug
    }))
      .on('error', gutil.log)
    .pipe(sourcemaps.write())
    .pipe(uglify())
    .pipe(gulp.dest(opts.dest));
};