//require('./PageObjects/all-page-objects.po.js')

import { browser } from "protractor";

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var d = new Date();
var time = d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds();
var screenshotReporter = new HtmlScreenshotReporter({
 // dest: path.join(__dirname, 'screenshotReport'),
  captureOnlyFailedSpecs: false
});

exports.config = {
  framework: 'jasmine2',
  allScriptsTimeout: 480000,
  rootElement: '[ng-app]',

  directConnect: true,
  ignoreUncaughtExceptions: true,
  multiCapabilities: [

    {'browserName': 'chrome'},
    {'browserName': 'firefox'}
  ],

  // Spec patterns are relative to the current working directory when
  // Protractor is called.
  //  specs:[
  //   './Specs/NewYuPOC.spec.js',          
  //        ],
  suites: {
    // All: './Specs/*.spec.js',
    Positive: './Specs/Test.spec.js',
    // Negative: './Specs/Test.spec.js',
  },
  baseUrl: 'https://www.atwoods.com/',

  onPrepare: function () {

    // Requiring jasmine reporters module
    var jasmineReporters = require('jasmine-reporters');
    var junitReporter = new jasmineReporters.JUnitXmlReporter({
      savePath: __dirname + '\\Logs',
      consolidateAll: true,
      filePrefix: 'junitresults' + '-' + time
    });
    jasmine.getEnv().addReporter(junitReporter);

    jasmine.getEnv().addReporter(screenshotReporter);

    // Add module to give more verbose output
    var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: true }));

    browser.manage().window().maximize();

    //allure report
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
    }));

    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        // AllureReporter.createAttachment('Screenshot', function () {
        //   return new Buffer(png, 'base64')
        // }, 'image/png')();
        done();
      })
    });
  },

  //Setup the report before any tests start
  beforeLaunch: function () {
    return new Promise(function (resolve, reject) {
      screenshotReporter.beforeLaunch(resolve);
    });
  },

  // Close the report after all tests finish
//   afterLaunch: function (exitCode) {
//     return new Promise(function (resolve) {
//       screenshotReporter.afterLaunch(resolve.bind(this, exitCode));
//     });
//   },
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 2000000,
  },
};
