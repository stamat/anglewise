'use strict';

var gulp = require('gulp');
var config = require('../config.js');
var asset_copy = require('../util/copy.js');

var preTasks = [
  'assets:copy',
  'sass',
  'bundle-scripts',
  'browserify:app',
  'browserify',
  //'webserver',
];

//Because Jun is still using this gulp-server, so let's make it configurable.
//If you do not need the server, please config env-config field "server" to false or just delete the field. Just like env-config.js.template
//Thanks
if(config.server){
  preTasks.push('webserver');
}

/**
 * Sets the watchers and starts webserver.
 * Intended for development.
 */
module.exports = gulp.task('develop', preTasks, function() {
  gulp.watch(config.sass.path, ['sass']);
  gulp.watch(config.js.path, ['browserify']);
  gulp.watch(config.app + '/**/*.html', ['browserify']);
  
  gulp.watch('./assets/images/**/*', function(obj){
      gulp.src( obj.path, { base: "./assets/images/"})
        .pipe(gulp.dest('./app/images'));
  });
  
  gulp.watch('./assets/fonts/**/*', function(obj){
      gulp.src( obj.path, { base: "./assets/fonts/"})
        .pipe(gulp.dest('./app/fonts'));
  });
});