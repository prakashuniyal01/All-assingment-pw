function calculateDeliveryTime(packageType) {
    switch (packageType) {
        case "standard":
            console.log("Estimated delivery: 3-5 days");
            break;
        case "express":
            console.log("Estimated delivery: 1-2 days");
            break;
        case "overnight":
            console.log("Estimated delivery: Next day");
            break;
        default:
            console.log("Invalid package type");
    }
}

calculateDeliveryTime("express"); // Output: Estimated delivery: 1-2 days
