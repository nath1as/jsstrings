var string = `
The lazy cat sleeps.
The number 623 is not a word.
Then, we went to the movies.
Ah. The bus has arrived.
`;

var match = string.match(/^The\b/gm);
console.log(match);
console.log(match.length);
