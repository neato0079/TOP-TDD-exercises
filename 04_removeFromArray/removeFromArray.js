const removeFromArray = function(array, removeNumber) {
    let result = array;
    for(let i= 1;i < arguments.length; i++){
        console.log(arguments[i])
        result = array.filter(number => number !== arguments[i])
        console.log(result)
    }
    return result;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
module.exports = removeFromArray;
