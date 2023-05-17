import Page from "./page";
import { expect } from 'chai';
import testData from "../constants/testData.json";
import Landing from "../page-objects/account.landing.page";
import Home from "../page-objects/home.page";
import productDetailsPage from "../page-objects/product.details.page";
import CartPage from "../page-objects/cart.page";
import Shipping from "../page-objects/shipping.page";


class PlaceOrder extends Page{

    productNames(index){
        return $(`#cart-table tbody tr:nth-child(${index}) a`);
    }

    eachProdTotal(index){
        return $(`#cart-table tbody tr:nth-child(${index}) .c-cart-table__cell.item-total`);
    }

    get subtotal(){
        return $(".c-order-total__body tr:nth-child(1) td");
    }

    get shippingTax(){
        return $(".c-order-total__body tr:nth-child(2) td");
    }

    get salesTax(){
        return $(".c-order-total__body tr:nth-child(3) td");
    }

    get orderTotal(){
        return $(".c-order-total__body tr:nth-child(4) td");
    }

    get shippingAddressHeading(){
        return $(".summary  .summary-box:nth-child(2) h2");
    }

    get billingAddressHeading(){
        return $(".summary  .summary-box:nth-child(3) h2");
    }

    get shippingMethodName(){
        return $("minishipments-method");
    }

    get cardDetailsHeading(){
        return $(".summary  .summary-box:nth-child(4) h2");
    }

    editBtn(index){
        return $(`.summary  .summary-box:nth-child(${index}) a`);
    }
}

export default new PlaceOrder();