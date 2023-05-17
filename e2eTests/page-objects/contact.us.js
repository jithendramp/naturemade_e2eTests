import { expect } from "chai";
import Page from "./page";
import Home from "../page-objects/home.page";
import testData from "../constants/testData.json"

class contact extends Page{

 get getInTouch(){
     return $(`//*[@class="text-center"]//*[text()="Get In Touch"]`);
 }

 get contactUsButton(){
     return $(`//*[@class="button button-secondary"]`);
 }

 get inquiryTypeField(){
     return $(`.contact-form .nm__field-group:nth-child(1)  #ContactFormInquiryType `)
 }

 inquiryDropDown (index){
     return $(`.contact-form .nm__field-group:nth-child(1)  #ContactFormInquiryType option:nth-child(${index}) `)
 }

 get complaintType(){
     return $(`#complaint-type:nth-child(4) label`);
 }

 get inquiryType(){
     return $(`#order-inquiry-type:nth-child(2) label`);
 }

 get storePurchased(){
     return $(`//*[@class="nm__field"]//*[text()="Store Purchased"]`);
 }

 get storeLocator(){
     return $(`.ps-widget-wrapper.active div`);
 }

 get whereToBuyLink() {
     return $(".contact-locator")
 }

 get lotNumber(){
     return $(`//*[@class="nm__field"]//*[text()="Lot # or Product Name"]`);
 }

 get submitBtn(){
     return $(`#submit_form:nth-child(1)`);
 }

 get errorTxt(){
     return $(`#contact_form > div:nth-child(6) > div:nth-child(8) > div:nth-child(2) .validation-error`);
 }

 contactUsPage(){
    Home.aboutusMethod();
    Home.aboutUsdropdown(4, 6).waitForVisible();
    Home.aboutUsdropdown(4, 6).click();
    Home.contacUs.waitForVisible();
    expect(Home.contacUs.getText()).to.eql(testData.aboutusdData.contactText);
    browser.scroll(0, 150);
    this.inquiryTypeField.waitForVisible();
    browser.pause(2000);
    this.inquiryTypeField.click();
    expect(this.inquiryDropDown(2).getText()).to.eql(testData.inquiryType.complaints);
    expect(this.inquiryDropDown(3).getText()).to.eql(testData.inquiryType.myOrder);
    expect(this.inquiryDropDown(4).getText()).to.eql(testData.inquiryType.generalProductInquiries);
    expect(this.inquiryDropDown(5).getText()).to.eql(testData.inquiryType.whereToBuy);
    expect(this.inquiryDropDown(6).getText()).to.eql(testData.inquiryType.askANutritionist);
 }

    
}
export default new contact ();