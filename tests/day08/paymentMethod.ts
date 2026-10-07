type PaymentMethod = "UPI" | "CreditCard" | "PayPal";

function makePayment(paymentType: PaymentMethod) {
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