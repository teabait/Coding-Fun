// Recreate '99 bottles of beers on the wall'.

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.

// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.

// 96 bottles of beer on the wall, 96 bottles of beer.
// Take one down and pass it around, 95 bottles of beer on the wall.

// 95 bottles of beer on the wall, 95 bottles of beer.
// Take one down and pass it around, 94 bottles of beer on the wall.

// ....

// 3 bottles of beer on the wall, 3 bottles of beer.
// Take one down and pass it around, 2 bottles of beer on the wall.

// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.

// 1 bottle of beer on the wall, 1 bottle of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

for(var i=99; i>=1; i--){
  if(i === 1) {
    console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n")
  } else {
  console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.\nTake one down and pass it around, " + i + " bottles of beer on the wall.\n")
  }
}
