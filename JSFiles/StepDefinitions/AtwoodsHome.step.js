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
const AtwoodsHome_po_1 = require("../Pageobjects/AtwoodsHome.po");
const chai_1 = __importDefault(require("chai"));
const ptor_1 = require("protractor/built/ptor");
var expect = chai_1.default.expect;
const EC = ptor_1.protractor.ExpectedConditions;
let AtwdsHm = new AtwoodsHome_po_1.AtwoodsHome();
cucumber_1.Given('I will be navigating to Atwoods {string} application', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(string);
}));
cucumber_1.Then('validate the Home page title {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.elementToBeClickable(AtwdsHm.getHomePageText));
    let text = yield AtwdsHm.getHomePageText.getAttribute('title');
    yield expect(text).to.equal('Atwoods Ranch & Home');
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR3b29kc0hvbWUuc3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBEZWZpbml0aW9ucy9BdHdvb2RzSG9tZS5zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDLDJDQUFrRDtBQUNsRCxrRUFBd0Q7QUFDeEQsZ0RBQXdCO0FBQ3hCLGdEQUFtRDtBQUNuRCxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLE1BQU0sRUFBRSxHQUFHLGlCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFekMsSUFBSSxPQUFPLEdBQUMsSUFBSSw0QkFBVyxFQUFFLENBQUE7QUFDNUIsZ0JBQUssQ0FBQyxzREFBc0QsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQzVFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyx1Q0FBdUMsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQzdELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ3BFLElBQUksSUFBSSxHQUFFLE1BQU0sT0FBTyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUQsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3JELENBQUMsQ0FBQSxDQUFDLENBQUMifQ==