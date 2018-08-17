function isUrl(string) {
  return !!string.match(/^https*:\/\/\S+$/gim);
}
console.log(
isUrl('http://launchschool.com'),   // -> true
isUrl('https://example.com'),       // -> true
isUrl('https://example.com hello'), // -> false
isUrl('   https://example.com'),    // -> false
);
