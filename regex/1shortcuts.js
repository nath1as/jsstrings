var string = `
reds and blues
the lazy cat sleeps
`;

var match = string.match(/\s...\s/gi); //does not work because it has to only include letters
console.log(match);
console.log(match.length);
