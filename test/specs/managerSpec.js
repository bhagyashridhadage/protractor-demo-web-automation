let reusable = require('../reusable/reusable.js');
let mngrPg = require('../pageObject/managerPage.js');

describe("Manager", function () {

    it("Should be able to Login", function () {
        reusable.managerLogin();
        expect(element(by.buttonText('Add Customer')).isPresent()).toBe(true);;
    });

    it("Should be able to Add Customer", function () {
        reusable.managerLogin();
        mngrPg.addCustomer();
        mngrPg.enterFirstName();
        mngrPg.enterLastName();
        mngrPg.enterPostCode();
        mngrPg.selectAddCustomer();

        let Alert = browser.switchTo().alert();
        browser.sleep(2000);

        expect(Alert.getText()).toContain('Customer added successfully with customer id');
        Alert.accept();
        browser.sleep(1000);
    });

    it("Should be able to open amount", function () {
        reusable.managerLogin();
        mngrPg.openAccount();
        mngrPg.cstmrName();
        mngrPg.currencyName();
        mngrPg.processBtn();
        browser.sleep(3000);

        let Alert = browser.switchTo().alert();
        browser.sleep(2000);

        expect(Alert.getText()).toContain('Account created successfully with account Number');
        Alert.accept();
        browser.sleep(1000);
    });




});