import Page from "./page";
import testData from "../constants/testData.json";
import Home from "./home.page";

class Landing extends Page{

    
    get myaccountText(){
        return $(".grid.grid--flex .sidebar-nav h3"); 
    }
    
    get logoutBtn(){
        return $(".btn.btn--small.right");
    }

    

}

export default new Landing();