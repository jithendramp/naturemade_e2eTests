import { expect } from "chai";
import Page from "./page";

class gmail extends Page{

    get gmail_link() {
        return $("..gb_qa.gb_Wa.gb_Te.gb_Jc .gb_ae.gb_i.gb_xg.gb_og div:nth-child(1)")
    }


    get emailField(){
        return $(".inboxform-input input");
    }

    get viewInboxBtn(){
        return $(".nav-right .inboxform-container button");
    }

    get msgListHeading(){
        return $(".messagelist-container a .messagelist-from");
    }

    get msgListSubject(){
        return $(".messagelist-container a .messagelist-subject span");
    }

    get ResetYourPasswordLink(){
        return $(".actions__cell .button__cell a");
    }

    get email_input(){
        // return $(".rFrNMe.N3Hzgf.jjwyfe.QBQrY.zKHdkd.sdJrJc.Tyc9J .Xb9hP input")
        // return $(".form-group.col-md-24 input:nth-child(1)")
        // return $(".nw input:nth-child(2)")
        return $("input[placeholder='Enter your inbox here']")
    }
    get emailForwardArrow() {
        return $("button[title='Check Inbox @yopmail.com']")
    }
    get password_input(){
        // return $(".PrDSKc input")
        return $(".form-group.col-md-24 input")
    }
    get nextBtn(){
        // return $(".VfPpkd-dgl2Hf-ppHlrf-sM5MNb button")
        return $(".col-xs-24.no-padding-left-right.button-container input")
    }
    get outlook_signinBtn(){
        return $(".auxiliary-actions li:nth-child(2) a")
    }
    get checkInbox(){
        return $(".sbut")
    }
    get checkforNewEmails(){
        return $(".mgif.irefresh.b")
    }
    get one_one_meeting_contentTitle(){
        return $(".bodymail h1")
    }
    get email_content(){
        return $(".bodymail #mail div:nth-child(2)>div")
    }
    get deleteicon(){
        return $(".mgif.lmenudel.nw.bara")
    }
    get accessroomBtn(){
        return $("#mail div:nth-child(2) a")
    }
    get footerText() {
        return $("#mail div:nth-child(3) div:nth-child(2)")
    }
    get regConfirmBtn() {
        return $("//*[text()='Confirm your account']")
    }
    get loginInformationTitle(){
        return $(".register__slide__title")
    }
    get confirmYourAccountBtn(){
        return $("#mail div:nth-child(2) a:nth-child(1)")
    }
    get refreshForNewMails() {
        return $(".wminboxheader #refresh")
    }
    get profileTitle(){
        return $(".register__slide__title")
    }
    get xlsx() {
        return $(".md.but.pj.text.f24.nw span")
    }
    get emailContent() {
        return $(".ellipsis.nw.b.f18")
    }
    checkinbox_changeiframe(checkemail){
        this.email_input.waitForVisible()
        expect(this.email_input.isVisible()).to.eql(true)
        this.email_input.setValue(checkemail)
        this.emailForwardArrow.waitForVisible()
        this.emailForwardArrow.click()
        Home.browserMethod();
        this.refreshForNewMails.waitForVisible()
        this.refreshForNewMails.click()
        const frameValue = browser.element('#ifmail').value;
        browser.frame(frameValue);
        Home.browserMethod();
    }
    
}
export default new gmail();