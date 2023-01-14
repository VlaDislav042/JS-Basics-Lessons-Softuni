function data(input) {
    let figure=input[0];
    let sideA=Number(input[1]);
    let area=0;
    if (figure=="square"){
        area=sideA*sideA;
    } else if(figure=="rectangle"){
        let sideB=Number(input[2]);
        area=sideA*sideB;
    } else if(figure=="circle"){
        let pi=Math.PI;
        let area1=pi*Math.pow(sideA,2);
        area=area1.toFixed(3);
    } else if(figure=="triangle"){
        let sideB=Number(input[2]);
        area=(sideA*sideB)/2;
    }
    console.log(area);
}
data(["circle", "6","2.5"]);