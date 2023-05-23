import Page from "../page-objects/page.js";
import testData from "../constants/testData.json";
import Login from "./login.page.js";
import SignUp from "./signup.page";
import { expect } from 'chai';
import Shipping from "./shipping.page";
import Landing from "./account.page";
import productListPage from '../page-objects/product.list.page';
import productDetailsPage from "../page-objects/product.details.page";
// import { waituntilisvisible } from "../page-objects/functions";
import { get } from "browser-sync";
import cartPage from "./cart.page.js";
//import { refStructEnhancer } from "mobx/lib/types/modifiers";

var getFirstName;
var getLastName;
var getEmail;



class Home extends Page{

    get EnterUsingPwd() {
        return $(".modal__toggle-open.password-link.link.underlined-link");
    }

    get pwdEnterField() {
        return $("#Password");
    }

    get enterBtn(){
        return $(".password-button.button.button--outline");
    }

    get newRatingPopupCancelIcon() {
        return $(".QSIWebResponsiveDialog-Layout1-SI_1k1AbOz7jMroJ1d_close-btn-container:nth-child(1) button")
    }

    newHeaderMenus(index) {
        return $(`.main-nav-wrapper.hide>div>ul>li:nth-child(${index}) button`)
    }

    productsHeadersubmenus(index) {
        return $(`.main-nav-wrapper.hide>div>ul>li:nth-child(1)>div>div>div:nth-child(1) ul li:nth-child(${index}) a`)
    }

    alphabetLetters(index) {
        return $(`div>ul>li:nth-child(1)>div>div .main-nav_a-z.is-active ul:nth-child(1) li:nth-child(${index}) a`)
    }

    aTOZRelatedProducts(index) {
        return $(`div .main-nav-grandchild-links:nth-child(2)>div:nth-child(${index}) li:nth-child(${index}) a`)
    }

    bybenefitssubmenuLinks(index){
        return $(`.main-nav-grandchild-links-wrapper.menu-with-icons ul li:nth-child(${index}) a`)
    }

    gummiesheaderLinks(index){
        return $(`.main-nav-grandchild-links-wrapper.is-active ul li:nth-child(${index}) a`);
    }



    devHomepageMethod(){
         this.forDevUrlLaunch();
         browser.windowHandleFullscreen();
         this.browserMethod();
         if(this.acceptcookieepopup.isVisible()){
         this.acceptcookieepopup.click();
         }
         this.browserMethod();
         if(this.subscribeCancelIcon.isVisible()){
         this.subscribeCancelIcon.click();
         }
         this.browserMethod();
         this.bannerName.waitForVisible();
         expect(this.bannerName.getText()).eql(testData.titles.shopNowText);
    }
    

    forDevUrlLaunch() {
        browser.url(testData.naturemade.urlForDev);
        this.browserMethod();
        // this.subscribeCancelIcon.isVisible();
        // this.subscribeCancelIcon.click();
        this.browserMethod();
        if(testData.naturemade.urlForDev === true) {
            this.EnterUsingPwd.waitForVisible();
            this.EnterUsingPwd.click();
            this.pwdEnterField.waitForVisible();
            this.pwdEnterField.click();
            this.pwdEnterField.setValue([testData.password.setpassword]);
            this.enterBtn.waitForVisible();
            this.enterBtn.click();
        }
        else {
                // browser.url(testData.naturemade.url);
                // browser.windowHandleFullscreen();
                if(this.acceptcookieepopup.isVisible()){
                this.acceptcookieepopup.click();
                }
                this.browserMethod();
                if(this.subscribeCancelIcon.isVisible()){
                this.subscribeCancelIcon.click();
                }
                this.browserMethod();
                this.bannerName.waitForVisible();
                expect(this.bannerName.getText()).eql(testData.titles.shopNowText);
           }

        
    }


    

    get secondShopNowLink() {
        return $(".hero-card:nth-child(2) .button.button-text-link")
    }

    get companyLogo1(){
        return $(".header-logo-wrapper .header__heading-link.link.link--text.focus-inset");
    }

    get acceptcookieepopup(){
        return $("#onetrust-button-group #onetrust-accept-btn-handler");
    }
    get emailSection(){
        return $(".section-header");
    }
    get emailCancelIcon(){
        return $(".fancybox-button.fancybox-close-small");
    }
    get whereToBuyLink(){
        return $(".header__inline-menu ul li:nth-child(1) span:nth-child(1)");
    }
    get signinLink(){
        return $(" .list-menu li:nth-child(2) a");
    }
    get forgottPasswordLink(){
        return $("#customer_login .text-link")
    }
    get clickHereLink(){
        return $("#customer_login a:nth-child(10)")
    }

    get requestActInviteTitle() {
        return $(".rc_title-bar__title h2");
    }
    get GetsubscriptionBtn(){
        return $(".btn.btn-primary.btn--primary.button")
    }
    get GetsubscriptionEmail(){
        return $("#customer_email")
    }

    get recoverEmail(){
        return $("#RecoverEmail")
    }
    get recoverEmailError(){
        return $("#RecoverEmail-email-error")
    }
    get resetYourPasswordTxt(){
        return $(".customer.login.text-center #recover h1")
    }
    get submitBtn(){
        return $(" button.button-primary:nth-child(4)")
    }
    get createAccountLink(){
        return $(".button.button-text-link:nth-child(8)")
    }
    get createAcctHeading(){
        return $(".h3.text-center")
    }
    get firstName(){
        return $("#RegisterForm-FirstName")
    }
    get lastName(){
        return $("#RegisterForm-LastName")
    }
    get eMail(){
        return $("#RegisterForm-email")
    }
    get password(){
        return $("#RegisterForm-password")
    }
    get createBtn(){
        return $("#create_customer .button.button-primary")
    }
    get accountTxt(){
        return $(".customer.account h1")
    }
    get logOutLink(){
        return $(".customer.account  span")
    }
    myAccount(index){
        return $(`.header__inline-menu ul li:nth-child(${index})`);
    }
    get loginPage(){
        return $(".customer.login #login");
    }
    get logout(){
        return $(".customer.account div:nth-child(1) a");
    }    
    get email(){
        return $("#customer_login #CustomerEmail");
    }
    get emailRequired(){
        return $(".nm__field:nth-child(4) .required")
    }
    get password(){
        return $("#customer_login #CustomerPassword");
    }
    get passwordRequired(){
        return $(".nm__field:nth-child(5) .required")
    }
    get InvalidErrorMsg(){
        return $("#customer_login li")
    }

    get InvalidErrorMsg() {
        return $("#customer_login ul li");
    }
    get emailErrorMsg() {
        return $("#customer_login #LoginForm-email-error")
    }

    get emailFldErrorMsg() {
        return $("#form-errors>ul>li:nth-child(2)");
    }

    get pwdFldErrorMsg() {
        return $("#form-errors>ul>li:nth-child(1)");
    }

    get findaStorelink(){
        return $(`//*[@class='header__inline-menu']//*[text()='FIND A STORE']`);
    }
    get passwordField(){
        return $("#customer_login #CustomerPassword");
    }

    get whereToBuyHeadingTxt(){
        return $(".margin-bottom-1.where-to-buy__heading");
    }

    get locationSearchField(){
        return $(`input[class="ps-map-location-textbox"]`);
    }

    get searchClick(){
        return $(`.ps-map-location-button.ps-float-box`);
    }

    get dialogCancelIcon(){
        return $(".ps-header-container .ps-lightbox-close:nth-child(1)");
    }
    
    get signin(){
        return $("#customer_login button");
    }

    get accountTitle(){
        return $(".customer.account h1")
    }
    get passwordBtn(){
        return $(".password-modal.modal");
    }
    get password(){
        return $("[Type='password']");
    }

    get bannerName(){
        return $(".button.button-primary.margin-bottom-0.home-mason-button");
    }

    get search(){
        return $(".header.grid-container #Search-In-Template");
    }

    get searchBtn(){
        return $(".header__inline-menu li:nth-child(4) .search__button.field__button svg");
    }

    get searchResultTitle() {
        return $("#search-title");
    }
    
    footerLegalTermsLinks(index) {
        return $(`.footer_legal > div ul li:nth-child(${index}) a`)
    }

    searchPage(index){
         return $(`#search-results-list #tab-1 .ais-InfiniteHits>ol>li:nth-child(${index})`);
     }

     searchPageProdTitle(index) {
         return $(`#search-results-list #tab-1 .ais-InfiniteHits>ol>li:nth-child(${index}) .item-title`)
     }

     get productTitle(){
        return $(".product__title.show-for-medium");
     }
     
     get preHeader(){
        return $(".preheader");
    }
     get cart(){
        return $(".header.grid-container .header__icons");
    }
    get cartHead(){
         return $(".cart-preview__heading.caption-large");
    }
    get createAccount(){
         return $(`#customer_login .button.button-text-link`);
    }
    get favCreateAccountHead(){
         return $(".h3.text-center");
    }

    get viewCart(){
         return $("#cart-notification-button");
    }

    get cartHead(){
        return $(`.title.title--primary`);
    }
    
    get cartCancelbtn(){
        return $("#cart-preview .cart-preview__header button");
    }

    get continueShopping(){
        return $(".cart-preview__links .button.button-text-link.button-label");
    }

    get checkout(){
        return $("#cart-preview:nth-child(2)");
    }

    get checkOutBtnInCartDialog() {
        return $("#cart-preview-button"); //Dev
    }

    get emptyCart(){
        return $(".button.button-primary.button--full-width:nth-child(2)");
    }

    get addtoCart(){
        return $(".product-form__buttons");
    }

    get cartCheckout(){
        return $(".cart-notification__links #cart button");
    }

    get cartView(){
        return $("#cart-notification-button");
    }
    
    get cartDelete(){
        return $(`#Remove-1 a`);
    }

    cartDeleteBtns(index) {
        return $(`div:nth-child(1) form tbody tr:nth-child(${index}) td:nth-child(3) a`)
    }

    get cartPlus(){
        return $(`//*[@name="plus"]`);
    }

    get cartQuantity(){
        return $(`.quantity__input`);   
    }

    get cartMinus(){
        return $(`//*[@name="minus"]`);
    }

    get cartImage(){
        return $(`.cart-item__image`);
    }

    get cartTitle(){
        return $(`.cart-item__name.break.small-hide`);
    }

    get cartContinueShopping(){
        return $(`.title-wrapper-with-link.is-full-width .button.button-text-link`);
    }

    get checkoutCart(){
        return $(`.cart__ctas #checkout`);
    }

    get headCheckout(){
        return $(".section__header #main-header");
    }

    get vitaminsandSupplements(){
         return $(`#desktop-original-menu .main-nav-list>li:nth-child(1) button`);
     }

    healthImg(index){
         return $(`.grid-x.grid-padding-x.health-goals.margin-top-3 > div:nth-child(${index}) img`);
     }
    healthTitle(index){
        return $(`.grid-x.grid-padding-x.health-goals.margin-top-3 > div:nth-child(${index}) p`);
    }
    
    get backedByScience(){
        return $(`.health-goals-headline`);
    }
    get pageHead(){
         return $(`.cell.medium-6.text-left.has-dark-gray-background.content_wrapper h1`);
    }

    get vitamins(){
        return $(`li:nth-child(1) > div > div > div.main-nav-child-links-wrapper > ul > li:nth-child(1) > a`);
    }
    get multiVitamins(){
        return $(`div.main-nav-grandchild-links-wrapper.is-active > ul > div:nth-child(1) > li:nth-child(1)`);
    }
    get bestSeller(){
        return $(".is-active:nth-child(1)")
    }
    get supplements(){
        return $('li:nth-child(1) > div > div > div.main-nav-child-links-wrapper > ul > li:nth-child(2) > a');
        }

    get specialty(){
        return $('li:nth-child(1) > div > div > div.main-nav-child-links-wrapper > ul > li:nth-child(3) > a');
        }

    get bestSellers(){
        return $('li:nth-child(1) > div > div > div.main-nav-child-links-wrapper > ul > li:nth-child(4) > a');
        }
    
    get viewBestsellers(){
        return $('.main-nav-grandchild-links-wrapper.is-active .view-all-cta.button.button-text-link-2')    
    }

    get bestSellers() {
        return $('li:nth-child(1) > div > div > div.main-nav-child-links-wrapper > ul > li:nth-child(4) > a');
        }

    bestSellerBadge(index) {
        return $(`.main-nav-grandchild-links-wrapper.is-active .menu-cta-product-item-wrapper:nth-child(${index}) span`)
    }

    bestSellerProdImg(index) {
        return $(`.main-nav-grandchild-links-wrapper.is-active .menu-cta-product-item-wrapper:nth-child(${index}) img`)
    }

    bestSellerProdTitles(index) {
        return $(`.main-nav-grandchild-links-wrapper.is-active .menu-cta-product-item-wrapper:nth-child(${index}) p`)
    }

    bestSellerBuyNowBtn(index) {
        return $(`.main-nav-grandchild-links-wrapper.is-active .menu-cta-product-item-wrapper:nth-child(${index}) .button`)
    }
    
    get viewAllBestSellersLink(){
        return $('.main-nav-grandchild-links-wrapper.is-active .view-all-cta.button')    
    }

    get newProducts(){
        return $('li:nth-child(1) > div > div > div.main-nav-child-links-wrapper > ul > li:nth-child(5) > a');
    }

    newBadges(index) {
        return $(`.main-nav-grandchild-links-wrapper.is-active .menu-cta-product-item-wrapper:nth-child(${index}) span`)  
    } 
    
    newProductsProdImg(index) {
        return $(`.main-nav-grandchild-links-wrapper.is-active .menu-cta-product-item-wrapper:nth-child(${index}) img`)
    }

    newProductsProdTitles(index) {
        return $(`.main-nav-grandchild-links-wrapper.is-active .menu-cta-product-item-wrapper:nth-child(${index}) p`)
    }

    newProductsBuyNowBtn(index) {
        return $(`.main-nav-grandchild-links-wrapper.is-active .menu-cta-product-item-wrapper:nth-child(${index}) .button`)
    }

    get shopAll() {
        return $("li:nth-child(1) > div > div > div.main-nav-child-links-wrapper > ul > li:nth-child(6) > a")
    }

    get discoverMensMultivitamins() {
        return $(".main-nav-grandchild-links-wrapper.is-active .button")
    }

    vitaminsSublinks(index1, index2){
        return $(`div.main-nav-grandchild-links-wrapper.is-active > ul > div:nth-child(${index1}) > li:nth-child(${index2})`)
    }
    get kidsvitaminstext(){
        return $(`.cell.medium-6.text-left.has-dark-gray-background.content_wrapper h1`);
    }

    get immunehealthHead(){
        return $(`.cell.medium-12.margin-vertical-2 h3`);
    }

    get bundlesText() {
        return $(".static-image-hero.is-small h1");
    }

    get wellBlendsTitle(){
        return $(`.wellblends-collection-hero__content h1`);
    }
    get omegaText(){
        return $(`.product__title.show-for-medium`);
    }
    
    get healthNeeds(){
        return $(`#desktop-original-menu .main-nav-list>li:nth-child(2) button`);
    }

    get education(){
    return $(`#desktop-original-menu .main-nav-list>li:nth-child(3) button`);
    }

    get aboutUs(){
        return $(`//*[@class= 'main-nav-list']/li[4] //*[@class='main-nav-parent-item']`);
    }

    get wellBlendsHeader(){
        return $(`//*[@class= 'main-nav-list']/li[5] //*[@class='main-nav-parent-item']`)
    }

    get featuredArticle(){
        return $(`[id="related-resources"] .cell.medium-12 .margin-bottom-1`);
    }

    get clinicalStudies(){
        return $(`[id="related-resources"] .cell.medium-12 .margin-bottom-1`);
    }

    get meetourExperts(){
        return $(`//*[@class="cell medium-9"]`);
    }

    get quiz(){
        return $(`//*[@class="row d-flex align-items-start"]//*[text()="NATURE MADE QUIZ"]`);
    }

    get faq(){
        return $(`.cell.large-12 .margin-bottom-1`);
    }
    get contacUs(){
         return $(`.margin-bottom-1.h1`);
    }

    get balanceWellnessText(){
        return $(`.wellblends-scroll-block__title:nth-child(1)`);
    }
    
    healthNeedsdropdown(index1, index2){
     return $(`li:nth-child(${index1}) > div > div > div.main-nav-child-links-wrapper > ul > li:nth-child(${index2}) > a`)
    }

    educationDropdown(index1, index2){
        return $(`li:nth-child(${index1}) > div > div > div.main-nav-child-links-wrapper > ul > li:nth-child(${index2})`);
    }

    aboutUsdropdown(index1, index2){
        return $(`li:nth-child(${index1}) > div > div > div.main-nav-child-links-wrapper > ul > li:nth-child(${index2}) > a`);
    }

    wellBlendsDropdown(index1, index2){
        return $(`li:nth-child(${index1}) > div > div > div.main-nav-child-links-wrapper > ul > li:nth-child(${index2}) > a`);
    }

    get homeBestSellersProducts(){
        return $(`.tab-customize button:nth-child(3)`);
    }

    get homeBestSellers(){
        return $(`#tab-cus-active`);
    }

    get bestSellersTag(){
        return $(`#custom-tab-best-sellers ul li:nth-child(2) .item-container .item-status.has-gray-background`);
    }

    productImgs(index){
        return $(`#custom-tab-best-sellers ul li:nth-child(${index}) .item-container img`);
    }

    productTitleTxt1(index){
        return $(`#custom-tab-best-sellers ul li:nth-child(${index}) .item-title a`);
    }

    productRatings(index){
        return $(`.glide-best-sellers li:nth-child(${index}) .rating-star`);
    }

    bestSellerBuyNowBtns(index){
        return $(`.glide-best-sellers li:nth-child(${index}) .product-form__buttons a`);
    }

    get homenewProducts(){
        return $(`.tab-customize button:nth-child(2)`);
    }

    newProductImages(index){
        return $(`#custom-tab-new-products ul li:nth-child(${index}) img`);
    }

    newProductTitleTxt(index){
        return $(`#custom-tab-new-products ul li:nth-child(${index}) .item-title a`);
    }

    newproductRatings(index){
       return $(`#custom-tab-new-products ul li:nth-child(${index}) .rating-star.color-icon-text `);
    }

    buyNowBtns(index){
         return $(`#custom-tab-new-products ul li:nth-child(${index}) .button.button-primary`)
    }

    get bundleTab() {
        return $(`.tab-customize button:nth-child(4)`);
    }
    
    bundleProdImgs(index) {
        return $(`#custom-tab-bundles ul li:nth-child(${index}) img`)
    }

    bundleProdTitles(index){
        return $(`#custom-tab-bundles ul li:nth-child(${index}) .item-title a`);
    }

    bundlesProdRatings(index){
       return $(`#custom-tab-bundles ul li:nth-child(${index}) .margin-bottom-1 a .bv_stars_button_container `);
    }

    bunldeProdBuyNowBtns(index){
         return $(`#custom-tab-bundles ul li:nth-child(${index}) .button.button-primary`)
    }

    get recentlyViewedTab() {
        return $(".tab-customize button:nth-child(4)")
    }

    recentlyViewedProdImgs(index) {
        return $(`#custom-tab-recently-viewed ul li:nth-child(${index}) img`)
    }

    recentlyViewedProdTitles(index){
        return $(`#custom-tab-recently-viewed ul li:nth-child(${index}).item-title a`);
    }

    recentlyViewedProdRatings(index){
       return $(`#custom-tab-recently-viewed ul li:nth-child(${index}) .margin-bottom-1 a .bv_stars_button_container `);
    }

    recentlyViewedProdBuyNowBtns(index){
         return $(`#custom-tab-recently-viewed ul li:nth-child(${index}) .button.button-primary`)
    }    


    get ourHistory(){
        return $(`//*[@class="grid-x"]//*[text()="Our History"]`);
    }

    get ourBrands(){
        return $(`//*[@class="grid-x"]//*[text()="Our Brands"]`);
    }

    aboutusBtn(index){
        return $(`#MainContent > div:nth-child(4) .grid-x:nth-child(3) > div:nth-child(${index}) a`);
    }

    get ourExperts(){
        return $(`//*[@class="grid-x"]//*[text()="Our Experts"]`);
    }
    get subscribeCancelIcon(){
        return $(".needsclick.klaviyo-close-form.kl-private-reset-css-Xuajs1");
    }

    get supplementToSupportTitle() {
        return $("//*[@class='text-center padding-horizontal-1']");
    }

    get footerSignupSubTitle() {
        return $("#footer .cell.medium-5.first p");
    }

    get targetedBlends_Title() {
        return $(".margin-bottom-1.featured-collections__heading");
    }

    wellBlendsShopButton(index) {
        return $(`#featured-collections .grid-x.grid-padding-x>div:nth-child(${index}) button`)
    }

    get favIcon() {
        return $(".header__inline-menu>ul>li:nth-child(3) a");
    }

    get myAccount_1() {
        return $(".header__inline-menu>ul>li:nth-child(2) a");
    }

    get emptyHeartIcon() {
        return $(".focus-inset.show-wishlist.show-wishlist-on");
    }

    favPopupBuyNowBtns(index) {
        return $(`.product-list-content .ais-InfiniteHits>ol>li:nth-child(${index}) .product-form__buttons a`)
    }

    get fullHeartIcon() {
        return $(".focus-inset.show-wishlist.show-wishlist-on.active")
    }

    get bestSellerMarketingCardImg() {
        return $(".glide-best-sellers:nth-child(1) .is-first-item img")
    }

    get newProdMarketingCardImg() {
        return $(".glide-new-products:nth-child(1) .is-first-item img")
    }

    get marketingCardImg() {
        return $("#new-products-algolia .item-container.acf_marketing_card.hpcarousel a img")
    }

    get marketSubscriptionPgHeading() {
        return $(".static-image-hero.is-small h1")
    }

    get accessibilityCancelIcon() {
        return $(".acsb-widget-position-right.acsb-ready.acsb-active .acsb-start a")
    }

    get accessibilityAdjustmentsHeading() {
        return $(".acsb-widget-position-right.acsb-ready.acsb-active .acsb-hero-title");
    }

    accessibilityHeaderBtns(index) {
        return $(`.acsb-hero-actions.acsb-flex a:nth-child(${index})`)
    }

    get  hideAccessibilityHeading() {
        return $(".acsb-hide:nth-child(1) .acsb-title");
    }

    hideAccessibilityBtns(index) {
        return $(` .acsb-hide:nth-child(1) .acsb-buttons span:nth-child(${index})`)

    }
    get hideAccessibilityCancelIcon() {
        return $(".acsb-popup.acsb-hide-popup.acsb-active > div:nth-child(2) span i")
    }

    get languageBtnOnAccPopup() {
        return $(".acsb-header.acsb-flex .acsb-language-text")
    }
    
    get chooseTheIntrceLangHeading() {
         return $(".acsb-popup-title:nth-child(1)")
    }

    LanguageBtns(index) {
        return $(`.acsb-language-selection .acsb-languages.acsb-flex .acsb-language:nth-child(${index}) .acsb-language-text`)
    }

    get cancelIconOnPrevCartPopUP() {
        return $(".fancybox-content .fancybox-button.fancybox-close-small svg")
    }
    
    browserMethod() {
        browser.pause(7000);
    }

    get closePopup(){
        return $(`.needsclick.klaviyo-form.klaviyo-form-version-cid_1.kl-private-reset-css-Xuajs1`);
    }

    productlistheaderAtoZ(index, index1){
        return $(`.main-nav-grandchild-links-wrapper.is-active.main-nav_a-z ul:nth-child(2) > div:nth-child(${index}) li:nth-child(${index1}) a`);
    }

    headerLinks(index){
        return $(`#desktop-alt-menu ul li:nth-child(${index}) button`);
    }

    get rateyourselfPopup(){
        return $(`.QSIWebResponsiveDialog-Layout1-SI_1k1AbOz7jMroJ1d_close-btn-container button`);
    }

    atozLinks(index){
        return $(`.main-nav-grandchild-links-wrapper.is-active.main-nav_a-z > div ul li:nth-child(${index})`);
    }

    get multiomegaHead(){
        return $(`.sub-collection-template-title`);
    }

    findvitaminsformeSubmenu(index){
        return $(`#desktop-alt-menu .main-nav-list > li:nth-child(2) > div ul li:nth-child(${index}) a`);
    }

    get findyourmultivitaminsLink(){
        return $(`#desktop-alt-menu .main-nav-list > li:nth-child(2) > div a:nth-child(3)`);
    }

    tipsandresourcesSubmenu(index){
        return $(`#desktop-alt-menu .main-nav-list > li:nth-child(3) > div ul li:nth-child(${index}) a`);
    }

    get explorehealthresourcesLink(){
        return $(`#desktop-alt-menu .main-nav-list > li:nth-child(3) > div a:nth-child(3)`);
    }

    aboutusSubmenu(index){
        return $(`#desktop-alt-menu .main-nav-list > li:nth-child(4) > div ul li:nth-child(${index}) a`)
    }

    get discovernaturemadeLink(){
        return $(`#desktop-alt-menu .main-nav-list > li:nth-child(4) > div a:nth-child(3)`);
    }

    get fqaHead(){
        return $(`#shopify-section-nm-acf-faq-page > div .margin-bottom-1`);
    }

    get aboutusHead(){
        return $(`.static-image-hero.is-small h1`);
    }


    

homepageMethod(){
    // browser.url(testData.naturemade.url);
    browser.url('/');
    console.log("Base URL = " + '/')
    if(this.acceptcookieepopup.isVisible()){
        this.acceptcookieepopup.click();
    } 
    browser.pause(10000);
     if(this.subscribeCancelIcon.isVisible()){
        this.subscribeCancelIcon.click();
     }
     this.bannerName.waitForVisible();
     expect(this.bannerName.getText()).eql(testData.titles.shopNowText);
}

cartMethod(){
     this.homepageMethod();
     this.cart.waitForVisible();
     this.cart.click();
     var getTxtOfBtnName = this.checkOutBtnInCartDialog.getText();
     var splitBtnName = getTxtOfBtnName.split(" (1)")
     console.log("splitBtnName", splitBtnName)
     var getSplittedName = `${splitBtnName[0]}`
     console.log("getSplittedName", getSplittedName)
     var concatinate = `${getSplittedName} (1)`
     expect(this.checkOutBtnInCartDialog.getText()).to.eql(getSplittedName)
    // this.checkOutBtnInCartDialog.waitForVisible();
    // expect(this.checkOutBtnInCartDialog.getText()).to.eql(testData.cart.cartCheckout) 

    }

    cartMethod1(){
        this.homepageMethod();
        this.cart.waitForVisible();
        this.cart.click();

        // var getTxtOfBtnName = this.checkOutBtnInCartDialog.getText();
        // var splitBtnName = getTxtOfBtnName.split(" (1)")
        // console.log("splitBtnName", splitBtnName)
        // var getSplittedName = `${splitBtnName[0]}`
        // console.log("getSplittedName", getSplittedName)
        // var concatinate = `${getSplittedName} (${1})`
        // console.log("concatinate", concatinate);
        // expect(this.checkOutBtnInCartDialog.getText()).to.eql(concatinate)
       // this.checkOutBtnInCartDialog.waitForVisible();
       // expect(this.checkOutBtnInCartDialog.getText()).to.eql(testData.cart.cartCheckout) 
   
       }
     
vandsMethod()
      {
      this.newHeaderMenus(1).waitForVisible();
      this.newHeaderMenus(1).click();
    //   if(this.subscribeCancelIcon.isVisible()){
    //     this.subscribeCancelIcon.click();
    //   } 
    //   browser.moveToObject(`//*[@class= 'main-nav-list']/li[1] //*[@class='main-nav-parent-item']`);
      this.ProductsSubMenus(1).waitForVisible();
      expect(this.ProductsSubMenus(1).getText()).to.eql(testData.headers.aTOZ);
      if(this.subscribeCancelIcon.isVisible()){
        this.subscribeCancelIcon.click();
      } 
      browser.waitUntil(
        function() {
            return (
            browser.isVisible
                (`.main-nav-wrapper.hide>div>ul>li:nth-child(1) button`) === true
            );
        },
        30000,
        "Sub menu dropdown option are not visible even after 20 secs"
      );
    }
 vandsMethod1()
      {
      this.vitaminsandSupplements.waitForVisible();
      this.vitaminsandSupplements.click();
    // browser.moveToObject(`//*[@class= 'main-nav-list']/li[1] //*[@class='main-nav-parent-item']`);
      this.bestSeller.waitForVisible();
      expect(this.bestSeller.getText()).to.eql(testData.bestSeller.name);
      //browser.waitUntil(
        //function() {
           // return (
           // browser.isVisible
             //   (`.main-nav-child-item.is-active`) === true
           // );
        //},
        //20000,
       // "Sub menu dropdown option are not visible even after 20 secs"
      //);
    }
vands1Method(){
      this.vandsMethod();
      this.alphabetLetters(12).waitForVisible();
      this.alphabetLetters(12).click();
      this.multiVitamins.waitForVisible();
      expect(this.multiVitamins.getText()).to.eql(testData.headers.multiVitamins);
      browser.waitUntil(
        function() {
            return (
            browser.isVisible
                (`div.main-nav-grandchild-links-wrapper.is-active > ul > div:nth-child(1) > li:nth-child(1)`) === true
            );
        },
        30000,
        "Vitamins sub links are not visible even after 20 secs"
      );
    
    }
vands2Method(){
      this.vandsMethod();
      this.supplements.waitForVisible();
      this.supplements.click();
      this.multiVitamins.waitForVisible();
      expect(this.multiVitamins.getText()).to.eql(testData.headers.supplements);
      browser.waitUntil(
        function() {
            return (
            browser.isVisible
                (`div.main-nav-grandchild-links-wrapper.is-active > ul > div:nth-child(1) > li:nth-child(2)`) === true
            );
        },
        20000,
        "Supplements sub links are not visible even after 20 secs"
      );
      
    }

vands3Method(){
        this.vandsMethod();
        // this.browserMethod();
        if(this.subscribeCancelIcon.isVisible()){
            this.subscribeCancelIcon.click();
        } 
        this.specialty.waitForVisible();
        this.specialty.click();
        browser.waitUntil(
            function() {
                return (
                browser.isVisible
                    (`div.main-nav-grandchild-links-wrapper.is-active > ul > div:nth-child(1) > li:nth-child(1)`) === true
                );
            },
            20000,
            "Sub menu dropdown option are not visible even after 20 secs"
          );
        this.multiVitamins.waitForVisible();
        expect(this.multiVitamins.getText()).to.eql(testData.headers.specialty);   
    }


addtocartMethod(){
            this.homepageMethod();
            // this.browserMethod();
            browser.waitUntil(
                function() {
                    return (
                    browser.isVisible
                        (`.header.grid-container #Search-In-Template`) === true
                    );
                },
                30000,
                "Search bar is not visible even after 30 secs"
            );
            this.search.waitForVisible();
            this.search.click();
            this.search.setValue([testData.searchbar.searchfor]);
            this.searchBtn.click();
            // this.browserMethod();
            this.preHeader.waitForVisible();
            expect(this.preHeader.getText()).to.eql(testData.searchbar.subHeader);
            browser.scroll(0, 500);
            this.browserMethod();
            if(this.newRatingPopupCancelIcon.isVisible()) {
                this.newRatingPopupCancelIcon.click();
            }
            if(this.subscribeCancelIcon.isVisible()){
                this.subscribeCancelIcon.click();
             } 
            this.searchPage(2).waitForVisible();
            var a = this.searchPageProdTitle(2).getText();
            var convertedText = a.toLowerCase();
            this.searchPage(2).click();
            this.browserMethod();
            productDetailsPage.productName.waitForVisible();
            var getTextOnProductList = productListPage.productName.getText()
            var convertTextOnPDP = getTextOnProductList.toLowerCase();
            expect(convertTextOnPDP).to.eql(convertedText)    
            // this.productTitle.waitForVisible();
            // expect(this.productTitle.getText()).to.eql(testData.productNames.womensWellnessTxt);
            browser.execute(function() {
                document.querySelector(`.product-form__input.product-form__quantity label`).scrollIntoView()
             })
            this.browserMethod(); 
             if(this.subscribeCancelIcon.isVisible()){
                this.subscribeCancelIcon.click();
             } 
             if(this.newRatingPopupCancelIcon.isVisible()) {
                this.newRatingPopupCancelIcon.click();
            } 
            this.browserMethod(); 
            productDetailsPage.addToCart.waitForVisible();
            productDetailsPage.addToCart.click();
            this.browserMethod();
        }

healthneedsMethod(){
        this.homepageMethod();
        this.healthNeeds.waitForVisible();
        this.healthNeeds.click();
        // browser.moveToObject(`//*[@class='main-nav-list']/li[2] //*[@class='main-nav-parent-item']`);
        browser.waitUntil(
         function() {
               return (
             browser.isVisible(
                `#desktop-original-menu .main-nav-list>li:nth-child(2) button`
             )  === true
            );
        },
        40000,
          "Health needs dropdown options are not visible even after 20 secs"
        );
        expect(this.healthNeedsdropdown(2, 1).getText()).to.eql(testData.healthNeedsdata.beautyText);
        expect(this.healthNeedsdropdown(2, 9).getText()).to.eql(testData.healthNeedsdata.jointsText);
        if(this.subscribeCancelIcon.isVisible()) {
            this.subscribeCancelIcon.click();
        }
       }


educationMethod(){
        this.homepageMethod();
        this.education.waitForVisible();
        this.education.click();
        // browser.moveToObject(`//*[@class='main-nav-list']/li[3] //*[@class='main-nav-parent-item']`);
        browser.waitUntil(
            function() {
                return (
                browser.isVisible(
                    '#desktop-original-menu .main-nav-list>li:nth-child(3) button'
                ) === true
                );
            },
            20000,
            "Education dropdown appeared even after 20s"
          );         
        expect(this.educationDropdown(3,1).getText()).to.eql(testData.educationData.healthresourcesText);
        expect(this.educationDropdown(3,2).getText()).to.eql(testData.educationData.featuredarticlesText);
        if(this.subscribeCancelIcon.isVisible()) {
            this.subscribeCancelIcon.click();
        }
     }

 aboutusMethod(){
        this.homepageMethod();
        this.aboutUs.waitForVisible();
        this.aboutUs.click();
        // browser.moveToObject(`//*[@class='main-nav-list']/li[4] //*[@class='main-nav-parent-item']`);
        this.browserMethod();
        expect(this.aboutUsdropdown(4, 1).getText()).to.eql(testData.aboutusdData.aboutText);
        expect(this.aboutUsdropdown(4, 2).getText()).to.eql(testData.aboutusdData.historyText);

    }

wellBlends(){
    this.homepageMethod();
    this.wellBlendsHeader.waitForVisible();
    this.wellBlendsHeader.click();
    // browser.moveToObject(`//*[@class= 'main-nav-list']/li[5] //*[@class='main-nav-parent-item']`);
    browser.waitUntil(
        function() {
            return (
            browser.isVisible(
                'li:nth-child(5) > div > div > div.main-nav-child-links-wrapper > ul > li:nth-child(1) > a'
            ) === true
         );
        },
        40000,
        "wellblendsdropdown is still not appeared even after 20s"
    );  
    expect(this.wellBlendsDropdown(5, 1).getText()).to.eql(testData.wellBlendsData.balanceWellness);
    expect(this.wellBlendsDropdown(5, 3).getText()).to.eql(testData.wellBlendsData.stressRelief);        
    this.browserMethod();
    if(this.subscribeCancelIcon.isVisible()) {
        this.subscribeCancelIcon.click();
    }
 }

accountCreate(){
    this.homepageMethod();
    this.signinLink.waitForVisible();
    this.signinLink.click();
    this.createAccountLink.waitForVisible();
    this.createAccountLink.click();
    this.firstName.waitForVisible();
    this.firstName.click();
    this.firstName.setValue([testData.createAccntDetails.fName]);
    this.lastName.waitForVisible();
    this.lastName.click();
    this.lastName.setValue([testData.createAccntDetails.lName]);
    this.eMail.waitForVisible();
    this.eMail.click();
    this.eMail.setValue([testData.createAccntDetails.email]);
    this.password.waitForVisible();
    this.password.click();
    this.password.setValue([testData.createAccntDetails.password]);
    browser.scroll(0, 50);
    this.browserMethod();
    this.createBtn.waitForVisible();
    this.createBtn.click();
    //this.accountTxt.waitForVisible();
    //expect(this.accountTxt.getText()).to.eql(testData.createAccntDetails.accountTxt)
}

loginUser(){
        this.homepageMethod();
        this.signinLink.waitForVisible();
        this.signinLink.click();
        this.browserMethod();
        this.loginPage.waitForVisible();
        expect(this.loginPage.getText()).eql(testData.titles.logintitle)
        if(this.subscribeCancelIcon.isVisible()){
            this.subscribeCancelIcon.click();
        };
        this.email.click();
        this.email.setValue([testData.login.newEmail]);
        this.password.waitForVisible();
        this.password.click();
        this.password.setValue([testData.login.newPwd]);
        // if(this.subscribeCancelIcon.isVisible()){
        //     this.subscribeCancelIcon.click();
        // };
        this.signin.waitForVisible();
        this.signin.click();
        this.browserMethod();
        this.accountTitle.waitForVisible();
        expect(this.accountTitle.getText()).to.eql(testData.titles.newAccHeading);
     }
newProductsMethod(){
        this.homepageMethod();
        browser.execute(function() {
            document.querySelector(`.hero-grid-container:nth-child(1) .button.button-primary.button-wb`).scrollIntoView()
        })
        this.browserMethod();
        if(this.subscribeCancelIcon.isVisible()){
            this.subscribeCancelIcon.click();
        };
        this.homenewProducts.waitForVisible();
        this.homenewProducts.click();
        this.newProductTitleTxt(3).waitForVisible();
        expect(this.newProductTitleTxt(3).getText()).to.eql(testData.productNames.vitD35000IUFastDslvTblts);
     }

findaStoremethod(){
        this.homepageMethod();
        this.whereToBuyLink.waitForVisible();
        this.whereToBuyLink.doubleClick();
        browser.waitUntil(
            function() {
                return (
                browser.isVisible(
                    '.margin-bottom-1.where-to-buy__heading'
                ) === true
                );
            },
            20000,
            "start discussion dialog still not appeared even after 20s"
          );        
        expect(this.whereToBuyHeadingTxt.getText()).to.eql(testData.titles.whereToBuyTxt);
}

clearLocationField(){
         this.locationSearchField.waitForVisible();
         this.locationSearchField.clearElement();
     }


cartPageMethod(){
    this.addtocartMethod();
    this.browserMethod();
    this.cartView.waitForVisible();
    this.cartView.click();
    this.cartHead.waitForVisible();
    expect(this.cartHead.getText()).to.eql(testData.cart.cartHead);
}

removeAllProductsFromCart() {
    browser.url(testData.naturemade.url);
    // browser.windowHandleFullscreen();
    if(this.acceptcookieepopup.isVisible()){
    this.acceptcookieepopup.click();
    }
    this.browserMethod();
    if(this.subscribeCancelIcon.isVisible()){
    this.subscribeCancelIcon.click();
    }
    this.companyLogo1.waitForVisible();
    this.companyLogo1.click();
    this.cart.waitForVisible();
    this.cart.click();
    this.checkOutBtnInCartDialog.waitForVisible();
    this.checkOutBtnInCartDialog.click();
    browser.pause(2000);
    while(this.cartDeleteBtns(1).isVisible()){
        this.cartDeleteBtns(1).click();
        browser.pause(3000);
     }
}


vitaminsAndSupplemntsHeadrMenuLink() {
    this.homepageMethod();
    this.vitaminsandSupplements.waitForVisible();
    this.vitaminsandSupplements.click();
    this.vitaminsSublinks(1, 3).waitForVisible();
    this.vitaminsSublinks(1, 3).click();
}

vitaminsAndSupplemntsHeadrMenuLink1() {
    this.homepageMethod();
    this.vitaminsandSupplements.waitForVisible();
    this.vitaminsandSupplements.click();
    this.vitaminsSublinks(1, 3).waitForVisible();
    this.vitaminsSublinks(1, 3).click();
    browser.scroll("#womens-multivitamins");
    this.browserMethod();
    if(this.subscribeCancelIcon.isVisible()){
        this.subscribeCancelIcon.click();
    }
    if(this.newRatingPopupCancelIcon.isVisible()){
        this.newRatingPopupCancelIcon.click();
    }
    productListPage.productListPageTitles(1).waitForVisible();
    productListPage.productListPageTitles(1).click();
}
vitaminsAndSupplemntsHeadrMenuLink2() {
    this.homepageMethod();
    this.vitaminsandSupplements.waitForVisible();
    this.vitaminsandSupplements.click();
    this.vitaminsSublinks(1, 2).waitForVisible();
    this.vitaminsSublinks(1, 2).click();
}


vitaminsAndSupplemntsHeadrMenuLink3() {
    this.homepageMethod();
    this.vitaminsandSupplements.waitForVisible();
    this.vitaminsandSupplements.click();
    this.browserMethod();
    this.vitaminsSublinks(2, 2).waitForVisible();
    this.vitaminsSublinks(2, 2).click();
}

findUrDailyRoutneMthd() {
    this.homepageMethod();
    browser.execute(function() {
      document.querySelector(`.button.button-primary.button-wb `).scrollIntoView()
    })
    this.browserMethod();
    if(this.subscribeCancelIcon.isVisible()){
        this.subscribeCancelIcon.click();
    }
    this.bundleTab.waitForVisible();
    this.bundleTab.click();
}


accountCreation() {
      getFirstName = this.randomNameWithChar();
      getLastName = this.randomNameWithChar();
      getEmail = `${getLastName}@maildrop.cc`
      this.firstName.waitForVisible();
      this.firstName.click();
      this.firstName.setValue(getFirstName);
      this.lastName.waitForVisible();
      this.lastName.click();
      this.lastName.setValue(getLastName);
      this.eMail.waitForVisible();
      this.eMail.click();
      this.eMail.setValue(getEmail);
      this.password.waitForVisible();
      this.password.click();
      this.password.setValue([testData.createAccntDetails.password]);
      browser.scroll(0, 50);
      if(this.subscribeCancelIcon.isVisible()){
        this.subscribeCancelIcon.click();
      };
      this.createBtn.waitForVisible();
      this.createBtn.click();
}


multipleQuantiesAddedToCart() {
    this.homepageMethod();
    this.vitaminsandSupplements.waitForVisible();
    this.vitaminsandSupplements.click();
    this.vitaminsSublinks(1, 5).waitForVisible();
    this.vitaminsSublinks(1, 5).click();
     browser.execute(function() {
           document.querySelector(`.sub-collection-template-title`).toView()
    })         
    productListPage.productsTitles(2).waitForVisible();
    var ProdName2 = productListPage.productsTitles(2).getText();
    productListPage.productsTitles(2).click();
    var splitProdName2 = ProdName2.split(" m")
    var convertCaps = " m"
    var convertaWordIntoCapital = convertCaps.toUpperCase()
    var SplittedName = `${splitProdName2[0]}${convertaWordIntoCapital}${splitProdName2[1]}`
    expect(productDetailsPage.productName.getText()).to.eql(SplittedName)
}











prodCardCount() {
    let i = browser.elements('#best-sellers ol li .item-container').value.length;
    return i
}



prodTitle(index) {
    return $(`#best-sellers ol li:nth-child(${index}) .item-title a`)
}

prodTitles(titleOfTheProd) {
    var i = this.prodCardCount()
    console.log("i=" +i)
    var j = 1;
    this.prodTitle(j).waitForVisible()
        var productName = this.prodTitle(j).getText()
        console.log("productName =" +productName);
        while(j <= i) {
            if(productName === titleOfTheProd) {
                var name = productName
                console.log("name =" +name)
            }
            j = j + 1;
            if(j <= i) {
                this.prodTitle(j).waitForVisible()
                productName = this.prodTitle(j).getText()
                console.log("productName =" +productName);
            }
        
        }   
        return name
    }
}
export default new Home();   