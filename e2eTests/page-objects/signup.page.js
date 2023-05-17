import Page from "./page";
import { expect } from 'chai';
import testData from "../constants/testData.json";
import Home from "../page-objects/home.page";
import Login from "../page-objects/login.page.js";
import Landing from "./account.page";
// var email;

class SignUp extends Page{

    get createAccountBtn(){
        return $("#dwfrm_login_register");
    }

    get createAccountBtnOnCheckoutLogin(){
        return $(".login>div:nth-child(3) .c-form-block__form button");
    }

    get createAccountPageHeading(){
        return $(".c-page-header h1");
    }

    get createBtn(){
        return $("button[name='dwfrm_profile_confirm']");
    }

    get firstName(){
        return $(".o-layout.form-horizontal div:nth-child(1) input")
    }
    get firstNamelabel(){
        return $(".o-layout.form-horizontal div:nth-child(1) label");
    }

    get firstNameErrorMsg(){
        return $(".o-layout.form-horizontal div:nth-child(1) p")
    }

    get lastName(){
        return $(".o-layout.form-horizontal div:nth-child(2) input")
    }
    
    get lastNamelabel(){
        return $(".o-layout.form-horizontal div:nth-child(2) label");
    }

    get lastNameerrorMsg(){
        return $(".o-layout.form-horizontal div:nth-child(2) p")
    }

    get email(){
        return $(".o-layout.form-horizontal div:nth-child(3) input");
    }

    get emailtextbox(){
        return $(".o-layout.form-horizontal div:nth-child(3) input");
    }
    get emaillabel(){
        return $(".o-layout.form-horizontal div:nth-child(3) label");
    }

    get emailErrorMsg(){
        return $(".o-layout.form-horizontal div:nth-child(3) p")
    }

    get confirmEmail(){
        return $(".o-layout.form-horizontal div:nth-child(4) input")
    }

    get ConfirmEmaillabel(){
        return $(".o-layout.form-horizontal div:nth-child(4) label");
    }

    get confirmEmailErrorMsg(){
        return $(".o-layout.form-horizontal div:nth-child(4) p")
    }

    get password(){
        return $(".o-layout.form-horizontal div:nth-child(5) input")
    }
    get passwordlabel(){
        return $(".o-layout.form-horizontal div:nth-child(5) label");
    }
    get passwordErrorMsg(){
        return $(".o-layout.form-horizontal div:nth-child(5) p")
    }
    get invalidemailerrmsg(){
        return $(".o-layout.form-horizontal div:nth-child(3) .form-caption.error-message.c-row-form__error");
    }
    get invalidconfirmemailerrmsg(){
        return $(".o-layout.form-horizontal div:nth-child(4) .form-caption.error-message.c-row-form__error")
    }
    get confirmPassword(){
        return $(".o-layout.form-horizontal div:nth-child(6) input")
    }
    get confirmPasswordlabel(){
        return $(".o-layout.form-horizontal div:nth-child(6) label");
    } 
    get password_8to255errmsg(){
        return $(".o-layout.form-horizontal div:nth-child(5) .form-caption.error-message.c-row-form__error");
    }
    get confirmpassword_8to255errmsg(){
        return $(".o-layout.form-horizontal div:nth-child(6) .form-caption.error-message.c-row-form__error");
    }
    get confirmPasswordErrorMsg(){
        return $(".o-layout.form-horizontal div:nth-child(6) p")
    }

    get addMeToMFEmailList(){
        return $(".o-layout.form-horizontal div:nth-child(7)")
    } 

    get acceptBtn(){
        return $(".accept-cookies-button")
    }

    signup(){
        browser.url(testData.megafood.stagingurl);
        browser.windowHandleFullscreen();
        Login.logInPageBtn.waitForVisible();
        Login.logInPageBtn.click();
        Login.myAccountLogInText.waitForVisible();
        expect(Login.myAccountLogInText.getText()).to.eql(testData.login.myaccountlogintext);
        this.createAccountBtn.waitForVisible();
        this.createAccountBtn.click();
        this.createAccountPageHeading.waitForVisible();
        expect(this.createAccountPageHeading.getText()).to.eql(testData.heading.createaccount);
        this.firstName.click();
        this.firstName.setValue([testData.signup.firstname,'Enter'])
        this.lastName.click();
        this.lastName.setValue([testData.signup.lastname, 'Enter'])
        var email = testData.signup.email + this.randomName() + "@maildrop.cc";
        console.log("email=" +email)
        this.email.click();
        this.email.setValue([email, 'Enter'])
        this.confirmEmail.click();
        this.confirmEmail.setValue([email, 'Enter'])
        this.password.click();
        this.password.setValue([testData.signup.password,'Enter'])
        this.confirmPassword.click();
        this.confirmPassword.setValue([testData.signup.password,'Enter'])
        expect(Landing.heading.getText()).to.eql(testData.landingpage.heading + testData.signup.firstname + " " + testData.signup.lastname);
        return email;
    }

    returnEmail(){
        var email = testData.signup.email + this.randomName() + "@maildrop.cc";
        return email;
    }
}

export default new SignUp();