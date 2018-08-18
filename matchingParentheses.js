function isBalanced(string) {
  var balance = 0;

  string.split('').forEach(function (char) {
    if (char === '(' && balance >= 0) {
      balance++;
      return char;
    } else if (char === ')' && balance >= 0) {
      balance--;
      return char;
    } 
  });

  return (balance === 0);

}

console.log(
  isBalanced('What (is) this?'),        // true
  isBalanced('What is) this?'),         // false
  isBalanced('What (is this?'),         // false
  isBalanced('((What) (is this))?'),    // true
  isBalanced('((What)) (is this))?'),   // false
  isBalanced('Hey!'),                   // true
  isBalanced(')Hey!('),                 // false
  isBalanced('What ((is))) up('),       // false
);
