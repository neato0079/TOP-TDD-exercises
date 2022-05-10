const removeFromArray = function(array, ...removeNumber) {
    // let result = [];
    
    // for(let i of array){
    //     if (!(removeNumber.includes(i))){
    //         result.push(i)
    //     }
    // }
    // return result
    return result = array.filter(num => !(removeNumber.includes(num)));
};

// Do not edit below this line
module.exports = removeFromArray;
