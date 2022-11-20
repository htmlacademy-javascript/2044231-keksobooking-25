function randomNumber (min, max, numOfDecimals ){
  return +((Math.random() * (max - min + 1)) + min).toFixed(numOfDecimals);
}
randomNumber();
