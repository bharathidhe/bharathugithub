"use strict";
function makePayment(paymentType) {
    switch (paymentType) {
        case "UPI":
            console.log("UPI payment method is chosen");
            break;
        case "CreditCard":
            console.log("CreditCard payment method is chosen");
            break;
        case "PayPal":
            console.log("PayPal payment method is chosen");
            break;
    }
}
makePayment("UPI");
