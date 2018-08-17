var formatDate = function (original_date) {
  return original_date.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1');
};

console.log(
formatDate('2016-06-17'), // -> '17.06.2016'
formatDate('2016/06/17'), // -> '2016/06/17' (no change)
);
