function data(input) {
    let startNumber = Number(input[0]);
    let finalNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationsCount = 0;
    let sum = 0;
    let n = 0;
    let j = 0;
    for (n = startNumber; n <= finalNumber; n++) {
        for (j = startNumber; j <= finalNumber; j++) {
            combinationsCount++;
            sum = n + j;
            if (sum === magicNumber) {
                break;
            }
        }
        if (sum === magicNumber) {
            break;
        }
    }
    if (sum === magicNumber) {
        console.log(`Combination N:${combinationsCount} (${n} + ${j} = ${magicNumber})`);


    } else {
        console.log(`${combinationsCount} combinations - neither equals ${magicNumber}`);

    }
}
data(["88", "888", "1000"]);