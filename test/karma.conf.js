// Karma configuration
// Generated on 2016-02-22

module.exports = function (config) {
	'use strict';

	config.set({
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// base path, that will be used to resolve files and exclude
		basePath: '../',

		// testing framework to use (jasmine/mocha/qunit/...)
		// as well as any additional frameworks (requirejs/chai/sinon/...)
		frameworks: [
			'jasmine'
		],

		// list of files / patterns to load in the browser
		files: [
			// bower:js
			'bower_components/angular/angular.js',
			'bower_components/angular-animate/angular-animate.js',
			'bower_components/angular-cookies/angular-cookies.js',
			'bower_components/angular-messages/angular-messages.js',
			'bower_components/angular-resource/angular-resource.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-sanitize/angular-sanitize.js',
			'bower_components/angular-touch/angular-touch.js',
			'bower_components/angular-ui-router/release/angular-ui-router.js',
			'bower_components/underscore/underscore.js',
			'bower_components/angular-underscore-module/angular-underscore-module.js',
			'bower_components/re-tree/re-tree.js',
			'bower_components/ng-device-detector/ng-device-detector.js',
			'bower_components/angular-mocks/angular-mocks.js',
			// endbower
			'app/scripts/**/*.js',
			'app/views/**/*.html',
			'test/mock/**/*.js',
			'test/spec/**/*.js'
		],

		preprocessors: {
			'app/views/**/*.html': ['ng-html2js']
		},

		ngHtml2JsPreprocessor: {
			// strip this from the file path
			stripPrefix: 'app/'
		},
		//	stripSuffix: '.html',
		//	// prepend this to the
		//	prependPrefix: 'served/',
        //
		//	// or define a custom transform function
		//	// - cacheId returned is used to load template
		//	//   module(cacheId) will return template at filepath
		//	cacheIdFromPath: function(filepath) {
		//		// example strips 'public/' from anywhere in the path
		//		// module(app/templates/template.html) => app/public/templates/template.html
		//		var cacheId = filepath.strip('app/', '');
		//		return cacheId;
		//	},
        //
		//	// - setting this option will create only a single module that contains templates
		//	//   from all the files, so you can load them all with module('foo')
		//	// - you may provide a function(htmlPath, originalPath) instead of a string
		//	//   if you'd like to generate modules dynamically
		//	//   htmlPath is a originalPath stripped and/or prepended
		//	//   with all provided suffixes and prefixes
		//	moduleName: 'foo'
		//},

		// list of files / patterns to exclude
		exclude: [],

		// web server port
		port: 8080,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: [
			'PhantomJS'
			//'Chrome'
		],

		// Which plugins to enable
		plugins: [
			"karma-spec-reporter",
			//"karma-verbose-reporter",
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-ng-html2js-preprocessor'
		],

		reporters: ['spec'],

		specReporter: {
			maxLogLines: 5,         // limit number of lines logged per test
			suppressErrorSummary: true,  // do not print error summary
			suppressFailed: false,  // do not print information about failed tests
			suppressPassed: false,  // do not print information about passed tests
			suppressSkipped: true  // do not print information about skipped tests
		},

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false,

		colors: true,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO

		// Uncomment the following lines if you are using grunt's server to run the tests
		// proxies: {
		//   '/': 'http://localhost:9000/'
		// },
		// URL root prevent conflicts with the site root
		// urlRoot: '_karma_'
	});
};
