function data(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let sum = 0;
    let numbers= "";

    for (let i = startNumber; i <= endNumber; i++) {
        if (i % 9 == 0) {
            sum += i;
            numbers+=i+'\n';

        }

    }
    console.log(`The sum of the digits is: ${sum}`);
    console.log(numbers );

}
data(['100', '200']);