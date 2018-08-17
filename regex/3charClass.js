var string = `
0xDEADBEEF
1234.5678
Jamaica
plow ahead
`;

var match = string.match(/[0-9a-jA-J]/g);
console.log(match);
console.log(match.length);
