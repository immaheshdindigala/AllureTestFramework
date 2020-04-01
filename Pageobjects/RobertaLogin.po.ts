import { ElementFinder, element, by } from "protractor";

export class RobertaLogin {
    getNewsLetterCloseButton:ElementFinder;
    getSignInLink:ElementFinder;
    getEmail:ElementFinder;
    getPassword:ElementFinder;
    getSignInButton:ElementFinder;
    getMyAccountText:ElementFinder;

    constructor() {
        this.getNewsLetterCloseButton=element(by.xpath("//*[@id='newsletter_pop_up']//span[@class='b-close']"));
        this.getSignInLink=element(by.xpath('//a[@href="https://www.robertasuniquegardens.com/customer/account/login/"]'));
        this.getEmail=element(by.id('email'));
        this.getPassword=element(by.id('pass'));
        this.getSignInButton=element(by.id('send2'));
        this.getMyAccountText=element(by.xpath('//*[@id="maincontent"]//span[text()="My Account"]'))
        

    }
}