function fields(string) {
  return string.split(/[ \t,]+/);
}
console.log(
fields("Pete,201,Student"),
// -> ['Pete', '201', 'Student']

fields("Pete \t 201    ,  TA"),
// -> ['Pete', '201', 'TA']

fields("Pete \t 201"),
// -> ['Pete', '201']
);
