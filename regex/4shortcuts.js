var string = `
The red d0g chases the b1ack cat.
a_b c_d
`;

var match = string.match(/[a-z][a-z][a-z]/gi);
console.log(match);
console.log(match.length);
