// Are /(ABC|abc)/ and /[Aa][Bb][Cc]/ equivalent regex? I
// The former matches nothing but the strings ABC or abc; the latter matches any string consisting of the letters a, b, c in sequence, regardless of case. The string Abc would match the second pattern, but not the first.
