function data(input) {
    let hours = Number(input[0]);
    let day = input[1];

    if (hours == 10 || hours == 11 || hours == 12 || hours == 13 || hours == 14 || hours == 15 || hours == 16 || hours == 17 || hours == 18) {
        if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday" || day == "Saturday") {
            console.log("open");
        }
        else {
            console.log("closed");
        }
    }
    else {
        console.log("closed");
    }
}
data(["11", "Sunday"]);