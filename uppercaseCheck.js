function isUppercase(string) {
  return string.split('').every(function (char) {
    return char === char.toUpperCase();
  })
}
console.log(
  isUppercase('t'),               // false
  isUppercase('T'),               // true
  isUppercase('Four Score'),      // false
  isUppercase('FOUR SCORE'),      // true
  isUppercase('4SCORE!'),         // true
  isUppercase(''),                // true
);
