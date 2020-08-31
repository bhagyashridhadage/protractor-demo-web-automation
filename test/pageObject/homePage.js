let homePage = function(){

let customerLoginBtn = element(by.css('[ng-click="customer()"]'));

this.customerLogin = function(){
    customerLoginBtn.click();
}

let managerLoginBtn = element(by.css('[ng-click="manager()"]'));

this.managerLogin = function(){
    managerLoginBtn.click();
}
}
module.exports = new homePage();