var string = `
0x1234abcd
1,000,000,000s and 1,000,000,000s.
THE quick BROWN fox JUMPS over THE lazy DOG!
`;

var match = string.match(/[^a-z]/gi); //does not work because it has to only include letters
console.log(match);
console.log(match.length);
