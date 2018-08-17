var formatDate = function (originalDate) {
  var dateRegex = /^(\d\d\d\d)([\-\/])(\d\d)\2(\d\d)$/;
  return originalDate.replace(dateRegex, '$4.$3.$1');
};

console.log(
formatDate('2016-06-17'), // -> '17.06.2016'
formatDate('2017/05/03'), // -> '03.05.2017'
formatDate('2015/01-31'), // -> '2015/01-31' (no change)
);
