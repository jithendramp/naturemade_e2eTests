import testData from "../constants/testData.json";
import Page from "./page";
import Home from "../page-objects/home.page";
import { expect } from 'chai';
import browserSync from "browser-sync";
import productDetailsPage from "../page-objects/product.details.page";

class Paypal extends Page{
    get PaypalBtn(){
        return $(".c-page-header.c-page-header--row .paypal-cart-buttons-container");
    }

    get paypal_logo(){
        return $("#paypal-logo");
    }

    get Paypal_loginpage(){
        return $("#headerText");
    }

    get paypal_loginBtn(){
        return $(".css-ltr-1m7plzc-button-Button");
    }

    get PaypallogInBtn(){
        return $(".btn.full.ng-binding");
    }

    get Paypal_ContinueBtn(){
        return $(".CheckoutButton_buttonWrapper_2VloF button");
    }

    get Paypal_email(){
        return $('#email');
    }

    get Paypal_nextbtn(){
        return $('#btnNext');
    }

    get Paypal_passwrd(){
        return $('#password');
    }

    get Paypal_loginBtn(){
        return $('#btnLogin');
    }

    get Paypal_logo(){
        return $(".Header_container_3ID5_ img");
    }

    get Paypal_merchantlogo(){
        return $(".MerchantLogo_container_2UFaV ");
    }

    get Paypal_changeoption(){
        return $(".ShipTo_container_2wZjT .AddOption_container_1YSQc button");
    }
    
    selectState(index){
        return $(`#state option:nth-child(${index})`)
    }

    selectCountry(index){
        return $(`#country option:nth-child(${index})`)
    }

    get Paypal_addanewaddress(){
        return $(".ShipTo_container_2wZjT .AddOption_textContent_wSzDs");
    }

    get Paypal_linkDebitOrCreditCard(){
        return $(".PayWith_container_1uz6G .AddOption_container_1YSQc");
    }

    get Paypal_Shippingaddressheading(){
        return $(".InterstitialHeader_tall_2zCwL.InterstitialHeader_container_1u5KT");
    }

    get Paypal_Countryoption(){
        return $("#country");
    }

    get Paypal_firstname(){
        return $("#ccFirstName");
    }

    get Paypal_lastname(){
        return $("#ccLastName");
    }

    paypalAddressoption(index){
        return $(`.css-jx26g4-FloatingLabelContainer.eticpaj1:nth-child(${index}) input`);
    }

    get Paypal_stateOption(){
        return $("#state");
    }
    get Paypal_pincode(){
        return $("#postalCode");
    }
    get Paypal_save(){
        return $(".ppvx_btn___5-10-0:nth-child(4)");
    }

    get Paypal_CardNumbr(){
        return $("#cardNumber");
    }
    get ExpiryDate(){
        return $("#cardExpiry");
    }
    get cardCVV(){
        return $("#cardCvv");
    }
    get shippingDropdown(){
        return $("#shippingDropdown");
    }

    get billingDropdown(){
        return $("#billingDropdown");
    }

}
export default new Paypal();