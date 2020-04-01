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
const AngularHomePage_po_1 = require("../Pageobjects/AngularHomePage.po");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let oahp = new AngularHomePage_po_1.AngularHomePage();
const EC = protractor_1.protractor.ExpectedConditions;
cucumber_1.Given('I will be navigating to {string} application', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(string);
}));
cucumber_1.When('I click on latest angualr application link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(oahp.getLatestAngulaJsLink));
    yield oahp.getLatestAngulaJsLink.click();
}));
cucumber_1.Then('Enter text on Search box {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(oahp.getSearchbox)).then(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield oahp.getSearchbox.sendKeys(string);
        });
    });
}));
cucumber_1.When('Click on Getting Started hyperlink', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(oahp.getGettingStartedLink));
    yield oahp.getGettingStartedLink.click();
}));
cucumber_1.Then('Validate Text as  {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(oahp.getWelcomeToAngularText)).then(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield oahp.getWelcomeToAngularText.getText().then(function (text) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield expect(text).to.equal(string);
                });
            });
        });
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ndWxhckhvbWUuc3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBEZWZpbml0aW9ucy9Bbmd1bGFySG9tZS5zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFpRDtBQUNqRCwwRUFBbUU7QUFDbkUsZ0RBQXdCO0FBQ3hCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxvQ0FBZSxFQUFFLENBQUM7QUFDakMsTUFBTSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV6QyxnQkFBSyxDQUFDLDhDQUE4QyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDckUsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRDQUE0QyxFQUFFLEdBQVMsRUFBRTtJQUM1RCxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssRUFBRSxDQUFDO0FBRTNDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUNBQW1DLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUN6RCxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7O1lBQ2xFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsb0NBQW9DLEVBQUUsR0FBUyxFQUFFO0lBQ3BELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDeEUsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDM0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ2xELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztZQUM3RSxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZ0IsSUFBSTs7b0JBQ3BFLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7YUFBQSxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9