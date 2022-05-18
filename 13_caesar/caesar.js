const caesar = function(string, rightShiftCount) {
    //convert string to lower case
    let lowerString = string.toLowerCase()

    //convert string to ascii
    let asciiArray = [];
    for(i = 0; i < string.length; i++){
        //only convert ascii values over 96
        let currentCharInASCII = lowerString[i].charCodeAt(0);
        if(currentCharInASCII > 96){
            asciiArray.push(currentCharInASCII)
        }else{
            asciiArray.push(lowerString[i])
        }
    }

    //apply shift to ascii array
    asciiArray = asciiArray.map(num => {
        if(typeof num === 'number'){
            return num + rightShiftCount      
        }else{
            return num
        }
    })

    //apply wrap
    asciiArray = asciiArray.map(num => {
        if(num > 122){
            return num - 26      
        }else{
            return num
        }
    })


    //convert ascii array to char array
    let charArray = asciiArray.map(char => {
        if(typeof char === 'number'){
            return String.fromCharCode(char)      
        }else{
            return char
        }
    })

    //reapply capitalization
    // charArray = charArray.map(char =>{
    //     for(i = 0; i < string.length; i++){
    //         if(string[i].toUpperCase() === string[i]){
    //             return char.toUpperCase()
    //         }else{
    //             return char
    //         }
    //     }
    // })

    // charArray = charArray.map(char =>{
    //     console.log(charArray.indexOf(char))
    //     if(string[charArray.indexOf(char)].toUpperCase() === string[charArray.indexOf(char)]){
    //         return char.toUpperCase()
    //     }else{
    //         return char
    //     }
        
    // })

    

    //reapply capitalization
    let charArrayWithCaps = []
    for(i = 0; i < string.length; i++){
        if(string[i].toUpperCase() === string[i]){
            charArrayWithCaps.push(charArray[i].toUpperCase());
        }else{
            charArrayWithCaps.push(charArray[i]);
        }
    }


    //convert char array to string
    let caesarString = charArrayWithCaps.join('')
    

    return caesarString
    //ASCIIaphabet.map(letter => {
//         letter + rightShift
//     })
// };
}
const message = 'Hello, World!'
const word = 'z'
console.log(caesar(message, 5))
// console.log(hello[2].charCodeAt())
// Do not edit below this line
module.exports = caesar;

// convert char to ascii
// add num to ascii
// reconvert ascii to char

// how do you wrap the alphabet though?
// if num after addition is larger than the last ascii val (for z), then subtract total ascii alphabet value from the first sum. now you have the ascii value post wrap

// ezpz??????????????