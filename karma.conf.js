// Karma configuration
// Generated on Tue Jan 13 2015 11:52:27 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'src/public/bower_components/angular/angular.js',
        'src/public/bower_components/angular-mocks/angular-mocks.js',
        'src/public/bower_components/angular-route/angular-route.js',
        'src/public/bower_components/angular-cookies/angular-cookies.js',
        'src/public/bower_components/angular-animate/angular-animate.js',
        'src/public/bower_components/ngUpload/ng-upload.js',
        'src/public/bower_components/Chart.js/Chart.js',
        'src/public/bower_components/angular-chart.js/angular-chart.js',
        'src/public/bower_components/angular-foundation/mm-foundation.js',
        'src/public/bower_components/angular-bindonce/bindonce.js',
        'src/public/bower_components/angular-spinner/angular-spinner.js',
        'src/public/bower_components/fastclick/lib/fastclick.js',
        'src/public/bower_components/moment/moment.js',
        'src/public/js/app.js',
        'src/public/js/controllers/*.js',
        'src/public/js/services/*.js',
        'src/public/js/directives/*.js',
        'src/public/test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,

    plugins: [
        'karma-chrome-launcher',
        'karma-jasmine'
    ],

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
