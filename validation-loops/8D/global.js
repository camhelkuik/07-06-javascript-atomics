var number1= prompt("What is the length of side 1?");
number1= parseInt(number1);

var number2= prompt("What is the length of side 2?");
number2= parseInt(number2);

var number3= prompt("What is the length of side 3?");
number3= parseInt(number3);

var calc1= (number1 + number2) > number3
console.log(calc1)

var calc2= (number2 + number3) > number1
console.log(calc2)

var calc3= (number1 + number3) > number2
console.log(calc3)

while (calc1 == false || calc2 == false || calc3 == false){
  alert("This is NOT a valid triangle");
  var number1= prompt("What is the length of side 1?");
  number1= parseInt(number1);

  var number2= prompt("What is the length of side 2?");
  number2= parseInt(number2);

  var number3= prompt("What is the length of side 3?");
  number3= parseInt(number3);

  var calc1= (number1 + number2) > number3
  console.log(calc1)
  
  var calc2= (number2 + number3) > number1
  console.log(calc2)
  
  var calc3= (number1 + number3) > number2
  console.log(calc3)
} 

alert("This is a valid triangle!");
  
  
  


