function data(input) {
    let i = 0;
    while (input[i] !== 'End') {
        if (!+input[i]) {
            console.log(`Going to ${input[i]}!`)
        }
        i++;
    }

}
data(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"])