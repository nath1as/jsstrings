function staggeredCase(string) {
  var counter = 0;
  return string.split('').map(function (char) {
    if (char.match(/[a-z]/ig) && counter % 2 === 0) {
      counter++;
      return char.toUpperCase();
    } else if (char.match(/[a-z]/ig) && counter % 2 !== 0) {
      counter++;
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(
  staggeredCase('I Love Launch School!'),        // "I LoVe lAuNcH ScHoOl!"
  staggeredCase('ALL_CAPS'),                     // "AlL_CaPs"
  staggeredCase('ignore 77 the 444 numbers'),    // "IgNoRe 77 ThE 444 NuMbErS"
);

