var string = `
,123,456,789,123,345,
,123,456,,789,123,
,23,56,7,
,13,45,78,23,45,34,
,13,45,78,23,45,34,56,
`;

var match = string.match(/^,(\d+,){3,6}$/gim);
console.log(match);
console.log(match.length);
