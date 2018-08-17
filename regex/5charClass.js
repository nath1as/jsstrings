var string = `
0x1234
Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.
The quick brown fox jumps over the lazy dog
THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
`;

var match = string.match(/[^xX]/gi); //does not work because it has to only include letters
console.log(match);
console.log(match.length);
