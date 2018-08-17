var string = `
reds and blues
the lazy cat sleeps
`;

var match = string.match(/\s...\s/gi);
console.log(match);
console.log(match.length);
