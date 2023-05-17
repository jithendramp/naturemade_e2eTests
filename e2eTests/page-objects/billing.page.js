import testData from "../constants/testData.json";
import Page from "./page";
import { expect } from 'chai';

class Billing extends Page{

    get billingHeading(){
        return $(".c-section .legend-header");
    }
    
    get selectPaymentMethodHeading(){
        return $(".checkout-billing.address.form-horizontal>legend");
    }
    get rewardBtn() {
        return $(".c-section.c-section--no-border button");
    }
    get cardTypeField(){
        return $(".o-layout:nth-child(2)>div:nth-child(2) select");
    }

    get billingPaypalbtn(){
        return $(".js_paypal-content");
    }

    // get billingAddressEditBtn(){
    //     return $(".summary div:nth-child(3) a:nth-child(2)");
    // }

    cardOption(index){
        return $(`[label="${index}"]`);
    }

    get selectFromSavedAddressDropdown(){
        return $("#dwfrm_billing_addressList");
    }

    cardOptionNew(index){
        return $(`.payment-method-options.o-layout__item>label:nth-child(${index})`);
    }

    get selectCreditCardheading(){
        return $(".payment-method.payment-method-expanded .label");
    }

    get savedField(){
        return $("#creditCardList");
    }

    savedOption(index){
        return $(`[label="${index}"]`);
    }

    cardErrorMsg(index){
        return $(`.o-layout:nth-child(2) div:nth-child(${index}) .error-message`);
    }

    shippingAddress(index){
        return $(`.summary div:nth-child(3) .address div:nth-child(${index})`);
    }

    shippingAddressOnBillingpage(index){
        return $(`.summary-box:nth-child(3) .address div:nth-child(${index})`);
    }

}

export default new Billing();