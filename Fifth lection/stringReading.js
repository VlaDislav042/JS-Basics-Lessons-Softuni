function data(input) {
    let text=0;
    while (input[text]!="Stop") {
         

        if(input[text]=="Stop"){
            break;
        }
        console.log(input[text]);
        text++;
    }
}
data(['Nakov',"Sofia","Stop","AfterStop"]);