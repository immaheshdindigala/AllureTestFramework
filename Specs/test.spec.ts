
import { browser, element, by } from "protractor";
import{AtwoodsHome} from "../Pageobjects/AtwoodsHome.po"
import chai from "chai";
import { protractor } from "protractor/built/ptor";
var expect = chai.expect;

const EC = protractor.ExpectedConditions;


describe('Test Case: SampleTest', function () {
    //var emailString = 'newyutx+' + CommonUtils.getRandomString(6) + '@gmail.com';
    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });
    describe('Test Step ID: 1', function () {
        it('Navigate to URL', function () {
            browser.get('');
            browser.getTitle().then(function (value) {
                //expect(value).toBe('LibreView');
            });
            //CommonUtils.waitUntilElementAppears(TestPage.getCountryDropdown());
        });
    });
});