function letterCaseCount(string) {
  var object = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };
  string.split('').forEach(function (char) {
    if (char.match(/[a-z]/)) {
      object.lowercase++;
    } else if (char.match(/[A-Z]/)) {
      object.uppercase++;
    } else if (char.match(/[^a-z]/i)) {
      object.neither++;
    }
  });
  return object;
}

// alternative:
// function letterCaseCount(string) {
//   var lowerArray = string.match(/[a-z]/g) || [];
//   var upperArray = string.match(/[A-Z]/g) || [];
//   var neitherArray = string.match(/[^a-z]/gi) || [];

//   return {
//     lowercase: lowerArray.length,
//     uppercase: upperArray.length,
//     neither: neitherArray.length,
//   };
// }

console.log(
  letterCaseCount('abCdef 123'),  // { lowercase: 5, uppercase: 1, neither: 4 }
  letterCaseCount('AbCd +Ef'),    // { lowercase: 3, uppercase: 3, neither: 2 }
  letterCaseCount('123'),         // { lowercase: 0, uppercase: 0, neither: 3 }
  letterCaseCount(''),            // { lowercase: 0, uppercase: 0, neither: 0 }
);
