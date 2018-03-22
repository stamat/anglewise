'use strict';

/**
 * First, we require all of our dependancies for build process.
 */
var gulp = require('gulp');
var debug = require('gulp-debug');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var rev = require('gulp-rev');
var rename = require('gulp-rename');
var preprocess = require('gulp-preprocess');
var webserver = require('gulp-webserver');
var asset_copy = require('../util/copy.js');
var config = require('../config.js');

/**
 * minify, rev and uglify javascript and css
 * Also, usemin replaces references to non-processed files with ones
 * that contain processed filename information.
 */
gulp.task('build:usemin', [
    'build:usemin-app'
]);

gulp.task('build:usemin-app', [
    'assets:copy',
    'sass:app:build',
    'browserify:build'
], function() {
    return gulp.src('dist/index.html')
        .pipe(usemin({
            css: [rev, cssmin],
            js: [rev, function () {
                return uglify({mangle: false});
            }],
        }))
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(gulp.dest(config.app));
});


gulp.task('build:make-html', ['build:usemin-app'], function() {
    return gulp.src('dist/index.html')
        .pipe(preprocess({context: {BUILD: true}}))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist/WEB-INF/views/'));
});

/**
 * build only, no packaging or deploy!
 */
gulp.task('build', [
    'build:usemin'
]);

//gulp.task('build:server', function() {
//  gulp.src('app')
//    .pipe(webserver({
//      port: 8000,
//      fallback: 'index.html'
//    }));
//});