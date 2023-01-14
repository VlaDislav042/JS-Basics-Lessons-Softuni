function data(input) {
    let number = Number(input[0]);

    if (number <= 200 && number >= 100) {
        if (number === 0) {
            console.log();
        }
    }
    else {
        console.log("invalid");
    }
}
data(["0"]);