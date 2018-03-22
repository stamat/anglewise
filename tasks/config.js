var exportPath = './app';


var config = {
  root: './',
  app: './app',
  sass: {
    path: './app/sass/**/*.scss'
  },
  js: {
    path: './app/scripts/**/*.js',
    main: './app/scripts/index.js'
  },
  html: {
    path:'./app/scripts/**/*.html'
  },
  copy: [
    //'./assets/fonts/**/*',
    //'./assets/images/**/*'
  ],
  assets: './app',
  dest: {
    js: {
      path: './app/js',
      name: 'index.js'
    },
    sass: {
      path: './app/css'
    },
    copy: {
      dirs: [
        //'./app/fonts',
        //'./app/images'
      ],
      path: './app'
    }
  },
  server:false,
  //{
  //  port:8888,
  //  host:'localhost'
  //}
};
module.exports = config;
