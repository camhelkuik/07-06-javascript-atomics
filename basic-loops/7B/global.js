var start= prompt("What number would you like to start counting at?");
start= parseInt(start);

var end= prompt("What number would you like to end counting?");
end= parseInt(end);

var counter= prompt("What would you like to count by?");
counter= parseInt(counter);

if (start > end){
  while (start >= end){
    console.log(start);
    start -= counter;
  }
}else {
  while (start <= end){
    console.log(start);
    start += counter;
  }
}

var start= prompt("What number would you like to start counting at?");
start= parseInt(start);

var end= prompt("What number would you like to end counting?");
end= parseInt(end);

var counter= prompt("What would you like to count by?");
counter= parseInt(counter);

if (start < end){
  for(start; start <= end; start += counter){
    console.log(start);
  }
} else {
  for(start; start >= end; start -= counter){
    console.log(start);
  }
}
  
  
  
  
