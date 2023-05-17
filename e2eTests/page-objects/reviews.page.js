import Page from "./page";
import testData from "../constants/testData.json";

class Review extends Page{

get reviewPageHeading(){
    return $(".pdp-3pc:nth-child(3)>h2");
}

}

export default new Review();