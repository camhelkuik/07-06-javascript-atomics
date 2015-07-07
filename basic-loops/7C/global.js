var x= 4;

while (x > 2){
  console.log(x + " bottles of beer on the wall " + x + " bottles of beer, take one down pass it around " + --x + " bottles of beer on the wall");
}

while (x == 2){
  console.log(x + " bottles of beer on the wall " + x + " bottles of beer, take one down pass it around " + --x + " bottle of beer on the wall");
}

while (x == 1){
  console.log(x + " bottle of beer on the wall " + x + " bottle of beer, take one down pass it around " + --x + " bottles of beer on the wall");
}

while (x == 0){
  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  x--
}

for (;x > 2;){
  console.log(x + " bottles of beer on the wall " + x + " bottles of beer, take one down pass it around " + --x + " bottles of beer on the wall");
}

for (;x == 2;){
  console.log(x + " bottles of beer on the wall " + x + " bottles of beer, take one down pass it around " + --x + " bottle of beer on the wall");
}

for (;x == 1;){
  console.log(x + " bottle of beer on the wall " + x + " bottle of beer, take one down pass it around " + --x + " bottles of beer on the wall");
}

for (;x == 0; --x){
  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}