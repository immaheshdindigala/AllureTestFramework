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
    capabilities: {
        'browserName': 'chrome',
    },
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
    reporters: ['allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results1',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: false
        }
    },
    // // ...
    // reporters: [['allure', {
    //     outputDir: 'allure-results1',
    //     disableWebdriverStepsReporting: true,
    //     disableWebdriverScreenshotsReporting: true,
    // }]],
    // // ...
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlEQUFpRDs7QUFFakQsMkNBQXFDO0FBR3JDLElBQUksc0JBQXNCLEdBQUcsT0FBTyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDaEYsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNuQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RFLElBQUksa0JBQWtCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQztJQUNuRCxrREFBa0Q7SUFDakQsc0JBQXNCLEVBQUUsS0FBSztDQUM5QixDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ2YsU0FBUyxFQUFFLFVBQVU7SUFDckIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixXQUFXLEVBQUUsVUFBVTtJQUV2QixhQUFhLEVBQUUsSUFBSTtJQUNuQix3QkFBd0IsRUFBRSxJQUFJO0lBQzlCLFlBQVksRUFBRTtRQUVaLGFBQWEsRUFBRSxRQUFRO0tBRTFCO0lBRUMsbUVBQW1FO0lBQ25FLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixNQUFNLEVBQUU7UUFDTiw0QkFBNEI7UUFDNUIsUUFBUSxFQUFFLHNCQUFzQjtLQUVqQztJQUNELE9BQU8sRUFBRSwwQkFBMEI7SUFFbkMsU0FBUyxFQUFFO1FBRVQscUNBQXFDO1FBQ3JDLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDcEQsSUFBSSxhQUFhLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN4RCxRQUFRLEVBQUUsU0FBUyxHQUFHLFFBQVE7WUFDOUIsY0FBYyxFQUFFLElBQUk7WUFDcEIsVUFBVSxFQUFFLGNBQWMsR0FBRyxHQUFHLEdBQUcsSUFBSTtTQUN4QyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTVDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUVqRCx5Q0FBeUM7UUFDekMsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxZQUFZLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUUsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVyQyxlQUFlO1FBQ2YsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGNBQWMsQ0FBQztZQUM1QyxVQUFVLEVBQUUsZ0JBQWdCO1NBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUosT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUk7WUFDdkMsb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO2dCQUN6Qyw4REFBOEQ7Z0JBQzlELHFDQUFxQztnQkFDckMscUJBQXFCO2dCQUNyQixJQUFJLEVBQUUsQ0FBQztZQUNULENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQ25CLGVBQWUsRUFBRTtRQUNiLE1BQU0sRUFBRTtZQUNKLFNBQVMsRUFBRSxpQkFBaUI7WUFDNUIsOEJBQThCLEVBQUUsS0FBSztZQUNyQyxvQ0FBb0MsRUFBRSxLQUFLO1lBQzNDLHVCQUF1QixFQUFFLEtBQUs7U0FDakM7S0FDSjtJQUNELFNBQVM7SUFDVCwyQkFBMkI7SUFDM0Isb0NBQW9DO0lBQ3BDLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsT0FBTztJQUNQLFNBQVM7SUFHWCx5Q0FBeUM7SUFDekMsWUFBWSxFQUFFO1FBQ1osT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNO1lBQzFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBMEM7SUFDNUMsdUNBQXVDO0lBQ3ZDLDhDQUE4QztJQUM5QyxzRUFBc0U7SUFDdEUsVUFBVTtJQUNWLE9BQU87SUFDTCxlQUFlLEVBQUU7UUFDZixTQUFTLEVBQUUsSUFBSTtRQUNmLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGlCQUFpQixFQUFFLElBQUk7UUFDdkIsc0JBQXNCLEVBQUUsT0FBTztLQUNoQztDQUNGLENBQUMifQ==