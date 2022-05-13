const palindromes = function (word) {
    word = word.toUpperCase()
    let wordArray = word.split('')
    //filter out punc
    const noPunct = wordArray.filter(char => !(char.charCodeAt(0) < 48 || char.charCodeAt(0) > 90)).join('')
    
    const reverse = noPunct.split('').reverse().join('');
    if(noPunct === reverse){
        return true;
    }else{
        return false;
    }
};

console.log(palindromes('Racecar!'))

// Do not edit below this line
module.exports = palindromes;
