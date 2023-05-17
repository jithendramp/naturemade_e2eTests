
import Page from "./page";


class ErinLandingPage extends Page{

    get InstagramBtn(){
        return $(".instagram-section .btn");
    }
    get ErinInstagramPage(){
        return $(".nZSzR h2");
    }

    get ErinInstagramPageNew(){
        return $(".gr27e h1");
    }

    ExploreErinsWork_ReadMore(index){
        return $(`.show-more.articles-container article:nth-child(${index}) div a`);
    }
    ExploreErinsWork_link_title(index){
        return $(`.show-more.articles-container article:nth-child(${index}) h2`);
    }

}
export default new ErinLandingPage();