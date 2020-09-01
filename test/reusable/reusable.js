let homepg = require('../pageObject/homePage.js');
//let reusable = require('../reusable/reusable.js');
let cstmrpg = require('../pageObject/customerPage.js');

var reusable = function () {
  
  this.get = function () {
   browser.get(browser.baseUrl);
  };

  this.clickByBtnName = function(btnName) {  
    this.btnName = btnName;
    let button = element(by.buttonText(btnName));
    button.click();
  }

  this.customerLogin = function () {
    this.get();
    homepg.customerLogin();
    cstmrpg.userName();
    cstmrpg.login();
  }
  
  this.managerLogin = function () {
    this.get();
    this.clickByBtnName('Bank Manager Login');
  }

  


};
module.exports = new reusable();

