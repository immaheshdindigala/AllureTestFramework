"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class RobertaLogin {
    constructor() {
        this.getNewsLetterCloseButton = protractor_1.element(protractor_1.by.xpath("//*[@id='newsletter_pop_up']//span[@class='b-close']"));
        this.getSignInLink = protractor_1.element(protractor_1.by.xpath('//a[@href="https://www.robertasuniquegardens.com/customer/account/login/"]'));
        this.getEmail = protractor_1.element(protractor_1.by.id('email'));
        this.getPassword = protractor_1.element(protractor_1.by.id('pass'));
        this.getSignInButton = protractor_1.element(protractor_1.by.id('send2'));
        this.getMyAccountText = protractor_1.element(protractor_1.by.xpath('//*[@id="maincontent"]//span[text()="My Account"]'));
    }
}
exports.RobertaLogin = RobertaLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9iZXJ0YUxvZ2luLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZW9iamVjdHMvUm9iZXJ0YUxvZ2luLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsWUFBWTtJQVFyQjtRQUNJLElBQUksQ0FBQyx3QkFBd0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRFQUE0RSxDQUFDLENBQUMsQ0FBQztRQUNuSCxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUMsQ0FBQTtJQUdoRyxDQUFDO0NBQ0o7QUFsQkQsb0NBa0JDIn0=