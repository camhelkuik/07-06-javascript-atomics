var age= prompt("What is your age?");
age= parseInt(age)

if (Number.isNaN(age)){
  alert("Sorry, that is not a number")
} else if (age >= 25){
  alert("You can rent a car");
  alert("Please don't drink and drive");
  alert("You are eligible for a driver's license");
} else if (age >= 21){
  alert("Please don't drink and drive");
  alert("You are eligible for a driver's license");
} else if (age >= 16){
  alert("You are eligible for a driver's license");
} else if (age > 0){
  alert("You can not drive yet, but you'll be able to in a few years");
} else if (age < 0){
  alert("You haven't been born yet");
}