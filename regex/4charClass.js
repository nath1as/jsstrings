var string = `
0x1234
Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.
The quick brown fox jumps over the lazy dog
THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
`;

var match = string.match(/[a-wyz]/gi);
console.log(match);
console.log(match.length);
