function data(input) {
    let word=input[0];
    let password="s3cr3t!P@ssw0rd";
    if(word == password){
        console.log("Welcome");
    } else{
        console.log("Wrong password!");
    }
}
 data(["s3cr3t!P@ssw0rd"]);