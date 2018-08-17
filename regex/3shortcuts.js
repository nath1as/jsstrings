var string = `
Hello 4567 bye CDEF - cdef
0x1234 0x5678 0xABCD
1F8A done
`;

var match = string.match(/\s[\dA-F][\dA-F][\dA-F][\dA-F]\s/ig); // js cant use \h
console.log(match);
console.log(match.length);
