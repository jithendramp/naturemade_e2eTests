import Page from "./page";
import { expect } from 'chai';
import testData from "../constants/testData.json";
import Landing from "./account.page";
import Home from "../page-objects/home.page";
import productDetailsPage from "../page-objects/product.details.page";
import CartPage from "../page-objects/cart.page";
import Account from "./account.page"
import Shipping from "../page-objects/shipping.page";


class Login extends Page{

    get loginpageHeading(){
        return $("#login h1");
    }

    get acceptcookieepopup(){
        return $(".ot-sdk-columns button:nth-child(2)");
    }

    get emailField(){
        return $("#CustomerEmail");
    }

    get passwordField(){
        return $("#CustomerPassword");
    }
    
    get signInBtn(){
        return $("#CustomerLoginForm .btn.btn--secondary-accent.small--one-whole");
    }

    get pwdErrormsg(){
        return $(".form-message--error ul>li");
    }

    get clickHereLink(){
        return $(".grid__item.medium-up--push-one-sixth #rc_login a");
    }

    get activateYourAccountheading(){
        return $(" .section-header h2");
    }

    get forgotPwdLink(){
        return $("#CustomerLoginForm .text-center p a");
    }

    get resetYourPasswordHeading(){
        return $(".section-header.text-center h2");
    }

    get recoverEmailfield(){
        return $("#RecoverEmail");
    }

    get submitBtn(){
        return $(".form-vertical:nth-child(3) .btn.btn--secondary-accent");
    }

    get resetSuccessmsg(){
        return $("#ResetSuccess");
    }

    get captchaBox(){
        return $(".recaptcha-checkbox-borderAnimation");
    }

    get captchaSubmitBtn(){
        return $(".shopify-challenge__button.btn");
    }

    get cancelIconOnPrevCartPopUP() {
        return $(".fancybox-content .fancybox-button.fancybox-close-small svg")
    }


    loginMethod(){
        browser.url(testData.nurish.url);
        browser.windowHandleFullscreen();
        expect(Home.HomePageSectionTitle.getText()).to.eql(testData.home.howitworkstitle);
        Home.accountIcon.waitForVisible();
        Home.accountIcon.click();
        Home.browserMethod();
        this.loginpageHeading.waitForVisible();
        expect(this.loginpageHeading.getText()).to.eql(testData.titles.logintitle);
    }

    logout(){
        browser.url(testData.nurish.accounturl);
        Account.myaccountText.waitForVisible();
        Account.logoutBtn.waitForVisible();
        Account.logoutBtn.click()
        Home.browserMethod();
        expect(Account.logoutBtn.isVisible()).to.eql(false);
     }


}

export default new Login();
