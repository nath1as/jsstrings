var string = `
A grey cat
The lazy dog
The white cat
A loud dog
Go away dog
The ugly rat
The lazy, loud dog
`;

var match = string.match(/^(A|The) [a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z]\b (dog|cat)$/gm);
console.log(match);
console.log(match.length);
