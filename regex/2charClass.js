var string = `
My cats, Butterscotch and Pudding, like to
sleep on my cot with me, but they cut my sleep
short with acrobatics when breakfast time rolls
around. I need a robotic cat feeder.
`;

var match = string.match(/[bc][aou]t/gi);
console.log(match);
