var string = `
What's up, doc?
Say what? No way.
?
Who? What? Where? When? How?
`;

var match = string.match(/^.*\?$/gm);
console.log(match);
console.log(match.length);
