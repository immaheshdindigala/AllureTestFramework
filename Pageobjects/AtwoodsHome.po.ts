import { ElementFinder, element, by } from "protractor";

export class AtwoodsHome {
    getHomePageText:ElementFinder

    constructor() {
        this.getHomePageText=element(by.xpath('//a[@title="Atwoods Ranch & Home"]'))


    }
}