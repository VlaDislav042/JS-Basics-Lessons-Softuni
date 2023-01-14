function data(input){
    let name=input[0];
    let projects=Number(input[1]);
    let projects1=projects*3;
    let final=`The architect ${name} will need ${projects1} hours to complete ${projects} project/s.`;
    console.log(final);
}
data(['George', '4']);