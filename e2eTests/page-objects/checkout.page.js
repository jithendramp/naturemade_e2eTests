import testData from "../constants/testData.json";
import Page from "./page";

class Checkout extends Page{

    get guestCheckoutheading(){
        return $(".login>div:nth-child(1) h2");
    }

    guestCheckoutInputFields(index){
        return $(`.c-form-block form div:nth-child(${index}) input`);
    }
    
    get guestAccountCreateButton(){
        return $(".c-form-block form button");
    }

    get popUpCloseBtn(){
        return $("._hj-f5b2a1eb-9b07_survey_close._hj-f5b2a1eb-9b07_transition");
    }

    get noThanksLink(){
        return $("._hj-wTnOw__SurveyInvitation__noThanksButton._hj-3OscV__styles__clearButton");
    }

    checkoutStepsHeading(index){
        return $(`.progress li:nth-child(${index}) .name`);
    }

    get helpPHNumber(){
        return $(".mf-header__phone a");
    }

    orderSummeryHeadings(index){
        return $(`.summary div:nth-child(${index}) h2`);
    }

    get useThisAddressCheckbox(){
        return $("label[for='dwfrm_singleshipping_shippingAddress_useAsBillingAddress']");
    }

    get emailListCheckbox(){
        return $(".c-section .o-layout div:nth-child(14) label");
    }

    get privacyPolicyLink(){
        return $(".c-section .o-layout div:nth-child(15) a");
    }

    get isThisAGiftText(){
        return $(".c-section .o-layout fieldset legend");
    }

    get selectShippingMethodText(){
        return $(".c-section.has-desc legend");
    }

    get checkOutStepHeading(){
        return $(`#dwfrm_singleshipping_shippingAddress>fieldset .legend-header`);
    }
}

export default new Checkout();