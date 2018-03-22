'use strict';
var gulp = require('gulp');
var del = require('del');
var config = require('../config.js');
/**
 * and copy static assets to dist folder.
 */
module.exports = gulp.task('dest:clean', function() {
  del.sync([config.dest.js.path, config.dest.sass.path].concat(config.dest.copy.dirs));
});
