import { expect } from 'chai';
import Login from "../page-objects/login.page.js";
import Home from "../page-objects/home.page";
import footer from "../page-objects/footer.page";
import ProductList from "../page-objects/product.list.page";
import productDetailsPage from "../page-objects/product.details.page";
import CartPage from "../page-objects/cart.page";
import Landing from "../page-objects/account.page";
import Checkout from "../page-objects/checkout.page";
import Shipping from "../page-objects/shipping.page";
import SocialMedia from "../page-objects/social.media.home.page";
import SignUp from "../page-objects/signup.page";
import cartPage from "../page-objects/cart.page";
import browserSync from "browser-sync";
import testData from "../constants/testData.json";
import productListPage from '../page-objects/product.list.page';
import HomePage from '../page-objects/home.page';
import loginPage from '../page-objects/login.page.js';
import accountPage from '../page-objects/account.page.js';
import nutritionquizPage from '../page-objects/nutritionquiz.page.js';
import gmailPage from '../page-objects/gmail.page.js';
import homePage from '../page-objects/home.page';
import contactUs from '../page-objects/contact.us.js';
import information from '../page-objects/information.js';
import { info } from 'console';
import { split } from 'lodash';
import socialMediaHomePage from '../page-objects/social.media.home.page';
import blogPage from '../page-objects/blog.page.js';
import p from 'proxyquire';
// import { waituntilisvisible } from "../page-objects/functions";
import paymentPage from '../page-objects/payment.page.js';
import { homedir } from 'os';


var assert = require('assert');
var email;
var productName;

describe("Home page",()=>{
    it("Verify that the user is redirected to the Login page when SignIn button is clicked",()=>{
        // Home.forDevUrlLaunch()
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click();
        Home.loginPage.waitForVisible();
        expect(Home.loginPage.getText()).to.eql(testData.titles.logintitle)
    })

    it("Verify that the Email and Password fileds are displayed appropriately on the Login page",()=>{
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click();
        Home.email.waitForVisible();
        expect(Home.email.isVisible()).to.eql(true);
        Home.password.waitForVisible();
        expect(Home.password.isVisible()).to.eql(true);
    })

    it("Verify that the Email and Pasword fields are marked as mandatory (*)",()=>{
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click();
        Home.emailRequired.waitForVisible();
        expect(Home.emailRequired.getText()).to.eql(testData.login.emailRequired)
        //expect(Home.emailRequired.getText()).to.eql(false);
        Home.passwordRequired.waitForVisible();
        expect(Home.passwordRequired.getText()).to.eql(testData.login.passwordRequired)
        //expect(Home.passwordRequired.isVisible()).to.eql(false);
    })

    it("Verify that the user is redirected to the 'Create Account' page when 'Create account' button is clicked",()=>{
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click();
        Home.createAccountLink.waitForVisible();
        Home.createAccountLink.click();
        Home.createAcctHeading.waitForVisible();
        expect(Home.createAcctHeading.getText()).to.eql(testData.createAccntDetails.createAcctHeading)
    })

    it("Verify that the appropriate error message is displayed when required fields are not submitted",()=>{
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click();
        Home.createAccountLink.waitForVisible();
        Home.createAccountLink.click();
        browser.scroll(".nm__field:nth-child(6) label");
        Home.createBtn.waitForVisible();
        Home.createBtn.click();
        browser.scroll(0, 0);
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
         }
        browser.pause(4000);
        Home.emailFldErrorMsg.waitForVisible();
        expect(Home.emailFldErrorMsg.getText()).to.eql(testData.login.emailErrMsg);
        Home.pwdFldErrorMsg.waitForVisible();
        expect(Home.pwdFldErrorMsg.getText()).to.eql(testData.login.pwdErrMsg);

    })

    it("Verify that the user is able to login successfully with the new created account",()=>{
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click();
        Home.createAccountLink.waitForVisible();
        Home.createAccountLink.click();
        Home.accountCreation();
        browser.pause(5000);
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        Home.myAccount_1.waitForVisible();
        Home.myAccount_1.click();
        Home.browserMethod();
        Home.logOutLink.waitForVisible();
        Home.logOutLink.click();
        Home.browserMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click();
        Home.email.waitForVisible();
        Home.email.click();
        Home.email.setValue([testData.createAccntDetails.email]);
        Home.passwordField.waitForVisible();
        Home.passwordField.click();
        Home.passwordField.setValue([testData.createAccntDetails.password]);
        Home.signin.waitForVisible();
        Home.signin.click();
        //expect(Home.accountTxt.getText()).to.eql(testData.createAccntDetails.accountTxt)
        Home.logOutLink.waitForVisible();
        Home.logOutLink.click();
        Home.bannerName.waitForVisible();
        expect(Home.bannerName.getText()).eql(testData.titles.shopNowText);
    })

    it("Verify that the appropriate error message is displayed when Email fileld is not submitted",()=>{
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click();
        Home.passwordField.waitForVisible();
        Home.passwordField.click();
        Home.passwordField.setValue([testData.createAccntDetails.password]);
        Home.signin.waitForVisible();
        Home.signin.click();
        Home.InvalidErrorMsg.waitForVisible();
        expect(Home.InvalidErrorMsg.getText()).to.eql(testData.login.errorMsg);
        // Home.emailErrorMsg.waitForVisible();
        // expect(Home.emailErrorMsg.getText()).to.eql(testData.login.thisFldReqerrMsg)
    })

    it("Verify that the appropriate error message is displayed when user entered invalid email address in the Email field",()=>{
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click();
        Home.email.waitForVisible();
        Home.email.click();
        Home.email.setValue([testData.createAccntDetails.invalidEmail]);
        Home.passwordField.waitForVisible();
        Home.passwordField.click();
        Home.passwordField.setValue([testData.createAccntDetails.password]);
        Home.signin.waitForVisible();
        Home.signin.click();
        Home.InvalidErrorMsg.waitForVisible();
        expect(Home.InvalidErrorMsg.getText()).to.eql(testData.login.errorMsg);
    })

    it("Verify that the appropriate error message is displayed when user entered unregistered email address in the Email field",()=>{
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click();
        Home.email.waitForVisible();
        Home.email.click();
        Home.email.setValue([testData.createAccntDetails.unregesterEmail]);
        Home.passwordField.waitForVisible();
        Home.passwordField.click();
        Home.passwordField.setValue([testData.createAccntDetails.password]);
        Home.signin.waitForVisible();
        Home.signin.click();
        Home.InvalidErrorMsg.waitForVisible();
        expect(Home.InvalidErrorMsg.getText()).to.eql(testData.login.errorMsg);
    })

    it("Verify that appropriate error is displayed when registered email and invalid password is submitted",()=>{
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click();
        Home.email.waitForVisible();
        Home.email.click();
        Home.email.setValue([testData.createAccntDetails.email]);
        Home.passwordField.waitForVisible();
        Home.passwordField.click();
        Home.passwordField.setValue([testData.createAccntDetails.invalidPassword]);
        Home.signin.waitForVisible();
        Home.signin.click();
        Home.InvalidErrorMsg.waitForVisible();
        expect(Home.InvalidErrorMsg.getText()).to.eql(testData.login.errorMsg);
    })

    it("Verify that 'Reset Password' page is displayed when the 'Forgot Password' link is clicked",()=>{
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click();
        Home.forgottPasswordLink.waitForVisible();
        Home.forgottPasswordLink.click();
        Home.resetYourPasswordTxt.waitForVisible();
        expect(Home.resetYourPasswordTxt.getText()).to.eql(testData.login.resetYourPassword);
    })

    // it("Verify that an appropriate error is displayed when the user clicks on 'Submit' button without entering an email address.",()=>{
    //     Home.homepageMethod();
    //     Home.signinLink.waitForVisible();
    //     Home.signinLink.click();
    //     Home.forgottPasswordLink.waitForVisible();
    //     Home.forgottPasswordLink.click(); 
    //     Home.recoverEmail.waitForVisible();
    //     if(Home.subscribeCancelIcon.isVisible()){
    //         Home.subscribeCancelIcon.click();
    //     }
    //     Home.submitBtn.waitForVisible();
    //     Home.submitBtn.click();
    //     Home.recoverEmailError.waitForVisible();
    //     expect(Home.recoverEmailError.getText()).to.eql(testData.createAccntDetails.recoverEmailError);
    // })

    it("Verify that an appropriate error is displayed when the user submits an unregistered email in 'Forgot Password'",()=>{
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click();
        Home.forgottPasswordLink.waitForVisible();
        Home.forgottPasswordLink.click();
        Home.recoverEmail.waitForVisible();
        Home.recoverEmail.click();
        Home.recoverEmail.setValue([testData.createAccntDetails.invalidEmail])
        Home.submitBtn.waitForVisible();
        Home.submitBtn.click();
        Home.recoverEmailError.waitForVisible();
        expect(Home.recoverEmailError.getText()).to.eql(testData.createAccntDetails.recoverEmailError);   
    })

    it("Verify that 'Subscription Login' page is displayed when the user clicks on 'Click here' link on the login page",()=>{
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click(); 
        browser.execute(function() {
            document.querySelector(`.text-link`).scrollIntoView()
        }) 
        Home.browserMethod();
        Home.clickHereLink.waitForVisible();
        Home.clickHereLink.click();
        Home.requestActInviteTitle.waitForVisible();
        expect(Home.requestActInviteTitle.getText()).to.eql(testData.login.requestAccountInviteText);
    })

    it("Verify that the appropriate error message is displayed when invalid email is submitted",()=>{
        Home.homepageMethod();
        Home.signinLink.waitForVisible();
        Home.signinLink.click(); 
        browser.scroll(0, 200);
        Home.browserMethod();
        Home.clickHereLink.waitForVisible();
        Home.clickHereLink.click();
        Home.GetsubscriptionEmail.waitForVisible();
        Home.GetsubscriptionEmail.click();
        Home.GetsubscriptionEmail.setValue([testData.createAccntDetails.invalidEmail])
    })
})

// describe("Backed by science, made for you",()=>{
//     it("Verify that the user is navigated to 'Women's Health' page when 'Women's Health' image is clicked on the Backed by science, made for you",()=>{
//         Home.homepageMethod();
//         browser.scroll(".health-goals-headline");
//         //Home.backedByScience.scroll();
//         Home.healthImg(1).waitForVisible();
//         browser.waitUntil(
//         function() {
//         return (
//         browser.isVisible
//             ('.grid-x.grid-padding-x.health-goals.margin-top-3 .cell:nth-child(1)') === true
//                 );
//             },
//             20000,
//             "Women's Health page is not visible even after 20 secs"
//             );
//         Home.healthImg(1).click();
//         expect(Home.pageHead.getText()).to.eql(testData.categories.womensHealth);
        
//     })

//     it("Verify that the user is navigated to 'Women's Health' page when 'Women's Health' text is clicked on the Backed by science, made for you",()=>{
//         Home.homepageMethod();
//         browser.scroll(".health-goals-headline");
//         Home.healthTitle(1).waitForVisible();
//         browser.waitUntil(
//         function() {
//                 return (
//                 browser.isVisible
//                     ('.grid-x.grid-padding-x.health-goals.margin-top-3 > div:nth-child(1) p') === true
//                 );
//             },
//             20000,
//             "Women's Health page is not visible even after 20 secs"
//         );
//         browser.pause(2000);
//         Home.healthTitle(1).click();
//         expect(Home.pageHead.getText()).to.eql(testData.categories.womensHealth);
        
//     })
        
//     it("Verify that the user is navigated to 'Men's Health' page when 'Men's Health' image is clicked",()=>{
//         Home.homepageMethod();
//         browser.scroll(".health-goals-headline");
//         Home.healthImg(2).waitForVisible();
//         browser.waitUntil(
//         function() {
//             return (
//             browser.isVisible(
//                     '.grid-x.grid-padding-x.health-goals.margin-top-3 .cell:nth-child(2)'
//                 ) === true
//                 );
//             },
//             20000,
//             "start discussion page still not disappear even after 20s"
//             );
//         Home.healthImg(2).click();
//         expect(Home.pageHead.getText()).to.eql(testData.categories.mensHealth);
//     })

//     it("Verify that the user is navigated to 'Men's Health' page when 'Men's Health' text is clicked",()=>{
//         Home.homepageMethod();
//         browser.scroll(".health-goals-headline");
//         Home.healthTitle(2).waitForVisible();
//         browser.waitUntil(
//             function() {
//                 return (
//                 browser.isVisible(
//                     '.grid-x.grid-padding-x.health-goals.margin-top-3 > div:nth-child(2) p'
//                 ) === true
//                 );
//             },
//             20000,
//             "start discussion page still not disappear even after 20s"
//         );
//         browser.pause(1000);
//         Home.healthTitle(2).click();
//         expect(Home.pageHead.getText()).to.eql(testData.categories.mensHealth);
//     })
        
//     it("Verify that the user is navigated to 'Energy' page when 'Energy' image is clicked",()=>{
//         Home.homepageMethod();
//         browser.scroll(".health-goals-headline");
//         Home.healthImg(3).waitForVisible();
//         Home.healthImg(3).click();
//         expect(Home.pageHead.getText()).to.eql(testData.categories.energy);
//     })
        
//     it("Verify that the user is navigated to 'Energy' page when 'Energy' text is clicked",()=>{
//         Home.homepageMethod();
//         browser.scroll(".health-goals-headline");
//         Home.healthTitle(3).waitForVisible();
//         browser.pause(2000);
//         Home.healthTitle(3).click();
//         expect(Home.pageHead.getText()).to.eql(testData.categories.energy);
//     })
        
//     it("Verify that the user is navigated to 'immune health' page when 'immune health' image is clicked",()=>{
//         Home.homepageMethod();
//         browser.scroll(".health-goals-headline");
//         Home.healthImg(4).waitForVisible();
//         browser.pause(2000);
//         Home.healthImg(4).click();
//         expect(Home.pageHead.getText()).to.eql(testData.categories.immuneHealth);
//     })
        
//     it("Verify that the user is navigated to 'immune health' page when 'immune health' text is clicked",()=>{
//         Home.homepageMethod();
//         browser.scroll(".health-goals-headline");
//         Home.healthTitle(4).waitForVisible();
//         browser.pause(2000);
//         Home.healthTitle(4).click();
//         expect(Home.pageHead.getText()).to.eql(testData.categories.immuneHealth);
//     })
        
//     it("Verify that the user is navigated to 'Sleep' page when 'Sleep' image is clicked",()=>{
//         Home.homepageMethod();
//         browser.scroll(".health-goals-headline");
//         Home.healthImg(5).waitForVisible();
//         browser.pause(2000);
//         Home.healthImg(5).click();
//         expect(Home.pageHead.getText()).to.eql(testData.categories.sleep);
//     })
        
//     it("Verify that the user is navigated to 'Sleep' page when 'Sleep' text is clicked",()=>{
//         Home.homepageMethod();
//         browser.scroll(".health-goals-headline");
//         Home.healthTitle(5).waitForVisible();
//         browser.pause(2000);
//         Home.healthTitle(5).click();
//         expect(Home.pageHead.getText()).to.eql(testData.categories.sleep);
//     })
// })  

describe("Vitamins",()=>{
    it("Verify that the user is navigated to 'Kid's Multivitamins' Products list when 'Kid's Multivitamins' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(1, 4).waitForVisible();
        Home.vitaminsSublinks(1, 4).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.kidsText);
    }) 

    it("Verify that the user is navigated to 'Men's Multivitamins' Products list when 'Men's Multivitamins' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(1, 2).waitForVisible();
        Home.vitaminsSublinks(1, 2).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.mensText);
    })
            
    // it("Verify that the user is navigated to 'Multi + omega 3' Products list when 'Multi + omega 3' option is clicked in the 'Vitamins' submenu",()=>{
    //     Home.homepageMethod();
    //     Home.vands1Method();
    //     Home.vitaminsSublinks(1, 3).waitForVisible();
    //     Home.vitaminsSublinks(1, 3).click();
    //     Home.omegaText.waitForVisible();
    //     expect(Home.omegaText.getText()).to.eql(testData.titles.omegaText);
    // })
            
    // it("Verify that the user is navigated to 'Multivitamins' Products list when 'Multivitamins' option is clicked in the 'Vitamins' submenu",()=>{
    //     Home.homepageMethod();
    //     Home.vands1Method();
    //     Home.vitaminsSublinks(1, 2).waitForVisible();
    //     Home.vitaminsSublinks(1, 2).click();
    //     Home.kidsvitaminstext.waitForVisible();
    //     expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.multiText);
    // })
            
    it("Verify that the user is navigated to 'prenatal and postnatal' Products list when 'prenatal and postnatal' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(1, 5).waitForVisible();
        Home.vitaminsSublinks(1, 5).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.PreandPost);
    })
            
    it("Verify that the user is navigated to 'Women's multivitamins' Products list when 'Women's multi vitamins' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(1, 3).waitForVisible();
        Home.vitaminsSublinks(1, 3).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.womensText);
    })

    it("Verify that the user is navigated to 'All Multivitamins' Products list when 'All Multivitamins' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(1, 6).waitForVisible();
        Home.vitaminsSublinks(1, 6).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.multiText);
    })

    it("Verify that the user is navigated to 'B Complex' Products list when 'B Complex' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(2, 3).waitForVisible();
        Home.vitaminsSublinks(2, 3).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.bcomplexText);
            
    })

    it("Verify that the user is navigated to 'B Vitamins' Products list when 'B Vitamins' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(2, 2).waitForVisible();
        Home.vitaminsSublinks(2, 2).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.bvitaminsText);
    })

    it("Verify that the user is navigated to 'B complex' Products list when 'B Complex' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(2, 3).waitForVisible();
        Home.vitaminsSublinks(2, 3).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.bcomplexText);
    })

    it("Verify that the user is navigated to 'Biotin' Products list when 'Biotin' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(2, 4).waitForVisible();
        Home.vitaminsSublinks(2, 4).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.biotinText);
    })

    it("Verify that the user is navigated to 'Folic Acid' Products list when 'Folic Acid' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(2, 8).waitForVisible();
        Home.vitaminsSublinks(2, 8).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.folicAcidText);
    })

    it("Verify that the user is navigated to 'Vitamin C' Products list when 'Vitamin C' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(2, 5).waitForVisible();
        Home.vitaminsSublinks(2, 5).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.vitamincText);
    })

    it("Verify that the user is navigated to 'Vitamin D' Products list when 'Vitamin D' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(2, 6).waitForVisible();
        Home.vitaminsSublinks(2, 6).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.vitamindText);
    })

    it("Verify that the user is navigated to 'Vitamin E' Products list when 'Vitamin E' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(2, 7).waitForVisible();
        Home.vitaminsSublinks(2, 7).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.vitamineText);
    })

    it("Verify that the user is navigated to 'Vitamin K' Products list when 'Vitamin K' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(2, 9).waitForVisible();
        Home.vitaminsSublinks(2, 9).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.vitaminkText);
    })

    it("Verify that the user is navigated to 'All Vitamins' Products list when 'All Vitamins' option is clicked in the 'Vitamins' submenu",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        Home.vitaminsSublinks(2, 10).waitForVisible();
        Home.vitaminsSublinks(2, 10).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.allVitaminsText);
    })

})

describe("Supplemnets",()=>{
    it("Verify that the user is navigated to 'Acidophilus' Products list when 'Acidophilus' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(1, 3).waitForVisible();
        Home.vitaminsSublinks(1, 3).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.acidophilusText);
    })

    it("Verify that the user is redirected to the 'Choline' products list page  when 'Choline' option is clicked on the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(1, 4).waitForVisible();
        Home.vitaminsSublinks(1, 4).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.cholineTxt);
    })

    it("Verify that the user is navigated to 'Collagen' Products list when 'Collagen' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(1, 5).waitForVisible();
        Home.vitaminsSublinks(1, 5).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.collagenText);
    })

    it("Verify that the user is navigated to 'CoQ10' Products list when 'CoQ10' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(1, 6).waitForVisible();
        Home.vitaminsSublinks(1, 6).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.coQ10Text);
    })

    it("Verify that the user is navigated to 'L-Lysine' Products list when 'L-Lysine' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(1, 7).waitForVisible();
        Home.vitaminsSublinks(1, 7).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles['l-lysineText']);
    })

    it("Verify that the user is navigated to 'L-Theanine' Products list when 'L-Theanine' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(1, 8).waitForVisible();
        Home.vitaminsSublinks(1, 8).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.lTheanineTxt);
    })

    it("Verify that the user is navigated to 'Lutein' Products list when 'Lutein' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(1, 9).waitForVisible();
        Home.vitaminsSublinks(1, 9).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.luteinText);
    })

    it("Verify that the user is navigated to 'Melatonin' Products list when 'Melatonin' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(1, 10).waitForVisible();
        Home.vitaminsSublinks(1, 10).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.melatoninText);
    })

    it("Verify that the user is navigated to 'Probotics' Products list when 'Probotics' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(1, 11).waitForVisible();
        Home.vitaminsSublinks(1, 11).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.probioticsText);
    })

    it("Verify that the user is navigated to 'Supplements' Products list when 'All Supplements' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(1, 12).waitForVisible();
        Home.vitaminsSublinks(1, 12).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.allsupplementsText);
    })

    it("Verify that the user is navigated to 'Calcium' Products list when 'Calcium' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(2, 2).waitForVisible();
        Home.vitaminsSublinks(2, 2).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.calciumText);
    })

    it("Verify that the user is navigated to 'Iron' Products list when 'Iron' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(2, 3).waitForVisible();
        Home.vitaminsSublinks(2, 3).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.ironText);
    })

    it("Verify that the user is navigated to 'Magnesium' Products list when 'Magnesium' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(2, 4).waitForVisible();
        Home.vitaminsSublinks(2, 4).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.magnesiumText);
    })

    it("Verify that the user is navigated to 'Pottasium' Products list when 'Pottasium' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(2, 5).waitForVisible();
        Home.vitaminsSublinks(2, 5).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.potassiumText);
    })

    it("Verify that the user is navigated to 'Zinc' Products list when 'Zinc' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(2, 6).waitForVisible();
        Home.vitaminsSublinks(2, 6).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.zincText);
    })

    it("Verify that the user is navigated to 'All Minerals' Products list when 'All Minerals' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(2, 7).waitForVisible();
        Home.vitaminsSublinks(2, 7).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.allmineralsText);
    })

    it("Verify that the user is navigated to 'Ashwagandha' Products list when 'Ashwagandha' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(3, 2).waitForVisible();
        Home.vitaminsSublinks(3, 2).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.ashwagandhaText);
    })

    it("Verify that the user is navigated to 'Cranberry' Products list when 'Cranberry' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(3, 3).waitForVisible();
        Home.vitaminsSublinks(3, 3).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.cranberryText);
    })

    it("Verify that the user is navigated to 'Elderberry' Products list when 'Elderberry' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(3, 4).waitForVisible();
        Home.vitaminsSublinks(3, 4).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.elderberryText);
    })

    it("Verify that the user is navigated to 'Ginseng' Products list when 'Ginseng' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(3, 5).waitForVisible();
        Home.vitaminsSublinks(3, 5).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.ginsengTxt);
    })

    it("Verify that the user is navigated to 'Turmeric Curcumin' Products list when 'Turmeric Curcumin' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(3, 6).waitForVisible();
        Home.vitaminsSublinks(3, 6).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.turmericcurcuminText);
    })

    it("Verify that the user is navigated to 'All Herbs' Products list when 'All Herbs' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(3, 7).waitForVisible();
        Home.vitaminsSublinks(3, 7).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.allherbsText);
    })

    it("Verify that the user is navigated to 'Fish Oil & Omega-3' Products list when 'Fish Oil & Omega-3' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(4, 2).waitForVisible();
        Home.vitaminsSublinks(4, 2).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.fishoilText);
    })

    it("Verify that the user is navigated to 'Flaxseed Oil' Products list when 'Flaxseed Oil' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(4, 3).waitForVisible();
        Home.vitaminsSublinks(4, 3).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.flaxseedText);
    })

    it("Verify that the user is navigated to 'Triple Omega' Products list when 'Triple Omega' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(4, 4).waitForVisible();
        Home.vitaminsSublinks(4, 4).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.tripleomegaText);
    })

    it("Verify that the user is navigated to 'All Omega Supplements' Products list when 'All Omega Supplements' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands2Method();
        Home.vitaminsSublinks(4, 5).waitForVisible();
        Home.vitaminsSublinks(4, 5).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.allomegaText);
    })

    it("Verify that the user is navigated to 'Adult Gummies' Products list when 'Adult Gummies' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands3Method();
        Home.vitaminsSublinks(1, 2).waitForVisible();
        Home.vitaminsSublinks(1, 2).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.adultgummiesText);
    })

    it("Verify that the user is navigated to 'Cholest Off' Products list when ' Cholest Off' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands3Method();
        Home.vitaminsSublinks(1, 4).waitForVisible();
        Home.vitaminsSublinks(1, 4).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.cholestOffText);
    })

    it("Verify that the user is navigated to 'Daily Packs' Products list when 'Daily Packs' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        Home.vands3Method();
        Home.vitaminsSublinks(1, 5).waitForVisible();
        Home.vitaminsSublinks(1, 5).click();
        productListPage.pLPProductTitles(1).waitForVisible();
        expect(productListPage.pLPProductTitles(1).getText()).to.eql(testData.titles.dailyMiximinPackTxt);
    })

    it("Verify that the user is navigated to 'Diabetes Health Pack' Products list when 'Diabetes Health Pack' option is clicked in the 'Supplements' submenu",()=>{
            Home.homepageMethod();
            if(Home.subscribeCancelIcon.isVisible()){
                Home.subscribeCancelIcon.click();
            }
            Home.vands3Method();
            Home.vitaminsSublinks(1, 6).waitForVisible();
            Home.vitaminsSublinks(1, 6).click();
            Home.productTitle.waitForVisible();
            expect(Home.productTitle.getText()).to.eql(testData.titles.diabeteshealthText);
    })

    it("Verify that the user is navigated to 'Hair, Skin, & Nails' Products list when 'Hair, Skin, & Nails' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        Home.vands3Method();
        Home.vitaminsSublinks(1, 7).waitForVisible();
        Home.vitaminsSublinks(1, 7).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.hairskinText);
    })  

    it("Verify that the user is navigated to 'Kids First Gummies' Products list when 'Kids First Gummies' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands3Method();
        Home.vitaminsSublinks(1, 8).waitForVisible();
        Home.vitaminsSublinks(1, 8).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.kidsgummyText);
    }) 

    it("Verify that the user is navigated to 'SAM-e' Products list when 'SAM-e' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands3Method();
        Home.vitaminsSublinks(1, 9).waitForVisible();
        Home.vitaminsSublinks(1, 9).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.sameText);
    })

})

describe("wellBlends",()=>{
      it("Verify that the following dropdown options are displayed when user clicks on 'WellBlends' header menu Balance Wellness, Sleep Support, Stress Relief, Immune Health",()=>{
        Home.wellBlends();
      })
    
      it("Verify that the user is navigated to 'WellBlends' home page when 'Balance Wellness' submenu is clicked in 'WellBlends' dropdown",()=>{
            Home.wellBlends();
            Home.wellBlendsDropdown(5, 1).waitForVisible();
            Home.wellBlendsDropdown(5, 1).click();
            Home.balanceWellnessText.waitForVisible();
            expect(Home.balanceWellnessText.getText()).to.eql(testData.wellBlendsData.balanceWellnessText);
      })

      it("Verify that the user is navigated to the 'Wellblends-sleep#wellblends-collection-list' page when Sleep support 'Shop' button is clicked",()=>{
            Home.wellBlends();
            Home.wellBlendsDropdown(5, 1).waitForVisible();
            Home.wellBlendsDropdown(5, 1).click();
            browser.scroll(".margin-bottom-1.featured-collections__heading");
            Home.targetedBlends_Title.waitForVisible();
            expect(Home.targetedBlends_Title.getText()).to.eql(testData.wellBlendsData.targetedBlendsTxt);
            Home.browserMethod();
            Home.wellBlendsShopButton(1).waitForVisible();
            Home.wellBlendsShopButton(1).click();
            if(Home.newRatingPopupCancelIcon.isVisible()) {
                Home.newRatingPopupCancelIcon.click();
            } 
            Home.browserMethod();
            productListPage.getTheSleepOfYourDreamstitle.waitForVisible();
            expect(productListPage.getTheSleepOfYourDreamstitle.getText()).to.eql(testData.productTitles.getTheSleepOfYourDreamsTxt)
            // productListPage.title.waitForVisible();
            // expect(Home.title.getText()).to.eql(testData.wellBlendsData.sleepOfYourDreamsTxt);
      })

      it("Verify that the user is navigated to the 'Wellblends-stress#wellblends-collection-list' page when Stress Relief 'Shop' button is clicked",()=>{
            Home.wellBlends();
            // Home.wellBlendsHeader.waitForVisible();
            // Home.wellBlendsHeader.click();
            Home.wellBlendsDropdown(5, 1).waitForVisible();
            Home.wellBlendsDropdown(5, 1).click();
            browser.scroll(".margin-bottom-1.featured-collections__heading");
            Home.targetedBlends_Title.waitForVisible()
            expect(Home.targetedBlends_Title.getText()).to.eql(testData.wellBlendsData.targetedBlendsTxt);
            Home.browserMethod();
            if(Home.newRatingPopupCancelIcon.isVisible()) {
                Home.newRatingPopupCancelIcon.click();
            } 
            Home.wellBlendsShopButton(2).waitForVisible();
            Home.wellBlendsShopButton(2).click();
            productListPage.findYourZenTitle.waitForVisible();
            expect(productListPage.findYourZenTitle.getText()).to.eql(testData.productTitles.findYourZenTxt)
            // productListPage.title.waitForVisible();
            // expect(Home.title.getText()).to.eql(testData.wellBlendsData.findYourZenTxt);
      })

      it("Verify that the user is navigated to the 'Wellblends-immune#wellblends-collection-list' page when Immune health 'Shop' button is clicked",()=>{
            Home.wellBlends();
            // Home.wellBlendsHeader.waitForVisible();
            // Home.wellBlendsHeader.click();
            Home.wellBlendsDropdown(5, 1).waitForVisible();
            Home.wellBlendsDropdown(5, 1).click();
            browser.scroll(".margin-bottom-1.featured-collections__heading");
            Home.targetedBlends_Title.waitForVisible()
            expect(Home.targetedBlends_Title.getText()).to.eql(testData.wellBlendsData.targetedBlendsTxt);
            Home.browserMethod();
            Home.wellBlendsShopButton(3).waitForVisible();
            Home.wellBlendsShopButton(3).click();
            productListPage.yourImmuneHealthTitle.waitForVisible();
            expect(productListPage.yourImmuneHealthTitle.getText()).to.eql(testData.productTitles.upgradeYourImmuneHealthTxt);
            // productListPage.title.waitForVisible();
            // expect(Home.title.getText()).to.eql(testData.wellBlendsData.upgradeYourImmuneTxt);
      })
    
      it("Verify that the user is navigated to 'Sleep Support' page when 'Sleep Support' submenu is clicked in 'WellBlends' dropdown",()=>{
            Home.wellBlends();
            Home.wellBlendsDropdown(5, 2).waitForVisible();
            Home.wellBlendsDropdown(5, 2).click();
            Home.browserMethod();
            Home.wellBlendsTitle.waitForVisible();
            expect(Home.wellBlendsTitle.getText()).to.eql(testData.wellBlendsData.sleepSupportText);
      })
    
      it("Verify that the user is navigated to 'Stress Relief' page when 'Stress Relief' submenu is clicked in 'WellBlends' dropdown",()=>{
            Home.wellBlends();
            Home.wellBlendsDropdown(5, 3).waitForVisible();
            Home.wellBlendsDropdown(5, 3).click();
            Home.wellBlendsTitle.waitForVisible();
            expect(Home.wellBlendsTitle.getText()).to.eql(testData.wellBlendsData.stressReliefText);
      })
    
      it("Verify that the user is navigated to 'Immune Health' page when 'Immune Health' submenu is clicked in 'WellBlends' dropdown",()=>{
            Home.wellBlends();
            Home.wellBlendsDropdown(5, 4).waitForVisible();
            Home.wellBlendsDropdown(5, 4).click();
            Home.wellBlendsTitle.waitForVisible();
            expect(Home.wellBlendsTitle.getText()).to.eql(testData.wellBlendsData.immuneHealthText);
      })

      it("Verify that the user is navigated to the 'health-articles' page when 'View All Resources' link is clicked",()=>{
            Home.wellBlends();
            Home.wellBlendsDropdown(5, 1).waitForVisible();
            Home.wellBlendsDropdown(5, 1).click();
            // browser.scroll(".grid-x.grid-padding-x .ais-InfiniteHits>ol>li:nth-child(15) .item-title");
            browser.execute(function() {
                document.querySelector(` .ais-InfiniteHits>ol>li:nth-child(15) .item-title`).scrollIntoView()
            })
            Home.browserMethod();
            productListPage.viewAllResourceLink.waitForVisible();
            productListPage.viewAllResourceLink.click();
            productListPage.healthArticlesTitle.waitForVisible();
            expect(productListPage.healthArticlesTitle.getText()).to.eql(testData.productTitles.healthAricleTitle);
      })

      it("Verify that user is navigated to the 'appropriate'page when 'Blog image' is clicked under 'Wellblends™ Articles & Resources' section",()=>{
            Home.wellBlends();
            // Home.wellBlendsHeader.waitForVisible();
            // Home.wellBlendsHeader.click();
            Home.wellBlendsDropdown(5, 1).waitForVisible();
            Home.wellBlendsDropdown(5, 1).click();
            browser.scroll("#related-resources:nth-child(1) .cell.medium-12 p");
            productListPage.wellBlendsArticleandResrcImgs(2).waitForVisible();
            var getTitle = productListPage.wellBlendsArticleandResrcTitles(2).getText();
            productListPage.wellBlendsArticleandResrcImgs(2).click();
            var splitProdNamee = getTitle.split(" a")
            var convertCaps = " a"
            console.log("convertCaps", convertCaps)
            var convertaWordIntoCapital = convertCaps.toUpperCase();
            console.log("convertaWordIntoCapital", convertaWordIntoCapital)
            var getSplittedName = `${splitProdNamee[0]}${convertaWordIntoCapital}${splitProdNamee[1]}`
            console.log("getSplittedName", getSplittedName)
            expect(productListPage.wellBlendsBlogTitle.getText()).to.eql(getSplittedName)
      })

      it("Verify that user is navigated to the 'appropriate' page when 'BlogTitle' is clicked under 'Wellblends™ Articles & Resources' section",()=>{
            Home.wellBlends();
            // Home.wellBlendsHeader.waitForVisible();
            // Home.wellBlendsHeader.click();
            Home.wellBlendsDropdown(5, 1).waitForVisible();
            Home.wellBlendsDropdown(5, 1).click();
            browser.scroll("#related-resources:nth-child(1) .cell.medium-12 h2");
            browser.pause(2000);
            productListPage.wellBlendsArticleandResrcTitles(2).waitForVisible();
            var getTitle = productListPage.wellBlendsArticleandResrcTitles(2).getText();
            productListPage.wellBlendsArticleandResrcTitles(2).click();
            var splitProdNamee = getTitle.split(" a")
            var convertCaps = " a"
            console.log("convertCaps", convertCaps)
            var convertaWordIntoCapital = convertCaps.toUpperCase();
            console.log("convertaWordIntoCapital", convertaWordIntoCapital)
            var getSplittedName = `${splitProdNamee[0]}${convertaWordIntoCapital}${splitProdNamee[1]}`
            console.log("getSplittedName", getSplittedName)
            productListPage.wellBlendsBlogTitle.waitForVisible();
            expect(productListPage.wellBlendsBlogTitle.getText()).to.eql(getSplittedName)
      })

      it("Verify that user is navigated to the 'appropriate' page when 'min Read link  is clicked under 'Wellblends™ Articles & Resources' section",()=>{
            Home.wellBlends();
            // Home.wellBlendsHeader.waitForVisible();
            // Home.wellBlendsHeader.click();
            Home.wellBlendsDropdown(5, 1).waitForVisible();
            Home.wellBlendsDropdown(5, 1).click();
            browser.scroll("#related-resources:nth-child(1) .cell.medium-12 h2");
            productListPage.wellBlendsArticleandResrcMinReadLinks(2).waitForVisible();
            var getTitle = productListPage.wellBlendsArticleandResrcTitles(2).getText();
            productListPage.wellBlendsArticleandResrcMinReadLinks(2).click();
            var splitProdNamee = getTitle.split(" a")
            var convertCaps = " a"
            console.log("convertCaps", convertCaps)
            var convertaWordIntoCapital = convertCaps.toUpperCase();
            console.log("convertaWordIntoCapital", convertaWordIntoCapital)
            var getSplittedName = `${splitProdNamee[0]}${convertaWordIntoCapital}${splitProdNamee[1]}`
            console.log("getSplittedName", getSplittedName)
            expect(productListPage.wellBlendsBlogTitle.getText()).to.eql(getSplittedName)
      })

      it("Verify that the user is redirected to the 'Wellblends™ Sleep Articles & Resources' section when 'Featured Articles' button is clicked ",()=>{
            Home.wellBlends();
            // Home.wellBlendsHeader.waitForVisible();
            // Home.wellBlendsHeader.click();
            Home.wellBlendsDropdown(5, 2).waitForVisible();
            Home.wellBlendsDropdown(5, 2).click();
            browser.scroll(".wellblends-collection-description__title:nth-child(1)");
            Home.browserMethod();
            productListPage.discoverYourIdealBlendsLinks(1).waitForVisible();
            productListPage.discoverYourIdealBlendsLinks(1).click();
            browser.pause(2000);
            productListPage.wellBlendsSleepArticleSub_title.waitForVisible();
            expect(productListPage.wellBlendsSleepArticleSub_title.getText()).to.eql(testData.productTitles.wellBlendsSleepArticleSubTitle)
      })

      it("Verify that user is redirected to the 'Your sleep needs are unique. So are our Nature Made® Wellblends™.' section when 'Shop sleep' button is clicked",()=>{
        Home.wellBlends();
        // Home.wellBlendsHeader.waitForVisible();
        // Home.wellBlendsHeader.click();
        Home.wellBlendsDropdown(5, 2).waitForVisible();
        Home.wellBlendsDropdown(5, 2).click();
        browser.scroll(".wellblends-collection-description__title:nth-child(1)");
        Home.browserMethod();
        productListPage.discoverYourIdealBlendsLinks(2).waitForVisible();
        productListPage.discoverYourIdealBlendsLinks(2).click();
        browser.scroll(0, 200);
        Home.browserMethod();
        productListPage.yourSleepsNeedsAreUniqueTitle.waitForVisible();
        expect(productListPage.yourSleepsNeedsAreUniqueTitle.getText()).to.eql(testData.productTitles.yourSleepsNeedsUniqueTitle)
     })

      it("Verify that user is redirected to the 'Targeted blends for your life’s need' section when 'More Wellblends' button is clicked",()=>{
            Home.wellBlends();
            // Home.wellBlendsHeader.waitForVisible();
            // Home.wellBlendsHeader.click();
            Home.wellBlendsDropdown(5, 2).waitForVisible();
            Home.wellBlendsDropdown(5, 2).click();
            browser.scroll(".wellblends-collection-description__title:nth-child(1)");
            Home.browserMethod();
            productListPage.discoverYourIdealBlendsLinks(3).waitForVisible();
            productListPage.discoverYourIdealBlendsLinks(3).click();
            browser.scroll(0, 200);
            Home.browserMethod();
            Home.targetedBlends_Title.waitForVisible();
            expect(Home.targetedBlends_Title.getText()).to.eql(testData.wellBlendsData.targetedBlendsTxt)
      })

})

describe("BestSeller and New Products on headermenu ",()=>{
    it("Verify that the 'Best Seller' Products list page is displayed when 'Best Sellers' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vandsMethod();
        Home.bestSellers.waitForVisible();
        Home.bestSellers.click();
        Home.bestSellerBadge(1).waitForVisible();
        expect(Home.bestSellerBadge(1).getText()).to.eql(testData.headers.bestSellerBadgeTxt);
    })

    it("Verify that the user is redirected to the appropriate product details page when the product image is clicked",()=>{
        Home.homepageMethod();
        Home.vandsMethod();
        Home.bestSellers.waitForVisible();
        Home.bestSellers.click();
        Home.bestSellerProdImg(1).waitForVisible();
        var getTxtOfProdName = Home.bestSellerProdTitles(1).getText();
        console.log("getTxtOfProdName", getTxtOfProdName)
        Home.bestSellerProdImg(1).click();
        var splitProdNamee = getTxtOfProdName.split(" m")
        console.log("splitProdNamee", splitProdNamee)
        var convertCaps = " m"
        console.log("convertCaps", convertCaps)
        var convertaWordIntoCapital = convertCaps.toUpperCase();
        console.log("convertaWordIntoCapital", convertaWordIntoCapital)
        var getSplittedName = `${splitProdNamee[0]}${convertaWordIntoCapital}${splitProdNamee[1]}`
        console.log("getSplittedName", getSplittedName)
        expect(productDetailsPage.productName.getText()).to.eql(getSplittedName)
    })

    it("Verify that the user is redirected to the appropriate product details page when the product title is clicked",()=>{
        Home.homepageMethod();
        Home.vandsMethod();
        Home.bestSellers.waitForVisible();
        Home.bestSellers.click();
        Home.bestSellerProdTitles(1).waitForVisible();
        var getTxtOfProdName = Home.bestSellerProdTitles(1).getText();
        Home.bestSellerProdTitles(1).click();
        var splitProdNamee = getTxtOfProdName.split(" m")
        var convertCaps = " m"
        var convertaWordIntoCapital = convertCaps.toUpperCase()
        console.log("convertaWordIntoCapital", convertaWordIntoCapital)
        var getSplittedName = `${splitProdNamee[0]}${convertaWordIntoCapital}${splitProdNamee[1]}`
        console.log("getSplittedName", getSplittedName)
        expect(productDetailsPage.productName.getText()).to.eql(getSplittedName) 
    })

    it("Verify that the user is redirected to the appropriate product details page when the 'Buy Now' button is clicked",()=>{
        Home.homepageMethod();
        Home.vandsMethod();
        Home.bestSellers.waitForVisible();
        Home.bestSellers.click();
        Home.bestSellerBuyNowBtn(1).waitForVisible();
        var getTxtOfProdName = Home.bestSellerProdTitles(1).getText();
        Home.bestSellerBuyNowBtn(1).click();
        var splitProdNamee = getTxtOfProdName.split(" m")
        var convertCaps = " m"
        var convertaWordIntoCapital = convertCaps.toUpperCase()
        console.log("convertaWordIntoCapital", convertaWordIntoCapital)
        var getSplittedName = `${splitProdNamee[0]}${convertaWordIntoCapital}${splitProdNamee[1]}`
        console.log("getSplittedName", getSplittedName)
        expect(productDetailsPage.productName.getText()).to.eql(getSplittedName) 
    })

    it("Verify that the user is redirected to the 'Best seller' products page when the 'View all best seller' link is clicked",()=>{
        Home.homepageMethod();
        Home.vandsMethod();
        Home.bestSellers.waitForVisible();
        Home.bestSellers.click();
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        browser.scroll(0, 900);
        Home.viewAllBestSellersLink.waitForVisible();
        Home.viewAllBestSellersLink.click();
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        productListPage.bannerTitle.waitForVisible();
        expect(productListPage.bannerTitle.getText()).to.eql(testData.headers.bestSellers);  
    })

    it("Verify that the 'New Products' list page is displayed when 'New product' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vandsMethod();
        Home.newProducts.waitForVisible();
        Home.newProducts.click();
        Home.newBadges(2).waitForVisible();
        expect(Home.newBadges(2).getText()).to.eql(testData.headers.newBadgeTxt);
    }) 

    it("Verify that the user is redirected to the product details page when product image is clicked",()=>{
        Home.homepageMethod();
        Home.vandsMethod();
        Home.newProducts.waitForVisible();
        Home.newProducts.click();
        Home.newProductsProdImg(1).waitForVisible();
        var getTxtOfProdName = Home.newProductsProdTitles(1).getText();
        Home.newProductsProdImg(1).click();
        var splitProdNamee = getTxtOfProdName.split(" m")
        var convertCaps = " m"
        var convertaWordIntoCapital =convertCaps.toUpperCase()
        console.log("convertaWordIntoCapital", convertaWordIntoCapital)
        var getSplittedName = `${splitProdNamee[0]}${convertaWordIntoCapital}${splitProdNamee[1]}`
        console.log("getSplittedName", getSplittedName)
        expect(productDetailsPage.productName.getText()).to.eql(getSplittedName)
    })

    it("Verify that the user is redirected to the product details page when product name is clicked",()=>{
        Home.homepageMethod();
        Home.vandsMethod();
        Home.newProducts.waitForVisible();
        Home.newProducts.click();
        Home.newProductsProdTitles(1).waitForVisible();
        var getTxtOfProdName = Home.newProductsProdTitles(1).getText();
        Home.newProductsProdTitles(1).click();
        var splitProdNamee = getTxtOfProdName.split(" m")
        var convertCaps = " m"
        var convertaWordIntoCapital = convertCaps.toUpperCase()
        console.log("convertaWordIntoCapital", convertaWordIntoCapital)
        var getSplittedName = `${splitProdNamee[0]}${convertaWordIntoCapital}${splitProdNamee[1]}`
        console.log("getSplittedName", getSplittedName)
        expect(productDetailsPage.productName.getText()).to.eql(getSplittedName)
    })

    it("Verify that the user is redirected to the product details page when product star rating is clicked",()=>{
        Home.homepageMethod();
        Home.vandsMethod();
        Home.newProducts.waitForVisible();
        Home.newProducts.click();
        Home.newProductsProdTitles(1).waitForVisible();
        var getTxtOfProdName = Home.newProductsProdTitles(1).getText();
        Home.newProductsProdTitles(1).click();
        var splitProdNamee = getTxtOfProdName.split(" m")
        var convertCaps = " m"
        var convertaWordIntoCapital = convertCaps.toUpperCase()
        console.log("convertaWordIntoCapital", convertaWordIntoCapital)
        var getSplittedName = `${splitProdNamee[0]}${convertaWordIntoCapital}${splitProdNamee[1]}`
        console.log("getSplittedName", getSplittedName)
        expect(productDetailsPage.productName.getText()).to.eql(getSplittedName) 
    })

    it("Verify that the user is redirected to the product details page when 'Buy Now' button is clicked",()=>{
        Home.homepageMethod();
        Home.vandsMethod();
        Home.newProducts.waitForVisible();
        Home.newProducts.click();
        Home.newProductsBuyNowBtn(1).waitForVisible();
        var getTxtOfProdName = Home.newProductsProdTitles(1).getText();
        Home.newProductsBuyNowBtn(1).click();
        var splitProdNamee = getTxtOfProdName.split(" m")
        var convertCaps = " m"
        var convertaWordIntoCapital = convertCaps.toUpperCase()
        console.log("convertaWordIntoCapital", convertaWordIntoCapital)
        var getSplittedName = `${splitProdNamee[0]}${convertaWordIntoCapital}${splitProdNamee[1]}`
        console.log("getSplittedName", getSplittedName)
        expect(productDetailsPage.productName.getText()).to.eql(getSplittedName) 
    })

    it("Verify that the 'All Products' list page is displayed when 'Shop All' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vandsMethod();
        Home.shopAll.waitForVisible();
        Home.shopAll.click();
        productListPage.bannerTitle.waitForVisible();
        expect(productListPage.bannerTitle.getText()).to.eql(testData.productTitles.shopAllTitle)
    })

    it("Verify that the user is redirected to the Men's Multivitamins page when 'Discover Men's Multivitamins' link is clicked",()=>{
        Home.homepageMethod();
        Home.vandsMethod();
        browser.scroll(0, 100);
        Home.browserMethod();
        Home.discoverMensMultivitamins.waitForVisible();
        Home.discoverMensMultivitamins.click();
        productListPage.bannerTitle.waitForVisible();
        expect(productListPage.bannerTitle.getText()).to.eql(testData.productTitles.mensMultivitaminsTxt)
    })
})

describe("Find your daily routine - Bundles and Recently viewed Products",()=>{

    it("Verify that the 'Bundles' Products list is displayed when 'Bundles' tab is clicked in the 'Find your daily routine' section",()=>{
        Home.homepageMethod();
        browser.execute(function() {
            document.querySelector(`.button.button-primary.button-wb `).scrollIntoView()
          })        
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
         }
        Home.bundleTab.waitForVisible();
        Home.bundleTab.click();
        Home.bundleProdTitles(2).waitForVisible()
        expect(Home.bundleProdTitles(2).getText()).to.eql(testData.productTitles.bundleProd);
    })

    it("Verify that the user is redirected to the product details page when product image is clicked",()=>{
        Home.findUrDailyRoutneMthd();
        Home.bundleProdImgs(2).waitForVisible();
        Home.browserMethod();
        var a = Home.bundleProdTitles(2).getText();
        var convertedText = a.toLowerCase();
        console.log("a",a);
        Home.bundleProdImgs(2).click();
        Home.browserMethod();
        productDetailsPage.productName.waitForVisible();
        var getTextOnProductList = productListPage.productName.getText()
        var convertTextOnPDP = getTextOnProductList.toLowerCase();
        expect(convertTextOnPDP).to.eql(convertedText)
    })

    it("Verify that the user is redirected to the product details page when product title is clicked",()=>{
        Home.findUrDailyRoutneMthd();
        Home.bundleProdTitles(3).waitForVisible();
        var a = Home.bundleProdTitles(3).getText();
        var convertedText = a.toLowerCase();
        console.log("a",a);
        Home.bundleProdTitles(3).click();
        Home.browserMethod();
        productDetailsPage.productName.waitForVisible();
        var getTextOnProductList = productListPage.productName.getText()
        var convertTextOnPDP = getTextOnProductList.toLowerCase();
        expect(convertTextOnPDP).to.eql(convertedText)
    })

    it("Verify that the user is navigated to 'Products details' page when 'Bundles' products 'Buy now' is clicked",()=>{
        Home.homepageMethod();
        browser.execute(function() {
        document.querySelector(`.hero-grid-container:nth-child(1) .button.button-primary.button-wb`).scrollIntoView()
        })
        Home.browserMethod();
        if(Home.subscribeCancelIcon.isVisible()) {
        Home.subscribeCancelIcon.click();
        }
        Home.bundleTab.waitForVisible();
        Home.bundleTab.click();
        browser.pause(3000);
        Home.bunldeProdBuyNowBtns(3).waitForVisible();
        var a = Home.bundleProdTitles(3).getText();
        var convertedText = a.toLowerCase();
        console.log("a",a);
        Home.bestSellerBuyNowBtns(3).click();
        Home.browserMethod();
        productDetailsPage.productName.waitForVisible();
        var getTextOnProductList = productListPage.productName.getText()
        var convertTextOnPDP = getTextOnProductList.toLowerCase();
        console.log("convertTextOnPDP", convertTextOnPDP);
        expect(convertTextOnPDP).to.eql(convertedText)
     
    })

    it("Verify that the recently viewed products are displayed in the 'Recently viewed' tab",()=>{
        Home.homepageMethod();
        browser.execute(function() {
            document.querySelector(`.button.button-primary.button-wb `).scrollIntoView()
        }) 
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
         }       
         Home.recentlyViewedTab.waitForVisible();
         Home.recentlyViewedTab.click();
         if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
         }  
         browser.scroll("#custom-tab-recently-viewed ul li:nth-child(2).item-title a");
         browser.pause(6000);
         Home.recentlyViewedProdTitles(2).waitForVisible();
         var getTextOnHomePage = Home.recentlyViewedProdTitles(2).getText()
         expect(getTextOnHomePage).to.eql(getTextOnHomePage)
    })
})

describe("Specialty",()=>{
    it("Verify that the user is navigated to 'Adult Gummies' Products list when 'Adult Gummies' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands3Method();
        Home.vitaminsSublinks(1, 2).waitForVisible();
        Home.vitaminsSublinks(1, 2).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.adultgummiesText);
    })
    
    it("Verify that the user is navigated to 'Cholest Off' Products list when ' Cholest Off' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands3Method();
        Home.vitaminsSublinks(1, 4).waitForVisible();
        Home.vitaminsSublinks(1, 4).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.cholestOffText);
    })
    
    it("Verify that the user is navigated to 'Daily Packs' Products list when 'Daily Packs' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands3Method();
        Home.vitaminsSublinks(1, 5).waitForVisible();
        Home.vitaminsSublinks(1, 5).click();
        productListPage.pLPProductTitles(1).waitForVisible();
        expect(productListPage.pLPProductTitles(1).getText()).to.eql(testData.titles.dailyMiximinPackTxt);
    })
    
    it("Verify that the user is navigated to 'Diabetes Health Pack' Products list when 'Diabetes Health Pack' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands3Method();
        Home.vitaminsSublinks(1, 6).waitForVisible();
        Home.vitaminsSublinks(1, 6).click();
        Home.productTitle.waitForVisible();
        expect(Home.productTitle.getText()).to.eql(testData.titles.diabeteshealthText);
    })
    
    it("Verify that the user is navigated to 'Hair, Skin, & Nails' Products list when 'Hair, Skin, & Nails' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands3Method();
        Home.vitaminsSublinks(1, 7).waitForVisible();
        Home.vitaminsSublinks(1, 7).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.hairskinText);
    })   
    
    it("Verify that the user is navigated to 'Kids First Gummies' Products list when 'Kids First Gummies' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands3Method();
        Home.vitaminsSublinks(1, 8).waitForVisible();
        Home.vitaminsSublinks(1, 8).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.kidsgummyText);
    })  
    
    it("Verify that the user is navigated to 'SAM-e' Products list when 'SAM-e' option is clicked in the 'Supplements' submenu",()=>{
        Home.homepageMethod();
        Home.vands3Method();
        Home.vitaminsSublinks(1, 9).waitForVisible();
        Home.vitaminsSublinks(1, 9).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.sameText);
    })
})   
    
describe("HealthNeeds",()=>{
    it("Verify that the dropdown options are displayed when user mouse hover on 'Health Needs' header menu",()=>{
       Home.healthneedsMethod();
    })
          
    it("Verify that the user is navigated to 'Beauty' Products list when 'Beauty' option is clicked in the 'Health Needs' dropdown",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 1).waitForVisible();
        Home.healthNeedsdropdown(2, 1).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.beautyText);
    })
    
    it("Verify that the user is navigated to 'Bone Health' Products list when 'Bone Health' option is clicked in the 'Health Needs' dropdown",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 2).waitForVisible();
        Home.healthNeedsdropdown(2, 2).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.bonehealthText);
    })
    
    it("Verify that the user is navigated to 'Digestion' Products list when 'Digestion' option is clicked in the 'Health Needs' dropdown",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 3).waitForVisible();
        Home.healthNeedsdropdown(2, 3).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.digestionText);
    })
    
    it("Verify that the user is navigated to 'Energy' Products list when 'Energy' option is clicked in the 'Health Needs' dropdown",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 4).waitForVisible();
        Home.healthNeedsdropdown(2, 4).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.energyText);
    })
    
    it("Verify that the user is navigated to 'Eye Health' Products list when 'Eye Health' option is clicked in the 'Health Needs' dropdown",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 5).waitForVisible();
        Home.healthNeedsdropdown(2, 5).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.eyehealthText);
       
    })
    
    it("Verify that the user is navigated to 'General Wellness' Products list when 'General wellness' option is clicked in the 'Health Needs' dropdown",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 6).waitForVisible();
        Home.healthNeedsdropdown(2, 6).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.wellnessText);
    })
    
    it("Verify that the user is navigated to 'Heart' Products list when 'Heart' option is clicked in the 'Health Needs' dropdown",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 7).waitForVisible();
        Home.healthNeedsdropdown(2, 7).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.heartText);
        
    })
    
    it("Verify that the user is navigated to 'Immune Health' Products list when 'Immune Health' option is clicked in the 'Health Needs' dropdown",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 8).waitForVisible();
        Home.healthNeedsdropdown(2, 8).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.immunehealthText);
       
    })
    
    it("Verify that the user is navigated to 'Joints' Products list when 'Joints' option is clicked in the 'Health Needs' dropdown",()=>{
            Home.healthneedsMethod();
            Home.healthNeedsdropdown(2, 9).waitForVisible();
            Home.healthNeedsdropdown(2, 9).click();
            Home.kidsvitaminstext.waitForVisible();
            expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.jointsText);
       
    })
    
    it("Verify that the user is navigated to 'Kids' Products list when 'Kids' option is clicked in the 'Health Needs' dropdown",()=>{
            Home.healthneedsMethod();
            Home.healthNeedsdropdown(2, 10).waitForVisible();
            Home.healthNeedsdropdown(2, 10).click();
            Home.kidsvitaminstext.waitForVisible();
            expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.kidsText);
    })
    
    it("Verify that the user is navigated to 'Men's Health' Products list when 'Men's Health' option is clicked in the 'Health Needs' dropdown",()=>{
            Home.healthneedsMethod();
            Home.healthNeedsdropdown(2, 11).waitForVisible();
            Home.healthNeedsdropdown(2, 11).click();
            Home.kidsvitaminstext.waitForVisible();
            expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.menshealthText);
    })
    
    it("Verify that the user is navigated to 'Mood' Products list when 'Mood' option is clicked in the 'Health Needs' dropdown",()=>{
            Home.healthneedsMethod();
            Home.healthNeedsdropdown(2, 12).waitForVisible();
            Home.healthNeedsdropdown(2, 12).click();
            Home.kidsvitaminstext.waitForVisible();
            expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.moodText);
    })
    
    it("Verify that the user is navigated to 'Prenatal and Postnatal' Products list when 'Prenatal and Postnatal' option is clicked in the 'Health Needs' dropdown",()=>{
            Home.healthneedsMethod();
            Home.healthNeedsdropdown(2, 13).waitForVisible();
            Home.healthNeedsdropdown(2, 13).click();
            Home.kidsvitaminstext.waitForVisible();
            expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.pandpText);
    })
    
    it("Verify that the user is navigated to 'Sleep' Products list when 'Sleep' option is clicked in the 'Health Needs' dropdown",()=>{
            Home.healthneedsMethod();
            Home.healthNeedsdropdown(2, 14).waitForVisible();
            Home.healthNeedsdropdown(2, 14).click();
            Home.kidsvitaminstext.waitForVisible();
            expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.aGoodNytTmrwTxt);
    })
    
    it("Verify that the user is navigated to 'Stress' Products list when 'Stress' option is clicked in the 'Health Needs' dropdown",()=>{
            Home.healthneedsMethod();
            Home.healthNeedsdropdown(2, 15).waitForVisible();
            Home.healthNeedsdropdown(2, 15).click();
            Home.kidsvitaminstext.waitForVisible();
            expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.stressText);
    })
    
    it("Verify that the user is navigated to 'Women's Health' Products list when 'Women's Health' option is clicked in the 'Health Needs' dropdown",()=>{
            Home.healthneedsMethod();
            Home.healthNeedsdropdown(2, 16).waitForVisible();
            Home.healthNeedsdropdown(2, 16).click();
            Home.kidsvitaminstext.waitForVisible();
            expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.womenshealthText);
    })
    
})
    
describe("Education",()=>{
    it("Verify that the dropdown options are displayed when user clicks on 'Education' header menu",()=>{
          Home.educationMethod();
    })

    it("Verify that the user is navigated to 'Health Resources' page when 'Health Resources' option is clicked in the 'Education' dropdown",()=>{
        Home.educationMethod();
        Home.educationDropdown(3, 1).waitForVisible();
        Home.healthNeedsdropdown(3, 1).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.educationData.healthArticlesText);
    })

    it("Verify that the user is navigated to 'Featured articles' page when 'Featured Articles' option is clicked in the 'Education' dropdown",()=>{
        Home.educationMethod();
        Home.educationDropdown(3, 2).waitForVisible();
        Home.educationDropdown(3, 2).click();
        Home.featuredArticle.waitForVisible();
        expect(Home.featuredArticle.getText()).to.eql(testData.educationData.featuredarticlesText);
    })

    // it("Verify that the user is navigated to 'Clinical Studies' page when 'Clinical Studies' option is clicked in the 'Education' dropdown",()=>{
    //     Home.educationMethod();
    //     Home.educationDropdown(3, 3).waitForVisible();
    //     Home.educationDropdown(3, 3).click();
    //     Home.clinicalStudies.waitForVisible();
    //     expect(Home.clinicalStudies.getText()).to.eql(testData.educationData.clinicalText);
    // })

    it("Verify that the user is navigated to 'Meet Our Experts' page when 'Meet Our Experts' option is clicked in the 'Education' dropdown",()=>{
        Home.educationMethod();
        Home.educationDropdown(3, 3).waitForVisible();
        Home.educationDropdown(3, 3).click();
        Home.meetourExperts.waitForVisible();
        expect(Home.meetourExperts.getText()).to.eql(testData.educationData.meetourexpertsText);
    })

    it("Verify that the user is navigated to 'FAQ' page when 'FAQ' option is clicked in the 'Education' dropdown",()=>{
        Home.educationMethod();
        Home.educationDropdown(3, 5).waitForVisible();
        Home.educationDropdown(3, 5).click();
        Home.faq.waitForVisible();
        expect(Home.faq.getText()).to.eql(testData.educationData.faqText);
    })
})

describe("About us",()=>{
    it("Verify that the user is redirected to the 'About us' page when 'About Nature Made'  option is clicked",()=>{
        Home.homepageMethod();
        Home.aboutUs.waitForVisible();
        // browser.moveToObject(`//*[@class='main-nav-list']/li[4] //*[@class='main-nav-parent-item']`);
        Home.aboutUs.click();
        Home.browserMethod();
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
         }
        Home.aboutUs.waitForVisible();
        Home.aboutUs.click();
        Home.aboutUsdropdown(4, 1).waitForVisible();
        Home.aboutUsdropdown(4, 1).click();
        productListPage.bannerTitle.waitForVisible();
        expect(productListPage.bannerTitle.getText()).to.eql(testData.aboutusdData.aboutText);
    })

    it("Verify that the user is navigated to 'Our History' page when 'Our History' submenu is clicked in the 'About us' dropdown",()=>{
        Home.aboutusMethod();
        Home.aboutUsdropdown(4, 2).waitForVisible();
        Home.aboutUsdropdown(4, 2).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.aboutusdData.historyText);
    })
    
    it("Verify that the user is navigated to 'Our Experts' page when 'Our Experts' submenu is clicked in the 'About us' dropdown",()=>{
        Home.aboutusMethod();
        Home.aboutUsdropdown(4, 3).waitForVisible();
        Home.aboutUsdropdown(4, 3).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.aboutusdData.expertsText);
    })
    
    it("Verify that the user is navigated to 'Our Brands' page when 'Our Brands' submenu is clicked in the 'About us' dropdown",()=>{
        Home.aboutusMethod();
        Home.aboutUsdropdown(4, 4).waitForVisible();
        Home.aboutUsdropdown(4, 4).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.aboutusdData.brandsText);
    })
    
    it("Verify that the user is navigated to 'Quality' page when 'Quality' submenu is clicked in the 'About us' dropdown",()=>{
        Home.aboutusMethod();
        Home.aboutUsdropdown(4, 5).waitForVisible();
        Home.aboutUsdropdown(4, 5).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.aboutusdData.qualityText);
    })

    it("Verify that the user is navigated to 'Contact US' page when 'Contact Us' submenu is clicked in the 'About us' dropdown",()=>{
        Home.aboutusMethod();
        Home.aboutUsdropdown(4, 6).waitForVisible();
        Home.aboutUsdropdown(4, 6).click();
        Home.contacUs.waitForVisible();
        expect(Home.contacUs.getText()).to.eql(testData.aboutusdData.contactText);
    })
      
    it("Verify that the following dropdown options are displayed when user clicks on 'WellBlends' header menu Balance Wellness, Sleep Support, Stress Relief, Immune Health",()=>{
        Home.wellBlends();
    })
    
    it("Verify that the user is navigated to 'WellBlends' home page when 'Balance Wellness' submenu is clicked in 'WellBlends' dropdown",()=>{
       Home.wellBlends();
       Home.wellBlendsDropdown(5, 1).waitForVisible();
       Home.wellBlendsDropdown(5, 1).click();
       Home.balanceWellnessText.waitForVisible();
       expect(Home.balanceWellnessText.getText()).to.eql(testData.wellBlendsData.balanceWellnessText);
    })
    
    it("Verify that the user is navigated to 'Sleep Support' page when 'Sleep Support' submenu is clicked in 'WellBlends' dropdown",()=>{
        Home.wellBlends();
        Home.wellBlendsDropdown(5, 2).waitForVisible();
        Home.wellBlendsDropdown(5, 2).click();
        Home.browserMethod();
        Home.wellBlendsTitle.waitForVisible();
        expect(Home.wellBlendsTitle.getText()).to.eql(testData.wellBlendsData.sleepSupportText);
    })
    
    it("Verify that the user is navigated to 'Stress Relief' page when 'Stress Relief' submenu is clicked in 'WellBlends' dropdown",()=>{
        Home.wellBlends();
        Home.wellBlendsDropdown(5, 3).waitForVisible();
        Home.wellBlendsDropdown(5, 3).click();
        Home.wellBlendsTitle.waitForVisible();
        expect(Home.wellBlendsTitle.getText()).to.eql(testData.wellBlendsData.stressReliefText);
    })
    
    it("Verify that the user is navigated to 'Immune Health' page when 'Immune Health' submenu is clicked in 'WellBlends' dropdown",()=>{
        Home.wellBlends();
        Home.wellBlendsDropdown(5, 4).waitForVisible();
        Home.wellBlendsDropdown(5, 4).click();
        Home.wellBlendsTitle.waitForVisible();
        expect(Home.wellBlendsTitle.getText()).to.eql(testData.wellBlendsData.immuneHealthText);
    })

    it("Verify that the user is navigated to 'Shop All vitamins and supplements' page when 'Shop All Wellblends' submenu is clicked in 'WellBlends' dropdown",()=>{
        Home.wellBlends();
        Home.wellBlendsDropdown(5, 5).waitForVisible();
        Home.wellBlendsDropdown(5, 5).click();
        productListPage.wellblends_Title.waitForVisible();
        expect(productListPage.wellblends_Title.getText()).to.eql(testData.wellBlendsData.balanceWellnessText);
    })
 
})

describe("Footer Social media links",()=>{
    it("Verify that the user is redirected to the 'Facebook' login page when the 'Facebook' icon is clicked in the footer ",()=>{
        Home.homepageMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        Home.browserMethod();
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        socialMediaHomePage.footerSocialMediaLinks(1).waitForVisible();
        socialMediaHomePage.footerSocialMediaLinks(1).click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);     
        Home.browserMethod();
        socialMediaHomePage.facebookNMPageTitle.waitForVisible();
        expect(socialMediaHomePage.facebookNMPageTitle.getText()).to.eql(testData.footerSocialMediaLinks.facebookTitleTxt);
        browser.close(); 
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[0]);  
    })

    it("Verify that the user is redirected to the 'Twitter' login page when the 'Twitter' icon is clicked in the footer ",()=>{
        Home.homepageMethod();
        // browser.refresh();
        browser.scroll("#footer .cell.medium-5.first p");
        browser.waitUntil(
            function() {
               return (
               browser.isVisible
                   (`.footer-social.margin-bottom-3:nth-child(4) ul>li:nth-child(2) a`) === true
               );
            },
            20000,
             " Twitter page is visible even after 20 secs"
         );            
        socialMediaHomePage.footerSocialMediaLinks(2).waitForVisible();
        socialMediaHomePage.footerSocialMediaLinks(2).click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]); 
        Home.browserMethod();
        socialMediaHomePage.twitterNMPageTitle.waitForVisible();
        expect(socialMediaHomePage.twitterNMPageTitle.getText()).to.eql(testData.footerSocialMediaLinks.twitterTitleTxt);
        browser.close(); 
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[0]); 
    })

    it("Verify that the user is redirected to the 'Youtube' page when the 'Youtube' icon is clicked in the footer",()=>{
        Home.homepageMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        Home.browserMethod();
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        browser.waitUntil(
            function() {
               return (
               browser.isVisible
                   (`.footer-social.margin-bottom-3:nth-child(4) ul>li:nth-child(2) a`) === true
               );
            },
            20000,
             " Twitter page is visible even after 20 secs"
         );
        socialMediaHomePage.footerSocialMediaLinks(3).waitForVisible();
        socialMediaHomePage.footerSocialMediaLinks(3).click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);  
        Home.browserMethod();
        socialMediaHomePage.youtubeNMPageTitle.waitForVisible();
        expect(socialMediaHomePage.youtubeNMPageTitle.getText()).to.eql(testData.footerSocialMediaLinks.youTubeTitleTxt);
        browser.close(); 
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[0]); 
    })

    it("Verify that the user is redirected to the 'Pinterest' login page when the 'Pinterest' icon is clicked in the footer",()=>{
        Home.homepageMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        Home.browserMethod();
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        socialMediaHomePage.footerSocialMediaLinks(5).waitForVisible();
        socialMediaHomePage.footerSocialMediaLinks(5).click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);   
        socialMediaHomePage.pinterestNMPageTitle.waitForVisible();
        expect(socialMediaHomePage.pinterestNMPageTitle.getText()).to.eql(testData.footerSocialMediaLinks.pinterestTitleTxt);
        browser.close(); 
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[0]); 
    })

    it("Verify that the user is redirected to the top of the page when the company logo is clicked in the footer",()=>{
        Home.homepageMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        Home.browserMethod();
        socialMediaHomePage.backToTopBtn.waitForVisible();
        socialMediaHomePage.backToTopBtn.click();
        Home.secondShopNowLink.waitForVisible();
        expect(Home.secondShopNowLink.getText()).to.eql(testData.titles.shopNowText);
    })

    it("Verify that the user is redirected to the 'Instagram' login page when the 'Instagram' icon is clicked in the footer",()=>{
        Home.homepageMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        Home.browserMethod();
        if(Home.subscribeCancelIcon.isVisible()) {
            Home.subscribeCancelIcon.click();
        }
        socialMediaHomePage.footerSocialMediaLinks(4).waitForVisible();
        socialMediaHomePage.footerSocialMediaLinks(4).click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);     
        Home.browserMethod();
        if((socialMediaHomePage.nmVitaminsInstaHeading.isVisible()) === true) {
            socialMediaHomePage.nmVitaminsInstaHeading.waitForVisible();
            expect(socialMediaHomePage.nmVitaminsInstaHeading.getText()).to.eql(testData.footerSocialMediaLinks.instagramTitleTxt);
        }
        else{
            Home.browserMethod();
            socialMediaHomePage.instagramOldhomePageName.waitForVisible();
            expect(socialMediaHomePage.instagramOldhomePageName.getText()).to.eql(testData.footerSocialMediaLinks.instagramTxt);
        }
        browser.close(); 
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[0]); 
    })

    it("Verify that the user is redirected to the 'Terms of use' page when the 'Terms of use' link clicked in the footer",()=>{
        // Home.homepageMethod(); 
        browser.scroll(".footer_legal > div ul li:nth-child(2) a");
        Home.footerLegalTermsLinks(2).waitForVisible();
        Home.footerLegalTermsLinks(2).click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]); 
        Home.browserMethod();
        socialMediaHomePage.termsAndConditionTitle.waitForVisible();
        expect(socialMediaHomePage.termsAndConditionTitle.getText()).to.eql(testData.footerSocialMediaLinks.termsOfUseTxt);
        browser.close(); 
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[0]); 
    })

    it("Verify that the user is redirected to the 'Nature made privacy policy' page when the 'CA Collection Notice' link is clicked in the footer",()=>{
        // Home.homepageMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        browser.pause(2400);        
        socialMediaHomePage.footerLegalTermsLinks(1).waitForVisible();
        socialMediaHomePage.footerLegalTermsLinks(1).click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]); 
        Home.browserMethod();
        socialMediaHomePage.cPSIACertificateTitle.waitForVisible();
        expect(socialMediaHomePage.cPSIACertificateTitle.getText()).to.eql(testData.footerSocialMediaLinks.catrgoriesOfPersonalInfrmtn);
        browser.close(); 
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[0]); 
    })

    it("Verify that the user is redirected to the 'Nature Made Privacy Policy' page when the 'Nature Made Privacy Policy' link is clicked in the footer",()=>{
        // Home.homepageMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        Home.browserMethod();
        socialMediaHomePage.footerLegalTermsLinks(3).waitForVisible();
        socialMediaHomePage.footerLegalTermsLinks(3).click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]); 
        Home.browserMethod();
        socialMediaHomePage.privacyPolicyTitle.waitForVisible();
        expect(socialMediaHomePage.privacyPolicyTitle.getText()).to.eql(testData.footerSocialMediaLinks.privacyPolicyTxt);
        browser.close(); 
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[0]); 
    })

    it("Verify that the 'FDA' statement is displayed appropriately in the footer",()=>{
        // Home.homepageMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        Home.browserMethod();
        socialMediaHomePage.fDAStatement.waitForVisible();
        expect(socialMediaHomePage.fDAStatement.getText()).to.eql(testData.footerSocialMediaLinks.fDAStatemntTxt);
    })

    it("Verify that the user is redirected to the 'Accessibility' page when the 'Accessibility' link is clicked in the footer",()=>{
        Home.homepageMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        Home.browserMethod();
        socialMediaHomePage.accessibilityLink.waitForVisible();
        socialMediaHomePage.accessibilityLink.click();
        Home.browserMethod();
        Home.accessibilityAdjustmentsHeading.waitForVisible();
        expect(Home.accessibilityAdjustmentsHeading.getText()).to.eql(testData.heading.accessibilityHeading); 
    })


})

describe("Subscribe",()=>{
    it("Verify that the 'Welcome' message is displayed appropriately when the user subscribed for NatureMade emails",()=>{
        Home.homepageMethod();
        browser.execute(function() {
            document.querySelector(`#shopify-section-nm-footer .cell.medium-5.first p `).scrollIntoView()
        })
        browser.pause(8000);
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
         }
        // browser.scroll("#shopify-section-nm-footer .cell.medium-5.first p");
        Home.browserMethod();
        footer.subscribe.waitForVisible();
        footer.subscribe.click();
        footer.subscribe.setValue([testData.footer.email]);
        Home.browserMethod();
        footer.submitButton.waitForVisible();
        footer.submitButton.click();
        footer.subscribeSuccess.waitForVisible();
        expect(footer.subscribeSuccess.getText()).to.eql(testData.footer.sucessText);
    })

    it("Verify that the 'Sorry we could not find any results' page is displayed when searched items were not found",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue([testData.searchbar.product]);
        Home.searchBtn.waitForVisible();
        Home.searchBtn.click();
        productListPage.itemNotAvailableTitle.waitForVisible();
        expect(productListPage.itemNotAvailableTitle.getText()).to.eql(testData.searchbar.itemNotAvailableInResult);
    })

    it("Verify that the appropriate search results are displayed when the user searches the 'Number'",()=>{
        // Home.forDevUrlLaunch()
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue([testData.searchbar.prodNameWithNumbr, "Enter"]);
        Home.searchResultTitle.waitForVisible();
        expect(Home.searchResultTitle.getText()).to.eql(testData.titles.searchProdName);
    })

    it("Verify that the appropriate search results are displayed when the user searches the 'Characters'",()=>{
        // Home.forDevUrlLaunch()
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue([testData.searchbar.prodNameWithChar, "Enter"]);
        Home.searchResultTitle.waitForVisible();
        expect(Home.searchResultTitle.getText()).to.eql(testData.titles.searchProdName1);
    })

    it("Verify that the appropriate search results are displayed when the user searches the 'Special characters'",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue([testData.searchbar.prodNameWithSpecialChar, "Enter"]);
        Home.searchResultTitle.waitForVisible();
        expect(Home.searchResultTitle.getText()).to.eql(testData.titles.searchProdName12);
    })

    it("Verify that the appropriate products are displayed when the user enters a valid product name in the search field",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue([testData.searchbar.prodName, "Enter"]);
        Home.searchResultTitle.waitForVisible();
        expect(Home.searchResultTitle.getText()).to.eql(testData.titles.BiotinProduct);
    })
})

describe("Productlist page blogs",()=>{
    it("Verify that the user is redirected to the appropriate 'Blog' page when the 'Image' is clicked in the beauty resources section on the product list page",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 1).waitForVisible();
        Home.healthNeedsdropdown(2, 1).click();
        browser.scroll(".margin-bottom-1.article-title")
        // browser.execute(function() {
        //         document.querySelector(`#SubCollectionProductGrid div:nth-child(5) h3`).scrollIntoView()
        // })    
        browser.waitUntil(
            function() {
               return (
               browser.isVisible
                   (`#SubCollectionProductGrid div:nth-child(5) h3`) === true
               );
            },
            60000,
             "Section not visible even after 20 secs"
         );     
        productListPage.resourceSecrtionBlogimg(2).waitForVisible();
        // var e = productListPage.resourceSectionBogText.getText();
        productListPage.resourceSecrtionBlogimg(2).click();
        blogPage.blogTitle.waitForVisible();
        expect(blogPage.blogTitle.getText()).to.eql(testData.blogPageTitles.areCollagenSupplementsSafeText);
    })

    it("Verify that the user is redirected to the appropriate 'Blog' page when the 'Text' is clicked in the beauty resources section on the product list page",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 1).waitForVisible();
        Home.healthNeedsdropdown(2, 1).click();
        browser.scroll(".margin-bottom-1.article-title")
        browser.waitUntil(
            function() {
               return (
               browser.isVisible
                   (`.margin-bottom-1.article-title`) === true
               );
            },
            60000,
             "Section is not visible even after 20 secs"
         ); 
        productListPage.resourceSectionBlogText(2).waitForVisible();
        productListPage.resourceSectionBlogText(2).click();
        blogPage.blogTitle.waitForVisible();
        expect(blogPage.blogTitle.getText()).to.eql(testData.blogPageTitles.areCollagenSupplementsSafeText);
    })

    it("Verify that the user is redirected to the appropriate 'Blog' page when the '2 min read' link is clicked in the beauty resources section on the product list page",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 1).waitForVisible();
        Home.healthNeedsdropdown(2, 1).click();
        if(Home.newRatingPopupCancelIcon.isVisible()){
            Home.newRatingPopupCancelIcon.click();
        }
        browser.scroll(".margin-bottom-1.article-title")
        productListPage.resouceSectionBlogMinReadLink(2).waitForVisible();
        productListPage.resouceSectionBlogMinReadLink(2).click();
        blogPage.blogTitle.waitForVisible();
        expect(blogPage.blogTitle.getText()).to.eql(testData.blogPageTitles.areCollagenSupplementsSafeText);
    })

    it("Verify that the user is redirected to the 'Facebook' login page when the 'Facebook' icon is clicked on the blog page",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 1).waitForVisible();
        Home.healthNeedsdropdown(2, 1).click();
        browser.scroll(".margin-bottom-1.article-title")
        if(Home.newRatingPopupCancelIcon.isVisible()) {
            Home.newRatingPopupCancelIcon.click();
        }
        productListPage.resouceSectionBlogMinReadLink(2).waitForVisible();
        productListPage.resouceSectionBlogMinReadLink(2).click();
        browser.scroll(0, 200);
        Home.browserMethod();
        blogPage.socialMediaLinks(1).waitForVisible();
        blogPage.socialMediaLinks(1).click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);
        Home.browserMethod();
        blogPage.forgottenAccLink.waitForVisible();
        expect(blogPage.forgottenAccLink.getText()).to.eql(testData.blogPageTitles.forgottenAccntLink);
        browser.close(); 
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[0]); 
    })

    it("Verify that the user is redirected to the 'Twitter' login page when the 'Twitter' icon is clicked on the blog pag'",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 1).waitForVisible();
        Home.healthNeedsdropdown(2, 1).click();
        browser.scroll(".margin-bottom-1.article-title")
        if(Home.newRatingPopupCancelIcon.isVisible()) {
            Home.newRatingPopupCancelIcon.click();
        }
        productListPage.resouceSectionBlogMinReadLink(2).waitForVisible();
        productListPage.resouceSectionBlogMinReadLink(2).click();
        browser.scroll(0, 200);
        Home.browserMethod();
        blogPage.socialMediaLinks(2).waitForVisible();
        blogPage.socialMediaLinks(2).click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);
        Home.browserMethod();
        blogPage.twitterTitle.waitForVisible();
        expect(blogPage.twitterTitle.getText()).to.eql(testData.blogPageTitles.twitterLoginTxt);
        browser.close(); 
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[0]); 
    })

    it("Verify that the user is redirected to the 'Pinterest' login page when the 'Pinterest' icon is clicked on the blog page",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 1).waitForVisible();
        Home.healthNeedsdropdown(2, 1).click();
        browser.scroll(".margin-bottom-1.article-title")
        if(Home.newRatingPopupCancelIcon.isVisible()) {
            Home.newRatingPopupCancelIcon.click();
        }
        productListPage.resouceSectionBlogMinReadLink(2).waitForVisible();
        productListPage.resouceSectionBlogMinReadLink(2).click();
        browser.scroll(0, 200);
        Home.browserMethod();
        blogPage.socialMediaLinks(3).waitForVisible();
        blogPage.socialMediaLinks(3).click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);
        Home.browserMethod();
        blogPage.pinterestTitle.waitForVisible();
        expect(blogPage.pinterestTitle.getText()).to.eql(testData.blogPageTitles.pinterestPageTxt);
        browser.close(); 
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[0]); 
    })

})

describe("Product details page",()=>{
    it("Verify that the following details are displayed appropriately on the product details page, Product Name, Product rating, Write a review lin, Description, Item number, Count, Quantity, One-time purchase, Subscribe & save 10%, Price, Add to cart",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        productDetailsPage.productName.waitForVisible();
        expect(productDetailsPage.productName.getText()).to.eql(testData.productNames.vitaminC500mgwithRoseHips);
        productDetailsPage.writeAReviewLink.waitForVisible();
        expect(productDetailsPage.writeAReviewLink.getText()).to.eql(testData.productNames.writeAReviewLinkTxt);
        productDetailsPage.productDescription.waitForVisible();
        expect(productDetailsPage.productDescription.isVisible()).to.eql(true)
        productDetailsPage.itemNumbr.waitForVisible();
        expect(productDetailsPage.itemNumbr.getText()).to.eql(testData.productDetailsPage.itemNumbr2);
        productDetailsPage.bottleCount1.waitForVisible();
        expect(productDetailsPage.bottleCount1.getText()).to.eql(testData.productDetailsPage.bottleCount);
        productDetailsPage.quantityInput.waitForVisible();
        expect(productDetailsPage.quantityInput.isVisible()).to.eql(true);
        Home.browserMethod();
        productDetailsPage.oneTimePurchaseText.waitForVisible();
        expect(productDetailsPage.oneTimePurchaseText.getText()).to.eql(testData.productDetailsPage.oneTimePurchaseTxt);
        productDetailsPage.subscribeAndSave.waitForVisible();
        expect(productDetailsPage.subscribeAndSave.getText()).to.eql(testData.productDetailsPage.subscribeAndSave10);
        productDetailsPage.oneTimePurPrice.waitForVisible();
        expect(productDetailsPage.oneTimePurPrice.getText()).to.eql(testData.productDetailsPage.btlPrice1);
        productDetailsPage.addToCart.waitForVisible();
        expect(productDetailsPage.addToCart.getText()).to.eql(testData.productDetailsPage.addToCartBtnText);
    })

    it("Verify that the user is able to search a product on product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        productDetailsPage.searchField.waitForVisible();
        productDetailsPage.searchField.click();
        productDetailsPage.searchField.setValue([testData.productNames.vitamin]);
        Home.browserMethod();
        productDetailsPage.searchIcon.waitForVisible();
        productDetailsPage.searchIcon.click();
        productListPage.searchResultTitle.waitForVisible();
        expect(productListPage.searchResultTitle.getText()).to.eql(testData.titles.searchProdName1)
    })

    it("Verify that the appropriate cart icon is  displayed on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        productDetailsPage.cartIcon.waitForVisible();
        expect(productDetailsPage.cartIcon.isVisible()).to.eql(true);
    })

    it("Verify that the user is redirected to the 'Product Reviews' section when the 'Product rating' is clicked on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        productDetailsPage.writeAReviewStar.waitForVisible();
        productDetailsPage.writeAReviewStar.click();
        Home.browserMethod();
        productDetailsPage.productReview.waitForVisible();
        expect(productDetailsPage.productReview.getText()).to.eql(testData.productTitles.reviewSection);
    })

    it("Verify that the review dialog is displayed when user clicks on 'Write a review' option in 'Product details' page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        productDetailsPage.writeAReviewLink.waitForVisible();
        productDetailsPage.writeAReviewLink.click();
        Home.browserMethod();
        productDetailsPage.reviewPopUp.waitForVisible();
        expect(productDetailsPage.reviewPopUp.getText()).to.eql(testData.productTitles.reviewPopUp)
    })

    it("Verify that the 'Terms and Conditions' popup is displayed when the user clicks the 'Terms and Conditions' link in the write a review dialog",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        productDetailsPage.writeAReviewLink.waitForVisible();
        productDetailsPage.writeAReviewLink.click();
        productDetailsPage.reviewPopUp.waitForVisible();
        expect(productDetailsPage.reviewPopUp.getText()).to.eql(testData.productTitles.reviewPopUp);
        browser.scroll(0, 800);
        Home.browserMethod();
        productDetailsPage.termsAndConditionLink.waitForVisible();
        productDetailsPage.termsAndConditionLink.click();
        Home.browserMethod();
        productDetailsPage.termsAndConditionPageTitle.waitForVisible();
        expect(productDetailsPage.termsAndConditionPageTitle.getText()).to.eql(testData.reviewDialogDetails.termsAndConditionsPageTitle)
    })

    it("Verify that the 'Terms and Conditions' popup is closed when the user clicks the 'Cancel' icon in the write a review dialog",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        productDetailsPage.writeAReviewLink.waitForVisible();
        productDetailsPage.writeAReviewLink.click();
        productDetailsPage.reviewPopUp.waitForVisible();
        expect(productDetailsPage.reviewPopUp.getText()).to.eql(testData.productTitles.reviewPopUp);
        browser.scroll(0, 800);
        Home.browserMethod();
        productDetailsPage.termsAndConditionLink.waitForVisible();
        productDetailsPage.termsAndConditionLink.click();
        productDetailsPage.termsAndConditionPageTitle.waitForVisible();
        expect(productDetailsPage.termsAndConditionPageTitle.getText()).to.eql(testData.reviewDialogDetails.termsAndConditionsPageTitle);
        Home.browserMethod();
        productDetailsPage.cancelIconForPrivacyPopup.waitForVisible();
        productDetailsPage.cancelIconForPrivacyPopup.click();
        productDetailsPage.termsAndConditionLink.waitForVisible();
        expect(productDetailsPage.termsAndConditionLink.getText()).to.eql(testData.reviewDialogDetails.termsAndConditionText);
    })

    it("Verify that the review dialog is closed when the user clicks on the 'Cancel' icon in the write review dialog",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        productDetailsPage.writeAReviewLink.waitForVisible();
        productDetailsPage.writeAReviewLink.click();
        productDetailsPage.reviewPopUp.waitForVisible();
        expect(productDetailsPage.reviewPopUp.getText()).to.eql(testData.productTitles.reviewPopUp);
        productDetailsPage.reviewDialogCancelIcon.waitForVisible();
        productDetailsPage.reviewDialogCancelIcon.click();
        productDetailsPage.productName.waitForVisible();
        expect(productDetailsPage.productName.getText()).to.eql(testData.productDetailsPage.prodName1)
    })
})

describe("PDP - WriteaReviewDialog",()=>{
    it("Verify that the appropriate error message is displayed when the user clicks on the 'Post Review' button without entering 'Review' in the write review dialog",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        productDetailsPage.writeAReviewLink.waitForVisible();
        productDetailsPage.writeAReviewLink.click();
        Home.browserMethod();
        productDetailsPage.reviewPopUp.waitForVisible();
        expect(productDetailsPage.reviewPopUp.getText()).to.eql(testData.productTitles.reviewPopUp);
        productDetailsPage.overAllRating(4).waitForVisible();
        productDetailsPage.overAllRating(4).click();
        productDetailsPage.reviewTitleField.waitForVisible();
        productDetailsPage.reviewTitleField.click();
        productDetailsPage.reviewTitleField.setValue([testData.reviewDialogDetails.reviewTitle]);
        Home.browserMethod();
        productDetailsPage.reviewDescription.waitForVisible();
        productDetailsPage.wouldYouRecommendThisProdYesOrNo(1).waitForVisible();
        productDetailsPage.wouldYouRecommendThisProdYesOrNo(1).click();
        browser.scroll(0, 200)
        Home.browserMethod();
        productDetailsPage.valueStarRatings.waitForVisible();
        productDetailsPage.valueStarRatings.click();
        productDetailsPage.didYouReadThisProductReviews.waitForVisible();
        productDetailsPage.didYouReadThisProductReviews.click();
        productDetailsPage.yesORNoOptions(2).waitForVisible();
        productDetailsPage.yesORNoOptions(2).click();
        Home.browserMethod();
        productDetailsPage.whereDidYouPurchaseTheProdOptions(2).waitForVisible();
        productDetailsPage.whereDidYouPurchaseTheProdOptions(2).click();
        productDetailsPage.whatMostInfluencedYourDecisionOptions(3).waitForVisible();
        productDetailsPage.whatMostInfluencedYourDecisionOptions(3).click();
        productDetailsPage.howOftenDoYOuUseOptions(2).waitForVisible();
        productDetailsPage.howOftenDoYOuUseOptions(2).click();
        productDetailsPage.genderOptions(2).waitForVisible();
        productDetailsPage.genderOptions(2).click();
        productDetailsPage.ageOptions(3).waitForVisible();
        productDetailsPage.ageOptions(3).click();
        Home.browserMethod();
        productDetailsPage.nickNameField.waitForVisible();
        productDetailsPage.nickNameField.click();
        productDetailsPage.nickNameField.setValue([testData.reviewDialogDetails.nickName]);
        productDetailsPage.locationField.waitForVisible();
        productDetailsPage.locationField.click();
        productDetailsPage.locationField.setValue([testData.reviewDialogDetails.location]);
        browser.scroll(0, 1000);
        Home.browserMethod();
        productDetailsPage.emailField.waitForVisible();
        productDetailsPage.emailField.click();
        productDetailsPage.emailField.setValue([testData.reviewDialogDetails.email]);
        Home.browserMethod();
        productDetailsPage.termsAndConditionCheckbox.waitForVisible();
        productDetailsPage.termsAndConditionCheckbox.click();
        productDetailsPage.postReviewBtn.waitForVisible();
        productDetailsPage.postReviewBtn.click();
        productDetailsPage.ReviewError.waitForVisible();
        expect(productDetailsPage.ReviewError.getText()).to.eql(testData.reviewDialogDetails.reviewError);
    })

    it("Verify that the appropriate error message is displayed when the user clicks on the 'Post Review' button without entering 'Review title' in the write review dialog",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.pause(2000);
        if(Home.newRatingPopupCancelIcon.isVisible()) {
            Home.newRatingPopupCancelIcon.click();
        }
        productDetailsPage.writeAReviewLink.waitForVisible();
        productDetailsPage.writeAReviewLink.click();
        Home.browserMethod();
        productDetailsPage.reviewPopUp.waitForVisible();
        expect(productDetailsPage.reviewPopUp.getText()).to.eql(testData.productTitles.reviewPopUp);
        productDetailsPage.reviewTitleField.waitForVisible();
        productDetailsPage.reviewTitleField.click();
        productDetailsPage.reviewTitleField.setValue([testData.reviewDialogDetails.reviewTitle]);
        productDetailsPage.overAllRating(4).waitForVisible();
        productDetailsPage.overAllRating(4).click();
        Home.browserMethod();
        productDetailsPage.clearEntered();
        productDetailsPage.reviewTitleField.waitForVisible();
        Home.browserMethod();
        productDetailsPage.reviewDescription.waitForVisible();
        productDetailsPage.reviewDescription.click();
        productDetailsPage.reviewDescription.setValue([testData.reviewDialogDetails.reviewDescTxt]);
        productDetailsPage.wouldYouRecommendThisProdYesOrNo(1).waitForVisible();
        productDetailsPage.wouldYouRecommendThisProdYesOrNo(1).click();
        browser.scroll(0, 200)
        Home.browserMethod();
        productDetailsPage.valueStarRatings.waitForVisible();
        productDetailsPage.valueStarRatings.click();
        productDetailsPage.didYouReadThisProductReviews.waitForVisible();
        productDetailsPage.didYouReadThisProductReviews.click();
        productDetailsPage.yesORNoOptions(2).waitForVisible();
        productDetailsPage.yesORNoOptions(2).click();
        Home.browserMethod();
        productDetailsPage.whereDidYouPurchaseTheProdOptions(2).waitForVisible();
        productDetailsPage.whereDidYouPurchaseTheProdOptions(2).click();
        productDetailsPage.whatMostInfluencedYourDecisionOptions(3).waitForVisible();
        productDetailsPage.whatMostInfluencedYourDecisionOptions(3).click();
        productDetailsPage.howOftenDoYOuUseOptions(2).waitForVisible();
        productDetailsPage.howOftenDoYOuUseOptions(2).click();
        productDetailsPage.genderOptions(2).waitForVisible();
        productDetailsPage.genderOptions(2).click();
        productDetailsPage.ageOptions(3).waitForVisible();
        productDetailsPage.ageOptions(3).click();
        Home.browserMethod();
        productDetailsPage.nickNameField.waitForVisible();
        productDetailsPage.nickNameField.click();
        productDetailsPage.nickNameField.setValue([testData.reviewDialogDetails.nickName]);
        productDetailsPage.locationField.waitForVisible();
        productDetailsPage.locationField.click();
        productDetailsPage.locationField.setValue([testData.reviewDialogDetails.location]);
        browser.scroll(0, 1000);
        Home.browserMethod();
        // Home.browserMethod();
        //browser.scroll(0, 150);
        productDetailsPage.emailField.waitForVisible();
        productDetailsPage.emailField.click();
        productDetailsPage.emailField.setValue([testData.reviewDialogDetails.email]);
        Home.browserMethod();
        productDetailsPage.termsAndConditionCheckbox.waitForVisible();
        productDetailsPage.termsAndConditionCheckbox.click();
        productDetailsPage.postReviewBtn.waitForVisible();
        productDetailsPage.postReviewBtn.click();
        productDetailsPage.reviewTitleError.waitForVisible();
        expect(productDetailsPage.reviewTitleError.getText()).to.eql(testData.reviewDialogDetails.reviewTitleError);
    })

    it("Verify that the appropriate error message is displayed when the user clicks on the 'Post Review' button without entering 'Nick name' in the write review dialog",()=>{
        Home.homepageMethod();
        Home.vandsMethod();
        Home.bestSellers.waitForVisible();
        Home.bestSellers.click();
        Home.bestSellerProdTitles(1).waitForVisible();
        Home.bestSellerProdTitles(1).click();
        Home.browserMethod();
        if(Home.newRatingPopupCancelIcon.isVisible()){
            Home.newRatingPopupCancelIcon.click();
        }
        productDetailsPage.writeAReviewLink.waitForVisible();
        productDetailsPage.writeAReviewLink.click();
        productDetailsPage.reviewPopUp.waitForVisible();
        expect(productDetailsPage.reviewPopUp.getText()).to.eql(testData.productTitles.reviewPopup1);
        productDetailsPage.overAllRating(4).waitForVisible();
        productDetailsPage.overAllRating(4).click();
        productDetailsPage.reviewTitleField.waitForVisible();
        productDetailsPage.reviewTitleField.click();
        productDetailsPage.reviewTitleField.setValue([testData.reviewDialogDetails.reviewTitle]);
        Home.browserMethod();
        productDetailsPage.reviewDescription.waitForVisible();
        productDetailsPage.wouldYouRecommendThisProdYesOrNo(1).waitForVisible();
        productDetailsPage.wouldYouRecommendThisProdYesOrNo(1).click();
        browser.scroll(0, 200)
        Home.browserMethod();
        productDetailsPage.valueStarRatings.waitForVisible();
        productDetailsPage.valueStarRatings.click();
        productDetailsPage.didYouReadThisProductReviews.waitForVisible();
        productDetailsPage.didYouReadThisProductReviews.click();
        productDetailsPage.yesORNoOptions(2).waitForVisible();
        productDetailsPage.yesORNoOptions(2).click();
        Home.browserMethod();
        productDetailsPage.whereDidYouPurchaseTheProdOptions(2).waitForVisible();
        productDetailsPage.whereDidYouPurchaseTheProdOptions(2).click();
        productDetailsPage.whatMostInfluencedYourDecisionOptions(3).waitForVisible();
        productDetailsPage.whatMostInfluencedYourDecisionOptions(3).click();
        productDetailsPage.howOftenDoYOuUseOptions(2).waitForVisible();
        productDetailsPage.howOftenDoYOuUseOptions(2).click();
        productDetailsPage.genderOptions(2).waitForVisible();
        productDetailsPage.genderOptions(2).click();
        productDetailsPage.ageOptions(3).waitForVisible();
        productDetailsPage.ageOptions(3).click();
        Home.browserMethod();
        productDetailsPage.nickNameField.waitForVisible();
        productDetailsPage.locationField.waitForVisible();
        productDetailsPage.locationField.click();
        productDetailsPage.locationField.setValue([testData.reviewDialogDetails.location]);
        browser.scroll(0, 1000);
        Home.browserMethod();
        productDetailsPage.emailField.waitForVisible();
        productDetailsPage.emailField.click();
        productDetailsPage.emailField.setValue([testData.reviewDialogDetails.email]);
        Home.browserMethod();
        productDetailsPage.termsAndConditionCheckbox.waitForVisible();
        productDetailsPage.termsAndConditionCheckbox.click();
        productDetailsPage.postReviewBtn.waitForVisible();
        productDetailsPage.postReviewBtn.click();
        productDetailsPage.nickNameError.waitForVisible();
        expect(productDetailsPage.nickNameError.getText()).to.eql(testData.reviewDialogDetails.nickNameError);
    })

    it("Verify that the appropriate error message is displayed when the user clicks on the 'Post Review' button without selecting the terms and conditions checkbox in the write review dialogue",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        if(Home.newRatingPopupCancelIcon.isVisible()){
            Home.newRatingPopupCancelIcon.click();
        }
        productDetailsPage.writeAReviewLink.waitForVisible();
        productDetailsPage.writeAReviewLink.click();
        Home.browserMethod();
        productDetailsPage.reviewPopUp.waitForVisible();
        expect(productDetailsPage.reviewPopUp.getText()).to.eql(testData.productTitles.reviewPopUp);
        productDetailsPage.overAllRating(4).waitForVisible();
        productDetailsPage.overAllRating(4).click();
        productDetailsPage.reviewTitleField.waitForVisible();
        productDetailsPage.reviewTitleField.click();
        productDetailsPage.reviewTitleField.setValue([testData.reviewDialogDetails.reviewTitle]);
        Home.browserMethod();
        productDetailsPage.reviewDescription.waitForVisible();
        productDetailsPage.wouldYouRecommendThisProdYesOrNo(1).waitForVisible();
        productDetailsPage.wouldYouRecommendThisProdYesOrNo(1).click();
        browser.scroll(0, 200)
        Home.browserMethod();
        productDetailsPage.valueStarRatings.waitForVisible();
        productDetailsPage.valueStarRatings.click();
        productDetailsPage.didYouReadThisProductReviews.waitForVisible();
        productDetailsPage.didYouReadThisProductReviews.click();
        productDetailsPage.yesORNoOptions(2).waitForVisible();
        productDetailsPage.yesORNoOptions(2).click();
        Home.browserMethod();
        productDetailsPage.whereDidYouPurchaseTheProdOptions(2).waitForVisible();
        productDetailsPage.whereDidYouPurchaseTheProdOptions(2).click();
        productDetailsPage.whatMostInfluencedYourDecisionOptions(3).waitForVisible();
        productDetailsPage.whatMostInfluencedYourDecisionOptions(3).click();
        productDetailsPage.howOftenDoYOuUseOptions(2).waitForVisible();
        productDetailsPage.howOftenDoYOuUseOptions(2).click();
        productDetailsPage.genderOptions(2).waitForVisible();
        productDetailsPage.genderOptions(2).click();
        productDetailsPage.ageOptions(3).waitForVisible();
        productDetailsPage.ageOptions(3).click();
        Home.browserMethod();
        productDetailsPage.nickNameField.waitForVisible();
        // productDetailsPage.nickNameField.click();
        // productDetailsPage.nickNameField.setValue([testData.reviewDialogDetails.nickName]);
        productDetailsPage.locationField.waitForVisible();
        productDetailsPage.locationField.click();
        productDetailsPage.locationField.setValue([testData.reviewDialogDetails.location]);
        browser.scroll(0, 1000);
        productDetailsPage.emailField.waitForVisible();
        productDetailsPage.emailField.click();
        productDetailsPage.emailField.setValue([testData.reviewDialogDetails.email]);
        productDetailsPage.termsAndConditionCheckbox.waitForVisible();
        Home.browserMethod();
        productDetailsPage.postReviewBtn.waitForVisible();
        productDetailsPage.postReviewBtn.click();
        productDetailsPage.agreementsError.waitForVisible();
        expect(productDetailsPage.agreementsError.getText()).to.eql(testData.reviewDialogDetails.agreementError);
    })

    it("Verify that user is able to add the image to Review description field by clicking the 'AddToPhoto' button in the review popup",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        if(Home.newRatingPopupCancelIcon.isVisible()){
            Home.newRatingPopupCancelIcon.click();
        }
        productDetailsPage.writeAReviewLink.waitForVisible();
        productDetailsPage.writeAReviewLink.click();
        Home.browserMethod();
        productDetailsPage.reviewPopUp.waitForVisible();
        expect(productDetailsPage.reviewPopUp.getText()).to.eql(testData.productTitles.reviewPopUp);
        productDetailsPage.overAllRating(4).waitForVisible();
        productDetailsPage.overAllRating(4).click();
        productDetailsPage.reviewTitleField.waitForVisible();
        productDetailsPage.reviewTitleField.click();
        productDetailsPage.reviewTitleField.setValue([testData.reviewDialogDetails.reviewTitle]);
        Home.browserMethod();
        productDetailsPage.addPhotoBtn.waitForVisible();
        productDetailsPage.addPhotoBtn.click();
        productDetailsPage.uploadFile();
        browser.scroll(0, 50);
        productDetailsPage.aDDPHOTOBtn.waitForVisible();
        productDetailsPage.aDDPHOTOBtn.click();
        browser.pause(3000);
        productDetailsPage.addedImg.waitForVisible();
        expect(productDetailsPage.addedImg.isVisible()).to.eql(false);
    })

    it("Verify that the uploaded image is removed successfully when 'Remove' button is clicked",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        if(Home.newRatingPopupCancelIcon.isVisible()){
            Home.newRatingPopupCancelIcon.click();
        }
        productDetailsPage.writeAReviewLink.waitForVisible();
        productDetailsPage.writeAReviewLink.click();
        Home.browserMethod();
        productDetailsPage.reviewPopUp.waitForVisible();
        expect(productDetailsPage.reviewPopUp.getText()).to.eql(testData.productTitles.reviewPopUp);
        productDetailsPage.overAllRating(4).waitForVisible();
        productDetailsPage.overAllRating(4).click();
        productDetailsPage.reviewTitleField.waitForVisible();
        productDetailsPage.reviewTitleField.click();
        productDetailsPage.reviewTitleField.setValue([testData.reviewDialogDetails.reviewTitle]);
        Home.browserMethod();
        productDetailsPage.addPhotoBtn.waitForVisible();
        productDetailsPage.addPhotoBtn.click();
        productDetailsPage.uploadFile();
        productDetailsPage.RemoveBtn.waitForVisible();
        productDetailsPage.RemoveBtn.click();
        productDetailsPage.addPhotoTitle.waitForVisible();
        expect(productDetailsPage.addPhotoTitle.getText()).to.eql(testData.reviewDialogDetails.addPhotoTxt);

    })

})

describe("PDP -1",()=>{
    it("Verify that the product price changes when the user change the bottle count on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 300);
        productDetailsPage.bottleCount1.waitForVisible();
        productDetailsPage.bottleCount1.click();
        var price1 = productDetailsPage.productPrice1.getValue();
        //price1 = price1.split("$");
        //price1 = parseFloat(price1[1]);
        productDetailsPage.productPrice1.waitForVisible();
        expect(productDetailsPage.productPrice1.getText()).to.eql(testData.productDetailsPage.btlPrice1);
        productDetailsPage.bottleCount2.waitForVisible();
        productDetailsPage.bottleCount2.click();
        //var price2 = productDetailsPage.productPrice1.getText().split("\n");
        productDetailsPage.productPrice1.waitForVisible();
        expect(productDetailsPage.productPrice1.getText()).to.eql(testData.productDetailsPage.btlPrice2);
    })

    it("Verify that the 'Item' number is changed when the user selects the different bottle count on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        productDetailsPage.bottleCount1.waitForVisible();
        productDetailsPage.itemNumbr.waitForVisible();
        expect(productDetailsPage.itemNumbr.getText()).to.eql(testData.productDetailsPage.itemNumbr2);
        productDetailsPage.bottleCount2.waitForVisible();
        productDetailsPage.bottleCount2.click();
        productDetailsPage.itemNumbr.waitForVisible();
        expect(productDetailsPage.itemNumbr.getText()).to.eql(testData.productDetailsPage.itemNmbr3);
    })

    it("Verify that the quantity of the Products is increased when the user clicks on '+' icon in 'Product details' page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
       // browser.scroll(0, 2000);
        //productDetailsPage.productImage.waitForVisible();
        //productDetailsPage.productImage.click();
        var getValue = productDetailsPage.quantityNumberField.getValue();
        Home.browserMethod();
        productDetailsPage.quantityIncrease.waitForVisible();
        productDetailsPage.quantityIncrease.click();
        var afterIncrease = productDetailsPage.quantityNumberField.getValue()
        expect(getValue).not.to.eql(afterIncrease);
        expect(afterIncrease).to.eql(testData.productTitles.afterQuantityNumber);
    })
  
    it("Verify that the quantity of the Products is decreased when the user clicks on '-' icon in 'product details' page",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink1();
      //browser.scroll(0, 2400);
      //productDetailsPage.productImage.waitForVisible();
      //productDetailsPage.productImage.click();
      var getValue = productDetailsPage.quantityNumberField.getValue();
      Home.browserMethod();
      productDetailsPage.quantityIncrease.waitForVisible();
      productDetailsPage.quantityIncrease.click();
      var afterIncrease = productDetailsPage.quantityNumberField.getValue()
      expect(getValue).not.to.eql(afterIncrease);
      expect(afterIncrease).to.eql(testData.productTitles.afterQuantityNumber);
      productDetailsPage.quantityDecrease.waitForVisible();
      productDetailsPage.quantityDecrease.click()
      var afterDecrease = productDetailsPage.quantityNumberField.getValue();
      expect(afterIncrease).not.to.eql(afterDecrease);
      expect(afterDecrease).to.eql(testData.productTitles.afterQuantityNumberDesc);
    })

    it("Verify that the appropriate error message is displayed when user tries to add more than 3 quantities of the same product on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        productDetailsPage.quantityIncrease.waitForVisible();
        productDetailsPage.quantityIncrease.click();
        productDetailsPage.quantityIncrease.click();
        browser.scroll(0, 200);
        productDetailsPage.addToCart.waitForVisible();
        productDetailsPage.addToCart.click();
        Home.browserMethod();
        productDetailsPage.cartDialogCancelPopup.waitForVisible();
        productDetailsPage.cartDialogCancelPopup.click();
        // browser.scroll(0, 0);
        Home.browserMethod();
        productDetailsPage.quantityError.waitForVisible();
        expect(productDetailsPage.quantityError.getText()).to.eql(testData.productDetailsPage.quantityError);
    })

    it("Verify that the product is added to the cart when the user click on the 'Add To Cart' button on the product details page",()=>{
        Home.removeAllProductsFromCart();
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 300);
        productDetailsPage.addToCart.waitForVisible();
        //productDetailsPage.addToCart.waitForVisible();
        productDetailsPage.addToCart.click();
        productDetailsPage.itemAddedToCart.waitForVisible();
        expect(productDetailsPage.itemAddedToCart.getText()).to.eql(testData.cart.productAddedTxt);
    })

    it("Verify that the user is navigated to 'FAQs' page when 'Frequently asked questions' option in 'Product details' page is clicked",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 600);
        productDetailsPage.learnMoreLinks(2).waitForVisible();
        productDetailsPage.learnMoreLinks(2).click();
        productDetailsPage.viewAllFaq.waitForVisible();
        expect(productDetailsPage.viewAllFaq.getText()).to.eql(testData.productDetailsPage.faq);
    }) 

    it("Verify that the user is redirected to the 'Benefits & Description' section when the 'More About This Product' link is clicked on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 600);
        Home.browserMethod();
        productDetailsPage.learnMoreLinks(1).waitForVisible();
        productDetailsPage.learnMoreLinks(1).click();
        productDetailsPage.benefitsAndDescriptionTitle.waitForVisible();
        expect( productDetailsPage.benefitsAndDescriptionTitle.getText()).to.eql(testData.productDetailsPage.description);
    })

    it("Verify that the user is redirected to the 'Questions?' section when the 'Frequently Asked Questions' link is clicked on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 600);
        Home.browserMethod();
        productDetailsPage.learnMoreLinks(2).waitForVisible();
        productDetailsPage.learnMoreLinks(2).click();
        productDetailsPage.fAQSectionSubTitle.waitForVisible();
        expect( productDetailsPage.fAQSectionSubTitle.getText()).to.eql(testData.productDetailsPage.fAQSubTitle);
    })

    it("Verify that the user is redirected to the 'Compare with similar products' section when the 'Compare Products' link is clicked on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 600);
        Home.browserMethod();
        productDetailsPage.learnMoreLinks(3).waitForVisible();
        productDetailsPage.learnMoreLinks(3).click();
        Home.browserMethod();
        productDetailsPage.compareWithSimilarProduct.waitForVisible();
        expect(productDetailsPage.compareWithSimilarProduct.getText()).to.eql(testData.productDetailsPage.compareProducts)
    })

    it("Verify that the user is navigated to the product details when the 'Product image' is clicked in the 'Compare with similar products' section on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 1800);
        Home.browserMethod();
        productDetailsPage.compareProductsimgs(4).waitForVisible();
        var x = productDetailsPage.compareProductsTitles(4).getText();
        var convertedTextOfPLP = x.toLowerCase();
        productDetailsPage.compareProductsimgs(4).click();
        productDetailsPage.productName.waitForVisible();
        var getTextOnPLP = productListPage.productName.getText()
        var convertedTextOnPDP = getTextOnPLP.toLowerCase();
        expect(convertedTextOnPDP).to.eql(convertedTextOfPLP)
        // productDetailsPage.productName.waitForVisible();
        // expect(productDetailsPage.productName.getText()).to.eql(testData.productNames.multivitaminGummiesTxt);
    })

    it("Verify that the user is navigated to the product details when the 'Product title' is clicked in the 'Compare with similar products' section on the product list page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 2000);
        Home.browserMethod();
        productDetailsPage.compareProductsTitles(4).waitForVisible();
        var y = productDetailsPage.compareProductsTitles(4).getText();
        var convertedTextOfPLP = y.toLowerCase();
        productDetailsPage.compareProductsTitles(4).click();
        productDetailsPage.productName.waitForVisible();
        var getTextOnPLP = productListPage.productName.getText()
        var convertedTextOnPDP = getTextOnPLP.toLowerCase();
        expect(convertedTextOnPDP).to.eql(convertedTextOfPLP)
    })

    it("Verify that the product is added to the cart succesfully when the user click on the 'Add To Cart' button in the 'Compare with similar products' on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 2100);
        Home.browserMethod();
        productDetailsPage.compareProductsAddToCartBtn(4).waitForVisible();
        Home.browserMethod();
        var z = productDetailsPage.compareProductsTitles(4).getText();
        var convertedTextOfPLP = z.toLowerCase();
        productDetailsPage.compareProductsAddToCartBtn(4).click();
        productDetailsPage.productName.waitForVisible();
        var getTextOnPLP = productListPage.productName.getText()
        var convertedTextOnPDP = getTextOnPLP.toLowerCase();
        expect(convertedTextOnPDP).to.eql(convertedTextOfPLP)
    })

    it("Verify that the user is redirected to the 'Health Articles' page when the 'View All Resources' link is clicked on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 2600);
        Home.browserMethod();
        productDetailsPage.viewAllResourceLink.waitForVisible();
        productDetailsPage.viewAllResourceLink.click();
        productListPage.healthArticlesTitle.waitForVisible();
        expect(productListPage.healthArticlesTitle.getText()).to.eql(testData.productTitles.healthAricleTitle);

    })
})

describe("FAQ page",()=>{
    it("Verify that the user is redirected to the 'Questions?' section when the 'Frequently Asked Questions' link is clicked on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 600);
        Home.browserMethod();
        productDetailsPage.learnMoreLinks(2).waitForVisible();
        productDetailsPage.learnMoreLinks(2).click();
        productDetailsPage.fAQSectionSubTitle.waitForVisible();
        expect( productDetailsPage.fAQSectionSubTitle.getText()).to.eql(testData.productDetailsPage.fAQSubTitle);
    })

    it("Verify that the appropriate answers are displayed for the questions when the user clicks on 'Down arrow'in the Question section",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(" #product-faqs:nth-child(2) .grid-container:nth-child(1) .margin-bottom-1");
        Home.browserMethod();
        productDetailsPage.questions(3).waitForVisible();
        productDetailsPage.questions(3).click();
        productDetailsPage.answers(3).waitForVisible();
        expect(productDetailsPage.answers(3).getText()).to.eql(testData.productTitles.thirdAnswers);
    })
    
    it("Verify that the appropriate answer is displayed for the 2nd question when the user clicks on 'Down arrow'in the Question section",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(" #product-faqs:nth-child(2) .grid-container:nth-child(1) .margin-bottom-1");
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        Home.browserMethod();
        if(Home.newRatingPopupCancelIcon.isVisible()) {
            Home.newRatingPopupCancelIcon.click();
        }
        productDetailsPage.questions(6).waitForVisible();
        productDetailsPage.questions(6).click();
        productDetailsPage.answers(6).waitForVisible();
        expect(productDetailsPage.answers(6).getText()).to.eql(testData.productTitles.sixthAnswers);
    })

    it("Verify that the user is redirected to the 'FAQ' page when the 'View All FAQ' link is clicked on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 3200);
        Home.browserMethod();
        productDetailsPage.viewAllFaq.waitForVisible();
        productDetailsPage.viewAllFaq.click();
        productDetailsPage.faq.waitForVisible();
        expect(productDetailsPage.faq.getText()).to.eql(testData.blogPageTitles.faqTxt);
    })

    it("Verify that the following links are displayed in the FAQ page. 'General', 'About Us', 'Managing Your Account', 'Shipping & Delivery', 'Orders', ' Subscribe & save', 'Accessibility on Naturemade.com', 'Our products'",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 3200);
        Home.browserMethod();
        productDetailsPage.viewAllFaq.waitForVisible();
        productDetailsPage.viewAllFaq.click();
        browser.scroll(0, 100);
        productDetailsPage.faqPgLinks(1).waitForVisible();
        expect(productDetailsPage.faqPgLinks(1).getText()).to.eql(testData.faqPageDetails.generalTxt);
        productDetailsPage.faqPgLinks(2).waitForVisible();
        expect(productDetailsPage.faqPgLinks(2).getText()).to.eql(testData.faqPageDetails.aboutUsTxt);
        productDetailsPage.faqPgLinks(3).waitForVisible();
        expect(productDetailsPage.faqPgLinks(3).getText()).to.eql(testData.faqPageDetails.managingUrAccntTxt);
        productDetailsPage.faqPgLinks(4).waitForVisible();
        expect(productDetailsPage.faqPgLinks(4).getText()).to.eql(testData.faqPageDetails.shippingAndDelvryTxt);
        productDetailsPage.faqPgLinks(5).waitForVisible();
        expect(productDetailsPage.faqPgLinks(5).getText()).to.eql(testData.faqPageDetails.ordersTxt);
        productDetailsPage.faqPgLinks(6).waitForVisible();
        expect(productDetailsPage.faqPgLinks(6).getText()).to.eql(testData.faqPageDetails.subscribeAndSaveTxt);
        productDetailsPage.faqPgLinks(7).waitForVisible();
        expect(productDetailsPage.faqPgLinks(7).getText()).to.eql(testData.faqPageDetails.accessibilityOnNMTxt);
        productDetailsPage.faqPgLinks(8).waitForVisible();
        expect(productDetailsPage.faqPgLinks(8).getText()).to.eql(testData.faqPageDetails.ourProductsTxt);
    })

    it("Verify that the user is redirected to the 'General' questions and answers section when 'General' link is clicked",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 3200);
        Home.browserMethod();
        productDetailsPage.viewAllFaq.waitForVisible();
        productDetailsPage.viewAllFaq.click();
        browser.scroll(0, 100);
        productDetailsPage.faqPgLinks(1).waitForVisible();
        productDetailsPage.faqPgLinks(1).click();
        productDetailsPage.faqPageGeneralSectnQuestions(2).waitForVisible();
        expect(productDetailsPage.faqPageGeneralSectnQuestions(2).getText()).to.eql(testData.faqPageDetails.gnrlSecQues2)
    })

    it("Verify that the appropriate questions and answers are displayed when the 'Down' arrow in the 'General' section",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 3200);
        Home.browserMethod();
        productDetailsPage.viewAllFaq.waitForVisible();
        productDetailsPage.viewAllFaq.click();
        productDetailsPage.faqPgLinks(1).waitForVisible();
        productDetailsPage.faqPgLinks(1).click();
        productDetailsPage.faqPageGeneralSectnQuestions(2).waitForVisible();
        productDetailsPage.faqPageGeneralSectnQuestions(2).click();
        browser.pause(2000);
        productDetailsPage.faqPgGeneralSecAnswer1.waitForVisible();
        expect(productDetailsPage.faqPgGeneralSecAnswer1.getText()).to.eql(testData.faqPageDetails.generalSecAns2)
    })

    it("Verify that the user is redirected to the 'About us' questions and answers section when 'About Us' link is clicked",()=>{
        Home.educationMethod();
        Home.educationDropdown(3, 5).waitForVisible();
        Home.educationDropdown(3, 5).click();
        productDetailsPage.faqPgLinks(2).waitForVisible();
        productDetailsPage.faqPgLinks(2).click();
        productDetailsPage.faqPgAbtUsSectnQuestions(2).waitForVisible();
        expect(productDetailsPage.faqPgAbtUsSectnQuestions(2).getText()).to.eql(testData.faqPageDetails.aboutSecQues2)
    })

    it("Verify that the appropriate questions and answers are displayed when the 'Down' arrow in the 'About Us' section",()=>{
        productDetailsPage.faqPageLinkInPDP();
        browser.scroll(".section-header__title.sub-faq-title:nth-child(6) ");
        productDetailsPage.faqPgAbtUsSectnQuestions(2).waitForVisible();
        productDetailsPage.faqPgAbtUsSectnQuestions(2).click();
        browser.pause(2000);
        productDetailsPage.aboutUsSecanswrs(2).waitForVisible();
        expect(productDetailsPage.aboutUsSecanswrs(2).getText()).to.eql(testData.faqPageDetails.aboutUsSecanswrs2);
    })

    it("Verify that the user is redirected to the 'Managing Your Account' questions and answers section when 'Managing Your Account' link is clicked",()=>{
        Home.educationMethod();
        Home.educationDropdown(3, 5).waitForVisible();
        Home.educationDropdown(3, 5).click();
        productDetailsPage.faqPgLinks(3).waitForVisible();
        productDetailsPage.faqPgLinks(3).click();
        productDetailsPage.faqPgManagingYourAccountQues(2).waitForVisible();
        expect(productDetailsPage.faqPgManagingYourAccountQues(2).getText()).to.eql(testData.faqPageDetails.managingUrAccQues2)
    })

    it("Verify that the appropriate questions and answers are displayed when the 'Down' arrow in the 'Managing Your Account' section",()=>{
        productDetailsPage.faqPageLinkInPDP();   
        productDetailsPage.faqPgManagingYourAccountQues(3).waitForVisible();
        productDetailsPage.faqPgManagingYourAccountQues(3).click();
        browser.pause(2000);
        productDetailsPage.managingUrAccntanswers(3).waitForVisible();
        expect(productDetailsPage.managingUrAccntanswers(3).getText()).to.eql(testData.faqPageDetails.managingUrAccAnswrs3)
    })

    it("Verify that the user is redirected to the 'Shipping & Delivery' questions and answers section when 'Shipping & Delivery' link is clicked",()=>{
        Home.educationMethod();
        Home.educationDropdown(3, 5).waitForVisible();
        Home.educationDropdown(3, 5).click();
        productDetailsPage.faqPgLinks(4).waitForVisible();
        productDetailsPage.faqPgLinks(4).click();
        productDetailsPage.faqPgShippingandDeliveryQues(2).waitForVisible();
        expect(productDetailsPage.faqPgShippingandDeliveryQues(2).getText()).to.eql(testData.faqPageDetails.shippingDeliveryQuesn)
    })

    it("Verify that the appropriate questions and answers are displayed when the 'Down' arrow in the 'Shipping & Delivery' section",()=>{
        productDetailsPage.faqPageLinkInPDP();
        productDetailsPage.faqPgShippingandDeliveryQues(1).waitForVisible();
        productDetailsPage.faqPgShippingandDeliveryQues(1).click();
        browser.pause(4000);
        productDetailsPage.shippingAndDelvryanswers(1).waitForVisible();
        expect(productDetailsPage.shippingAndDelvryanswers(1).getText()).to.eql(testData.faqPageDetails.shippingDeliveryAnswers1)
    })

    it("Verify that the user is redirected to the 'Orders' questions and answers section when 'Orders'link is clicked",()=>{
        productDetailsPage.faqPageLinkInPDP();
        productDetailsPage.faqPgOrdersSectnQues(1).waitForVisible();
        expect(productDetailsPage.faqPgOrdersSectnQues(1).getText()).to.eql(testData.faqPageDetails.oderQuesn2)
    })

    it("Verify that the appropriate questions and answers are displayed when the 'Down' arrow in the 'Orders' section",()=>{
        productDetailsPage.faqPageLinkInPDP();
        productDetailsPage.faqPgOrdersSectnQues(2).waitForVisible();
        productDetailsPage.faqPgOrdersSectnQues(2).click();
        browser.pause(4000);
        productDetailsPage.faqPgOrderSecAnswers(2).waitForVisible();
        expect(productDetailsPage.faqPgOrderSecAnswers(2).getText()).to.eql(testData.faqPageDetails.shippingDeliveryAnswers1)
    })

    it("Verify that the user is redirected to the 'Accessibility on Naturemade.com'  questions and answers section when 'Accessibility on Naturemade.com' link is clicked ",()=>{
        productDetailsPage.faqPageLinkInPDP();
        productDetailsPage.faqPgSubscribeAndSaveQues(4).waitForVisible();
        expect(productDetailsPage.faqPgSubscribeAndSaveQues(4).getText()).to.eql(testData.faqPageDetails.subscribeAndSaveQuesn4)
    })

    it("Verify that the appropriate questions and answers are displayed when the 'Down' arrow in the 'Accessibility on Naturemade.com' section",()=>{
        productDetailsPage.faqPageLinkInPDP();
        productDetailsPage.faqPgOrdersSectnQues(4).waitForVisible();
        productDetailsPage.faqPgOrdersSectnQues(4).click();
        browser.pause(4000);
        productDetailsPage.faqPgSubscribeAndSaveAnswers(4).waitForVisible();
        expect(productDetailsPage.faqPgSubscribeAndSaveAnswers(4).getText()).to.eql(testData.faqPageDetails.subscribeAndSaveAnswers4)
    })



})

describe("Related resource and YouMay Aslo like section",()=>{
    it("Verify that the user is redirected to the 'Blog' page when the 'Image' is clicked in the 'Related Resources' section on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(200, 3000);
        productDetailsPage.browserMethod();
        productDetailsPage.resourcesSectionProdImgs(2).waitForVisible();
        productDetailsPage.resourcesSectionProdImgs(2).click();
        Home.browserMethod();
        blogPage.blogTitle.waitForVisible();
        expect(blogPage.blogTitle.getText()).to.eql(testData.blogPageTitles.wellnessTipsTxt);
    })

    it("Verify that the user is redirected to the 'Blog' page when the image 'Title' is clicked in the 'Related Resources' section on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 3000);
        productDetailsPage.browserMethod();
        productDetailsPage.resourceSectionProdNames(2).waitForVisible();
        productDetailsPage.resourceSectionProdNames(2).click();
        Home.browserMethod();
        blogPage.blogTitle.waitForVisible();
        expect(blogPage.blogTitle.getText()).to.eql(testData.blogPageTitles.wellnessTipsTxt);
    })

    it("Verify that the user is redirected to the 'Blog' page when the '8 min read' link is clicked in the 'Related resources' section on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 3000);
        productDetailsPage.browserMethod();
        if(Home.newRatingPopupCancelIcon.isVisible()) {
            Home.newRatingPopupCancelIcon.click();
        }
        productDetailsPage.resourceSectionMinReadLink(2).waitForVisible();
        productDetailsPage.resourceSectionMinReadLink(2).click();
        blogPage.blogTitle.waitForVisible();
        expect(blogPage.blogTitle.getText()).to.eql(testData.blogPageTitles.wellnessTipsTxt);
    })

    it("Verify that the user is redirected to the 'FAQ' page when the 'View All FAQ' link is clicked on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 3200);
        Home.browserMethod();
        productDetailsPage.viewAllFaq.waitForVisible();
        productDetailsPage.viewAllFaq.click();
        productDetailsPage.faq.waitForVisible();
        expect(productDetailsPage.faq.getText()).to.eql(testData.blogPageTitles.faqTxt);

    })

    it("Verify that the user is navigated to the product details page when the 'Product image' is clicked in the 'You may also like' section on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.execute(function() {
            document.querySelector(`.margin-vertical-2`).scrollIntoView()
        })      
        // browser.waitUntil(
        //     function() {
        //         return (
        //         browser.isVisible
        //             (`.margin-vertical-2`) === true
        //         );
        //     },
        //     90000,
        //     "You may also section is not visible even after 20 secs"
        // ); 
        productDetailsPage.youMayAlsoLikeTitle.waitForVisible();
        expect(productDetailsPage.youMayAlsoLikeTitle.getText()).to.eql(testData.productTitles.youMayAlsoLikeHeading)
        Home.browserMethod();
        productDetailsPage.youMayAlsoLikeSectionProdImgs(1).waitForVisible();
        productDetailsPage.youMayAlsoLikeSectionProdImgs(1).click();
        // var getProdName = productDetailsPage.youMayAlsoLikeSectionProdTitles(1).getText();
        // productDetailsPage.productName(getProdName);
        browser.scroll(0, 0);
        Home.browserMethod();
        productDetailsPage.productName.waitForVisible();
        expect(productDetailsPage.productName.getText()).to.eql(testData.productTitles.multivitaminOmegaProd)   
    })

    it("Verify that the user is navigated to the product details when the 'Product title' is clicked in the 'You may also like' section on the product list page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.execute(function() {
            document.querySelector(`.margin-vertical-2`).scrollIntoView()
        })        
        browser.waitUntil(
            function() {
                return (
                browser.isVisible
                    (`.margin-vertical-2`) === true
                );
            },
            40000,
            "Sub menu dropdown option are not visible even after 20 secs"
          );         
        productDetailsPage.youMayAlsoLikeTitle.waitForVisible();
        expect(productDetailsPage.youMayAlsoLikeTitle.getText()).to.eql(testData.productTitles.youMayAlsoLikeHeading)
        productDetailsPage.youMayAlsoLikeSectionProdTitles(1).waitForVisible();
        productDetailsPage.youMayAlsoLikeSectionProdTitles(1).click();
        Home.browserMethod();
        productDetailsPage.productName.waitForVisible();
        expect(productDetailsPage.productName.getText()).to.eql(testData.productTitles.multivitaminOmegaProd)  
    })

    it("Verify that the user is navigated to the product details when the 'Product rating' is clicked in the 'You may also like' section on the product list page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 2000);
        browser.waitUntil(
            function() {
                return (
                browser.isVisible
                    (`.margin-vertical-2`) === true
                );
            },
            30000,
            "Sub menu dropdown option are not visible even after 20 secs"
          );         
        productDetailsPage.youMayAlsoLikeTitle.waitForVisible();
        expect(productDetailsPage.youMayAlsoLikeTitle.getText()).to.eql(testData.productTitles.youMayAlsoLikeHeading)
        browser.scroll(0, 200);
        Home.browserMethod();
        productDetailsPage.youMayAlsoLkSecProdStarRating(1).waitForVisible();
        productDetailsPage.youMayAlsoLkSecProdStarRating(1).click();
        browser.scroll(0, 0);
        Home.browserMethod();
        productDetailsPage.productName.waitForVisible();
        expect(productDetailsPage.productName.getText()).to.eql(testData.productTitles.multivitaminOmegaProd)
    })

    it("Verify that the user is navigated to the product details when the 'Buy Now' button is clicked in the 'You may also like' section on the product list page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 2000);
        Home.browserMethod();
        productDetailsPage.youMayAlsoLikeTitle.waitForVisible();
        expect(productDetailsPage.youMayAlsoLikeTitle.getText()).to.eql(testData.productTitles.youMayAlsoLikeHeading)
        browser.scroll(0, 200);
        Home.browserMethod();
        productDetailsPage.youMayAlsoLkSecBuyNowBtn(2).waitForVisible();
        productDetailsPage.youMayAlsoLkSecBuyNowBtn(2).click();
        browser.scroll(0, 0);
        Home.browserMethod();
        productDetailsPage.productName.waitForVisible();
        expect(productDetailsPage.productName.getText()).to.eql(testData.productTitles.multivitaminOmegaProd)
    })
})

describe("Cart page",()=>{
    it("Verify that the user is redirected to the 'Your Cart Is Empty' page when without adding a product click on the cart icon",()=>{
        Home.homepageMethod();
        Home.cart.waitForVisible();
        Home.cart.click();
        Home.checkOutBtnInCartDialog.waitForVisible();
        Home.checkOutBtnInCartDialog.click();
        CartPage.emptyCartHeading.waitForVisible();
        expect(CartPage.emptyCartHeading.getText()).to.eql(testData.cart.emptyCartText);
    }) 
    
    it("Verify that the user is redirected to Homepage' when 'Company logo' button is clicked in the cart page",()=>{
            Home.removeAllProductsFromCart();
            Home.cartPageMethod();
            Home.companyLogo1.waitForVisible();
            Home.companyLogo1.click();
            Home.bannerName.waitForVisible();
            Home.bannerName.waitForVisible();
            expect(Home.bannerName.getText()).eql(testData.titles.shopNowText); 
    })

    it("Verify that the badge count of the cart icon is incremented appropriately when the user adds a single product to the cart",()=>{
            Home.removeAllProductsFromCart();    
            Home.vitaminsAndSupplemntsHeadrMenuLink1();
            browser.scroll(0, 400);
            Home.browserMethod();
            productDetailsPage.addToCart.waitForVisible();
            productDetailsPage.addToCart.click();
            Home.browserMethod();
            productDetailsPage.cartCount.waitForVisible();
            expect(productDetailsPage.cartCount.getText()).to.eql(testData.cart.cartCount);
            // Home.removeAllProductsFromCart();
    })

    it("Verify that the user is navigated to 'product details' page when 'Product image' is clicked in the cart page",()=>{
            Home.removeAllProductsFromCart();    
            Home.cartPageMethod();
            Home.cartImage.waitForVisible();
            Home.cartImage.click();
            Home.productTitle.waitForVisible();
            expect(Home.productTitle.getText()).to.eql(testData.productNames.vitaminC500mgwithRoseHips);
    })
     
    it("Verify that the user is navigated to 'product details' page when 'Product title' is clicked in the cart page",()=>{
            Home.removeAllProductsFromCart();    
            Home.cartPageMethod();
            Home.cartTitle.waitForVisible();
            Home.cartTitle.click();
            Home.productTitle.waitForVisible();
            expect(Home.productTitle.getText()).to.eql(testData.productNames.vitaminC500mgwithRoseHips);
    })

    it("Verify that the user can able to add the single quantity of the product when 'Increase' button is clicked in one time",()=>{
            Home.removeAllProductsFromCart();
            Home.cartPageMethod();
            Home.cartPlus.waitForVisible();
            Home.cartPlus.click();
            Home.browserMethod();
            Home.cartQuantity.waitForVisible();
            expect(Home.cartQuantity.getValue()).to.eql(testData.cart.cartQty2);
    })

    it("Verify that the user can add multiple quantity of single product to the cart",()=>{
            // Home.cartPageMethod();
            // browser.refresh();
            // Home.browserMethod();
            Home.removeAllProductsFromCart();
            Home.cartPageMethod();
            CartPage.cartCount.waitForVisible();
            expect(CartPage.cartCount.getText()).to.eql("1\n1 item");
            var beforeIncrease = CartPage.cartCount.getText();
            Home.browserMethod();
            CartPage.increaseBtn.waitForVisible();
            CartPage.increaseBtn.click();
            Home.browserMethod();
            CartPage.cartCount.waitForVisible();
            var afterIncrease = CartPage.cartCount.getText();
            expect(beforeIncrease).not.eql(afterIncrease);
            expect(afterIncrease).to.eql(testData.cart.cartCunt2); 
    })

    it("Verify that the user can add multiple quantity of multiple products to the cart",()=>{
            Home.removeAllProductsFromCart();
            Home.cartPageMethod();
            CartPage.searchField.waitForVisible();
            CartPage.searchField.click();
            CartPage.searchField.setValue([testData.cart.vitaminD3PlusK2, 'Enter']);
            browser.scroll(0, 400);
            Home.browserMethod();
            productListPage.productsTitles(2).waitForVisible();
            productListPage.productsTitles(2).click();
            productDetailsPage.productName.waitForVisible();
            browser.scroll(0, 300);
            Home.browserMethod();
            productDetailsPage.addToCart.waitForVisible();
            productDetailsPage.addToCart.click();
            Home.browserMethod();
            productDetailsPage.viewMyCart.waitForVisible();
            productDetailsPage.viewMyCart.click();
            Home.browserMethod();
            CartPage.increaseBtn.waitForVisible();
            CartPage.increaseBtn.click();
            CartPage.searchField.setValue([testData.cart.calcium, 'Enter']);
            browser.scroll(0, 400);
            if(Home.newRatingPopupCancelIcon.isVisible()){
                Home.newRatingPopupCancelIcon.click();
            }
            productListPage.productsTitles(2).waitForVisible();
            productListPage.productsTitles(2).click();
            productDetailsPage.productName.waitForVisible();
            browser.scroll(0, 300);
            Home.browserMethod();
            productDetailsPage.addToCart.waitForVisible();
            productDetailsPage.addToCart.click();
            Home.browserMethod();
            productDetailsPage.viewMyCart.waitForVisible();
            productDetailsPage.viewMyCart.click();
            CartPage.increaseBtn.waitForVisible();
            CartPage.increaseBtn.click();
            CartPage.cartCount.waitForVisible();
            expect(CartPage.cartCount.getText()).to.eql(testData.cart.cartcnt)
    })

    it("Verify that the total amount of the price is appropriately displayed on the cart page",()=>{
            // Home.cartPageMethod();
            Home.removeAllProductsFromCart();
            Home.cartPageMethod();
            CartPage.searchField.waitForVisible();
            CartPage.searchField.click();
            CartPage.searchField.setValue([testData.cart.vitaminD3PlusK2, 'Enter']);
            browser.scroll(0, 400);
            Home.browserMethod();
            productListPage.productsTitles(2).waitForVisible();
            productListPage.productsTitles(2).click();
            productDetailsPage.productName.waitForVisible();
            browser.scroll(0, 300);
            Home.browserMethod();
            productDetailsPage.addToCart.waitForVisible();
            productDetailsPage.addToCart.click();
            Home.browserMethod();
            productDetailsPage.viewMyCart.waitForVisible();
            productDetailsPage.viewMyCart.click();
            Home.browserMethod();
            CartPage.total_Price.waitForVisible();
            expect(CartPage.total_Price.getText()).to.eql(testData.cart.totalPrice)
    })

    it("Verify that the product is removed when the user clicks the delete icon on the cart page",()=>{
           Home.removeAllProductsFromCart();
            Home.cartPageMethod();
            CartPage.deleteBtn.waitForVisible();
            CartPage.deleteBtn.click();
            CartPage.emptyCartHeading.waitForVisible();
            expect(CartPage.emptyCartHeading.getText()).to.eql(testData.cart.emptyCartText)
    })

    it("Verify that the 'Subtotal' amount is appropriately displayed on the cart page",()=>{
            Home.removeAllProductsFromCart();
            Home.cartPageMethod();
            CartPage.searchField.waitForVisible();
            CartPage.searchField.click();
            CartPage.searchField.setValue([testData.cart.vitaminD3PlusK2, 'Enter']);
            browser.scroll(0, 400);
            Home.browserMethod();
            productListPage.searchedPLPProdTitles(2).waitForVisible();
            productListPage.searchedPLPProdTitles(2).click();
            productDetailsPage.productName.waitForVisible();
            browser.scroll(0, 300);
            Home.browserMethod();
            productDetailsPage.addToCart.waitForVisible();
            productDetailsPage.addToCart.click();
            Home.browserMethod();
            productDetailsPage.viewMyCart.waitForVisible();
            productDetailsPage.viewMyCart.click();
            browser.scroll(0, 600);
            Home.browserMethod();
            CartPage.subTotal_Price.waitForVisible();
            expect(CartPage.subTotal_Price.getText()).to.eql(testData.cart.subTotalPrice);
    })

    it("Verify that the 'Tax' note and 'Shipping' note is appropriately displayed on the cart page",()=>{
           browser.scroll(0, 400);
            Home.browserMethod();
            CartPage.taxAndShippingNote.waitForVisible();
            expect(CartPage.taxAndShippingNote.getText()).to.eql(testData.cart.taxAndShippingText);
    })

    it("Verify that the user is redirected to the 'Information' page when the 'Checkout' button is clicked on the cart page",()=>{
            Home.removeAllProductsFromCart();
            Home.cartPageMethod();
            browser.scroll(0, 400);
            Home.browserMethod();
            CartPage.checkOutBtn.waitForVisible();
            CartPage.checkOutBtn.click();
            CartPage.ContactInformationTitle.waitForVisible();
            expect(CartPage.ContactInformationTitle.getText()).to.eql(testData.cart.contactInformationText)
    })

    it("Verify that the user is redirected to the 'Shop Pay' page when the shop pay button is clicked on the cart page",()=>{
            Home.removeAllProductsFromCart();
            Home.cartPageMethod();
            browser.scroll(0, 400);
            Home.browserMethod();
            CartPage.shopPayBtn.waitForVisible();
            CartPage.shopPayBtn.click();
            browser.pause(4000)
            CartPage.enterYourEmailTxt.waitForVisible();
            expect(CartPage.enterYourEmailTxt.getText()).to.eql(testData.cart.enterYourEmailTxt);
    })

    it("Verify that the user is redirected to the 'Log in to PayPal' page when the Paypal button is clicked on the cart page",()=>{
            Home.removeAllProductsFromCart();
            Home.cartPageMethod();
            browser.scroll(0, 400);
            Home.browserMethod();
            CartPage.payPalBtn.waitForVisible();
            CartPage.payPalBtn.click();
            browser.pause(9000);
            CartPage.payPalPageTitle.waitForVisible();
            expect(CartPage.payPalPageTitle.getText()).to.eql(testData.cart.payPalTxt);
    })  
    
    it("Verify that the user is redirected to 'Homepage' when 'Continue Shopping' button is clicked in the cart page",()=>{
            Home.removeAllProductsFromCart();    
            Home.cartPageMethod();
            Home.cartContinueShopping.waitForVisible();
            Home.cartContinueShopping.click();
            Home.bannerName.waitForVisible();
            expect(Home.bannerName.getText()).eql(testData.titles.shopNowText);
            Home.removeAllProductsFromCart();

    })
})

describe("Contact Information",()=>{
   it("Verify that the user is navigated to the 'Contact Information' page when 'Check out' button is clicked on the Cart page",()=>{
        information.informationPage();
   })

   it("Verify that the user is navigated to the 'Login' page when 'Log in' link is clicked on the Contact information page",()=>{
        information.informationPage();
        information.logInLink.waitForVisible();
        information.logInLink.click();
        Login.loginpageHeading.waitForVisible();
        expect(Login.loginpageHeading.getText()).to.eql(testData.titles.logintitle);
        
   })

   it("Verify that the user is navigated to the 'Shipping address guide' page when the 'Shipping to APO/DPO/FPO? Read our guide' button is clicked",()=>{
        Home.removeAllProductsFromCart();
        information.informationPage();
        information.shippingTOApoBtn.waitForVisible();
        information.shippingTOApoBtn.click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);   
        Home.browserMethod();
        information.shippingAddressAPOHeading.waitForVisible();
        expect(information.shippingAddressAPOHeading.getText()).to.eql(testData.informationPage.shippingAddrssGuidPgHeading);  
        browser.close(); 
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[0]); 
   })

   it("Verify that the appropriate error message is displayed when the 'Invalid email' address is submitted in email field ",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        Home.browserMethod();
        information.emailTextField.waitForVisible();
        information.emailTextField.click();
        information.emailTextField.setValue(testData.informationPage.wrongEmail);
        information.firstName.waitForVisible();
        information.firstName.click();
        information.firstName.setValue(testData.informationPage.firstName);
        information.lastName.waitForVisible();
        information.lastName.click();
        information.lastName.setValue(testData.informationPage.lastName);
        information.adress.waitForVisible();
        information.adress.click();
        information.adress.setValue(testData.informationPage.address1);
        information.city.waitForVisible();
        information.city.click();
        information.city.setValue(testData.informationPage.city);
        information.stateOptions(51).waitForVisible();
        information.stateOptions(51).click();
        information.zipCode.waitForVisible();
        information.zipCode.click();
        information.zipCode.setValue(testData.informationPage.zipCode);
        information.shippingbutton.waitForVisible();
        information.shippingbutton.click();
        Home.browserMethod();
        information.isAddressIsCrctModalBtns(2).waitForVisible();
        information.isAddressIsCrctModalBtns(2).click();
        browser.scroll(0, 0);
        Home.browserMethod();
        information.invalidEmailErrormsg.waitForVisible();
        expect(information.invalidEmailErrormsg.getText()).to.eql(testData.informationPage.emailErrormsg);
   })

   it("Verify that the appropriate error message is displayed when the user does not fill the 'Email' field and clicks on submit button",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        Home.browserMethod();
        information.emailTextField.waitForVisible();
        information.firstName.waitForVisible();
        information.firstName.click();
        information.firstName.setValue(testData.informationPage.firstName);
        information.lastName.waitForVisible();
        information.lastName.click();
        information.lastName.setValue(testData.informationPage.lastName);
        information.adress.waitForVisible();
        information.adress.click();
        information.adress.setValue(testData.informationPage.address1);
        information.city.waitForVisible();
        information.city.click();
        information.city.setValue(testData.informationPage.city);
        information.stateOptions(51).waitForVisible();
        information.stateOptions(51).click();
        information.zipCode.waitForVisible();
        information.zipCode.click();
        information.zipCode.setValue(testData.informationPage.zipCode);
        information.shippingbutton.waitForVisible();
        information.shippingbutton.click();
        information.pleaseFillRequiredFieldErrormsg.waitForVisible();
        expect(information.pleaseFillRequiredFieldErrormsg.getText()).to.eql(testData.informationPage.requiredFieldErrorMsg);
   })

   it("Verify that the appropriate error message is displayed when the user does not fill the 'First Name' field and clicks on submit button",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        Home.browserMethod();
        information.emailTextField.waitForVisible();
        information.emailTextField.click();
        information.emailTextField.setValue(testData.informationPage.email);
        information.firstName.waitForVisible();
        information.lastName.waitForVisible();
        information.lastName.click();
        information.lastName.setValue(testData.informationPage.lastName);
        information.adress.waitForVisible();
        information.adress.click();
        information.adress.setValue(testData.informationPage.address1);
        information.city.waitForVisible();
        information.city.click();
        information.city.setValue(testData.informationPage.city);
        information.stateOptions(51).waitForVisible();
        information.stateOptions(51).click();
        information.zipCode.waitForVisible();
        information.zipCode.click();
        information.zipCode.setValue(testData.informationPage.zipCode);
        information.shippingbutton.waitForVisible();
        information.shippingbutton.click();
        information.pleaseFillRequiredFieldErrormsg.waitForVisible();
        expect(information.pleaseFillRequiredFieldErrormsg.getText()).to.eql(testData.informationPage.requiredFieldErrorMsg);
   })

   it("Verify that the appropriate error message is displayed when the user does not fill the 'Last Name' field and clicks on submit button",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        Home.browserMethod();
        information.emailTextField.waitForVisible();
        information.emailTextField.click();
        information.emailTextField.setValue(testData.informationPage.email);
        information.firstName.waitForVisible();
        information.firstName.click();
        information.firstName.setValue(testData.informationPage.firstName);      
        information.lastName.waitForVisible();
        information.adress.waitForVisible();
        information.adress.click();
        information.adress.setValue(testData.informationPage.address1);
        information.city.waitForVisible();
        information.city.click();
        information.city.setValue(testData.informationPage.city);
        information.stateOptions(51).waitForVisible();
        information.stateOptions(51).click();
        information.zipCode.waitForVisible();
        information.zipCode.click();
        information.zipCode.setValue(testData.informationPage.zipCode);
        information.shippingbutton.waitForVisible();
        information.shippingbutton.click();
        information.pleaseFillRequiredFieldErrormsg.waitForVisible();
        expect(information.pleaseFillRequiredFieldErrormsg.getText()).to.eql(testData.informationPage.requiredFieldErrorMsg);
   })

   it("Verify that the appropriate error message is displayed when the user does not fill the 'Address' field and clicks on submit button",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        Home.browserMethod();
        information.emailTextField.waitForVisible();
        information.emailTextField.click();
        information.emailTextField.setValue(testData.informationPage.email);
        information.firstName.waitForVisible();
        information.firstName.click();
        information.firstName.setValue(testData.informationPage.firstName);
        information.lastName.waitForVisible();
        information.lastName.click();
        information.lastName.setValue(testData.informationPage.lastName);
        information.adress.waitForVisible();
        information.city.waitForVisible();
        information.city.click();
        information.city.setValue(testData.informationPage.city);
        information.stateOptions(51).waitForVisible();
        information.stateOptions(51).click();
        information.zipCode.waitForVisible();
        information.zipCode.click();
        information.zipCode.setValue(testData.informationPage.zipCode);
        information.shippingbutton.waitForVisible();
        information.shippingbutton.click();
        information.pleaseFillRequiredFieldErrormsg.waitForVisible();
        expect(information.pleaseFillRequiredFieldErrormsg.getText()).to.eql(testData.informationPage.requiredFieldErrorMsg);

   })

   it("Verify that the appropriate error message is displayed when the user does not fill the 'City' field and clicks on submit button",()=>{
        Home.removeAllProductsFromCart();        
        information.informationPage();
        Home.browserMethod();
        information.emailTextField.waitForVisible();
        information.emailTextField.click();
        information.emailTextField.setValue(testData.informationPage.email);
        information.firstName.waitForVisible();
        information.firstName.click();
        information.firstName.setValue(testData.informationPage.firstName);
        information.lastName.waitForVisible();
        information.lastName.click();
        information.lastName.setValue(testData.informationPage.lastName);
        information.adress.waitForVisible();
        information.adress.click();
        information.adress.setValue(testData.informationPage.address1);
        information.city.waitForVisible();
        information.stateOptions(51).waitForVisible();
        information.stateOptions(51).click();
        information.zipCode.waitForVisible();
        information.zipCode.click();
        information.zipCode.setValue(testData.informationPage.zipCode);
        information.shippingbutton.waitForVisible();
        information.shippingbutton.click();
        information.pleaseFillRequiredFieldErrormsg.waitForVisible();
        expect(information.pleaseFillRequiredFieldErrormsg.getText()).to.eql(testData.informationPage.requiredFieldErrorMsg);
   })

   it("Verify that the appropriate error message is displayed when the user does not fill the 'Zipcode' field and clicks on submit button",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        Home.browserMethod();
        information.emailTextField.waitForVisible();
        information.emailTextField.click();
        information.emailTextField.setValue(testData.informationPage.email);
        information.firstName.waitForVisible();
        information.firstName.click();
        information.firstName.setValue(testData.informationPage.firstName);
        information.lastName.waitForVisible();
        information.lastName.click();
        information.lastName.setValue(testData.informationPage.lastName);
        information.adress.waitForVisible();
        information.adress.click();
        information.adress.setValue(testData.informationPage.address1);
        information.city.waitForVisible();
        information.city.click();
        information.city.setValue(testData.informationPage.city);
        information.stateOptions(51).waitForVisible();
        information.stateOptions(51).click();
        information.zipCode.waitForVisible();
        information.shippingbutton.waitForVisible();
        information.shippingbutton.click();
        information.pleaseFillRequiredFieldErrormsg.waitForVisible();
        expect(information.pleaseFillRequiredFieldErrormsg.getText()).to.eql(testData.informationPage.requiredFieldErrorMsg);
   })

   it("Verify that the appropriate error message is displayed when the 'Random' numbers enter in the 'Zipcode' field and clicks on 'Continue to shipping' button",()=>{
       Home.removeAllProductsFromCart();     
       information.informationPage();
        Home.browserMethod();
        information.emailTextField.waitForVisible();
        information.emailTextField.click();
        information.emailTextField.setValue(testData.informationPage.email);
        information.firstName.waitForVisible();
        information.firstName.click();
        information.firstName.setValue(testData.informationPage.firstName);
        information.lastName.waitForVisible();
        information.lastName.click();
        information.lastName.setValue(testData.informationPage.lastName);
        information.adress.waitForVisible();
        information.adress.click();
        information.adress.setValue(testData.informationPage.address1);
        information.city.waitForVisible();
        information.city.click();
        information.city.setValue(testData.informationPage.city);
        information.stateOptions(51).waitForVisible();
        information.stateOptions(51).click();
        information.zipCode.waitForVisible();
        information.zipCode.click();
        information.zipCode.setValue(testData.informationPage.randomZipcode);
        information.shippingbutton.waitForVisible();
        information.shippingbutton.click();
        information.isAddressIsCrctModalBtns(2).waitForVisible();
        information.isAddressIsCrctModalBtns(2).click();
        browser.scroll(0, 100);
        Home.browserMethod();
        information.zipcodeErrorMsg.waitForVisible();
        expect(information.zipcodeErrorMsg.getText()).to.eql(testData.informationPage.zipcodeRandomeNumbrErrorMsg);


   })

   it("Verify that the user is redirected to the cart page when 'Return to cart' link is clicked on the information page",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        browser.scroll(0, 200);
        Home.browserMethod();
        information.returnToCart.waitForVisible();
        information.returnToCart.click();
        Home.cartHead.waitForVisible();
        expect(Home.cartHead.getText()).to.eql(testData.cart.cartHead);
   })

})

describe("Contact Information - 1",()=>{
    it("Verify that the 'Apply' button is displayed disabled as default on the contact information page",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        Home.browserMethod();
        information.applyBtnDisabled.waitForVisible();
        expect(information.applyBtnDisabled.isVisible()).to.eql(true);
        console.log("sdfghjkl");
        information.dicountCodeField.waitForVisible();
        information.dicountCodeField.click();
        information.dicountCodeField.setValue([testData.informationPage.discountCode]);
        Home.browserMethod();
        information.applyBtnEnabled.waitForVisible();
        expect(information.applyBtnEnabled.isVisible()).to.eql(true);

    })

    it("Verify that the appropriate error message is dispalyed when the 'Invalid' discount code is submitted",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        Home.browserMethod();
        information.dicountCodeField.waitForVisible();
        information.dicountCodeField.click();
        information.dicountCodeField.setValue([testData.informationPage.invalidDiscountCode]);
        information.applyBtnEnabled.waitForVisible();
        information.applyBtnEnabled.click();
        information.discountCodeFieldErrorMsg.waitForVisible();
        expect(information.discountCodeFieldErrorMsg.getText()).to.eql(testData.informationPage.invalidDiscntFieldErrorMsg)
    })

    it("Verify that the 'Subscription policy' dialog is displayed when user clicks on 'Subscription policy' option on the information page",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        browser.scroll(0, 300);
        Home.browserMethod();
        information.subcriptionPolicy.waitForVisible();
        information.subcriptionPolicy.click();
        information.policyHeader.waitForVisible();
        expect(information.policyHeader.getText()).to.eql(testData.inquiryType.policyHeader);
    
    })

    it("Verify that the 'Subscription policy' popup is closed when the  'Cancel' icon is clicked on the Information page",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        browser.scroll(0, 300);
        Home.browserMethod();
        information.subcriptionPolicy.waitForVisible();
        information.subcriptionPolicy.click();
        information.subscriptionPolicyCloseIcon.waitForVisible();
        information.subscriptionPolicyCloseIcon.click();
        information.contactInformationHeading.waitForVisible();
        expect(information.contactInformationHeading.getText()).to.eql(testData.informationPage.contctInfrmtionnHeading)
    })
    
    it("Verify that subtotal price of the order is displayed correctly when the user adds multiple products to Cart",()=>{
            Home.removeAllProductsFromCart();        
            Home.cartPageMethod();
            CartPage.searchField.waitForVisible();
            CartPage.searchField.click();
            CartPage.searchField.setValue([testData.cart.calcium, 'Enter']);
            browser.scroll(0, 400);
            Home.browserMethod();
            productListPage.searchedPLPProdTitles(2).waitForVisible();
            productListPage.searchedPLPProdTitles(2).click();
            Home.browserMethod();
            browser.execute(function() {
                document.querySelector(`.product-form__quantity label`).scrollIntoView()
             })             
            productDetailsPage.addToCart.waitForVisible();
            productDetailsPage.addToCart.click();
            Home.browserMethod();
            productDetailsPage.viewMyCart.waitForVisible();
            productDetailsPage.viewMyCart.click();
            Home.browserMethod();
            CartPage.searchField.setValue([testData.cart.vitaminD3PlusK2, 'Enter']);
            browser.scroll(0, 400);
            Home.browserMethod();
            productListPage.searchedPLPProdTitles(2).waitForVisible();
            productListPage.searchedPLPProdTitles(2).click();
            Home.browserMethod();
            browser.execute(function() {
                document.querySelector(`.product-form__quantity label`).scrollIntoView()
             })             
            // Home.browserMethod();
            productDetailsPage.addToCart.waitForVisible();
            productDetailsPage.addToCart.click();
            browser.pause(2000);
            productDetailsPage.viewMyCart.waitForVisible();
            productDetailsPage.viewMyCart.click();
            browser.execute(function() {
                document.querySelector(`.disclaimer`).scrollIntoView()
             })           
            CartPage.checkOutBtn.waitForVisible();
            CartPage.checkOutBtn.click();
            Home.browserMethod();
            information.multipleProdSubtotalPrice.waitForVisible();
            expect(information.multipleProdSubtotalPrice.getText()).to.eql(testData.informationPage.subTotalPrice)


    })

    it("Verify that the 'Is the shipping address correct?' popup is displayed when the user clicks on 'Continue to shipping' button on the Information page",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        Home.browserMethod();
        information.emailTextField.waitForVisible();
        information.emailTextField.click();
        information.emailTextField.setValue(testData.informationPage.email);
        information.firstName.waitForVisible();
        information.firstName.click();
        information.firstName.setValue(testData.informationPage.firstName);
        information.lastName.waitForVisible();
        information.lastName.click();
        information.lastName.setValue(testData.informationPage.lastName);
        information.adress.waitForVisible();
        information.adress.click();
        information.adress.setValue(testData.informationPage.address1);
        information.city.waitForVisible();
        information.city.click();
        information.city.setValue(testData.informationPage.city);
        information.stateOptions(51).waitForVisible();
        information.stateOptions(51).click();
        information.zipCode.waitForVisible();
        information.zipCode.click();
        information.zipCode.setValue(testData.informationPage.randomZipcode);
        information.shippingbutton.waitForVisible();
        information.shippingbutton.click();
        information.isTheShippingAddressCorrectHeading.waitForVisible();
        expect( information.isTheShippingAddressCorrectHeading.getText()).to.eql(testData.informationPage.isTheShippingAddressCorrectTxt);
    })

    it("Verify that the Following details is displayed in the 'Is the shipping address correct?' popup, -Address, -City, - State, - Zipcode",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        Home.browserMethod();
        information.emailTextField.waitForVisible();
        information.emailTextField.click();
        information.emailTextField.setValue(testData.informationPage.email);
        information.firstName.waitForVisible();
        information.firstName.click();
        information.firstName.setValue(testData.informationPage.firstName);
        information.lastName.waitForVisible();
        information.lastName.click();
        information.lastName.setValue(testData.informationPage.lastName);
        information.adress.waitForVisible();
        information.adress.click();
        information.adress.setValue(testData.informationPage.address1);
        information.city.waitForVisible();
        information.city.click();
        information.city.setValue(testData.informationPage.city);
        information.stateOptions(51).waitForVisible();
        information.stateOptions(51).click();
        information.zipCode.waitForVisible();
        information.zipCode.click();
        information.zipCode.setValue(testData.informationPage.zipCode);
        information.shippingbutton.waitForVisible();
        information.shippingbutton.click();
        Home.browserMethod();
        information.isTheShippingAddressCorrectHeading.waitForVisible();
        expect( information.isTheShippingAddressCorrectHeading.getText()).to.eql(testData.informationPage.isTheShippingAddressCorrectTxt);
        information.isTheShippingAddressCorrect_Address(2).waitForVisible();
        expect(information.isTheShippingAddressCorrect_Address(2).getText()).to.eql(testData.informationPage.address1);
        information.isTheShippingAddressCorrect_Address(4).waitForVisible();
        expect(information.isTheShippingAddressCorrect_Address(4).getText()).to.eql(testData.informationPage.city);
        information.isTheShippingAddressCorrect_Address(6).waitForVisible();
        expect(information.isTheShippingAddressCorrect_Address(6).getText()).to.eql(testData.informationPage.state);
        information.isTheShippingAddressCorrect_Address(8).waitForVisible();
        expect(information.isTheShippingAddressCorrect_Address(8).getText()).to.eql(testData.informationPage.zipCode);
    })

    it("Verify that the 'Update address' button and 'Proceed' button is displayed on the 'Is the shipping address correct?' popup",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPage();
        Home.browserMethod();
        information.emailTextField.waitForVisible();
        information.emailTextField.click();
        information.emailTextField.setValue(testData.informationPage.email);
        information.firstName.waitForVisible();
        information.firstName.click();
        information.firstName.setValue(testData.informationPage.firstName);
        information.lastName.waitForVisible();
        information.lastName.click();
        information.lastName.setValue(testData.informationPage.lastName);
        information.adress.waitForVisible();
        information.adress.click();
        information.adress.setValue(testData.informationPage.address1);
        information.city.waitForVisible();
        information.city.click();
        information.city.setValue(testData.informationPage.city);
        information.stateOptions(51).waitForVisible();
        information.stateOptions(51).click();
        information.zipCode.waitForVisible();
        information.zipCode.click();
        information.zipCode.setValue(testData.informationPage.randomZipcode);
        information.shippingbutton.waitForVisible();
        information.shippingbutton.click();
        information.isTheShippingAddressCorrectHeading.waitForVisible();
        expect( information.isTheShippingAddressCorrectHeading.getText()).to.eql(testData.informationPage.isTheShippingAddressCorrectTxt);
        information.isAddressIsCrctModalBtns(1).waitForVisible();
        expect( information.isAddressIsCrctModalBtns(1).getText()).to.eql(testData.informationPage.updateBtnTxt);
        information.isAddressIsCrctModalBtns(2).waitForVisible();
        expect( information.isAddressIsCrctModalBtns(2).getText()).to.eql(testData.informationPage.proceedBtnTxt);
    })

    it("Verify that the user is redirected to the 'Shipping page' when the 'Proceed' button is clicked on the 'Is the shipping address correct?' popup",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPageFullDetails();
    })

    it("Verify that the user is redirected to the home page when logo is clicked",()=>{
        information.informationPageFullDetails();
        information.companyLogo.waitForVisible();
        information.companyLogo.click();
        Home.whereToBuyLink.waitForVisible();
        expect(Home.whereToBuyLink.getText()).to.eql(testData.inquiryType.contactPgWhereToBuyLink)
    })

    it("Verify that the user is redirected back to the 'Cart' page when the cart header links is clicked on the shipping page",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPageFullDetails();
        browser.waitUntil(
            function() {
                return (
                browser.isVisible(
                    '.main__header>nav>ol>li:nth-child(1) a'
                ) === true
                );
            },
            40000,
            "Cart page is not displayed even after 20s"
          );          
        information.shipngPgHeadrLinks(1).waitForVisible();
        information.shipngPgHeadrLinks(1).click();
        CartPage.yourCartHeading.waitForVisible();
        expect(CartPage.yourCartHeading.getText()).to.eql(testData.cart.cartHead);
    })

    it("Verify that the user is redirected back to the 'Information' page when the information header links are clicked on the shipping page",()=>{
        browser.scroll(0, 300);
        CartPage.checkOutBtn.waitForVisible();
        CartPage.checkOutBtn.click();  
        information.shipngPgHeadrLinks(2).waitForVisible();
        information.shipngPgHeadrLinks(2).click();
        browser.pause(2000);
        information.contactInformationHeading.waitForVisible();
        expect(information.contactInformationHeading.getText()).to.eql(testData.informationPage.contctInfrmtionnHeading);
    })

    it("Verify that the user entered shipping address is displayed in the 'Ship to' text field",()=>{
        information.informationPageFullDetails();
        Home.browserMethod();
        information.shipingAdrsInShipToFld.waitForVisible();
        expect(information.shipingAdrsInShipToFld.getText()).to.eql(testData.informationPage.shippingAdress)
    })

    it("Verify that the user is redirected to the 'Information' page when the 'Change' option is clicked in the contact text field on the shipping page",()=>{
        // Home.removeAllProductsFromCart();    
        // information.informationPageFullDetails();
        information.changeOptnInContctFld.waitForVisible();
        information.changeOptnInContctFld.click();
        information.contactInformationHeading.waitForVisible();
        expect(information.contactInformationHeading.getText()).to.eql(testData.informationPage.contctInfrmtionnHeading);
    })

    it("Verify that the product image, product name, price and product count is appropriately displayed on the right corner of the shipping page",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPageFullDetails();
        Home.browserMethod();
        information.thumbnailProdImg.waitForVisible();
        expect(information.thumbnailProdImg.isVisible()).to.eql(true);
        // information.thumbnailProdName.waitForVisible();
        // expect(information.thumbnailProdName.getText()).to.eql(true)
        information.thumbnailprodCount.waitForVisible();
        expect(information.thumbnailprodCount.getText()).to.eql(testData.informationPage.thumbnailProdCount);
        information.bottleCount.waitForVisible();
        expect(information.bottleCount.getText()).to.eql(testData.productDetailsPage.bottleCount);
    })

    it("Verify that the user is redirected back to the 'Infomation' page when the 'Return to information' link is clicked on the shipping page",()=>{
        Home.removeAllProductsFromCart();    
        information.informationPageFullDetails();
        information.returnToInformtn.waitForVisible();
        information.returnToInformtn.click();
        information.contactInformationHeading.waitForVisible();
        expect(information.contactInformationHeading.getText()).to.eql(testData.informationPage.contctInfrmtionnHeading);
    })

    it("Verify that the product 'Total' price is appropriately displayed on the shipping page",()=>{
        Home.removeAllProductsFromCart();    
        Home.homepageMethod();
         Home.vitaminsandSupplements.waitForVisible();
         Home.vitaminsandSupplements.click();
         Home.vitaminsSublinks(1, 5).waitForVisible();
         Home.vitaminsSublinks(1, 5).click();
         browser.execute(function() {
            document.querySelector(`.sub-collection-template-title`).scrollIntoView()
          })         
          Home.browserMethod();
         productListPage.productsTitles(2).waitForVisible();
         var ProdName2 = productListPage.productsTitles(2).getText();
         var convertedText = ProdName2.toLowerCase();
         productListPage.productsTitles(2).click();
         productDetailsPage.productName.waitForVisible();
         var getTextOnProductList = productListPage.productName.getText()
         var convertTextOnPDP = getTextOnProductList.toLowerCase();
         expect(convertTextOnPDP).to.eql(convertedText)    
         browser.execute(function() {
            document.querySelector(`.product-form__quantity label`).scrollIntoView()
         })              
         Home.browserMethod();
         productDetailsPage.addToCart.waitForVisible();
         productDetailsPage.addToCart.click();
         Home.browserMethod();
         productDetailsPage.viewMyCart.waitForVisible();
         productDetailsPage.viewMyCart.click();
         browser.scroll(0, 300);
         Home.browserMethod();
         cartPage.total_Price.waitForVisible();
         var getPrice1 = cartPage.total_Price.getText();
         var splitPrice1 =  getPrice1.split("$");
         var afterSplittedPrice = splitPrice1[1];
         browser.scroll(0, 300);
        cartPage.checkOutBtn.waitForVisible();
        cartPage.checkOutBtn.click();
        information.multipleProTotalPrice.waitForVisible();
        var getPriceText = information.multipleProTotalPrice.getText();
        console.log("getPriceText", getPriceText)
        var splitPrice =  getPriceText.split("$");
        console.log("splitPrice", splitPrice)
        var getAfterSplit = splitPrice[1]
        console.log("getAfterSplit", getAfterSplit)
        expect(getAfterSplit).to.eql(afterSplittedPrice);
    })

    it("Verify that the 'Product count' is displayed appropriately above the product on the payment page, when the user can add multiple quantities of single product to the cart",()=>{
        Home.removeAllProductsFromCart();     
        Home.homepageMethod();
         Home.vitaminsandSupplements.waitForVisible();
         Home.vitaminsandSupplements.click();
         Home.vitaminsSublinks(1, 5).waitForVisible();
         Home.vitaminsSublinks(1, 5).click();
         browser.execute(function() {
            document.querySelector(`.sub-collection-template-title`).scrollIntoView()
          })         
          Home.browserMethod();
          productListPage.productsTitles(2).waitForVisible();
         var ProdName2 = productListPage.productsTitles(2).getText();
         var convertedText = ProdName2.toLowerCase();
         productListPage.productsTitles(2).click();
         productDetailsPage.productName.waitForVisible();
         var getTextOnProductList = productListPage.productName.getText()
         var convertTextOnPDP = getTextOnProductList.toLowerCase();
         expect(convertTextOnPDP).to.eql(convertedText)    
         browser.execute(function() {
            document.querySelector(`.product-form__quantity label`).scrollIntoView()
         })           
         Home.browserMethod();
         productDetailsPage.addToCart.waitForVisible();
         productDetailsPage.addToCart.click();
         Home.browserMethod();
         productDetailsPage.viewMyCart.waitForVisible();
         productDetailsPage.viewMyCart.click();
         Home.browserMethod();
         cartPage.increaseBtn.waitForVisible();
         cartPage.increaseBtn.click();
         browser.scroll(0, 300);
        Home.browserMethod();
         cartPage.total_Price.waitForVisible();
         var getPrice1 = cartPage.total_Price.getText();
         var splitPrice1 =  getPrice1.split("$");
         var afterSplittedPrice = splitPrice1[1];
         browser.scroll(0, 300);
        cartPage.checkOutBtn.waitForVisible();
        cartPage.checkOutBtn.click();
        information.multipleProTotalPrice.waitForVisible();
        var getPriceText = information.multipleProTotalPrice.getText();
        console.log("getPriceText", getPriceText)
        var splitPrice =  getPriceText.split("$");
        console.log("splitPrice", splitPrice)
        var getAfterSplit = splitPrice[1]
        console.log("getAfterSplit", getAfterSplit)
        expect(getAfterSplit).to.eql(afterSplittedPrice);
    })

    it("Verify that the 'Product count' is displayed appropriately above the product on the payment page, when the user adds multiple products to the cart",()=>{
        Home.removeAllProductsFromCart();    
        Home.homepageMethod();
        Home.vitaminsandSupplements.waitForVisible();
        Home.vitaminsandSupplements.click();
        Home.vitaminsSublinks(1, 5).waitForVisible();
        Home.vitaminsSublinks(1, 5).click();
        browser.execute(function() {
           document.querySelector(`.sub-collection-template-title`).scrollIntoView()
        })         
        productListPage.productsTitles(2).waitForVisible();
         var ProdName2 = productListPage.productsTitles(2).getText();
         var convertedText = ProdName2.toLowerCase();
         productListPage.productsTitles(2).click();
         productDetailsPage.productName.waitForVisible();
         var getTextOnProductList = productListPage.productName.getText()
         var convertTextOnPDP = getTextOnProductList.toLowerCase();
         expect(convertTextOnPDP).to.eql(convertedText)    
         browser.execute(function() {
            document.querySelector(`.product-form__quantity label`).scrollIntoView()
         })           
        Home.browserMethod();
        Home.vitaminsandSupplements.waitForVisible();
        Home.vitaminsandSupplements.click();
        Home.vitaminsSublinks(1, 4).waitForVisible();
        Home.vitaminsSublinks(1, 4).click();
        browser.execute(function() {
           document.querySelector(`.sub-collection-template-title`).scrollIntoView()
         })         
        //  Home.browserMethod();
         productListPage.productsTitles(1).waitForVisible();
         var ProdName2 = productListPage.productsTitles(1).getText();
         var convertedText = ProdName2.toLowerCase();
         productListPage.productsTitles(1).click();
         productDetailsPage.productName.waitForVisible();
         var getTextOnProductList = productListPage.productName.getText()
         var convertTextOnPDP = getTextOnProductList.toLowerCase();
         expect(convertTextOnPDP).to.eql(convertedText)    
         browser.execute(function() {
            document.querySelector(`.product-form__quantity label`).scrollIntoView()
         })           
        browser.scroll(0, 200);
        Home.browserMethod();
        productDetailsPage.addToCart.waitForVisible();
        productDetailsPage.addToCart.click();
        Home.browserMethod();
        productDetailsPage.viewMyCart.waitForVisible();
        productDetailsPage.viewMyCart.click();
        Home.browserMethod();
        cartPage.increaseBtn.waitForVisible();
        cartPage.increaseBtn.click();
        browser.scroll(0, 300);
        Home.browserMethod();
        cartPage.total_Price.waitForVisible();
        var getPrice1 = cartPage.total_Price.getText();
        var splitPrice1 =  getPrice1.split("$");
        var afterSplittedPrice = splitPrice1[1];
        browser.scroll(0, 300);
       cartPage.checkOutBtn.waitForVisible();
       cartPage.checkOutBtn.click();
       information.multipleProTotalPrice.waitForVisible();
       var getPriceText = information.multipleProTotalPrice.getText();
       console.log("getPriceText", getPriceText)
       var splitPrice =  getPriceText.split("$");
       console.log("splitPrice", splitPrice)
       var getAfterSplit = splitPrice[1]
       console.log("getAfterSplit", getAfterSplit)
       expect(getAfterSplit).to.eql(afterSplittedPrice);
    })

})

describe("Payment page",()=>{
    it("Verify that the 'Credit' cart details section is appropriately displayed on the payment page",()=>{
        information.informationPageFullDetails();
        information.continueToPaymntBtn.waitForVisible();
        information.continueToPaymntBtn.click();
        information.paymentHeading.waitForVisible();
        expect(information.paymentHeading.getText()).to.eql(testData.informationPage.paymentText);
    })

    it("Verify that the following options are displayed in the payment section on the payment page, Visa, American Express, MasterCard, Discover",()=>{
        information.informationPageFullDetails();
        information.continueToPaymntBtn.waitForVisible();
        information.continueToPaymntBtn.click();
        information.paymentHeading.waitForVisible();
        expect(information.paymentHeading.getText()).to.eql(testData.informationPage.paymentText);
        Home.browserMethod();
        paymentPage.creditCardOptions(1).waitForVisible();
        expect(paymentPage.creditCardOptions(1).getText()).to.eql(testData.paymentPageDetails.visaCardTxt);
        paymentPage.creditCardOptions(2).waitForVisible();
        expect(paymentPage.creditCardOptions(2).getText()).to.eql(testData.paymentPageDetails.masterCardTxt);
        paymentPage.creditCardOptions(3).waitForVisible();
        expect(paymentPage.creditCardOptions(3).getText()).to.eql(testData.paymentPageDetails.amexTxt);
        paymentPage.creditCardOptions(4).waitForVisible();
        expect(paymentPage.creditCardOptions(4).getText()).to.eql(testData.paymentPageDetails.discoverTxt);
        paymentPage.creditCardOptions(5).waitForVisible();
        expect(paymentPage.creditCardOptions(5).getText()).to.eql(testData.paymentPageDetails.andMoreTxt);
    })

    it("Verify that the user is able to pay the bill using 'Visa' card when products are added to shopping cart",()=>{
         Home.devHomepageMethod();
         Home.vitaminsandSupplements.waitForVisible();
         Home.vitaminsandSupplements.click();
         Home.vitaminsSublinks(1, 5).waitForVisible();
         Home.vitaminsSublinks(1, 5).click();
         browser.scroll(".sub-collection-template-title");
         Home.browserMethod();
         productListPage.productImgs(2).waitForVisible();
         productListPage.productImgs(2).click();
         browser.scroll(0, 200);
         Home.browserMethod();
         productDetailsPage.addToCart.waitForVisible();
         productDetailsPage.addToCart.click();
         Home.browserMethod();
         productDetailsPage.viewMyCart.waitForVisible();
         productDetailsPage.viewMyCart.click();
         browser.scroll(0, 300);
         Home.browserMethod();
         cartPage.checkOutBtn.waitForVisible();
         cartPage.checkOutBtn.click();
         information.informationDetails_1();
         information.continueToPaymntBtn.waitForVisible();
         information.continueToPaymntBtn.click();
         Home.browserMethod();
         browser.scroll(0, 500);
         Home.browserMethod();
         paymentPage.visaCardDetials();
         paymentPage.payNowBtn.waitForVisible();
         paymentPage.payNowBtn.click();
         paymentPage.thankYouTest.waitForVisible();
         expect(paymentPage.thankYouTest.getText()).to.eql(testData.paymentPageDetails.thankYouTxt)
    })

    it("Verify that the user is able to pay the bill using 'Mastercard' card when products are added to shopping cart",()=>{
         Home.devHomepageMethod();
         Home.vitaminsandSupplements.waitForVisible();
         Home.vitaminsandSupplements.click();
         Home.vitaminsSublinks(1, 5).waitForVisible();
         Home.vitaminsSublinks(1, 5).click();
         browser.scroll(".sub-collection-template-title");
         Home.browserMethod();
         productListPage.productImgs(2).waitForVisible();
         productListPage.productImgs(2).click();
         browser.scroll(0, 200);
         Home.browserMethod();
         productDetailsPage.addToCart.waitForVisible();
         productDetailsPage.addToCart.click();
         Home.browserMethod();
         productDetailsPage.viewMyCart.waitForVisible();
         productDetailsPage.viewMyCart.click();
         browser.scroll(0, 300);
         Home.browserMethod();
         cartPage.checkOutBtn.waitForVisible();
         cartPage.checkOutBtn.click();
         information.informationDetails_1();
         information.continueToPaymntBtn.waitForVisible();
         information.continueToPaymntBtn.click();
         browser.scroll(0, 500);
         Home.browserMethod();
         paymentPage.masterCardDetails();
         paymentPage.payNowBtn.waitForVisible();
         paymentPage.payNowBtn.click();
         paymentPage.thankYouTest.waitForVisible();
         expect(paymentPage.thankYouTest.getText()).to.eql(testData.paymentPageDetails.thankYouTxt);
    })

    it("Verify that the user is able to pay the bill using the 'AMEX' (American Express) card when products are added to the shopping cart",()=>{
         Home.devHomepageMethod();
         Home.vitaminsandSupplements.waitForVisible();
         Home.vitaminsandSupplements.click();
         Home.vitaminsSublinks(1, 5).waitForVisible();
         Home.vitaminsSublinks(1, 5).click();
         browser.scroll(".sub-collection-template-title");
         Home.browserMethod();
         productListPage.productImgs(2).waitForVisible();
         productListPage.productImgs(2).click();
         browser.scroll(0, 200);
         Home.browserMethod();
         productDetailsPage.addToCart.waitForVisible();
         productDetailsPage.addToCart.click();
         Home.browserMethod();
         productDetailsPage.viewMyCart.waitForVisible();
         productDetailsPage.viewMyCart.click();
         browser.scroll(0, 300);
         Home.browserMethod();
         cartPage.checkOutBtn.waitForVisible();
         cartPage.checkOutBtn.click();
         information.informationDetails_1();
         information.continueToPaymntBtn.waitForVisible();
         information.continueToPaymntBtn.click();
         browser.scroll(0, 500);
         Home.browserMethod();
         paymentPage.americanExpressCardDetails();
         paymentPage.payNowBtn.waitForVisible();
         paymentPage.payNowBtn.click();
         paymentPage.thankYouTest.waitForVisible();
         expect(paymentPage.thankYouTest.getText()).to.eql(testData.paymentPageDetails.thankYouTxt)
    })

    it("Verify that the user is able to pay the bill using the 'Discover' card when products are added to the shopping cart",()=>{
        Home.devHomepageMethod();
         Home.vitaminsandSupplements.waitForVisible();
         Home.vitaminsandSupplements.click();
         Home.vitaminsSublinks(1, 5).waitForVisible();
         Home.vitaminsSublinks(1, 5).click();
         browser.scroll(".sub-collection-template-title");
         Home.browserMethod();
         productListPage.productImgs(2).waitForVisible();
         productListPage.productImgs(2).click();
         browser.scroll(0, 200);
         Home.browserMethod();
         productDetailsPage.addToCart.waitForVisible();
         productDetailsPage.addToCart.click();
         Home.browserMethod();
         productDetailsPage.viewMyCart.waitForVisible();
         productDetailsPage.viewMyCart.click();
         browser.scroll(0, 300);
         Home.browserMethod();
         cartPage.checkOutBtn.waitForVisible();
         cartPage.checkOutBtn.click();
         information.informationDetails_1();
         information.continueToPaymntBtn.waitForVisible();
         information.continueToPaymntBtn.click();
         browser.scroll(0, 500);
         Home.browserMethod();
         paymentPage.discoverCardDetails();
         paymentPage.payNowBtn.waitForVisible();
         paymentPage.payNowBtn.click();
         paymentPage.thankYouTest.waitForVisible();
         expect(paymentPage.thankYouTest.getText()).to.eql(testData.paymentPageDetails.thankYouTxt)
    })

    it("Verify that the appropriate error message is displayed when the user without entering an 'Card number' clicks on the pay now button",()=>{
         Home.devHomepageMethod();
         Home.vitaminsandSupplements.waitForVisible();
         Home.vitaminsandSupplements.click();
         Home.vitaminsSublinks(1, 5).waitForVisible();
         Home.vitaminsSublinks(1, 5).click();
         browser.scroll(".sub-collection-template-title");
         Home.browserMethod();
         productListPage.productImgs(2).waitForVisible();
         productListPage.productImgs(2).click();
         Home.browserMethod();
         browser.scroll(0, 200);
         Home.browserMethod();
         productDetailsPage.addToCart.waitForVisible();
         productDetailsPage.addToCart.click();
         Home.browserMethod();
         productDetailsPage.viewMyCart.waitForVisible();
         productDetailsPage.viewMyCart.click();
         browser.scroll(0, 300);
         Home.browserMethod();
         cartPage.checkOutBtn.waitForVisible();
         cartPage.checkOutBtn.click();
         information.informationDetails_1();
         information.continueToPaymntBtn.waitForVisible();
         information.continueToPaymntBtn.click();
         Home.browserMethod();
         browser.scroll(0, 500);        
         information.creditCardFields(2).waitForVisible();
         const frameValue = browser.element('card-fields-iframe').value;
         browser.frame(frameValue);
         Home.browserMethod();
         information.creditCardFields(3).waitForVisible();
         information.creditCardFields(3).click();
         information.creditCardFields(3).addValue([testData.paymentPageDetails.cardName]);
         information.creditCardFields(4).waitForVisible();
         information.creditCardFields(4).click();
         information.creditCardFields(4).addValue([testData.paymentPageDetails.expiryDate]);
         information.creditCardFields(5).waitForVisible();
         information.creditCardFields(5).click();
         information.creditCardFields(5).addValue([testData.paymentPageDetails.securityCode]);
         paymentPage.payNowBtn.waitForVisible();
         paymentPage.payNowBtn.click();
         paymentPage.cardFldErrorMsg.waitForVisible();
         expect(paymentPage.cardFldErrorMsg.getText()).to.eql(testData.paymentPageDetails.cardnumbrFldErrorMsg);
    })

    it("Verify that the 'Billing Address' section is appropriately displayed below the payment section on the payment page",()=>{
        information.informationPageFullDetails();
        information.continueToPaymntBtn.waitForVisible();
        information.continueToPaymntBtn.click();
        browser.scroll(0,100);
        Home.browserMethod();
        information.billingAdrsHeading.waitForVisible();
        expect(information.billingAdrsHeading.getText()).to.eql(testData.informationPage.billingAdressHeadingTxt);
    })

    it("Verify that the 'Use a different billing address' radio button is selected default in the billing section on the payment page",()=>{
        information.informationPageFullDetails();
        information.continueToPaymntBtn.waitForVisible();
        information.continueToPaymntBtn.click();
        browser.scroll(0,100);
        Home.browserMethod();
        information.billingAdrsHeading.waitForVisible();
        expect(information.billingAdrsHeading.getText()).to.eql(testData.informationPage.billingAdressHeadingTxt);    
        information.billingAddressRadioBtns(3).waitForVisible();
        information.billingAddressRadioBtns(3).click();
        Home.browserMethod();
        information.countryField.waitForVisible();
        expect(information.countryField.getText()).to.eql(testData.informationPage.countryTxt);    

    })

    it("Verify that the following details are displayed in the 'Use a different billing address' section. -First Name, -Last Name, -Address, - Add a house number if you have one, -City, -Country/region, -State, -Zipcode",()=>{ 
        information.informationPageFullDetails();
        information.continueToPaymntBtn.waitForVisible();
        information.continueToPaymntBtn.click();
        browser.scroll(0,100);
        Home.browserMethod();
        information.billingAdrsHeading.waitForVisible();
        expect(information.billingAdrsHeading.getText()).to.eql(testData.informationPage.billingAdressHeadingTxt); 
        information.billingAddressRadioBtns(3).waitForVisible();
        information.billingAddressRadioBtns(3).click();
        browser.scroll(0,300);
        Home.browserMethod();
        information.countryField_1.waitForVisible();
        information.countryField_1.click();
        information.countryField_1.setValue([testData.informationPage.countryFldTxt]);
        Home.browserMethod();
        information.countryField.waitForVisible();
        information.countryField.click();
        expect(information.countryField.getText()).to.eql(testData.informationPage.countryFldTxt);
        information.useaDiffBilngAdresFlds(2).waitForVisible();
        information.useaDiffBilngAdresFlds(2).click();
        expect(information.useaDiffBilngAdresFlds(2).getText()).to.eql(testData.informationPage.frstNameFldTxt);
        information.useaDiffBilngAdresFlds(3).waitForVisible();
        information.useaDiffBilngAdresFlds(3).click();
        expect(information.useaDiffBilngAdresFlds(3).getText()).to.eql(testData.informationPage.lastNameFldTxt);
        information.useaDiffBilngAdresFlds(4).waitForVisible();
        information.useaDiffBilngAdresFlds(4).click();
        expect(information.useaDiffBilngAdresFlds(4).getText()).to.eql(testData.informationPage.addressFldTxt);
        information.useaDiffBilngAdresFlds(6).waitForVisible();
        information.useaDiffBilngAdresFlds(6).click();
        expect(information.useaDiffBilngAdresFlds(6).getText()).to.eql(testData.informationPage.cityFldTxt);
        information.useaDiffBilngAdresFlds(8).waitForVisible();
        information.useaDiffBilngAdresFlds(8).click();
        expect(information.useaDiffBilngAdresFlds(8).getText()).to.eql(testData.informationPage.pinCodeTxt);

    })

    it("Verify that the appropriate error message is displayed when the user without entering a 'First Name' field clicks on the pay now button",()=>{
        information.informationPageFullDetails();
        information.continueToPaymntBtn.waitForVisible();
        information.continueToPaymntBtn.click();
        browser.scroll(0,300);
        Home.browserMethod();
        information.countryField.waitForVisible();
        information.countryField.click();
    })

    it("Verify that the user is redirected to the 'Shipping' page when the 'Return to shipping' link is clicked on the payment page",()=>{
        information.informationPageFullDetails();
        information.continueToPaymntBtn.waitForVisible();
        information.continueToPaymntBtn.click();
        browser.scroll(0, 500);
        information.returnToShipping.waitForVisible();
        information.returnToShipping.click();
        expect(information.shippingMethodTitleTxt.getText()).to.eql(testData.informationPage.shippingMethodText);

    })
})

describe("Cart Page 1",()=>{
    it("Verify that the cart quantity of products with multiple quantities is incremented when the 'Increase quantity' button is clicked",()=>{
        Home.multipleQuantiesAddedToCart();
        browser.scroll(0, 300);
        productDetailsPage.addToCart.waitForVisible();
        var beforeQtyIncrease = productDetailsPage.oneTimePurPrice.getText();
        productDetailsPage.addToCart.click();
        productDetailsPage.viewMyCart.waitForVisible();
        productDetailsPage.viewMyCart.click();
        cartPage.increaseBtn.waitForVisible();
        cartPage.increaseBtn.click();
        Home.browserMethod();
        cartPage.increaseBtn.waitForVisible();
        cartPage.increaseBtn.click();
        Home.browserMethod();
        var afterQtyIncrease = CartPage.total_Price.getValue();
        expect(beforeQtyIncrease).not.to.eql(afterQtyIncrease);
        expect(afterQtyIncrease).to.eql(testData.values.value);
    })

    it("Verify that the cart quantity of products with multiple quantities is reduced when the 'Decrease quantity' button is clicked",()=>{
        Home.multipleQuantiesAddedToCart();
        browser.scroll(0, 300);
        productDetailsPage.addToCart.waitForVisible();
        var beforeQtyIncrease = productDetailsPage.oneTimePurPrice.getText();
        productDetailsPage.addToCart.click();
        Home.browserMethod();
        productDetailsPage.viewMyCart.waitForVisible();
        productDetailsPage.viewMyCart.click();
        cartPage.increaseBtn.waitForVisible();
        cartPage.increaseBtn.click();
        Home.browserMethod();
        cartPage.increaseBtn.waitForVisible();
        cartPage.increaseBtn.click();
        var aftrQtyIncrese  =  CartPage.total_Price.getValue();
        expect(beforeQtyIncrease).not.to.eql(aftrQtyIncrese);
        cartPage.decreaseBtn.waitForVisible();
        cartPage.decreaseBtn.click();
        Home.browserMethod();
        cartPage.decreaseBtn.waitForVisible();
        cartPage.decreaseBtn.click();
        Home.browserMethod();
        var afterQtyDecrease = CartPage.total_Price.getValue();
        expect(aftrQtyIncrese).not.to.eql(afterQtyDecrease);
        expect(afterQtyDecrease).to.eql(testData.values.val1);
    })
})

describe("Product Description Link",()=>{
    it("Verify that the user is redirected to the 'Ingredient' section when the 'Ingredient' link is clicked on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 600);
        productDetailsPage.ingredientsLink.waitForVisible();
        productDetailsPage.ingredientsLink.click();
        productDetailsPage.ingredientDescHeading.waitForVisible();
        expect(productDetailsPage.ingredientDescHeading.getText()).to.eql(testData.productDetailsPage.ingredientsDescText);   
    })

    it("Verify that the user is redirected to the 'Nutrient Shortfalls' section when the 'Nutrient Shortfalls' link is clicked on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 600);
        productDetailsPage.nutientShortfallsLink.waitForVisible();
        productDetailsPage.nutientShortfallsLink.click();
        productDetailsPage.nutientShortfallsHeadings(1).waitForVisible();
        expect(productDetailsPage.nutientShortfallsHeadings(1).getText()).to.eql(testData.productDetailsPage.nutrientShrtfallsDescTxt); 
    })

    it("Verify that the user is redirected to the 'Dosage & Interaction' section when the 'Dosage & Interaction' link is clicked on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 600);
        productDetailsPage.dosageandInteractionsLink.waitForVisible();
        productDetailsPage.dosageandInteractionsLink.click();
        productDetailsPage.dosageandInteractionsHeading.waitForVisible();
        expect(productDetailsPage.dosageandInteractionsHeading.getText()).to.eql(testData.productDetailsPage.dosageDescTxt);
    })

    it("Verify that the user is redirected to the Quality Supplements' page when the 'uspverified' link is clicked on the product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll("#tab-1 .fact-items-wrapper.rte.margin-bottom-2 h5");
        Home.browserMethod();
        productDetailsPage.wwwUpsVerifiedLink.waitForVisible();
        productDetailsPage.wwwUpsVerifiedLink.click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]); 
        productDetailsPage.upsVerifiedPageheaderLinks(1).waitForVisible();
        expect(productDetailsPage.upsVerifiedPageheaderLinks(1).getText()).to.eql(testData.productDetailsPage.aboutTxt);
    })
})

describe("Favourite icon",()=>{
    it("Verify that the user is navigated to 'Create Account' page when user clicks on 'Favourite' icon on the homepage without login",()=>{
      browser.url(testData.naturemade.url);
    //   browser.windowHandleFullscreen();
      if(Home.acceptcookieepopup.isVisible()){
        Home.acceptcookieepopup.click();
      }
      Home.browserMethod();
      if(Home.subscribeCancelIcon.isVisible()){
        Home.subscribeCancelIcon.click();
      }
      Home.favIcon.waitForVisible();
      Home.favIcon.click();
      Home.favCreateAccountHead.waitForVisible();
      expect( Home.favCreateAccountHead.getText()).to.eql(testData.titles.createAnAccToFav)
    })
  
    it("Verify that the 'Favourite' icon is turned grey on the homepage, when user adds the product to the favourites",()=>{
        Home.loginUser();
        Home.emptyHeartIcon.waitForVisible();
        expect(Home.emptyHeartIcon.isVisible()).to.eql(true);
        Home.vitaminsAndSupplemntsHeadrMenuLink2();
        browser.scroll(".sub-collection-template-title");
        Home.browserMethod();
        productListPage.favIcons(2).waitForVisible
        productListPage.favIcons(2).click();
        productListPage.favIcons(3).waitForVisible
        productListPage.favIcons(3).click();
        Home.browserMethod();
        Home.fullHeartIcon.waitForVisible();
        expect(Home.fullHeartIcon.isVisible()).to.eql(true);
        Home.browserMethod();
        expect(Home.emptyHeartIcon.isVisible()).to.eql(true);
  
        // Home.favIcon.waitForVisible();
        // expect( Home.favIcon.isVisible()).to.eql(true)
    })

    it("Verify that the user is navigated to 'Create Account' page when user clicks on 'Favourite' icon on the PLP without login",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        Home.browserMethod();
        // Home.homepageMethod();
        // Home.vitaminsandSupplements.waitForVisible();
        // Home.vitaminsandSupplements.click();
        Home.favIcon.waitForVisible();
        Home.favIcon.click();
        Home.favCreateAccountHead.waitForVisible();
        expect( Home.favCreateAccountHead.getText()).to.eql(testData.titles.createAnAccToFav)
    })

    it("Verify that the user is navigated to 'Create Account' page when user clicks on 'Favourite' icon on the PDP without login",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        Home.browserMethod();
        Home.favIcon.waitForVisible();
        Home.favIcon.click();
        Home.createAccountHead.waitForVisible();
        expect( Home.createAccountHead.getText()).to.eql(testData.titles.createAnAccToFav)
    })

    it("Verify that the item is removed when the user clicks on the 'Favourite' icon on the 'Your favourites' pop-up",()=>{
        Home.loginUser();
        Home.emptyHeartIcon.waitForVisible();
        expect(Home.emptyHeartIcon.isVisible()).to.eql(true);
        Home.vitaminsAndSupplemntsHeadrMenuLink2();
        browser.scroll(".sub-collection-template-title");
        Home.browserMethod();
        productListPage.favIcons(2).waitForVisible
        productListPage.favIcons(2).click();
        productListPage.favIcons(3).waitForVisible
        productListPage.favIcons(3).click();
        productListPage.favIcons(4).waitForVisible
        productListPage.favIcons(4).click();
        Home.browserMethod();
        Home.favIcon.waitForVisible();
        Home.favIcon.click();
        productListPage.favPopupHeartIcons(1).waitForVisible();
        productListPage.favPopupHeartIcons(1).click();
        productListPage.favPopupHeartIcons(1).waitForVisible();
        productListPage.favPopupHeartIcons(1).click();
        productListPage.favPopupHeartIcons(1).waitForVisible();
        productListPage.favPopupHeartIcons(1).click();
        productListPage.favCount.waitForVisible();
        expect(productListPage.favCount.getText()).to.eql(testData.values.zeroTxt);
    })

    it("Verify that the 'Favourites' pop-up is closed when user clicks on the 'Cancel' button on the favourites pop-up",()=>{
        Home.loginUser();
        Home.emptyHeartIcon.waitForVisible();
        expect(Home.emptyHeartIcon.isVisible()).to.eql(true);
        Home.vitaminsAndSupplemntsHeadrMenuLink2();
        browser.scroll(".sub-collection-template-title");
        Home.browserMethod();
        productListPage.favIcons(2).waitForVisible
        productListPage.favIcons(2).click();
        productListPage.favIcons(3).waitForVisible
        productListPage.favIcons(3).click();
        productListPage.favIcons(4).waitForVisible
        productListPage.favIcons(4).click();
        Home.browserMethod();
        Home.favIcon.waitForVisible();
        Home.favIcon.click();
        Home.browserMethod();
        productListPage.favPopupCloseIcon.waitForVisible();
        productListPage.favPopupCloseIcon.click();
        Home.whereToBuyLink.waitForVisible();
        expect(Home.whereToBuyLink.getText()).eql(testData.titles.whereToBuyheaderTxt);        
    })

    it("Verify that the count of the favourites is displayed appropriately on 'You Favourites' pop-up",()=>{
        Home.loginUser();
        Home.emptyHeartIcon.waitForVisible();
        expect(Home.emptyHeartIcon.isVisible()).to.eql(true);
        Home.vitaminsAndSupplemntsHeadrMenuLink2();
        browser.scroll(".sub-collection-template-title");
        Home.browserMethod();
        productListPage.favIcons(2).waitForVisible
        productListPage.favIcons(2).click();
        productListPage.favIcons(3).waitForVisible
        productListPage.favIcons(3).click();
        productListPage.favIcons(4).waitForVisible
        productListPage.favIcons(4).click();
        Home.favIcon.waitForVisible();
        Home.favIcon.click();
        Home.browserMethod();
        productListPage.favCount.waitForVisible();
        expect(productListPage.favCount.getText()).to.eql(testData.values.three);
    })

    it("Verify that the user is able to checkout with the product from 'Your Favorite' pop-up",()=>{
        Home.loginUser();
        Home.vitaminsAndSupplemntsHeadrMenuLink();
        browser.scroll(".sub-collection-template-title");
        Home.browserMethod();
        productListPage.favIcons(4).waitForVisible
        productListPage.favIcons(4).click();
        productListPage.favIcons(5).waitForVisible
        productListPage.favIcons(5).click();
        Home.favIcon.waitForVisible();
        Home.favIcon.click();
        Home.favPopupBuyNowBtns(1).waitForVisible();
        Home.favPopupBuyNowBtns(1).click();
        productDetailsPage.productName.waitForVisible();
        expect(productDetailsPage.productName.getText()).to.eql(testData)
    })

    it("Verify that the Marketing card is displayed on the 'New products' section on the 'Home Page'",()=>{
        Home.homepageMethod();
        Home.browserMethod();
        //Home.homeBestSellers.scroll();
        browser.execute(function() {
          document.querySelector(`.hero-grid-container:nth-child(1) .button.button-primary.button-wb`).scrollIntoView()
        })    
        Home.browserMethod();
        Home.homenewProducts.waitForVisible();
        Home.homenewProducts.click();
        Home.newProdMarketingCardImg.waitForVisible();
        Home.newProdMarketingCardImg.click();
        Home.marketSubscriptionPgHeading.waitForVisible();
        expect(Home.marketSubscriptionPgHeading.getText()).to.eql(testData.heading.marketingSubsPgHeading)
    })
    
    it("Verify that the Marketing card is displayed on the 'You May Also Like' section on the PDPs",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        Home.browserMethod();
        browser.execute(function() {
          document.querySelector(`.bv-content-pagination-container`).scrollIntoView()
        })        
        browser.waitUntil(
          function() {
              return (
              browser.isVisible
                  (`#related-products .glide-related .ais-Hits>ol>li:nth-child(1) .item-title a`) === true
              );
          },
          60000,
          "You may also section is not visible even after 20 secs"
        );
        productDetailsPage.youMayAlsoSecMarketCardTitle.waitForVisible();
        expect(productDetailsPage.youMayAlsoSecMarketCardTitle.getText()).to.eql(testData.productDetailsPage.getFreeShippingTxt)
    })
    
    it("Verify that the Marketing card is displayed on the 'Category/Collection' pages",()=>{
            Home.healthneedsMethod();
            Home.healthNeedsdropdown(2, 1).waitForVisible();
            Home.healthNeedsdropdown(2, 1).click();
            Home.kidsvitaminstext.waitForVisible();
            expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.beautyText);
            browser.scroll(0, 400);
            productListPage.marketingCardDescription.waitForVisible();
            expect(productListPage.marketingCardDescription.getText()).to.eql(testData.productTitles.marketingDescriptn);
    
    })

})

describe("Marketing cards",()=>{
      it("Verify that the Marketing card is displayed on the 'bestsellers section on the' Home Page",()=>{
        Home.homepageMethod();
        Home.browserMethod();
        //Home.homeBestSellers.scroll();
        browser.scroll(150, 1100);
        Home.browserMethod();
        Home.homeBestSellersProducts.waitForVisible();
        Home.homeBestSellersProducts.click();
        Home.marketingCardImg.waitForVisible();
        Home.marketingCardImg.click();
        Home.marketSubscriptionPgHeading.waitForVisible();
        expect(Home.marketSubscriptionPgHeading.getText()).to.eql(testData.heading.marketingSubsPgHeading)
      })
    
      it("Verify that the Marketing card is displayed on the 'New products' section on the 'Home Page'",()=>{
        Home.homepageMethod();
        Home.browserMethod();
        //Home.homeBestSellers.scroll();
        browser.scroll(150, 1100);
        Home.browserMethod();
        Home.homenewProducts.waitForVisible();
        Home.homenewProducts.click();
        Home.marketingCardImg.waitForVisible();
        Home.marketingCardImg.click();
        Home.marketSubscriptionPgHeading.waitForVisible();
        expect(Home.marketSubscriptionPgHeading.getText()).to.eql(testData.heading.marketingSubsPgHeading)
      })
    
      it("Verify that the Marketing card is displayed on the 'You May Also Like' section on the PDPs",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(".margin-vertical-2");
        browser.waitUntil(
          function() {
              return (
              browser.isVisible
                  (`#related-products .glide-related .ais-Hits>ol>li:nth-child(1) .item-title a`) === true
              );
          },
          50000,
          "You may also section is not visible even after 20 secs"
        );
        productDetailsPage.youMayAlsoSecMarketCardTitle.waitForVisible();
        expect(productDetailsPage.youMayAlsoSecMarketCardTitle.getText()).to.eql(testData.productDetailsPage.getFreeShippingTxt)
      })

      it("Verify that the Marketing card is displayed on the 'Category/Collection' pages",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 1).waitForVisible();
        Home.healthNeedsdropdown(2, 1).click();
        Home.kidsvitaminstext.waitForVisible();
        expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.beautyText);
        browser.scroll(0, 400);
        productListPage.marketingCardDescription.waitForVisible();
        expect(productListPage.marketingCardDescription.getText()).to.eql(testData.productTitles.marketingDescriptn);
      })
})

describe("Bundles",()=>{
    it("Verify that the user is navigated to the child product pages when user clicks on the links beneath the description",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue(testData.bundlesPagedetails.bundlesTxt);
        Home.searchBtn.waitForVisible();
        Home.searchBtn.click();
        browser.execute(function() {
            document.querySelector(`.ais-InfiniteHits-item:nth-child(2) .item-title a`).scrollIntoView()
          })   
        Home.browserMethod();
        productListPage.bundlesInPLP_BuyNowBtns(2).waitForVisible();
        productListPage.bundlesInPLP_BuyNowBtns(2).click();
        productDetailsPage.bulletedLinks(1).waitForVisible();
        productDetailsPage.bulletedLinks(1).click();
        Home.browserMethod();
        productDetailsPage.productName.waitForVisible();
        expect(productDetailsPage.productName.getText()).to.eql(testData.productNames.mensMultivitaminTabltTxt);
    })

    it("Verify that the user is navigated back to the bundle PDP, when user clicks on the “Buy in a Bundle & Save 20%” graphic on child PDP",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue(testData.bundlesPagedetails.bundlesTxt);
        Home.searchBtn.waitForVisible();
        Home.searchBtn.click();        
        browser.execute(function() {
            document.querySelector(`.ais-InfiniteHits-item:nth-child(2) .item-title a`).scrollIntoView()
        })  
        Home.browserMethod();
        productListPage.bundlesInPLP_BuyNowBtns(2).waitForVisible();
        productListPage.bundlesInPLP_BuyNowBtns(2).click();
        productDetailsPage.bulletedLinks(1).waitForVisible();
        productDetailsPage.bulletedLinks(1).click();
        browser.scroll(".product-form__quantity label");
        Home.browserMethod();
        productDetailsPage.buyInaBundleAndSaveLink.waitForVisible();
        productDetailsPage.buyInaBundleAndSaveLink.click();
        productDetailsPage.productName.waitForVisible();
        expect(productDetailsPage.productName.getText()).to.eql(testData.productNames.mensWellnessRelaxBundleTxt);
    })

    it("Verify that the “This Bundle Ships Free” text is displayed under the 'Add to cart' button on all the bundle PDPs",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue(testData.bundlesPagedetails.bundlesTxt);
        Home.searchBtn.waitForVisible();
        Home.searchBtn.click(); 
        browser.execute(function() {
            document.querySelector(`.ais-InfiniteHits-item:nth-child(2) .item-title a`).scrollIntoView()
        })        
        productListPage.bundlesInPLP_BuyNowBtns(2).waitForVisible();
        productListPage.bundlesInPLP_BuyNowBtns(2).click();
        productDetailsPage.bulletedLinks(1).waitForVisible();
        productDetailsPage.bulletedLinks(1).click();
        browser.scroll(".product-form__quantity label");
        Home.browserMethod();
        productDetailsPage.buyInaBundleAndSaveLink.waitForVisible();
        productDetailsPage.buyInaBundleAndSaveLink.click();
        browser.scroll(0, 400);
        productDetailsPage.thisBundlesShipsFree.waitForVisible();
        expect(productDetailsPage.thisBundlesShipsFree.getText()).to.eql(testData.productDetailsPage.thisBundlesShpisFreeTxt);
    })

    it("Verify that the user is navigated to 'Bundle includes' section when 'More about this product' is clicked on the bundle PDP",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue(testData.bundlesPagedetails.bundlesTxt);
        Home.searchBtn.waitForVisible();
        Home.searchBtn.click();  
        browser.execute(function() {
            document.querySelector(`.ais-InfiniteHits-item:nth-child(2) .item-title a`).scrollIntoView()
        })       
        productListPage.bundlesInPLP_BuyNowBtns(2).waitForVisible();
        productListPage.bundlesInPLP_BuyNowBtns(2).click();
        browser.scroll(".anchor-link-wrappers a:nth-child(1)");
        Home.browserMethod();
        productDetailsPage.learnMoreLinks(1).waitForVisible();
        productDetailsPage.learnMoreLinks(1).click();
        productDetailsPage.bundleSectionLinks(1).waitForVisible();
        expect(productDetailsPage.bundleSectionLinks(1).getText()).to.eql(testData.bundlesPagedetails.mensMultivitaminsTablts);
        productDetailsPage.bundleSectionLinks(2).waitForVisible();
        expect(productDetailsPage.bundleSectionLinks(2).getText()).to.eql(testData.bundlesPagedetails.highAbsorbationmagnesiumTxt);
        productDetailsPage.bundleSectionLinks(3).waitForVisible();
        expect(productDetailsPage.bundleSectionLinks(3).getText()).to.eql(testData.bundlesPagedetails.vitaminD32000Txt);
    })

    it("Verify that the 'EXCLUSIVE' flag is displayed on the main PDP image on the bundle PDP",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue(testData.bundlesPagedetails.bundlesTxt);
        Home.searchBtn.waitForVisible();
        Home.searchBtn.click(); 
        browser.execute(function() {
            document.querySelector(`.ais-InfiniteHits-item:nth-child(2) .item-title a`).scrollIntoView()
        })  
        Home.browserMethod();
        productListPage.bundlesInPLP_BuyNowBtns(2).waitForVisible();
        productListPage.bundlesInPLP_BuyNowBtns(2).click();
        Home.browserMethod();
        productDetailsPage.exclusiveFlag.waitForVisible();
        expect(productDetailsPage.exclusiveFlag.getText()).to.eql(testData.productDetailsPage.exclusiveFlag)

    })

    it("Verify that the following info is displayed for all the products in the bundle on the PDP ",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue(testData.bundlesPagedetails.bundlesTxt);
        Home.searchBtn.waitForVisible();
        Home.searchBtn.click(); 
        browser.execute(function() {
            document.querySelector(`.ais-InfiniteHits-item:nth-child(2) .item-title a`).scrollIntoView()
        })  
        Home.browserMethod();
        productListPage.bundlesInPLP_BuyNowBtns(2).waitForVisible();
        productListPage.bundlesInPLP_BuyNowBtns(2).click();
        // productDetailsPage.productDescription.waitForVisible();
        // expect(productDetailsPage.productDescription.getText()).to.eql(testData.productDetailsPage.bundleDesc);
        productDetailsPage.productName.waitForVisible();
        expect(productDetailsPage.productName.getText()).to.eql(testData.bundlesPagedetails.mensWellnessSuprtBndleTxt);
        productDetailsPage.showMoreOptn.waitForVisible();
        expect(productDetailsPage.showMoreOptn.getText()).to.eql(testData.productDetailsPage.showMoreTxt);
        productDetailsPage.qtyLabel.waitForVisible();
        expect(productDetailsPage.qtyLabel.getText()).to.eql(testData.productDetailsPage.qtyLabel);
    });

    it("Verify that the bundle is displayed as single product to the user on 'Your Cart' popup",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue(testData.bundlesPagedetails.bundlesTxt);
        Home.searchBtn.waitForVisible();
        Home.searchBtn.click();
        browser.execute(function() {
            document.querySelector(`.ais-InfiniteHits-item:nth-child(2) .item-title a`).scrollIntoView()
        })  
        Home.browserMethod();
        productListPage.bundlesInPLP_BuyNowBtns(2).waitForVisible();
        productListPage.bundlesInPLP_BuyNowBtns(2).click();
        browser.scroll(".product-form__quantity label");
        Home.browserMethod();
        productDetailsPage.addToCart.waitForVisible();
        productDetailsPage.addToCart.click();
        browser.scroll(0, 0);
        Home.browserMethod();
        productDetailsPage.prodNameInViewMYCartPopup.waitForVisible();
        expect(productDetailsPage.prodNameInViewMYCartPopup.getText()).to.eql(testData.productDetailsPage.mensWellnessSuprtBundle);
    })

    it("Verify that the bundle is displayed as single product to the user on 'Cart' page",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue(testData.bundlesPagedetails.bundlesTxt);
        Home.searchBtn.waitForVisible();
        Home.searchBtn.click();
        browser.execute(function() {
            document.querySelector(`.ais-InfiniteHits-item:nth-child(2) .item-title a`).scrollIntoView()
        })  
        Home.browserMethod();
        productListPage.bundlesInPLP_BuyNowBtns(2).waitForVisible();
        productListPage.bundlesInPLP_BuyNowBtns(2).click();
        browser.scroll(".product-form__quantity label");
        Home.browserMethod();
        productDetailsPage.addToCart.waitForVisible();
        productDetailsPage.addToCart.click();
        browser.scroll(0, 0);
        Home.browserMethod();
        productDetailsPage.viewMyCart.waitForVisible();
        productDetailsPage.viewMyCart.click();
        CartPage.prodName.waitForVisible();
        expect(CartPage.prodName.getText()).to.eql(testData.productDetailsPage.mensWellnessSuprtBundle);
    })

    it("Verify that the bundle is displayed as single product to the user on 'Checkout' page",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue(testData.bundlesPagedetails.bundlesTxt);
        Home.searchBtn.waitForVisible();
        Home.searchBtn.click();
        browser.execute(function() {
            document.querySelector(`.ais-InfiniteHits-item:nth-child(2) .item-title a`).scrollIntoView()
        })  
        Home.browserMethod();
        productListPage.bundlesInPLP_BuyNowBtns(2).waitForVisible();
        productListPage.bundlesInPLP_BuyNowBtns(2).click();

        browser.scroll(".product-form__quantity label");
        Home.browserMethod();        
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        productDetailsPage.addToCart.waitForVisible();
        productDetailsPage.addToCart.click();
        browser.scroll(0, 0);
        Home.browserMethod();
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        productDetailsPage.viewMyCart.waitForVisible();
        productDetailsPage.viewMyCart.click();
        CartPage.prodName.waitForVisible();
        expect(CartPage.prodName.getText()).to.eql(testData.productDetailsPage.mensWellnessSuprtBundle);
        CartPage.checkOutBtn.waitForVisible();
        CartPage.checkOutBtn.click();
        information.productName.waitForVisible();
        expect(information.productName.getText()).to.eql(testData.productDetailsPage.mensWellnessSuprtBundle);

    })

    it("Verify that the 'Coupon Codes Do Not Apply To Bundles' text is displayed below the 'Product Price' on the 'Bundles' Product details page",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue(testData.bundlesPagedetails.bundlesTxt);
        Home.searchBtn.waitForVisible();
        Home.searchBtn.click();
        browser.execute(function() {
            document.querySelector(`.ais-InfiniteHits-item:nth-child(2) .item-title a`).scrollIntoView()
        })  
        Home.browserMethod();
        productListPage.bundlesInPLP_BuyNowBtns(2).waitForVisible();
        productListPage.bundlesInPLP_BuyNowBtns(2).click();
        browser.execute(function() {
            document.querySelector(`.product-form__input.product-form__quantity label`).scrollIntoView()
        }) 
        productDetailsPage.coupanCodeDonotApplyTxt.waitForVisible();
        expect(productDetailsPage.coupanCodeDonotApplyTxt.getText()).to.eql(testData.productDetailsPage.coupanCodeDoNotAplyTxt)         
    })

    it("Verify that the 'EXCLUSIVE' flag is displayed on the products on the product list page.",()=>{
        Home.homepageMethod();
        Home.search.waitForVisible();
        Home.search.click();
        Home.search.setValue(testData.bundlesPagedetails.bundlesTxt);
        Home.searchBtn.waitForVisible();
        Home.searchBtn.click();
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        browser.execute(function() {
            document.querySelector(`#search-title`).scrollIntoView()
        }) 
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        productListPage.exclusiveFlags(2).waitForVisible();
        expect(productListPage.exclusiveFlags(2).getText()).to.eql(testData.heading.exclusiveFlag)         

    })
})

describe("Badges",()=>{
    it("Verify that the 'Sold Out' badge is appropriately displayed for sold out product on the product list page",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 2).waitForVisible();
        Home.healthNeedsdropdown(2, 2).click();
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        browser.execute(function() {
            document.querySelector(`#SubCollectionProductGrid .collection-section:nth-child(5) ol>li:nth-child(6) .item-price`).scrollIntoView()
        })
        productListPage.soldOutProdInBonePLP.waitForVisible();
        expect(productListPage.soldOutProdInBonePLP.getText()).to.eql(testData.heading.soldOut);
    })

    it("Verify that the email popup is displayed when user clicks on the 'Email when available' button on the sold out products PDP",()=>{
        Home.healthneedsMethod();
        Home.healthNeedsdropdown(2, 2).waitForVisible();
        Home.healthNeedsdropdown(2, 2).click();
        browser.execute(function() {
            document.querySelector(`#SubCollectionProductGrid .collection-section:nth-child(5) ol>li:nth-child(6) .item-title`).scrollIntoView()
        })
        Home.browserMethod();
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        productListPage.soldOutProdTitleInBonePLP.waitForVisible();
        productListPage.soldOutProdTitleInBonePLP.click();
        Home.browserMethod();
        browser.execute(function() {
                document.querySelector(`.product-form__input.product-form__quantity label`).scrollIntoView()
         })   
        Home.browserMethod();
        productDetailsPage.addToCart.waitForVisible();
        productDetailsPage.addToCart.click();
        productDetailsPage.emailMePopupProdSubTitle.waitForVisible();
        expect(productDetailsPage.emailMePopupProdSubTitle.getText()).to.eql(testData.heading.emailMeSubTitle)

    })

    it("Verify that the user is navigated to 'Home Page', when 'Company Logo' button is clicked on the information page",()=>{
        information.informationPage();
        information.infoPageLogo.waitForVisible();
        information.infoPageLogo.click();
        Home.browserMethod();
        Home.bannerName.waitForVisible();
        expect(Home.bannerName.getText()).eql(testData.titles.shopNowText);
    })
    
    it("Verify that the user is redirected to the cart page when 'Return to cart' link is clicked on the information page",()=>{
        information.informationPage();
        browser.scroll(0, 200);
        Home.browserMethod();
        information.returnToCart.waitForVisible();
        information.returnToCart.click();
        Home.cartHead.waitForVisible();
        expect(Home.cartHead.getText()).to.eql(testData.cart.cartHead);
    
    })
    
    it("Verify that the 'Subscription policy' dialog is displayed when user clicks on 'Subscription policy' option on the information page",()=>{
        information.informationPage();
        browser.scroll(0, 300);
        Home.browserMethod();
        information.subcriptionPolicy.waitForVisible();
        information.subcriptionPolicy.click();
        information.policyHeader.waitForVisible();
        expect(information.policyHeader.getText()).to.eql(testData.inquiryType.policyHeader);
    
    })
    
    it("Verify that the user is redirected to the payment page when all required details are submitted and the 'Continue to shipping' button is clicked",()=>{
        Home.removeAllProductsFromCart();
        information.informationPage();
        Home.browserMethod();
        information.emailTextField.waitForVisible();
        information.emailTextField.click();
        information.emailTextField.setValue(testData.informationPage.email);
        information.firstName.waitForVisible();
        information.firstName.click();
        information.firstName.setValue(testData.informationPage.firstName);
        information.lastName.waitForVisible();
        information.lastName.click();
        information.lastName.setValue(testData.informationPage.lastName);
        information.adress.waitForVisible();
        information.adress.click();
        information.adress.setValue(testData.informationPage.adress);
        information.selectAdress.waitForVisible();
        information.selectAdress.click();
        information.shippingbutton.waitForVisible();
        information.shippingbutton.click();
        Home.browserMethod();
        expect(information.paymentMethod.getText()).to.eql(testData.informationPage.paymentButton);
    })
})

describe("Accessibility",()=>{
    it("Verify that the Accessibility popup is displayed when 'Accessibility' link is clicked in the footer",()=>{
        Home.homepageMethod();
        browser.scroll(0, 2600); 
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        browser.waitUntil(
            function() {
               return (
               browser.isVisible
                   (`.footer_legal .cell.medium-6:nth-child(2) ul>li:nth-child(4) button`)
               ) == true;
            },
            80000,
             "Popup not visible even after 40 secs"
           ); 
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }       
        socialMediaHomePage.accessibilityLink.waitForVisible();
        socialMediaHomePage.accessibilityLink.click();
        Home.accessibilityAdjustmentsHeading.waitForVisible();
        expect(Home.accessibilityAdjustmentsHeading.getText()).to.eql(testData.heading.accessibilityHeading);
        Home.accessibilityCancelIcon.waitForVisible();
        Home.accessibilityCancelIcon.click();
        socialMediaHomePage.footerLegalTermsLinks(2).waitForVisible();
        expect(socialMediaHomePage.footerLegalTermsLinks(2).getText()).to.eql(testData.footerSocialMediaLinks.privacyPolicyText);
    })

    it("Verify that the user is navigated to the 'Accessibility Statement' page when the 'Statement' button is clicked",()=>{
        Home.homepageMethod();
        Home.browserMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        if(Home.subscribeCancelIcon.isVisible()){
            Home.subscribeCancelIcon.click();
        }
        socialMediaHomePage.accessibilityLink.waitForVisible();
        socialMediaHomePage.accessibilityLink.click();
        Home.accessibilityAdjustmentsHeading.waitForVisible();
        expect(Home.accessibilityAdjustmentsHeading.getText()).to.eql(testData.heading.accessibilityHeading);
        Home.accessibilityHeaderBtns(2).waitForVisible();
        Home.accessibilityHeaderBtns(2).click();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]); 
        socialMediaHomePage.accessibilityTitle.waitForVisible();
        expect(socialMediaHomePage.accessibilityTitle.getText()).to.eql(testData.footerSocialMediaLinks.accessibilityNewText);
        browser.close(); 
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[0]); 
    })

    it("Verify that the 'Language' button is displayed on top right corner of the Accessibility popup",()=>{
        Home.homepageMethod();
        Home.browserMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        Home.browserMethod();
        socialMediaHomePage.accessibilityLink.waitForVisible();
        socialMediaHomePage.accessibilityLink.click();
        Home.languageBtnOnAccPopup.waitForVisible();
        Home.languageBtnOnAccPopup.click();
        Home.chooseTheIntrceLangHeading.waitForVisible();
        expect(Home.chooseTheIntrceLangHeading.getText()).to.eql(testData.heading.chooseTheIntrfceLangTxt);
    })

    it("Verify that the 'Hide Interface' popup is displayed when the 'Hide Interface' button is clicked and 'Accept' and 'Cancel' button is displayed in the Hide interface popup",()=>{
        Home.homepageMethod();
        Home.browserMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        Home.browserMethod();
        Home.accessibilityHeaderBtns(3).waitForVisible();
        Home.accessibilityHeaderBtns(3).click();
        Home.hideAccessibilityHeading.waitForVisible();
        expect(Home.hideAccessibilityHeading.getText()).to.eql(testData.footer.hideIntrfcHeadingTxt);
        Home.hideAccessibilityBtns(1).waitForVisible();
        expect(Home.hideAccessibilityBtns(1).getText()).to.eql(testData.footer.acceptBtnTxt);
        Home.hideAccessibilityBtns(2).waitForVisible();
        expect(Home.hideAccessibilityBtns(2).getText()).to.eql(testData.footer.cancelBtnTxt);
    })

    it("Verify that the 'Hide interface' popup is closed when the 'Cancel' button is clicked on the Hide interface popup",()=>{
        Home.homepageMethod();
        Home.browserMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        Home.browserMethod();
        Home.accessibilityHeaderBtns(3).waitForVisible();
        Home.accessibilityHeaderBtns(3).click();
        Home.hideAccessibilityHeading.waitForVisible();
        expect(Home.hideAccessibilityHeading.getText()).to.eql(testData.footer.hideIntrfcHeadingTxt);
        Home.hideAccessibilityBtns(2).waitForVisible();
        Home.hideAccessibilityBtns(2).click();
        Home.accessibilityAdjustmentsHeading.waitForVisible();
        expect(Home.accessibilityAdjustmentsHeading.getText()).to.eql(testData.heading.accessibilityHeading);
    })

    it("Verify that the user is able to select any of the languages in the 'Choose the Interface Language' popup",()=>{
        Home.homepageMethod();
        Home.browserMethod();
        browser.scroll("#footer .cell.medium-5.first p");
        Home.browserMethod();
        socialMediaHomePage.accessibilityLink.waitForVisible();
        socialMediaHomePage.accessibilityLink.click();
        Home.languageBtnOnAccPopup.waitForVisible();
        Home.languageBtnOnAccPopup.click();
        Home.chooseTheIntrceLangHeading.waitForVisible();
        expect(Home.chooseTheIntrceLangHeading.getText()).to.eql(testData.heading.chooseTheIntrfceLangTxt);
        Home.LanguageBtns(4).waitForVisible();
        Home.LanguageBtns(4).click();
        Home.accessibilityAdjustmentsHeading.waitForVisible();
        expect(Home.accessibilityAdjustmentsHeading.getText()).to.eql(testData.heading.portugalAccessbilityHeadingTxt);
    })

        
})

describe("Shopify search",()=>{
    it("Verify that when there are more than 6 filters, only the first 6 filters are displayed and a 'Show More' link appears beneath the list on filter po-up",()=>{
        Home.homepageMethod();
        Home.vitaminsandSupplements.waitForVisible();
        Home.vitaminsandSupplements.click();
        Home.shopAll.waitForVisible();
        Home.shopAll.click();
        browser.scroll(".margin-bottom-2");
        Home.browserMethod();
        productListPage.filterIcon.waitForVisible();
        productListPage.filterIcon.click();
        Home.browserMethod();
        productListPage.filterOptions(2).waitForVisible();
        productListPage.filterOptions(2).click();
        productListPage.showMoreLinkInFilterPopup(2).waitForVisible();
        expect(productListPage.showMoreLinkInFilterPopup(2).getText()).to.eql(testData.productTitles.showAllTxt);
    })

    it("Verify that the 'Sorry we couldnt find products' erros message is displayed when there are products matching for the user selected filters",()=>{
        Home.homepageMethod();
        Home.vitaminsandSupplements.waitForVisible();
        Home.vitaminsandSupplements.click();
        Home.shopAll.waitForVisible();
        Home.shopAll.click();
        browser.scroll(".margin-bottom-2");
        Home.browserMethod();
        productListPage.filterIcon.waitForVisible();
        productListPage.filterIcon.click();
        productListPage.priceFilters(2).waitForVisible();
        productListPage.priceFilters(2).click();
        Home.browserMethod();
        productListPage.countFilter(3).waitForVisible();
        productListPage.countFilter(3).click();
        Home.browserMethod();
        productListPage.formFilter(1).waitForVisible();
        productListPage.formFilter(1).click();
        Home.browserMethod();
        productListPage.benefitsFilter(1).waitForVisible();
        productListPage.benefitsFilter(1).click();
        Home.browserMethod();
        productListPage.sorryWeCoulntFindUrProd.waitForVisible();
        expect(productListPage.sorryWeCoulntFindUrProd.getText()).to.eql(testData.productTitles.sorryWeCouldntFindProdTxt)





    })


})








