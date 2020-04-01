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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const RobertaLogin_po_1 = require("../Pageobjects/RobertaLogin.po");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let RL = new RobertaLogin_po_1.RobertaLogin();
const EC = protractor_1.protractor.ExpectedConditions;
cucumber_1.Given('I will be navigating to Robertas {string} application', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(string);
    yield protractor_1.browser.wait(EC.elementToBeClickable(RL.getNewsLetterCloseButton));
    yield RL.getNewsLetterCloseButton.click();
}));
cucumber_1.When('I click on SignIn link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(RL.getSignInLink));
    yield RL.getSignInLink.click();
}));
cucumber_1.When('Enter User name as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(RL.getEmail));
    yield RL.getEmail.sendKeys(string);
}));
cucumber_1.When('Enter password as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(RL.getPassword));
    yield RL.getPassword.sendKeys(string);
}));
cucumber_1.When('Click on SignIn Button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(RL.getSignInButton));
    yield RL.getSignInButton.click();
}));
cucumber_1.Then('Validate My Account text as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(RL.getMyAccountText)).then(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield RL.getMyAccountText.getText().then(function (text) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield expect(text).to.equal(string);
                });
            });
        });
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9iZXJ0YV9Mb2dpbi5zdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluaXRpb25zL1JvYmVydGFfTG9naW4uc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBaUQ7QUFDakQsb0VBQThEO0FBQzlELGdEQUF3QjtBQUN4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksOEJBQVksRUFBRSxDQUFDO0FBQzVCLE1BQU0sRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFekMsZ0JBQUssQ0FBQyx1REFBdUQsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQzNFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUN6RSxNQUFNLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdCQUF3QixFQUFFLEdBQVEsRUFBRTtJQUNyQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUM5RCxNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ2hELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3pELE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQy9DLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzVELE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyx3QkFBd0IsRUFBRSxHQUFRLEVBQUU7SUFDckMsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDaEUsTUFBTSxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3JDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsc0NBQXNDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUMxRCxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7WUFDcEUsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLElBQUk7O29CQUMzRCxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2FBQUEsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==