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
    let shiftedAsciiArray = asciiArray.map(num => {
        if(typeof num === 'number'){
            return num + rightShiftCount      
        }else{
            //we're not trying to shift punctuation so return if it's a punctuation
            return num
        }
    })

    //apply wrap
    let wrappedAsciiArray = [];
    for(i = 0; i < shiftedAsciiArray.length; i++){
        let originalASCIIVal = asciiArray[i];
        let shiftedASCIIVal = shiftedAsciiArray[i];
        if(typeof originalASCIIVal !== 'number'){
            //if the current shifted char is some kind of punctuation, it is returned
            wrappedAsciiArray.push(shiftedASCIIVal)
        }else if(shiftedASCIIVal > 122){
            //wrapping the back of the alphabet
            while(shiftedASCIIVal > 122){
                shiftedASCIIVal = 96 + (shiftedASCIIVal - 122)
            }
            wrappedAsciiArray.push(shiftedASCIIVal)
        }else if(shiftedASCIIVal < 97){
            //wrapping the front of the alphabet
            while(shiftedASCIIVal < 97){
                shiftedASCIIVal = 123 - (97 - shiftedASCIIVal)
            }
            wrappedAsciiArray.push(shiftedASCIIVal)
        }else{
            //if the current shifted char is within the bounds of the alphabet then return it
            wrappedAsciiArray.push(shiftedASCIIVal)
        }

    }
    


    //convert ascii array to char array
    let charArray = wrappedAsciiArray.map(char => {
        if(typeof char === 'number'){
            return String.fromCharCode(char)      
        }else{
            return char
        }
    })
  

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
    

    // console.log(charArrayWithCaps)
    return caesarString

}
const message = 'Hello, World!'
const word = 'z'
console.log(caesar(message, 75))

// Do not edit below this line
module.exports = caesar;