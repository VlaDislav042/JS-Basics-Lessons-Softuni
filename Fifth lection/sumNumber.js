function data(input) {
    let firstNumber = Number(input[0]);
    let sum = 0;
    let i = 1;
    while (i < input.length) {
        sum = sum + Number(input[i]);
        if (sum >= firstNumber) {break;}
        i++;
    }
    console.log(sum);

}
data(["100",
    "10",
    "20",
    "30",
    "40"]);
