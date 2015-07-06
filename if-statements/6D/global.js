var age= prompt("What is your age?");
age= parseInt(age)

if (Number.isNaN(age)){
  alert("Sorry, that is not a number")
}

if (age >= 25){
  alert("You can rent a car");
}

if (age >= 21 || age >= 25){
  alert("Please don't drink and drive");
}

if (age >= 16 || age >=21 || age >= 25){
  alert("You are eligible for a driver's license");
} 

if (age <= 0){
  alert("You haven't been born yet");
}

if (age <= 15){
  alert("You can not drive yet, but you'll be able to in a few years");
} 


