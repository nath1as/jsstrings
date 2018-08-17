var string = `
This line has spaces
This,line,has,commas,
No-spaces-or-commas
`;

var match = string.match(/( |,)/g);
console.log(match);
