var string = `
Doc in a big red box.
Hup! 2 3 4
`;

var match = string.match(/\s...\s/gi); //includes 2 3 because the middle space is selected by a .
console.log(match);
console.log(match.length);
