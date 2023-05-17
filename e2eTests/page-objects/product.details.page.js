import testData from "../constants/testData.json";
import Page from "./page";
import { expect } from 'chai';
import Home from "../page-objects/home.page";

var getTextOfProduct;
var split;
var womensMultivitamin;

class ProductDetails extends Page{

get productImage(){
        return $(".glide--slider.glide--swipeable")
}
get productName(){
    return $(".product__title.show-for-medium")
}
get writeAReviewLink(){
    return $(".show-for-medium:nth-child(2) .bv_main_container_row_flex:nth-child(1)")
}

get cartIcon() {
    return $(".header__icons button:nth-child(3) svg")
}

get productDescription() {
    return $(".product__description.rte");
}

get searchField() {
    return $("#Search-In-Template")
}

get searchIcon() {
    return $(".header__inline-menu>ul>li:nth-child(4) .icon.icon-search");
}

get itemNumbr() {
    return $(".sku-number")
}

get reviewPopUp(){
    return $(".bv-mbox-breadcrumb-item:nth-child(1)")
}

get starRating() {
    return $(".show-for-medium:nth-child(2) #ratings-summary .bv_stars_component_container");
}

get writeAReviewStar(){
    return $(".show-for-medium .bv_stars_component_container > svg:nth-child(1)")
}

overAllRating(index) {
    return $(`.bv-fieldset-rating-group.notranslate .bv-submission-star-rating.bv-radio-input:nth-child(${index})`)
}

get reviewTitleField() {
   return $("#bv-text-field-title");
}

get reviewDescription() {
    return $("#bv-textarea-field-reviewtext")
}

wouldYouRecommendThisProdYesOrNo(index) {
    return $(`.bv-fieldset-isrecommended-group.bv-radio-group>ul>li:nth-child(${index}) label`)
}

get postReviewBtn(){
    return $(".bv-form-actions-submit.bv-submit");
}

get addPhotoBtn() {
    return $(".bv-review-media:nth-child(4) button")
}

get chooseFile() {
    return $(".bv-media-toggle-controls input");
}

get effectiveNessStarRatings() {
    return $(".bv-fieldset-rating_Effectiveness-group.bv-radio-group.notranslate");
}

get valueStarRatings() {
    return $(".bv-fieldset-rating_Value-group.bv-radio-group.notranslate");
}

get didYouReadThisProductReviews() {
    return $("#bv-select-field-contextdatavalue_ReadReviews_1");
}

yesORNoOptions(index) {
    return $(`#bv-select-field-contextdatavalue_ReadReviews_1 option:nth-child(${index})`)
}

whereDidYouPurchaseTheProdOptions(index) {
    return $(`#bv-select-field-contextdatavalue_WhereDidYouPurchase_1 option:nth-child(${index})`)
}

whatMostInfluencedYourDecisionOptions(index) {
    return $(`#bv-select-field-contextdatavalue_whychoose option:nth-child(${index})`)
}

howOftenDoYOuUseOptions(index) {
    return $(`#bv-select-field-contextdatavalue_frequencyofuse_1 option:nth-child(${index})`)
}

genderOptions(index) {
    return $(`#bv-select-field-contextdatavalue_Gender option:nth-child(${index})`)
}

ageOptions(index) {
    return $(`#bv-select-field-contextdatavalue_Age option:nth-child(${index})`)
}

get nickNameField() {
    return $("#bv-text-field-usernickname");
}
get locationField() {
    return $("#bv-text-field-userlocation");
}

get emailField() {
    return $("#bv-email-field-hostedauthentication_authenticationemail");
}

get termsAndConditionCheckbox() {
    return $(".bv-checkbox-container input")
}

get productReview() {
    return $(".grid-x h1")
}

get ingredientsLink() {
    return $(".tab-customize button:nth-child(2)");
}

get ingredientDescHeading() {
    return $(" #tab-2 .grid-x .cell.medium-7.rte.margin-bottom-mobile h3")
}

get nutientShortfallsLink() {
    return $(".tab-customize button:nth-child(3)")
}

nutientShortfallsHeadings(index) {
    return $(`#tab-3 .grid-x.grid-padding-x.margin-bottom-4:nth-child(${index}) .cell.medium-7 h3`)
}

get dosageandInteractionsLink() {
    return $(".tab-customize button:nth-child(4)")
}

get dosageandInteractionsHeading() {
    return $("#tab-4 .cell.medium-7.rte.margin-bottom-mobile h3")
}

get wwwUpsVerifiedLink() {
    return $("#tab-1 .cell.medium-offset-1.medium-4 .sidebar-footer-wrapper.rte small a");
}

upsVerifiedPageheaderLinks(index) {
    return $(`.region.region-navigation #block-superfish-1>ul>li:nth-child(${index})`)
}

get reviewTitleError() {
    return $(".bv-fieldset.bv-fieldset-title.bv-text-field.bv-error .bv-helper-label")
}

get ReviewError() {
     return $(".bv-fieldset.bv-fieldset-reviewtext.bv-textarea-field.bv-error .bv-helper-label")
}

get nickNameError() {
    return $(".bv-fieldset.bv-fieldset-usernickname.bv-text-field.bv-error .bv-helper-label")
}

get emailError() {
    return $("#bv-invalid-email-for-aria-describedby");
}

get agreementsError() {
    return $(".bv-fieldset.bv-checkbox-field.bv-error .bv-helper-label");
}

get termsAndConditionLink() {
    return $(".bv-checkbox-container a");
}

get termsAndConditionPageTitle() {
    return $("#bv-terms-conditions p");
}

get cancelIconForTCPage() {
    return $("#bv-mbox-lightbox-list .bv-mbox-close.bv-focusable");
}

get cancelIconForPrivacyPopup() {
    return $("#bv-mbox-terms-and-conditions-list>button");
}

get reviewDialogCancelIcon() {
    return $("#bv-mbox-lightbox-list .bv-mbox-close.bv-focusable")
}

get quantityIncrease(){
    return $(".product-form__quantity .quantity button:nth-child(3)")
}

get quantityInput() {
    return $(".product__info-wrapper.grid__item .quantity input")
}

get quantityError(){
    return $(".margin-bottom-0.text-small")
}

get quantityNumberField(){
    return $(".quantity__input")
}

get quantityDecrease(){
    return $(".product-form__quantity .quantity button:nth-child(1)")
}
get addToCart(){
    return $(".product-form__buttons button:nth-child(1)")
}
get itemAddedToCart(){
    return $(".cart-notification__heading.caption-large")
}
get productNameCartPopUp(){
    return $(".cart-notification-product__name.h4")
}
get viewMyCart(){
    return $("#cart-notification-button")
}
get productCount(){
    return $("#main-cart-items td:nth-child(2) .small-hide:nth-child(2) dd")
}
get radioBtn(){
    return $(".rc-option__discount.rc_widget__option__discount")
}
get findaStoreLink(){
    return $(".text-underline.ps-widget.ps-enabled")
}
get findaStoreProductName(){
    return $(".ps-product-details-title.ps-float-box")
}
get moreAboutThisProduct(){
    return $(".text-small .text-underline:nth-child(1)")
}

get emailMePopupProdSubTitle() {
    return $(".product-form:nth-child(1) button:nth-child(1)");
}

get coupanCodeDonotApplyTxt() {
    return $(".coupon-code-info");
}

get cartDialogCancelPopup() {
    return $(".cart-notification__close.modal__close-button.link.link--text.focus-inset")
}

get frequentlyAskedQuestn() {
    return $(".text-small .text-underline:nth-child(2)")
}
  
get benifitsAndDescription(){
    return $(".tablinks-cus.active")
}
get faq(){
    return $(".shopify-section:nth-child(1) .margin-bottom-1")
}
get viewAllFaq(){
    return $(".grid-x.grid-padding-x.align-justify .view-all-button")
}
get compareProducts(){
    return $(".text-underline:nth-child(3)")
}
get compareWithSimilarProduct(){
    return $(".margin-bottom-3.medium-text-center")
}
get bottleCount1(){
    return $(".js.product-form__input label:nth-child(3)")
}
get bottleCount2(){
    return $(".js.product-form__input label:nth-child(5)")
}
get productPrice1(){
    return $(".rc-option__price.rc_widget__price:nth-child(2)")
}
get productPrice2(){
    return $(".rc-option__price.rc_widget__price:nth-child(3)")
}
get findAStorePopUp(){
    return $(".ps-local-tab-label.ps-enterprise")
}
get oneTimePurchaseText(){
    return $(".rc-radio.rc-option__onetime label .rc-option__text")
}
get oneTimePurPrice(){
    return $(".rc-option__price.rc_widget__price--onetime")
}
get subscribrAndSavePrice(){
    return $(".rc-option__price.rc_widget__price.rc_widget__price--subsave")
}
get subscribeAndSave(){
    return $(".rc_widget__option--subsave .rc_widget__option__label .rc-option__text")
}

get emailMePopupCancelIcon() {
    return $("#container:nth-child(1) .close.action-close");
}

get prodNameInViewMYCartPopup() {
    return $(".cart-notification-product__name.h4")
}

get showMoreOptn() {
    return $(".product__info-container .show-more-desc")
}

get qtyLabel() {
    return $(".product-form__input.product-form__quantity label");
}

learnMoreLinks(index) {
    return $(`.anchor-link-wrappers a:nth-child(${index})`)
}

questions(index) {
    return $(`#product-faqs:nth-child(2) .grid-container:nth-child(2) ul>li:nth-child(${index}) a p`)
}

answers(index) {
    return $(`#product-faqs:nth-child(2) .grid-container:nth-child(2) ul>li:nth-child(${index}) .accordion-content`)
}

bulletedLinks(index) {
    return $(`.product__info-wrapper.grid__item .bundled-item-list>ul>li:nth-child(${index}) a`)
}

get buyInaBundleAndSaveLink() {
    return $(".parent-product__text");
}

get thisBundlesShipsFree() {
    return $(".bundle-discounts.uppercase.text-center")
}

get exclusiveFlag() {
    return $(".bundle-flag.wb-new-flag");
}

bundleSectionLinks(index) {
    return $(`.tab-customize.tab-child-customize:nth-child(2) button:nth-child(${index}) `)
}

get benefitsAndDescriptionTitle() {
    return $("#tab-cus-active");
}

get fAQSectionSubTitle() {
    return $("#product-faqs:nth-child(2) .margin-bottom-3 p")
}

faqPgLinks(index) {
    return $(`.accordion-module .cell.large-12 .quick_links li:nth-child(${index}) a`)
}

faqPageGeneralSectnQuestions(index) {
    return $(`.accordion-module .cell.large-12 .accordion:nth-child(5) li:nth-child(${index}) a p`)
}

get faqPgGeneralSecAnswer1() {
    return $(`.accordion-module .cell.large-12 .accordion:nth-child(5) li:nth-child(2)  .accordion-content`)
}

faqPgAbtUsSectnQuestions(index) {
     return $(`.accordion-module .cell.large-12 .accordion:nth-child(7) li:nth-child(${index}) a p`)
}

aboutUsSecanswrs(index) {
    return $(`.accordion-module .cell.large-12 .accordion:nth-child(7) li:nth-child(${index})  .accordion-content`)
}

faqPgManagingYourAccountQues(index) {
    return $(`.accordion-module .cell.large-12 .accordion:nth-child(9) li:nth-child(${index}) a p`)
}

managingUrAccntanswers(index) {
    return $(`.accordion-module .cell.large-12 .accordion:nth-child(9) li:nth-child(${index}) .accordion-content`)
}

faqPgShippingandDeliveryQues(index) {
    return $(`.accordion-module .cell.large-12 .accordion:nth-child(11) li:nth-child(${index}) a p`)
}

shippingAndDelvryanswers(index) {
    return $(`.accordion-module .cell.large-12 .accordion:nth-child(9) li:nth-child(${index}) .accordion-content`)
}

faqPgOrdersSectnQues(index) {
    return $(`.accordion-module .cell.large-12 .accordion:nth-child(13) li:nth-child(${index}) a p`)
}

faqPgOrderSecAnswers(index) {
    return $(`.accordion-module .cell.large-12 .accordion:nth-child(13) li:nth-child(${index}) .accordion-content`)
}

faqPgSubscribeAndSaveQues(index){
    return $(`.accordion-module .cell.large-12 .accordion:nth-child(15) li:nth-child(${index}) a p`)
}

faqPgSubscribeAndSaveAnswers(index){
    return $(`.accordion-module .cell.large-12 .accordion:nth-child(15) li:nth-child(${index}) .accordion-content`)
}

faqPgAccessibilityOnNMQues(index){
    return $(`.accordion-module .cell.large-12 .accordion:nth-child(17) li:nth-child(${index}) a p`)
}

socialMediaLinks(index) {
    return $(` .social-share-wrapper.padding-top-0>ul>li:nth-child(${index}) a`)
}

compareProductsimgs(index) {
    return $(`#compare-products:nth-child(2) #compareProducts .ais-Hits>ol>li:nth-child(${index}) img`)
}

compareProductsTitles(index) {
    return $(`#compare-products:nth-child(2) #compareProducts .ais-Hits>ol>li:nth-child(${index}) .title-wrapper a`)
}

compareProductsAddToCartBtn(index) {
    return $(`#compare-products:nth-child(2) #compareProducts .ais-Hits>ol>li:nth-child(${index}) .item-row-header a`)
}

get viewAllResourceLink() {
    return $("#related-resources:nth-child(1) .margin-bottom-1 a")
}

resourcesSectionProdImgs(index) {
    return $(`#related-resources:nth-child(1) .ais-Hits>ol>li:nth-child(${index}) img`)
}

resourceSectionProdNames(index) {
    return $(`#related-resources:nth-child(1) .ais-Hits>ol>li:nth-child(${index}) h3`)
}

resourceSectionMinReadLink(index) {
    return $(`#related-resources:nth-child(1) .ais-Hits>ol>li:nth-child(${index}) span`)
}

resourceSectionSubTitle(index) {
    return $(`#related-resources:nth-child(1) .ais-Hits>ol>li:nth-child(${index}) .is-style-4`)
}

get youMayAlsoLikeTitle() {
    return $(".margin-vertical-2");
}

youMayAlsoLikeSectionProdImgs(index) {
    return $(`#related-products .glide-related .ais-Hits>ol>li:nth-child(${index}) img`)
}

youMayAlsoLikeSectionProdTitles(index) {
    return $(`#related-products .glide-related .ais-Hits>ol>li:nth-child(${index}) .item-title a`)
}

youMayAlsoLikeSectionProdPrice(index) {
    return $(`#related-products .glide-related .ais-Hits>ol>li:nth-child(${index}) .item-price`)
}

youMayAlsoLkSecProdStarRating(index) {
    return $(`#related-products .glide-related .ais-Hits>ol>li:nth-child(${index}) .bv_stars_svg_no_wrap`)
}

youMayAlsoLkSecBuyNowBtn(index) {
    return $(`#related-products .glide-related .ais-Hits>ol>li:nth-child(${index}) .button.button-primary`)
}

get youMayAlsoSecMarketCardTitle() {
    return $(".related-hits-container-product ol>li:nth-child(4) .item-container.acf_marketing_card.product .item-title")
}

get cartCount() {
    return $(".cart-count-bubble:nth-child(1)")
}

clearEntered() {
this.clearField("#bv-text-field-title");
}

browserMethod(){
    browser.pause(8000);
}

get addPhotoTitle() {
    return $(".bv-mbox-breadcrumb-item span")
}

uploadFile() {
    const path1 = require("path")
    const toUpload1 = path1.join(__dirname, "..", "resources", "Screenshot 2023-03-29 at 6.00.00 PM.png")
    var str1 = ".bv-media-toggle-controls input"
    browser.chooseFile(str1, toUpload1)
    browser.pause(9000);
}

get aDDPHOTOBtn() {
    return $(".bv-photo-submit.bv-submission-button-submit");
}

get addedImg() {
    return $(".bv-image-wrapper.bv-focusable img")
}

get RemoveBtn() {
    return $(".bv-content-btn.bv-media-preview-clear.bv-focusable")
}

get saveTenPercntPlusFreeShpng() {
    return $(".rc-template__legacy-radio .rc-option__text.two-pack-cta span:nth-child(2)")
}

get subscribeToTwoPackTxt() {
    return $(".rc_widget__option__label .subscribe-cta-text");
}



faqPageLinkInPDP() {
        Home.vitaminsAndSupplemntsHeadrMenuLink1();
        browser.scroll(0, 3200);
        Home.browserMethod();
        this.viewAllFaq.waitForVisible();
        this.viewAllFaq.click();
        this.faqPgLinks(4).waitForVisible();
        this.faqPgLinks(4).click();
        if(Home.newRatingPopupCancelIcon.isVisible()){
            Home.newRatingPopupCancelIcon.click();
        } 
}



















}






export default new ProductDetails();