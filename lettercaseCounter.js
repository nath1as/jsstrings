function letterCaseCount(string) {

}
console.log(
  letterCaseCount('abCdef 123'),  // { lowercase: 5, uppercase: 1, neither: 4 }
  letterCaseCount('AbCd +Ef'),    // { lowercase: 3, uppercase: 3, neither: 2 }
  letterCaseCount('123'),         // { lowercase: 0, uppercase: 0, neither: 3 }
  letterCaseCount(''),            // { lowercase: 0, uppercase: 0, neither: 0 }
);
