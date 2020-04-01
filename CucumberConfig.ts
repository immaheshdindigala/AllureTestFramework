import { Config, browser } from 'protractor';
require('jasmine');
export let config: Config = {
    // set to "custom" instead of cucumber.
    framework: 'jasmine',
    // path relative to the current config file
    //frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true,
    multiCapabilities: [
        {
            'browserName': 'chrome',
            metadata: {
                browser: {
                    name: 'Google Chrome 80'
                },
                device: 'Virtual Machine',
                platform: {
                    name: 'Windows',
                    version: '10'
                }
            },
        },
    ],

    specs: ['../FeatureFiles/*.feature'],
    cucumberOpts: {
        format: "json:./cucumberreport.json",
        strict: true,
        require: [
            './StepDefinitions/*.js' // accepts a glob
        ]
    },
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            // read the options part for more options
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: false,
            removeOriginalJsonReportFile: false,
            pageTitle: "JIVA ATWoods Automation Test Report",
            reportName: "JIVA : ATWoods Application",
            displayDuration: true,
            durationInMS: true,
            openReportInBrowser: true

        }
    }],

    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
    },
    
    onPrepare: async ()=> {
       //await browser.waitForAngularEnabled(true);
        browser.ignoreSynchronization = await true;
       await browser.manage().window().maximize();
    },

    // mochaOpts: {
    //     reporter: 'mocha-tesults-reporter',
    //     slow: 3000,
    //     reporterOptions: {
    //       'tesults-target': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVlZDBkMWUxLTZiMGUtNDc2Zi1hNzJlLWFiMTFiYzlhMTYxZS0xNTg1NjM5OTExODc4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNDBiMDFjNTMtZjY0OC00MTM0LTk5ODUtZGIxNzVkYzM3NThkIiwidHlwZSI6InQifQ.0k1rfJPtGkqAfYPDzoLSnk3RyJwWLdyHfc944XxD6jw',
    //       'tesults-config': '../config.js',
    //       'tesults-files': '../files',
    //       'tesults-build-name': '1.0.0',
    //       'tesults-build-description': 'build description',
    //       'tesults-build-reason': 'build failure reason (if failed)',
    //       'tesults-build-result': 'pass'
    //     }
    //   },
    //   afterLaunch: function (exitCode) {
    //     return new Promise(function (resolve) {});
    //   }
};