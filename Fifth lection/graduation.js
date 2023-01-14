function data(input) {
    let studentName = String(input[0]);
    let index = 1;
    let sumGrade = 0;
    let current = input[index];
    let badGrades = 0;
    while (index != 13) {
        current = Number(input[index]);

        if (current <= 3.99) {
            badGrades++;
        }
        if (badGrades > 1) {
            console.log(`${studentName} has been excluded at ${index - 1} grade`);
            break;
        }
        sumGrade = sumGrade + current;
        index++;
        current = input[index];
    }
    if (badGrades==0) {
        let averageGrade = sumGrade / 12;
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);

    }

}
data(["Mimi",
    "5",
    "6",
    "5", "6",
    "5",
    "6",
    "6",
    "2",
    "3"])



