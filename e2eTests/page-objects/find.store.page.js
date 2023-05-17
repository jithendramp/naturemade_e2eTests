import Page from "./page";
import testData from "../constants/testData.json";

class FindStore extends Page{

    get pageHeading(){
        return $(".primary h1");
    }

    get subHeading(){
        return $(".primary p");
    }

    get searchByZipCodeBtn(){
        return $(".primary>div:nth-child(2) button");
    }

    get stateDropDown(){
        return $("#dwfrm_storelocator_state select");
    }

    stateOption(stateName){
        return $(`[label="${stateName}"]`);
    }

    get searchByStateBtn(){
        return $(".primary>div:nth-child(3) button");
    }

    get zipCodeInputField(){
        return $(".c-section--border-top div:nth-child(3) input");
    }

    get zipInputErrorMsg(){
        return $(".c-section--border-top div:nth-child(3) p");
    }

    get errorMsgAtTheTop(){
        return $(".c-alert.store-locator-no-results p");
    }

    addressInSearchResult(index){
        return $(`#store-location-results>tbody>tr:nth-child(${index}) td:nth-child(2)`);
    }

}

export default new FindStore();