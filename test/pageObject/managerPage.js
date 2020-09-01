let reusable = require('../reusable/reusable.js');

let managerPage = function () {


    this.addCustomer = function () {
        reusable.clickByBtnName('Add Customer');
    }

    this.openAccount = function () {
        reusable.clickByBtnName('Open Account');
    }

    this.customers = function () {
        reusable.clickByBtnName('Customers');
    }

    let firstName = element(by.css('[placeholder="First Name"]'));

    this.enterFirstName = function () {
        firstName.sendKeys('Test');
    }

    let lastName = element(by.css('[placeholder="Last Name"]'));

    this.enterLastName = function () {
        lastName.sendKeys('Account');
    }

    let postCode = element(by.css('[placeholder="Post Code"]'));

    this.enterPostCode = function () {
        postCode.sendKeys('QWE123');
    }

    let addCustomerbtn = element(by.css('[class="marTop"]')).element(by.buttonText('Add Customer'));

    this.selectAddCustomer = function () {
        addCustomerbtn.click();
    }

    let cstmrName = element(by.model('custId')).element(by.cssContainingText('.ng-binding', 'Harry Potter'));

    this.cstmrName = function () {
        cstmrName.click();
    }

    let crncyName = element(by.model('currency')).element(by.css("option[value='Dollar']"));

    this.currencyName = function () {
        crncyName.click();
    }

    this.processBtn = function () {
        reusable.clickByBtnName('Process');
    }

    }
    module.exports = new managerPage();