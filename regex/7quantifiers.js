var string = `
Mississippi
ziti 0minimize7
inviting illegal iridium
`;

var match = string.match(/\b([a-z]*i){3}[a-z]*\b/gim);
console.log(match);
console.log(match.length);
