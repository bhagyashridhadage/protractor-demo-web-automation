let reusable = require('../reusable/reusable.js');

let customerPage = function () {

    let userName = element(by.model('custId')).element(by.cssContainingText('.ng-binding', 'Harry Potter'));

    //let userName = element(by.model('custId')).element(by.cssContainingText('.ng-binding', "'"+ Username +"'""));

    this.userName = function () {
        userName.click();
    }

    let submit = element(by.buttonText('Login'));

    this.login = function () {
        submit.click();
    }

    let welcomeUsr = element(by.cssContainingText('.fontBig', 'Harry Potter'));
    
    this.verifyUser = function () {
        welcomeUsr.isPresent();
    }

    let amount = element(by.model('amount'));

    this.enterAmount = function(){
        amount.sendKeys('100');
    }

    let submitAmount = element(by.css('[type="submit"]'));

    this.submitAmount = function(){
        submitAmount.click();
    }

let alertMsg = element(by.css('[ng-show="message"]'));
    
    this.verifyMsg = function () {
        alertMsg.isPresent();
    }
    
}
module.exports = new customerPage();