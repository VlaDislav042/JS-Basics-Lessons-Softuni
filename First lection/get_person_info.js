function get_info(input){
 
  let first_name=input[0];
  let second_name=input[1];
  let age=input[2];
  let town=input[3];


  let sentance=`You are ${first_name} ${second_name}, a ${age}-years old person from ${town}.`
  console.log(sentance);
}

get_info(["Vladi", 'Georgiev', 18, 'Stara Zagora']);