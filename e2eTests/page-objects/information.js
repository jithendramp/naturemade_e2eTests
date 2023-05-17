import { expect } from "chai";
import Page from "./page";
import Home from "../page-objects/home.page";
import testData from "../constants/testData.json"
import browserSync from "browser-sync";

class information extends Page{

    get infoPageLogo(){
        return $(`.main__header .logo__image--medium`);
    }

    get contactInformationHeading() {
        return $(".section__title.layout-flex__item");
    } 

    get emailMeCheckbox() {
        return $(".checkbox__input");
    }

    get logOutLink() {
        return $(".logged-in-customer-information a");
    }

    get logInLink() {
        return $(".layout-flex.layout-flex--tight-vertical a");
    }

    get shippingAddressGuidePageHeading() {
        return $("#section-delivery-title");
    }

    get productName() {
        return $(".content .sidebar .product-table.loaded>tbody .product:nth-child(1) th");
    }

    get returnToCart(){
        return $(`.step__footer__previous-link-content`);
    }

    get subcriptionPolicy(){
        return $(`.policy-list__item `);
    }

    get policyHeader(){
        return $(`#modal-title`);
    }

    get emailTextField(){
        return $(`#checkout_email`);
    }

    get invalidEmailErrormsg() {
        return $(".field__message.field__message--error");
    }

    get shippingTOApoBtn() {
        return $("#genericMessage_wrapper");
    }

    get pleaseFillRequiredFieldErrormsg() {
        return $("#addressValidatorBox:nth-child(1) h2");
    }

    get shippingAddressAPOHeading() {
        return $(".main-page-title.page-title.h0");
    }

    get firstName(){
        return $(`#checkout_shipping_address_first_name`);
    }

    get lastName(){
        return $(`#checkout_shipping_address_last_name`);
    }

    get adress(){
        return $(`#checkout_shipping_address_address1`);
    }

    stateOptions(index) {
        return $(`#checkout_shipping_address_province option:nth-child(${index})`);
    }

    get selectAdress(){
        return $(`.combo-box__option:nth-child(1)`);
    }

    get city() {
        return $("#checkout_shipping_address_city");
    }

    get zipCode() {
        return $("#checkout_shipping_address_zip");
    }

    get zipcodeErrorMsg() {
        return $(".field__message.field__message--error");
    }

    get shippingbutton(){
        return $(`#continue_button`);
    }

    get paymentMethod(){
        return $(`#continue_button`);
    }

    get dicountCodeField() {
        return $("#checkout_reduction_code")
    }

    get discountCodeFieldErrorMsg() {
        return $("#error-for-reduction_code");
    }

    get applyBtnEnabled() {
        return $(".field__input-btn.btn");
    }

    get applyBtnDisabled() {
        return $(".field__input-btn.btn.btn--disabled ");
    }

    get subscriptionPolicyCloseIcon() {
        return $(".modal__header .modal__close button");
    }

    get isTheShippingAddressCorrectHeading() {
        return $(".mb-0");
    }

    isTheShippingAddressCorrect_Address(index) {
        return $(`.main #input-address span:nth-child(${index})`)
    }

    isAddressIsCrctModalBtns(index) {
        return $(`.main .btn-row button:nth-child(${index})`)
    }


    get multipleProdSubtotalPrice() {
        return $(".total-line-table__tbody>tr:nth-child(1) td span")
    }

    get multipleProTotalPrice() {
        return $(".total-line-table__footer td span:nth-child(2)");
    }

    get shippingMethodTitleTxt() {
        return $(".section__title");
    }

    get companyLogo() {
        return $(".main__header a img");
    }

    get subTotalPrice() {
        return $(".total-line-table__tbody .total-line.total-line--subtotal td span");
    }

    get totalPrice() {
        return $(".total-line-table__footer .total-line__price.payment-due span:nth-child(2)");
    }


    shipngPgHeadrLinks(index) {
        return $(`.main__header ol li:nth-child(${index}) a`)
    }

    shippingHeaderlinks(index) {
        return $(`.main__header>nav>ol>li:nth-child(${index}) span`)
    }

    shipngAndPaymntHeadrlinks(index) {
        return $(`.breadcrumb.breadcrumb--center li:nth-child(${index}) span`)
    }

     get changeOptnInContctFld() {
         return $(".content-box__row--tight-spacing-vertical .review-block:nth-child(1) a")
     }

     get changeOptnInShipToFld() {
         return $(".content-box__row--tight-spacing-vertical .review-block:nth-child(2) a")
     }

     get shipingAdrsInShipToFld() {
         return $(" .content-box__row--tight-spacing-vertical .review-block:nth-child(2) .address.address--tight")
     }

     get returnToInformtn(){
        return $(`.step__footer__previous-link-content`);
    }

     get continueToPaymntBtn() {
         return $("#continue_button")
    }

    get returnToShipping(){
        return $(`.step__footer__previous-link-content`);
    }

    get paymentHeading() {
        return $("#main-header:nth-child(1)");
    }

    creditCardFields(index) {
        return $(`.section__content .card-fields-container--transitioned>div:nth-child(3)>div:nth-child(${index}) .card-fields-iframe`)
    }

    cardNumbrField() {
        return $(".section__content .card-fields-container--transitioned>div:nth-child(3)>div:nth-child(2) .card-fields-iframe")
    }

    billingAddressRadioBtns(index) {
        return $(`.step__sections form:nth-child(3)>div:nth-child(7) .section__content .content-box>div:nth-child(${index}) .radio__input`)
    }

    get billingAdrsHeading() {
        return $(".section.section--billing-address h2")
    }

    get countryField() {
        return $(".radio-group__row>div>div>div:nth-child(9) label ")
    }

    get countryField_1() {
        return $(".radio-group__row>div>div>div:nth-child(9) select ")
    }

    get stateField() {
        return $(".radio-group__row>div>div>div:nth-child(15) select ")
    }

    useaDiffBilngAdresFlds(index) {
         return $(`.radio-group__row>div>div>div:nth-child(${index})) input`)
    }

    get thumbnailProdImg() {
        return $(" .order-summary__section.order-summary__section--product-list .product__image");
    }

    get thumbnailprodCount() {
        return $(".order-summary__section.order-summary__section--product-list .product-thumbnail__quantity")
    }

    get thumbnailProdName() {
        return $(".product__description .product__description__name.order-summary__emphasis")
    }

    get bottleCount() {
        return $(" .product__description .product__description__variant.order-summary__small-text")
    }


    informationPage(){
        Home.cartPageMethod();
        browser.execute(function() {
            document.querySelector(`.percent-bar-label.float-right`).scrollIntoView()
        })        
        Home.browserMethod();
        Home.checkoutCart.waitForVisible();
        Home.checkoutCart.click();
        Home.headCheckout.waitForVisible();
        expect(Home.headCheckout.getText()).to.eql(testData.titles.headCheckout);
    }


    informationPageFullDetails() {
        this.informationPage();
        Home.browserMethod();
        this.emailTextField.waitForVisible();
        this.emailTextField.click();
        this.emailTextField.setValue(testData.informationPage.email);
        Home.browserMethod();
        this.firstName.waitForVisible();
        this.firstName.click();
        this.firstName.setValue(testData.informationPage.firstName);
        this.lastName.waitForVisible();
        this.lastName.click();
        this.lastName.setValue(testData.informationPage.lastName);
        Home.browserMethod();
        this.adress.waitForVisible();
        this.adress.click();
        this.adress.setValue(testData.informationPage.address1);
        this.city.waitForVisible();
        this.city.click();
        this.city.setValue(testData.informationPage.city);
        this.stateOptions(51).waitForVisible();
        this.stateOptions(51).click();
        this.zipCode.waitForVisible();
        this.zipCode.click();
        this.zipCode.setValue(testData.informationPage.zipCode);
        this.shippingbutton.waitForVisible();
        this.shippingbutton.click();
        Home.browserMethod();
        if(this.isAddressIsCrctModalBtns(2).waitForVisible());{
            this.isAddressIsCrctModalBtns(2).click();
        }
        browser.scroll(0, 0);
        this.shippingMethodTitleTxt.waitForVisible();
        expect(this.shippingMethodTitleTxt.getText()).to.eql(testData.informationPage.shippingMethodText);

    }



    informationDetails_1() {
        this.emailTextField.waitForVisible();
        this.emailTextField.click();
        this.emailTextField.setValue(testData.informationPage.email);
        Home.browserMethod();
        this.firstName.waitForVisible();
        this.firstName.click();
        this.firstName.setValue(testData.informationPage.firstName);
        this.lastName.waitForVisible();
        this.lastName.click();
        this.lastName.setValue(testData.informationPage.lastName);
        Home.browserMethod();
        this.adress.waitForVisible();
        this.adress.click();
        this.adress.setValue(testData.informationPage.address1);
        this.city.waitForVisible();
        this.city.click();
        this.city.setValue(testData.informationPage.city);
        this.stateOptions(51).waitForVisible();
        this.stateOptions(51).click();
        this.zipCode.waitForVisible();
        this.zipCode.click();
        this.zipCode.setValue(testData.informationPage.zipCode);
        this.shippingbutton.waitForVisible();
        this.shippingbutton.click();
        Home.browserMethod();
        this.isAddressIsCrctModalBtns(2).waitForVisible();
        this.isAddressIsCrctModalBtns(2).click();
        browser.scroll(0, 0);
        Home.browserMethod();
        this.shippingMethodTitleTxt.waitForVisible();
        expect(this.shippingMethodTitleTxt.getText()).to.eql(testData.informationPage.shippingMethodText);
    }



}
export default new information ();