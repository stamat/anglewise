'use strict';

var gulp = require('gulp');
var jscs = require('gulp-jscs');
var mkdir = require('mkdir-p');
var config = require('../config.js');

var bundleBrowserify = require('./browserify.js');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');

var manifest = require('../../manifest.js');

//build tasks from manifest
gulp.task('bundle-scripts', function(){
  var merged = merge();

  for (var k in manifest) {
        var m = manifest[k];
        var dest = m.dest;

        for (var i = 0; i < m.files.length; i++) {
            m.files[i] = m.src + m.files[i];
        }

        var stream = gulp.src(m.files)
        .pipe(concat(k))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
        merged.add(stream);
  }

  return merged;
});

/**
 * Browserify task is dummy task serving only to call other
 * tasks that do actual compiling for both app and mobile pass reset page
 */
gulp.task('browserify:build', ['browserify:app:build', 'bundle-scripts']);

gulp.task('browserify:app:build', ['scriptsTemplatecache'],
  function() {
    bundleBrowserify({
      entry: config.js.main,
      debug: false,
      outFileName: config.dest.js.name,
      dest: config.dest.js.path
    });
  });
