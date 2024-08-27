// Function Declaration vs Function Expression

//Function Declaration
function age(birthyear){
  return 2024 - birthyear;
}
age(2005);

//Funtion Expression
const age2 =function(birthyear){
  return 2024 - birthyear;
}
console.log(age2(2007));
