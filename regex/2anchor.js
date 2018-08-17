var string = `
The lazy cat sleeps
The number 623 is not a cat
The Alaskan drives a snowcat
`;

var match = string.match(/\bcat$/gm);
console.log(match);
console.log(match.length);
