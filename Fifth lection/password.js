function data(input) {
    let username=input[0];
    let password=input[1];

    let passwordTry=input[2];
    let i=3;
    while (passwordTry != password) {
        passwordTry=input[i];
        i++;
    }
    console.log(`Welcome ${username}`);
}
data(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);
