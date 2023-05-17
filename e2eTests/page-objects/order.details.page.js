import Page from "./page";
import testData from "../constants/testData.json";
import Home from "../page-objects/home.page";

class OrderDetails extends Page{
    get total(){
        return $(".c-order-total__value.c-order-total__cell.c-order-total__cell--large");
    }

    get returnToOrderHistoryPage(){
        return $(".back-link");
    }

    get QueryText(){
        return $(".primary p");
    }

    get orderNumber() {
        return $(".primary h2");
    }

    get billingAddressHeading(){
        return $('[aria-label="Payment Information"] tr th:nth-child(2)');
    }

    get paymentTotalHeading(){
        return $('[aria-label="Payment Information"] tr th:nth-child(3)');
    }

    get shippingAddressHeading(){
        return $('[aria-label="Shipping Information"] th:nth-child(1)');
    }

    get shippingStatus(){
        return $('[aria-label="Shipping Information"] th:nth-child(2)');
    } 

    get shippingMethodHeading(){
        return $('[aria-label="Shipping Information"] th:nth-child(3)');
    } 

    get shippingMethod(){
        return $('[data-header="Method"]');
    }
}

export default new OrderDetails();