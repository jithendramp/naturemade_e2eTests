import testData from "../constants/testData.json";
import Page from "./page";
import Home from "../page-objects/home.page";
import { expect } from 'chai';
import browserSync from "browser-sync";
import productDetailsPage from "../page-objects/product.details.page";

class Cart extends Page{

get blogTitle() {
    return $(".h1.margin-bottom-1");
}

socialMediaLinks(index) {
    return $(`.social-share-wrapper>ul>li:nth-child(${index}) a`)
}

get createAccBtn() {
    return $("[role = 'button']")
}

get forgottenAccLink() {
    return $(".reset_password.form_row a")
}

get twitterTitle() {
    return $(".css-901oao.r-18jsvk2.r-37j5jr.r-adyw6z.r-b88u0q")
}

get pinterestTitle() {
    return $(".XbT.zI7.iyn.Hsu .Jea.a3i.hs0.zI7.iyn.Hsu h1")
}

get emailField() {
    return $("#newsletter-signup-module .cell.medium-6 label input");
}

get subscribeBtn() {
    return $("#newsletter-signup-module .cell.medium-6 .button")
}















}

export default new Cart();