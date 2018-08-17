var string = `
<h1>Main Heading</h1>
<h1>Another Main Heading</h1>
`;

var match = string.match(/<h1>.*?<\/h1>/gim);
console.log(match);
console.log(match.length);
