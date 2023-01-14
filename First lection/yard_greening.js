function data(input){
    let area=input[0];
    let price=area*7.61;
    let discount=price*0.18;
    let final_price=price-discount;
    let final=`The final price is: ${final_price} lv.`;
    let final1=`The discount is: ${discount} lv.`;


    console.log(final);
    console.log(final1);
}
data(['550']);