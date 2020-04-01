"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const ptor_1 = require("protractor/built/ptor");
var expect = chai_1.default.expect;
const EC = ptor_1.protractor.ExpectedConditions;
describe('Test Case: SampleTest', function () {
    //var emailString = 'newyutx+' + CommonUtils.getRandomString(6) + '@gmail.com';
    beforeEach(function () {
        protractor_1.browser.ignoreSynchronization = true;
    });
    describe('Test Step ID: 1', function () {
        it('Navigate to URL', function () {
            protractor_1.browser.get('');
            protractor_1.browser.getTitle().then(function (value) {
                //expect(value).toBe('LibreView');
            });
            //CommonUtils.waitUntilElementAppears(TestPage.getCountryDropdown());
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3BlY3MvdGVzdC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsMkNBQWtEO0FBRWxELGdEQUF3QjtBQUN4QixnREFBbUQ7QUFDbkQsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixNQUFNLEVBQUUsR0FBRyxpQkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBR3pDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTtJQUM5QiwrRUFBK0U7SUFDL0UsVUFBVSxDQUFDO1FBQ1Asb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7SUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsaUJBQWlCLEVBQUU7UUFDeEIsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1lBQ2xCLG9CQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztnQkFDbkMsa0NBQWtDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1lBQ0gscUVBQXFFO1FBQ3pFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9