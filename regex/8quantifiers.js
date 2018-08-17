var string = `
What's up, doc?
I tawt I taw a putty tat!
Thufferin' thuccotath!
Oh my darling, Clementine!
Camptown ladies sing this song, doo dah.
`;

var match = string.match(/\S+$/gim);
console.log(match);
console.log(match.length);
