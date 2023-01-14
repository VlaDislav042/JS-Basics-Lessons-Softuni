function data(input) {
    let allowedMistakes=Number(input[0]);
    let goodGrades=0;
    let badGrades=0;
    let sumGrades=0;
    let allGrades=0
    let index=1;
    let current=input[index];

    while (allowedMistakes>badGrades) {
        current=input[index];
        if (current==="Enough") {
            index=index-2;
            current=input[index];
            console.log(`Average score: ${(sumGrades/allGrades).toFixed(2)}`);
            console.log(`Number of problems: ${allGrades}`);
            console.log(`Last problem: ${current}`);
            break;
        }
        index++;
        current=Number(input[index]);

        if (current>4) {
            goodGrades++;
        }else if (current<=4) {
            badGrades++;
            if (badGrades>=allowedMistakes) {
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        }
        allGrades=goodGrades+badGrades;
        sumGrades=sumGrades+current;
        index++;
    }
}
data(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

