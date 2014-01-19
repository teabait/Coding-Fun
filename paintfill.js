// run program. Make sure that new color is not same as old color or else program breaks
function paintFill(x,y, newColor) {
  if(image[x][y] != newColor) {
    checkSurroundingPixels(x, y, newColor);
  }
}

// replace original pixel with new color
function changeColor(x, y , newColor) {
  image[x][y] = newColor;
}

//go through pixels that are above, below, left, or right of original pixel
// if it's the same color as original, then change the color to new
// then do the same to that pixel
function checkSurroundingPixels(x,y, newColor) {
  if(image[x+1],[y] === image[x][y]) {
    changeColor(x+1, y, newColor);
    checkSurroundingPixels(x+1,y);
  }

  if(image[x-1][y] === image[x][y]) {
    changeColor(x-1, y, newColor);
    checkSurroundingPixels(x-1,y);
  }

  if(image[x][y+1] === image[x][y]) {
    changeColor(x, y+1, newColor);
    checkSurroundingPixels(x,y+1);
  }

  if(image[x][ y-1] === image[x][y]) {
    changeColor(x, y-1, newColor);
    checkSurroundingPixels(x,y-1);
  }
}
