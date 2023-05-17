import testData from "../constants/testData.json";
import Page from "./page";
import Home from "../page-objects/home.page";
import { expect } from 'chai';
import browserSync from "browser-sync";
import productDetailsPage from "../page-objects/product.details.page";

class Cart extends Page{
    
    get emptyCartHeading(){
        return $(".cart__empty-text");
    }

    get companyLogo(){
        return $(".main__header h1 a");
    }

    get yourCartHeading() {
        return $(".title.title--primary");
    }

    get cartCount() {
        return $(".cart-count-bubble:nth-child(1)")
    }

    get prodName(){
        return $(".cart-item__name.break.small-hide");
    }
    
    get prodQty(){
        return $(".grid__item.item-info .cart__qty ");
    }

    get removeLink(){
        return $(".cart__remove a");
    }

    get decreaseBtn() {
        return $(".cart-item__quantity .quantity button:nth-child(1)")
    }

    get increaseBtn() {
        return $(".cart-item__quantity .quantity button:nth-child(3)")
    }

    get searchField() {
        return $("#Search-In-Template");
    }

    get total_Price() {
        return $(".cart-item__totals.right.small-hide .cart-item__price-wrapper");
    }

    get subTotal_Text() {
        return $(".totals__subtotal");
    }

    get subTotal_Price() {
        return $(".totals__subtotal-value");
    }

    get deleteBtn () {
        return $(".cart-items #CartItem-1 #Remove-1 a");
    }

    get taxAndShippingNote() {
        return $(".tax-note.caption-large.rte")
    }

    get checkOutBtn() {
        return $(".cart__ctas button");
    }

    get shopPayBtn() {
        return $(".cart__footer ul>li:nth-child(1) ")
    }
    
    get payPalBtn() {
        return $(".cart__footer ul>li:nth-child(2) ")
    }

    get ContactInformationTitle() {
        return $(".section__title.layout-flex__item");
    }

    get loginOrSignupTitle() {
        return $(".r6uw3");
    }

    get enterYourEmailTxt() {
        return $(".koxGj")
    }

    get payPalPageTitle() {
        return $("#headerText");
    }

    get twoPackTxt() {
        return $(".cart-item__details strong");
    }




    






    removeFromCart(index){
        Home.browserMethod();
        browser.scroll(0,0);
        Home.companyLogo.waitForVisible();
        Home.companyLogo.click();
        browser.waitUntil(
            function() {
            return (
                browser.isVisible(
              '.mf-herobanner__body h1'
                ) === true
            );
            },
            55000,
            "Home page description still not after 15s"
        );
        Home.HomePageDescription.waitForVisible();
        expect(Home.HomePageDescription.getText()).to.eql(testData.home.description);
        this.cartBtn.waitForVisible();
        this.cartBtn.waitForVisible();
        this.cartBtn.click();
        this.removeBtn(index).waitForVisible();
        this.removeBtn(index).waitForVisible();
        this.removeBtn(index).click();

    }

    removeAllProductsFromCart(){
        browser.url(testData.nurish.url);
        browser.windowHandleFullscreen();
        Home.companyLogo.waitForVisible();
        Home.companyLogo.click();
        Home.browserMethod();
        Home.HomePageSectionTitle.waitForVisible();
        expect(Home.HomePageSectionTitle.getText()).to.eql(testData.home.howitworkstitle);
        Home.cartIcon.waitForVisible();
        Home.cartIcon.click();
        // if(cartpage.searchedProductName(2).isVisible()){
        //     while(this.removeBtn(1).isVisible()){
        //         this.removeBtn(1).waitForVisible();
        //         this.removeBtn(1).click();
        //         browser.pause(3000);
        //     }
        while(this.removeLink.isVisible()){
        this.removeLink.waitForVisible();
        this.removeLink.click();
        Home.browserMethod();
        }
    }

    removeProductsFromCartRegression(){
        while(this.removeBtn(1).isVisible()){
            this.removeBtn(1).waitForVisible();
            this.removeBtn(1).click();
            Home.browserMethod();
        }
    }

    addProdToCart(prodName, index){
        browser.url(testData.megafood.stagingurl);
        Home.searchBar.waitForVisible();
        Home.searchBar.click();
        browser.setValue('input#q',[`${prodName}`, 'Enter'])
        Home.browserMethod();
        Home.searchedProductName(index).waitForVisible();
        Home.searchedProductName(index).click();
        productDetailsPage.productName.waitForVisible();
        if(productDetailsPage.popUpCloseBtn.isVisible()){
            productDetailsPage.popUpCloseBtn.click();   
        }
        browser.scroll(0, 100);
        productDetailsPage.addToCartBtn.click();
        Home.browserMethod();
        browser.url(testData.megafood.cart);
        Home.browserMethod();
        this.productName(1).waitForVisible();
    }
}

 export default new Cart();