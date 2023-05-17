import Page from "./page";
import testData from "../constants/testData.json";
import Home from "../page-objects/home.page";

class Probiotic extends Page{
    get heading(){
        return $(".header");
    }

    get probioticImage(){
        return $(".thumb.flex-img");
    }

    get maleIcon(){
        return $('//div[contains(@id, "select-male")]');

    }

    get nextBtn(){
        return $(".step.step-1.active .js-submit-multi.submit-multi");
    }

    get errorfield(){
        return $(".step-select-error.active");
    }
}

export default new Probiotic();