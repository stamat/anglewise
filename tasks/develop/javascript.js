'use strict';
var gulp = require('gulp');

var bundleBrowserify = require('./browserify.js');
var templateCache = require('gulp-angular-templatecache');
var config = require('../config.js');
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
        //.pipe(uglify())
        .pipe(gulp.dest(dest));
        merged.add(stream);
  }

  return merged;
});


/**
 * Browserify task is dummy task serving only to call other
 * tasks that do actual compiling for both app and mobile pass reset page
 */
gulp.task('browserify', ['browserify:app']);

gulp.task('scriptsTemplatecache', function() {
    return gulp.src(config.html.path)
    .pipe(templateCache({
      standalone: true,
      module: 'anglewise.templates',
      filename: 'templates.js',
      moduleSystem: 'Browserify',
      transformUrl: function(url) {
        return 'scripts/' + url;
      }
    }))
    .pipe(gulp.dest(config.dest.js.path));
});

gulp.task('browserify:app', [
                             //'scriptsTemplatecache'
                             ], function() {
  return bundleBrowserify({
    entry: config.js.main,
    debug: true,
    outFileName: config.dest.js.name,
    dest: config.dest.js.path
  });
});
