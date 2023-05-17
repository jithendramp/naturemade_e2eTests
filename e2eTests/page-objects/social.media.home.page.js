import testData from "../constants/testData.json";
import Page from "./page";

class SocialMedia extends Page{

    footerSocialMediaLinks(index){
        return $(`.footer-social.margin-bottom-3:nth-child(4) ul>li:nth-child(${index}) a`);
    }

    get socialMediaLinksHeading(){
        return $(".mf-footer__social-icons p");
    }

    get facebookNMPageTitle() {
        return $(".xw7yly9 h1");
    }

    get twitterNMPageTitle(){
        return $(".css-1dbjc4n.r-1pi2tsx.r-1777fci h2");
    }

    get instagramNMPageTitle(){
        return $("._aa_m h2");
    }

    get nmVitaminsInstaHeading() {
        return $("._a993._a994 .x6s0dn4.x78zum5.x1q0g3np h2")
    }


    get instagramOldhomePageName(){
        return $("._ab9f._ab9m._ab9p._abal._abc5._abcm ");
    }

    get pinterestNMPageTitle() {
        return $(".hjj.zI7.iyn.Hsu h1");
    } 

    get youtubeNMPageTitle(){
        return $("#inner-header-container:nth-child(3) #container");
    }

    get backToTopBtn() {
        return $("#shopify-section-nm-footer .back-to-top")
    }

    get fDAStatement() {
        return $(".footer-disclaimer p");
    }

    footerLegalTermsLinks(index) {
        return $(`.footer_legal > div ul li:nth-child(${index}) a`)
    }

    get footerTermsofuse(){
        return $(`#footer > div.footer_legal > div > div > div:nth-child(2) > ul > li:nth-child(2) > a`);
    }

    get termsAndConditionTitle() {
        return $(".tertiary-hero .col-md-6 h1");
    }

    get accessibilityLink() {
        return $(".footer_legal .cell.medium-6:nth-child(2) ul>li:nth-child(4) button");
    }

    get accessibilityTitle() {
        return $(".main-page-title.page-title.h0")
    }

    get cPSIACertificateTitle() {
        return $("#CATEGORIES-OF-PERSONAL strong")
    }

    get privacyPolicyTitle() {
        return $(".page-width:nth-child(5) h1")
    }

    get PodcastPageHeading(){
        return $(".text-banner h1");
    }

    get bottomDescription(){
        return $(".unassociated-disclaimer");
    }
    
}

export default new SocialMedia();