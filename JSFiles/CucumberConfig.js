"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
require('jasmine');
exports.config = {
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
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        //await browser.waitForAngularEnabled(true);
        protractor_1.browser.ignoreSynchronization = yield true;
        yield protractor_1.browser.manage().window().maximize();
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9DdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE2QztBQUM3QyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDUixRQUFBLE1BQU0sR0FBVztJQUN4Qix1Q0FBdUM7SUFDdkMsU0FBUyxFQUFFLFNBQVM7SUFDcEIsMkNBQTJDO0lBQzNDLGtFQUFrRTtJQUNsRSxhQUFhLEVBQUUsSUFBSTtJQUNuQixpQkFBaUIsRUFBRTtRQUNmO1lBQ0ksYUFBYSxFQUFFLFFBQVE7WUFDdkIsUUFBUSxFQUFFO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxJQUFJLEVBQUUsa0JBQWtCO2lCQUMzQjtnQkFDRCxNQUFNLEVBQUUsaUJBQWlCO2dCQUN6QixRQUFRLEVBQUU7b0JBQ04sSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0o7U0FDSjtLQUNKO0lBRUQsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUM7SUFDcEMsWUFBWSxFQUFFO1FBQ1YsTUFBTSxFQUFFLDRCQUE0QjtRQUNwQyxNQUFNLEVBQUUsSUFBSTtRQUNaLE9BQU8sRUFBRTtZQUNMLHdCQUF3QixDQUFDLGlCQUFpQjtTQUM3QztLQUNKO0lBQ0QsT0FBTyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsbURBQW1EO1lBQzVELE9BQU8sRUFBRTtnQkFDTCx5Q0FBeUM7Z0JBQ3pDLDJCQUEyQixFQUFFLElBQUk7Z0JBQ2pDLDRCQUE0QixFQUFFLEtBQUs7Z0JBQ25DLDRCQUE0QixFQUFFLEtBQUs7Z0JBQ25DLFNBQVMsRUFBRSxxQ0FBcUM7Z0JBQ2hELFVBQVUsRUFBRSw0QkFBNEI7Z0JBQ3hDLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsbUJBQW1CLEVBQUUsSUFBSTthQUU1QjtTQUNKLENBQUM7SUFFRixlQUFlLEVBQUU7UUFDYixTQUFTLEVBQUUsSUFBSTtRQUNmLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGlCQUFpQixFQUFFLElBQUk7S0FDMUI7SUFFRCxTQUFTLEVBQUUsR0FBUSxFQUFFO1FBQ2xCLDRDQUE0QztRQUMzQyxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLE1BQU0sSUFBSSxDQUFDO1FBQzVDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QyxDQUFDLENBQUE7Q0FrQkosQ0FBQyJ9