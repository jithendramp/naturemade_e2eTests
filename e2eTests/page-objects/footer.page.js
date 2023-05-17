import { expect } from "chai";
import Page from "./page";
import Home from "../page-objects/home.page";
import testData from "../constants/testData.json"

class footer extends Page{

get termsOfUSe(){
    return $(`.footer_legal ul li:nth-child(1)`);
}

get subscribe(){
    return $(".needsclick.klaviyo-form.klaviyo-form-version-cid_2.kl-private-reset-css-Xuajs1 input:nth-child(1)");
}

get subscribeFld() {
    return $(".needsclick.go1595054090.kl-private-reset-css-Xuajs1")
}

get submitButton(){
    return $(`.newsletter-form__field-wrapper button`);
}

get subscribeSuccess(){
    return $(`.ql-font-montserrat`);
}

instaFeedImg(index){
    return $(`.shopify-section #insta-feed > a:nth-child(${index}) .instafeed-container`)
}

}   
export default new footer();   



