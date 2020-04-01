import { Given, Then } from "cucumber";
import { browser, element, by } from "protractor";
import{AtwoodsHome} from "../Pageobjects/AtwoodsHome.po"
import chai from "chai";
import { protractor } from "protractor/built/ptor";
var expect = chai.expect;

const EC = protractor.ExpectedConditions;

let AtwdsHm=new AtwoodsHome()
 Given('I will be navigating to Atwoods {string} application', async (string) => {
    await browser.get(string);
  });
  Then('validate the Home page title {string}', async (string) => {
    await browser.wait(EC.elementToBeClickable(AtwdsHm.getHomePageText))
    let text= await AtwdsHm.getHomePageText.getAttribute('title');
    await expect(text).to.equal('Atwoods Ranch & Home')
  });