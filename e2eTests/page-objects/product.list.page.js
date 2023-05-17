import testData from "../constants/testData.json";
import Page from "./page";
import homePage from "./home.page";
import productDetailsPage from "../page-objects/product.details.page";
import { expect } from 'chai';

var getCardCount;

class ProductList extends Page{


productTitle(index1, index2, index3){
    return $(`.sub-collection-product-list.grid-x.grid-padding-x:nth-child(${index1}) .ais-InfiniteHits-item:nth-child(${index2}) .item-title:nth-child(${index3})`)
}

productTitle1(index1, index2){
    return $(` .sub-collection-product-list.grid-x.grid-padding-x:nth-child(${index1}) .ais-InfiniteHits-item:nth-child(${index2}) .item-title`)
}

prodTitlesForFilterUnFilter(index) {
    return $(`.grid-container.margin-bottom-4 #CollectionProductGrid .collection-section:nth-child(1) ol>li:nth-child(${index}) .item-content .item-title`)
}

// priceOptionsInFiltrPopup(index) {
//     return $(`.products-list-filters:nth-child(2) .filter-item-group.js-filter:nth-child(1) ul>li:nth-child(${index}) input`)
// }

productTitleAfterClr(index){
    return $(`.grid-container.margin-bottom-4 #CollectionProductGrid .collection-section:nth-child(1) ol>li:nth-child(${index}) .item-content .item-title`)
}

productTitleForAsc(index1, index2){
    return $(`.grid-container.margin-bottom-4 #CollectionProductGrid .collection-section:nth-child(${index1}) ol>li:nth-child(${index2}) .item-content .item-title`)
}

productTitleForAppliedPrice(index) {
    return $(`.hits-container-product div:nth-child(6) ol>li:nth-child(${index}) .item-title a`)
}

get marketingCardDescription() {
    return $(".ais-InfiniteHits>ol>li:nth-child(1) .item-content .item-description small");
}

get itemNotAvailableTitle() {
    return $("#tab-1 h3");
}


resourceSecrtionBlogimg(index) {
    return $(`#related-resources:nth-child(1) .ais-Hits>ol>li:nth-child(${index}) img`)
}

resourceSectionBlogText(index) {
    return $(`#related-resources:nth-child(1) .ais-Hits>ol>li:nth-child(${index}) h3`)
}

resouceSectionBlogMinReadLink(index) {
    return $(`#related-resources:nth-child(1) .ais-Hits>ol>li:nth-child(${index}) .read-time-wrapper`)
}

get productListHeading() {
    return $(".sub-collection-template-title");
}

get headingPLP(){
    return $(`.grid-container h1`);
}

showMoreLinkInFilterPopup(index) {
    return $(`.products-list-filters:nth-child(2) .filter-item-group.js-filter:nth-child(${index}) .show-more-filter `)
}

get sorryWeCoulntFindUrProd() {
    return $(".collection-section.shopify-section:nth-child(1) .collection.collection--empty ")
}

get searchResultPgMarketingCard() {
    return $("#search-results-list #tab-1 .ais-InfiniteHits >ol>li:nth-child(1) .item-container a");
}

 productListPageimgs(index) {
     return $(`.grid-container.margin-bottom-4 #CollectionProductGrid .inner-collection:nth-child(2) ol>li:nth-child(${index}) img`)
 }

 productListPageTitles(index) {
    return $(`#CollectionProductGrid .inner-collection:nth-child(2) ol>li:nth-child(${index}) .item-title p`)
}

productsTitles(index) {
    return $(`#search-results-list #tab-1 .ais-InfiniteHits >ol>li:nth-child(${index}) .item-title a p`)
}

productImgs(index){
    return $(`#search-results-list #tab-1 .ais-InfiniteHits >ol>li:nth-child(${index}) img`)
}

searchedPLPProdTitles(index) {
    return $(`#search-results-list #search-products-list ol>li:nth-child(${index}) .item-title a`)
}

get soldOutProdInBonePLP() {
    return $("#SubCollectionProductGrid .collection-section:nth-child(5) ol>li:nth-child(9) .item-status.has-dark-gray-text")
}

get soldOutProdTitleInBonePLP() {
    return $("#SubCollectionProductGrid .collection-section:nth-child(5) ol>li:nth-child(9) .item-title")
}

get notifyBtnBonePLP() {
    return $("#SubCollectionProductGrid .collection-section:nth-child(5) ol>li:nth-child(9) .product-form__buttons a")
}

favPopupHeartIcons(index) {
    return $(`#wishlist-product-list-modal .ais-InfiniteHits>ol>li:nth-child(${index}) .item-content button`)
}

get favCount() {
    return $("#wishlist-product-list-modal .products-modal-header .items-count")
}

get favPopupCloseIcon() {
    return $(".fancybox-button.fancybox-close-small svg")
}

get searchResultTitle() {
    return $("#search-title");
}

get title() {
    return $(".content-for-layout.focus-none h1")
}

get viewAllResourceLink() {
    return $("#related-resources:nth-child(1) .cell.medium-12 a")
}

favIcons(index) {
    return $(` #CollectionProductGrid .collection-section:nth-child(1) ol>li:nth-child(${index}) .item-content .btn-heart`)
}

wellBlendsArticleandResrcImgs(index) {
    return $(`.grid-x.grid-padding-x:nth-child(2) .resource-item-wrapper.cell.medium-4:nth-child(${index}) a img`)
}

wellBlendsArticleandResrcMinReadLinks(index) {
    return $(`.grid-padding-x:nth-child(2) .resource-item-wrapper.cell.medium-4:nth-child(${index}) .read-time-wrapper`)
}

wellBlendsArticleandResrcTitles(index) {
    return $(`.grid-x.grid-padding-x:nth-child(2) .resource-item-wrapper.cell.medium-4:nth-child(${index}) h3`)
}

wellBlendsAticleResrcSub_Titles(index){
    return $(`.grid-x.grid-padding-x:nth-child(2) .resource-item-wrapper.cell.medium-4:nth-child(${index}) .featured-tag.uppercase`)
}

wellblndsFinderToolBtns(index) {
    return $(`.filters-list-wrapper div:nth-child(${index}) h5`)
}

finderToolBtnDownArrows(index) {
    return $(`.filters-list-wrapper div:nth-child(${index}) h5 svg:nth-child(1)`)
}

myIssueCheckboxes(index){
    return $(`.products-list-filters .filter-items-wrapper-1 li:nth-child(${index}) input`)
}

iNeedCheckboxes(index) {
    return $(`.products-list-finders-wrapper .filter-options-group:nth-child(2) ul>li:nth-child(${index}) input`)
}

iDLikeToCheckboxes(index) {
    return $(`.products-list-finders-wrapper .filter-options-group:nth-child(3) ul>li:nth-child(${index}) input`)
}

findertoolSortedProdctsTtle(index) {
    return $(`.grid-x.grid-padding-x .ais-InfiniteHits>ol>li:nth-child(${index}) .item-title a`)
}

finderToolProdPrice(index) {
    return $(`.grid-x.grid-padding-x .ais-InfiniteHits>ol>li:nth-child(${index}) .item-price `)
}

get featureField() {
  return $(".nice-select.ais-SortBy-select2 span ");
}

sortByDropdowns(index) {
    return $(`.nice-select.ais-SortBy-select2 ul li:nth-child(${index})`)
}

get wellBlendsBlogTitle() {
    return $(".h1.margin-bottom-1")
}

discoverYourIdealBlendsLinks(index) {
    return $(`.wellblends-collection-description:nth-child(1) .wellblends-collection-description__cta button:nth-child(${index})`)
}

get wellBlendsSleepArtcileTitle() {
    return $(".related-resources.wellblends-collection-related-resources .grid-container h2 ")
}

get wellBlendsSleepArticleSub_title() {
    return $(".related-resources.wellblends-collection-related-resources .margin-bottom-3");
}

get getTheSleepOfYourDreamstitle() {
    return $(".wellblends-collection-hero.wellblends-collection-hero--blue .wellblends-collection-hero__wrapper h1");
}

get findYourZenTitle() {
    return $(".wellblends-collection-hero--green .wellblends-collection-hero__content h1")
}

get yourImmuneHealthTitle() {
    return $(".wellblends-collection-hero--orange .wellblends-collection-hero__content h1")
}

get yourSleepsNeedsAreUniqueTitle() {
    return $(".margin-bottom-2")
}

productTitleForDesc(index){
    return $(`.grid-container.margin-bottom-4 #CollectionProductGrid .collection-section:nth-child(2) ol>li:nth-child(${index}) .item-content .item-title`)
}

pLPProductTitles(index) {
    return $(`.focus-none>div:nth-child(2) .cell.small-6.medium-6.large-4:nth-child(${index})  h4 a`)
}

get sortBy(){
    return $(".sort-by-product")
}

get filterIcon(){
    return $(".filter-by-product")
}

filterOptions(index) {
    return $(`.filter-item-group.js-filter.hide-facet:nth-child(${index}) .refinement-list-title`)
}

get filterBy(){
   return $(".products-list-filters-title")
}

get priceFilter(){
    return $(".filter-item-group:nth-child(1) .filter-items-wrapper li:nth-child(1) input")
}

priceFilters(index){
    return $(`.filter-item-group:nth-child(1) ul li:nth-child(${index}) input`)
}

countFilter(index) {
    return $(`.filter-item-group:nth-child(2) .filter-items-wrapper li:nth-child(${index}) input`);
}

formFilter(index) {
    return $(`.filter-item-group:nth-child(3) .filter-items-wrapper li:nth-child(${index}) input`)
}

benefitsFilter(index) {
    return $(`.filter-item-group:nth-child(4) .filter-items-wrapper li:nth-child(${index}) input`)
}

ingridientsFilter(index) {
    return $(`.filter-item-group:nth-child(5) .filter-items-wrapper li:nth-child(${index}) input`)
}

get gummyCheckBox(){
   return $("#filter_options_product_type_gummy")
}

gummyCheckbox(index) {
    return $(`.products-list-filters .filter-item-group:nth-child(2) ul>li:nth-child(${index}) input`)
}

get finderToolClearFltrLink() {
    return $(`.clear-filters.is-active`)
}

get clearFilterLink(){
    return $(".clear-filters.text-center a")
}

get applyFiltersBtn(){
    return $(".button.button-primary.is-full")
}

get gummyCancelIcon(){
    return $(".checked-filter-tags.active-facets-desktop .filter-tabs a")
}

get featured(){
    return $(".sort-by-product:nth-child(2) .ais-SortBy");
}

get priceAsc(){
    return $(`.ais-SortBy ul>li:nth-child(4)`)
}

get priceDesc(){
    return $(`#sort-by ul>li:nth-child(5)`)
}

get productImage(){
    return $(".hits-container-product ol li:nth-child(1) img")
}

get productName(){
    return $(".product__title.show-for-medium")
}
get bannerTitle() {
    return $(".cell.medium-6.text-left.content_wrapper h1")
}

get wellblends_Title() {
    return $(".wellblends-scroll-block__title:nth-child(1)");
}
get productTitle2(){
    return $(".ais-InfiniteHits-item:nth-child(1) .item-title")
}

productsRatings(index){
    return $(` #CollectionProductGrid .inner-collection:nth-child(2) ol>li:nth-child(${index}) .rating-star.color-icon-text`)
}

productBuyNowBtn(index){
    return $(` #CollectionProductGrid .collection-section:nth-child(1) ol>li:nth-child(${index}) .item-content .product-form__buttons a `)
}

get showMoreResultLink(){
    return $("#CollectionProductGrid .inner-collection:nth-child(2) .ais-InfiniteHits-loadMore")
}

get productTitle3(){
    return $(".ais-InfiniteHits-item:nth-child(15) .item-title")
}

get productTitle4(){
    return $(".ais-InfiniteHits-item:nth-child(16) .item-title")
}

get healthArticlesTitle() {
    return $(".static-image-hero.is-small h1")
}

bundlesInPLP_BuyNowBtns(index) {
    return $(`.ais-InfiniteHits-item:nth-child(${index}) .button`)
}

exclusiveFlags(index) {
    return $(`#tab-1 .ais-InfiniteHits>ol>li:nth-child(${index}) .item-status.has-red-background`)
}


cardCount() {
    let i = browser.elements('.hits-container-product div:nth-child(6) ol>li .item-container').value.length;
    return i
}

productPriceAfterApldPriceFilter(index) {
    return $(`.hits-container-product div:nth-child(6) ol>li:nth-child(${index}) .item-price`)
}

productFilterOptions(index) {
    return $(`.products-list-filters:nth-child(2) .filter-item-group.js-filter:nth-child(${index}) h5`)
}



cardPriceForAfterFilterApplied(){
    getCardCount = this.cardCount();
    for(let i=1; i<=getCardCount; i++){
    var success = true;
    var getProdPrice = this.productPriceAfterApldPriceFilter(i).getText();
    var getPriceSplit = getProdPrice.split("$")
    if(getPriceSplit[1]<=10){
        var success = false;
        console = "Filter price is applied"
    }

    if(success === false) {
        browser.waitUntil(
            function() {
                return (
                browser.isVisible(
                    '#general'
                ) === true
                );
            },
            20000,
            "filter price is not applied"
        );
    }
    }




}

}

export default new ProductList();