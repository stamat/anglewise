var manifest = {
  'jquery.js': {
    src: './bower_components/',
    dest: './app/js',
    files: [
        'modernizr/modernizr.js',
        'jquery/dist/jquery.js'
    ]
  },
  'plugins.js': {
    src: './bower_components/',
    dest: './app/js',
    files: [
        'icheck/icheck.min.js',
        'jquery-ui/jquery-ui.min.js',
        'select2/dist/js/select2.full.js'
    ]
  }
};
module.exports = manifest;
