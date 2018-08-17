var string = `
http://launchschool.com/
https://mail.google.com/mail/u/0/#inbox
htpps://example.com
Go to http://launchschool.com/
https://user.example.com/test.cgi?a=p&c=0&t=0&g=0 hello
    http://launchschool.com/
`;

var match = string.match(/^https?:\/\/\S*$/gm);
console.log(match);
console.log(match.length);
