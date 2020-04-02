"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var log4js = require('log4js');
var params = process.argv;
var args = process.argv.slice(3);
exports.config = {
    //seleniumServerJar: './node_modules/gulp-protractor/node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar',
    directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 10000,
    framework: 'jasmine2',
    onPrepare: function () {
        return new Promise(function (fulfill, reject) {
            protractor_1.browser.getCapabilities().then(function (value) {
                let reportName = 'protractor-report-' + '_' + value.get('browserName') + '_' + Math.floor(Math.random() * 1E16);
                jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                    savePath: __dirname + '/target',
                    docTitle: 'Web UI Test Report',
                    screenshotsFolder: '/image',
                    //takeScreenshots: true,
                    takeScreenshotsOnlyOnFailures: true,
                    consolidate: true,
                    consolidateAll: true,
                    preserveDirectory: true,
                    //cleanDirectory: false,
                    //fixedScreenshotName: true,
                    fileName: "my-report.html",
                    fileNamePrefix: reportName
                }));
                fulfill();
            });
        });
    },
    afterLaunch: function afterLaunch() {
        var fs = require('fs');
        var output = '';
        fs.readdirSync('target/').forEach(function (file) {
            if (!(fs.lstatSync('target/' + file).isDirectory()))
                output = output + fs.readFileSync('target/' + file);
        });
        fs.writeFileSync('target/ConsolidatedReport.html', output, 'utf8');
    },
    suites: {
        // All: './Specs/*.spec.js',
        Positive: './Specs/Test.spec.js',
    },
    // suites:{
    //   example:['./test/e2e/specs/**/*Spec.js',]
    // },
    multiCapabilities: [
        {
            'browserName': 'chrome'
        },
        {
            'browserName': 'firefox'
        }
    ],
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 200000
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb25mMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUVyQyxJQUFJLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ3hFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQzFCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWpDLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDZiw2SEFBNkg7SUFDN0gsYUFBYSxFQUFFLElBQUk7SUFDbkIsa0RBQWtEO0lBQ2xELGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsU0FBUyxFQUFFLFVBQVU7SUFFckIsU0FBUyxFQUFFO1FBQ1QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO1lBQ3pDLG9CQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztnQkFDNUMsSUFBSSxVQUFVLEdBQUcsb0JBQW9CLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3RyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUMxQixJQUFJLG9CQUFvQixDQUFDO29CQUN2QixRQUFRLEVBQUUsU0FBUyxHQUFDLFNBQVM7b0JBQzdCLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLGlCQUFpQixFQUFFLFFBQVE7b0JBQzNCLHdCQUF3QjtvQkFDeEIsNkJBQTZCLEVBQUUsSUFBSTtvQkFDbkMsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLGNBQWMsRUFBRSxJQUFJO29CQUNwQixpQkFBaUIsRUFBRSxJQUFJO29CQUN2Qix3QkFBd0I7b0JBQ3hCLDRCQUE0QjtvQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsY0FBYyxFQUFFLFVBQVU7aUJBQzNCLENBQUMsQ0FDSCxDQUFDO2dCQUNGLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLEVBQUUsU0FBUyxXQUFXO1FBQy9CLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO1lBQzlDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNqRCxNQUFNLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQ0FBZ0MsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFckUsQ0FBQztJQUNELE1BQU0sRUFBRTtRQUNOLDRCQUE0QjtRQUM1QixRQUFRLEVBQUUsc0JBQXNCO0tBRWpDO0lBQ0QsV0FBVztJQUNYLDhDQUE4QztJQUM5QyxLQUFLO0lBRUwsaUJBQWlCLEVBQUU7UUFDakI7WUFDRSxhQUFhLEVBQUUsUUFBUTtTQUN4QjtRQUNEO1lBQ0UsYUFBYSxFQUFFLFNBQVM7U0FDekI7S0FDRjtJQUVELHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSTtRQUNoQixzQkFBc0IsRUFBRSxNQUFNO0tBQy9CO0NBQ0YsQ0FBQyJ9