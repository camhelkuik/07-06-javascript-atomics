
var start= prompt("What number do you want to start at?")
start = parseInt(start)

var end= prompt("What number do you want to end at?")
end = parseInt(end)

while (start <= end) {
  if (start % 3 == 0 && start % 5 == 0) {
    console.log("Fizzbuzz");
  }
  else if (start % 3 == 0) {
    console.log("Fizz");
  }
  else if (start % 5 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(start);
  }
  start++
}

for(start; start <= end; start++){
  if (start % 3 == 0 && start % 5 == 0) {
    console.log("Fizzbuzz");
  }
  else if (start % 3 == 0) {
    console.log("Fizz");
  }
  else if (start % 5 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(start);
  }
}