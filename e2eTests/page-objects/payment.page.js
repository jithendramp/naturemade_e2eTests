import Page from "../page-objects/page.js";
import testData from "../constants/testData.json";
import information from "./information.js";
import Home from "./home.page.js";


class payment extends Page {

creditCardOptions(index) {
    return $(`.radio__label.payment-method-wrapper .radio__label__accessory>ul>li:nth-child(${index})`)
}

get cardFldErrorMsg() {
    return $(".field__message.field__message--error");
}

get payNowBtn() {
    return $(".step__footer .shown-if-js button");
}

get orderNumber() {
    return $(".os-order-number");
}

get yourOrdrComfirmedTxt() {
    return $(".heading-2.os-step__title");
}

get contactInformtn() {
    return $(".content-box__row.content-box__row--no-border");
}

countryFldsOption(index) {
    return $(`.radio-group__row>div>div>div:nth-child(9) select option:nth-child(${index})`)
}


visaCardDetials() {
    const frameValue = browser.element('card-fields-iframe').value;
    browser.frame(frameValue);
    Home.browserMethod();
    information.creditCardFields(2).waitForVisible();
    information.creditCardFields(2).click();
    console.log("creditCardFields(2)")
    Home.browserMethod();
    information.creditCardFields(2).addValue("4111111111111111");
    information.creditCardFields(3).waitForVisible();
    information.creditCardFields(3).click();
    information.creditCardFields(3).addValue([testData.paymentPageDetails.cardName]);
    information.creditCardFields(4).waitForVisible();
    information.creditCardFields(4).click();
    Home.browserMethod();
    information.creditCardFields(4).addValue([testData.paymentPageDetails.expiryDate]);
    information.creditCardFields(5).waitForVisible();
    information.creditCardFields(5).click();
    information.creditCardFields(5).addValue([testData.paymentPageDetails.securityCode]);
}

masterCardDetails() {
    const frameValue = browser.element('card-fields-iframe').value;
    browser.frame(frameValue);
    Home.browserMethod();
    information.creditCardFields(2).waitForVisible();
    information.creditCardFields(2).click();
    Home.browserMethod();
    // browser.setValue('.section__content .card-fields-container--transitioned>div:nth-child(3)>div:nth-child(2) .card-fields-iframe',['5','5','5','5','5','5','5','5','5','5','5','5','4','4','4','4','ArrowDown','Enter']);    
    information.creditCardFields(2).addValue("5555555555554444");
    Home.browserMethod();
    information.creditCardFields(3).waitForVisible();
    information.creditCardFields(3).click();
    information.creditCardFields(3).addValue([testData.paymentPageDetails.mastercrdName]);
    information.creditCardFields(4).waitForVisible();
    information.creditCardFields(4).click();
    Home.browserMethod();
    information.creditCardFields(4).addValue([testData.paymentPageDetails.expiryDate]);
    information.creditCardFields(5).waitForVisible();
    information.creditCardFields(5).click();
    information.creditCardFields(5).addValue([testData.paymentPageDetails.amexSecurityCode]);
}

americanExpressCardDetails() {
    const frameValue = browser.element('card-fields-iframe').value;
    browser.frame(frameValue);
    Home.browserMethod();
    information.creditCardFields(2).waitForVisible();
    information.creditCardFields(2).click();
    console.log("creditCardFields(2)")
    Home.browserMethod();
    information.creditCardFields(2).addValue([testData.paymentPageDetails.amexCardNumbr]);
    Home.browserMethod();
    information.creditCardFields(3).waitForVisible();
    information.creditCardFields(3).click();
    information.creditCardFields(3).addValue([testData.paymentPageDetails.amexCardName]);
    information.creditCardFields(4).waitForVisible();
    information.creditCardFields(4).click();
    Home.browserMethod();
    information.creditCardFields(4).addValue([testData.paymentPageDetails.expiryDate1]);
    information.creditCardFields(5).waitForVisible();
    information.creditCardFields(5).click();
    information.creditCardFields(5).addValue([testData.paymentPageDetails.amexSecurityCode]);
}

discoverCardDetails() {
    const frameValue = browser.element('card-fields-iframe').value;
    browser.frame(frameValue);
    Home.browserMethod();
    information.creditCardFields(2).waitForVisible();
    information.creditCardFields(2).click();
    console.log("creditCardFields(2)")
    Home.browserMethod();
    information.creditCardFields(2).addValue([testData.paymentPageDetails.discoverCardNumbr]);
    information.creditCardFields(3).waitForVisible();
    information.creditCardFields(3).click();
    information.creditCardFields(3).addValue([testData.paymentPageDetails.discoverCardName]);
    information.creditCardFields(4).waitForVisible();
    information.creditCardFields(4).click();
    Home.browserMethod();
    information.creditCardFields(4).addValue([testData.paymentPageDetails.expiryDate1]);
    information.creditCardFields(5).waitForVisible();
    information.creditCardFields(5).click();
    information.creditCardFields(5).addValue([testData.paymentPageDetails.securityCode]);
}












get thankYouTest() {
    return $(".os-header__title");
}













}   

export default new payment();