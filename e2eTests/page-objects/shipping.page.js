import testData from "../constants/testData.json";
import Page from "./page";
import { expect } from 'chai';
import productDetailsPage from "../page-objects/product.details.page";
import Home from "../page-objects/home.page";
import CartPage from "../page-objects/cart.page";

class Shipping extends Page{

    get subscriptionText(){
        return $(".og-subscription-text>span:nth-child(1)");
    }
    get checkout_shipping(){
        return $(".progress ol li:nth-child(1)");
    }

    get checkout_billing(){
        return $(".progress ol li:nth-child(2)");
    }

    get checkout_placeOrder(){
        return $(".progress ol li:nth-child(3)");
    }

    get selectSavedAddressDropdown(){
        return $("#dwfrm_singleshipping_addressList");
    }
    
    get suggestionPopUp(){
        return $("#dialog-container h2");
    }

    get suggestionPopUpClsBtn(){
        return $(".ui-corner-all.ui-helper-clearfix button");
    }

    get shippingPageheading(){
        return $(".primary #dwfrm_singleshipping_shippingAddress>fieldset .legend-header");
    }
    
    get shippingerrmsg(){
        return $(".primary .c-alert.u-margin-bottom-lg");
    }
    get billingPageheading(){
        return $(".legend-header:nth-child(2)");
    }

    savedAddressOption(index){
        return $(`#dwfrm_singleshipping_addressList option:nth-child(${index})`);
    }

    get shoppingCardEditBtn(){
        return $(".summary div:nth-child(1) a:nth-child(2)");
    }

    get shippingAddressEditBtnInBllngpge(){
        return $(".summary div:nth-child(3) a:nth-child(2)");
    }

    AddressesinPlaceOrdrpage(index){
        return $(`.summary-box:nth-child(${index}) .address`);
    }

    get orderSummaryEditBtn(){
        return $(".c-order-total__link");
    }

    placeOrderEditBtn(index){ // use 2, 3, 4 for index
        return $(`.summary div:nth-child(${index}) a:nth-child(2)`)
    }

    get payPalamount(){
        return $(".minibillinginfo-amount");
    }

    get selectSavedCardDetails(){
        return $("#creditCardList");
    }

    savedCardsOption(index){
        return $(`#creditCardList option:nth-child(${index})`);
    }

    get continueToBillingBtn(){
        return $(".c-section.c-section--no-border:nth-child(4) button");
    }

    get CAProp65Msg(){
        return $(".c-alert.c-alert--warning.u-margin-bottom-xl");
    }

    get continueBtn(){
        return $(".c-section.c-section--no-border button");
    }

    get removeItemFromCartBtn(){
       return $(".c-row-form__label");
    }

    get replaceBtn(){
        return $("#cart-table tbody tr:nth-child(1) td:nth-child(3) label:nth-child(2)");
    }

    get addToAddressBookCheckBox(){
        return $("label[for='dwfrm_singleshipping_shippingAddress_addToAddressBook']");
    }

    addressInputFields(index){
        return $(`.c-section .o-layout div:nth-child(${index}) .c-row-form__input.required`);
    }

    optionalFieldMark(index){
        return $(`.c-section .o-layout div:nth-child(${index}) p`);
    }

    get selectStateDropdown(){
        return $("#dwfrm_singleshipping_shippingAddress_addressFields_states_state");
    }
    selectdropdownOptions(index){
        return $(`#dwfrm_singleshipping_shippingAddress_addressFields_states_state option:nth-child(${index})`)
    }

    selectState(index){
        return $(`[label="${index}"]`);
    }
    get selectStateText() {
        return $("#dwfrm_singleshipping_shippingAddress_addressFields_states_state option:nth-child(21)");
    }

    get selectStateDropdownOld(){
        return $(".c-section .o-layout div:nth-child(8) select");
    }
    get selectStateDropdownOld_1(){
        return $(".c-section .o-layout div:nth-child(7) select");
    }

    selectState(index){
        return $(`[label="${index}"]`);
    }

    errorMsgInAddressField(index){
         return $(`.c-section .o-layout>div:nth-child(${index}) p`);
    }

    errorMsgForCardDetails(index1, index2){
        return $(`.payment-method.payment-method-expanded .o-layout:nth-child(2) div:nth-child(${index1}) .error:nth-child(${index2})`);
    }

    cardInputField(index){
        return $(`.payment-method.payment-method-expanded .o-layout:nth-child(2) div:nth-child(${index}) input`);
    }

    get cardType(){
        return $("#dwfrm_billing_paymentMethods_creditCard_type");
    }

    cardOption(card){
        return $(`[label="${card}"]`);
    }

    get cardYear(){
        return $(".payment-method.payment-method-expanded .o-layout:nth-child(2) div:nth-child(4) div:nth-child(2) select");
    }

    yearOption(index){
        return $(`[label="${index}"]`);
    }
    
    selectyeardropdown(index){
        return $(`.payment-method.payment-method-expanded .o-layout:nth-child(2) div:nth-child(4) div:nth-child(2) select option:nth-child(2)`)
    }

    monthOption(month){
        return $(`[label="${month}"]`);
    }

    get saveThisCardCheckbox(){
        return $(".o-layout:nth-child(2) div:nth-child(6) label");
    }

    get reviewOrderBtn(){
        return $(".c-section.c-section--no-border button");
    }

    get placeOrderBtn(){
        return $(".u-display-none-mobile:nth-child(1) div> button.primary-cta.place-order-btn");
    }
    get placeOrderBtn1(){
        return $(".cart-order-block__section--wide .primary-cta.place-order-btn");
    }

    get orderConfirmationText(){
        return $(".primary.confirmation h1");
    }

    get shippingMethodName(){
        return $(".c-section.has-desc>label>span");
    }
    
    get shippingMethodName_new(){
        return $(".c-section.has-desc>label:nth-child(6)");
    }
    get salesTax(){
        return $(".c-order-total__body tr:nth-child(3) td");
    }

    get selectSuggestedBtn(){
        return $(".select-suggested-address.c-button.apply-button");
    }

    get keepOriginalBtn(){
        return $(".keep-original-address.c-button.c-button--secondary");
    }


    placeOrderWithCardDetails(prodName1, prodName2, cardUserName, cardNumber, securityCode, cardType){
        browser.url(testData.megafood.stagingurl);
        Home.searchBar.waitForVisible();
        Home.searchBar.click();
        Home.searchBar.setValue(prodName1);
        Home.browserMethod();
        Home.searchBar.setValue([prodName2, 'Enter']);
        this.browserMethod();
        Home.searchedProductName(2).waitForVisible();
        Home.searchedProductName(2).click();
        Home.browserMethod();
        if(productDetailsPage.popUpCloseBtn.isVisible()){
            productDetailsPage.popUpCloseBtn.click();
        }
        if(productDetailsPage.somethingElsePopUpCloseBtn.isVisible()){
            productDetailsPage.somethingElsePopUpCloseBtn.click();
        }
        browser.scroll(0, 100);
        productDetailsPage.addToCartBtn.waitForVisible();
        productDetailsPage.addToCartBtn.click();
        Home.browserMethod();
        browser.url(testData.megafood.cart);
        browser.scroll(0, 200);
        CartPage.bottomProceedToCheckoutBtn.waitForVisible();
        CartPage.bottomProceedToCheckoutBtn.click();
        this.selectSavedAddressDropdown.waitForVisible();
        this.selectSavedAddressDropdown.click();
        Home.browserMethod();
        this.savedAddressOption(2).waitForVisible();
        this.savedAddressOption(2).click();
        Home.browserMethod();
        browser.scroll(0, 10000);
        Home.browserMethod();
        this.continueToBillingBtn.waitForVisible();
        this.continueToBillingBtn.click();
        this.cardInputField(1).waitForVisible();
        browser.moveToObject(".payment-method.payment-method-expanded .o-layout:nth-child(2) div:nth-child(5) input");
        this.cardInputField(1).click();
        this.cardInputField(1).setValue(cardUserName);
        this.cardType.waitForVisible();
        this.cardType.click();
        Home.browserMethod();
        this.cardOption(cardType).waitForVisible();
        this.cardOption(cardType).click();
        this.cardInputField(3).click();
        this.cardInputField(3).setValue(cardNumber);
        this.cardYear.waitForVisible();
        this.cardYear.click();
        Home.browserMethod();
        this.yearOption("2023").waitForVisible();
        this.yearOption("2023").click();
        Home.browserMethod();
        this.cardInputField(5).waitForVisible();
        this.cardInputField(5).click();
        this.cardInputField(5).setValue(securityCode);
        Home.browserMethod();
        this.saveThisCardCheckbox.waitForVisible();
        this.saveThisCardCheckbox.click();
        this.reviewOrderBtn.waitForVisible();
        this.reviewOrderBtn.click();
        Home.browserMethod();
        this.placeOrderBtn.waitForVisible();
        this.placeOrderBtn.click();
        this.orderConfirmationText.waitForVisible();
        expect(this.orderConfirmationText.getText()).to.eql("Thank you for your order.");
    }

    addAddressAndPlaceOrder(){
        Home.browserMethod();
        this.addressInputFields(2).waitForVisible();
        this.addressInputFields(2).click();
        this.addressInputFields(2).setValue([testData.address.firstname]);
        this.addressInputFields(3).waitForVisible();
        this.addressInputFields(3).click();
        Home.browserMethod();
        this.addressInputFields(3).setValue([testData.address.lastname]);
        this.browserMethod();
        this.addressInputFields(4).waitForVisible();
        this.addressInputFields(4).click();
        this.browserMethod();
        this.addressInputFields(4).setValue([testData.address.address1])
        browser.pause(1000);
        this.addressInputFields(6).waitForVisible();
        this.addressInputFields(6).click();
        Home.browserMethod();
        browser.scroll(0, 200);
        this.addressInputFields(6).setValue(testData.address.city)
        this.browserMethod();
        this.selectStateDropdown.click();
        Home.browserMethod();
        this.selectdropdownOptions(6).click()
        this.browserMethod();
        browser.scroll(0, 600);
        this.addressInputFields(8).click();
        this.browserMethod();
        this.addressInputFields(8).setValue([testData.address.zipcode])
        this.addressInputFields(9).click();
        this.browserMethod();
        this.addressInputFields(9).setValue([testData.address.phone])
        browser.scroll(0,800);
        Home.browserMethod();
        //browser.scroll(0,100);
        this.addToAddressBookCheckBox.waitForVisible();
        this.addToAddressBookCheckBox.waitForVisible();
        this.addToAddressBookCheckBox.click();
        browser.scroll(0, 200);
        this.continueToBillingBtn.waitForVisible();
        this.continueToBillingBtn.click();
        this.cardInputField(1).waitForVisible();
        browser.scroll(0, this.cardInputField(5));
        this.cardInputField(1).click();
        this.cardInputField(1).setValue([testData.carddetails.name])
        browser.scroll(0, 3000);
        this.cardInputField(3).click();
        this.cardInputField(3).setValue([testData.carddetails.number])
        this.cardYear.waitForVisible();
        this.cardYear.click();
        Home.browserMethod();
        this.yearOption("2023").waitForVisible();
        this.yearOption("2023").click();
        // this.selectyeardropdown(2).click()
        this.browserMethod();
        this.cardInputField(5).waitForVisible();
        this.cardInputField(5).click();
        this.cardInputField(5).setValue([testData.carddetails.securitycode])
        Home.browserMethod();
        this.reviewOrderBtn.waitForVisible();
        this.reviewOrderBtn.click();
        this.placeOrderBtn.waitForVisible();
        this.placeOrderBtn.click();
        this.orderConfirmationText.waitForVisible();
        expect(this.orderConfirmationText.getText()).to.eql("Thank you for your order.");
    }
    
}

export default new Shipping();