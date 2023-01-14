function data(input) {
    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);

    let banana = 0;
    let apple = 0;
    let orange = 0;
    let grapefruit = 0;
    let kiwi = 0;
    let pineapple = 0;
    let grapes = 0;
    let price = 0;

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        switch (fruit) {
            case "banana":
                banana = 2.50;
                price = banana * amount;
                console.log(price.toFixed(2));
                break;
            case "apple":
                apple = 1.20;
                price = apple * amount;
                console.log(price.toFixed(2));
                break;
            case "orange":
                orange = 0.85;
                price = orange * amount;
                console.log(price.toFixed(2));
                break;
            case "grapefruit":
                grapefruit = 1.45;
                price = grapefruit * amount;
                console.log(price.toFixed(2));
                break;
            case "kiwi":
                kiwi = 2.70;
                price = kiwi * amount;
                console.log(price.toFixed(2));
                break;
            case "pineapple":
                pineapple = 5.50;
                price = pineapple * amount;
                console.log(price.toFixed(2));
                break;
            case "grapes":
                grapes = 3.85;
                price = grapes * amount;
                console.log(price.toFixed(2));
                break;

            default:
                console.log("error");
                break;
        }
    }
    else if (day == "Sunday" || day == "Saturday") {
        switch (fruit) {
            case "banana":
                banana = 2.70;
                price = banana * amount;
                console.log(price.toFixed(2));
                break;
            case "apple":
                apple = 1.25;
                price = apple * amount;
                console.log(price.toFixed(2));
                break;
            case "orange":
                orange = 0.90;
                price = orange * amount;
                console.log(price.toFixed(2));
                break;
            case "grapefruit":
                grapefruit = 1.60;
                price = grapefruit * amount;
                console.log(price.toFixed(2));
                break;
            case "kiwi":
                kiwi = 3.00;
                price = kiwi * amount;
                console.log(price.toFixed(2));
                break;
            case "pineapple":
                pineapple = 5.60;
                price = pineapple * amount;
                console.log(price.toFixed(2));
                break;
            case "grapes":
                grapes = 4.20;
                price = grapes * amount;
                console.log(price.toFixed(2));
                break;

            default:
                console.log("error");
                break;
        }
    }
    else{
        console.log("error");
    }
}
data(["apple",

    "Workday",

    "2"]);