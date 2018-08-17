var string = `
To be or not to be
Be a busy bee
I brake for animals.
`;

var match = string.match(/\bb[a-z]*e\b/gm);
console.log(match);
console.log(match.length);
