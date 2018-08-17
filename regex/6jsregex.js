function formatDate(string) {
  return string.replace(/\A(\d\d\d\d)-(\d\d)-(\d\d)\z/, '\3.\2.\1');
}

console.log(
formatDate('2016-06-17'), // -> '17.06.2016'
formatDate('2016/06/17'), // -> '2016/06/17' (no change)
);
