var string = `
reds and blues
The lazy cat sleeps.
The number 623 is not a word. Or is it?
`;

var match = string.match(/\b[a-z][a-z][a-z]\b/gim);
console.log(match);
console.log(match.length);
