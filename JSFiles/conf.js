"use strict";
//require('./PageObjects/all-page-objects.po.js')
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
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
        { 'browserName': 'chrome' },
        { 'browserName': 'firefox' }
    ],
    // Spec patterns are relative to the current working directory when
    // Protractor is called.
    //  specs:[
    //   './Specs/NewYuPOC.spec.js',          
    //        ],
    suites: {
        // All: './Specs/*.spec.js',
        Positive: './Specs/Test.spec.js',
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
        protractor_1.browser.manage().window().maximize();
        //allure report
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            protractor_1.browser.takeScreenshot().then(function (png) {
                // AllureReporter.createAttachment('Screenshot', function () {
                //   return new Buffer(png, 'base64')
                // }, 'image/png')();
                done();
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlEQUFpRDs7QUFFakQsMkNBQXFDO0FBRXJDLElBQUksc0JBQXNCLEdBQUcsT0FBTyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDaEYsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNuQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RFLElBQUksa0JBQWtCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQztJQUNuRCxrREFBa0Q7SUFDakQsc0JBQXNCLEVBQUUsS0FBSztDQUM5QixDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ2YsU0FBUyxFQUFFLFVBQVU7SUFDckIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixXQUFXLEVBQUUsVUFBVTtJQUV2QixhQUFhLEVBQUUsSUFBSTtJQUNuQix3QkFBd0IsRUFBRSxJQUFJO0lBQzlCLGlCQUFpQixFQUFFO1FBRWpCLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQztRQUN6QixFQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUM7S0FDM0I7SUFFRCxtRUFBbUU7SUFDbkUsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLE1BQU0sRUFBRTtRQUNOLDRCQUE0QjtRQUM1QixRQUFRLEVBQUUsc0JBQXNCO0tBRWpDO0lBQ0QsT0FBTyxFQUFFLDBCQUEwQjtJQUVuQyxTQUFTLEVBQUU7UUFFVCxxQ0FBcUM7UUFDckMsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNwRCxJQUFJLGFBQWEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1lBQ3hELFFBQVEsRUFBRSxTQUFTLEdBQUcsUUFBUTtZQUM5QixjQUFjLEVBQUUsSUFBSTtZQUNwQixVQUFVLEVBQUUsY0FBYyxHQUFHLEdBQUcsR0FBRyxJQUFJO1NBQ3hDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFNUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRWpELHlDQUF5QztRQUN6QyxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDakUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1RSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXJDLGVBQWU7UUFDZixJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksY0FBYyxDQUFDO1lBQzVDLFVBQVUsRUFBRSxnQkFBZ0I7U0FDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSTtZQUN2QyxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ3pDLDhEQUE4RDtnQkFDOUQscUNBQXFDO2dCQUNyQyxxQkFBcUI7Z0JBQ3JCLElBQUksRUFBRSxDQUFDO1lBQ1QsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBeUM7SUFDekMsWUFBWSxFQUFFO1FBQ1osT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNO1lBQzFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBMEM7SUFDNUMsdUNBQXVDO0lBQ3ZDLDhDQUE4QztJQUM5QyxzRUFBc0U7SUFDdEUsVUFBVTtJQUNWLE9BQU87SUFDTCxlQUFlLEVBQUU7UUFDZixTQUFTLEVBQUUsSUFBSTtRQUNmLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGlCQUFpQixFQUFFLElBQUk7UUFDdkIsc0JBQXNCLEVBQUUsT0FBTztLQUNoQztDQUNGLENBQUMifQ==