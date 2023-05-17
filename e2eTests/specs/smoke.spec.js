import { expect } from 'chai';
import Page from "../page-objects/page.js";
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
import cartPage from "../page-objects/cart.page"
import browserSync from "browser-sync";
import testData from "../constants/testData.json"
import productListPage from '../page-objects/product.list.page'
import HomePage from '../page-objects/home.page';
import loginPage from '../page-objects/login.page.js';
import accountPage from '../page-objects/account.page.js';
import nutritionquizPage from '../page-objects/nutritionquiz.page.js'
import gmailPage from '../page-objects/gmail.page.js';
import homePage from '../page-objects/home.page';
import contactUs from '../page-objects/contact.us.js'
// import { waituntilisvisible } from "../page-objects/functions";
import information from '../page-objects/information.js';
import { info } from 'console';
import { split } from 'lodash';

var assert = require('assert');
var email;
var productNamee;
var toUpperCase;
var getTextOfProduct;
var womensMultivitamin;

describe("Home page",()=>{

    it("Verify that the user is navigated to the home page when the company logo in Home page is clicked",()=>{
        // Home.forDevUrlLaunch()
        Home.homepageMethod();
    })

    it("Verify that the user is navigated to 'Login' page when 'Sign in' button is clicked",()=>{
          Home.homepageMethod();
          Home.signinLink.waitForVisible();
          Home.signinLink.click();
          Home.browserMethod();
          Home.loginPage.waitForVisible();
          Home.loginPage.waitForVisible();
          expect(Home.loginPage.getText()).eql(testData.titles.logintitle)
    })

    it("Verify that the user is logged in successfully when the valid 'Email & Password' is submitted",()=>{
          // Home.forDevUrlLaunch()
          Home.loginUser();
          if(Home.newRatingPopupCancelIcon.isVisible()) {
            Home.newRatingPopupCancelIcon.click();
          }
          if(Login.cancelIconOnPrevCartPopUP.waitForVisible()){
            Login.cancelIconOnPrevCartPopUP.click();
          }
          Home.logOutLink.waitForVisible();
          Home.logOutLink.click();
          Home.whereToBuyLink.waitForVisible();
          expect(Home.whereToBuyLink.getText()).eql(testData.titles.whereToBuyheaderTxt);

    })

    it.SKIP("Verify that the user is navigated to the appropriate search results page when the the user searches in the search bar",()=>{
          Home.homepageMethod();
          Home.search.waitForVisible();
          Home.search.click();
          Home.search.setValue([testData.searchbar.searchfor]);
          Home.searchBtn.waitForVisible();
          Home.searchBtn.click();
          Home.browserMethod();
          Home.preHeader.waitForVisible();
          expect(Home.preHeader.getText()).to.eql(testData.searchbar.subHeader);
    })

    it.skip("Verify that the user is redirected to the 'Create Account' page when 'Create Account' link is clicked",()=>{
          // Home.forDevUrlLaunch();
          Home.homepageMethod();
          Home.myAccount(2).waitForVisible();
          Home.myAccount(2).click();
          if(Home.newRatingPopupCancelIcon.isVisible()) {
            Home.newRatingPopupCancelIcon.click();
          }
          Home.browserMethod();
          Home.signinLink.waitForVisible();
          Home.signinLink.click();
          Home.loginPage.waitForVisible();
          expect(Home.loginPage.getText()).eql(testData.titles.logintitle);
          if(Home.acceptcookieepopup.isVisible()){
            Home.acceptcookieepopup.click();
        }
          Home.createAccount.waitForVisible();
          Home.createAccount.click();
          Home.createAcctHeading.waitForVisible();
          expect(Home.createAcctHeading.getText()).eql(testData.titles.accountcreation);
    })

    it.skip("Verify that the 'Find nearby store' dialog is displayed when 'Find A Store' button is clicked",()=>{
          Home.findaStoremethod();
    })

    it.skip("Verify that the cart dailog is displayed when user clicks on 'cart' icon",()=>{
          Home.cartMethod();
    })

    it.skip("Verify that the user is redirected to the 'Home Page' when 'Home Page' button is clicked on the cart dialog",()=>{
      Home.cartMethod();
      Home.continueShopping.waitForVisible();
      Home.continueShopping.click();
      Home.bannerName.waitForVisible();
      expect(Home.bannerName.getText()).eql(testData.titles.shopNowText); 

    })

    it.skip("Verify that the cart dailouge is cancelled when 'cancel' button is clicked",()=>{
      Home.cartMethod();
      Home.cartCancelbtn.waitForVisible();
      Home.cartCancelbtn.click();
      expect(Home.bannerName.getText()).eql(testData.titles.shopNowText); 

    })

    it.skip("Verify that 'Your cart is empty' page is displayed when user clicks on checkout without adding any products to the cart in cart dailog",()=>{
          Home.cartMethod();
          Home.browserMethod();
          Home.checkOutBtnInCartDialog.waitForVisible();
          Home.checkOutBtnInCartDialog.click();
          Home.browserMethod();
          Home.emptyCart.waitForVisible();
          expect(Home.emptyCart.getText()).to.eql(testData.cart.emptyCart); 
    })

    it.skip("Verify that the user is navigated to Cart page when 'View my Cart' button is clicked on the cart dialog ",()=>{
        Home.addtocartMethod();
        // Home.cartMethod();
        Home.viewCart.waitForVisible();
        Home.viewCart.click();
        Home.cartHead.waitForVisible();
        expect(Home.cartHead.getText()).to.eql(testData.cart.cartHead);
    })
  }) 

describe.skip("Header 1",()=>{
    it("Verify that the submenu links are displayed when user clicks on 'Products' menu",()=>{
        browser.url(testData.naturemade.url);
        Home.headerLinks(1).waitForVisible();
        Home.headerLinks(1).click();
        Home.productsHeadersubmenus(1).waitForVisible();
        expect(Home.productsHeadersubmenus(1).getText()).to.eql(testData.headers.atoz);
        expect(Home.productsHeadersubmenus(2).getText()).to.eql(testData.headers.bybenefits);
        expect(Home.productsHeadersubmenus(3).getText()).to.eql(testData.headers.gummies);
        expect(Home.productsHeadersubmenus(4).getText()).to.eql(testData.headers.bestSellers);
        expect(Home.productsHeadersubmenus(5).getText()).to.eql(testData.headers.bundleandsave);
        expect(Home.productsHeadersubmenus(6).getText()).to.eql(testData.headers.subscribeandsave);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'A' links in the 'A to Z' submenu",()=>{
        browser.pause(2000);
        Home.productlistheaderAtoZ(1, 2).waitForVisible();
        Home.productlistheaderAtoZ(1, 2).click();
        productListPage.headingPLP.waitForVisible();
        expect(productListPage.headingPLP.getText()).to.eql(testData.headers.acidophilous);
        Home.headerLinks(1).waitForVisible();
        Home.headerLinks(1).click();
        Home.productlistheaderAtoZ(1, 3).waitForVisible();
        Home.productlistheaderAtoZ(1, 3).click();
        productListPage.headingPLP.waitForVisible();
        expect(productListPage.headingPLP.getText()).to.eql(testData.headers.adultgummies);
        Home.headerLinks(1).waitForVisible();
        Home.headerLinks(1).click();
        Home.productlistheaderAtoZ(1, 4).waitForVisible();
        Home.productlistheaderAtoZ(1, 4).click();
        productListPage.headingPLP.waitForVisible();
        expect(productListPage.headingPLP.getText()).to.eql(testData.headers.Ashwagandha);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'B' links in the 'A to Z' submenu",()=>{
        browser.pause(2000);
        Home.headerLinks(1).waitForVisible();
        Home.headerLinks(1).click();
        Home.productlistheaderAtoZ(2, 2).waitForVisible();
        Home.productlistheaderAtoZ(2, 2).click();
        productListPage.headingPLP.waitForVisible();
        expect(productListPage.headingPLP.getText()).to.eql(testData.headers.bvitamins);
        Home.headerLinks(1).waitForVisible();
        Home.headerLinks(1).click();
        Home.productlistheaderAtoZ(2, 3).waitForVisible();
        Home.productlistheaderAtoZ(2, 3).click();
        productListPage.headingPLP.waitForVisible();
        expect(productListPage.headingPLP.getText()).to.eql(testData.headers.bcomplex);
        Home.headerLinks(1).waitForVisible();
        Home.headerLinks(1).click();
        Home.productlistheaderAtoZ(2, 4).waitForVisible();
        Home.productlistheaderAtoZ(2, 4).click();
        productListPage.headingPLP.waitForVisible();
        expect(productListPage.headingPLP.getText()).to.eql(testData.headers.biotin);
        Home.headerLinks(1).waitForVisible();
        Home.headerLinks(1).click();
        Home.productlistheaderAtoZ(2, 5).waitForVisible();
        Home.productlistheaderAtoZ(2, 5).click();
        productListPage.headingPLP.waitForVisible();
        expect(productListPage.headingPLP.getText()).to.eql(testData.headers.bundles);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'C' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(3, 2).waitForVisible();
      Home.productlistheaderAtoZ(3, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.cvitamins);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(3, 3).waitForVisible();
      Home.productlistheaderAtoZ(3, 3).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.calcium);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(3, 4).waitForVisible();
      Home.productlistheaderAtoZ(3, 4).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.cholestoff);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(3, 5).waitForVisible();
      Home.productlistheaderAtoZ(3, 5).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.choline);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(3, 6).waitForVisible();
      Home.productlistheaderAtoZ(3, 6).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.collagen);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(3, 7).waitForVisible();
      Home.productlistheaderAtoZ(3, 7).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.coQ10);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(3, 8).waitForVisible();
      Home.productlistheaderAtoZ(3, 8).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.cranberry);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'D' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(4, 2).waitForVisible();
      Home.productlistheaderAtoZ(4, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.dvitamins);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(4, 3).waitForVisible();
      Home.productlistheaderAtoZ(4, 3).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.dailypacks);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(4, 4).waitForVisible();
      Home.productlistheaderAtoZ(4, 4).click();
      productDetailsPage.productName.waitForVisible();
      expect(productDetailsPage.productName.getText()).to.eql(testData.headers.diabeteshealthpack);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'E' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(5, 2).waitForVisible();
      Home.productlistheaderAtoZ(5, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.evitamins);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(5, 3).waitForVisible();
      Home.productlistheaderAtoZ(5, 3).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.elderberry);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'F' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(6, 2).waitForVisible();
      Home.productlistheaderAtoZ(6, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.fishoilomega);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(6, 3).waitForVisible();
      Home.productlistheaderAtoZ(6, 3).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.flaxseedoil);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(6, 4).waitForVisible();
      Home.productlistheaderAtoZ(6, 4).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.folicAcid);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'G' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(7, 2).waitForVisible();
      Home.productlistheaderAtoZ(7, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.ginseng);
      browser.pause(3000);
      if((Home.rateyourselfPopup.isVisible()) === true){
        Home.rateyourselfPopup.click();
      }
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(7, 3).waitForVisible();
      Home.productlistheaderAtoZ(7, 3).click();
      productDetailsPage.productName.waitForVisible();
      expect(productDetailsPage.productName.getText()).to.eql(testData.productNames.glucosaminechondroitincomplexwithMSMtriplestrengthvitaminD3);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'H' links in the 'A to Z' submenu",()=>{
      browser.pause(3000);
      if((Home.rateyourselfPopup.isVisible()) === true){
        Home.rateyourselfPopup.click();
      }
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(8, 2).waitForVisible();
      Home.productlistheaderAtoZ(8, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.htp);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productlistheaderAtoZ(8, 3).waitForVisible();
      Home.productlistheaderAtoZ(8, 3).click();
      browser.pause(2000);
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.hairSkinNails);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      if((Home.rateyourselfPopup.isVisible()) === true){
        Home.rateyourselfPopup.click();
      }
      Home.productlistheaderAtoZ(8, 4).waitForVisible();
      Home.productlistheaderAtoZ(8, 4).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.herbs);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'I' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(9, 2).waitForVisible();
      Home.productlistheaderAtoZ(9, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.iron);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'K' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(10, 2).waitForVisible();
      Home.productlistheaderAtoZ(10, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.kvitamins);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(10, 3).waitForVisible();
      Home.productlistheaderAtoZ(10, 3).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.kidsfirstgummies);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(10, 4).waitForVisible();
      Home.productlistheaderAtoZ(10, 4).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.kidsmultivitamins);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'L' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(11, 2).waitForVisible();
      Home.productlistheaderAtoZ(11, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.lysine);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(11, 3).waitForVisible();
      Home.productlistheaderAtoZ(11, 3).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.theanine);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(11, 4).waitForVisible();
      Home.productlistheaderAtoZ(11, 4).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.lutein);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'M' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(12, 2).waitForVisible();
      Home.productlistheaderAtoZ(12, 2).click();
      browser.pause(2000);
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.magnesium);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(12, 3).waitForVisible();
      Home.productlistheaderAtoZ(12, 3).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.maximin);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(12, 4).waitForVisible();
      Home.productlistheaderAtoZ(12, 4).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.melatonin);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(12, 5).waitForVisible();
      Home.productlistheaderAtoZ(12, 5).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.mensmultivitamins);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(12, 6).waitForVisible();
      Home.productlistheaderAtoZ(12, 6).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.minerals);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(12, 7).waitForVisible();
      Home.productlistheaderAtoZ(12, 7).click();
      Home.multiomegaHead.waitForVisible();
      expect(Home.multiomegaHead.getText()).to.eql(testData.headers.multiomega);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(12, 8).waitForVisible();
      Home.productlistheaderAtoZ(12, 8).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.multivitamins);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'N' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(13, 2).waitForVisible();
      Home.productlistheaderAtoZ(13, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.nurishEverydayPacks);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'O' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(14, 2).waitForVisible();
      Home.productlistheaderAtoZ(14, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.tripleOmega);
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(14, 3).waitForVisible();
      Home.productlistheaderAtoZ(14, 3).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.omegasupplements);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'P' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(15, 2).waitForVisible();
      Home.productlistheaderAtoZ(15, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.potassium);
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(15, 3).waitForVisible();
      Home.productlistheaderAtoZ(15, 3).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.prentalandpostnatal);
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(15, 4).waitForVisible();
      Home.productlistheaderAtoZ(15, 4).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.probioticsupplements);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'S' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(16, 2).waitForVisible();
      Home.productlistheaderAtoZ(16, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.same);
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(9).waitForVisible();
      Home.atozLinks(9).click();
      Home.productlistheaderAtoZ(16, 3).waitForVisible();
      Home.productlistheaderAtoZ(16, 3).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.titles.allsupplementsText);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'T' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(20).waitForVisible();
      Home.atozLinks(20).click();
      Home.productlistheaderAtoZ(17, 2).waitForVisible();
      Home.productlistheaderAtoZ(17, 2).click();
      productDetailsPage.productName.waitForVisible();
      expect(productDetailsPage.productName.getText()).to.eql(testData.productNames.glucosaminechondroitincomplexwithMSMtriplestrengthvitaminD3);
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(20).waitForVisible();
      Home.atozLinks(20).click();
      Home.productlistheaderAtoZ(17, 3).waitForVisible();
      Home.productlistheaderAtoZ(17, 3).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.tripleOmega);
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(20).waitForVisible();
      Home.atozLinks(20).click();
      Home.productlistheaderAtoZ(17, 4).waitForVisible();
      Home.productlistheaderAtoZ(17, 4).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.turmericCurcumin);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'V' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(20).waitForVisible();
      Home.atozLinks(20).click();
      Home.productlistheaderAtoZ(18, 2).waitForVisible();
      Home.productlistheaderAtoZ(18, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.bvitamins);
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(20).waitForVisible();
      Home.atozLinks(20).click();
      Home.productlistheaderAtoZ(18, 3).waitForVisible();
      Home.productlistheaderAtoZ(18, 3).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.vitaminC);
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(20).waitForVisible();
      Home.atozLinks(20).click();
      Home.productlistheaderAtoZ(18, 4).waitForVisible();
      Home.productlistheaderAtoZ(18, 4).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.vitaminD);
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(20).waitForVisible();
      Home.atozLinks(20).click();
      Home.productlistheaderAtoZ(18, 5).waitForVisible();
      Home.productlistheaderAtoZ(18, 5).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.vitaminE);
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(20).waitForVisible();
      Home.atozLinks(20).click();
      Home.productlistheaderAtoZ(18, 6).waitForVisible();
      Home.productlistheaderAtoZ(18, 6).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.vitaminK);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'W' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(20).waitForVisible();
      Home.atozLinks(20).click();
      Home.productlistheaderAtoZ(19, 2).waitForVisible();
      Home.productlistheaderAtoZ(19, 2).click();
      browser.scroll(0, 300);
      Home.balanceWellnessText.waitForVisible();
      expect(Home.balanceWellnessText.getText()).to.eql(testData.wellBlendsData.balanceWellnessText);
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(20).waitForVisible();
      Home.atozLinks(20).click();
      Home.productlistheaderAtoZ(19, 3).waitForVisible();
      Home.productlistheaderAtoZ(19, 3).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.womensmultivitamins);
    })

    it("Verify that the appropriate products list pages are displayed when user clicks on the 'Z' links in the 'A to Z' submenu",()=>{
      browser.pause(2000);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.atozLinks(20).waitForVisible();
      Home.atozLinks(20).click();
      Home.productlistheaderAtoZ(20, 2).waitForVisible();
      Home.productlistheaderAtoZ(20, 2).click();
      productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.zinc);
    })
  })

describe.skip("Headers 2",()=>{
  it("Verify that the appropriate options are displayed when user clicks on the 'By benefits' header submenu",()=>{
    browser.url(testData.naturemade.url);
    Home.headerLinks(1).waitForVisible();
    Home.headerLinks(1).click();
    Home.productsHeadersubmenus(2).waitForVisible();
    Home.productsHeadersubmenus(2).click();
    Home.bybenefitssubmenuLinks(1).waitForVisible();
    expect((Home.bybenefitssubmenuLinks(1).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(2).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(3).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(4).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(5).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(6).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(7).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(8).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(9).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(10).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(11).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(12).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(13).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(14).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(15).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(16).isVisible()) === true);
    expect((Home.bybenefitssubmenuLinks(17).isVisible()) === true);
    })

  it("Verify that the user is navigated to 'Beauty' Products list when 'Beauty' option is clicked",()=>{
    Home.bybenefitssubmenuLinks(1).waitForVisible();
    Home.bybenefitssubmenuLinks(1).click();
    Home.kidsvitaminstext.waitForVisible();
    expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.beautyText);
    })
    
  it("Verify that the user is navigated to 'Bone Health' Products list when 'Bone' option is clicked",()=>{
    Home.headerLinks(1).waitForVisible();
    Home.headerLinks(1).click();
    Home.productsHeadersubmenus(2).waitForVisible();
    Home.productsHeadersubmenus(2).click();
    Home.bybenefitssubmenuLinks(2).waitForVisible();
    Home.bybenefitssubmenuLinks(2).click();
    Home.kidsvitaminstext.waitForVisible();
    expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.bonehealthText);
    })

    it("Verify that the user is navigated to 'Brain Health' Products list when 'Brain' option is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(3).waitForVisible();
      Home.bybenefitssubmenuLinks(3).click();
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.brainhealthText);
      })

  it("Verify that the user is navigated to 'Digestion' Products list when 'Digestion' option",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(4).waitForVisible();
      Home.bybenefitssubmenuLinks(4).click();
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.digestionText);
    })

  it("Verify that the user is navigated to 'Energy' Products list when 'Energy' option is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(5).waitForVisible();
      Home.bybenefitssubmenuLinks(5).click();
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.energyText);
    })

  it("Verify that the user is navigated to 'Eye Health' Products list when 'Eye Health' option is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(6).waitForVisible();
      Home.bybenefitssubmenuLinks(6).click();
      browser.pause(2000);
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.eyehealthText);
    })

  it("Verify that the user is navigated to 'General Wellness' Products list when 'General wellness' option is clicked in the 'Health Needs' dropdown",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(7).waitForVisible();
      Home.bybenefitssubmenuLinks(7).click();
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.wellnessText);
    })

    it("Verify that the user is navigated to 'Heart' Products list when 'Heart' option is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(8).waitForVisible();
      Home.bybenefitssubmenuLinks(8).click();
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.heartText);
    })

    it("Verify that the user is navigated to 'Immune Health' Products list when 'Immune Health' option is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(9).waitForVisible();
      Home.bybenefitssubmenuLinks(9).click();
      Home.immunehealthHead.waitForVisible();
      expect(Home.immunehealthHead.getText()).to.eql(testData.healthNeedsdata.immunehealthText);
    })

    it("Verify that the user is navigated to 'Joints' Products list when 'Joints' option is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(10).waitForVisible();
      Home.bybenefitssubmenuLinks(10).click();
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.jointsText);
    })

    it("Verify that the user is navigated to 'Kids' Products list when 'Kids' option is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(11).waitForVisible();
      Home.bybenefitssubmenuLinks(11).click();
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.kidsText);
    })

    it("Verify that the user is navigated to 'Men's Health' Products list when 'Men's Health' option is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(12).waitForVisible();
      Home.bybenefitssubmenuLinks(12).click();
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.menshealthText);
    })

    it("Verify that the user is navigated to 'Mood' Products list when 'Mood' option is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(13).waitForVisible();
      Home.bybenefitssubmenuLinks(13).click();
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.moodText);
    })

    it("Verify that the user is navigated to 'Prenatal and Postnatal' Products list when 'Prenatal and Postnatal' option is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(14).waitForVisible();
      Home.bybenefitssubmenuLinks(14).click();
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.pandpText);
    })

    it("Verify that the user is navigated to 'Sleep' Products list when 'Sleep' option is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(15).waitForVisible();
      Home.bybenefitssubmenuLinks(15).click();
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.aGoodNytTmrwTxt);
    })

    it("Verify that the user is navigated to 'Stress' Products list when 'Stress' option is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(16).waitForVisible();
      Home.bybenefitssubmenuLinks(16).click();
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.stressText);
    })

    it("Verify that the user is navigated to 'Women's Health' Products list when 'Women's Health' option is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(2).waitForVisible();
      Home.productsHeadersubmenus(2).click();
      Home.bybenefitssubmenuLinks(17).waitForVisible();
      Home.bybenefitssubmenuLinks(17).click();
      Home.kidsvitaminstext.waitForVisible();
      expect(Home.kidsvitaminstext.getText()).to.eql(testData.healthNeedsdata.womenshealthText);
    })
})

describe.skip("Header 3",()=>{
  it("Verify the appropriate options are displayed when the user clicks on the 'Gummies' submenu",()=>{
    browser.url(testData.naturemade.url);
    Home.headerLinks(1).waitForVisible();
    Home.headerLinks(1).click();
    Home.productsHeadersubmenus(3).waitForVisible();
    Home.productsHeadersubmenus(3).click();
    expect((Home.gummiesheaderLinks(1).isVisible()) === true);
    expect((Home.gummiesheaderLinks(2).isVisible()) === true);
  })

  it("Verify that the 'Adult Gummy Vitamins' product list page is displayed when 'Adults' link is clicked",()=>{
    browser.pause(2000);
    Home.gummiesheaderLinks(1).waitForVisible();
    Home.gummiesheaderLinks(1).click();
    productListPage.headingPLP.waitForVisible();
    expect(productListPage.headingPLP.getText()).to.eql(testData.headers.adultgummies);
  })

  it("Verify that the 'Kids Gummy Vitamins' product list page is displayed when 'Kids' link is clicked",()=>{
    browser.pause(2000);
    Home.headerLinks(1).waitForVisible();
    Home.headerLinks(1).click();
    Home.productsHeadersubmenus(3).waitForVisible();
    Home.productsHeadersubmenus(3).click();
    Home.gummiesheaderLinks(2).waitForVisible();
    Home.gummiesheaderLinks(2).click();
    productListPage.headingPLP.waitForVisible();
    expect(productListPage.headingPLP.getText()).to.eql(testData.headers.kidsfirstgummies);
  })
})

describe.skip("BestSeller submenu",()=>{
    it("Verify that the 'Best Seller' Products are displayed in the header dropdown when 'Best Sellers' submenu is clicked",()=>{
      browser.url(testData.naturemade.url);
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(4).waitForVisible();
      Home.productsHeadersubmenus(4).click();
      Home.bestSellerBadge(1).waitForVisible();
      expect(Home.bestSellerBadge(1).getText()).to.eql(testData.headers.bestSellerBadgeTxt);
    })

    it("Verify that the user is redirected to the appropriate product details page when the product image is clicked",()=>{
      browser.pause(2000);
      Home.bestSellerProdTitles(1).waitForVisible();
      var a = Home.bestSellerProdTitles(1).getText();
      Home.bestSellerProdImg(1).waitForVisible();
      Home.bestSellerProdImg(1).click();
      browser.pause(2000);
      var c = a.split(" m")
      var convertCaps = " m"
      var convertaWordIntoCapital = convertCaps.toUpperCase()
      console.log("convertaWordIntoCapital", convertaWordIntoCapital)
      var d = `${c[0]}${convertaWordIntoCapital}${c[1]}`
      console.log(d);
      productDetailsPage.productName.waitForVisible();
      var b = productDetailsPage.productName.getText();
      console.log(b);
      expect(d).to.eql(b);
    })

    it("Verify that the user is redirected to the appropriate product details page when the product title is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(4).waitForVisible();
      Home.productsHeadersubmenus(4).click();
      Home.bestSellerProdTitles(1).waitForVisible();
      var a = Home.bestSellerProdTitles(1).getText();
      Home.bestSellerProdTitles(1).click();
      browser.pause(2000);
      var c = a.split(" m")
      var convertCaps = " m"
      var convertaWordIntoCapital = convertCaps.toUpperCase()
      console.log("convertaWordIntoCapital", convertaWordIntoCapital)
      var d = `${c[0]}${convertaWordIntoCapital}${c[1]}`
      console.log(d);
      productDetailsPage.productName.waitForVisible();
      var b = productDetailsPage.productName.getText();
      console.log(b);
      expect(d).to.eql(b);
    })

    it("Verify that the user is redirected to the appropriate product details page when the 'Buy Now' button is clicked",()=>{
        // Home.homepageMethod();
        // Home.vandsMethod();
        // Home.bestSellers.waitForVisible();
        // Home.bestSellers.click();
        // Home.bestSellerBuyNowBtn(1).waitForVisible();
        // var getTxtOfProdName = Home.bestSellerProdTitles(1).getText();
        // Home.bestSellerBuyNowBtn(1).click();
        // var splitProdNamee = getTxtOfProdName.split(" m")
        // var convertCaps = " m"
        // var convertaWordIntoCapital = convertCaps.toUpperCase()
        // console.log("convertaWordIntoCapital", convertaWordIntoCapital)
        // var getSplittedName = `${splitProdNamee[0]}${convertaWordIntoCapital}${splitProdNamee[1]}`
        // console.log("getSplittedName", getSplittedName)
        // expect(productDetailsPage.productName.getText()).to.eql(getSplittedName) 
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(4).waitForVisible();
      Home.productsHeadersubmenus(4).click();
      Home.bestSellerProdTitles(3).waitForVisible();
      var a = Home.bestSellerProdTitles(1).getText();
      Home.bestSellerBuyNowBtn(1).waitForVisible();
      Home.bestSellerBuyNowBtn(1).click();
      browser.pause(2000);
      var c = a.split(" m")
      var convertCaps = " m"
      var convertaWordIntoCapital = convertCaps.toUpperCase()
      console.log("convertaWordIntoCapital", convertaWordIntoCapital)
      var d = `${c[0]}${convertaWordIntoCapital}${c[1]}`
      console.log(d);
      productDetailsPage.productName.waitForVisible();
      var b = productDetailsPage.productName.getText();
      console.log(b);
      expect(d).to.eql(b);
    })

    it("Verify that the user is redirected to the 'Best seller' products page when the 'View all best seller' link is clicked",()=>{
      Home.headerLinks(1).waitForVisible();
      Home.headerLinks(1).click();
      Home.productsHeadersubmenus(4).waitForVisible();
      Home.productsHeadersubmenus(4).click();
      Home.viewAllBestSellersLink.waitForVisible();
      Home.viewAllBestSellersLink.click();
      productListPage.bannerTitle.waitForVisible();
      expect(productListPage.bannerTitle.getText()).to.eql(testData.headers.bestSellers);  
    })
  })

describe.skip("Header 4",()=>{
  it("Verify that the 'Bundles' page is displayed when 'Bundle & save' submenu is clicked",()=>{
    browser.url(testData.naturemade.url);
    Home.headerLinks(1).waitForVisible();
    Home.headerLinks(1).click();
    Home.productsHeadersubmenus(5).waitForVisible();
    Home.productsHeadersubmenus(5).click();
    productListPage.headingPLP.waitForVisible();
    expect(productListPage.headingPLP.getText()).to.eql(testData.headers.bundles);
  })

  it("Verify that the 'Subscriptions' page is displayed when 'Subscribe & Save' submenu is clicked",()=>{
    Home.headerLinks(1).waitForVisible();
    Home.headerLinks(1).click();
    Home.productsHeadersubmenus(6).waitForVisible();
    Home.productsHeadersubmenus(6).click();
    productListPage.headingPLP.waitForVisible();
    expect(productListPage.headingPLP.getText()).to.eql(testData.heading.marketingSubsPgHeading);
  })
})  

describe.skip("Find Vitamins For Me",()=>{
  it("Verify that the 'What Do I Need' page is displayed when 'What Do I Need' submenu is clicked",()=>{
    browser.url(testData.naturemade.url);
    Home.headerLinks(2).waitForVisible();
    Home.headerLinks(2).click();
    Home.findvitaminsformeSubmenu(1).waitForVisible();
    Home.findvitaminsformeSubmenu(1).click();
    browser.pause(2000);
    productListPage.headingPLP.waitForVisible();
    expect(productListPage.headingPLP.getText()).to.eql(testData.headers.whatdoineed);
  })

  it("Verify that 'Ask Our Experts' page is displayed when 'Ask Our Experts' submenu is clicked",()=>{
    Home.headerLinks(2).waitForVisible();
    Home.headerLinks(2).click();
    Home.findvitaminsformeSubmenu(2).waitForVisible();
    Home.findvitaminsformeSubmenu(2).click();
    browser.pause(2000);
    productListPage.headingPLP.waitForVisible();
    expect(productListPage.headingPLP.getText()).to.eql(testData.headers.askourexperts);
  })

  it("Verify that 'Multivitamins' page is displayed when 'Find Your Multivitamins' link is clicked",()=>{
    Home.headerLinks(2).waitForVisible();
    Home.headerLinks(2).click();
    Home.findyourmultivitaminsLink.waitForVisible();
    Home.findyourmultivitaminsLink.click();
    browser.pause(2000);
    productListPage.headingPLP.waitForVisible();
      expect(productListPage.headingPLP.getText()).to.eql(testData.headers.multivitamins);
  })
})

describe.skip("Tips & Resources",()=>{
  it("Verify that the 'Health Articles' page is displayed when 'Articles' submenu is clicked",()=>{
    Home.headerLinks(3).waitForVisible();
    Home.headerLinks(3).click();
    Home.tipsandresourcesSubmenu(1).waitForVisible();
    Home.tipsandresourcesSubmenu(1).click();
    browser.pause(2000);
    productListPage.headingPLP.waitForVisible();
    expect(productListPage.headingPLP.getText()).to.eql(testData.productTitles.healthAricleTitle);
  })

  it("Verify that the 'Studies' page is displayed when 'Research' submenu is clicked",()=>{
    Home.headerLinks(3).waitForVisible();
    Home.headerLinks(3).click();
    Home.tipsandresourcesSubmenu(2).waitForVisible();
    Home.tipsandresourcesSubmenu(2).click();
    browser.pause(2000);
    productListPage.headingPLP.waitForVisible();
    expect(productListPage.headingPLP.getText()).to.eql(testData.headers.research);
  })

  it("Verify that the 'FAQ' page is displayed when 'FAQ' submenu is clicked",()=>{
    Home.headerLinks(3).waitForVisible();
    Home.headerLinks(3).click();
    Home.tipsandresourcesSubmenu(3).waitForVisible();
    Home.tipsandresourcesSubmenu(3).click();
    browser.pause(2000);
    Home.fqaHead.waitForVisible();
    expect(Home.fqaHead.getText()).to.eql(testData.blogPageTitles.faqTxt);
  })

  it("Verify that the 'Health Articles' page is displayed when 'Explore Health Resources' link is clicked",()=>{
    Home.headerLinks(3).waitForVisible();
    Home.headerLinks(3).click();
    Home.explorehealthresourcesLink.waitForVisible();
    Home.explorehealthresourcesLink.click();
    productListPage.headingPLP.waitForVisible();
    expect(productListPage.headingPLP.getText()).to.eql(testData.productTitles.healthAricleTitle);
  })
})

describe.skip("About",()=>{
  it("Verify that the 'About Us' page is displayed when 'About Nature Made' submenu is clicked",()=>{
    Home.headerLinks(4).waitForVisible();
    Home.headerLinks(4).click();
    Home.aboutusSubmenu(1).waitForVisible();
    Home.aboutusSubmenu(1).click();
    browser.pause(2000);
    Home.aboutusHead.waitForVisible();
    expect(Home.aboutusHead.getText()).to.eql(testData.aboutusdData.aboutText)
  })

  it("Verify that the 'Contact Us' page is displayed when 'Contact Us' submenu is clicked",()=>{
    Home.headerLinks(4).waitForVisible();
    Home.headerLinks(4).click();
    Home.aboutusSubmenu(2).waitForVisible();
    Home.aboutusSubmenu(2).click();
    browser.pause(2000);
    Home.contacUs.waitForVisible();
    expect(Home.contacUs.getText()).to.eql(testData.aboutusdData.contactText);
  })

  it("Verify that the 'About Nature Made' page is displayed when 'Discover Nature Made' link is clicked",()=>{
    Home.headerLinks(4).waitForVisible();
    Home.headerLinks(4).click();
    Home.discovernaturemadeLink.waitForVisible();
    Home.discovernaturemadeLink.click();
    browser.pause(2000);
    productListPage.headingPLP.waitForVisible();
    expect(productListPage.headingPLP.getText()).to.eql(testData.aboutusdData.aboutText);
  })
})

describe.skip("Home page products",()=>{
    it("Verify that the user is navigated to 'Products details' page when 'Best seller' products image is clicked ",()=>{
      browser.url(testData.naturemade.url);
      browser.scroll(0, 700)
      Home.homeBestSellersProducts.waitForVisible();
      Home.homeBestSellersProducts.click();
      Home.productImgs(3).waitForVisible();
      Home.browserMethod();
      var a = Home.productTitleTxt1(3).getText();
      var convertedText = a.toLowerCase();
      console.log("a",a);
      Home.productImgs(3).click();
      Home.browserMethod();
      productDetailsPage.productName.waitForVisible();
      var getTextOnProductList = productListPage.productName.getText()
      var convertTextOnPDP = getTextOnProductList.toLowerCase();
      expect(convertTextOnPDP).to.eql(convertedText)
    })

    it("Verify that the user is navigated to 'Products details' page when 'Best seller' products title is clicked ",()=>{
      browser.url(testData.naturemade.url);
      browser.scroll(0, 600);
      Home.homeBestSellersProducts.waitForVisible();
      Home.homeBestSellersProducts.click();
      browser.execute(function() {
        document.querySelector(`#MainContent > div:nth-child(3) .text-center.padding-horizontal-1`).scrollIntoView()
      });
      browser.pause(2000);
      Home.productTitleTxt1(3).waitForVisible();
      var a = Home.productTitleTxt1(3).getText();
      Home.productTitleTxt1(3).click();
      browser.pause(2000);
      productDetailsPage.productName.waitForVisible();
      var b = productDetailsPage.productName.getText();
      expect(a).to.eql(b);
    })

    it("Verify that the user is navigated to 'Products details' page when 'Best seller' products rating is clicked ",()=>{
      browser.url(testData.naturemade.url);
      browser.scroll(0, 600);
      Home.homeBestSellersProducts.waitForVisible();
      Home.homeBestSellersProducts.click();
      browser.execute(function() {
        document.querySelector(`#MainContent > div:nth-child(3) .text-center.padding-horizontal-1`).scrollIntoView()
      });
      browser.pause(2000);
      Home.productTitleTxt1(3).waitForVisible();
      var a = Home.productTitleTxt1(3).getText();
      Home.productRatings(3).waitForVisible();
      Home.productRatings(3).click();
      productDetailsPage.productName.waitForVisible();
      var b = productDetailsPage.productName.getText();
      expect(a).to.eql(b);
    })

    it("Verify that the user is navigated to 'Products details' page when 'Best seller' products 'Buy now' is clicked ",()=>{
      browser.url(testData.naturemade.url);
      browser.scroll(0, 600);
      Home.homeBestSellersProducts.waitForVisible();
      Home.homeBestSellersProducts.click();
      browser.execute(function() {
        document.querySelector(`#MainContent > div:nth-child(3) .text-center.padding-horizontal-1`).scrollIntoView()
      });
      browser.pause(2000);
      Home.productTitleTxt1(3).waitForVisible();
      var a = Home.productTitleTxt1(3).getText();
      Home.bestSellerBuyNowBtns(3).waitForVisible();
      Home.bestSellerBuyNowBtns(3).click();
      productDetailsPage.productName.waitForVisible();
      var b = productDetailsPage.productName.getText();
      expect(a).to.eql(b);
    })

    it("Verify that the 'New Products' are displayed when user clicks on 'New Products'",()=>{
      browser.url(testData.naturemade.url);
      browser.scroll(0, 600);
      Home.homenewProducts.waitForVisible();
      Home.homenewProducts.click();
      browser.execute(function() {
        document.querySelector(`#MainContent > div:nth-child(3) .text-center.padding-horizontal-1`).scrollIntoView()
      });
      Home.newProductTitleTxt(2).waitForVisible();
      expect((Home.newProductTitleTxt(2).isVisible()) === true);
      expect((Home.newProductTitleTxt(3).isVisible()) === true);
    })

    it("Verify that the user is navigated to 'Products details' page when 'New Products' products image is clicked ",()=>{
      browser.url(testData.naturemade.url);
      browser.scroll(0, 600);
      Home.homenewProducts.waitForVisible();
      Home.homenewProducts.click();
      browser.execute(function() {
        document.querySelector(`#MainContent > div:nth-child(3) .text-center.padding-horizontal-1`).scrollIntoView()
      });
      Home.newProductTitleTxt(2).waitForVisible();
      var a = Home.newProductTitleTxt(2).getText();
      Home.newProductImages(2).waitForVisible();
      Home.newProductImages(2).click();
      browser.pause(2000);
      var c = a.split(" m")
      var convertCaps = " m"
      var convertaWordIntoCapital = convertCaps.toUpperCase()
      console.log("convertaWordIntoCapital", convertaWordIntoCapital)
      var d = `${c[0]}${convertaWordIntoCapital}${c[1]}`
      console.log(d);
      productDetailsPage.productName.waitForVisible();
      var b = productDetailsPage.productName.getText();
      expect(d).to.eql(b);
    })

    it("Verify that the user is navigated to 'Products details' page when 'New Products' products title is clicked ",()=>{
      browser.url(testData.naturemade.url);
      browser.scroll(0, 600);
      Home.homenewProducts.waitForVisible();
      Home.homenewProducts.click();
      browser.execute(function() {
        document.querySelector(`#MainContent > div:nth-child(3) .text-center.padding-horizontal-1`).scrollIntoView()
      });
      Home.newProductTitleTxt(2).waitForVisible();
      var prodName1 = Home.newProductTitleTxt(2).getText();
      var convertedTxtOnPLP = prodName1.toLowerCase();
      Home.newProductTitleTxt(2).click();
      var x = productDetailsPage.productName.getText();
      var y = x.toLowerCase();
      expect(y).to.eql(convertedTxtOnPLP)
    })

    it("Verify that the user is navigated to 'Products details' page when 'New Products' products rating is clicked ",()=>{
        browser.url(testData.naturemade.url);
        browser.scroll(0, 600);
        Home.homenewProducts.waitForVisible();
        Home.homenewProducts.click();
        browser.execute(function() {
          document.querySelector(`#MainContent > div:nth-child(3) .text-center.padding-horizontal-1 p`).scrollIntoView()
        });
        Home.newproductRatings(3).waitForVisible();
        var prodName2 = Home.newProductTitleTxt(3).getText();
        var convertedTxtOnPLP = prodName2.toLowerCase();
        Home.newproductRatings(3).click();
        productDetailsPage.productName.waitForVisible();
        var x1 = productDetailsPage.productName.getText();
        var y1 = x1.toLowerCase();
        expect(y1).to.eql(convertedTxtOnPLP)
    })

    it("Verify that the user is navigated to 'Products details' page when 'Buy Now' on 'New Products' list is clicked ",()=>{
      browser.url(testData.naturemade.url);
      browser.scroll(0, 700);
      Home.homenewProducts.waitForVisible();
      Home.homenewProducts.click();
      browser.execute(function() {
        document.querySelector(`#MainContent > div:nth-child(3) .text-center.padding-horizontal-1`).scrollIntoView()
      });
      browser.scroll("#custom-tab-new-products ul li:nth-child(2) .item-status.has-green-background");
      Home.buyNowBtns(3).waitForVisible();
      var prodName3 = Home.newProductTitleTxt(3).getText();
      var convertedTxtOnPLP = prodName3.toLowerCase();
      Home.buyNowBtns(3).click();
      var u = productDetailsPage.productName.getText();
      var v = u.toLowerCase();
      expect(v).to.eql(convertedTxtOnPLP);
    })
  })

describe.skip("Here For You Every Day",()=>{
  it("Verify that the user is navigated to 'Our history' page when 'Our history' option is clicked",()=>{
    browser.url(testData.naturemade.url);
    browser.execute(function() {
      document.querySelector(`#MainContent > div:nth-child(4) .grid-x:nth-child(1) h2`).scrollIntoView()
    })  
    Home.aboutusBtn(3).waitForVisible();
    Home.aboutusBtn(3).click();
    browser.pause(2000);
    Home.kidsvitaminstext.waitForVisible();
    expect(Home.kidsvitaminstext.getText()).to.eql(testData.aboutusdData.historyText);
  })

  it("Verify that the user is navigated to 'Our history' page when 'Our Experts' option is clicked",()=>{
    browser.url(testData.naturemade.url);
    browser.execute(function() {
      document.querySelector(`#MainContent > div:nth-child(4) .grid-x:nth-child(1) h2`).scrollIntoView()
    })  
    Home.aboutusBtn(1).waitForVisible();
    Home.aboutusBtn(1).click();
    browser.pause(2000);
    Home.kidsvitaminstext.waitForVisible();
    expect(Home.kidsvitaminstext.getText()).to.eql(testData.aboutusdData.expertsText);
 })

  it("Verify that the user is navigated to 'Our history' page when 'Our Brands' option is clicked",()=>{
    browser.url(testData.naturemade.url);
    browser.execute(function() {
      document.querySelector(`#MainContent > div:nth-child(4) .grid-x:nth-child(1) h2`).scrollIntoView()
    })  
    Home.aboutusBtn(2).waitForVisible();
    Home.aboutusBtn(2).click();
    browser.pause(2000);
    Home.kidsvitaminstext.waitForVisible();
    expect(Home.kidsvitaminstext.getText()).to.eql(testData.titles.ourExperts);
    }) 
  })

describe.skip("Find your daily routine - Bundles and Recently viewed Products",()=>{
  it("Verify that the 'Bundles' Products list is displayed when 'Bundles' tab is clicked in the 'Find your daily routine' section",()=>{
    browser.url(testData.naturemade.url);
    browser.scroll(0, 700);
    Home.bundleTab.waitForVisible();
    Home.bundleTab.click();
    browser.execute(function() {
    document.querySelector(`#MainContent > div:nth-child(3) .text-center.padding-horizontal-1`).scrollIntoView()
        })        
    Home.bundleProdTitles(2).waitForVisible();
    expect((Home.bundleProdTitles(2).isVisible()) === true);
    expect((Home.bundleProdTitles(3).isVisible()) === true);
    })

  it("Verify that the user is redirected to the product details page when product image is clicked",()=>{
     browser.pause(2000);
     Home.bundleProdTitles(2).waitForVisible();
     var a = Home.bundleProdTitles(2).getText();
     var convertedText = a.toLowerCase();
     console.log("a",a);
     Home.bundleProdImgs(2).click();
     browser.pause(2000);
     productDetailsPage.productName.waitForVisible();
     var getTextOnProductList = productListPage.productName.getText()
     var convertTextOnPDP = getTextOnProductList.toLowerCase();
     expect(convertTextOnPDP).to.eql(convertedText)
    })

  it("Verify that the user is redirected to the product details page when product title is clicked",()=>{
    browser.url(testData.naturemade.url);
    browser.scroll(0, 700);
    Home.bundleTab.waitForVisible();
    Home.bundleTab.click();
    browser.execute(function() {
      document.querySelector(`#MainContent > div:nth-child(3) .text-center.padding-horizontal-1 p`).scrollIntoView()
        })        
    var a = Home.bundleProdTitles(3).getText();
    var convertedText = a.toLowerCase();
    console.log("a",a);
    Home.bundleProdTitles(3).click();
    browser.pause(2000);
    productDetailsPage.productName.waitForVisible();
    var getTextOnProductList = productListPage.productName.getText()
    var convertTextOnPDP = getTextOnProductList.toLowerCase();
    expect(convertTextOnPDP).to.eql(convertedText)
    })

  it("Verify that the user is navigated to 'Products details' page when 'Bundles' products 'Buy now' is clicked",()=>{
    browser.url(testData.naturemade.url);
    browser.scroll(0, 700);
    Home.bundleTab.waitForVisible();
    Home.bundleTab.click();
    browser.execute(function() {
      document.querySelector(`.tab-customize button:nth-child(4)`).scrollIntoView()
        })        
    Home.bunldeProdBuyNowBtns(3).waitForVisible();
    var a = Home.bundleProdTitles(3).getText();
    var convertedText = a.toLowerCase();
    //var convertedTextOfPLP = prodName.toLowerCase();
    //console.log("prodName",prodName);
    Home.bunldeProdBuyNowBtns(3).click();
    productDetailsPage.productName.waitForVisible();
    var getTextOnProductList = productListPage.productName.getText()
    var convertTextOnPDP = getTextOnProductList.toLowerCase();
    console.log("convertTextOnPDP", convertTextOnPDP);
    expect(convertTextOnPDP).to.eql(convertedText)
    })
  })

describe.SKIP("Product list page",()=>{
    it("Verify that the filter dialog is displayed when user clicks on Filter option in Product list page",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink();
      browser.scroll(0, 1400);
      browser.waitUntil(
        function() {
          return (
          browser.isVisible
              (`.klaviyo-close-form.kl-private-reset-css-Xuajs1 svg`) === true
          ) == true;
        },
        30000,
        "Popup not visible even after 20 secs"
    );     
    if(Home.subscribeCancelIcon.isVisible()){
        Home.subscribeCancelIcon.click();
      } 
      if(Home.newRatingPopupCancelIcon.isVisible()){
        Home.newRatingPopupCancelIcon.click();
      }
      Home.browserMethod();
      productListPage.filterIcon.waitForVisible();
      productListPage.filterIcon.click();
      Home.browserMethod();
      productListPage.clearFilterLink.waitForVisible();
      expect(productListPage.clearFilterLink.getText()).to.eql(testData.filterBtn.clearAllTxt);
    })

    it("Verify that the user is able to search the products by Product type filter in Product list page",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink();
      browser.execute(function() {
        document.querySelector(`.margin-bottom-2`).scrollIntoView()
      })    
      Home.browserMethod();
      if(Home.subscribeCancelIcon.isVisible()){
        Home.subscribeCancelIcon.click();
      } 
      if(Home.newRatingPopupCancelIcon.isVisible()){
        Home.newRatingPopupCancelIcon.click();
      }
      browser.waitUntil(
        function() {
            return (
            browser.isVisible
                (`.filter-by-product`) === true
            );
        },
        20000,
        "Filter button is still not visible even after 20 secs"
      );
      productListPage.filterIcon.waitForVisible();
      var beforeFilterProdNames = productListPage.prodTitlesForFilterUnFilter(1).getText();
      productListPage.filterIcon.click();
      Home.browserMethod();
      browser.execute(function() {
        document.querySelector(`#FacetsWrapperDesktop .filter-item-group.js-filter:nth-child(2) ul li:nth-child(1) input`).scrollIntoView()
      })  
      Home.browserMethod();
      productListPage.productFilterOptions(2).waitForVisible();
      productListPage.productFilterOptions(2).click();
      productListPage.gummyCheckbox(1).waitForVisible();
      productListPage.gummyCheckbox(1).click();
      productListPage.applyFiltersBtn.waitForVisible();
      productListPage.applyFiltersBtn.click();
      Home.browserMethod();
      var afterFilterApplyProdNames = productListPage.prodTitlesForFilterUnFilter(2).getText();
      // productListPage.productTitle1(2,1).waitForVisible();
      // productListPage.productTitle1(2,1).waitForVisible();

      expect(afterFilterApplyProdNames).not.to.eql(beforeFilterProdNames)
    })

    it("Verify that the applied filters are cleared when user taps on 'Clear Filter' option in Product list page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink2();
        browser.scroll(0,1400);
        if(Home.newRatingPopupCancelIcon.isVisible()) {
          Home.newRatingPopupCancelIcon.click();
        }
        if(Home.subscribeCancelIcon.isVisible()){
          Home.subscribeCancelIcon.click();
        }
        browser.waitUntil(
          function() {
              return (
              browser.isVisible
                  (`.filter-by-product`) === true
              );
          },
          10000,
          "Filter button is still not visible even after 10 secs"
        );
        productListPage.filterIcon.waitForVisible();
        productListPage.filterIcon.click();  
        browser.execute(function() {
          document.querySelector(`#FacetsWrapperDesktop .filter-item-group.js-filter:nth-child(2) ul li:nth-child(1) input`).scrollIntoView()
        })     
        productListPage.productFilterOptions(2).waitForVisible();
        productListPage.productFilterOptions(2).click();
        productListPage.gummyCheckbox(1).waitForVisible();
        productListPage.gummyCheckbox(1).click();
        productListPage.applyFiltersBtn.waitForVisible();
        productListPage.applyFiltersBtn.click();
        Home.browserMethod();
        if(Home.subscribeCancelIcon.isVisible()){
          Home.subscribeCancelIcon.click();
        }
        productListPage.filterIcon.waitForVisible();
        productListPage.filterIcon.click(); 
        productListPage.clearFilterLink.waitForVisible();
        productListPage.clearFilterLink.click();

        productListPage.applyFiltersBtn.waitForVisible();
        productListPage.applyFiltersBtn.click();
        Home.browserMethod();
        browser.execute(function() {
          document.querySelector(`.collection-section:nth-child(1) ol>li:nth-child(1) .item-status.has-gray-background`).scrollIntoView()
        })      
        productListPage.productTitleAfterClr(1, 1).waitForVisible();
        expect(productListPage.productTitleAfterClr(1, 1).getText()).to.eql(testData.productTitles.mensMultivitaminsTbltTxt)
    })

    it("Verify that the user is able to search the products by 'Price filter' in Product list page",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink();
      browser.scroll(0, 1400);
      Home.browserMethod();
      if(Home.subscribeCancelIcon.isVisible()){
        Home.subscribeCancelIcon.click();
      } 
      if(Home.newRatingPopupCancelIcon.isVisible()){
        Home.newRatingPopupCancelIcon.click();
      }
      Home.browserMethod();
      productListPage.filterIcon.waitForVisible();
      productListPage.filterIcon.click();
      browser.waitUntil(
        function() {
            return (
            browser.isVisible
                (`#filters-list-wrapper .filter-item-group:nth-child(1) li:nth-child(1) input`) === true
            );
        },
        10000,
        "Filtericon checkbox is still not visible even after 10 secs"
      );
      productListPage.priceFilters(1).waitForVisible();
      productListPage.priceFilters(1).click();
      productListPage.applyFiltersBtn.waitForVisible();
      productListPage.applyFiltersBtn.click();
      productListPage.cardPriceForAfterFilterApplied();
      // productListPage.productTitleForAppliedPrice(1).waitForVisible();
      // expect(productListPage.productTitleForAppliedPrice(1).getText()).to.eql(testData.productTitles.productName)
    })

    it("Verify that the user is able to sort the products by 'Price(asc)' filter in 'Product list' page",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink();
      browser.scroll(0, 1400);
      Home.browserMethod();
      productListPage.featured.waitForVisible();
      productListPage.featured.click();
      productListPage.priceAsc.waitForVisible();
      productListPage.priceAsc.click();
      Home.browserMethod();
      browser.execute(function() {
        document.querySelector(`.ais-SortBy ul>li:nth-child(4)`).scrollIntoView()
      })
      Home.browserMethod();
      productListPage.productTitleForAsc(1, 1).waitForVisible();
      //productListPage.productTitleForAsc(2, 1).waitForVisible();
      expect(productListPage.productTitleForAsc(1, 1).getText()).to.eql(testData.productTitles.multivitaminForHerGummies)
    })

    //it("Verify that the user is able to sort the products by 'Price(desc)' filter in 'Product list' page",()=>{
    //   Home.vitaminsAndSupplemntsHeadrMenuLink2();
    //   browser.scroll(0, 2000);
    //   Home.browserMethod();
    //   productListPage.featured.waitForVisible();
    //   productListPage.featured.click();
    //   productListPage.priceDesc.waitForVisible();
    //   productListPage.priceDesc.click();
    //   browser.execute(function() {
    //     document.querySelector(`.ais-SortBy ul>li:nth-child(4)`).scrollIntoView()
    //   })    
    //   Home.browserMethod();
    //   productListPage.productTitleForDesc(4).waitForVisible();
    //   expect(productListPage.productTitleForDesc(4).getText()).to.eql(testData.productTitles.multivitaminForHerGummies)
    // })

    it("Verify that the user is navigated to 'Products details' page when products image is clicked in the 'Product list' page",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink();
      browser.execute(function() {
        document.querySelector(`#womens-multivitamins h3`).scrollIntoView()
      })     
      Home.browserMethod();
      if(Home.subscribeCancelIcon.isVisible()){
        Home.subscribeCancelIcon.click();
      }
      productListPage.productListPageimgs(1).waitForVisible();
      var a = productListPage.prodTitlesForFilterUnFilter(1).getText();
      var convertedText = a.toLowerCase();
      productListPage.productListPageimgs(1).click();
      productDetailsPage.productName.waitForVisible();
      var getTextOnProductList = productListPage.productName.getText()
      var convertTextOnPDP = getTextOnProductList.toLowerCase();
      console.log("convertTextOnPDP", convertTextOnPDP);
      console.log("convertTextOnPDP1", convertedText);
      expect(convertTextOnPDP).to.eql(convertedText)
    })

    it("Verify that the user is navigated to 'Products details' page when products title is clicked in 'Product list' page",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink();
      browser.execute(function() {
        document.querySelector(`#womens-multivitamins h3`).scrollIntoView()
      })     
      Home.browserMethod();
      if(Home.subscribeCancelIcon.isVisible()){
        Home.subscribeCancelIcon.click();
      }
      productListPage.productListPageTitles(1).waitForVisible();
      var prodName = productListPage.productListPageTitles(1).getText();
      var convertedTextOfPLP = prodName.toLowerCase();
      productListPage.productListPageTitles(1).click();
      productDetailsPage.productName.waitForVisible();
      var getTextOnPLP = productListPage.productName.getText()
      var convertedTextOnPDP = getTextOnPLP.toLowerCase();
      expect(convertedTextOnPDP).to.eql(convertedTextOfPLP)
      // productDetailsPage.productTitleDisplayedAsSameInPLP();

    })

    it("Verify that the user is navigated to 'Products details' page when products rating is clicked in 'Product list' page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink();
        browser.scroll(0, 1800);
        browser.pause(3000);
        productListPage.productsRatings(1).waitForVisible();
        var prodName = productListPage.productListPageTitles(1).getText();
        var convertedTextOfPLP = prodName.toLowerCase();
        productListPage.productsRatings(1).click();
        productDetailsPage.productName.waitForVisible();
        var getTextOnPLP = productListPage.productName.getText()
        var convertedTextOnPDP = getTextOnPLP.toLowerCase();
        expect(convertedTextOnPDP).to.eql(convertedTextOfPLP)
    })

    it("Verify that the user is navigated to 'Products details' page when products 'Buy now' is clicked in 'Product list' page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink();
        browser.scroll(" #CollectionProductGrid .collection-section:nth-child(1) ol>li:nth-child(7) p");
        if(Home.subscribeCancelIcon.isVisible()){
          Home.subscribeCancelIcon.click();
        }
        if(Home.newRatingPopupCancelIcon.isVisible()){
          Home.newRatingPopupCancelIcon.click();
        }
        productListPage.productBuyNowBtn(6).waitForVisible();
        var prodName = productListPage.productListPageTitles(6).getText();
        var convertedTextOfPLP = prodName.toLowerCase();
        productListPage.productBuyNowBtn(6).click();
        Home.browserMethod();
        productDetailsPage.productName.waitForVisible();
        var getTextOnPLP = productListPage.productName.getText()
        var convertedTextOnPDP = getTextOnPLP.toLowerCase();
        expect(convertedTextOnPDP).to.eql(convertedTextOfPLP)
    })

    it("Verify that the next 12 products are displayed in the 'Product list' when 'Show more' button is clicked in 'Product list' page",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink3();
      browser.execute(function() {
        document.querySelector(`.inner-collection:nth-child(2) ol>li:nth-child(11) .item-container .item-title`).scrollIntoView()
      }) 
      Home.browserMethod();
      productListPage.showMoreResultLink.waitForVisible();
      productListPage.showMoreResultLink.click();
      Home.browserMethod();
      productListPage.productTitle4.waitForVisible();
      expect(productListPage.productTitle4.getText()).to.eql(testData.productTitles.vitaminB6100MgTblts)
    })
  })

describe.skip("Product details page",()=>{

  it.SKIP("Verify that the review dialog is displayed when user clicks on 'Write a review' option in 'Product details' page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        productDetailsPage.writeAReviewLink.waitForVisible();
        productDetailsPage.writeAReviewLink.click();
        Home.browserMethod();
        productDetailsPage.reviewPopUp.waitForVisible();
        expect(productDetailsPage.reviewPopUp.getText()).to.eql(testData.productTitles.reviewPopUp)
  })

  it.SKIP("Verify that the user is navigated to 'Reviews' section when 'Ratings' on the product is clicked in 'Product details page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        productDetailsPage.writeAReviewStar.waitForVisible();
        productDetailsPage.writeAReviewStar.click();
        Home.browserMethod();
        productDetailsPage.productReview.waitForVisible();
        expect(productDetailsPage.productReview.getText()).to.eql(testData.productTitles.reviewSection)
  })

  it("Verify that the quantity of the Products is increased when the user clicks on '+' icon in 'Product details' page",()=>{
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        if(Home.newRatingPopupCancelIcon.isVisible()) {
          Home.newRatingPopupCancelIcon.click();
        }
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
        if(Home.newRatingPopupCancelIcon.isVisible()) {
          Home.newRatingPopupCancelIcon.click();
        }
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

  it("Verify that the Products is successfully added to the cart when 'Add to cart' option is clicked",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink1();
      browser.scroll(0, 300);
      productDetailsPage.addToCart.waitForVisible();
      productDetailsPage.addToCart.click();
      browser.scroll(0, 40);
      productDetailsPage.itemAddedToCart.waitForVisible();
      expect(productDetailsPage.itemAddedToCart.getText()).to.eql(testData.cart.productAddedTxt);
  })

  it("Verify that the user is navigated to 'More info about the product' page when 'More details about the product' option in 'Product details'section is clicked",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink1();
      browser.execute(function() {
        document.querySelector(`.product-form__submit:nth-child(1)`).scrollIntoView()
      })     
      productDetailsPage.moreAboutThisProduct.waitForVisible();
      productDetailsPage.moreAboutThisProduct.click();
      browser.scroll(0, 300);
      productDetailsPage.benifitsAndDescription.waitForVisible();
      expect(productDetailsPage.benifitsAndDescription.getText()).to.eql(testData.productDetailsPage.description);
  }) 

  it("Verify that the user is navigated to 'FAQs' page when 'Frequently asked questions' option in 'Product details' page is clicked",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink1();
      browser.scroll(0, 700);
      productDetailsPage.frequentlyAskedQuestn.waitForVisible();
      productDetailsPage.frequentlyAskedQuestn.click();
      //browser.pause(2000);
      productDetailsPage.viewAllFaq.waitForVisible();
      expect(productDetailsPage.viewAllFaq.getText()).to.eql(testData.productDetailsPage.faq);
  }) 

  it("Verify that the user is navigated to 'Compare products' page when 'Compare product' option in 'Product details' page is clicked",()=>{
    Home.vitaminsAndSupplemntsHeadrMenuLink1();
    browser.scroll(0, 700);
    productDetailsPage.compareProducts.waitForVisible();
    productDetailsPage.compareProducts.click();
    //browser.pause(1000);
    productDetailsPage.compareWithSimilarProduct.waitForVisible();
    expect(productDetailsPage.compareWithSimilarProduct.getText()).to.eql(testData.productDetailsPage.compareProducts)
  })

  //  it("Verify that the user is not able to add 3 quantities of the same the product on product details page",()=>{
  //     Home.vitaminsAndSupplemntsHeadrMenuLink1();
  //     browser.scroll(0, 200);
  //     productDetailsPage.quantityInput.waitForVisible();
  //     productDetailsPage.quantityInput.click();
  //     // browser.pause(5000);
  //     productDetailsPage.quantityInput.addValue(testData.cart.cartQuantity2);
  //     browser.pause(3000);
  //     productDetailsPage.cartDialogCancelPopup.waitForVisible();
  //     productDetailsPage.cartDialogCancelPopup.click();
  //     productDetailsPage.quantityError.waitForVisible();
  //     expect(productDetailsPage.quantityError.getText()).to.eql(testData.productDetailsPage.quantityError)
  //  })

  //  it("Verify that the appropriate error message is displayed when user tries to add more than 3 quantities of the same product on the product details page",()=>{
  //     Home.vitaminsAndSupplemntsHeadrMenuLink1();
  //     browser.pause(4000);
  //     productDetailsPage.quantityIncrease.waitForVisible();
  //     productDetailsPage.quantityIncrease.click();
  //     productDetailsPage.quantityIncrease.click();
  //     productDetailsPage.quantityIncrease.click();
  //     browser.pause(5000);
  //     productDetailsPage.quantityError.waitForVisible();
  //     expect(productDetailsPage.quantityError.getText()).to.eql(testData.productDetailsPage.quantityError)
  //})

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

  it("Verify that the correct count is reflected in the cart when user change the bottle count on the product details page and adds it to the cart",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink1();
      browser.scroll(0, 300);
      //productDetailsPage.bottleCount1.waitForVisible();
      //productDetailsPage.bottleCount1.click();
      productDetailsPage.bottleCount2.waitForVisible();
      productDetailsPage.bottleCount2.click();
      productDetailsPage.addToCart.waitForVisible();
      productDetailsPage.addToCart.click();
      Home.browserMethod();
      //productDetailsPage.productNameCartPopUp.waitForVisible();
      productDetailsPage.viewMyCart.waitForVisible();
      productDetailsPage.viewMyCart.click();
      productDetailsPage.productCount.waitForVisible();
      expect(productDetailsPage.productCount.getText()).to.eql(testData.productDetailsPage.productCount)
  })

  it("Verify that the radio button is moved to 'subscribe' option when user selects 'Subscribe' option in 'Product details' page",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink1();
      browser.scroll(0, 400);
      productDetailsPage.radioBtn.waitForVisible();
      productDetailsPage.radioBtn.click();
      productDetailsPage.subscribrAndSavePrice.waitForVisible();
      expect(productDetailsPage.subscribrAndSavePrice.getText()).to.eql(testData.productDetailsPage.prodPrice)
  })

  it("Verify that the product price is decreased when user selects subscription option in product details page",()=>{
    // Home.removeAllProductsFromCart();
      Home.vitaminsAndSupplemntsHeadrMenuLink1();
      browser.scroll(0, 400);
      productDetailsPage.oneTimePurchaseText.waitForVisible();
      productDetailsPage.oneTimePurchaseText.click();
      var price = productDetailsPage.oneTimePurPrice.getValue();
      Home.browserMethod();
      productDetailsPage.oneTimePurPrice.waitForVisible();
      expect(productDetailsPage.oneTimePurPrice.getText()).to.eql(testData.productDetailsPage.btlPrice1)
      productDetailsPage.subscribeAndSave.waitForVisible();
      productDetailsPage.subscribeAndSave.click();
      productDetailsPage.subscribrAndSavePrice.waitForVisible();
      expect(productDetailsPage.subscribrAndSavePrice.getText()).to.eql(testData.productDetailsPage.prodPrice);

  })

  it("Verify that the user is navigated to the product details when the 'Product image' is clicked in the 'Compare with similar products' section on the product details page",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink1();
      browser.scroll(0, 1800);
      Home.browserMethod();
      productDetailsPage.compareProductsimgs(3).waitForVisible();
      var x = productDetailsPage.compareProductsTitles(3).getText();
      var convertedText = x.toLowerCase();
      productDetailsPage.compareProductsimgs(3).click();
      productDetailsPage.productName.waitForVisible();
      var getTextOnCompareProd = productDetailsPage.productName.getText()
      var convertTextOnPDP = getTextOnCompareProd.toLowerCase();
      expect(convertTextOnPDP).to.eql(convertedText)

      // productDetailsPage.productName.waitForVisible();
      // expect(productDetailsPage.productName.getText()).to.eql(testData.productNames.multiVitaminPlusOmegaGummiesTxt);
  })

  it("Verify that the user is navigated to the product details when the 'Product title' is clicked in the 'Compare with similar products' section on the product list page",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink1();
      browser.scroll(0, 1900);
      Home.browserMethod();
      productDetailsPage.compareProductsTitles(3).waitForVisible();
      var x = productDetailsPage.compareProductsTitles(3).getText();
      var convertedText = x.toLowerCase();
      productDetailsPage.compareProductsTitles(3).click();
      productDetailsPage.productName.waitForVisible();
      var getTextOnCompareProd = productDetailsPage.productName.getText()
      var convertTextOnPDP = getTextOnCompareProd.toLowerCase();
      expect(convertTextOnPDP).to.eql(convertedText)
      // productDetailsPage.productName.waitForVisible();
      // expect(productDetailsPage.productName.getText()).to.eql(testData.productNames.multiVitaminPlusOmegaGummiesTxt);
  })

  it("Verify that the product is added to the cart succesfully when the user click on the 'Add To Cart' button in the 'Compare with similar products' on the product details page",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink1();
      browser.scroll(0, 2000);
      Home.browserMethod();
      productDetailsPage.compareProductsAddToCartBtn(3).waitForVisible();   
      var d = productDetailsPage.compareProductsTitles(3).getText();
      var convertedText = d.toLowerCase();
      productDetailsPage.compareProductsAddToCartBtn(3).click();
      productDetailsPage.productName.waitForVisible();
      var getTextOnCompareProd = productDetailsPage.productName.getText()
      var convertTextOnPDP = getTextOnCompareProd.toLowerCase();
      expect(convertTextOnPDP).to.eql(convertedText)
      // productDetailsPage.productName.waitForVisible();
      // expect(productDetailsPage.productName.getText()).to.eql(testData.productNames.multiVitaminPlusOmegaGummiesTxt);
  })

  it("Verify that the user is redirected to the 'Health Articles' page when the 'View All Resources' link is clicked on the product details page",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink1();
      browser.execute(function() {
        document.querySelector(`.testimonial-item-wrapper.text-center strong`).scrollIntoView()
      })    
      Home.browserMethod();
      productDetailsPage.viewAllResourceLink.waitForVisible();
      productDetailsPage.viewAllResourceLink.click();
      productListPage.healthArticlesTitle.waitForVisible();
      expect(productListPage.healthArticlesTitle.getText()).to.eql(testData.productTitles.healthAricleTitle);

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


  })

describe.skip("Cart Page",()=>{

    it("Verify that the quantity of the Products is increased when the user clicks on '+' icon in the Cart page",()=>{
      Home.cartPageMethod();
      // Home.browserMethod();
      Home.cartPlus.waitForVisible();
      Home.cartPlus.click();
      Home.browserMethod();
      Home.cartPlus.waitForVisible();
      Home.cartPlus.click();
      Home.cartQuantity.waitForVisible();
      expect(Home.cartQuantity.getValue()).to.eql(testData.cart.cartQty3);
      Home.removeAllProductsFromCart();
    })

    it("Verify that the quantity of the Products is decereased when the user clicks on '-' icon in 'Product details page",()=>{
      browser.refresh();
      Home.cartPageMethod();
      Home.cartPlus.waitForVisible();
      Home.cartPlus.click();
      Home.cartMinus.waitForVisible();
      Home.cartMinus.click();
      Home.browserMethod();
      Home.cartQuantity.waitForVisible();
      expect(Home.cartQuantity.getValue()).to.eql(testData.cart.cartQty1);
      Home.removeAllProductsFromCart();
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

    it("Verify that the user is redirected to 'Homepage' when 'Continue Shopping' button is clicked in the cart page",()=>{
      Home.removeAllProductsFromCart();
      Home.cartPageMethod();
      Home.browserMethod();
      Home.cartContinueShopping.waitForVisible();
      Home.cartContinueShopping.click();
      Home.bannerName.waitForVisible();
      expect(Home.bannerName.getText()).eql(testData.titles.shopNowText);
    })

    it("Verify that the 'Product' is removed successfully from the cart when user taps on the 'Delete' icon in the cart page",()=>{
      Home.cartPageMethod();
      Home.browserMethod();
      Home.cartDelete.waitForVisible();
      Home.cartDelete.click();
      Home.emptyCart.waitForVisible();
      expect(Home.emptyCart.getText()).to.eql(testData.cart.emptyCart); 
    })

    it("Verify that the user is navigated to 'product details' page when 'Product image' is clicked in the cart page",()=>{
      Home.removeAllProductsFromCart();
      Home.cartPageMethod();
      Home.cartImage.waitForVisible();
      var a1 = Home.cartTitle.getText();
      var convertedText = a1.toLowerCase();
      Home.cartImage.click();
      Home.productTitle.waitForVisible();
      var getTextOnPDP = Home.productTitle.getText()
      var convertTextOnPDP = getTextOnPDP.toLowerCase();
      expect(convertTextOnPDP).to.eql(convertedText)
    //  expect(Home.productTitle.getText()).to.eql(testData.productNames.womensWellnessTxt);
    })

    it("Verify that the user is navigated to 'product details' page when 'Product title' is clicked in the cart page",()=>{
      Home.removeAllProductsFromCart();
      Home.cartPageMethod();
      Home.cartTitle.waitForVisible();
      var a1 = Home.cartTitle.getText();
      var convertedText = a1.toLowerCase();
      Home.cartImage.click();
      Home.productTitle.waitForVisible();
      var getTextOnPDP = Home.productTitle.getText()
      var convertTextOnPDP = getTextOnPDP.toLowerCase();
      expect(convertTextOnPDP).to.eql(convertedText)
      // expect(Home.productTitle.getText()).to.eql(testData.productNames.womensWellnessTxt);
    })

    it("Verify that the user is navigated to 'Checkout' page when 'Checkout' option is clicked in the cart page",()=>{
      Home.removeAllProductsFromCart();
      Home.cartPageMethod();
      browser.scroll(0, 300);
      Home.browserMethod();
      Home.checkoutCart.waitForVisible();
      Home.checkoutCart.click();
      Home.browserMethod();
      Home.headCheckout.waitForVisible();
      expect(Home.headCheckout.getText()).to.eql(testData.titles.headCheckout);
    })
    
  })

describe.skip("Information Page",()=>{
    it("Verify that the user is navigated to 'Home Page', when 'Company Logo' button is clicked on the information page",()=>{
      Home.removeAllProductsFromCart();
      information.informationPage();
      information.infoPageLogo.waitForVisible();
      information.infoPageLogo.click();
      Home.browserMethod();
      Home.bannerName.waitForVisible();
      expect(Home.bannerName.getText()).eql(testData.titles.shopNowText);
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

    it("Verify that the 'Subscription policy' dialog is displayed when user clicks on 'Subscription policy' option on the information page",()=>{
      Home.removeAllProductsFromCart();
      information.informationPage();
      browser.scroll(0, 300);
      Home.browserMethod();
      information.subcriptionPolicy.waitForVisible();
      information.subcriptionPolicy.click();
      information.policyHeader.waitForVisible();
      expect(information.policyHeader.getText()).to.eql(testData.inquiryType.plcyHeader);

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

    it("Verify that the subtotal price of the order is displayed correctly on the information page when the user adds a products to cart and clicks on 'Checkout' button",()=>{
      Home.removeAllProductsFromCart();
      Home.cartPageMethod();
      browser.execute(function() {
        document.querySelector(`.percent-bar-label.float-right`).scrollIntoView()
      }) 
      cartPage.subTotal_Price.waitForVisible();
      var a = cartPage.subTotal_Price.getText();
      var d = a.split(" USD")
      console.log("d", d)
      cartPage.checkOutBtn.waitForVisible();
      cartPage.checkOutBtn.click();
      information.subTotalPrice.waitForVisible();
      expect(information.subTotalPrice.getText()).to.eql(d[0]);
    })

    it("Verify that the total price of the order is displayed correctly on the information page when the user adds a products to cart and clicks on 'Checkout' button",()=>{
      Home.removeAllProductsFromCart();
      Home.cartPageMethod();
      browser.execute(function() {
        document.querySelector(`.percent-bar-label.float-right`).scrollIntoView()
      }) 
      cartPage.total_Price.waitForVisible();
      var x = cartPage.total_Price.getText();
      var y = x.split(" USD")
      cartPage.checkOutBtn.waitForVisible();
      cartPage.checkOutBtn.click();
      information.totalPrice.waitForVisible();
      var x1 = information.totalPrice.getText();
      var y1 = x1.split(" USD")
      expect(y1[0]).to.eql(x);
    })

  // it("Verify that the user is redirected to the payment page when all required details are submitted and the 'Continue to shipping' button is clicked",()=>{
  //   Home.removeAllProductsFromCart();
  //   information.informationPageFullDetails();

  // })
})

describe.skip("Conatct Us",()=>{
  it("Verify that the user is navigated to 'Contact Us' form, when 'Contact Us' button is clicked on the home page",()=>{
    Home.aboutusMethod();
    Home.aboutUsdropdown(4, 6).waitForVisible();
    Home.aboutUsdropdown(4, 6).click();
    Home.contacUs.waitForVisible();
    expect(Home.contacUs.getText()).to.eql(testData.aboutusdData.contactText);
  })

  it("Verify that the following dropdown options are displayed in the 'Inquiry type' filed on the 'Contact Us' form. Complaints, My Order, General/Product, inquires Where to Buy? Ask the Nutritionist?",()=>{
    contactUs.contactUsPage();
  })
  
  it("Verify that the following fields are displayed appropriately when user selects the 'Complaints' inquiry type in the contact form. Complaint type, Store Purchased, Lot or Product Name, Subject, Message",()=>{
   contactUs.contactUsPage();
   contactUs.inquiryDropDown(2).waitForVisible();
   contactUs.inquiryDropDown(2).click();
   contactUs.complaintType.waitForVisible();
   expect(contactUs.complaintType.getText()).to.eql(testData.inquiryType.complaintType);
  })

  it("Verify that the following fields are displayed appropriately when user selects the 'My Order' inquiry type in the contact form. Inquiry type, Order Number, Subject, Message",()=>{
    contactUs.contactUsPage();
    contactUs.inquiryDropDown(3).waitForVisible();
    contactUs.inquiryDropDown(3).click();
    expect(contactUs.inquiryType.getText()).to.eql(testData.inquiryType.inquiryfield);
  })

  it("Verify that the following fields are displayed appropriately when user selects the 'General/Product Inquiries' inquiry type in the contact form. Store Purchased, Lot# or Product Name, Subject, Message",()=>{
    contactUs.contactUsPage();
    contactUs.inquiryDropDown(4).waitForVisible();
    contactUs.inquiryDropDown(4).click();
    expect(contactUs.storePurchased.getText()).to.eql(testData.inquiryType.storePurchased);
  })

  it("Verify that the following fields are displayed appropriately when user selects the 'Where to Buy' inquiry type in the contact form. Lot# or Product Name, Subject, Message",()=>{
    contactUs.contactUsPage();
    contactUs.inquiryDropDown(5).waitForVisible();
    contactUs.inquiryDropDown(5).click();
    contactUs.whereToBuyLink.waitForVisible();
    expect(contactUs.whereToBuyLink.getText()).to.eql(testData.inquiryType.contactPgWhereToBuyLink);
  })

  it("Verify that the following fields are displayed appropriately when user selects the 'Ask a Nutritionist' inquiry type in the contact form. Lot# or Product Name, Subject, Message",()=>{
    contactUs.contactUsPage();
    contactUs.inquiryDropDown(6).waitForVisible();
    contactUs.inquiryDropDown(6).click();
    expect(contactUs.lotNumber.getText()).to.eql(testData.inquiryType['lot#']);
  })

  it("Verify that the appropriate error message is displayed when user did not specifies all the details and clicks on submit ",()=>{
    Home.aboutusMethod();
    Home.aboutUsdropdown(4, 6).waitForVisible();
    Home.aboutUsdropdown(4, 6).click();
    Home.contacUs.waitForVisible();
    expect(Home.contacUs.getText()).to.eql(testData.aboutusdData.contactText);
    browser.scroll(0,1300);
    Home.browserMethod();
    contactUs.submitBtn.waitForVisible();
    contactUs.submitBtn.click();

  })
})

describe.skip("Footer",()=>{
  it("Verify that the 'Accept Cookies' popup is closed when user clicks on 'Accept Cookies/Do Not Sell My Personal Information' option on the popup",()=>{
    browser.url(testData.naturemade.url);
    browser.scroll(`.footer_legal ul li:nth-child(1)`);
    Home.browserMethod();
    Home.acceptcookieepopup.isVisible();
    Home.acceptcookieepopup.click();
    Home.bannerName.waitForVisible();
    expect(Home.bannerName.getText()).to.eql(testData.titles.shopNowText);
  })

  it("Verify that the user is able to subscribe successfully when the valid email is entered in 'Sign up for the newsletter' section on the footer",()=>{
    Home.homepageMethod();
    browser.scroll(".button.button-secondary");
    browser.pause(5000);
    if(Home.subscribeCancelIcon.isVisible()) {
      Home.subscribeCancelIcon.click();
    }
    footer.subscribeFld.waitForVisible();
    footer.subscribeFld.click();
    footer.subscribeFld.setValue(testData.footer.email);
    footer.submitButton.waitForVisible();
    footer.submitButton.click();
    if(Home.subscribeCancelIcon.isVisible()) {
      Home.subscribeCancelIcon.click();
    }
    footer.subscribeSuccess.waitForVisible();
    expect(footer.subscribeSuccess.getText()).to.eql(testData.footer.sucessText);
  })

}) 

describe.skip("Wellblends - Finder tool",()=>{
   it("Verify that the 'My issue is', 'I need' and  'I'd Like to' buttons are displayed in the finder tool section",()=>{
      Home.homepageMethod();
      Home.wellBlendsHeader.waitForVisible();
      Home.wellBlendsHeader.click();
      // browser.moveToObject(`//*[@class= 'main-nav-list']/li[5] //*[@class='main-nav-parent-item']`);
      Home.wellBlendsDropdown(5, 1).waitForVisible();
      Home.wellBlendsDropdown(5, 1).click();
      if(Home.subscribeCancelIcon.isVisible()){
        Home.subscribeCancelIcon.click();
      }
      browser.scroll(0, 500);
      productListPage.wellblndsFinderToolBtns(1).waitForVisible();
      expect(productListPage.wellblndsFinderToolBtns(1).getText()).to.eql(testData.wellblendspagedeatails.myIssueIsTxt);
      productListPage.wellblndsFinderToolBtns(2).waitForVisible();
      expect(productListPage.wellblndsFinderToolBtns(2).getText()).to.eql(testData.wellblendspagedeatails.iNeedTxt);
      productListPage.wellblndsFinderToolBtns(3).waitForVisible();
      expect(productListPage.wellblndsFinderToolBtns(3).getText()).to.eql(testData.wellblendspagedeatails.idLikeToTxt);

   })

   it("Verify that the user is able to sort the products by selecting the 'My issue is'  filter on the wellblends page",()=>{
      Home.homepageMethod();
      Home.wellBlendsHeader.waitForVisible();
      Home.wellBlendsHeader.click();
      if(Home.subscribeCancelIcon.isVisible()){
        Home.subscribeCancelIcon.click();
      }
      Home.wellBlendsDropdown(5, 1).waitForVisible();
      Home.wellBlendsDropdown(5, 1).click();
      browser.execute(function() {
        document.querySelector(`.wellblends-scroll-block__subtitle:nth-child(3)`).scrollIntoView()
      })  
      browser.pause(2000);
      productListPage.finderToolBtnDownArrows(1).waitForVisible();
      productListPage.finderToolBtnDownArrows(1).click();
      productListPage.myIssueCheckboxes(1).waitForVisible();
      // // expect(productListPage.myIssueCheckboxes(1).getText()).to.eql(testData.wellblendspagedeatails.troubleFallingaSleepTxt);
      productListPage.myIssueCheckboxes(1).click();
      productListPage.myIssueCheckboxes(2).waitForVisible();
      // expect(productListPage.myIssueCheckboxes(2).getText()).to.eql(testData.wellblendspagedeatails.fallingBckToSlpTxt);
      productListPage.myIssueCheckboxes(2).click();
      browser.scroll(0, 50);
      productListPage.findertoolSortedProdctsTtle(1).waitForVisible();
      expect(productListPage.findertoolSortedProdctsTtle(1).getText()).to.eql(testData.wellblendspagedeatails.wlblndsSlpRevwStreeTxt);
      productListPage.findertoolSortedProdctsTtle(2).waitForVisible();
      expect(productListPage.findertoolSortedProdctsTtle(2).getText()).to.eql(testData.wellblendspagedeatails.wellblendSleepLongrProdTXt);
      productListPage.findertoolSortedProdctsTtle(3).waitForVisible();
      expect(productListPage.findertoolSortedProdctsTtle(3).getText()).to.eql(testData.wellblendspagedeatails.wellblendsFallSleepProdTxt);
   });

   it("Verify that the 'Clear filter' option is displayed when the user selects the checkbox",()=>{
      Home.homepageMethod();
      Home.wellBlendsHeader.waitForVisible();
      Home.wellBlendsHeader.click();
      if(Home.subscribeCancelIcon.isVisible()){
        Home.subscribeCancelIcon.click();
      }
      Home.browserMethod();
      Home.wellBlendsDropdown(5, 1).waitForVisible();
      Home.wellBlendsDropdown(5, 1).click();
      browser.execute(function() {
        document.querySelector(`.wellblends-scroll-block__subtitle:nth-child(3)`).scrollIntoView()
      })  
      browser.pause(2000);
      if(Home.newRatingPopupCancelIcon.isVisible()) {
        Home.newRatingPopupCancelIcon.click();
      }
      productListPage.finderToolBtnDownArrows(1).waitForVisible();
      productListPage.finderToolBtnDownArrows(1).click();
      browser.pause(2000);
      productListPage.myIssueCheckboxes(1).waitForVisible()
      productListPage.myIssueCheckboxes(1).click();
      productListPage.finderToolClearFltrLink.waitForVisible();
      expect(productListPage.finderToolClearFltrLink.getText()).to.eql(testData.wellblendspagedeatails.clearFilterTxt)
   })

   it("Verify that the user is able to sort the products by selecting all the 'I'd Like To ' filters checkboxes ",()=>{
      Home.homepageMethod();
      Home.wellBlendsHeader.waitForVisible();
      Home.wellBlendsHeader.click();
      if(Home.subscribeCancelIcon.isVisible()){
        Home.subscribeCancelIcon.click();
      }
      Home.wellBlendsDropdown(5, 1).waitForVisible();
      Home.wellBlendsDropdown(5, 1).click();
      browser.execute(function() {
        document.querySelector(`.featured-collections__wrapper.cell.large-4:nth-child(1) button`).scrollIntoView()
      })  
      // browser.scroll(0, 500);
      if(Home.newRatingPopupCancelIcon.isVisible()){
        Home.newRatingPopupCancelIcon.click();
      }
      browser.pause(2000);
      productListPage.finderToolBtnDownArrows(3).waitForVisible();
      productListPage.finderToolBtnDownArrows(3).click();
      browser.pause(1000);
      productListPage.iDLikeToCheckboxes(2).waitForVisible();
      productListPage.iDLikeToCheckboxes(2).click();
      browser.pause(1000);
      productListPage.findertoolSortedProdctsTtle(1).waitForVisible();
      expect(productListPage.findertoolSortedProdctsTtle(1).getText()).to.eql(testData.wellblendspagedeatails.wellblendSleepLongrProdTXt);
      // productListPage.findertoolSortedProdctsTtle(2).waitForVisible();
      // expect(productListPage.findertoolSortedProdctsTtle(2).getText()).to.eql(testData.wellblendspagedeatails.wellblendsFallSleepProdTxt)
   })

   it("Verify that appropriate products are displayed when the user selects the 'Price (low)' sort by option ",()=>{
      Home.homepageMethod();
      Home.wellBlendsHeader.waitForVisible();
      Home.wellBlendsHeader.click();
      if(Home.subscribeCancelIcon.isVisible()){
        Home.subscribeCancelIcon.click();
      }
      Home.wellBlendsDropdown(5, 1).waitForVisible();
      Home.wellBlendsDropdown(5, 1).click();
      browser.execute(function() {
        document.querySelector(`#featured-collections .grid-padding-x div:nth-child(3) button`).scrollIntoView()
      })  
      // var a = productListPage.finderToolProdPrice(1).getText();
      productListPage.featureField.waitForVisible();
      productListPage.featureField.click();
      browser.pause(1000);
      productListPage.sortByDropdowns(2).waitForVisible();
      productListPage.sortByDropdowns(2).click();
      productListPage.finderToolProdPrice(1).waitForVisible();
      expect(productListPage.finderToolProdPrice(1).getText()).to.eql(testData.wellBlendsData.lowPricevalues);

   })

   it("Verify that the applied filter is removed when the user clicks the 'Clear Filter' link on the Finder solution page",()=>{
    // Home.homepageMethod();
      Home.wellBlendsHeader.waitForVisible();
      Home.wellBlendsHeader.click();
      Home.browserMethod();
      if(Home.subscribeCancelIcon.isVisible()){
        Home.subscribeCancelIcon.click();
      }
      // Home.wellBlendsDropdown(5, 1).waitForVisible();
      // Home.wellBlendsDropdown(5, 1).click();
      browser.execute(function() {
        document.querySelector(`.wellblends-scroll-block__subtitle:nth-child(3)`).scrollIntoView()
      })  
      productListPage.finderToolClearFltrLink.waitForVisible();
      productListPage.finderToolClearFltrLink.click();
      if(Home.newRatingPopupCancelIcon.isVisible()){
        Home.newRatingPopupCancelIcon.click();
      }
      browser.pause(2000);
      productListPage.finderToolBtnDownArrows(1).waitForVisible();
      productListPage.finderToolBtnDownArrows(1).click();
      if(Home.newRatingPopupCancelIcon.isVisible()){
        Home.newRatingPopupCancelIcon.click();
      }
      browser.pause(2000);
      productListPage.myIssueCheckboxes(2).waitForVisible()
      productListPage.myIssueCheckboxes(2).click();
      productListPage.finderToolClearFltrLink.waitForVisible();
      expect(productListPage.finderToolClearFltrLink.getText()).to.eql(testData.wellblendspagedeatails.clrFltrTxt)
      if(Home.newRatingPopupCancelIcon.isVisible()){
        Home.newRatingPopupCancelIcon.click();
      }
      productListPage.finderToolClearFltrLink.waitForVisible();
      productListPage.finderToolClearFltrLink.click();
      productListPage.myIssueCheckboxes(2).waitForVisible()
      expect(productListPage.myIssueCheckboxes(2).isVisible()).to.eql(true);
    })

   it("Verify that the user is able to sort the products by selecting the 'I Need' filter on the well blends page",()=>{
    Home.homepageMethod();
    Home.wellBlendsHeader.waitForVisible();
    Home.wellBlendsHeader.click();
    if(Home.subscribeCancelIcon.isVisible()){
    Home.subscribeCancelIcon.click();
    }
    Home.browserMethod();
    Home.wellBlendsDropdown(5, 1).waitForVisible();
    Home.wellBlendsDropdown(5, 1).click();
    browser.execute(function() {
      document.querySelector(`.featured-collections__wrapper.cell.large-4:nth-child(1) button`).scrollIntoView()
    })  
    // browser.scroll(0, 2500);
    browser.pause(3000);
    if(Home.newRatingPopupCancelIcon.isVisible()){
      Home.newRatingPopupCancelIcon.click();
    }
    productListPage.finderToolBtnDownArrows(2).waitForVisible();
    productListPage.finderToolBtnDownArrows(2).click();
    browser.pause(1000);
    productListPage.iNeedCheckboxes(1).waitForVisible();
    productListPage.iNeedCheckboxes(1).click();
    browser.scroll(0, 50);
    browser.pause(1000);
    productListPage.findertoolSortedProdctsTtle(1).waitForVisible();
    expect(productListPage.findertoolSortedProdctsTtle(1).getText()).to.eql(testData.wellblendspagedeatails.wellblendSleepLongrProdTXt);
    productListPage.findertoolSortedProdctsTtle(3).waitForVisible();
    expect(productListPage.findertoolSortedProdctsTtle(3).getText()).to.eql(testData.wellblendspagedeatails.wlblndsSlpAndRecvGummiesTxt)
   })

})

describe.skip("Favourite icon and Marketing cards",()=>{
    it("Verify that the user is navigated to 'Create Account' page when user clicks on 'Favourite' icon on the homepage without login",()=>{
      browser.url(testData.naturemade.url);
      // browser.windowHandleFullscreen();
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
        Home.browserMethod();
        if(Home.cancelIconOnPrevCartPopUP.isVisible){
          Home.cancelIconOnPrevCartPopUP.click();
        }
        Home.emptyHeartIcon.waitForVisible();
        expect(Home.emptyHeartIcon.isVisible()).to.eql(true);
        Home.vitaminsAndSupplemntsHeadrMenuLink2();
        browser.scroll(".sub-collection-template-title");
        Home.browserMethod();
        productListPage.favIcons(2).waitForVisible
        productListPage.favIcons(2).click();
        Home.browserMethod();
        productListPage.favIcons(3).waitForVisible
        productListPage.favIcons(3).click();
        Home.fullHeartIcon.waitForVisible();
        expect(Home.fullHeartIcon.isVisible()).to.eql(true);
        Home.browserMethod();
        expect(Home.emptyHeartIcon.isVisible()).to.eql(true);
  
        // Home.favIcon.waitForVisible();
        // expect( Home.favIcon.isVisible()).to.eql(true)
    })
  
    it("Verify that the Marketing card is displayed on the 'bestsellers section on the' Home Page",()=>{
      Home.homepageMethod();
      Home.browserMethod();
      //Home.homeBestSellers.scroll();
      browser.execute(function() {
        document.querySelector(`.hero-grid-container:nth-child(1) .button.button-primary.button-wb`).scrollIntoView()
      })    
      Home.browserMethod();
      Home.homeBestSellersProducts.waitForVisible();
      Home.homeBestSellersProducts.click();
      Home.bestSellerMarketingCardImg.waitForVisible();
      Home.bestSellerMarketingCardImg.click();
      Home.marketSubscriptionPgHeading.waitForVisible();
      expect(Home.marketSubscriptionPgHeading.getText()).to.eql(testData.heading.marketingSubsPgHeading)
    })
  
    it("Verify that the Marketing card is displayed on the 'New products' section on the 'Home Page'",()=>{
      Home.homepageMethod();
      Home.browserMethod();
      //Home.homeBestSellers.scroll();
      if(Home.newRatingPopupCancelIcon.isVisible()){
        Home.newRatingPopupCancelIcon.click();
      }
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
  
    it("Verify that the Marketing card is displayed on the 'You May Also Like' section on the PDPs",()=>{
      Home.vitaminsAndSupplemntsHeadrMenuLink1();
      browser.execute(function() {
        document.querySelector(`.margin-vertical-2`).scrollIntoView()
      })       
      browser.pause(9000);
      browser.scroll(10, 200)
      productDetailsPage.youMayAlsoSecMarketCardTitle.waitForVisible();
      expect(productDetailsPage.youMayAlsoSecMarketCardTitle.getText()).to.eql(testData.productDetailsPage.getFreeShippingTxt)
    })
  
  
})

describe.skip("2 Pack subscription",()=>{
    it("Verify that the 'Subscribe to 2-pack' sections is displayed when user selects the products with an S+S price <$15 and >$9.71",()=>{
        Home.homepageMethod();
        Home.vands1Method();
        browser.scroll(0, 500);
        if(Home.subscribeCancelIcon.isVisible()){
          Homes.subscribeCancelIcon.click();
        }
        productListPage.productListPageTitles(5).waitForVisible();
        productListPage.productListPageTitles(5).click();
        productDetailsPage.subscribeToTwoPackTxt.waitForVisible();
        expect(productDetailsPage.subscribeToTwoPackTxt.getText()).to.eql(testData.productDetailsPage.subscribeToTwoPckTxt);
        productDetailsPage.saveTenPercntPlusFreeShpng.waitForVisible();
        expect(productDetailsPage.saveTenPercntPlusFreeShpng.getText()).to.eql(testData.productDetailsPage.saveTenPercFreeShipngTxt);
     })

    it("Verify that the '2-Pack' text is displayed on the cart when user sets the purchase type to 'Subscribe to 2-pack' and clicks on 'Add to Cart' button on the product details page",()=>{

    })
})
 