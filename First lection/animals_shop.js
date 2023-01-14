function data(input){
    let dogs_food=Number(input[0]);
    let dogs_food1=dogs_food*2.50;
    let cats_food=Number(input[1]);
    let cats_food1=cats_food*4;
    let all_food=cats_food1+dogs_food1;
    let final=`${all_food} lv.`;
    console.log(final);
}
data(['5', '4']);