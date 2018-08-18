function removeVowels(string) {
  return string.map(function (word) {
    return word.replace(/[aeiou]/ig, '');
  });
}

console.log(
  removeVowels(['abcdefghijklmnopqrstuvwxyz']),         // ["bcdfghjklmnpqrstvwxyz"]
  removeVowels(['green', 'YELLOW', 'black', 'white']),  // ["grn", "YLLW", "blck", "wht"]
  removeVowels(['ABC', 'AEIOU', 'XYZ']),                // ["BC", "", "XYZ"]
);
