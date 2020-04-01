"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AngularHomePage {
    constructor() {
        this.getLatestAngulaJsLink = protractor_1.element(protractor_1.by.xpath('//a[text()="angular.io"]'));
        this.getSearchbox = protractor_1.element(protractor_1.by.xpath('//input[@type="search"]'));
        this.getGettingStartedLink = protractor_1.element(protractor_1.by.xpath('//a[text()="Get Started"]'));
        this.getWelcomeToAngularText = protractor_1.element(protractor_1.by.xpath('//p[text()="Welcome to Angular!"]'));
    }
}
exports.AngularHomePage = AngularHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ndWxhckhvbWVQYWdlLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZW9iamVjdHMvQW5ndWxhckhvbWVQYWdlLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsZUFBZTtJQU94QjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMscUJBQXFCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsdUJBQXVCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQTtJQUd2RixDQUFDO0NBQ0o7QUFmRCwwQ0FlQyJ9