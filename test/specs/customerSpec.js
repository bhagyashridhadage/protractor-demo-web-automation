let reusable = require('../reusable/reusable.js');
let cstmrpg = require('../pageObject/customerPage.js');
let homepg = require('../pageObject/homePage.js');

describe("Customer", function () {

    it("Should be able to Login", function () {
        reusable.customerLogin();
        expect(element(by.cssContainingText('.fontBig', 'Harry Potter')).isPresent()).toBe(true);;
    });

    it("Should be able to deposit amount", function () {
        reusable.customerLogin();
        reusable.clickByBtnName('Deposit');
        cstmrpg.enterAmount();
        cstmrpg.submitAmount();
        expect(element(by.css('[ng-show="message"]')).getText()).toEqual('Deposit Successful');
    });

    it("Should be able to withdraw amount", function () {
        reusable.customerLogin();
        reusable.clickByBtnName('Withdrawl');
        browser.sleep(1000);
        cstmrpg.enterAmount();
        reusable.clickByBtnName('Withdraw');
        expect(element(by.css('[ng-show="message"]')).isPresent()).toBe(true);
    });




});