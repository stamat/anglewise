/**
 * This gulpfile has been split according to
 * https://github.com/gulpjs/gulp/blob/master/docs/recipes/split-tasks-across-multiple-files.md
 */
var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('tasks/develop');
requireDir('tasks/build');

/**
 * This task gets executed when you execute `gulp`
 * from command line.
 */
var args   = require('yargs').argv;

var tasks;
if (args.env && (args.env === 'production' || args.env === 'test')){
    console.log('Production env, do build tasks.');
    tasks = ['build']
}else{
    tasks = ['develop']
}

if(args.export_path){
    console.log('Export to path:' + args.export_path);

    var validPathList = [
        'css/**/*', 'custom/**/*', 'fonts/**/*',
        'images/**/*', 'js/**/*', 'scripts/**/*',
        'index.html'
    ];
    for(var i in validPathList){
        validPathList[i] = './app/' + validPathList[i];
    }
    gulp.task('re-export', tasks, function(){
        gulp.src(
            validPathList
            , {base: './app'}
            )
            .pipe(gulp.dest(args.export_path, {overwrite: true}));
    });
    tasks = ['re-export'];

}

gulp.task('default', tasks);


