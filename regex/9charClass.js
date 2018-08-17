var string = `
The regex /[^a-z]/i matches any character that is
not a letter. Similarly, /[^0-9]/ matches any
non-digit while /[^A-Z]/ matches any character
that is not an uppercase letter. Beware: /[^+-<]/
is at best obscure, and may even be wrong.
`;

var match = string.match(/\[\^[0-9A-Za-z]-[0-9A-Za-z]\]/g);
console.log(match);
console.log(match.length);
