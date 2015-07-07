var user= prompt("Give me a number between 1 and 8:");
user= parseInt(user);

while (user >= 1 && user <= 8){
  var user= prompt("Give me another number:");
}

alert("You went outside the range!");