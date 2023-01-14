function data(input) {
    let food=input[0];
    let town=input[1];
    let amount=input[2];
    let food1;

    if (town=="Sofia") {
        if (food=="coffee") {
            food1=amount*0.50;
            console.log(food1);
        }
        else if(food=="water"){
            food1=amount*0.80;
            console.log(food1);
        }
        else if(food=="beer"){
            food1=amount*1.20;
            console.log(food1);
        }
        else if(food=="sweets"){
            food1=amount*1.45;
            console.log(food1);
        }
        else if(food=="peanuts"){
            food1=amount*1.60;
            console.log(food1);
        }
    }
    if (town=="Plovdiv") {
        if (food=="coffee") {
            food1=amount*0.40;
            console.log(food1);
        }
        else if(food=="water"){
            food1=amount*0.70;
            console.log(food1);
        }
        else if(food=="beer"){
            food1=amount*1.15;
            console.log(food1);
        }
        else if(food=="sweets"){
            food1=amount*1.30;
            console.log(food1);
        }
        else if(food=="peanuts"){
            food1=amount*1.50;
            console.log(food1);
        }
    }
    if (town=="Varna") {
        if (food=="coffee") {
            food1=amount*0.45;
            console.log(food1);
        }
        else if(food=="water"){
            food1=amount*0.70;
            console.log(food1);
        }
        else if(food=="beer"){
            food1=amount*1.10;
            console.log(food1);
        }
        else if(food=="sweets"){
            food1=amount*1.35;
            console.log(food1);
        }
        else if(food=="peanuts"){
            food1=amount*1.55;
            console.log(food1);
        }
    }
}
data(["beer", "Sofia", "2"]);