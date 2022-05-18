const caesar = function(string, rightShiftCount) {
    let ascii = [];
    for(i = 0; i < string.length; i++){
        ascii.push(string[i].charCodeAt(0))
    }
    return ascii
    //ASCIIaphabet.map(letter => {
//         letter + rightShift
//     })
// };
}
const hello = 'hello'
console.log(caesar('hello', 0))
// console.log(hello[2].charCodeAt())
// Do not edit below this line
module.exports = caesar;

// convert char to ascii
// add num to ascii
// reconvert ascii to char

// how do you wrap the alphabet though?
// if num after addition is larger than the last ascii val (for z), then subtract total ascii alphabet value from the first sum. now you have the ascii value post wrap

// ezpz??????????????